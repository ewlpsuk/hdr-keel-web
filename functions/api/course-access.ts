/**
 * HDR Keel course access verification - Cloudflare Pages Function.
 *
 * The course pages on hdrkeel.co.uk are a STATIC export; they cannot read the
 * course_access table themselves. This single Function does the lookup
 * server-side (never client-side) when a learner opens a course with
 * ?access=<token>.
 *
 * Endpoint: GET /api/course-access?access=<token>&level=<slug>
 *   - Looks the token up in Supabase course_access (service role, from a
 *     Cloudflare secret - never exposed to the browser).
 *   - Returns { granted: true, products: ["fundamentals",...] } if the token is
 *     a live, non-revoked grant, else { granted: false }.
 *
 * RLS note: course_access allows service_role all (see the Compass migration).
 * This Function calls Supabase with the service role key held in a Cloudflare
 * environment variable - it is server-side only.
 */

export async function onRequestGet(context: {
  request: Request;
  env: {
    NEXT_PUBLIC_SUPABASE_URL?: string;
    SUPABASE_SERVICE_ROLE_KEY?: string;
  };
}) {
  const { request, env } = context;
  const url = new URL(request.url);

  const SUPABASE_URL = env.NEXT_PUBLIC_SUPABASE_URL;
  const SERVICE_ROLE_KEY = env.SUPABASE_SERVICE_ROLE_KEY;
  if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
    return Response.json(
      { granted: false, error: "course access not configured" },
      { status: 500 },
    );
  }

  const token = url.searchParams.get("access");
  if (!token) {
    return Response.json({ granted: false }, { status: 200 });
  }

  // Look the token up via the Supabase REST API with the service role key
  // (the RLS policy on course_access allows service_role only; this key is a
  // Cloudflare secret and never reaches the browser).
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/course_access?access_token=eq.${encodeURIComponent(token)}&select=product,status`,
    {
      headers: {
        apikey: SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      },
    },
  );

  if (res.status === 200) {
    const rows = (await res.json()) as Array<{
      product: string;
      status: string;
    }>;
    const granted = rows.find((r) => r.status === "granted");

    // Map a single grant to the products it unlocks (full unlocks all three).
    const unlockMap: Record<string, string[]> = {
      fundamentals: ["fundamentals"],
      craft: ["craft"],
      command: ["command"],
      full: ["fundamentals", "craft", "command"],
    };

    if (granted) {
      return Response.json({
        granted: true,
        products: unlockMap[granted.product] ?? [granted.product],
      });
    }
  }

  return Response.json({ granted: false }, { status: 200 });
}

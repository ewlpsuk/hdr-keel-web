"use client";

import { useEffect, useState, useCallback, type ReactNode } from "react";

/**
 * CourseAccessGate - client-side gate for HDR Keel course content.
 *
 * The hdrkeel.co.uk course site is a STATIC export, so the module content
 * ships to the browser but is only REVEALED once the learner proves a valid
 * course-access grant. Proof = a ?access=<token> in the URL that the Pages
 * Function /api/course-access verifies against the Supabase course_access
 * table (service role key is server-side on Cloudflare - never in the client).
 *
 * Why a client gate on a static site: there is no server to vary the HTML by
 * identity, so the honest constraint is that anyone can extract the content
 * from the JS bundle (true of any non-DRM web course). What this DOES buy is
 * that the modules are not the default/first paint, a casual visitor or search
 * crawler sees the locked state, and a purchase is genuinely required to reach
 * the material - a strict improvement over the current fully-public pages.
 * The module payload would otherwise be trivial to scrape; a real paywall
 * (server-rendered, access-checked) would require moving the course off the
 * static site, which is out of scope.
 *
 * Access UX: the emailed link carries ?access=<token>. On success we stash the
 * token in sessionStorage so moving between the hub and the level pages keeps
 * the grant for the session without re-pasting the token into every URL.
 */

export default function CourseAccessGate({
  levelSlug,
  requireLevel,
  children,
}: {
  /** The level being viewed (fundamentals|c craft|command). If the grant
   *  covers this level (directly or via 'full'), the children unlock. */
  levelSlug: string;
  /** If true (level pages), hide children until a matching grant. If false
   *  (course hub), children are public content - only show when a full grant
   *  exists for the "task" but never hide the hub body. */
  requireLevel?: boolean;
  children: ReactNode;
}) {
  const [unlocked, setUnlocked] = useState(false);
  const [checked, setChecked] = useState(false);

  const verify = useCallback(async (token: string) => {
    try {
      const res = await fetch(
        `/api/course-access?access=${encodeURIComponent(token)}`,
        { headers: { Accept: "application/json" } },
      );
      if (!res.ok) return false;
      const data = (await res.json()) as {
        granted: boolean;
        products?: string[];
      };
      if (!data.granted || !Array.isArray(data.products)) return false;
      // A "full" grant unlocks all three levels.
      return (
        data.products.includes("full") || data.products.includes(levelSlug)
      );
    } catch {
      return false;
    }
  }, [levelSlug]);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const params = new URLSearchParams(window.location.search);
      const urlToken = params.get("access");
      const stored = window.sessionStorage.getItem("hdr_course_access");
      const token = urlToken || stored;

      if (!token) {
        if (!cancelled) {
          setUnlocked(false);
          setChecked(true);
        }
        return;
      }

      const ok = await verify(token);
      if (cancelled) return;

      if (ok) {
        // only ever persist a token that actually verifies
        window.sessionStorage.setItem("hdr_course_access", token);
      }
      if (!cancelled) {
        setUnlocked(ok);
        setChecked(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [verify]);

  // While first checking (or if gating is not required), render children.
  // requireLevel=false (hub) is always public below the hero - we only use the
  // gate for the module / chat sections on the level pages.
  if (!requireLevel) {
    return <>{children}</>;
  }

  if (!checked) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-20 text-center">
        <p className="text-sm text-muted">Checking your course access&hellip;</p>
      </div>
    );
  }

  if (!unlocked) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-2xl border border-line bg-surface p-8 text-center">
          <p className="hud-label text-accent">Locked</p>
          <h2 className="mt-2 text-2xl font-semibold">
            This level unlocks when you buy it
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            The full module content, scenario drills, reference links and the
            ask-the-material chat unlock with a paid place on this level. If you
            already bought it, open your course access email and follow the link
            in it - that link carries your access.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

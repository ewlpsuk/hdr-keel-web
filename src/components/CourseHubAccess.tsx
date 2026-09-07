"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * CourseHubAccess - full-passage / grant entry banner for the /course hub.
 *
 * A buyer who paid for the full passage lands on /course via their emailed link
 * (?access=<token>&grant=full). This client banner verifies that token against
 * /api/course-access and, when valid, replaces the "buy" framing with direct
 * links into each level carrying the token - so a full-passage owner can open
 * Fundamentals, Craft and Command without the level pages showing locked.
 *
 * A single-level buyer landing here sees nothing special (their grant is for
 * one level; they should follow their emailed level link). The per-level pages
 * themselves gate on their own tokens.
 */
export default function CourseHubAccess() {
  const [grantedProducts, setGrantedProducts] = useState<string[] | null>(null);
  const [checking, setChecking] = useState(
    typeof window !== "undefined" && Boolean(new URLSearchParams(window.location.search).get("access")),
  );

  useEffect(() => {
    let cancelled = false;
    const params = new URLSearchParams(window.location.search);
    const token = params.get("access");
    if (!token) {
      setChecking(false);
      return;
    }
    (async () => {
      try {
        const res = await fetch(
          `/api/course-access?access=${encodeURIComponent(token)}`,
          { headers: { Accept: "application/json" } },
        );
        if (res.ok) {
          const data = (await res.json()) as {
            granted: boolean;
            products?: string[];
          };
          if (data.granted && Array.isArray(data.products)) {
            window.sessionStorage.setItem("hdr_course_access", token);
            if (!cancelled) setGrantedProducts(data.products ?? []);
          }
        }
      } catch {
        /* ignore - fall through to default buy framing */
      }
      if (!cancelled) setChecking(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // A "full" grant unlocks all three levels.
  const ownsLevel = (slug: string) =>
    grantedProducts?.includes("full") || grantedProducts?.includes(slug);

  if (checking) return null;
  if (!grantedProducts || grantedProducts.length === 0) return null;

  const openable = [
    { slug: "fundamentals", name: "Fundamentals" },
    { slug: "craft", name: "Craft" },
    { slug: "command", name: "Command" },
  ].filter((l) => ownsLevel(l.slug));

  if (openable.length === 0) return null;

  const token = new URLSearchParams(window.location.search).get("access");
  const suffix = token ? `?access=${encodeURIComponent(token)}` : "";

  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6">
        <p className="hud-label text-accent">Course unlocked</p>
        <p className="mt-1 text-sm text-foreground">
          Your full passage is active. Open a level to begin:
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {openable.map((l) => (
            <Link
              key={l.slug}
              href={`/course/${l.slug}${suffix}`}
              className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-bg transition hover:bg-accent-2"
            >
              Open {l.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

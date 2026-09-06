import type { MetadataRoute } from "next";
import { navItems, site } from "@/lib/site";

export const dynamic = "force-static";

const LAST_MODIFIED = "2026-09-04";

const extraPages = [
  "/",
  "/news",
  "/hdr-compass",
  "/for-solicitors",
  "/how-it-works",
  "/services/case-support",
  "/services/training",
  "/services/ai-implementation",
  "/course/fundamentals",
  "/course/craft",
  "/course/command",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const homeAndNav = [
    {
      url: `${site.url}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    ...navItems.map((item) => ({
      url: `${site.url}${item.href}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  const extra = extraPages
    .filter((href) => href !== "/")
    .filter((href) => !navItems.some((item) => item.href === href))
    .map((href) => ({
      url: `${site.url}${href}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: href.startsWith("/services/") ? 0.7 : 0.6,
    }));

  return [
    ...homeAndNav,
    ...extra,
    {
      url: `${site.url}/privacy/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}

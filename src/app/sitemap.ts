import type { MetadataRoute } from "next";
import { navItems, site } from "@/lib/site";

export const dynamic = "force-static";

const LAST_MODIFIED = "2026-09-01";

const servicePages = [
  "/services/case-support",
  "/services/training",
  "/services/ai-implementation",
];

const infoPages = ["/for-solicitors", "/how-it-works"];

export default function sitemap(): MetadataRoute.Sitemap {
  const nav = navItems.map((item) => ({
    url: `${site.url}${item.href === "/" ? "/" : `${item.href}/`}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: item.href === "/" ? 1 : 0.7,
  }));
  const services = servicePages.map((href) => ({
    url: `${site.url}${href}/`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const info = infoPages.map((href) => ({
    url: `${site.url}${href}/`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [
    ...nav,
    ...services,
    ...info,
    {
      url: `${site.url}/privacy/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}

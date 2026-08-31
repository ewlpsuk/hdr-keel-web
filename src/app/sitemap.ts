import type { MetadataRoute } from "next";
import { navItems, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const nav = navItems.map((item) => ({
    url: `${site.url}${item.href === "/" ? "/" : `${item.href}/`}`,
    lastModified: new Date("2026-08-30"),
    changeFrequency: "monthly" as const,
    priority: item.href === "/" ? 1 : 0.7,
  }));
  return [
    ...nav,
    {
      url: `${site.url}/privacy/`,
      lastModified: new Date("2026-08-30"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}

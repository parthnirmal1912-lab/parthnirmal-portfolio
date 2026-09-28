import type { MetadataRoute } from "next";
import { projects, siteUrl } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects
      .filter((p) => p.href && p.caseStudy)
      .map((p) => ({
        url: `${siteUrl}${p.href}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
  ];
}

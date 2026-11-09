import type { MetadataRoute } from "next";
import { getSiteContent } from "./_data/siteContent";
import { getSiteUrl } from "./_data/siteUrl";

const baseUrl = getSiteUrl();

export default function sitemap(): MetadataRoute.Sitemap {
  const en = getSiteContent("en");
  const it = getSiteContent("it");
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/it`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...en.projects.map((project) => ({
      url: `${baseUrl}/work/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...it.projects.map((project) => ({
      url: `${baseUrl}/it/work/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

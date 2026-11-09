import type { MetadataRoute } from "next";
import { getSiteUrl } from "./_data/siteUrl";

const baseUrl = getSiteUrl();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

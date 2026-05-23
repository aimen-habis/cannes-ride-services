import type { MetadataRoute } from "next";

const BASE_URL = "https://cannesrideservices.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["fr", "en"];
  const pages = ["", "/services", "/about", "/zones", "/contact"];

  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      const url = locale === "fr" ? `${BASE_URL}${page}` : `${BASE_URL}/${locale}${page}`;
      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1 : 0.8,
        alternates: {
          languages: {
            fr: `${BASE_URL}${page}`,
            en: `${BASE_URL}/en${page}`,
          },
        },
      });
    }
  }

  return entries;
}

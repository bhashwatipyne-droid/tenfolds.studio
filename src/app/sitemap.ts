import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://tenfolds.studio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/work/finace`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/work/advisor-alpha`, changeFrequency: "yearly", priority: 0.8 },
  ];
}

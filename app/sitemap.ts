import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://iptvprovider-8k.com";
  const lastModified = new Date("2026-10-27T00:00:00.000Z");

  const routes = [
    { url: `${baseUrl}`, priority: 1.0, changeFrequency: "daily" as const },
    { url: `${baseUrl}/iptv-usa`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/plans`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/devices`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/setup/firestick`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/setup/smart-tv`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/setup/android`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/faq`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/privacy-policy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${baseUrl}/terms`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${baseUrl}/refund-policy`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

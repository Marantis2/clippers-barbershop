import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { path: "/",           priority: 1.0, changeFrequency: "monthly" },
    { path: "/preisliste", priority: 0.9, changeFrequency: "monthly" },
    { path: "/kontakt",    priority: 0.9, changeFrequency: "monthly" },
    { path: "/galerie",    priority: 0.7, changeFrequency: "weekly"  },
    { path: "/team",       priority: 0.7, changeFrequency: "monthly" },
    { path: "/ueber-uns",  priority: 0.6, changeFrequency: "monthly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}

import type { MetadataRoute } from "next";
import { siteMeta } from "@/lib/content";

const routes = ["", "/about", "/projects", "/hobbies", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteMeta.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.8,
  }));
}

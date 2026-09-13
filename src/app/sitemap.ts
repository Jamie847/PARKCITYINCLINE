import type { MetadataRoute } from "next";

const routes = ["", "/brief"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `https://parkcityincline.com${path}`,
    lastModified: new Date(),
  }));
}

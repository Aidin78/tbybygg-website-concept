import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/tjanster", "/projekt", "/om-oss", "/kontakt", "/integritetspolicy"];
  return [
    ...pages.map((path) => ({
      url: `${site.url}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path === "/integritetspolicy" ? 0.2 : 0.8,
    })),
    ...services.map((service) => ({
      url: `${site.url}/tjanster/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

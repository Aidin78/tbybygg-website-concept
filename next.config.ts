import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 80],
  },
  async redirects() {
    const legacy: [string, string][] = [
      ["/ombyggnation", "/tjanster/ombyggnation"],
      ["/badrumsrenovering", "/tjanster/badrumsrenovering"],
      ["/k%C3%B6ksrenovering", "/tjanster/koksrenovering"],
      ["/takrenovering", "/tjanster/takrenovering"],
      ["/altanbygge", "/tjanster/altanbygge"],
      ["/%C3%B6vriga-tj%C3%A4nster", "/tjanster/snickeri"],
      ["/about-3", "/om-oss"],
      ["/kopia-p%C3%A5-sekretesspolicy", "/integritetspolicy"],
    ];
    return legacy.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

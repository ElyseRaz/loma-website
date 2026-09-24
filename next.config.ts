import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://lh3.googleusercontent.com/**")],
    // Fewer revalidations against the (slow/unreliable) mockup image host.
    minimumCacheTTL: 2678400, // 31 days
  },
  async headers() {
    return [
      {
        // Static brand assets in /public — rarely change, safe to cache
        // for a week with a day of stale-while-revalidate as a buffer.
        source: "/:path(LOMA-logo.*\\.svg|favicon\\.ico|icon\\.png|apple-icon\\.png|opengraph-image\\.png|twitter-image\\.png)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the Next.js development indicator (N)
  devIndicators: false,

  cacheComponents: true,
  partialPrefetching: true,

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

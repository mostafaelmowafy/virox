import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // External domains for product images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
    formats: ["image/avif", "image/webp"], // Auto convert to fastest formats
  },
  // Enable compression
  compress: true,
  // Remove X-Powered-By header
  poweredByHeader: false,
};

export default nextConfig;

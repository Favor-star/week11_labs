import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://media2.dev.to/**")],
    formats: ["image/webp"],
  },
};

export default nextConfig;

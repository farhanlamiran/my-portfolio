import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  devIndicators:false,
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;

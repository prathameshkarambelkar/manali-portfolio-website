import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  agentRules: false,
};

export default nextConfig;

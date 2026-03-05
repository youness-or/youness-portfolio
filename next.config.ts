import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/youness-portfolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

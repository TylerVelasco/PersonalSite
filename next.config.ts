import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/PersonalSite',
  assetPrefix: '/PersonalSite/',
  reactStrictMode: true,
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization
  },
};

export default nextConfig;

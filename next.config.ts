import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'plecto-website-2020.s3.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;

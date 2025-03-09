import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enables static export mode for Next.js
  trailingSlash: true, // Ensures correct routing on GitHub Pages
  images: {
    unoptimized: true, // Required for static exports with Next.js images
  },
};

export default nextConfig;

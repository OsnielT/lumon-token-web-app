import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enables static export mode
  trailingSlash: true, // Ensures correct routing on GitHub Pages
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  basePath: '',
  assetPrefix: '/', //
};

export default nextConfig;

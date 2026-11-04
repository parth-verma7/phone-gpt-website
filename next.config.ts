import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  output: 'export', trailingSlash: true, basePath: '/phone-gpt-website',
  images: { unoptimized: true }, poweredByHeader: false,
};
export default nextConfig;

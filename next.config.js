/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  output: 'export',
  distDir: 'public_html',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

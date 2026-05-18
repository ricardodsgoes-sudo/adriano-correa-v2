/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

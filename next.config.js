/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  swcMinify: true,
  reactStrictMode: true,
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;


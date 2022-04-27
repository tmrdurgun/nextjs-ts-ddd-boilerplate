/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

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
  i18n
};

module.exports = nextConfig;


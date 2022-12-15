/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  images: {
    domains: ["cdn.cloudflare.steamstatic.com", "media.rawg.io"],
  },
};

module.exports = nextConfig;

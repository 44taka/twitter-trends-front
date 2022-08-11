/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['bulma.io'],
  },
  experimental: {
    outputStandalone: true,
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['bulma.io'],
  },
  output: 'standalone',
}

module.exports = nextConfig

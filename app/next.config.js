/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['twitter-trends-front.dosankoweb.work'],
  },
  output: 'standalone',
}

module.exports = nextConfig

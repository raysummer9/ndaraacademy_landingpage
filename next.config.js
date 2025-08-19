/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [],
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://newness.net/rest/:path*',
      },
    ]
  },
  env: {
    // API_URL: process.env.API_URL || 'https://newness.net/rest/',
    NEXT_PUBLIC_API_URL: 'https://newness.net/rest',
    LOCATION_URL: 'https://newness.net/rest'
  },
  images: {
    domains: ['localhost', 'newness.net'],
  },
}

module.exports = nextConfig

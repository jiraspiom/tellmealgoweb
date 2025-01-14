import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  ooutput: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default nextConfig

/** @type {import('next').NextConfig} */
const { parsed: envVariables } = require('dotenv').config()
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cataas.com',
        port: '',
        pathname: '/cat/**',
      },
    ],
  },
  env: {
    ...envVariables,
  },
}

module.exports = nextConfig

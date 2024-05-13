/** @type {import('next').NextConfig} */
const { parsed: envVariables } = require('dotenv').config()
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      }
    ],
  },
  env: {
    ...envVariables,
  },
}

module.exports = nextConfig
/**
      {
        protocol: 'https',
        hostname: 'cataas.com',
        port: '',
        pathname: '/cat/**',
      },
  */

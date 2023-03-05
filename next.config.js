/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    env: {
      secrets: process.env.secrets,
    },
  }
  
  module.exports = nextConfig
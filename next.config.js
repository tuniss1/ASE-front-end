/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['firebasestorage.googleapis.com', 'google.com', 'pt123.cdn.static123.com'] },
}

module.exports = nextConfig

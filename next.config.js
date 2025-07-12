/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // important for static export
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

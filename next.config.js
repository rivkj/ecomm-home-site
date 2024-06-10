/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ["plus.unsplash.com", "images.unsplash.com", "lh3.googleusercontent.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig

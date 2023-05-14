/** @type {import('next').NextConfig} */
const nextConfig = {
//   experimental: {
//     serverActions: true,
//   },
  images: {
    domains: [
      "127.0.0.1",
      "tigawanna-pocketbase.fly.dev",
    ],
  },
};

module.exports = nextConfig

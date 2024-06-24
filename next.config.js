/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRss: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: [
      "img.clerk.com",
      "unsplash.com",
      "images.unsplash.com",
      "plus.unsplash.com",
    ],
  },
};

module.exports = nextConfig;

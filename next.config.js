/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "dist",
  images: {
    // formats: ["image/webp"],
    unoptimized: true,
  },
};

module.exports = nextConfig;

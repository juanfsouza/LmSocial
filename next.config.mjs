// next.config.js
const nextConfig = {
  experimental: {
    runtime: 'nodejs',
    reactCompiler: true,
    ppr: 'incremental',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'http',
        hostname: 'img.clerk.com',
      },
    ],
  },
};

export default nextConfig;
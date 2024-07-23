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
        protocol: 'https', // Make sure the protocol matches the URL scheme
        hostname: 'img.clerk.com',
      },
    ],
  },
};

export default nextConfig;

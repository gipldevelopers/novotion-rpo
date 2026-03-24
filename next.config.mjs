import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  transpilePackages: ['lucide-react', 'tailwind-merge', 'clsx', 'framer-motion', 'gsap'],
  experimental: {
    optimizePackageImports: ['lucide-react', 'tailwind-merge', 'clsx', 'framer-motion', 'gsap'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ],
  },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve(__dirname, 'node_modules'));
    return config;
  },
};

export default nextConfig;

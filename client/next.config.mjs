/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-mart.baemin.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

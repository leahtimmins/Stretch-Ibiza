/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'a.storyblok.com',
            port: '',
          }
        ],
        deviceSizes: [640, 750, 768, 850, 1080, 1200, 1920, 2048, 3840],
    },
};

export default nextConfig;

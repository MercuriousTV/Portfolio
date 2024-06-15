/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // ... other image configurations if any
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;

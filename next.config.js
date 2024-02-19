/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
       
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'nw-porplehomes-production.up.railway.app',
          port: '',
        },
      ],
      },
}


module.exports = nextConfig

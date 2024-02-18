/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
       
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'nw-porplehomes-production.up.railway.app',
          port: '',
        },
      ],
      },
}


module.exports = nextConfig

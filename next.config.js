// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['www.si.com'],
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: '**',
//       },

//       {
//         protocol: 'http',
//         hostname: '**',
//       },
//     ],
//   },
// };

// module.exports = nextConfig;



/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  // disable: process.env.NODE_ENV === "development",
});
module.exports = withPWA({
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['www.si.com', 's.yimg.com', 'www.thestreet.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },

      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  }
});

/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// const withPWA = require('next-pwa');

// module.exports = withPWA({
//   reactStrictMode: true,
//   pwa:{
//     dest:"public",
//     disable: process.env.NODE_ENV === 'development'
//   }
// })

// module.exports = nextConfig
const withPWA = require("next-pwa")({
  dest: "public",
  register:true,
  skipWaiting:true,
  disable:process.env.NODE_ENV === 'development'
});
 
const nextConfig = withPWA({
  reactStrictMode: true,
});
 
module.exports = nextConfig;
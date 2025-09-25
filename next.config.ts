/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-b80211003304448e8a7f0edc480f0608.r2.dev",
      },
    ],
  },
};

module.exports = nextConfig;

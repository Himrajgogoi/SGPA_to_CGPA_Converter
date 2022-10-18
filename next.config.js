const withPWA = require("next-pwa")({
  dest: "public",
  // put other next-pwa options here
});

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  // put other next js options here
});

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {}

/*
module.exports = {
  ...nextConfig,
  async rewrites() {
    return [
      {
        source: "/api/validate",
        destination: "/api/validate.js",
      },
    ];
  },

}; */

// next.config.js

module.exports = {
  ...nextConfig,
  // Target must be serverless
  target: "serverless",
};

/** @type {import('next').NextConfig} */
const nextConfig = {}


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
  target: "serverless",
};


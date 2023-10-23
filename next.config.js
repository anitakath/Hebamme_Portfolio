/** @type {import('next').NextConfig} */
/*const nextConfig = {}


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

  const withNextOnNetlify = require("next-on-netlify");

  module.exports = withNextOnNetlify();

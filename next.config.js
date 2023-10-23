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
  target: "serverless",
};
*/


// next.config.js
module.exports = {
  // Target must be serverless
  target: 'serverless'
};
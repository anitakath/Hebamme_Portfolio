/** @type {import('next').NextConfig} */
const nextConfig = {}


 //Target mus be serverless (next on netlify)

module.exports = nextConfig
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/validate",
        destination: "/api/validate.js",
        
        target: "serverless",
      },
    ];
  },
  
 
 

};

/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",

  experimental: {
    outputFileTracingIncludes: {
      "/*": ["./node_modules/@swc/helpers/**/*"],
    },
  },
};

module.exports = nextConfig;

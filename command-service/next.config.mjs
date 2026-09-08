/** @type {import('next').NextConfig} */

export default {
  output: "standalone",

  experimental: {
    outputFileTracingIncludes: {
      "/*": ["./node_modules/@swc/helpers/**/*"],
    },
  },
};

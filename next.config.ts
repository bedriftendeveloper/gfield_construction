import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // build static HTML files to /out
  assetPrefix: isProd ? "./" : "", // use relative paths in production
  basePath: "", // leave blank for custom domain (like test.gfieldconstruction.com)
  images: {
    unoptimized: true, // required for static export if using next/image
  },
};

export default nextConfig;
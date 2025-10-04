/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export', // ✅ enables static export
  images: {
    unoptimized: true, // ✅ disables Next.js image optimization
  },
  assetPrefix: isProd ? './' : '', // ✅ ensures assets load relatively
  basePath: '', // ✅ empty if serving from domain root
}

export default nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: ".next",
  compress: true,
  crossOrigin: "anonymous",
  cacheMaxMemorySize: 0,
  cleanDistDir: true,
  productionBrowserSourceMaps: false,
  optimizeFonts: true,
  output: "standalone",
  poweredByHeader: false,
  excludeDefaultMomentLocales: true,
  reactStrictMode: true,
  experimental: {
    caseSensitiveRoutes: false,
    optimizeServerReact: true,
    scrollRestoration: true,
  },
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        hostname: "*",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;

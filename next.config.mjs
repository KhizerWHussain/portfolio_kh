/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: ".next",
  compress: true,
  crossOrigin: "anonymous",
  cacheMaxMemorySize: 0,
  cleanDistDir: true,
  productionBrowserSourceMaps: false,
  output: "export",
  poweredByHeader: false,
  excludeDefaultMomentLocales: true,
  reactStrictMode: true,
  optimizeFonts: true,
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

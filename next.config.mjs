/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

export default nextConfig;

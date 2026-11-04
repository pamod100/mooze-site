/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false, // hides the "N" dev badge
  images: { remotePatterns: [{ protocol: 'https', hostname: 'i.ytimg.com' }] },
};
export default nextConfig;

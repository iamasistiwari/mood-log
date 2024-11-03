/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], 
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.html$/,
      use: 'ignore-loader', 
    });
    return config;
  },
};

export default nextConfig;

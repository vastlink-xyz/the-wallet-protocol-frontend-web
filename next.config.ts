import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  /* other config options here */
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  devIndicators: false,
  images: {
    domains: [
      "https://addpzxdagqirbqdmjcbl.storage.supabase.co",
      "https://addpzxdagqirbqdmjcbl.supabase.co",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "addpzxdagqirbqdmjcbl.storage.supabase.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "addpzxdagqirbqdmjcbl.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

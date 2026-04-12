import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      { source: "/notes", destination: "/", permanent: true },
      { source: "/notes/:path*", destination: "/", permanent: true },
      { source: "/uses", destination: "/", permanent: true },
      { source: "/now", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;

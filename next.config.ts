import type { NextConfig } from "next";

const repoBasePath = "/San-Angelo-Korean-Baptist-Church-College-Student-Page";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBasePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: repoBasePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

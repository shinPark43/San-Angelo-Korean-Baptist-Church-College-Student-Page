import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoBasePath = "/San-Angelo-Korean-Baptist-Church-College-Student-Page";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? repoBasePath : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? repoBasePath : "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

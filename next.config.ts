import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** `output: "export"` breaks `next dev` chunk loading; use only for production `next build`. */
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  ...(basePath ? { basePath } : {}),
  ...(isProd ? { output: "export" as const } : {}),
  trailingSlash: true,
  images: { unoptimized: true },
  serverExternalPackages: ["gsap"],
};

export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,
//   trailingSlash: true,
// };

// export default nextConfig;




import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // basePath: "/prestige2.0",
  // assetPrefix: "/prestige2.0/",
  basePath: "",
  assetPrefix: "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
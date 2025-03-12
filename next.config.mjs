/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vault.featureos.app",
        port: "",
        pathname: "**",
        search: "",
      },
    ],
  },
};

export default nextConfig;

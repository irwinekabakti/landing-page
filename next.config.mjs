import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        // pathname: "/api/portraits/**",
      },
    ],
    // domains: ["randomuser.me"],
  },
};

export default nextConfig;

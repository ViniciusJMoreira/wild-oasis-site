/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kcnhnlzcqjmhbpensobk.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  // essa configuração é para gerar um site estático
  // output: "export",
};

export default nextConfig;

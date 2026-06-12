import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/assets/**',
      },
    ],
  },
  // Las plantillas de email (.html) se leen con fs en runtime dentro de las
  // rutas API. Esto garantiza que se incluyan en el bundle serverless de Vercel.
  outputFileTracingIncludes: {
    '/api/contact': ['./src/emails/**/*'],
    '/api/quote': ['./src/emails/**/*'],
  },
};

export default nextConfig;

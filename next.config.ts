import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // URL consistency - ensures no trailing slashes
  trailingSlash: false,
  
  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
      {
        source: "/:path*\\.(jpg|jpeg|png|gif|ico|svg|webp|avif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/calculators/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },
      // Turkish pages cache headers
      {
        source: "/tr/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },
      // Sitemap caching and Content-Type so browsers render as XML
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400",
          },
        ],
      },
    ];
  },

  // 301 redirects: common fixes + GSC env vars (see .env.example)
  async redirects() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://calculator360pro.com";
    const redirects: { source: string; destination: string; permanent: boolean }[] = [];

    // Yaygın yanlış/eski linkler (GSC 404 / yönlendirmeli sayfa için)
    redirects.push({ source: "/guide", destination: "/guides", permanent: true });
    redirects.push({ source: "/calculator", destination: "/calculators", permanent: true });
    redirects.push({ source: "/tr/guide", destination: "/tr/rehberler", permanent: true });
    redirects.push({ source: "/guides/", destination: "/guides", permanent: true });
    redirects.push({ source: "/tr/rehberler/", destination: "/tr/rehberler", permanent: true });

    const toPath = (v: string) => { const p = (v.replace(baseUrl, "").trim() || v); return p.startsWith("/") ? p : "/" + p; };
    const toDest = (v: string) => (v.startsWith("http") ? v : `${baseUrl}${v.startsWith("/") ? v : "/" + v}`);

    // 404: GSC → "Bulunamadı (404)" → GSC_REDIRECT_404_SOURCE + GSC_REDIRECT_404_DEST
    if (process.env.GSC_REDIRECT_404_SOURCE && process.env.GSC_REDIRECT_404_DEST) {
      redirects.push({
        source: toPath(process.env.GSC_REDIRECT_404_SOURCE),
        destination: toDest(process.env.GSC_REDIRECT_404_DEST),
        permanent: true,
      });
    }

    // Redirected (3): GSC → "Yönlendirmeli sayfa" → set GSC_REDIRECT_1_SOURCE/DEST, _2_, _3_
    for (let i = 1; i <= 3; i++) {
      const src = process.env[`GSC_REDIRECT_${i}_SOURCE`];
      const dest = process.env[`GSC_REDIRECT_${i}_DEST`];
      if (src && dest) {
        redirects.push({
          source: toPath(src),
          destination: toDest(dest),
          permanent: true,
        });
      }
    }

    return redirects;
  },
};

export default withBundleAnalyzer(nextConfig);

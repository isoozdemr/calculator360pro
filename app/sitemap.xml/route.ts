import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/constants";

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** Minimal fallback sitemap (homepage only) when generation fails - never return HTML */
function buildMinimalSitemapXml(): string {
  const loc = escapeXml(SITE_URL + "/");
  const lastmod = new Date().toISOString().slice(0, 10);
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1</priority>
  </url>
</urlset>`;
}

const XML_HEADERS = {
  "Content-Type": "application/xml; charset=utf-8",
  "Cache-Control": "public, max-age=3600, s-maxage=86400",
} as const;

const FALLBACK_CACHE = "public, max-age=60, s-maxage=60";

/**
 * Route handler for /sitemap.xml. Try/catch ensures we always return valid XML (200),
 * never 500/HTML, so Google Search Console does not report "unsupported file format".
 */
export async function GET() {
  try {
    const { getSitemapEntries } = await import("@/lib/sitemap-entries");
    const { sitemapEntriesToXml } = await import("@/lib/sitemap-to-xml");
    const entries = getSitemapEntries();
    const xml = sitemapEntriesToXml(entries);
    return new NextResponse(xml, {
      status: 200,
      headers: XML_HEADERS,
    });
  } catch (err) {
    console.error("[sitemap.xml] generation failed, serving minimal fallback:", err);
    const xml = buildMinimalSitemapXml();
    return new NextResponse(xml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": FALLBACK_CACHE,
      },
    });
  }
}

export const dynamic = "force-dynamic";

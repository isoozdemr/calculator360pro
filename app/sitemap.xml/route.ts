import { NextResponse } from "next/server";
import { getSitemapEntries } from "@/lib/sitemap-entries";
import { sitemapEntriesToXml } from "@/lib/sitemap-to-xml";

/**
 * Route handler for /sitemap.xml. Sends response with Content-Type: application/xml
 * so browsers and crawlers treat it as XML (not HTML).
 */
export async function GET() {
  const entries = getSitemapEntries();
  const xml = sitemapEntriesToXml(entries);
  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

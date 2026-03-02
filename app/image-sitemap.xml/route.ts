import { NextResponse } from "next/server";
import { getAllCalculators } from "@/lib/calculators/definitions";
import { SITE_URL, getCategorySlugByKey } from "@/lib/constants";
import { TURKISH_CALCULATORS } from "@/lib/sitemap-entries";

function formatDate(date: Date): string {
  return date.toISOString();
}

/** Escape text for safe use inside XML (e.g. image:title, image:caption). */
function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function generateImageSitemapXML(): string {
  const calculators = getAllCalculators();
  const now = new Date();
  const nowISO = formatDate(now);

  const urls: string[] = [];

  // Homepage OG image (all text escaped for valid XML, e.g. & in future copy)
  urls.push(`
  <url>
    <loc>${escapeXml(SITE_URL)}</loc>
    <image:image>
      <image:loc>${escapeXml(SITE_URL + "/og-image.png")}</image:loc>
      <image:title>${escapeXml("Calculator360Pro - Free Online Calculators")}</image:title>
      <image:caption>${escapeXml("Free, accurate online calculators for finance, health, education, math, and more.")}</image:caption>
    </image:image>
  </url>`);

  // Turkish homepage OG image
  urls.push(`
  <url>
    <loc>${escapeXml(SITE_URL + "/tr")}</loc>
    <image:image>
      <image:loc>${escapeXml(SITE_URL + "/og-image.png")}</image:loc>
      <image:title>${escapeXml("Calculator360Pro - Ücretsiz Online Hesap Makineleri")}</image:title>
      <image:caption>${escapeXml("Türkiye'ye özel ücretsiz online hesap makineleri. 2026 güncel veriler ile doğru hesaplamalar.")}</image:caption>
    </image:image>
  </url>`);

  // Calculator pages (English)
  calculators.forEach((calc) => {
    const categorySlug = getCategorySlugByKey(calc.category);
    const enPath = `${SITE_URL}/calculators/${categorySlug}/${calc.slug}`;
    urls.push(`
  <url>
    <loc>${escapeXml(enPath)}</loc>
    <image:image>
      <image:loc>${escapeXml(SITE_URL + "/og-image.png")}</image:loc>
      <image:title>${escapeXml(calc.name + " - Calculator360Pro")}</image:title>
      <image:caption>${escapeXml(calc.description)}</image:caption>
    </image:image>
  </url>`);
  });

  // Calculator pages (Turkish)
  TURKISH_CALCULATORS.forEach((calc) => {
    const trPath = `${SITE_URL}/tr/hesap-makineleri/${calc.category}/${calc.slug}`;
    urls.push(`
  <url>
    <loc>${escapeXml(trPath)}</loc>
    <image:image>
      <image:loc>${escapeXml(SITE_URL + "/og-image.png")}</image:loc>
      <image:title>${escapeXml("Hesap Makinesi - Calculator360Pro")}</image:title>
      <image:caption>${escapeXml("Ücretsiz online hesap makinesi")}</image:caption>
    </image:image>
  </url>`);
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join("")}
</urlset>`;
}

export async function GET() {
  const xml = generateImageSitemapXML();
  
  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

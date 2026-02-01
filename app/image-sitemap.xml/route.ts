import { NextResponse } from "next/server";
import { getAllCalculators } from "@/lib/calculators/definitions";
import { SITE_URL, getCategorySlugByKey } from "@/lib/constants";

// Turkish calculator pages with their English equivalents
const TURKISH_CALCULATORS = [
  { category: "finans", slug: "vergi-hesap-makinesi", enCategory: "finance", enSlug: "tax-calculator" },
  { category: "finans", slug: "maas-hesap-makinesi", enCategory: "finance", enSlug: "salary-calculator" },
  { category: "finans", slug: "konut-kredisi-hesap-makinesi", enCategory: "finance", enSlug: "mortgage-calculator" },
  { category: "finans", slug: "kredi-hesap-makinesi", enCategory: "finance", enSlug: "loan-calculator" },
  { category: "finans", slug: "emeklilik-hesap-makinesi", enCategory: "finance", enSlug: "retirement-calculator" },
  { category: "finans", slug: "doviz-cevirici", enCategory: "finance", enSlug: "currency-converter" },
  { category: "egitim", slug: "not-ortalamasi-hesap-makinesi", enCategory: "education", enSlug: "gpa-calculator" },
  { category: "saglik", slug: "bmi-hesap-makinesi", enCategory: "health", enSlug: "bmi-calculator" },
  { category: "saglik", slug: "kalori-hesap-makinesi", enCategory: "health", enSlug: "calorie-calculator" },
  { category: "saglik", slug: "gebelik-hesap-makinesi", enCategory: "health", enSlug: "pregnancy-calculator" },
  { category: "matematik", slug: "yuzde-hesap-makinesi", enCategory: "math", enSlug: "percentage-calculator" },
  { category: "matematik", slug: "indirim-hesap-makinesi", enCategory: "finance", enSlug: "discount-calculator" },
  { category: "tarih-zaman", slug: "yas-hesap-makinesi", enCategory: "date-time", enSlug: "age-calculator" },
  { category: "tarih-zaman", slug: "tarih-farki-hesap-makinesi", enCategory: "date-time", enSlug: "date-calculator" },
];

function formatDate(date: Date): string {
  return date.toISOString();
}

function generateImageSitemapXML(): string {
  const calculators = getAllCalculators();
  const now = new Date();
  const nowISO = formatDate(now);

  const urls: string[] = [];

  // Homepage OG image
  urls.push(`
  <url>
    <loc>${SITE_URL}</loc>
    <image:image>
      <image:loc>${SITE_URL}/og-image.png</image:loc>
      <image:title>Calculator360Pro - Free Online Calculators</image:title>
      <image:caption>Free, accurate online calculators for finance, health, education, math, and more.</image:caption>
    </image:image>
  </url>`);

  // Turkish homepage OG image
  urls.push(`
  <url>
    <loc>${SITE_URL}/tr</loc>
    <image:image>
      <image:loc>${SITE_URL}/og-image.png</image:loc>
      <image:title>Calculator360Pro - Ücretsiz Online Hesap Makineleri</image:title>
      <image:caption>Türkiye'ye özel ücretsiz online hesap makineleri. 2026 güncel veriler ile doğru hesaplamalar.</image:caption>
    </image:image>
  </url>`);

  // Calculator pages (English)
  calculators.forEach((calc) => {
    const categorySlug = getCategorySlugByKey(calc.category);
    const enPath = `${SITE_URL}/calculators/${categorySlug}/${calc.slug}`;
    urls.push(`
  <url>
    <loc>${enPath}</loc>
    <image:image>
      <image:loc>${SITE_URL}/og-image.png</image:loc>
      <image:title>${calc.name} - Calculator360Pro</image:title>
      <image:caption>${calc.description}</image:caption>
    </image:image>
  </url>`);
  });

  // Calculator pages (Turkish)
  TURKISH_CALCULATORS.forEach((calc) => {
    const trPath = `${SITE_URL}/tr/hesap-makineleri/${calc.category}/${calc.slug}`;
    urls.push(`
  <url>
    <loc>${trPath}</loc>
    <image:image>
      <image:loc>${SITE_URL}/og-image.png</image:loc>
      <image:title>Hesap Makinesi - Calculator360Pro</image:title>
      <image:caption>Ücretsiz online hesap makinesi</image:caption>
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

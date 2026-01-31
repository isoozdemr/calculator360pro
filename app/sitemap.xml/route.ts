import { NextResponse } from "next/server";
import { getAllCalculators } from "@/lib/calculators/definitions";
import { getAllBlogPosts } from "@/lib/blog/posts";
import { getAllBlogPostsTR } from "@/lib/blog/posts-tr";
import { SITE_URL, getCategorySlugByKey, CALCULATOR_CATEGORIES, CalculatorCategory } from "@/lib/constants";
import { URL_MAPPINGS } from "@/lib/seo/url-mappings";

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

// Turkish category mappings
const TURKISH_CATEGORIES = [
  { tr: "finans", en: "finance" },
  { tr: "egitim", en: "education" },
  { tr: "saglik", en: "health" },
  { tr: "matematik", en: "math" },
  { tr: "tarih-zaman", en: "date-time" },
];

function formatDate(date: Date): string {
  return date.toISOString();
}

function generateSitemapXML(): string {
  const calculators = getAllCalculators();
  const blogPosts = getAllBlogPosts();
  const blogPostsTR = getAllBlogPostsTR();
  const now = new Date();
  const nowISO = formatDate(now);

  const urls: string[] = [];

  // Base URLs
  urls.push(`
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${nowISO}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE_URL}/calculators</loc>
    <lastmod>${nowISO}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${SITE_URL}/tr</loc>
    <lastmod>${nowISO}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${SITE_URL}/tr/hesap-makineleri</loc>
    <lastmod>${nowISO}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`);

  // Category pages
  (Object.keys(CALCULATOR_CATEGORIES) as CalculatorCategory[]).forEach((categoryKey) => {
    const categorySlug = getCategorySlugByKey(categoryKey);
    urls.push(`
  <url>
    <loc>${SITE_URL}/calculators/${categorySlug}</loc>
    <lastmod>${nowISO}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`);
  });

  // Turkish category pages
  TURKISH_CATEGORIES.forEach((cat) => {
    urls.push(`
  <url>
    <loc>${SITE_URL}/tr/hesap-makineleri/${cat.tr}</loc>
    <lastmod>${nowISO}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`);
  });

  // Calculator pages
  calculators.forEach((calc) => {
    const categorySlug = getCategorySlugByKey(calc.category);
    const enPath = `${SITE_URL}/calculators/${categorySlug}/${calc.slug}`;
    urls.push(`
  <url>
    <loc>${enPath}</loc>
    <lastmod>${nowISO}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);
  });

  // Turkish calculator pages
  TURKISH_CALCULATORS.forEach((calc) => {
    const trPath = `${SITE_URL}/tr/hesap-makineleri/${calc.category}/${calc.slug}`;
    urls.push(`
  <url>
    <loc>${trPath}</loc>
    <lastmod>${nowISO}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);
  });

  // Blog posts (English)
  blogPosts.forEach((post) => {
    urls.push(`
  <url>
    <loc>${SITE_URL}/blog/${post.slug}</loc>
    <lastmod>${formatDate(new Date(post.date))}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`);
  });

  // Blog posts (Turkish)
  blogPostsTR.forEach((post) => {
    urls.push(`
  <url>
    <loc>${SITE_URL}/tr/blog/${post.slug}</loc>
    <lastmod>${formatDate(new Date(post.date))}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`);
  });

  // Other pages
  urls.push(`
  <url>
    <loc>${SITE_URL}/about</loc>
    <lastmod>${nowISO}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${SITE_URL}/blog</loc>
    <lastmod>${nowISO}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${SITE_URL}/tr/blog</loc>
    <lastmod>${nowISO}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${SITE_URL}/search</loc>
    <lastmod>${nowISO}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
  </url>
  <url>
    <loc>${SITE_URL}/privacy-policy</loc>
    <lastmod>${nowISO}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${SITE_URL}/terms-of-service</loc>
    <lastmod>${nowISO}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${SITE_URL}/tr/hakkimizda</loc>
    <lastmod>${nowISO}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${SITE_URL}/tr/gizlilik-politikasi</loc>
    <lastmod>${nowISO}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${SITE_URL}/tr/kullanim-kosullari</loc>
    <lastmod>${nowISO}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>`);

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("")}
</urlset>`;
}

export async function GET() {
  const xml = generateSitemapXML();
  
  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

import { NextResponse } from "next/server";
import { getAllCalculators } from "@/lib/calculators/definitions";
import { getAllBlogPosts } from "@/lib/blog/posts";
import { getAllBlogPostsTR } from "@/lib/blog/posts-tr";
import { SITE_URL, getCategorySlugByKey, CALCULATOR_CATEGORIES, CalculatorCategory } from "@/lib/constants";
import { URL_MAPPINGS, REVERSE_URL_MAPPINGS } from "@/lib/seo/url-mappings";
import { getTrBlogSlugForEn, getEnBlogSlugForTr } from "@/lib/blog/slug-mappings";

// Turkish calculator pages with their English equivalents
const TURKISH_CALCULATORS = [
  { category: "finans", slug: "vergi-hesap-makinesi", enCategory: "finance", enSlug: "tax-calculator" },
  { category: "finans", slug: "maas-hesap-makinesi", enCategory: "finance", enSlug: "salary-calculator" },
  { category: "finans", slug: "konut-kredisi-hesap-makinesi", enCategory: "finance", enSlug: "mortgage-calculator" },
  { category: "finans", slug: "kredi-hesap-makinesi", enCategory: "finance", enSlug: "loan-calculator" },
  { category: "finans", slug: "emeklilik-hesap-makinesi", enCategory: "finance", enSlug: "retirement-calculator" },
  { category: "finans", slug: "bilesik-faiz-hesap-makinesi", enCategory: "finance", enSlug: "compound-interest-calculator" },
  { category: "finans", slug: "yatirim-hesap-makinesi", enCategory: "finance", enSlug: "investment-calculator" },
  { category: "finans", slug: "birikim-hesap-makinesi", enCategory: "finance", enSlug: "savings-calculator" },
  { category: "finans", slug: "butce-hesap-makinesi", enCategory: "finance", enSlug: "budget-calculator" },
  { category: "finans", slug: "tasit-kredisi-hesap-makinesi", enCategory: "finance", enSlug: "car-loan-calculator" },
  { category: "finans", slug: "doviz-cevirici", enCategory: "finance", enSlug: "currency-converter" },
  { category: "egitim", slug: "not-ortalamasi-hesap-makinesi", enCategory: "education", enSlug: "gpa-calculator" },
  { category: "saglik", slug: "bmi-hesap-makinesi", enCategory: "health", enSlug: "bmi-calculator" },
  { category: "saglik", slug: "kalori-hesap-makinesi", enCategory: "health", enSlug: "calorie-calculator" },
  { category: "saglik", slug: "gebelik-hesap-makinesi", enCategory: "health", enSlug: "pregnancy-calculator" },
  { category: "matematik", slug: "yuzde-hesap-makinesi", enCategory: "math", enSlug: "percentage-calculator" },
  { category: "matematik", slug: "indirim-hesap-makinesi", enCategory: "finance", enSlug: "discount-calculator" },
  { category: "tarih-zaman", slug: "yas-hesap-makinesi", enCategory: "date-time", enSlug: "age-calculator" },
  { category: "tarih-zaman", slug: "tarih-farki-hesap-makinesi", enCategory: "date-time", enSlug: "date-calculator" },
  { category: "matematik", slug: "bilimsel-hesap-makinesi", enCategory: "math", enSlug: "scientific-calculator" },
  { category: "matematik", slug: "birim-cevirici", enCategory: "math", enSlug: "unit-converter" },
  { category: "tarih-zaman", slug: "saat-hesap-makinesi", enCategory: "date-time", enSlug: "hours-calculator" },
  { category: "saglik", slug: "vucut-yag-orani-hesap-makinesi", enCategory: "health", enSlug: "body-fat-calculator" },
  { category: "finans", slug: "ogrenim-kredisi-hesap-makinesi", enCategory: "finance", enSlug: "student-loan-calculator" },
  { category: "finans", slug: "kredi-karti-borc-hesap-makinesi", enCategory: "finance", enSlug: "credit-card-payoff-calculator" },
  { category: "finans", slug: "bahsis-hesap-makinesi", enCategory: "finance", enSlug: "tip-calculator" },
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

const XHTML_NS = "http://www.w3.org/1999/xhtml";

function urlEntry(
  loc: string,
  lastmod: string,
  changefreq: string,
  priority: string,
  alternates?: { en: string; tr: string; xDefault: string }
): string {
  const locFull = loc.startsWith("http") ? loc : `${SITE_URL}${loc}`;
  let links = "";
  if (alternates) {
    links = `
    <xhtml:link rel="alternate" hreflang="en" href="${alternates.en.startsWith("http") ? alternates.en : SITE_URL + alternates.en}"/>
    <xhtml:link rel="alternate" hreflang="tr" href="${alternates.tr.startsWith("http") ? alternates.tr : SITE_URL + alternates.tr}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${alternates.xDefault.startsWith("http") ? alternates.xDefault : SITE_URL + alternates.xDefault}"/>`;
  }
  return `
  <url>
    <loc>${locFull}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${links}
  </url>`;
}

function generateSitemapXML(): string {
  const calculators = getAllCalculators();
  const blogPosts = getAllBlogPosts();
  const blogPostsTR = getAllBlogPostsTR();
  const now = new Date();
  const nowISO = formatDate(now);

  const urls: string[] = [];

  // Base URLs with hreflang
  const baseAlternates = { en: SITE_URL + "/", tr: SITE_URL + "/tr", xDefault: SITE_URL + "/" };
  const calcListAlternates = { en: SITE_URL + "/calculators", tr: SITE_URL + "/tr/hesap-makineleri", xDefault: SITE_URL + "/calculators" };
  urls.push(urlEntry(SITE_URL + "/", nowISO, "daily", "1.0", baseAlternates));
  urls.push(urlEntry(SITE_URL + "/calculators", nowISO, "daily", "0.9", calcListAlternates));
  urls.push(urlEntry(SITE_URL + "/tr", nowISO, "daily", "0.9", baseAlternates));
  urls.push(urlEntry(SITE_URL + "/tr/hesap-makineleri", nowISO, "daily", "0.8", calcListAlternates));

  // Category pages with hreflang
  (Object.keys(CALCULATOR_CATEGORIES) as CalculatorCategory[]).forEach((categoryKey) => {
    const categorySlug = getCategorySlugByKey(categoryKey);
    const enPath = `/calculators/${categorySlug}`;
    const trPath = URL_MAPPINGS[enPath] || `/tr/hesap-makineleri/${TURKISH_CATEGORIES.find((c) => c.en === categorySlug)?.tr || categorySlug}`;
    const alt = { en: SITE_URL + enPath, tr: SITE_URL + trPath, xDefault: SITE_URL + enPath };
    urls.push(urlEntry(SITE_URL + enPath, nowISO, "weekly", "0.8", alt));
  });

  // Turkish category pages (alternates already in EN category entries; include TR loc with same alternates)
  TURKISH_CATEGORIES.forEach((cat) => {
    const trPath = `/tr/hesap-makineleri/${cat.tr}`;
    const enPath = `/calculators/${cat.en}`;
    const alt = { en: SITE_URL + enPath, tr: SITE_URL + trPath, xDefault: SITE_URL + enPath };
    urls.push(urlEntry(SITE_URL + trPath, nowISO, "weekly", "0.8", alt));
  });

  // Calculator pages with hreflang where TR alternate exists
  calculators.forEach((calc) => {
    const categorySlug = getCategorySlugByKey(calc.category);
    const enRel = `/calculators/${categorySlug}/${calc.slug}`;
    const trRel = URL_MAPPINGS[enRel];
    const lastmod = nowISO;
    const alt = trRel ? { en: SITE_URL + enRel, tr: SITE_URL + trRel, xDefault: SITE_URL + enRel } : undefined;
    urls.push(urlEntry(SITE_URL + enRel, lastmod, "weekly", "0.9", alt));
  });

  // Turkish calculator pages with hreflang
  TURKISH_CALCULATORS.forEach((calc) => {
    const trRel = `/tr/hesap-makineleri/${calc.category}/${calc.slug}`;
    const enRel = REVERSE_URL_MAPPINGS[trRel];
    const alt = enRel ? { en: SITE_URL + enRel, tr: SITE_URL + trRel, xDefault: SITE_URL + enRel } : undefined;
    urls.push(urlEntry(SITE_URL + trRel, nowISO, "weekly", "0.9", alt));
  });

  // Blog posts (English) with hreflang when TR translation exists
  blogPosts.forEach((post) => {
    const trSlug = getTrBlogSlugForEn(post.slug);
    const enUrl = `${SITE_URL}/blog/${post.slug}`;
    const lastmod = formatDate(new Date(post.dateModified || post.date));
    if (trSlug) {
      const alt = { en: enUrl, tr: `${SITE_URL}/tr/blog/${trSlug}`, xDefault: enUrl };
      urls.push(urlEntry(enUrl, lastmod, "monthly", "0.7", alt));
    } else {
      urls.push(`
  <url>
    <loc>${enUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
    }
  });

  // Blog posts (Turkish) with hreflang when EN translation exists
  blogPostsTR.forEach((post) => {
    const enSlug = getEnBlogSlugForTr(post.slug);
    const trUrl = `${SITE_URL}/tr/blog/${post.slug}`;
    const lastmod = formatDate(new Date(post.dateModified || post.date));
    if (enSlug) {
      const alt = { en: `${SITE_URL}/blog/${enSlug}`, tr: trUrl, xDefault: `${SITE_URL}/blog/${enSlug}` };
      urls.push(urlEntry(trUrl, lastmod, "monthly", "0.7", alt));
    } else {
      urls.push(`
  <url>
    <loc>${trUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
    }
  });

  // Other pages (about, privacy, terms with hreflang)
  const aboutAlt = { en: SITE_URL + "/about", tr: SITE_URL + "/tr/hakkimizda", xDefault: SITE_URL + "/about" };
  urls.push(urlEntry(SITE_URL + "/about", nowISO, "monthly", "0.5", aboutAlt));
  urls.push(urlEntry(SITE_URL + "/tr/hakkimizda", nowISO, "monthly", "0.5", aboutAlt));
  urls.push(urlEntry(SITE_URL + "/blog", nowISO, "weekly", "0.6"));
  urls.push(urlEntry(SITE_URL + "/tr/blog", nowISO, "weekly", "0.6"));
  urls.push(urlEntry(SITE_URL + "/search", nowISO, "monthly", "0.4"));
  const privacyAlt = { en: SITE_URL + "/privacy-policy", tr: SITE_URL + "/tr/gizlilik-politikasi", xDefault: SITE_URL + "/privacy-policy" };
  urls.push(urlEntry(SITE_URL + "/privacy-policy", nowISO, "yearly", "0.3", privacyAlt));
  urls.push(urlEntry(SITE_URL + "/tr/gizlilik-politikasi", nowISO, "yearly", "0.3", privacyAlt));
  const termsAlt = { en: SITE_URL + "/terms-of-service", tr: SITE_URL + "/tr/kullanim-kosullari", xDefault: SITE_URL + "/terms-of-service" };
  urls.push(urlEntry(SITE_URL + "/terms-of-service", nowISO, "yearly", "0.3", termsAlt));
  urls.push(urlEntry(SITE_URL + "/tr/kullanim-kosullari", nowISO, "yearly", "0.3", termsAlt));
  // Guide/rehber pages with hreflang for EN–TR pairs
  const guideGlossaryAlt = { en: SITE_URL + "/guides/financial-terms-glossary", tr: SITE_URL + "/tr/rehberler/finansal-terimler-sozlugu", xDefault: SITE_URL + "/guides/financial-terms-glossary" };
  const guideTaxAlt = { en: SITE_URL + "/guides/tax-calendar-2026-usa", tr: SITE_URL + "/tr/rehberler/vergi-takvimi-2026", xDefault: SITE_URL + "/guides/tax-calendar-2026-usa" };
  urls.push(urlEntry(SITE_URL + "/tr/rehberler/finansal-terimler-sozlugu", nowISO, "monthly", "0.6", guideGlossaryAlt));
  urls.push(urlEntry(SITE_URL + "/tr/rehberler/vergi-takvimi-2026", nowISO, "monthly", "0.6", guideTaxAlt));
  urls.push(urlEntry(SITE_URL + "/tr/rehberler/sgk-emeklilik-tablosu", nowISO, "monthly", "0.6"));
  urls.push(urlEntry(SITE_URL + "/tr/rehberler/kredi-notu-nasil-yukseltilir", nowISO, "monthly", "0.6"));
  urls.push(urlEntry(SITE_URL + "/tr/rehberler/vergi-indirimleri-rehberi-2026", nowISO, "monthly", "0.6"));
  urls.push(urlEntry(SITE_URL + "/tr/rehberler/yatirim-baslangic-rehberi-2026", nowISO, "monthly", "0.6"));
  urls.push(urlEntry(SITE_URL + "/guides/financial-terms-glossary", nowISO, "monthly", "0.6", guideGlossaryAlt));
  urls.push(urlEntry(SITE_URL + "/guides/tax-calendar-2026-usa", nowISO, "monthly", "0.6", guideTaxAlt));
  const contactAlt = { en: SITE_URL + "/contact", tr: SITE_URL + "/tr/iletisim", xDefault: SITE_URL + "/contact" };
  urls.push(urlEntry(SITE_URL + "/contact", nowISO, "monthly", "0.5", contactAlt));
  urls.push(urlEntry(SITE_URL + "/tr/iletisim", nowISO, "monthly", "0.5", contactAlt));

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="${XHTML_NS}">
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

import { getAllCalculators } from "@/lib/calculators/definitions";
import { getAllBlogPosts } from "@/lib/blog/posts";
import { getAllBlogPostsTR } from "@/lib/blog/posts-tr";
import { SITE_URL, getCategorySlugByKey, CALCULATOR_CATEGORIES, CalculatorCategory } from "@/lib/constants";
import { TR_REHBERLER } from "@/lib/tr-rehberler";

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
  { category: "finans", slug: "enflasyon-alim-gucu-hesap-makinesi", enCategory: "finance", enSlug: "inflation-purchasing-power-calculator" },
  { category: "finans", slug: "bes-devlet-katkisi-hesap-makinesi", enCategory: "finance", enSlug: "retirement-calculator" },
  { category: "finans", slug: "emlak-vergisi-hesap-makinesi", enCategory: "finance", enSlug: "tax-calculator" },
  { category: "finans", slug: "prim-gunu-hesap-makinesi", enCategory: "finance", enSlug: "retirement-calculator" },
  { category: "tarih-zaman", slug: "haftalik-calisma-saati-hesap-makinesi", enCategory: "date-time", enSlug: "hours-calculator" },
];

// Turkish category mappings
const TURKISH_CATEGORIES = [
  { tr: "finans", en: "finance" },
  { tr: "egitim", en: "education" },
  { tr: "saglik", en: "health" },
  { tr: "matematik", en: "math" },
  { tr: "tarih-zaman", en: "date-time" },
];

/**
 * Get all URLs that should be indexed by Google
 * Returns relative paths (e.g., "/calculators/finance/salary-calculator")
 */
export function getAllIndexableUrls(): string[] {
  const calculators = getAllCalculators();
  const blogPosts = getAllBlogPosts();
  const blogPostsTR = getAllBlogPostsTR();
  const urls: string[] = [];

  // Base URLs
  urls.push("/");
  urls.push("/calculators");
  urls.push("/tr");
  urls.push("/tr/hesap-makineleri");

  // Category pages (English)
  (Object.keys(CALCULATOR_CATEGORIES) as CalculatorCategory[]).forEach((categoryKey) => {
    const categorySlug = getCategorySlugByKey(categoryKey);
    urls.push(`/calculators/${categorySlug}`);
  });

  // Category pages (Turkish)
  TURKISH_CATEGORIES.forEach((cat) => {
    urls.push(`/tr/hesap-makineleri/${cat.tr}`);
  });

  // Calculator pages (English)
  calculators.forEach((calc) => {
    const categorySlug = getCategorySlugByKey(calc.category);
    urls.push(`/calculators/${categorySlug}/${calc.slug}`);
  });

  // Calculator pages (Turkish)
  TURKISH_CALCULATORS.forEach((calc) => {
    urls.push(`/tr/hesap-makineleri/${calc.category}/${calc.slug}`);
  });

  // Blog posts (English)
  blogPosts.forEach((post) => {
    urls.push(`/blog/${post.slug}`);
  });

  // Blog posts (Turkish)
  blogPostsTR.forEach((post) => {
    urls.push(`/tr/blog/${post.slug}`);
  });

  // Static pages
  urls.push("/about");
  urls.push("/contact");
  urls.push("/privacy-policy");
  urls.push("/terms-of-service");
  urls.push("/tr/hakkimizda");
  urls.push("/tr/iletisim");
  urls.push("/tr/gizlilik-politikasi");
  urls.push("/tr/kullanim-kosullari");

  // Resource/Guide pages (Turkish) – single source: TR_REHBERLER
  TR_REHBERLER.forEach((rehber) => {
    urls.push(`/tr/rehberler/${rehber.slug}`);
  });

  // Guide pages (English) – index + listing
  urls.push("/guides");
  urls.push("/guides/financial-terms-glossary");
  urls.push("/guides/tax-calendar-2026-usa");

  // Blog listing pages
  urls.push("/blog");
  urls.push("/tr/blog");

  return urls;
}

/**
 * Recently added page URLs (not blog-by-date).
 * Add here any new routes that were just launched and not yet submitted to Google.
 */
export function getRecentlyAddedPageUrls(): string[] {
  return [
    "/guides", // EN guides index (new)
  ];
}

/**
 * Get URLs for new content (blog posts added in the last N days)
 */
export function getNewContentUrls(days: number = 7): string[] {
  const blogPosts = getAllBlogPosts();
  const blogPostsTR = getAllBlogPostsTR();
  const urls: string[] = [];
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - days);

  // English blog posts
  blogPosts.forEach((post) => {
    const postDate = new Date(post.date);
    if (postDate >= cutoffDate) {
      urls.push(`/blog/${post.slug}`);
    }
  });

  // Turkish blog posts
  blogPostsTR.forEach((post) => {
    const postDate = new Date(post.date);
    if (postDate >= cutoffDate) {
      urls.push(`/tr/blog/${post.slug}`);
    }
  });

  return urls;
}

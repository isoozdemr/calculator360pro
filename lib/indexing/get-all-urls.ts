import { getAllCalculators } from "@/lib/calculators/definitions";
import { getAllBlogPosts } from "@/lib/blog/posts";
import { getAllBlogPostsTR } from "@/lib/blog/posts-tr";
import { SITE_URL, getCategorySlugByKey, CALCULATOR_CATEGORIES, CalculatorCategory } from "@/lib/constants";

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
  urls.push("/privacy-policy");
  urls.push("/terms-of-service");
  urls.push("/tr/hakkimizda");
  urls.push("/tr/gizlilik-politikasi");
  urls.push("/tr/kullanim-kosullari");

  // Resource/Guide pages (Turkish)
  urls.push("/tr/rehberler/finansal-terimler-sozlugu");
  urls.push("/tr/rehberler/vergi-takvimi-2026");
  urls.push("/tr/rehberler/sgk-emeklilik-tablosu");

  // Blog listing pages
  urls.push("/blog");
  urls.push("/tr/blog");

  return urls;
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

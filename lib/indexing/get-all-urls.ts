import { getAllCalculators } from "@/lib/calculators/definitions";
import { getAllBlogPosts } from "@/lib/blog/posts";
import { getAllBlogPostsTR } from "@/lib/blog/posts-tr";
import { SITE_URL, getCategorySlugByKey, CALCULATOR_CATEGORIES, CalculatorCategory } from "@/lib/constants";
import { TR_REHBERLER } from "@/lib/tr-rehberler";
import { TURKISH_CALCULATORS, TURKISH_CATEGORIES } from "@/lib/sitemap-entries";

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

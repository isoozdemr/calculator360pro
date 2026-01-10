export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://calculator360pro.com";
export const SITE_NAME = "Calculator360Pro";

export const CALCULATOR_CATEGORIES = {
  finance: {
    name: "Finance",
    slug: "finance",
    description: "Financial calculators for loans, mortgages, investments, and more",
  },
  health: {
    name: "Health",
    slug: "health",
    description: "Health calculators for BMI, body fat, calories, and more",
  },
  education: {
    name: "Education",
    slug: "education",
    description: "Education calculators for GPA, grades, percentages, and more",
  },
  math: {
    name: "Math",
    slug: "math",
    description: "Mathematical calculators for scientific calculations and more",
  },
  dateTime: {
    name: "Date & Time",
    slug: "date-time",
    description: "Date and time calculators for age, date differences, and more",
  },
} as const;

export type CalculatorCategory = keyof typeof CALCULATOR_CATEGORIES;

/**
 * ⚠️ CRITICAL: URL Structure Standards
 * 
 * IMPORTANT DISTINCTION:
 * - Category KEY (internal): camelCase (e.g., "dateTime") - used in code, TypeScript types
 * - Category SLUG (URL): kebab-case (e.g., "date-time") - used in all URLs and links
 * 
 * ⚠️ MANDATORY: Always use these helper functions when working with URLs or filtering.
 * NEVER directly use calculator.category in URLs - it's a key, not a slug!
 * 
 * See docs/URL_STANDARDS.md for complete documentation.
 */

/**
 * Get category key from slug
 * 
 * ⚠️ USE THIS: When you have a URL slug and need the internal category key
 * 
 * @param slug - Category slug from URL (e.g., "date-time")
 * @returns Category key (e.g., "dateTime") or undefined if not found
 * 
 * Example: "date-time" -> "dateTime"
 */
export function getCategoryKeyBySlug(slug: string): CalculatorCategory | undefined {
  const category = Object.entries(CALCULATOR_CATEGORIES).find(
    ([_, info]) => info.slug === slug
  );
  return category ? (category[0] as CalculatorCategory) : undefined;
}

/**
 * Get category slug from key
 * 
 * ⚠️ USE THIS: When you have a category key and need to create a URL
 * 
 * @param key - Category key from calculator definition (e.g., "dateTime")
 * @returns Category slug for URL (e.g., "date-time")
 * 
 * Example: "dateTime" -> "date-time"
 * 
 * ⚠️ MANDATORY: Use this for ALL URL generation, links, sitemap, schema markup
 */
export function getCategorySlugByKey(key: CalculatorCategory): string {
  return CALCULATOR_CATEGORIES[key].slug;
}


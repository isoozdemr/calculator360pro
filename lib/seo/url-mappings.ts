/**
 * Centralized URL Mapping System for Multi-Language Support
 * 
 * This file contains all EN-TR URL mappings and helper functions
 * for generating hreflang links, alternate URLs, and sitemap entries.
 * 
 * IMPORTANT: All URL mappings should be defined here and imported
 * by other components (LanguageSwitcher, LanguageBanner, sitemap, etc.)
 */

import { SITE_URL } from "@/lib/constants";

// ============================================
// URL MAPPINGS - English to Turkish
// ============================================

/**
 * Complete mapping of English URLs to their Turkish equivalents
 * Key: English path (without domain)
 * Value: Turkish path (without domain)
 */
export const URL_MAPPINGS: Record<string, string> = {
  // Main pages
  "/": "/tr",
  "/about": "/tr/hakkimizda",
  "/calculators": "/tr/hesap-makineleri",
  "/blog": "/tr/blog",
  "/privacy-policy": "/tr/gizlilik-politikasi",
  "/terms-of-service": "/tr/kullanim-kosullari",
  
  // Category pages
  "/calculators/finance": "/tr/hesap-makineleri/finans",
  "/calculators/health": "/tr/hesap-makineleri/saglik",
  "/calculators/education": "/tr/hesap-makineleri/egitim",
  "/calculators/math": "/tr/hesap-makineleri/matematik",
  "/calculators/date-time": "/tr/hesap-makineleri/tarih-zaman",
  
  // Finance Calculator pages
  "/calculators/finance/tax-calculator": "/tr/hesap-makineleri/finans/vergi-hesap-makinesi",
  "/calculators/finance/salary-calculator": "/tr/hesap-makineleri/finans/maas-hesap-makinesi",
  "/calculators/finance/mortgage-calculator": "/tr/hesap-makineleri/finans/konut-kredisi-hesap-makinesi",
  "/calculators/finance/loan-calculator": "/tr/hesap-makineleri/finans/kredi-hesap-makinesi",
  "/calculators/finance/retirement-calculator": "/tr/hesap-makineleri/finans/emeklilik-hesap-makinesi",
  "/calculators/finance/compound-interest-calculator": "/tr/hesap-makineleri/finans/bilesik-faiz-hesap-makinesi",
  "/calculators/finance/currency-converter": "/tr/hesap-makineleri/finans/doviz-cevirici",
  "/calculators/finance/discount-calculator": "/tr/hesap-makineleri/matematik/indirim-hesap-makinesi",
  
  // Health Calculator pages
  "/calculators/health/bmi-calculator": "/tr/hesap-makineleri/saglik/bmi-hesap-makinesi",
  "/calculators/health/calorie-calculator": "/tr/hesap-makineleri/saglik/kalori-hesap-makinesi",
  "/calculators/health/pregnancy-calculator": "/tr/hesap-makineleri/saglik/gebelik-hesap-makinesi",
  
  // Education Calculator pages
  "/calculators/education/gpa-calculator": "/tr/hesap-makineleri/egitim/not-ortalamasi-hesap-makinesi",
  
  // Math Calculator pages
  "/calculators/math/percentage-calculator": "/tr/hesap-makineleri/matematik/yuzde-hesap-makinesi",
  
  // Date-Time Calculator pages
  "/calculators/date-time/age-calculator": "/tr/hesap-makineleri/tarih-zaman/yas-hesap-makinesi",
  "/calculators/date-time/date-calculator": "/tr/hesap-makineleri/tarih-zaman/tarih-farki-hesap-makinesi",
};

/**
 * Reverse mapping: Turkish to English
 * Auto-generated from URL_MAPPINGS
 */
export const REVERSE_URL_MAPPINGS: Record<string, string> = Object.entries(URL_MAPPINGS).reduce(
  (acc, [en, tr]) => ({ ...acc, [tr]: en }),
  {}
);

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get the alternate language URL for a given path
 * 
 * @param path - Current page path (e.g., "/calculators/finance/salary-calculator")
 * @param currentLocale - Current locale ("en" or "tr")
 * @returns Alternate language path or fallback to homepage
 */
export function getAlternateUrl(path: string, currentLocale: "en" | "tr"): string {
  if (currentLocale === "en") {
    return URL_MAPPINGS[path] || "/tr";
  } else {
    return REVERSE_URL_MAPPINGS[path] || "/";
  }
}

/**
 * Get full alternate URL with domain
 * 
 * @param path - Current page path
 * @param currentLocale - Current locale
 * @returns Full URL with domain
 */
export function getFullAlternateUrl(path: string, currentLocale: "en" | "tr"): string {
  const alternatePath = getAlternateUrl(path, currentLocale);
  return `${SITE_URL}${alternatePath}`;
}

/**
 * Check if a path has a translation available
 * 
 * @param path - Page path to check
 * @param locale - Locale of the path ("en" or "tr")
 * @returns True if translation exists
 */
export function hasTranslation(path: string, locale: "en" | "tr"): boolean {
  if (locale === "en") {
    return path in URL_MAPPINGS;
  } else {
    return path in REVERSE_URL_MAPPINGS;
  }
}

/**
 * Generate hreflang links object for Next.js metadata
 * Used in page metadata for SEO
 * 
 * @param enPath - English path (without domain)
 * @param trPath - Turkish path (without domain)
 * @returns Object with language URLs for metadata.alternates.languages
 */
export function getHreflangLinks(enPath: string, trPath: string) {
  return {
    "en": `${SITE_URL}${enPath}`,
    "tr": `${SITE_URL}${trPath}`,
    "x-default": `${SITE_URL}${enPath}`,
  };
}

/**
 * Generate hreflang links from a single path
 * Automatically finds the corresponding translation
 * 
 * @param path - Current page path
 * @param currentLocale - Current locale ("en" or "tr")
 * @returns Hreflang links object or null if no translation
 */
export function getHreflangLinksFromPath(path: string, currentLocale: "en" | "tr") {
  const enPath = currentLocale === "en" ? path : REVERSE_URL_MAPPINGS[path];
  const trPath = currentLocale === "tr" ? path : URL_MAPPINGS[path];
  
  if (!enPath || !trPath) {
    return null;
  }
  
  return getHreflangLinks(enPath, trPath);
}

/**
 * Get all URL pairs for sitemap generation
 * Returns array of {en, tr} URL pairs
 */
export function getAllUrlPairs(): Array<{ en: string; tr: string }> {
  return Object.entries(URL_MAPPINGS).map(([en, tr]) => ({
    en: `${SITE_URL}${en}`,
    tr: `${SITE_URL}${tr}`,
  }));
}

// ============================================
// SITEMAP HELPERS
// ============================================

/**
 * Generate sitemap entry with hreflang alternates
 * 
 * @param enPath - English path
 * @param priority - Sitemap priority (0.0 - 1.0)
 * @param changeFrequency - How often the page changes
 */
export function generateSitemapEntryWithAlternates(
  enPath: string,
  priority: number = 0.8,
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" = "weekly"
) {
  const trPath = URL_MAPPINGS[enPath];
  
  const baseEntry = {
    url: `${SITE_URL}${enPath}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
  
  if (trPath) {
    return {
      ...baseEntry,
      alternates: {
        languages: {
          en: `${SITE_URL}${enPath}`,
          tr: `${SITE_URL}${trPath}`,
        },
      },
    };
  }
  
  return baseEntry;
}

/**
 * Generate Turkish sitemap entry with hreflang alternates
 */
export function generateTurkishSitemapEntryWithAlternates(
  trPath: string,
  priority: number = 0.8,
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" = "weekly"
) {
  const enPath = REVERSE_URL_MAPPINGS[trPath];
  
  const baseEntry = {
    url: `${SITE_URL}${trPath}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
  
  if (enPath) {
    return {
      ...baseEntry,
      alternates: {
        languages: {
          en: `${SITE_URL}${enPath}`,
          tr: `${SITE_URL}${trPath}`,
        },
      },
    };
  }
  
  return baseEntry;
}

// ============================================
// TYPE EXPORTS
// ============================================

export type Locale = "en" | "tr";

export interface HreflangLinks {
  en: string;
  tr: string;
  "x-default": string;
}

export interface SitemapEntryWithAlternates {
  url: string;
  lastModified: Date;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
  alternates?: {
    languages: {
      en: string;
      tr: string;
    };
  };
}

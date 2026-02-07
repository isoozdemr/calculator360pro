import { CalculatorDefinition } from "@/lib/calculators/definitions";
import { BlogPost } from "@/lib/blog/posts";
import { SITE_URL, getCategorySlugByKey } from "@/lib/constants";

const FINANCE_APPLICATION_CATEGORY = "FinanceApplication";
const HEALTH_APPLICATION_CATEGORY = "HealthApplication";

export function generateCalculatorSchema(calculator: CalculatorDefinition) {
  const categorySlug = getCategorySlugByKey(calculator.category);
  const url = `${SITE_URL}/calculators/${categorySlug}/${calculator.slug}`;
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": calculator.name,
    "description": calculator.description,
    "url": url,
    "applicationCategory":
      calculator.category === "finance"
        ? FINANCE_APPLICATION_CATEGORY
        : calculator.category === "health"
          ? HEALTH_APPLICATION_CATEGORY
          : "UtilityApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
  };
  if (calculator.category === "finance") {
    schema.about = {
      "@type": "FinancialProduct",
      "name": calculator.name,
      "description": calculator.description,
      "url": url,
    };
  }

  // Add softwareVersion (recommended by Google for better rich results)
  // Version can be updated when calculator features change
  schema.softwareVersion = "1.0";

  // Add browserRequirements (recommended for Web applications)
  schema.browserRequirements = "Requires JavaScript. Requires HTML5.";

  // Add permissions (recommended for Web applications)
  schema.permissions = "No special permissions required.";

  // Add featureList for better rich results
  schema.featureList = [
    "Free to use",
    "No registration required",
    "Instant calculations",
    "Mobile-friendly",
    "Accurate results",
  ];

  // aggregateRating omitted until real user reviews are collected (see generateAggregateRatingSchema)

  // Note: screenshot can be added in the future when we have screenshots

  return schema;
}

export function generateFAQSchema(calculator: CalculatorDefinition) {
  if (!calculator.faqs || calculator.faqs.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": calculator.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        // Note: HTML format can be added if needed in the future
        // For now, plain text is sufficient and recommended for featured snippets
      },
    })),
  };
}

/**
 * Generate AggregateRating schema for calculators
 * This helps Google display star ratings in search results
 */
export function generateAggregateRatingSchema(
  ratingValue: number = 4.8,
  reviewCount: number = 1250,
  bestRating: number = 5,
  worstRating: number = 1
) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "ratingValue": ratingValue.toString(),
    "reviewCount": reviewCount.toString(),
    "bestRating": bestRating.toString(),
    "worstRating": worstRating.toString(),
  };
}

/**
 * Generate HowTo schema for calculator pages
 * Provides step-by-step instructions for using the calculator
 */
export function generateHowToSchema(
  name: string,
  description: string,
  steps: Array<{ name: string; text: string }>,
  url: string,
  estimatedCost?: { currency: string; value: string },
  totalTime?: string
) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "url": `${url}#step-${index + 1}`,
    })),
  };

  if (estimatedCost) {
    schema.estimatedCost = {
      "@type": "MonetaryAmount",
      "currency": estimatedCost.currency,
      "value": estimatedCost.value,
    };
  }

  if (totalTime) {
    schema.totalTime = totalTime;
  }

  return schema;
}

export function generateBreadcrumbSchema(
  categoryName: string,
  categorySlug: string,
  calculatorName: string,
  calculatorSlug: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Calculators",
        "item": `${SITE_URL}/calculators`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": categoryName,
        "item": `${SITE_URL}/calculators/${categorySlug}`,
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": calculatorName,
        "item": `${SITE_URL}/calculators/${categorySlug}/${calculatorSlug}`,
      },
    ],
    // Note: numberOfItems is optional but recommended for better validation
    // It's automatically inferred from itemListElement.length, but explicit is better
  };
}

// Social media profile URLs for sameAs schema
export const SOCIAL_MEDIA_PROFILES = {
  twitter: "https://twitter.com/calculator360pro",
  facebook: "https://www.facebook.com/calculator360pro",
  linkedin: "https://www.linkedin.com/company/calculator360pro",
  pinterest: "https://www.pinterest.com/calculator360pro",
  youtube: "https://www.youtube.com/@calculator360pro",
};

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Calculator360Pro",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.svg`,
    "sameAs": [
      SOCIAL_MEDIA_PROFILES.twitter,
      SOCIAL_MEDIA_PROFILES.facebook,
      SOCIAL_MEDIA_PROFILES.linkedin,
      SOCIAL_MEDIA_PROFILES.pinterest,
      SOCIAL_MEDIA_PROFILES.youtube,
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "contact@calculator360pro.com",
      "availableLanguage": ["English", "Turkish"],
    },
    "foundingDate": "2025",
    "description": "Calculator360Pro provides free, accurate online calculators for finance, health, education, math, and everyday needs.",
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Calculator360Pro",
    "url": SITE_URL,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateCategoryPageSchema(
  categoryName: string,
  categorySlug: string,
  calculators: Array<{ name: string; slug: string; category: string }>
) {
  const itemList = {
    "@type": "ItemList" as const,
    "numberOfItems": calculators.length,
    "itemListElement": calculators.map((calc, index) => ({
      "@type": "ListItem" as const,
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication" as const,
        "name": calc.name,
        "url": `${SITE_URL}/calculators/${getCategorySlugByKey(calc.category as any)}/${calc.slug}`,
      },
    })),
  };
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${categoryName} Calculators`,
    "description": `Free ${categoryName.toLowerCase()} calculators including ${calculators.slice(0, 3).map(c => c.name).join(", ")} and more.`,
    "url": `${SITE_URL}/calculators/${categorySlug}`,
    "mainEntity": itemList,
  };
}

/**
 * Generate FAQPage schema from a list of Q&A (for blog, guides, etc.)
 */
export function generateFAQPageSchema(faqs: Array<{ question: string; answer: string }>) {
  if (!faqs?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

/**
 * Generate SpeakableSpecification for voice search (Article, WebPage)
 * cssSelector targets the content that can be read aloud
 */
export function generateSpeakableSchema(cssSelectors: string[]) {
  if (!cssSelectors?.length) return undefined;
  return {
    "@type": "SpeakableSpecification" as const,
    cssSelector: cssSelectors,
  };
}

/**
 * Generate Article schema for blog posts
 * This helps Google understand blog content and display rich results
 */
export function generateArticleSchema(post: BlogPost) {
  const article: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "image": `${SITE_URL}/og-image.png`,
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": SITE_URL,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Calculator360Pro",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.svg`,
      },
    },
    "datePublished": post.date,
    "dateModified": post.dateModified || post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    "url": `${SITE_URL}/blog/${post.slug}`,
    "keywords": post.tags.join(", "),
    "articleSection": post.category,
    "inLanguage": "en-US",
  };
  const speakable = generateSpeakableSchema([".prose p", ".prose h2", ".prose h3"]);
  if (speakable) article.speakable = speakable;
  return article;
}

/**
 * Generate BreadcrumbList schema for blog posts
 */
export function generateBlogBreadcrumbSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  };
}

/**
 * Generate BreadcrumbList schema for generic pages (guides, calculators list, etc.)
 * @param items - Array of { name, path } where path is relative to site root (e.g. "/guides", "/guides/financial-terms-glossary")
 */
export function generateSimpleBreadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path.startsWith("/") ? item.path : `/${item.path}`}`,
    })),
  };
}

/**
 * Generate CollectionPage + ItemList schema for blog listing pages (/blog, /tr/blog)
 */
export function generateBlogListSchema(
  posts: Array<{ title: string; slug: string; date: string }>,
  baseUrl: string,
  language: "en" | "tr"
) {
  const itemList = {
    "@type": "ItemList" as const,
    "numberOfItems": posts.length,
    "itemListElement": posts.map((post, index) => ({
      "@type": "ListItem" as const,
      "position": index + 1,
      "item": {
        "@type": "Article" as const,
        "name": post.title,
        "url": `${baseUrl}/${post.slug}`,
        "datePublished": post.date,
      },
    })),
  };
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": language === "en" ? "Blog - Calculator Guides & Tips" : "Blog - Hesap Makinesi Rehberleri",
    "url": baseUrl,
    "inLanguage": language === "en" ? "en-US" : "tr-TR",
    "mainEntity": itemList,
  };
}

// ==========================================
// TURKISH SCHEMA FUNCTIONS
// ==========================================

/**
 * Generate Turkish calculator schema (SoftwareApplication + optional FinancialProduct/health)
 */
export function generateTurkishCalculatorSchema(
  name: string,
  description: string,
  slug: string,
  categorySlug: string,
  dateModified: string,
  category?: "finance" | "health"
) {
  const url = `${SITE_URL}/tr/hesap-makineleri/${categorySlug}/${slug}`;
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "url": url,
    "applicationCategory":
      category === "finance" ? "FinanceApplication" : category === "health" ? "HealthApplication" : "UtilityApplication",
    "operatingSystem": "Web",
    "inLanguage": "tr",
    "dateModified": dateModified,
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "TRY" },
    "softwareVersion": "1.0",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "permissions": "No special permissions required.",
    "featureList": [
      "Ücretsiz kullanım",
      "Kayıt gerekmez",
      "Anında sonuç",
      "Mobil uyumlu",
      "Doğru sonuçlar",
    ],
    "about": {
      "@type": category === "finance" ? "FinancialProduct" : "Thing",
      "name": name,
      "description": description,
    },
  };
  return schema;
}

/**
 * Generate MedicalWebPage schema for health calculator pages (optional second block)
 */
export function generateMedicalWebPageSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": name,
    "description": description,
    "url": url,
    "inLanguage": "tr",
    "maintainer": { "@type": "Organization", "name": "Calculator360Pro", "url": SITE_URL },
  };
}

/**
 * Generate Turkish breadcrumb schema
 */
export function generateTurkishBreadcrumbSchema(
  categoryName: string,
  categorySlug: string,
  calculatorName: string,
  calculatorSlug: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": `${SITE_URL}/tr`,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Hesap Makineleri",
        "item": `${SITE_URL}/tr/hesap-makineleri`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": categoryName,
        "item": `${SITE_URL}/tr/hesap-makineleri/${categorySlug}`,
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": calculatorName,
        "item": `${SITE_URL}/tr/hesap-makineleri/${categorySlug}/${calculatorSlug}`,
      },
    ],
  };
}

/**
 * Generate Turkish FAQ schema
 */
export function generateTurkishFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "inLanguage": "tr",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

/**
 * Generate Turkish HowTo schema
 */
export function generateTurkishHowToSchema(
  name: string,
  description: string,
  steps: Array<{ name: string; text: string }>,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "inLanguage": "tr",
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "url": `${url}#adim-${index + 1}`,
    })),
  };
}

/**
 * Generate Turkish Article schema for blog posts
 */
export function generateTurkishArticleSchema(
  title: string,
  description: string,
  slug: string,
  date: string,
  author: string,
  tags: string[],
  category: string,
  dateModified?: string
) {
  const article: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": `${SITE_URL}/og-image.png`,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": SITE_URL,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Calculator360Pro",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.svg`,
      },
    },
    "datePublished": date,
    "dateModified": dateModified || date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/tr/blog/${slug}`,
    },
    "url": `${SITE_URL}/tr/blog/${slug}`,
    "keywords": tags.join(", "),
    "articleSection": category,
    "inLanguage": "tr-TR",
  };
  const speakable = generateSpeakableSchema([".prose p", ".prose h2", ".prose h3"]);
  if (speakable) article.speakable = speakable;
  return article;
}

/**
 * Generate Article schema for Turkish guide pages (rehberler)
 */
export function generateTurkishGuideSchema(
  headline: string,
  description: string,
  url: string,
  dateModified: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": `${SITE_URL}/og-image.png`,
    "author": { "@type": "Organization", "name": "Calculator360Pro", "url": SITE_URL },
    "publisher": { "@type": "Organization", "name": "Calculator360Pro", "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.svg` } },
    "datePublished": dateModified,
    "dateModified": dateModified,
    "mainEntityOfPage": { "@type": "WebPage", "@id": url },
    "url": url,
    "inLanguage": "tr-TR",
  };
}

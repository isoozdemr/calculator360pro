import { CalculatorDefinition } from "@/lib/calculators/definitions";
import { SITE_URL, getCategorySlugByKey } from "@/lib/constants";

export function generateCalculatorSchema(calculator: CalculatorDefinition) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": calculator.name,
    "description": calculator.description,
    "url": `${SITE_URL}/calculators/${getCategorySlugByKey(calculator.category)}/${calculator.slug}`,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
  };

  // Add softwareVersion (recommended by Google for better rich results)
  // Version can be updated when calculator features change
  schema.softwareVersion = "1.0";

  // Add browserRequirements (recommended for Web applications)
  schema.browserRequirements = "Requires JavaScript. Requires HTML5.";

  // Add permissions (recommended for Web applications)
  schema.permissions = "No special permissions required.";

  // Note: screenshot and featureList can be added in the future
  // when we have screenshots and want to highlight specific features

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

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Calculator360Pro",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.svg`,
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "contact@calculator360pro.com",
    },
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
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${categoryName} Calculators`,
    "description": `Free ${categoryName.toLowerCase()} calculators including ${calculators.slice(0, 3).map(c => c.name).join(", ")} and more.`,
    "url": `${SITE_URL}/calculators/${categorySlug}`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": calculators.length,
      "itemListElement": calculators.map((calc, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "WebApplication",
          "name": calc.name,
          "url": `${SITE_URL}/calculators/${getCategorySlugByKey(calc.category as any)}/${calc.slug}`,
        },
      })),
    },
  };
}


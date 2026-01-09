import { CalculatorDefinition } from "@/lib/calculators/definitions";
import { SITE_URL } from "@/lib/constants";

export function generateCalculatorSchema(calculator: CalculatorDefinition) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": calculator.name,
    "description": calculator.description,
    "url": `${SITE_URL}/calculators/${calculator.category}/${calculator.slug}`,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
  };
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


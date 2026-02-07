"use client";

import {
  generateTurkishCalculatorSchema,
  generateTurkishFAQSchema,
  generateTurkishBreadcrumbSchema,
  generateTurkishHowToSchema,
  generateMedicalWebPageSchema,
} from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/constants";

export interface SchemaMarkupTRProps {
  name: string;
  description: string;
  slug: string;
  categorySlug: string;
  categoryName: string;
  dateModified: string;
  category?: "finance" | "health" | "math" | "education" | "date-time";
  faqs: Array<{ question: string; answer: string }>;
  howToName: string;
  howToDescription: string;
  howToSteps: Array<{ name: string; text: string }>;
}

export function SchemaMarkupTR({
  name,
  description,
  slug,
  categorySlug,
  categoryName,
  dateModified,
  category = "finance",
  faqs,
  howToName,
  howToDescription,
  howToSteps,
}: SchemaMarkupTRProps) {
  const url = `${SITE_URL}/tr/hesap-makineleri/${categorySlug}/${slug}`;
  const schemaCategory = category === "math" || category === "education" || category === "date-time" ? undefined : category;

  const calculatorSchema = generateTurkishCalculatorSchema(
    name,
    description,
    slug,
    categorySlug,
    dateModified,
    schemaCategory
  );
  const faqSchema = generateTurkishFAQSchema(faqs);
  const howToSchema = generateTurkishHowToSchema(
    howToName,
    howToDescription,
    howToSteps,
    url
  );
  const breadcrumbSchema = generateTurkishBreadcrumbSchema(
    categoryName,
    categorySlug,
    name,
    slug
  );
  const medicalSchema =
    category === "health"
      ? generateMedicalWebPageSchema(name, description, url)
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
      />
      {medicalSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

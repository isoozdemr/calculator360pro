import { CalculatorDefinition } from "@/lib/calculators/definitions";
import {
  generateCalculatorSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateMedicalWebPageSchema,
} from "@/lib/seo/schema";
import { generateHowToSchema } from "@/lib/seo/howto-schema";
import { CALCULATOR_CATEGORIES, SITE_URL } from "@/lib/constants";

interface SchemaMarkupProps {
  calculator: CalculatorDefinition;
}

export function SchemaMarkup({ calculator }: SchemaMarkupProps) {
  const calculatorSchema = generateCalculatorSchema(calculator);
  const faqSchema = generateFAQSchema(calculator);
  const howToSchema = generateHowToSchema(calculator);
  const categoryInfo = CALCULATOR_CATEGORIES[calculator.category];
  const categoryName = categoryInfo.name;
  const categorySlug = categoryInfo.slug;
  const breadcrumbSchema = generateBreadcrumbSchema(
    categoryName,
    categorySlug,
    calculator.name,
    calculator.slug
  );

  const calculatorUrl = `${SITE_URL}/calculators/${categorySlug}/${calculator.slug}`;
  const medicalSchema = calculator.category === "health" ? generateMedicalWebPageSchema(calculator.name, calculator.description, calculatorUrl) : null;

  return (
    <>
      {/* SoftwareApplication Schema (with FinancialProduct about for finance) */}
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
      {/* FAQ Schema for rich results */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {/* HowTo Schema for step-by-step rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      {/* BreadcrumbList Schema for navigation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}


import { CalculatorDefinition } from "@/lib/calculators/definitions";
import {
  generateCalculatorSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo/schema";
import { CALCULATOR_CATEGORIES } from "@/lib/constants";

interface SchemaMarkupProps {
  calculator: CalculatorDefinition;
}

export function SchemaMarkup({ calculator }: SchemaMarkupProps) {
  const calculatorSchema = generateCalculatorSchema(calculator);
  const faqSchema = generateFAQSchema(calculator);
  const categoryInfo = CALCULATOR_CATEGORIES[calculator.category];
  const categoryName = categoryInfo.name;
  const categorySlug = categoryInfo.slug;
  const breadcrumbSchema = generateBreadcrumbSchema(
    categoryName,
    categorySlug,
    calculator.name,
    calculator.slug
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}


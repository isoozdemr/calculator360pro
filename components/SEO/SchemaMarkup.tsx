import { CalculatorDefinition } from "@/lib/calculators/definitions";
import {
  generateCalculatorSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo/schema";
import { generateHowToSchema } from "@/lib/seo/howto-schema";
import { CALCULATOR_CATEGORIES } from "@/lib/constants";

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

  return (
    <>
      {/* WebApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
      />
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


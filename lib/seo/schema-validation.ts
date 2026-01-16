/**
 * Schema Validation Helper Functions
 * 
 * Utilities for validating schema markup structure, content, and JSON-LD format
 */

export interface SchemaValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Validate JSON-LD syntax
 */
export function validateJSONLD(schema: any): SchemaValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check if schema is an object
  if (typeof schema !== 'object' || schema === null || Array.isArray(schema)) {
    errors.push('Schema must be a valid object');
    return { isValid: false, errors, warnings };
  }

  // Check required JSON-LD fields
  if (!schema['@context']) {
    errors.push('Missing required field: @context');
  } else if (schema['@context'] !== 'https://schema.org') {
    warnings.push(`@context should be "https://schema.org", got: ${schema['@context']}`);
  }

  if (!schema['@type']) {
    errors.push('Missing required field: @type');
  }

  // Validate JSON structure (basic check)
  try {
    JSON.stringify(schema);
  } catch (e) {
    errors.push(`Invalid JSON structure: ${e}`);
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Validate WebApplication schema structure
 */
export function validateWebApplicationSchema(schema: any): SchemaValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check @type
  if (schema['@type'] !== 'WebApplication') {
    errors.push(`Expected @type to be "WebApplication", got: ${schema['@type']}`);
  }

  // Required fields for WebApplication
  const requiredFields = ['name', 'description', 'url', 'applicationCategory', 'offers'];
  for (const field of requiredFields) {
    if (!schema[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  }

  // Validate applicationCategory
  if (schema.applicationCategory && schema.applicationCategory !== 'UtilityApplication') {
    warnings.push(`applicationCategory should be "UtilityApplication" for calculators`);
  }

  // Validate offers structure
  if (schema.offers) {
    if (typeof schema.offers !== 'object') {
      errors.push('offers must be an object');
    } else {
      if (schema.offers['@type'] !== 'Offer') {
        errors.push('offers.@type must be "Offer"');
      }
      if (!schema.offers.price) {
        errors.push('offers.price is required');
      } else if (schema.offers.price !== '0') {
        warnings.push('offers.price should be "0" for free calculators');
      }
      if (!schema.offers.priceCurrency) {
        errors.push('offers.priceCurrency is required');
      } else if (schema.offers.priceCurrency !== 'USD') {
        warnings.push('offers.priceCurrency should be "USD"');
      }
    }
  }

  // Validate URL format
  if (schema.url) {
    try {
      new URL(schema.url);
    } catch (e) {
      errors.push(`Invalid URL format: ${schema.url}`);
    }
  }

  // Optional but recommended fields
  if (!schema.operatingSystem) {
    warnings.push('operatingSystem field is recommended (should be "Web")');
  } else if (schema.operatingSystem !== 'Web') {
    warnings.push('operatingSystem should be "Web"');
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Validate FAQPage schema structure
 */
export function validateFAQSchema(schema: any): SchemaValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check @type
  if (schema['@type'] !== 'FAQPage') {
    errors.push(`Expected @type to be "FAQPage", got: ${schema['@type']}`);
  }

  // Check mainEntity
  if (!schema.mainEntity) {
    errors.push('Missing required field: mainEntity');
  } else if (!Array.isArray(schema.mainEntity)) {
    errors.push('mainEntity must be an array');
  } else {
    // Validate each FAQ item
    schema.mainEntity.forEach((item: any, index: number) => {
      if (item['@type'] !== 'Question') {
        errors.push(`mainEntity[${index}].@type must be "Question"`);
      }
      if (!item.name) {
        errors.push(`mainEntity[${index}].name is required`);
      }
      if (!item.acceptedAnswer) {
        errors.push(`mainEntity[${index}].acceptedAnswer is required`);
      } else {
        if (item.acceptedAnswer['@type'] !== 'Answer') {
          errors.push(`mainEntity[${index}].acceptedAnswer.@type must be "Answer"`);
        }
        if (!item.acceptedAnswer.text) {
          errors.push(`mainEntity[${index}].acceptedAnswer.text is required`);
        } else {
          // Validate answer length (40-60 words for featured snippets)
          const wordCount = item.acceptedAnswer.text.split(/\s+/).length;
          if (wordCount < 40 || wordCount > 60) {
            warnings.push(
              `mainEntity[${index}].acceptedAnswer.text has ${wordCount} words (target: 40-60 for featured snippets)`
            );
          }
        }
      }
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Validate BreadcrumbList schema structure
 */
export function validateBreadcrumbSchema(schema: any): SchemaValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check @type
  if (schema['@type'] !== 'BreadcrumbList') {
    errors.push(`Expected @type to be "BreadcrumbList", got: ${schema['@type']}`);
  }

  // Check itemListElement
  if (!schema.itemListElement) {
    errors.push('Missing required field: itemListElement');
  } else if (!Array.isArray(schema.itemListElement)) {
    errors.push('itemListElement must be an array');
  } else {
    // Validate each breadcrumb item
    schema.itemListElement.forEach((item: any, index: number) => {
      if (item['@type'] !== 'ListItem') {
        errors.push(`itemListElement[${index}].@type must be "ListItem"`);
      }
      if (item.position !== index + 1) {
        errors.push(`itemListElement[${index}].position should be ${index + 1}, got: ${item.position}`);
      }
      if (!item.name) {
        errors.push(`itemListElement[${index}].name is required`);
      }
      if (!item.item) {
        errors.push(`itemListElement[${index}].item is required`);
      } else {
        // Validate URL format
        try {
          new URL(item.item);
        } catch (e) {
          errors.push(`itemListElement[${index}].item is not a valid URL: ${item.item}`);
        }
      }
    });

    // Check breadcrumb order (should start with Home)
    if (schema.itemListElement.length > 0) {
      const firstItem = schema.itemListElement[0];
      if (firstItem.name !== 'Home' && firstItem.name !== 'home') {
        warnings.push('First breadcrumb item should be "Home"');
      }
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Validate schema content matching
 * Checks if schema fields match calculator definition
 */
export function validateSchemaContentMatching(
  schema: any,
  calculator: {
    name: string;
    description: string;
    faqs?: Array<{ question: string; answer: string }>;
  }
): SchemaValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Validate name matching
  if (schema.name && schema.name !== calculator.name) {
    errors.push(`Schema name "${schema.name}" does not match calculator name "${calculator.name}"`);
  }

  // Validate description matching
  if (schema.description && schema.description !== calculator.description) {
    errors.push(`Schema description does not match calculator description`);
  }

  // Validate FAQ matching (if FAQ schema)
  if (schema['@type'] === 'FAQPage' && schema.mainEntity && calculator.faqs) {
    if (schema.mainEntity.length !== calculator.faqs.length) {
      errors.push(
        `FAQ count mismatch: schema has ${schema.mainEntity.length} FAQs, calculator has ${calculator.faqs.length}`
      );
    } else {
      // Check each FAQ matches
      schema.mainEntity.forEach((schemaFAQ: any, index: number) => {
        const calcFAQ = calculator.faqs![index];
        if (schemaFAQ.name !== calcFAQ.question) {
          errors.push(`FAQ[${index}] question mismatch`);
        }
        if (schemaFAQ.acceptedAnswer?.text !== calcFAQ.answer) {
          errors.push(`FAQ[${index}] answer mismatch`);
        }
      });
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Generate comprehensive schema validation report
 */
export function generateSchemaReport(
  calculatorSchema: any,
  faqSchema: any,
  breadcrumbSchema: any,
  calculator: {
    name: string;
    description: string;
    faqs?: Array<{ question: string; answer: string }>;
  }
): {
  isValid: boolean;
  calculatorSchema: SchemaValidationResult;
  faqSchema: SchemaValidationResult | null;
  breadcrumbSchema: SchemaValidationResult;
  contentMatching: SchemaValidationResult;
  allErrors: string[];
  allWarnings: string[];
} {
  const calcSchemaResult = validateJSONLD(calculatorSchema);
  const calcWebAppResult = validateWebApplicationSchema(calculatorSchema);
  const calcContentResult = validateSchemaContentMatching(calculatorSchema, calculator);

  const faqResult = faqSchema
    ? {
        ...validateJSONLD(faqSchema),
        ...validateFAQSchema(faqSchema),
        ...validateSchemaContentMatching(faqSchema, calculator),
      }
    : null;

  const breadcrumbResult = {
    ...validateJSONLD(breadcrumbSchema),
    ...validateBreadcrumbSchema(breadcrumbSchema),
  };

  const allErrors = [
    ...calcSchemaResult.errors,
    ...calcWebAppResult.errors,
    ...calcContentResult.errors,
    ...(faqResult ? faqResult.errors : []),
    ...breadcrumbResult.errors,
  ];

  const allWarnings = [
    ...calcSchemaResult.warnings,
    ...calcWebAppResult.warnings,
    ...calcContentResult.warnings,
    ...(faqResult ? faqResult.warnings : []),
    ...breadcrumbResult.warnings,
  ];

  return {
    isValid: allErrors.length === 0,
    calculatorSchema: {
      isValid: calcSchemaResult.isValid && calcWebAppResult.isValid,
      errors: [...calcSchemaResult.errors, ...calcWebAppResult.errors],
      warnings: [...calcSchemaResult.warnings, ...calcWebAppResult.warnings],
    },
    faqSchema: faqResult,
    breadcrumbSchema: breadcrumbResult,
    contentMatching: calcContentResult,
    allErrors,
    allWarnings,
  };
}


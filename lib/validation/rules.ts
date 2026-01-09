/**
 * Global Validation Rules and Patterns
 * Used across all calculators for consistent validation
 */

// Regex Patterns
export const VALIDATION_PATTERNS = {
  // Numbers
  POSITIVE_NUMBER: /^[0-9]+\.?[0-9]*$/,
  DECIMAL_NUMBER: /^-?\d*\.?\d+$/,
  INTEGER: /^-?\d+$/,
  PERCENTAGE: /^(?:100(?:\.0+)?|[0-9]{1,2}(?:\.[0-9]+)?)$/,
  
  // Dates
  DATE_YYYY_MM_DD: /^\d{4}-\d{2}-\d{2}$/,
  DATE_MM_DD_YYYY: /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/,
  DATE_DD_MM_YYYY: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
  
  // Height formats
  HEIGHT_IMPERIAL: /^(\d+)'(\d{1,2})"?$/, // e.g., 5'10 or 5'10"
  HEIGHT_METRIC: /^\d+(\.\d+)?$/, // cm
  
  // Currency
  CURRENCY: /^\$?\d{1,3}(?:,\d{3})*(?:\.\d{2})?$/,
  
  // Email
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  
  // Phone
  PHONE_US: /^(\+?1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/,
};

// Validation Functions
export interface ValidationRule {
  validate: (value: string) => boolean;
  message: string;
}

export interface FieldValidation {
  required?: boolean;
  min?: number;
  max?: number;
  pattern?: RegExp;
  custom?: ValidationRule;
  format?: (value: string) => string;
}

/**
 * Validate a field based on rules
 */
export function validateField(
  value: string,
  rules: FieldValidation
): string | null {
  // Required check
  if (rules.required && (!value || value.trim() === "")) {
    return "This field is required";
  }

  // Skip other validations if empty and not required
  if (!value || value.trim() === "") {
    return null;
  }

  // Pattern validation
  if (rules.pattern && !rules.pattern.test(value)) {
    return "Invalid format";
  }

  // Number validations
  const numValue = parseFloat(value);
  if (!isNaN(numValue)) {
    if (rules.min !== undefined && numValue < rules.min) {
      return `Value must be at least ${rules.min}`;
    }
    if (rules.max !== undefined && numValue > rules.max) {
      return `Value must be at most ${rules.max}`;
    }
  }

  // Custom validation
  if (rules.custom && !rules.custom.validate(value)) {
    return rules.custom.message;
  }

  return null;
}

/**
 * Format helpers
 */
export const formatHelpers = {
  // Format as currency
  currency: (value: string): string => {
    const num = parseFloat(value.replace(/[^0-9.]/g, ""));
    if (isNaN(num)) return value;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(num);
  },

  // Format as percentage
  percentage: (value: string): string => {
    const num = parseFloat(value.replace(/[^0-9.]/g, ""));
    if (isNaN(num)) return value;
    return `${num.toFixed(2)}%`;
  },

  // Format number with commas
  number: (value: string): string => {
    const num = parseFloat(value.replace(/[^0-9.]/g, ""));
    if (isNaN(num)) return value;
    return new Intl.NumberFormat("en-US").format(num);
  },

  // Format height (imperial)
  heightImperial: (value: string): string => {
    // Format as 5'10"
    const match = value.match(/(\d+)['\s]*(\d*)/);
    if (match) {
      const feet = match[1];
      const inches = match[2] || "";
      return inches ? `${feet}'${inches}"` : `${feet}'`;
    }
    return value;
  },
};

/**
 * Common validation rules for calculator fields
 */
export const COMMON_RULES = {
  // Positive numbers
  positiveNumber: {
    required: true,
    pattern: VALIDATION_PATTERNS.POSITIVE_NUMBER,
    min: 0.01,
    custom: {
      validate: (v: string) => parseFloat(v) > 0,
      message: "Must be a positive number",
    },
  } as FieldValidation,

  // Percentage (0-100)
  percentage: {
    required: true,
    pattern: VALIDATION_PATTERNS.PERCENTAGE,
    min: 0,
    max: 100,
    custom: {
      validate: (v: string) => {
        const num = parseFloat(v);
        return !isNaN(num) && num >= 0 && num <= 100;
      },
      message: "Percentage must be between 0 and 100",
    },
  } as FieldValidation,

  // Interest rate (0-100)
  interestRate: {
    required: true,
    min: 0,
    max: 100,
    custom: {
      validate: (v: string) => {
        const num = parseFloat(v);
        return !isNaN(num) && num >= 0 && num <= 100;
      },
      message: "Interest rate must be between 0% and 100%",
    },
  } as FieldValidation,

  // Loan amount (positive, reasonable max)
  loanAmount: {
    required: true,
    min: 1000,
    max: 10000000,
    custom: {
      validate: (v: string) => {
        const num = parseFloat(v);
        return !isNaN(num) && num >= 1000 && num <= 10000000;
      },
      message: "Loan amount must be between $1,000 and $10,000,000",
    },
  } as FieldValidation,

  // Loan term (years)
  loanTerm: {
    required: true,
    min: 1,
    max: 50,
    custom: {
      validate: (v: string) => {
        const num = parseFloat(v);
        return !isNaN(num) && num >= 1 && num <= 50 && Number.isInteger(num);
      },
      message: "Loan term must be between 1 and 50 years",
    },
  } as FieldValidation,

  // Weight (kg)
  weightKg: {
    required: true,
    min: 1,
    max: 500,
    custom: {
      validate: (v: string) => {
        const num = parseFloat(v);
        return !isNaN(num) && num >= 1 && num <= 500;
      },
      message: "Weight must be between 1 kg and 500 kg",
    },
  } as FieldValidation,

  // Weight (lbs)
  weightLbs: {
    required: true,
    min: 2.2,
    max: 1100,
    custom: {
      validate: (v: string) => {
        const num = parseFloat(v);
        return !isNaN(num) && num >= 2.2 && num <= 1100;
      },
      message: "Weight must be between 2.2 lbs and 1,100 lbs",
    },
  } as FieldValidation,

  // Height (cm)
  heightCm: {
    required: true,
    min: 30,
    max: 300,
    custom: {
      validate: (v: string) => {
        const num = parseFloat(v);
        return !isNaN(num) && num >= 30 && num <= 300;
      },
      message: "Height must be between 30 cm and 300 cm",
    },
  } as FieldValidation,

  // Height (imperial)
  heightImperial: {
    required: true,
    pattern: VALIDATION_PATTERNS.HEIGHT_IMPERIAL,
    custom: {
      validate: (v: string) => {
        const match = v.match(VALIDATION_PATTERNS.HEIGHT_IMPERIAL);
        if (!match) return false;
        const feet = parseInt(match[1]);
        const inches = parseInt(match[2] || "0");
        return feet >= 1 && feet <= 8 && inches >= 0 && inches < 12;
      },
      message: "Height must be in format: feet'inches (e.g., 5'10)",
    },
  } as FieldValidation,

  // Age
  age: {
    required: true,
    min: 0,
    max: 150,
    custom: {
      validate: (v: string) => {
        const num = parseFloat(v);
        return !isNaN(num) && num >= 0 && num <= 150 && Number.isInteger(num);
      },
      message: "Age must be between 0 and 150",
    },
  } as FieldValidation,

  // Income
  income: {
    required: true,
    min: 0,
    max: 100000000,
    custom: {
      validate: (v: string) => {
        const num = parseFloat(v);
        return !isNaN(num) && num >= 0 && num <= 100000000;
      },
      message: "Income must be between $0 and $100,000,000",
    },
  } as FieldValidation,

  // Credits (for GPA)
  credits: {
    required: true,
    min: 0.5,
    max: 10,
    custom: {
      validate: (v: string) => {
        const num = parseFloat(v);
        return !isNaN(num) && num >= 0.5 && num <= 10 && Number.isInteger(num * 2);
      },
      message: "Credits must be between 0.5 and 10 (in 0.5 increments)",
    },
  } as FieldValidation,

  // Time (years)
  timeYears: {
    required: true,
    min: 0.01,
    max: 100,
    custom: {
      validate: (v: string) => {
        const num = parseFloat(v);
        return !isNaN(num) && num > 0 && num <= 100;
      },
      message: "Time must be between 0.01 and 100 years",
    },
  } as FieldValidation,

  // Circumference measurements (cm)
  circumferenceCm: {
    required: true,
    min: 10,
    max: 200,
    custom: {
      validate: (v: string) => {
        const num = parseFloat(v);
        return !isNaN(num) && num >= 10 && num <= 200;
      },
      message: "Measurement must be between 10 cm and 200 cm",
    },
  } as FieldValidation,

  // Circumference measurements (inches)
  circumferenceInches: {
    required: true,
    min: 4,
    max: 80,
    custom: {
      validate: (v: string) => {
        const num = parseFloat(v);
        return !isNaN(num) && num >= 4 && num <= 80;
      },
      message: "Measurement must be between 4 inches and 80 inches",
    },
  } as FieldValidation,

  // Hours per week
  hoursPerWeek: {
    required: true,
    min: 1,
    max: 168,
    custom: {
      validate: (v: string) => {
        const num = parseFloat(v);
        return !isNaN(num) && num >= 1 && num <= 168 && Number.isInteger(num);
      },
      message: "Hours per week must be between 1 and 168",
    },
  } as FieldValidation,

  // Date (birth date)
  birthDate: {
    required: true,
    custom: {
      validate: (v: string) => {
        if (!v) return false;
        const date = new Date(v);
        const today = new Date();
        return date <= today && date >= new Date("1900-01-01");
      },
      message: "Birth date must be in the past and after 1900",
    },
  } as FieldValidation,

  // Optional positive number
  optionalPositive: {
    required: false,
    min: 0,
    custom: {
      validate: (v: string) => {
        if (!v || v.trim() === "") return true;
        const num = parseFloat(v);
        return !isNaN(num) && num >= 0;
      },
      message: "Must be a positive number or empty",
    },
  } as FieldValidation,
};


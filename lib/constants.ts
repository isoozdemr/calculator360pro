export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://calculator360pro.com";
export const SITE_NAME = "Calculator360Pro";

export const CALCULATOR_CATEGORIES = {
  finance: {
    name: "Finance",
    slug: "finance",
    description: "Financial calculators for loans, mortgages, investments, and more",
  },
  health: {
    name: "Health",
    slug: "health",
    description: "Health calculators for BMI, body fat, calories, and more",
  },
  education: {
    name: "Education",
    slug: "education",
    description: "Education calculators for GPA, grades, percentages, and more",
  },
  math: {
    name: "Math",
    slug: "math",
    description: "Mathematical calculators for scientific calculations and more",
  },
  dateTime: {
    name: "Date & Time",
    slug: "date-time",
    description: "Date and time calculators for age, date differences, and more",
  },
} as const;

export type CalculatorCategory = keyof typeof CALCULATOR_CATEGORIES;


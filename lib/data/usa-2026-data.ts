/**
 * USA 2026 Year Financial Data
 * 
 * This file contains all USA-specific data for English calculators.
 * Data is sourced from official sources and should be updated periodically.
 * 
 * Last Updated: February 2026
 * 
 * Official Sources:
 * - Internal Revenue Service (irs.gov)
 * - Social Security Administration (ssa.gov)
 * - Department of Labor (dol.gov)
 * - Bureau of Labor Statistics (bls.gov)
 */

// ==========================================
// DATA VERSION INFO
// ==========================================
export const USA_DATA_VERSION = {
  year: 2026,
  lastUpdated: "2026-02-01",
  lastUpdatedDisplay: "February 2026",
  sources: {
    tax: "irs.gov",
    socialSecurity: "ssa.gov",
    labor: "dol.gov",
    statistics: "bls.gov",
  },
};

// ==========================================
// FEDERAL INCOME TAX BRACKETS (2026)
// ==========================================
export interface USATaxBracket {
  min: number;
  max: number | null;
  rate: number;
}

// Single Filers (IRS 2026 inflation-adjusted)
export const FEDERAL_TAX_BRACKETS_SINGLE_2026: USATaxBracket[] = [
  { min: 0, max: 12400, rate: 10 },
  { min: 12401, max: 50400, rate: 12 },
  { min: 50401, max: 105700, rate: 22 },
  { min: 105701, max: 201775, rate: 24 },
  { min: 201776, max: 256225, rate: 32 },
  { min: 256226, max: 640600, rate: 35 },
  { min: 640601, max: null, rate: 37 },
];

// Married Filing Jointly (IRS 2026)
export const FEDERAL_TAX_BRACKETS_MARRIED_2026: USATaxBracket[] = [
  { min: 0, max: 24800, rate: 10 },
  { min: 24801, max: 100800, rate: 12 },
  { min: 100801, max: 211350, rate: 22 },
  { min: 211351, max: 403550, rate: 24 },
  { min: 403551, max: 512450, rate: 32 },
  { min: 512451, max: 1281200, rate: 35 },
  { min: 1281201, max: null, rate: 37 },
];

// Head of Household (IRS 2026)
export const FEDERAL_TAX_BRACKETS_HOH_2026: USATaxBracket[] = [
  { min: 0, max: 17750, rate: 10 },
  { min: 17751, max: 67400, rate: 12 },
  { min: 67401, max: 107550, rate: 22 },
  { min: 107551, max: 201750, rate: 24 },
  { min: 201751, max: 256200, rate: 32 },
  { min: 256201, max: 640600, rate: 35 },
  { min: 640601, max: null, rate: 37 },
];

// ==========================================
// STANDARD DEDUCTIONS (2026)
// ==========================================
export const STANDARD_DEDUCTIONS_2026 = {
  single: 16100,
  marriedFilingJointly: 32200,
  marriedFilingSeparately: 16100,
  headOfHousehold: 24400,
  
  // Additional deduction for 65+ or blind
  additional: {
    single: 1950,
    married: 1550,
  },
};

// ==========================================
// SOCIAL SECURITY (2026)
// ==========================================
export const SOCIAL_SECURITY_2026 = {
  taxRate: {
    employee: 6.2, // %6.2
    employer: 6.2, // %6.2
    selfEmployed: 12.4, // %12.4
  },
  
  wageBase: 184500, // Maximum taxable earnings (2026)
  
  // Benefits
  fullRetirementAge: {
    "1960AndLater": 67,
  },
  
  // COLA (Cost of Living Adjustment)
  colaIncrease: 2.5, // Projected
  
  maxBenefit: {
    atFullRetirement: 3822, // Monthly
    at62: 2710, // Monthly (reduced)
    at70: 4873, // Monthly (delayed)
  },
};

// ==========================================
// MEDICARE (2026)
// ==========================================
export const MEDICARE_2026 = {
  taxRate: {
    employee: 1.45, // %1.45
    employer: 1.45, // %1.45
    selfEmployed: 2.9, // %2.9
  },
  
  // Additional Medicare Tax
  additionalTax: {
    rate: 0.9, // %0.9
    threshold: {
      single: 200000,
      marriedFilingJointly: 250000,
      marriedFilingSeparately: 125000,
    },
  },
  
  // Part B Premium
  partBPremium: 185, // Monthly (standard)
};

// ==========================================
// FEDERAL MINIMUM WAGE
// ==========================================
export const MINIMUM_WAGE_2026 = {
  federal: 7.25, // Per hour (unchanged since 2009)
  tippedMinimum: 2.13, // Per hour
  
  // Common state minimums (examples)
  states: {
    california: 16.00,
    newYork: 16.00,
    washington: 16.66,
    florida: 13.00,
    texas: 7.25, // Federal minimum
  },
};

// ==========================================
// 401(K) LIMITS (2026)
// ==========================================
export const RETIREMENT_401K_2026 = {
  employeeContribution: 23000, // Annual limit
  catchUpContribution: 7500, // Age 50+
  totalLimit: 69000, // Including employer match
  
  // IRA limits
  iraContribution: 7000,
  iraCatchUp: 1000, // Age 50+
  
  // Roth IRA income limits
  rothIRA: {
    single: {
      fullContribution: 146000,
      phaseOutEnd: 161000,
    },
    married: {
      fullContribution: 230000,
      phaseOutEnd: 240000,
    },
  },
};

// ==========================================
// HEALTH INSURANCE
// ==========================================
export const HEALTH_INSURANCE_2026 = {
  // ACA Marketplace
  federalPovertyLevel: {
    individual: 15060,
    family4: 31200,
  },
  
  // HSA limits
  hsa: {
    individual: 4300,
    family: 8550,
    catchUp: 1000, // Age 55+
  },
  
  // FSA limits
  fsa: {
    healthCare: 3200,
    dependentCare: 5000,
  },
};

// ==========================================
// CAPITAL GAINS TAX (2026)
// ==========================================
export const CAPITAL_GAINS_2026 = {
  shortTerm: "Ordinary income rates", // Same as income tax
  
  longTerm: {
    rate0: {
      single: 47025,
      marriedFilingJointly: 94050,
    },
    rate15: {
      single: 518900,
      marriedFilingJointly: 583750,
    },
    rate20: "Above 15% threshold",
  },
  
  // Net Investment Income Tax
  niit: {
    rate: 3.8,
    threshold: {
      single: 200000,
      marriedFilingJointly: 250000,
    },
  },
};

// ==========================================
// FICO CREDIT SCORE RANGES
// ==========================================
export const CREDIT_SCORE_RANGES = {
  exceptional: { min: 800, max: 850 },
  veryGood: { min: 740, max: 799 },
  good: { min: 670, max: 739 },
  fair: { min: 580, max: 669 },
  poor: { min: 300, max: 579 },
};

// ==========================================
// MORTGAGE RATES (Reference - varies by lender)
// ==========================================
export const MORTGAGE_REFERENCE_2026 = {
  conventional30Year: 6.5, // Approximate
  conventional15Year: 5.75,
  fha30Year: 6.25,
  va30Year: 6.0,
  jumboThreshold: 766550, // Conforming loan limit
};

// ==========================================
// GPA SYSTEM (USA)
// ==========================================
export interface USAGradeScale {
  letter: string;
  gpa: number;
  minPercent: number;
  maxPercent: number;
  description: string;
}

export const USA_GRADE_SCALE: USAGradeScale[] = [
  { letter: "A+", gpa: 4.0, minPercent: 97, maxPercent: 100, description: "Excellent" },
  { letter: "A", gpa: 4.0, minPercent: 93, maxPercent: 96, description: "Excellent" },
  { letter: "A-", gpa: 3.7, minPercent: 90, maxPercent: 92, description: "Excellent" },
  { letter: "B+", gpa: 3.3, minPercent: 87, maxPercent: 89, description: "Good" },
  { letter: "B", gpa: 3.0, minPercent: 83, maxPercent: 86, description: "Good" },
  { letter: "B-", gpa: 2.7, minPercent: 80, maxPercent: 82, description: "Good" },
  { letter: "C+", gpa: 2.3, minPercent: 77, maxPercent: 79, description: "Average" },
  { letter: "C", gpa: 2.0, minPercent: 73, maxPercent: 76, description: "Average" },
  { letter: "C-", gpa: 1.7, minPercent: 70, maxPercent: 72, description: "Average" },
  { letter: "D+", gpa: 1.3, minPercent: 67, maxPercent: 69, description: "Below Average" },
  { letter: "D", gpa: 1.0, minPercent: 63, maxPercent: 66, description: "Below Average" },
  { letter: "D-", gpa: 0.7, minPercent: 60, maxPercent: 62, description: "Below Average" },
  { letter: "F", gpa: 0.0, minPercent: 0, maxPercent: 59, description: "Failing" },
];

export const USA_GPA_INFO = {
  passingGPA: 2.0,
  deansListGPA: 3.5,
  summaGPA: 3.9, // Summa Cum Laude
  magnaGPA: 3.7, // Magna Cum Laude
  cumLaudeGPA: 3.5, // Cum Laude
  maxGPA: 4.0,
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Calculate federal income tax (progressive)
 */
export function calculateUSAFederalTax(
  income: number,
  filingStatus: "single" | "married" | "hoh" = "single"
): {
  totalTax: number;
  effectiveRate: number;
  marginalRate: number;
  breakdown: { bracket: USATaxBracket; taxableAmount: number; tax: number }[];
} {
  const brackets = 
    filingStatus === "married" ? FEDERAL_TAX_BRACKETS_MARRIED_2026 :
    filingStatus === "hoh" ? FEDERAL_TAX_BRACKETS_HOH_2026 :
    FEDERAL_TAX_BRACKETS_SINGLE_2026;

  let remainingIncome = income;
  let totalTax = 0;
  let marginalRate = 0;
  const breakdown: { bracket: USATaxBracket; taxableAmount: number; tax: number }[] = [];

  for (const bracket of brackets) {
    if (remainingIncome <= 0) break;

    const bracketMax = bracket.max ?? Infinity;
    const bracketRange = bracketMax - bracket.min + 1;
    const taxableAmount = Math.min(remainingIncome, bracketRange);
    const tax = taxableAmount * (bracket.rate / 100);

    breakdown.push({ bracket, taxableAmount, tax });
    totalTax += tax;
    marginalRate = bracket.rate;
    remainingIncome -= taxableAmount;
  }

  return {
    totalTax,
    effectiveRate: income > 0 ? (totalTax / income) * 100 : 0,
    marginalRate,
    breakdown,
  };
}

/**
 * Calculate Social Security and Medicare taxes (FICA)
 */
export function calculateFICATax(income: number): {
  socialSecurity: number;
  medicare: number;
  additionalMedicare: number;
  total: number;
} {
  // Social Security (capped at wage base)
  const socialSecurityIncome = Math.min(income, SOCIAL_SECURITY_2026.wageBase);
  const socialSecurity = socialSecurityIncome * (SOCIAL_SECURITY_2026.taxRate.employee / 100);

  // Medicare (no cap)
  const medicare = income * (MEDICARE_2026.taxRate.employee / 100);

  // Additional Medicare Tax (above threshold)
  const threshold = MEDICARE_2026.additionalTax.threshold.single;
  const additionalMedicareIncome = Math.max(0, income - threshold);
  const additionalMedicare = additionalMedicareIncome * (MEDICARE_2026.additionalTax.rate / 100);

  return {
    socialSecurity,
    medicare,
    additionalMedicare,
    total: socialSecurity + medicare + additionalMedicare,
  };
}

/**
 * Calculate net paycheck (simplified)
 */
export function calculateUSANetPay(
  grossSalary: number,
  payFrequency: "annual" | "monthly" | "biweekly" | "weekly" = "annual",
  filingStatus: "single" | "married" | "hoh" = "single"
): {
  gross: number;
  federalTax: number;
  socialSecurity: number;
  medicare: number;
  totalDeductions: number;
  net: number;
} {
  // Convert to annual if needed
  const annualSalary = 
    payFrequency === "monthly" ? grossSalary * 12 :
    payFrequency === "biweekly" ? grossSalary * 26 :
    payFrequency === "weekly" ? grossSalary * 52 :
    grossSalary;

  // Calculate taxes
  const standardDeductionMap: Record<string, number> = {
    single: STANDARD_DEDUCTIONS_2026.single,
    married: STANDARD_DEDUCTIONS_2026.marriedFilingJointly,
    hoh: STANDARD_DEDUCTIONS_2026.headOfHousehold,
  };
  const standardDeduction = standardDeductionMap[filingStatus] || STANDARD_DEDUCTIONS_2026.single;
  const taxableIncome = Math.max(0, annualSalary - standardDeduction);
  
  const { totalTax: federalTax } = calculateUSAFederalTax(taxableIncome, filingStatus);
  const fica = calculateFICATax(annualSalary);

  const totalDeductions = federalTax + fica.total;
  const netAnnual = annualSalary - totalDeductions;

  // Convert back to original frequency
  const divisor = 
    payFrequency === "monthly" ? 12 :
    payFrequency === "biweekly" ? 26 :
    payFrequency === "weekly" ? 52 :
    1;

  return {
    gross: grossSalary,
    federalTax: federalTax / divisor,
    socialSecurity: fica.socialSecurity / divisor,
    medicare: (fica.medicare + fica.additionalMedicare) / divisor,
    totalDeductions: totalDeductions / divisor,
    net: netAnnual / divisor,
  };
}

/**
 * Convert percentage to GPA
 */
export function convertUSAPercentToGPA(percent: number): { gpa: number; letter: string; description: string } {
  for (const grade of USA_GRADE_SCALE) {
    if (percent >= grade.minPercent && percent <= grade.maxPercent) {
      return { gpa: grade.gpa, letter: grade.letter, description: grade.description };
    }
  }
  return { gpa: 0, letter: "F", description: "Failing" };
}

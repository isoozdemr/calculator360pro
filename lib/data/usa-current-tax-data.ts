export type FilingStatus = "single" | "mfj" | "mfs" | "hoh";

/**
 * Current-year US tax assumptions used by planning calculators.
 * Keep this file updated yearly from official IRS releases.
 */
export const US_TAX_DATA_VERSION = {
  taxYearLabel: "Current Year",
  lastReviewed: "2026-03-20",
  sourceNotes: [
    "IRS revenue procedure for inflation-adjusted tax parameters.",
    "SSA wage base announcement for Social Security.",
  ],
} as const;

/**
 * Long-term capital gains thresholds.
 * Values represent taxable income cutoffs for each filing status.
 */
export const US_LTCG_THRESHOLDS: Record<
  FilingStatus,
  { zeroRateMax: number; fifteenRateMax: number }
> = {
  single: { zeroRateMax: 49450, fifteenRateMax: 545500 },
  mfj: { zeroRateMax: 98900, fifteenRateMax: 613700 },
  mfs: { zeroRateMax: 49450, fifteenRateMax: 306850 },
  hoh: { zeroRateMax: 66200, fifteenRateMax: 579600 },
};

/**
 * Additional Medicare thresholds by filing status.
 */
export const US_ADDITIONAL_MEDICARE_THRESHOLDS: Record<FilingStatus, number> = {
  single: 200000,
  mfj: 250000,
  mfs: 125000,
  hoh: 200000,
};

/**
 * Self-employment tax constants.
 */
export const US_SELF_EMPLOYMENT_TAX = {
  seEarningsFactor: 0.9235,
  socialSecurityRate: 0.124,
  medicareRate: 0.029,
  additionalMedicareRate: 0.009,
  socialSecurityWageBase: 184500,
} as const;

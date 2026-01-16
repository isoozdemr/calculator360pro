/**
 * Date and Year Utilities
 * 
 * Provides dynamic date and year values for content generation
 * Ensures all dates are current and automatically updated
 */

/**
 * Get the current year
 * @returns Current year as a number (e.g., 2026)
 */
export function getCurrentYear(): number {
  return new Date().getFullYear();
}

/**
 * Get the current year as a string
 * @returns Current year as a string (e.g., "2026")
 */
export function getCurrentYearString(): string {
  return getCurrentYear().toString();
}

/**
 * Get the previous year
 * @returns Previous year as a number (e.g., 2025)
 */
export function getPreviousYear(): number {
  return getCurrentYear() - 1;
}

/**
 * Get the previous year as a string
 * @returns Previous year as a string (e.g., "2025")
 */
export function getPreviousYearString(): string {
  return getPreviousYear().toString();
}

/**
 * Get current date in a readable format
 * @returns Current date string (e.g., "January 15, 2026")
 */
export function getCurrentDateString(): string {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Get tax year information
 * Tax year typically refers to the year for which taxes are being filed
 * For most purposes, this is the previous year (e.g., in 2026, we file for 2025)
 * But for planning purposes, it might be the current year
 * 
 * @param useCurrentYear - If true, use current year; if false, use previous year (default: false for filing, true for planning)
 * @returns Tax year as a number
 */
export function getTaxYear(useCurrentYear: boolean = false): number {
  return useCurrentYear ? getCurrentYear() : getPreviousYear();
}

/**
 * Get tax year as a string
 * @param useCurrentYear - If true, use current year; if false, use previous year (default: false for filing, true for planning)
 * @returns Tax year as a string
 */
export function getTaxYearString(useCurrentYear: boolean = false): string {
  return getTaxYear(useCurrentYear).toString();
}


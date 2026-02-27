/**
 * USA Annual CPI-U Inflation Data
 *
 * Bureau of Labor Statistics (BLS) annual Consumer Price Index for All Urban Consumers (CPI-U)
 * year-over-year inflation rates. Used for the Inflation / Purchasing Power calculator (EN).
 *
 * Source: bls.gov
 * Last updated: February 2026
 */

export const USA_INFLATION_DATA_VERSION = {
  lastUpdated: "2026-02-01",
  lastUpdatedDisplay: "February 2026",
  source: "BLS (bls.gov)",
};

export interface USAInflationYearEntry {
  year: number;
  ratePercent: number;
  description?: string;
}

/**
 * Annual CPI-U inflation rates (percent). 2026 is estimate; update when BLS releases.
 */
export const USA_ANNUAL_INFLATION_RATES: USAInflationYearEntry[] = [
  { year: 2015, ratePercent: 0.1 },
  { year: 2016, ratePercent: 1.3 },
  { year: 2017, ratePercent: 2.1 },
  { year: 2018, ratePercent: 1.9 },
  { year: 2019, ratePercent: 2.3 },
  { year: 2020, ratePercent: 1.2 },
  { year: 2021, ratePercent: 4.7 },
  { year: 2022, ratePercent: 8.0 },
  { year: 2023, ratePercent: 4.1 },
  { year: 2024, ratePercent: 3.4 },
  { year: 2025, ratePercent: 2.9 },
  { year: 2026, ratePercent: 2.5, description: "Estimate - update when BLS releases" },
];

export const USA_INFLATION_RATE_BY_YEAR: Record<number, number> = Object.fromEntries(
  USA_ANNUAL_INFLATION_RATES.map((e) => [e.year, e.ratePercent])
);

export function getUSAInflationFactorBetweenYears(
  startYear: number,
  endYear: number
): number {
  if (startYear === endYear) return 1;
  let factor = 1;
  const [minY, maxY] = startYear < endYear ? [startYear, endYear] : [endYear, startYear];
  for (let y = minY; y < maxY; y++) {
    const rate = USA_INFLATION_RATE_BY_YEAR[y];
    if (rate != null) factor *= 1 + rate / 100;
  }
  return startYear < endYear ? factor : 1 / factor;
}

export function adjustAmountForUSAInflation(
  amount: number,
  fromYear: number,
  toYear: number
): number {
  const factor = getUSAInflationFactorBetweenYears(fromYear, toYear);
  return Math.round(amount * factor * 100) / 100;
}

export const USA_INFLATION_YEAR_MIN = Math.min(
  ...USA_ANNUAL_INFLATION_RATES.map((e) => e.year)
);
export const USA_INFLATION_YEAR_MAX = Math.max(
  ...USA_ANNUAL_INFLATION_RATES.map((e) => e.year)
);

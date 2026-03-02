/**
 * EN/TR locale-aware formatting for tool (calculator) pages.
 * Use for display and parsing so users see and enter numbers in their locale.
 * EN: 1,234.56 (comma thousands, dot decimal)
 * TR: 1.234,56 (dot thousands, comma decimal)
 */

export type FormatLocale = "en" | "tr";

export const LOCALE_CONFIG = {
  en: {
    decimal: ".",
    thousands: ",",
    currency: "$",
    currencySuffix: false,
    percentSuffix: true,
    percentSymbol: "%",
    dateOrder: "mdy" as const,
    dateFormat: "MM/DD/YYYY",
  },
  tr: {
    decimal: ",",
    thousands: ".",
    currency: "₺",
    currencySuffix: true,
    percentSuffix: true,
    percentSymbol: "%",
    dateOrder: "dmy" as const,
    dateFormat: "DD.MM.YYYY",
  },
} as const;

/**
 * Parse a locale-formatted number string to a number.
 * Accepts both locale separators and plain digits (e.g. 1234.56 or 1.234,56 for TR).
 */
export function parseLocaleNumber(str: string, locale: FormatLocale): number | null {
  if (str == null || str.trim() === "") return null;
  const s = str.trim().replace(/\s/g, "");
  const { decimal, thousands } = LOCALE_CONFIG[locale];
  let normalized: string;
  if (locale === "tr") {
    normalized = s.replace(new RegExp("\\" + thousands, "g"), "").replace(decimal, ".");
  } else {
    normalized = s.replace(new RegExp("\\" + thousands, "g"), "").replace(decimal, ".");
  }
  const num = parseFloat(normalized);
  return isNaN(num) ? null : num;
}

/**
 * Format a number for display (thousands + decimal).
 */
export function formatNumber(
  value: number,
  locale: FormatLocale,
  options?: { minFractionDigits?: number; maxFractionDigits?: number }
): string {
  const loc = locale === "tr" ? "tr-TR" : "en-US";
  return new Intl.NumberFormat(loc, {
    minimumFractionDigits: options?.minFractionDigits ?? 0,
    maximumFractionDigits: options?.maxFractionDigits ?? 2,
  }).format(value);
}

/**
 * Format as currency. EN: $1,234.56  TR: 1.234,56 ₺
 */
export function formatCurrency(
  value: number,
  locale: FormatLocale,
  options?: { minFractionDigits?: number; maxFractionDigits?: number }
): string {
  if (locale === "tr") {
    const formatted = formatNumber(value, "tr", {
      minFractionDigits: options?.minFractionDigits ?? 2,
      maxFractionDigits: options?.maxFractionDigits ?? 2,
    });
    return `${formatted} ₺`;
  }
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: options?.minFractionDigits ?? 2,
    maximumFractionDigits: options?.maxFractionDigits ?? 2,
  }).format(value);
  return formatted;
}

/**
 * Format as percent. EN: 12.5%  TR: %12,5
 */
export function formatPercent(
  value: number,
  locale: FormatLocale,
  options?: { minFractionDigits?: number; maxFractionDigits?: number }
): string {
  const loc = locale === "tr" ? "tr-TR" : "en-US";
  const formatted = new Intl.NumberFormat(loc, {
    style: "percent",
    minimumFractionDigits: options?.minFractionDigits ?? 1,
    maximumFractionDigits: options?.maxFractionDigits ?? 2,
  }).format(value / 100);
  return formatted;
}

/**
 * Placeholder examples for number/currency inputs.
 */
export function getNumberPlaceholder(locale: FormatLocale, example?: number): string {
  const ex = example ?? 10000;
  return formatNumber(ex, locale, { maxFractionDigits: 2 });
}

export function getCurrencyPlaceholder(locale: FormatLocale, example?: number): string {
  const ex = example ?? 10000;
  return locale === "tr" ? formatNumber(ex, "tr", { maxFractionDigits: 0 }) : "10000";
}

export function getPercentPlaceholder(locale: FormatLocale): string {
  return locale === "tr" ? "12,5" : "12.5";
}

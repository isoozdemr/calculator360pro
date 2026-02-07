/**
 * Türkiye Yıllık TÜFE Enflasyon Verileri
 *
 * TÜİK (Türkiye İstatistik Kurumu) yıllık Tüketici Fiyat Endeksi (TÜFE)
 * enflasyon oranları. Enflasyon ve alım gücü hesap makinesi için kullanılır.
 *
 * Kaynak: data.tuik.gov.tr, TCMB
 * Son güncelleme: Şubat 2026
 */

export const INFLATION_DATA_VERSION = {
  lastUpdated: "2026-02-01",
  lastUpdatedDisplay: "Şubat 2026",
  source: "TÜİK, TCMB",
};

/** Yıllık enflasyon oranı (yüzde, örn: 20.30 = %20,30) */
export interface InflationYearEntry {
  year: number;
  ratePercent: number;
  description?: string;
}

/**
 * Yıllık TÜFE enflasyon oranları (TÜİK açıklamalarına göre).
 * Yeni yıl verisi açıklandıkça bu diziyi güncelleyin.
 */
export const TURKEY_ANNUAL_INFLATION_RATES: InflationYearEntry[] = [
  { year: 2015, ratePercent: 8.81 },
  { year: 2016, ratePercent: 8.53 },
  { year: 2017, ratePercent: 11.92 },
  { year: 2018, ratePercent: 20.3 },
  { year: 2019, ratePercent: 11.84 },
  { year: 2020, ratePercent: 14.6 },
  { year: 2021, ratePercent: 36.08 },
  { year: 2022, ratePercent: 64.27 },
  { year: 2023, ratePercent: 64.77 },
  { year: 2024, ratePercent: 44.38 },
  { year: 2025, ratePercent: 30.89 },
  { year: 2026, ratePercent: 25, description: "Tahmini - yıl sonu güncellenir" },
];

/** Yıl bazında oran map (kolay erişim) */
export const INFLATION_RATE_BY_YEAR: Record<number, number> = Object.fromEntries(
  TURKEY_ANNUAL_INFLATION_RATES.map((e) => [e.year, e.ratePercent])
);

/**
 * İki yıl arasında bileşik enflasyon faktörü hesaplar.
 * Örnek: 2020'daki 100 TL, 2024'te 100 * factor = TL değerinde olur.
 */
export function getInflationFactorBetweenYears(
  startYear: number,
  endYear: number
): number {
  if (startYear === endYear) return 1;
  let factor = 1;
  const [minY, maxY] = startYear < endYear ? [startYear, endYear] : [endYear, startYear];
  for (let y = minY; y < maxY; y++) {
    const rate = INFLATION_RATE_BY_YEAR[y];
    if (rate != null) factor *= 1 + rate / 100;
  }
  return startYear < endYear ? factor : 1 / factor;
}

/**
 * Belirli bir yıldaki tutarın başka bir yıldaki eşdeğerini hesaplar.
 */
export function adjustAmountForInflation(
  amount: number,
  fromYear: number,
  toYear: number
): number {
  const factor = getInflationFactorBetweenYears(fromYear, toYear);
  return Math.round(amount * factor * 100) / 100;
}

/** Hesaplama için kullanılabilecek minimum ve maksimum yıllar */
export const INFLATION_YEAR_MIN = Math.min(
  ...TURKEY_ANNUAL_INFLATION_RATES.map((e) => e.year)
);
export const INFLATION_YEAR_MAX = Math.max(
  ...TURKEY_ANNUAL_INFLATION_RATES.map((e) => e.year)
);

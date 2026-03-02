/**
 * 2026 Motorlu Taşıt Vergisi (MTV) - Otomobil tarifesi (2018 öncesi tescilli)
 * Kaynak: Cumhurbaşkanı Kararı / Resmi Gazete. Güncelleme: 2026.
 * 2018 sonrası tescilli araçlarda taşıt değeri (matrah) da dahil olduğu için
 * bu tablo sadece 2018 öncesi tescilli araçlar için tahmini rehber niteliğindedir.
 */
export const MTV_2026_SOURCE = "Resmi Gazete / Cumhurbaşkanı Kararı 2026";

export type MTVEngineBracket = "0-1300" | "1301-1600" | "1601-1800" | "1801-2000" | "2001-plus";
export type MTVAgeGroup = "1-3" | "4-6" | "7-11" | "12-15" | "16-plus";

// 2026 MTV tutarları (TL) - 2018 öncesi tescilli otomobiller (tahmini/rehber)
// Yaş grupları: 1-3, 4-6, 7-11, 12-15, 16+
export const MTV_2026_OTOMOBIL_PRE2018: Record<MTVAgeGroup, Partial<Record<MTVEngineBracket, number>>> = {
  "1-3": {
    "0-1300": 5750,
    "1301-1600": 10044,
    "1601-1800": 15721,
    "1801-2000": 27931,
    "2001-plus": 27931, // use same as 1801-2000 for simplicity; real tariff may have higher
  },
  "4-6": {
    "0-1300": 4013,
    "1301-1600": 7007,
    "1601-1800": 10998,
    "1801-2000": 19534,
    "2001-plus": 19534,
  },
  "7-11": {
    "0-1300": 2240,
    "1301-1600": 3910,
    "1601-1800": 6138,
    "1801-2000": 10902,
    "2001-plus": 10902,
  },
  "12-15": {
    "0-1300": 1120,
    "1301-1600": 1955,
    "1601-1800": 3069,
    "1801-2000": 5451,
    "2001-plus": 5451,
  },
  "16-plus": {
    "0-1300": 560,
    "1301-1600": 978,
    "1601-1800": 1535,
    "1801-2000": 2726,
    "2001-plus": 2726,
  },
};

export function getMTVEngineBracket(cc: number): MTVEngineBracket | null {
  if (cc <= 0) return null;
  if (cc <= 1300) return "0-1300";
  if (cc <= 1600) return "1301-1600";
  if (cc <= 1800) return "1601-1800";
  if (cc <= 2000) return "1801-2000";
  return "2001-plus";
}

export function getMTVAgeGroup(years: number): MTVAgeGroup | null {
  if (years < 1) return null;
  if (years <= 3) return "1-3";
  if (years <= 6) return "4-6";
  if (years <= 11) return "7-11";
  if (years <= 15) return "12-15";
  return "16-plus";
}

export function calculateMTV2026(engineCC: number, vehicleAgeYears: number): number | null {
  const bracket = getMTVEngineBracket(engineCC);
  const ageGroup = getMTVAgeGroup(vehicleAgeYears);
  if (!bracket || !ageGroup) return null;
  const amount = MTV_2026_OTOMOBIL_PRE2018[ageGroup][bracket];
  return amount ?? null;
}

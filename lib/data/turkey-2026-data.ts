/**
 * Türkiye 2026 Yılı Güncel Verileri
 * 
 * Bu dosya tüm Türkiye'ye özel hesap makineleri için merkezi veri kaynağıdır.
 * Veriler resmi kaynaklardan alınmıştır ve periyodik olarak güncellenmelidir.
 * 
 * Son Güncelleme: Şubat 2026
 * 
 * Resmi Kaynaklar:
 * - Gelir İdaresi Başkanlığı (gib.gov.tr)
 * - Sosyal Güvenlik Kurumu (sgk.gov.tr)
 * - Çalışma ve Sosyal Güvenlik Bakanlığı (csgb.gov.tr)
 * - Türkiye Cumhuriyet Merkez Bankası (tcmb.gov.tr)
 */

// ==========================================
// VERİ GÜNCELLİĞİ BİLGİSİ
// ==========================================
export const DATA_VERSION = {
  year: 2026,
  lastUpdated: "2026-02-01",
  lastUpdatedDisplay: "Şubat 2026",
  sources: {
    tax: "gib.gov.tr",
    sgk: "sgk.gov.tr",
    minimumWage: "csgb.gov.tr",
    banking: "tcmb.gov.tr",
  },
};

// ==========================================
// GELİR VERGİSİ DİLİMLERİ (2026)
// ==========================================
export interface TaxBracket {
  min: number;
  max: number | null; // null = sınırsız
  rate: number; // yüzde olarak (örn: 15 = %15)
}

export const INCOME_TAX_BRACKETS_2026: TaxBracket[] = [
  { min: 0, max: 190000, rate: 15 },
  { min: 190001, max: 400000, rate: 20 },
  { min: 400001, max: 1500000, rate: 27 },
  { min: 1500001, max: 5300000, rate: 35 },
  { min: 5300001, max: null, rate: 40 },
];

// Ücret geliri için vergi dilimleri (2026 - ücret gelirleri)
export const WAGE_TAX_BRACKETS_2026: TaxBracket[] = [
  { min: 0, max: 190000, rate: 15 },
  { min: 190001, max: 400000, rate: 20 },
  { min: 400001, max: 1500000, rate: 27 },
  { min: 1500001, max: 5300000, rate: 35 },
  { min: 5300001, max: null, rate: 40 },
];

// ==========================================
// ASGARİ ÜCRET (2026)
// ==========================================
export const MINIMUM_WAGE_2026 = {
  gross: 33030, // Brüt asgari ücret (Resmi Gazete 26.12.2025)
  net: 28075.50, // Net asgari ücret (bekar, SGK kesintileri sonrası)
  
  // Kesintiler
  deductions: {
    sgkWorker: 4624.20, // SGK işçi payı (%14)
    unemploymentWorker: 330.30, // İşsizlik sigortası işçi payı (%1)
    stampTax: 0, // Damga vergisi (asgari ücret muaf)
    incomeTax: 0, // Gelir vergisi (asgari ücret muaf)
  },
  
  // İşveren maliyeti
  employerCost: {
    total: 40461.75, // 33.030 + SGK işveren + işsizlik işveren
    sgkEmployer: 6771.15, // SGK işveren payı (%20.5)
    unemploymentEmployer: 660.60, // İşsizlik sigortası işveren payı (%2)
  },
};

// ==========================================
// SGK PRİM ORANLARI (2026)
// ==========================================
export const SGK_RATES_2026 = {
  // İşçi kesintileri
  worker: {
    sgk: 14, // %14 - Sosyal güvenlik primi (uzun vadeli sigorta)
    unemployment: 1, // %1 - İşsizlik sigortası
    total: 15, // Toplam işçi kesintisi %15
  },
  
  // İşveren kesintileri
  employer: {
    sgk: 20.5, // %20.5 - Sosyal güvenlik primi
    unemployment: 2, // %2 - İşsizlik sigortası
    total: 22.5, // Toplam işveren kesintisi %22.5
  },
  
  // SGK tavan ve taban ücretleri (5510 sayılı Kanun - 2026 tavan 9 kat)
  limits: {
    floor: 33030, // Taban (asgari ücret)
    ceiling: 297270, // Tavan (asgari ücretin 9 katı)
  },
};

// ==========================================
// DAMGA VERGİSİ (2026)
// ==========================================
export const STAMP_TAX_2026 = {
  rate: 0.759, // Binde 7.59 (maaşlarda)
  minimumWageExempt: true, // Asgari ücret damga vergisinden muaf
};

// ==========================================
// ASGARİ GEÇİM İNDİRİMİ (AGİ) - 2026
// ==========================================
export const AGI_RATES_2026 = {
  // AGI oranları (asgari ücretin yüzdesi olarak)
  single: 50, // Bekar - %50
  marriedSpouseWorking: 50, // Evli eşi çalışan - %50
  marriedSpouseNotWorking: 60, // Evli eşi çalışmayan - %60
  
  // Çocuk başına ek AGI
  children: {
    first: 7.5, // 1. çocuk - %7.5
    second: 7.5, // 2. çocuk - %7.5
    third: 10, // 3. çocuk - %10
    fourthAndMore: 5, // 4 ve üzeri çocuk - %5
  },
  
  // 2026 için hesaplanmış AGI tutarları (asgari ücret oranı × %15 vergi)
  amounts: {
    single: 2477, // Bekar (%50 asgari ücret üzerinden)
    marriedSpouseWorking: 2477, // Evli eşi çalışan
    marriedSpouseNotWorking: 2973, // Evli eşi çalışmayan (%60)
  },
};

// ==========================================
// KONUT KREDİSİ VERGİ VE HARÇLARI (2026)
// ==========================================
export const MORTGAGE_FEES_2026 = {
  // KKDF - Kaynak Kullanımı Destekleme Fonu
  kkdf: {
    mortgage: 0, // Konut kredisi için %0
    consumer: 15, // Tüketici kredisi için %15
  },
  
  // BSMV - Banka ve Sigorta Muameleleri Vergisi
  bsmv: {
    mortgage: 0, // Konut kredisi için %0
    consumer: 5, // Tüketici kredisi için %5
  },
  
  // Tapu harçları
  titleDeedFees: {
    buyer: 2, // Alıcı tapu harcı %2
    seller: 2, // Satıcı tapu harcı %2
    total: 4, // Toplam %4
  },
  
  // Diğer masraflar (değişken)
  otherFees: {
    appraisalFee: { min: 3000, max: 8000 }, // Ekspertiz ücreti
    deedFee: { min: 1500, max: 5000 }, // Dosya masrafı
    insuranceFees: "değişken", // Sigorta ücretleri
  },
};

// ==========================================
// TÜKETİCİ KREDİSİ VERGİLERİ (2026)
// ==========================================
export const CONSUMER_LOAN_FEES_2026 = {
  kkdf: 15, // %15 KKDF
  bsmv: 5, // %5 BSMV
  totalAdditionalCost: 20, // Toplam ek maliyet (faiz üzerine)
  
  // Kredi türlerine göre
  byType: {
    personal: { kkdf: 15, bsmv: 5 }, // Bireysel ihtiyaç kredisi
    vehicle: { kkdf: 15, bsmv: 5 }, // Taşıt kredisi
    education: { kkdf: 0, bsmv: 5 }, // Eğitim kredisi (KKDF muaf)
  },
};

// ==========================================
// ÜNİVERSİTE NOT SİSTEMİ (Türkiye)
// ==========================================

// 4'lük not sistemi (YÖK Standardı)
export interface GradeScale {
  letter: string;
  gpa: number;
  minScore: number;
  maxScore: number;
  description: string;
}

export const TURKEY_GRADE_SCALE_4: GradeScale[] = [
  { letter: "AA", gpa: 4.0, minScore: 90, maxScore: 100, description: "Pekiyi" },
  { letter: "BA", gpa: 3.5, minScore: 85, maxScore: 89, description: "İyi-Pekiyi" },
  { letter: "BB", gpa: 3.0, minScore: 80, maxScore: 84, description: "İyi" },
  { letter: "CB", gpa: 2.5, minScore: 75, maxScore: 79, description: "Orta-İyi" },
  { letter: "CC", gpa: 2.0, minScore: 70, maxScore: 74, description: "Orta" },
  { letter: "DC", gpa: 1.5, minScore: 65, maxScore: 69, description: "Zayıf-Orta" },
  { letter: "DD", gpa: 1.0, minScore: 60, maxScore: 64, description: "Zayıf" },
  { letter: "FD", gpa: 0.5, minScore: 50, maxScore: 59, description: "Başarısız (Devamsız)" },
  { letter: "FF", gpa: 0.0, minScore: 0, maxScore: 49, description: "Başarısız" },
];

// 100'lük not sistemi dönüşüm tablosu
export const TURKEY_GRADE_SCALE_100 = {
  excellent: { min: 90, max: 100, label: "Pekiyi" },
  veryGood: { min: 80, max: 89, label: "İyi" },
  good: { min: 70, max: 79, label: "Orta" },
  passing: { min: 60, max: 69, label: "Geçer" },
  conditionalPass: { min: 50, max: 59, label: "Şartlı Geçer" },
  fail: { min: 0, max: 49, label: "Başarısız" },
};

// GANO (Genel Ağırlıklı Not Ortalaması) hesaplama bilgileri
export const GPA_INFO = {
  passingGPA: 2.0, // Mezuniyet için minimum GANO
  honorGPA: 3.0, // Onur öğrencisi
  highHonorGPA: 3.5, // Yüksek onur öğrencisi
  maxGPA: 4.0, // Maksimum GANO
};

// ==========================================
// EMEKLİLİK HESAPLAMA VERİLERİ (2026)
// ==========================================

// SGK Emeklilik Yaşı Tablosu (4/a - SSK)
export interface RetirementAgeTable {
  birthYearStart: number;
  birthYearEnd: number;
  retirementAgeMale: number;
  retirementAgeFemale: number;
}

export const SGK_RETIREMENT_AGE_TABLE: RetirementAgeTable[] = [
  { birthYearStart: 1956, birthYearEnd: 1959, retirementAgeMale: 60, retirementAgeFemale: 58 },
  { birthYearStart: 1960, birthYearEnd: 1963, retirementAgeMale: 61, retirementAgeFemale: 59 },
  { birthYearStart: 1964, birthYearEnd: 1967, retirementAgeMale: 62, retirementAgeFemale: 60 },
  { birthYearStart: 1968, birthYearEnd: 1971, retirementAgeMale: 63, retirementAgeFemale: 61 },
  { birthYearStart: 1972, birthYearEnd: 1975, retirementAgeMale: 64, retirementAgeFemale: 62 },
  { birthYearStart: 1976, birthYearEnd: 1979, retirementAgeMale: 65, retirementAgeFemale: 63 },
  { birthYearStart: 1980, birthYearEnd: 1983, retirementAgeMale: 65, retirementAgeFemale: 64 },
  { birthYearStart: 1984, birthYearEnd: 2100, retirementAgeMale: 65, retirementAgeFemale: 65 },
];

// SGK Prim Gün Sayısı Şartları
export const SGK_PREMIUM_DAY_REQUIREMENTS = {
  normal: {
    minDays: 7200, // 20 yıl (7200 gün)
    minYears: 20,
  },
  reduced: {
    minDays: 5400, // 15 yıl (5400 gün) - bazı durumlar için
    minYears: 15,
  },
  disability: {
    minDays: 5400, // Malulen emeklilik
    minYears: 15,
  },
};

// EYT (Emeklilikte Yaşa Takılanlar) - 2023 düzenlemesi
export const EYT_RULES = {
  effectiveDate: "2023-03-03",
  description: "08.09.1999 öncesi sigorta girişi olanlar için yaş şartı kaldırıldı",
  eligibleInsuranceStartDate: "1999-09-08",
  requirements: {
    premiumDays: 7200, // veya 5975 (kadın) - 6300 (erkek) eski sisteme göre
  },
};

// BES (Bireysel Emeklilik Sistemi) - 2026
export const BES_2026 = {
  stateContribution: 25, // %25 devlet katkısı
  maxStateContributionPerYear: 20000, // Yıllık maksimum devlet katkısı (TL)
  vestingPeriod: 10, // 10 yıl kalma şartı (devlet katkısı için)
  minimumAge: 56, // Emeklilik için minimum yaş
  minimumYears: 10, // Minimum sistemde kalma süresi
  
  // Devlet katkısı hak ediş oranları
  vestingRates: {
    year3: 15, // 3 yıl sonra %15
    year6: 35, // 6 yıl sonra %35
    year10: 60, // 10 yıl sonra %60
    retirement: 100, // Emeklilik halinde %100
  },
};

// ==========================================
// YARDIMCI FONKSİYONLAR
// ==========================================

/**
 * Verilen gelire göre vergi hesapla (kademeli)
 */
export function calculateIncomeTax(income: number): {
  totalTax: number;
  effectiveRate: number;
  breakdown: { bracket: TaxBracket; taxableAmount: number; tax: number }[];
} {
  let remainingIncome = income;
  let totalTax = 0;
  const breakdown: { bracket: TaxBracket; taxableAmount: number; tax: number }[] = [];

  for (const bracket of INCOME_TAX_BRACKETS_2026) {
    if (remainingIncome <= 0) break;

    const bracketMax = bracket.max ?? Infinity;
    const bracketRange = bracketMax - bracket.min + 1;
    const taxableAmount = Math.min(remainingIncome, bracketRange);
    const tax = taxableAmount * (bracket.rate / 100);

    breakdown.push({ bracket, taxableAmount, tax });
    totalTax += tax;
    remainingIncome -= taxableAmount;
  }

  return {
    totalTax,
    effectiveRate: income > 0 ? (totalTax / income) * 100 : 0,
    breakdown,
  };
}

/**
 * Brüt maaştan net maaş hesapla
 */
export function calculateNetSalary(grossSalary: number, maritalStatus: "single" | "marriedSpouseWorking" | "marriedSpouseNotWorking" = "single", childCount: number = 0): {
  gross: number;
  net: number;
  deductions: {
    sgk: number;
    unemployment: number;
    incomeTax: number;
    stampTax: number;
    total: number;
  };
  agi: number;
} {
  // SGK kesintileri (taban-tavan arası)
  const sgkBase = Math.min(Math.max(grossSalary, SGK_RATES_2026.limits.floor), SGK_RATES_2026.limits.ceiling);
  const sgkDeduction = sgkBase * (SGK_RATES_2026.worker.sgk / 100);
  const unemploymentDeduction = sgkBase * (SGK_RATES_2026.worker.unemployment / 100);
  
  // Gelir vergisi matrahı
  const taxableIncome = grossSalary - sgkDeduction - unemploymentDeduction;
  
  // Gelir vergisi hesaplama
  const { totalTax: incomeTax } = calculateIncomeTax(taxableIncome);
  
  // Damga vergisi (asgari ücret muaf)
  const stampTax = grossSalary <= MINIMUM_WAGE_2026.gross ? 0 : grossSalary * (STAMP_TAX_2026.rate / 1000);
  
  // AGI hesaplama
  let agiRate = AGI_RATES_2026.single;
  if (maritalStatus === "marriedSpouseNotWorking") {
    agiRate = AGI_RATES_2026.marriedSpouseNotWorking;
  }
  
  // Çocuk AGI ekleme
  let childAgi = 0;
  if (childCount >= 1) childAgi += AGI_RATES_2026.children.first;
  if (childCount >= 2) childAgi += AGI_RATES_2026.children.second;
  if (childCount >= 3) childAgi += AGI_RATES_2026.children.third;
  if (childCount >= 4) childAgi += AGI_RATES_2026.children.fourthAndMore * (childCount - 3);
  
  const agi = (MINIMUM_WAGE_2026.gross * (agiRate + childAgi) / 100) * 0.15;
  
  const totalDeductions = sgkDeduction + unemploymentDeduction + incomeTax + stampTax;
  const netSalary = grossSalary - totalDeductions + agi;
  
  return {
    gross: grossSalary,
    net: netSalary,
    deductions: {
      sgk: sgkDeduction,
      unemployment: unemploymentDeduction,
      incomeTax,
      stampTax,
      total: totalDeductions,
    },
    agi,
  };
}

/**
 * 100'lük nottan 4'lük GPA'ya dönüştür
 */
export function convertScoreToGPA(score: number): { gpa: number; letter: string; description: string } {
  for (const grade of TURKEY_GRADE_SCALE_4) {
    if (score >= grade.minScore && score <= grade.maxScore) {
      return { gpa: grade.gpa, letter: grade.letter, description: grade.description };
    }
  }
  return { gpa: 0, letter: "FF", description: "Başarısız" };
}

/**
 * Doğum yılına göre emeklilik yaşını hesapla
 */
export function getRetirementAge(birthYear: number, gender: "male" | "female"): number {
  for (const row of SGK_RETIREMENT_AGE_TABLE) {
    if (birthYear >= row.birthYearStart && birthYear <= row.birthYearEnd) {
      return gender === "male" ? row.retirementAgeMale : row.retirementAgeFemale;
    }
  }
  // Varsayılan: 65 yaş
  return 65;
}

/**
 * Kredi maliyeti hesapla (KKDF ve BSMV dahil)
 */
export function calculateLoanCost(
  principal: number,
  annualInterestRate: number,
  termMonths: number,
  loanType: "mortgage" | "consumer" | "vehicle" | "education"
): {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  kkdfAmount: number;
  bsmvAmount: number;
  effectiveRate: number;
} {
  // KKDF ve BSMV oranları
  let kkdfRate = 0;
  let bsmvRate = 0;
  
  if (loanType === "mortgage") {
    kkdfRate = MORTGAGE_FEES_2026.kkdf.mortgage;
    bsmvRate = MORTGAGE_FEES_2026.bsmv.mortgage;
  } else if (loanType === "education") {
    kkdfRate = CONSUMER_LOAN_FEES_2026.byType.education.kkdf;
    bsmvRate = CONSUMER_LOAN_FEES_2026.byType.education.bsmv;
  } else {
    kkdfRate = CONSUMER_LOAN_FEES_2026.kkdf;
    bsmvRate = CONSUMER_LOAN_FEES_2026.bsmv;
  }
  
  // Efektif faiz oranı (KKDF ve BSMV dahil)
  const effectiveAnnualRate = annualInterestRate * (1 + (kkdfRate + bsmvRate) / 100);
  const monthlyRate = effectiveAnnualRate / 100 / 12;
  
  // Aylık taksit hesaplama (amortisman formülü)
  const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1);
  
  const totalPayment = monthlyPayment * termMonths;
  const totalInterest = totalPayment - principal;
  
  // KKDF ve BSMV tutarları (toplam faizin üzerinden)
  const baseInterest = totalInterest / (1 + (kkdfRate + bsmvRate) / 100);
  const kkdfAmount = baseInterest * (kkdfRate / 100);
  const bsmvAmount = baseInterest * (bsmvRate / 100);
  
  return {
    monthlyPayment,
    totalPayment,
    totalInterest,
    kkdfAmount,
    bsmvAmount,
    effectiveRate: effectiveAnnualRate,
  };
}

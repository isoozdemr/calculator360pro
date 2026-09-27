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

// Ücret dışı gelirler (serbest meslek, kira, ticari vb.) için tarife - 3. dilim 1.000.000 TL
export const INCOME_TAX_BRACKETS_2026: TaxBracket[] = [
  { min: 0, max: 190000, rate: 15 },
  { min: 190001, max: 400000, rate: 20 },
  { min: 400001, max: 1000000, rate: 27 },
  { min: 1000001, max: 5300000, rate: 35 },
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

// 1 Mayıs 2008 sonrası sigortalılar (4/a): emeklilik yaşı, şartların (prim günü) tamamlandığı yıla göre kademeli
// 5510 sayılı Kanun geçici 28. madde / md. 28
export interface RetirementAgeStep {
  untilYear: number; // bu yıl sonuna kadar tamamlananlar
  female: number;
  male: number;
}

export const SGK_RETIREMENT_AGE_STEPS: RetirementAgeStep[] = [
  { untilYear: 2035, female: 58, male: 60 },
  { untilYear: 2037, female: 59, male: 61 },
  { untilYear: 2039, female: 60, male: 62 },
  { untilYear: 2041, female: 61, male: 63 },
  { untilYear: 2043, female: 62, male: 64 },
  { untilYear: 2045, female: 63, male: 65 },
  { untilYear: 2047, female: 64, male: 65 },
  { untilYear: 9999, female: 65, male: 65 },
];

export type RetirementGroup = "eyt" | "1999-2008" | "2008+";

export function getRetirementGroup(insuranceStart: Date): RetirementGroup {
  if (insuranceStart < new Date(1999, 8, 8)) return "eyt";
  if (insuranceStart < new Date(2008, 4, 1)) return "1999-2008";
  return "2008+";
}

/**
 * 4/a (SSK) emeklilik tarihi tahmini. Yılda 360 prim günü varsayılır.
 * EYT grubunda prim şartı giriş tarihine göre 5.000–5.975 gün arasında değişir; ihtiyatlı olarak 5.975 kullanılır.
 */
export function estimateSgkRetirement(opts: {
  birthYear: number;
  birthMonth: number;
  gender: "male" | "female";
  insuranceStart: Date;
  currentPremiumDays: number;
  now?: Date;
}) {
  const now = opts.now ?? new Date();
  const nowYear = now.getFullYear() + now.getMonth() / 12;
  const group = getRetirementGroup(opts.insuranceStart);
  const female = opts.gender === "female";
  const requiredPremiumDays = group === "eyt" ? 5975 : group === "1999-2008" ? 7000 : 7200;
  const remainingPremiumDays = Math.max(0, requiredPremiumDays - opts.currentPremiumDays);
  const premiumDoneYear = nowYear + remainingPremiumDays / 360;
  const birth = opts.birthYear + (opts.birthMonth - 1) / 12;

  let ageRequirement: number | null;
  let doneYear: number;
  if (group === "eyt") {
    ageRequirement = null;
    const serviceDone = opts.insuranceStart.getFullYear() + opts.insuranceStart.getMonth() / 12 + (female ? 20 : 25);
    doneYear = Math.max(premiumDoneYear, serviceDone);
  } else if (group === "1999-2008") {
    ageRequirement = female ? 58 : 60;
    doneYear = Math.max(premiumDoneYear, birth + ageRequirement);
  } else {
    const step = SGK_RETIREMENT_AGE_STEPS.find((r) => Math.floor(premiumDoneYear) <= r.untilYear)!;
    ageRequirement = female ? step.female : step.male;
    doneYear = Math.max(premiumDoneYear, birth + ageRequirement);
  }
  doneYear = Math.max(doneYear, nowYear);
  const retirementYear = Math.floor(doneYear);
  const retirementMonth = Math.min(12, Math.floor((doneYear - retirementYear) * 12) + 1);
  return {
    group,
    ageRequirement,
    requiredPremiumDays,
    remainingPremiumDays,
    retirementYear,
    retirementMonth,
    retirementAge: Math.floor(doneYear - birth),
    currentAge: Math.floor(nowYear - birth),
    yearsUntilRetirement: Math.max(0, Math.round((doneYear - nowYear) * 10) / 10),
  };
}

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
  stateContribution: 20, // %20 devlet katkısı (1 Ocak 2026 itibarıyla, RG 07.01.2026)
  maxStateContributionPerYear: 79272, // Yıllık brüt asgari ücretin (396.360 TL) %20'si
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
export function calculateIncomeTax(income: number, brackets: TaxBracket[] = INCOME_TAX_BRACKETS_2026): {
  totalTax: number;
  effectiveRate: number;
  breakdown: { bracket: TaxBracket; taxableAmount: number; tax: number }[];
} {
  let remainingIncome = income;
  let totalTax = 0;
  const breakdown: { bracket: TaxBracket; taxableAmount: number; tax: number }[] = [];

  for (const bracket of brackets) {
    if (remainingIncome <= 0) break;

    const bracketMax = bracket.max ?? Infinity;
    const bracketRange = bracketMax - (bracket.min === 0 ? 0 : bracket.min - 1);
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
  
  // Gelir vergisi: 2022'den beri asgari ücrete isabet eden vergi tüm ücretlilerde istisna (AGİ kaldırıldı).
  // Yıl başı (kümülatif matrah 0) esas alınır.
  const minWageTaxable = MINIMUM_WAGE_2026.gross * (1 - (SGK_RATES_2026.worker.sgk + SGK_RATES_2026.worker.unemployment) / 100);
  const incomeTax = Math.max(0, calculateIncomeTax(taxableIncome, WAGE_TAX_BRACKETS_2026).totalTax - calculateIncomeTax(minWageTaxable, WAGE_TAX_BRACKETS_2026).totalTax);

  // Damga vergisi: asgari ücreti aşan kısım üzerinden
  const stampTax = Math.max(0, grossSalary - MINIMUM_WAGE_2026.gross) * (STAMP_TAX_2026.rate / 1000);

  // AGİ 2022'de kaldırıldı; parametreler geriye dönük uyumluluk için tutuluyor
  void maritalStatus;
  void childCount;
  const agi = 0;

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

/**
 * Single source of truth for TR calculator categories and list.
 * Used by NavigationTR, FooterTR, and app/tr/page.tsx (homepage).
 */

export const TR_CATEGORY_SLUGS = [
  "finans",
  "saglik",
  "egitim",
  "matematik",
  "tarih-zaman",
] as const;

export type TRCategorySlug = (typeof TR_CATEGORY_SLUGS)[number];

export const TR_CATEGORY_NAMES: Record<TRCategorySlug, string> = {
  finans: "Finans",
  saglik: "Sağlık",
  egitim: "Eğitim",
  matematik: "Matematik",
  "tarih-zaman": "Tarih & Zaman",
};

/** Category display title for homepage (e.g. "Finans Hesap Makineleri"). */
export const TR_CATEGORY_PAGE_TITLES: Record<TRCategorySlug, string> = {
  finans: "Finans Hesap Makineleri",
  saglik: "Sağlık Hesap Makineleri",
  egitim: "Eğitim Hesap Makineleri",
  matematik: "Matematik Hesap Makineleri",
  "tarih-zaman": "Tarih ve Zaman Hesap Makineleri",
};

/** Short description per category for homepage. */
export const TR_CATEGORY_DESCRIPTIONS: Record<TRCategorySlug, string> = {
  finans: "Türkiye'nin en kapsamlı finansal hesaplama araçları. Vergi, maaş, kredi, BES, enflasyon alım gücü ve yatırım hesaplamalarınızı 2026 güncel verileriyle yapın.",
  saglik: "Sağlık ve fitness hedefleriniz için bilimsel hesaplama araçları. WHO ve Türkiye Sağlık Bakanlığı standartlarına uygun.",
  egitim: "Üniversite ve lise öğrencileri için akademik hesaplama araçları. Türk eğitim sistemine uygun not hesaplama.",
  matematik: "Günlük hayatta sıkça ihtiyaç duyulan matematik hesaplama araçları. Yüzde, indirim, bilimsel hesap ve birim çevirici.",
  "tarih-zaman": "Yaş, tarih farkı ve saat hesaplama araçları.",
};

export interface TRCalculatorItem {
  category: TRCategorySlug;
  slug: string;
  name: string;
  description?: string;
  icon?: string;
  badge?: string | null;
}

/** All TR calculators in display order. Same order as TURKISH_CALCULATORS in sitemap-entries. */
export const TR_CALCULATORS: TRCalculatorItem[] = [
  { category: "finans", slug: "vergi-hesap-makinesi", name: "Vergi Hesap Makinesi", description: "2026 gelir vergisi dilimleri ile yıllık verginizi hesaplayın", icon: "💰", badge: "2026 Güncel" },
  { category: "finans", slug: "maas-hesap-makinesi", name: "Maaş Hesap Makinesi", description: "Brüt-net maaş hesaplama, SGK, AGİ dahil", icon: "💵", badge: "En Popüler" },
  { category: "finans", slug: "konut-kredisi-hesap-makinesi", name: "Konut Kredisi Hesap Makinesi", description: "Mortgage hesaplama, tapu harcı ve ödeme planı", icon: "🏠", badge: null },
  { category: "finans", slug: "kredi-hesap-makinesi", name: "Kredi Hesap Makinesi", description: "İhtiyaç kredisi hesaplama, KKDF ve BSMV dahil", icon: "💳", badge: null },
  { category: "finans", slug: "emeklilik-hesap-makinesi", name: "Emeklilik Hesap Makinesi", description: "SGK emeklilik yaşı, prim gün sayısı ve BES hesaplama", icon: "🏖️", badge: "Yeni" },
  { category: "finans", slug: "bilesik-faiz-hesap-makinesi", name: "Bileşik Faiz Hesap Makinesi", description: "Bileşik faiz ile yatırım ve birikim getirisi hesaplama", icon: "📈", badge: null },
  { category: "finans", slug: "yatirim-hesap-makinesi", name: "Yatırım Hesap Makinesi", description: "Yatırım getirisi ve aylık yatırım planı hesaplama", icon: "💹", badge: null },
  { category: "finans", slug: "birikim-hesap-makinesi", name: "Birikim Hesap Makinesi", description: "Hedef birikim için aylık tasarruf hesaplama", icon: "🐷", badge: null },
  { category: "finans", slug: "butce-hesap-makinesi", name: "Bütçe Hesap Makinesi", description: "Gelir-gider dengesi ve bütçe planlama", icon: "📊", badge: null },
  { category: "finans", slug: "tasit-kredisi-hesap-makinesi", name: "Taşıt Kredisi Hesap Makinesi", description: "Araç kredisi aylık taksit ve toplam maliyet hesaplama", icon: "🚗", badge: null },
  { category: "finans", slug: "doviz-cevirici", name: "Döviz Çevirici", description: "USD, EUR, TRY ve 150+ para birimi çevirisi", icon: "💱", badge: null },
  { category: "egitim", slug: "not-ortalamasi-hesap-makinesi", name: "Not Ortalaması Hesap Makinesi", description: "GANO hesaplama, 4'lük ve 100'lük not sistemi dönüşümü", icon: "📚", badge: null },
  { category: "saglik", slug: "bmi-hesap-makinesi", name: "BMI Hesap Makinesi", description: "Vücut Kitle İndeksinizi (BMI) hesaplayın", icon: "⚖️", badge: null },
  { category: "saglik", slug: "kalori-hesap-makinesi", name: "Kalori Hesap Makinesi", description: "Günlük kalori ihtiyacınızı hesaplayın. BMH, TDEE ve makro önerileri", icon: "🔥", badge: null },
  { category: "saglik", slug: "gebelik-hesap-makinesi", name: "Gebelik Hesap Makinesi", description: "Doğum tarihi tahmini ve gebelik haftası hesaplama", icon: "👶", badge: null },
  { category: "matematik", slug: "yuzde-hesap-makinesi", name: "Yüzde Hesap Makinesi", description: "Yüzde hesaplama, artış/azalış oranı bulma", icon: "%", badge: null },
  { category: "matematik", slug: "indirim-hesap-makinesi", name: "İndirim Hesap Makinesi", description: "İndirimli fiyat, yüzde indirim ve tasarruf hesaplama", icon: "🏷️", badge: null },
  { category: "tarih-zaman", slug: "yas-hesap-makinesi", name: "Yaş Hesap Makinesi", description: "Doğum tarihinden yaş hesaplama. Yıl, ay, gün detayları ve burç", icon: "🎂", badge: null },
  { category: "tarih-zaman", slug: "tarih-farki-hesap-makinesi", name: "Tarih Farkı Hesap Makinesi", description: "İki tarih arasındaki gün, hafta, ay farkı hesaplama", icon: "📅", badge: null },
  { category: "matematik", slug: "bilimsel-hesap-makinesi", name: "Bilimsel Hesap Makinesi", description: "Trigonometri, logaritma, üs ve kök işlemleri", icon: "🔬", badge: null },
  { category: "matematik", slug: "birim-cevirici", name: "Birim Çevirici", description: "Uzunluk, ağırlık, hacim, alan ve sıcaklık birim dönüşümleri", icon: "📐", badge: null },
  { category: "tarih-zaman", slug: "saat-hesap-makinesi", name: "Saat Hesap Makinesi", description: "Süre ve saat hesaplama", icon: "⏱️", badge: null },
  { category: "saglik", slug: "vucut-yag-orani-hesap-makinesi", name: "Vücut Yağ Oranı Hesap Makinesi", description: "Vücut yağ yüzdesi tahmini", icon: "📊", badge: null },
  { category: "finans", slug: "ogrenim-kredisi-hesap-makinesi", name: "Öğrenim Kredisi Hesap Makinesi", description: "Öğrenim kredisi aylık taksit ve toplam faiz hesaplama", icon: "🎓", badge: null },
  { category: "finans", slug: "kredi-karti-borc-hesap-makinesi", name: "Kredi Kartı Borç Hesap Makinesi", description: "Kredi kartı borcunu ne zaman bitirirsiniz? Aylık ödeme ve faiz", icon: "💳", badge: null },
  { category: "finans", slug: "bahsis-hesap-makinesi", name: "Bahşiş Hesap Makinesi", description: "Restoran bahşiş ve kişi başı ücret hesaplama", icon: "🍽️", badge: null },
  { category: "finans", slug: "enflasyon-alim-gucu-hesap-makinesi", name: "Enflasyon ve Alım Gücü Hesap Makinesi", description: "TÜİK TÜFE ile paranızın alım gücünü hesaplayın", icon: "📉", badge: null },
  { category: "finans", slug: "bes-devlet-katkisi-hesap-makinesi", name: "BES Devlet Katkısı Hesap Makinesi", description: "BES %25 devlet katkısı ile birikim ve emeklilik hesaplama", icon: "🏦", badge: null },
  { category: "finans", slug: "emlak-vergisi-hesap-makinesi", name: "Emlak Vergisi Hesap Makinesi", description: "Yıllık emlak vergisi hesaplama, konut ve işyeri oranları", icon: "🏠", badge: "Yeni" },
  { category: "finans", slug: "prim-gunu-hesap-makinesi", name: "Prim Günü Hesap Makinesi", description: "SGK prim günü hesaplama, tarih aralığına göre toplam gün", icon: "📋", badge: null },
  { category: "tarih-zaman", slug: "haftalik-calisma-saati-hesap-makinesi", name: "Haftalık Çalışma Saati Hesap Makinesi", description: "Haftalık toplam çalışma saati, 45 saat sınırı ile karşılaştırma", icon: "⏱️", badge: null },
];

/** Categories with their calculators for nav/homepage. */
export interface TRCategoryWithCalculators {
  name: string;
  slug: TRCategorySlug;
  calculators: { name: string; slug: string; description?: string; icon?: string; badge?: string | null }[];
}

export function getTRCategoriesWithCalculators(): TRCategoryWithCalculators[] {
  return TR_CATEGORY_SLUGS.map((slug) => {
    const calculators = TR_CALCULATORS.filter((c) => c.category === slug);
    return {
      name: TR_CATEGORY_NAMES[slug],
      slug,
      calculators: calculators.map((c) => ({
        name: c.name,
        slug: c.slug,
        description: c.description,
        icon: c.icon,
        badge: c.badge,
      })),
    };
  });
}

/** For homepage: categories with page title and description. */
export function getTRCategoriesForHomepage(): {
  category: string;
  slug: TRCategorySlug;
  description: string;
  calculators: { name: string; slug: string; description?: string; icon?: string; badge?: string | null }[];
}[] {
  return TR_CATEGORY_SLUGS.map((slug) => {
    const calculators = TR_CALCULATORS.filter((c) => c.category === slug);
    return {
      category: TR_CATEGORY_PAGE_TITLES[slug],
      slug,
      description: TR_CATEGORY_DESCRIPTIONS[slug],
      calculators: calculators.map((c) => ({
        name: c.name,
        slug: c.slug,
        description: c.description,
        icon: c.icon,
        badge: c.badge,
      })),
    };
  });
}

export const TR_CALCULATOR_COUNT = TR_CALCULATORS.length;

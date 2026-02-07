/**
 * TR rehberler (guides) list for index page, footer, and homepage.
 */

export interface TRRehberItem {
  slug: string;
  title: string;
  description: string;
}

export const TR_REHBERLER: TRRehberItem[] = [
  {
    slug: "finansal-terimler-sozlugu",
    title: "Finansal Terimler Sözlüğü",
    description: "Vergi, SGK, kredi, emeklilik ve diğer finansal kavramların açıklamaları.",
  },
  {
    slug: "vergi-takvimi-2026",
    title: "2026 Vergi Takvimi",
    description: "2026 yılı vergi takvimi, ödeme tarihleri ve beyanname süreleri.",
  },
  {
    slug: "sgk-emeklilik-tablosu",
    title: "SGK Emeklilik Tablosu",
    description: "Emeklilik yaşı, prim gün sayısı ve kademeli emeklilik koşulları.",
  },
  {
    slug: "kredi-notu-nasil-yukseltilir",
    title: "Kredi Notu Nasıl Yükseltilir?",
    description: "Kredi notunuzu yükseltmek için pratik adımlar ve ipuçları.",
  },
  {
    slug: "vergi-indirimleri-rehberi-2026",
    title: "2026 Vergi İndirimleri Rehberi",
    description: "Gelir vergisi indirimleri, istisnalar ve 2026 güncel uygulama.",
  },
  {
    slug: "yatirim-baslangic-rehberi-2026",
    title: "Yatırım Başlangıç Rehberi 2026",
    description: "Yatırıma başlamak isteyenler için temel bilgiler ve stratejiler.",
  },
];

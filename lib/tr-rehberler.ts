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
    slug: "2026-veri-kaynaklari",
    title: "2026 Veri Kaynakları ve Güncelleme",
    description: "Türkiye 2026 özel veri setinin güncelleme bilgisi ve resmi kaynak bağlantıları.",
  },
  {
    slug: "gelir-vergisi-hesaplama-2022",
    title: "2022 Gelir Vergisi Hesaplama",
    description: "2022 vergi dilimleri ve kümülatif matrah mantığıyla gelir vergisi hesaplama rehberi.",
  },
  {
    slug: "en-iyi-konut-kredisi-hesap-makinesi-2026",
    title: "En İyi Konut Kredisi Hesap Makinesi 2026",
    description: "Konut kredisi hesap makinesi seçim kriterleri ve senaryo karşılaştırma (2026).",
  },
  {
    slug: "ogrenim-kredisi-aylik-odeme-nasil-hesaplanir",
    title: "Öğrenim Kredisi Aylık Ödeme Nasıl Hesaplanır?",
    description: "Ana para, faiz ve vade mantığıyla aylık ödemenin nasıl hesaplandığını anlatır.",
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

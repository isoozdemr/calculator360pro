import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { generateSimpleBreadcrumbSchema } from "@/lib/seo/schema";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";

export const metadata: Metadata = {
  title: "Öğrenim Kredisi Aylık Ödeme Nasıl Hesaplanır? | Calculator360Pro",
  description:
    "Öğrenim kredisi aylık ödeme hesabı için gerekli adımlar: ana para, faiz oranı ve vade mantığıyla taksit nasıl çıkarılır?",
  keywords: [
    "öğrenim kredisi aylık ödeme nasıl hesaplanır",
    "öğrenim kredisi hesap makinesi",
    "aylık taksit hesaplama",
    "amortisman mantığı",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/rehberler/ogrenim-kredisi-aylik-odeme-nasil-hesaplanir`,
    languages: {
      en: `${SITE_URL}/guides/student-loans-monthly-payment-calculator-how-to`,
      tr: `${SITE_URL}/tr/rehberler/ogrenim-kredisi-aylik-odeme-nasil-hesaplanir`,
      "x-default": `${SITE_URL}/guides/student-loans-monthly-payment-calculator-how-to`,
    },
  },
  openGraph: {
    title: "Öğrenim Kredisi Aylık Ödeme Nasıl Hesaplanır?",
    url: `${SITE_URL}/tr/rehberler/ogrenim-kredisi-aylik-odeme-nasil-hesaplanir`,
    locale: "tr_TR",
    siteName: "Calculator360Pro",
    description:
      "Ana para, faiz oranı ve vade ile aylık ödeme ve toplam maliyet mantığını adım adım anlatır.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const BREADCRUMB_ITEMS = [
  { name: "Ana Sayfa", path: "/tr" },
  { name: "Rehberler", path: "/tr/rehberler" },
  { name: "Öğrenim Kredisi Aylık Ödeme Nasıl Hesaplanır?", path: "/tr/rehberler/ogrenim-kredisi-aylik-odeme-nasil-hesaplanir" },
];

export default function OgrenimKredisiAylikOdemeNasilHesaplanirPage() {
  const breadcrumbSchema = generateSimpleBreadcrumbSchema(BREADCRUMB_ITEMS as any);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-[#f8fafc] py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <nav className="mb-6 text-sm text-[#64748b]" aria-label="Breadcrumb">
            <Link href="/tr">Ana Sayfa</Link> / <Link href="/tr/rehberler">Rehberler</Link> /{" "}
            <span className="text-[#1e293b] font-medium">Öğrenim Kredisi Aylık Ödeme</span>
          </nav>

          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">
            Öğrenim Kredisi Aylık Ödeme Nasıl Hesaplanır?
          </h1>
          <p className="text-lg text-[#64748b] mb-8 leading-relaxed">
            Bu rehber, aylık ödemenin hangi girişlere bağlı olduğunu anlatır: ana para, yıllık faiz oranı ve vade (ay sayısı).
            Ardından standart/uzun vade mantığıyla aylık taksit ve toplam maliyet nasıl değişir, bunu özetler.
          </p>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">1) Gerekli Bilgiler</h2>
          <ul className="space-y-3 text-[#334155]">
            <li>
              <strong>Ana para (P):</strong> kredi bakiyesi (taksitlerin dayandığı tutar).
            </li>
            <li>
              <strong>Faiz oranı:</strong> yıllık yüzde olarak ifade edilir.
            </li>
            <li>
              <strong>Vade:</strong> kredinin kaç ay/kaç yıl üzerinden geri ödeneceği.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">2) Aylık Taksit Mantığı</h2>
          <p className="text-[#334155] leading-relaxed mb-6">
            Sabit faizli geri ödemelerde aylık ödeme, amortisman mantığıyla hesaplanır. Seçtiğiniz faiz oranı ve vade,
            aylık taksit tutarını ve toplam faiz maliyetini doğrudan etkiler.
          </p>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">3) Standart vs Uzun Vade</h2>
          <p className="text-[#334155] leading-relaxed mb-6">
            Standart vade genellikle aylık ödemeyi yükseltir; çünkü borç daha kısa sürede kapanır. Uzun vade aylık ödemeyi düşürür,
            ancak faiz daha uzun süre biriktiğinden toplam faiz çoğu zaman artar.
          </p>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">4) Hesap Makinesini Kullan</h2>
          <p className="text-[#334155] leading-relaxed mb-6">
            Öğrenim kredisi hesap makinesine ana para/faiz/vade bilgilerinizi girin ve aylık ödeme, toplam faiz ve geri ödeme tarihi tahmini
            gibi sonuçları görün.
          </p>
          <p className="mb-8">
            <Link
              href="/tr/hesap-makineleri/finans/ogrenim-kredisi-hesap-makinesi"
              className="inline-block bg-[#2563eb] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors"
            >
              Öğrenim Kredisi Hesap Makinesini Aç
            </Link>
          </p>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">Not</h2>
          <p className="text-[#334155] leading-relaxed">
            Bu rehber ve hesap makinesi sabit vade üzerinden amortisman mantığını temel alır. Gelire dayalı geri ödeme formülleri
            veya ek ödeme tutarlarını ayrı ayrı modellemez.
          </p>

          <div className="mt-12 bg-white border border-[#e2e8f0] rounded-lg p-4">
            <h2 className="text-lg font-bold text-[#1e293b] mb-2">Kaynaklar ve Güncelleme</h2>
            <p className="text-sm text-[#64748b]">
              <strong className="text-[#1e293b]">Yazar:</strong> Calculator360Pro Ekibi
            </p>
            <p className="text-sm text-[#64748b] mt-2">
              <strong className="text-[#1e293b]">Son güncelleme:</strong> {DATA_VERSION.lastUpdatedDisplay}
            </p>
            <p className="text-sm text-[#64748b] mt-2">
              Resmi kaynaklar:{" "}
              <a href="https://www.csgb.gov.tr" target="_blank" rel="noreferrer" className="text-[#2563eb] hover:underline">
                csgb.gov.tr
              </a>{" "}
              ve{" "}
              <a href="https://www.sgk.gov.tr" target="_blank" rel="noreferrer" className="text-[#2563eb] hover:underline">
                sgk.gov.tr
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}


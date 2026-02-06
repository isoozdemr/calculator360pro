import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { TurkeyAgeCalculator } from "@/components/calculators/tr/TurkeyAgeCalculator";

export const metadata: Metadata = {
  title: "Yaş Hesap Makinesi 2026 - Doğum Tarihinden Hesapla",
  description: "Doğum tarihinizden yaşınızı anında hesaplayın! Yıl, ay, gün, burç. Ehliyet ve emeklilik yaşı için ücretsiz - deneyin.",
  keywords: [
    "yaş hesaplama",
    "yaş hesap makinesi",
    "kaç yaşındayım",
    "doğum tarihi hesaplama",
    "yaş hesapla",
    "burç hesaplama",
    "doğum günü hesaplama",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/tarih-zaman/yas-hesap-makinesi`,
    languages: {
      "en": `${SITE_URL}/calculators/date-time/age-calculator`,
      "tr": `${SITE_URL}/tr/hesap-makineleri/tarih-zaman/yas-hesap-makinesi`,
    },
  },
  openGraph: {
    title: "Yaş Hesap Makinesi | Calculator360Pro",
    description: "Ücretsiz yaş hesap makinesi. Doğum tarihinizden yaşınızı hesaplayın.",
    url: `${SITE_URL}/tr/hesap-makineleri/tarih-zaman/yas-hesap-makinesi`,
    type: "website",
    locale: "tr_TR",
    siteName: "Calculator360Pro",
  },
};

// Schema markup
function generateAgeSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Yaş Hesap Makinesi",
    "description": "Doğum tarihinizden yaşınızı hesaplama aracı",
    "url": `${SITE_URL}/tr/hesap-makineleri/tarih-zaman/yas-hesap-makinesi`,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "TRY"
    },
    "inLanguage": "tr"
  };
}

const yasFaqs = [
  { q: "Yaş nasıl hesaplanır?", a: "Yaş hesaplama, doğum tarihinizden bugünkü tarihe kadar geçen sürenin yıl, ay ve gün olarak hesaplanmasıdır. Resmi işlemlerde doğum yılından bugünkü yıl çıkarılır, ancak doğum günü henüz geçmediyse 1 yıl eksiltilir." },
  { q: "Türkiye'de ehliyet almak için yaş sınırı nedir?", a: "Türkiye'de B sınıfı (otomobil) ehliyet alabilmek için 18 yaşını doldurmuş olmak gerekir. A1 motosiklet ehliyeti için 16 yaş, A2 için 18 yaş, A sınıfsız için 24 yaş şartı aranır." },
  { q: "Türkiye'de evlilik yaşı nedir?", a: "Türk Medeni Kanunu'na göre evlilik yaşı 18'dir. Ancak hakim kararı ve yasal temsilcinin izni ile 17 yaşında evlenilebilir." },
  { q: "Emeklilik yaşı nasıl hesaplanır?", a: "Emeklilik yaşı doğum yılına ve sigorta başlangıcına göre değişir. 1999 sonrası için 58-65 yaş aralığı uygulanır. SGK emeklilik tablosundan tam yaşınızı öğrenebilirsiniz." },
  { q: "Oy kullanma yaşı kaçtır?", a: "Türkiye'de seçimlerde oy kullanabilmek için 18 yaşını doldurmuş olmak gerekir. Yaş, seçim günü itibarıyla hesaplanır." },
  { q: "65 yaş kartı nedir?", a: "65 yaşını doldurmuş vatandaşlar belediyelerden ücretsiz ulaşım kartı alabilir. Yaş doğum tarihine göre resmi olarak hesaplanır." },
];

function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": yasFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a },
    })),
  };
}

export default function YasHesapMakinesiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateAgeSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema()),
        }}
      />
      
      <div className="min-h-screen bg-[#f8fafc] py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm">
            <ol className="flex items-center space-x-2 text-[#64748b]">
              <li>
                <Link href="/tr" className="hover:text-[#2563eb]">
                  Ana Sayfa
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/tr/hesap-makineleri" className="hover:text-[#2563eb]">
                  Hesap Makineleri
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/tr/hesap-makineleri/tarih-zaman" className="hover:text-[#2563eb]">
                  Tarih ve Zaman
                </Link>
              </li>
              <li>/</li>
              <li className="text-[#1e293b] font-medium">Yaş Hesap Makinesi</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              Yaş Hesap Makinesi
            </h1>
            <p className="text-[#64748b] max-w-2xl mx-auto">
              Doğum tarihinizden yaşınızı yıl, ay, hafta ve gün olarak hesaplayın. 
              Burç bilgisi ve sonraki doğum gününüze kalan süre ile birlikte.
            </p>
          </div>

          {/* Calculator */}
          <TurkeyAgeCalculator />

          {/* Educational Content */}
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Yaş Hesaplama Nedir?
              </h2>
              <p className="text-[#64748b] mb-4">
                Yaş hesaplama, doğum tarihinizden bugüne kadar geçen süreyi ölçer. 
                Resmi işlemlerde ve günlük hayatta sıkça ihtiyaç duyulan bir hesaplamadır.
              </p>
              <div className="bg-[#f8fafc] rounded-lg p-4">
                <p className="font-mono text-center py-2">
                  Yaş = Bugünün Tarihi - Doğum Tarihi
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Türkiye&apos;de Önemli Yaş Sınırları
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#f8fafc]">
                      <th className="px-4 py-3 text-left font-semibold text-[#1e293b]">İşlem</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#1e293b]">Yaş</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#1e293b]">Açıklama</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e2e8f0]">
                    <tr>
                      <td className="px-4 py-3 font-medium text-[#1e293b]">Oy Kullanma</td>
                      <td className="px-4 py-3 text-[#64748b]">18</td>
                      <td className="px-4 py-3 text-[#64748b]">Seçimlerde oy kullanabilmek için</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-[#1e293b]">Ehliyet (B sınıfı)</td>
                      <td className="px-4 py-3 text-[#64748b]">18</td>
                      <td className="px-4 py-3 text-[#64748b]">Otomobil kullanmak için</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-[#1e293b]">Evlilik</td>
                      <td className="px-4 py-3 text-[#64748b]">18</td>
                      <td className="px-4 py-3 text-[#64748b]">Türk Medeni Kanunu gereği</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-[#1e293b]">Askerlik</td>
                      <td className="px-4 py-3 text-[#64748b]">20</td>
                      <td className="px-4 py-3 text-[#64748b]">Zorunlu askerlik yaşı</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-[#1e293b]">Emeklilik (SGK)</td>
                      <td className="px-4 py-3 text-[#64748b]">58-65</td>
                      <td className="px-4 py-3 text-[#64748b]">Doğum yılına göre değişir</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-[#1e293b]">65 Yaş Kartı</td>
                      <td className="px-4 py-3 text-[#64748b]">65</td>
                      <td className="px-4 py-3 text-[#64748b]">Ücretsiz ulaşım hakkı</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Burçlar ve Tarih Aralıkları
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { ad: "Koç", tarih: "21 Mart - 19 Nisan", emoji: "♈" },
                  { ad: "Boğa", tarih: "20 Nisan - 20 Mayıs", emoji: "♉" },
                  { ad: "İkizler", tarih: "21 Mayıs - 20 Haziran", emoji: "♊" },
                  { ad: "Yengeç", tarih: "21 Haziran - 22 Temmuz", emoji: "♋" },
                  { ad: "Aslan", tarih: "23 Temmuz - 22 Ağustos", emoji: "♌" },
                  { ad: "Başak", tarih: "23 Ağustos - 22 Eylül", emoji: "♍" },
                  { ad: "Terazi", tarih: "23 Eylül - 22 Ekim", emoji: "♎" },
                  { ad: "Akrep", tarih: "23 Ekim - 21 Kasım", emoji: "♏" },
                  { ad: "Yay", tarih: "22 Kasım - 21 Aralık", emoji: "♐" },
                  { ad: "Oğlak", tarih: "22 Aralık - 19 Ocak", emoji: "♑" },
                  { ad: "Kova", tarih: "20 Ocak - 18 Şubat", emoji: "♒" },
                  { ad: "Balık", tarih: "19 Şubat - 20 Mart", emoji: "♓" },
                ].map((burc) => (
                  <div key={burc.ad} className="bg-[#f8fafc] rounded-lg p-3 text-center">
                    <span className="text-2xl">{burc.emoji}</span>
                    <p className="font-medium text-[#1e293b] mt-1">{burc.ad}</p>
                    <p className="text-xs text-[#64748b]">{burc.tarih}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Resmi İşlemlerde Yaş Hesaplama
              </h2>
              <p className="text-[#64748b] mb-4">
                Nüfus müdürlükleri ve resmi kurumlar yaşı doğum yılına göre hesaplar; doğum günü 
                geçmeden bir yıl eksiltilir. Örneğin 15 Mart 2008 doğumlu biri, 10 Mart 2026&apos;da 
                17 yaşında sayılır; 16 Mart 2026&apos;da 18 yaşını doldurur. Emeklilik yaşı hesaplamak 
                için <Link href="/tr/hesap-makineleri/finans/emeklilik-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Emeklilik Hesap Makinesi</Link> ve 
                <Link href="/tr/rehberler/sgk-emeklilik-tablosu" className="text-[#2563eb] hover:underline font-medium"> SGK Emeklilik Tablosu</Link> rehberimizi kullanabilirsiniz.
              </p>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                İki Tarih Arası Süre Hesaplama
              </h2>
              <p className="text-[#64748b] mb-4">
                Yaşınızı gün, ay ve yıl olarak görmenin yanı sıra iki tarih arasındaki toplam gün 
                sayısını da bilmek isteyebilirsiniz. Örneğin ehliyet almak için 18 yaşını 
                doldurduğunuz günü hesaplamak veya bir etkinliğe kalan günü bulmak için 
                <Link href="/tr/hesap-makineleri/tarih-zaman/tarih-farki-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium"> Tarih Farkı Hesap Makinesi</Link> aracımızı kullanabilirsiniz.
              </p>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Sıkça Sorulan Sorular
              </h2>
              <div className="space-y-4 mb-8">
                {yasFaqs.map((faq, i) => (
                  <div key={i} className="border-b border-[#e2e8f0] pb-4 last:border-0">
                    <h3 className="font-semibold text-[#1e293b] mb-2">{faq.q}</h3>
                    <p className="text-[#64748b] text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Uzman İpuçları
              </h2>
              <ul className="list-disc list-inside text-[#64748b] space-y-2">
                <li>Uluslararası başvurularda doğum tarihinizi GG/AA/YYYY formatında yazın; karışıklığı önler.</li>
                <li>Yaş sınırı gerektiren işlemlerde (ehliyet, oy, evlilik) tam yaşınızı doğum gününüzden itibaren dikkate alın.</li>
                <li>Emeklilik ve SGK prim günü hesaplamaları için <Link href="/tr/blog/sgk-prim-gunu-hesaplama-emeklilik-icin-kac-gun-gerekli" className="text-[#2563eb] hover:underline font-medium">SGK Prim Günü Hesaplama</Link> yazımıza bakın.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

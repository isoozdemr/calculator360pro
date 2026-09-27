import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SGK Emeklilik Yaşı Tablosu 2026 | Prim Günü ve Kademeli Yaş Şartı",
  description:
    "2026 SGK emeklilik tablosu: EYT (1999 öncesi), 1999-2008 ve 2008 sonrası girişliler için emeklilik yaşı, prim günü ve sigortalılık süresi şartları. Kademeli yaş tablosu.",
  keywords: [
    "sgk emeklilik",
    "emeklilik yaşı",
    "prim günü",
    "eyt",
    "emeklilik şartları",
    "sgk tablosu",
    "emeklilik tablosu",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${SITE_URL}/tr/rehberler/sgk-emeklilik-tablosu`,
  },
  openGraph: {
    title: "SGK Emeklilik Yaş Tablosu | Calculator360Pro",
    description:
      "SGK emeklilik yaşı tablosu, prim günü şartları ve emeklilik koşulları.",
    url: `${SITE_URL}/tr/rehberler/sgk-emeklilik-tablosu`,
    locale: "tr_TR",
    type: "website",
    siteName: "Calculator360Pro",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "SGK Emeklilik Yaş Tablosu",
      },
    ],
  },
};

const FAQS = [
  { q: "2026'da kimler emekli olabilir?", a: "8 Eylül 1999 öncesi sigortalı olup kadınlarda 20, erkeklerde 25 yıl sigortalılık süresini ve 5.000–5.975 gün prim şartını dolduranlar yaş şartı olmadan; 1999–2008 arası girişliler ise kadın 58, erkek 60 yaş ve 7.000 gün (veya 25 yıl + 4.500 gün) şartıyla emekli olabilir." },
  { q: "7200 gün prim kaç yıl eder?", a: "Yılda 360 gün prim ödendiği varsayıldığında 7.200 gün yaklaşık 20 yıl kesintisiz çalışmaya denk gelir." },
  { q: "EYT'de yaş şartı var mı?", a: "Hayır. 8 Eylül 1999 öncesi sigortalılar için yaş şartı 2023'te kaldırıldı; yalnızca sigortalılık süresi ve prim günü şartı aranır." },
  { q: "Askerlik borçlanması emekliliği öne çeker mi?", a: "Askerlik borçlanması prim gününüzü artırır. İlk girişten önceki askerlik süresi borçlanılırsa sigorta başlangıç tarihi de geriye çekilebilir; bu da bazı çalışanları EYT kapsamına sokabilir." },
];

export default function SGKEmeklilikTablosuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": `${SITE_URL}/tr`,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Rehberler",
        "item": `${SITE_URL}/tr/rehberler`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "SGK Emeklilik Tablosu",
        "item": `${SITE_URL}/tr/rehberler/sgk-emeklilik-tablosu`,
      },
    ],
  };

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "SGK Emeklilik Yaş Tablosu",
    "description":
      "SGK emeklilik yaşı tablosu, prim günü şartları ve emeklilik koşulları.",
    "url": `${SITE_URL}/tr/rehberler/sgk-emeklilik-tablosu`,
    "inLanguage": "tr-TR",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-[#f8fafc] py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-[#64748b]">
            <li>
              <Link href="/tr" className="hover:text-[#2563eb] transition-colors">
                Ana Sayfa
              </Link>
            </li>
            <li><span className="mx-2">/</span></li>
            <li>
              <Link href="/tr/rehberler" className="hover:text-[#2563eb] transition-colors">
                Rehberler
              </Link>
            </li>
            <li><span className="mx-2">/</span></li>
            <li className="text-[#1e293b] font-medium">SGK Emeklilik Tablosu</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">
            SGK Emeklilik Yaşı Tablosu 2026
          </h1>
          <p className="text-lg text-[#64748b] leading-relaxed mb-4">
            SGK emeklilik yaşı, prim günü şartları ve sigortalılık süresi tablosu. 
            1999 öncesi ve sonrası sigortalılar için farklı şartlar geçerli.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Önemli:</strong> Bu tablo genel bilgilendirme amaçlıdır. Resmi bilgi için 
              SGK şubelerinden veya e-Devlet üzerinden bilgi alın. Emeklilik şartları kişisel 
              duruma göre değişebilir.
            </p>
          </div>
        </div>

        {/* Özet */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8 text-[#64748b] leading-relaxed">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Emeklilik Şartları Neye Göre Belirlenir?</h2>
          <p className="mb-4">
            Türkiye&apos;de 4A (SSK) sigortalıların emeklilik şartları <strong>ilk sigorta girişi (işe giriş) tarihine</strong> göre üç gruba ayrılır:
            8 Eylül 1999 öncesi (EYT kapsamı), 8 Eylül 1999 – 30 Nisan 2008 arası ve 1 Mayıs 2008 sonrası. Her grup için yaş, prim günü ve
            sigortalılık süresi şartları farklıdır. Emekli olabilmek için ilgili grubun <strong>tüm şartlarını birlikte</strong> sağlamanız gerekir.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-[#f8fafc]">
                <th className="border border-[#e2e8f0] p-3 text-left text-[#1e293b]">İlk sigorta girişi</th>
                <th className="border border-[#e2e8f0] p-3 text-left text-[#1e293b]">Yaş şartı</th>
                <th className="border border-[#e2e8f0] p-3 text-left text-[#1e293b]">Prim günü (4A)</th>
                <th className="border border-[#e2e8f0] p-3 text-left text-[#1e293b]">Sigortalılık süresi</th>
              </tr></thead>
              <tbody>
                <tr><td className="border border-[#e2e8f0] p-3">8 Eylül 1999 öncesi (EYT)</td><td className="border border-[#e2e8f0] p-3">Yok</td><td className="border border-[#e2e8f0] p-3">5.000 – 5.975 gün (giriş tarihine göre kademeli)</td><td className="border border-[#e2e8f0] p-3">Kadın 20 yıl, erkek 25 yıl</td></tr>
                <tr><td className="border border-[#e2e8f0] p-3">8 Eylül 1999 – 30 Nisan 2008</td><td className="border border-[#e2e8f0] p-3">Kadın 58, erkek 60</td><td className="border border-[#e2e8f0] p-3">7.000 gün</td><td className="border border-[#e2e8f0] p-3">—</td></tr>
                <tr><td className="border border-[#e2e8f0] p-3">8 Eylül 1999 – 30 Nisan 2008 (alternatif)</td><td className="border border-[#e2e8f0] p-3">Kadın 58, erkek 60</td><td className="border border-[#e2e8f0] p-3">4.500 gün</td><td className="border border-[#e2e8f0] p-3">25 yıl</td></tr>
                <tr><td className="border border-[#e2e8f0] p-3">1 Mayıs 2008 ve sonrası</td><td className="border border-[#e2e8f0] p-3">Kademeli (aşağıdaki tablo)</td><td className="border border-[#e2e8f0] p-3">7.200 gün</td><td className="border border-[#e2e8f0] p-3">—</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm">Bağ-Kur (4B) sigortalılarında prim günü şartları daha yüksektir (1 Mayıs 2008 sonrası girişlerde 9.000 gün).</p>
        </div>

        {/* EYT */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8 text-[#64748b] leading-relaxed">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-4">EYT: 8 Eylül 1999 Öncesi Sigortalılar</h2>
          <p className="mb-4">
            Mart 2023&apos;te yürürlüğe giren düzenlemeyle 8 Eylül 1999 öncesinde sigortalı olanlar için <strong>yaş şartı kaldırıldı</strong>.
            Bu gruptaki çalışanlar kadınlarda 20 yıl, erkeklerde 25 yıl sigortalılık süresini ve giriş tarihine göre 5.000 ile 5.975 gün arasında
            değişen prim günü şartını tamamladığında emekli olabilir. Giriş tarihi 1999&apos;a yaklaştıkça gereken prim günü artar.
          </p>
          <p>
            EYT kapsamındakiler için en önemli nokta ilk sigorta giriş tarihidir; staj başlangıcı veya yurt dışı borçlanması bu tarihi öne çekebilir.
            Kesin prim günü şartınızı e-Devlet &quot;SGK Hizmet Dökümü&quot; ve &quot;Emeklilik Hesaplama&quot; ekranlarından öğrenebilirsiniz.
          </p>
        </div>

        {/* 2008 sonrası kademeli */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8 text-[#64748b] leading-relaxed">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-4">1 Mayıs 2008 Sonrası: Kademeli Emeklilik Yaşı Tablosu</h2>
          <p className="mb-4">
            1 Mayıs 2008 ve sonrasında sigortalı olanlarda emeklilik yaşı, doğum yılına göre değil <strong>prim günü ve diğer şartların tamamlandığı tarihe</strong> göre belirlenir:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-[#f8fafc]">
                <th className="border border-[#e2e8f0] p-3 text-left text-[#1e293b]">Şartların tamamlandığı tarih</th>
                <th className="border border-[#e2e8f0] p-3 text-left text-[#1e293b]">Kadın</th>
                <th className="border border-[#e2e8f0] p-3 text-left text-[#1e293b]">Erkek</th>
              </tr></thead>
              <tbody>
                {[
                  ["31.12.2035'e kadar", "58", "60"],
                  ["01.01.2036 – 31.12.2037", "59", "61"],
                  ["01.01.2038 – 31.12.2039", "60", "62"],
                  ["01.01.2040 – 31.12.2041", "61", "63"],
                  ["01.01.2042 – 31.12.2043", "62", "64"],
                  ["01.01.2044 – 31.12.2045", "63", "65"],
                  ["01.01.2046 – 31.12.2047", "64", "65"],
                  ["01.01.2048 ve sonrası", "65", "65"],
                ].map(([d, k, e]) => (
                  <tr key={d}><td className="border border-[#e2e8f0] p-3">{d}</td><td className="border border-[#e2e8f0] p-3">{k}</td><td className="border border-[#e2e8f0] p-3">{e}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            <strong>Örnek:</strong> 2010&apos;da işe giren ve 7.200 prim gününü 2037&apos;de dolduran bir erkek çalışanın emeklilik yaşı 61&apos;dir.
            Prim gününüzün ne zaman dolacağını <Link href="/tr/hesap-makineleri/finans/prim-gunu-hesap-makinesi" className="text-[#2563eb] hover:underline">prim günü hesap makinesiyle</Link> tahmin edebilirsiniz.
          </p>
        </div>

        {/* SSS */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8 text-[#64748b] leading-relaxed">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Sıkça Sorulan Sorular</h2>
          <div className="space-y-4">
            {FAQS.map((f) => (
              <div key={f.q}><h3 className="font-semibold text-[#1e293b]">{f.q}</h3><p className="mt-1">{f.a}</p></div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
            Önemli Notlar
          </h2>
          <div className="space-y-4 text-[#64748b]">
            <p>
              <strong className="text-[#1e293b]">Prim Günü:</strong> Sigortalı olarak çalıştığınız her gün 
              için bir gün sayılıyor. Aylık çalışma genellikle 30 gün olarak hesaplanıyor.
            </p>
            <p>
              <strong className="text-[#1e293b]">Askerlik:</strong> Askerlik süresi kendiliğinden prim günü sayılmaz;
              borçlanma yapılarak (ücreti ödenerek) prim gününe eklenebilir.
            </p>
            <p>
              <strong className="text-[#1e293b]">Doğum Borçlanması:</strong> Kadın sigortalılar, doğum sonrası çalışılmayan süreleri
              her çocuk için 2 yıla kadar (en fazla 3 çocuk) borçlanarak prim gününe ekleyebilir.
            </p>
            <p>
              <strong className="text-[#1e293b]">Eksik Prim:</strong> Çalışmadığınız dönemlerde isteğe bağlı sigorta primi
              ödeyerek veya askerlik, doğum, yurt dışı borçlanması yaparak prim gününüzü tamamlayabilirsiniz.
            </p>
          </div>
        </div>

        {/* Related Links */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
            İlgili Hesap Makineleri ve Blog Yazıları
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/tr/hesap-makineleri/finans/emeklilik-hesap-makinesi"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">Emeklilik Hesap Makinesi</h3>
              <p className="text-sm text-[#64748b]">
                SGK emeklilik yaşı, prim gün sayısı ve emeklilik tarihi hesaplama
              </p>
            </Link>
            <Link
              href="/tr/hesap-makineleri/finans/prim-gunu-hesap-makinesi"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">Prim Günü Hesap Makinesi</h3>
              <p className="text-sm text-[#64748b]">
                Tarih aralığına göre toplam SGK prim günü hesaplama
              </p>
            </Link>
            <Link
              href="/tr/blog/eyt-nedir-kimler-faydalanabilir"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">EYT Nedir? Kimler Faydalanabilir?</h3>
              <p className="text-sm text-[#64748b]">
                EYT kapsamında emeklilik şartları ve avantajları
              </p>
            </Link>
            <Link
              href="/tr/blog/sgk-prim-gunu-hesaplama-emeklilik-icin-kac-gun-gerekli"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">SGK Prim Günü Hesaplama</h3>
              <p className="text-sm text-[#64748b]">
                Prim günü nedir, nasıl hesaplanır ve emeklilik için kaç gün gerekli
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

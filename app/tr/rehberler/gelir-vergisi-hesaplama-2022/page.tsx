import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { generateSimpleBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "2022 Gelir Vergisi Dilimleri (Arşiv) | Calculator360Pro",
  description:
    "2022 yılı gelir vergisi dilimleri arşiv sayfası: kümülatif vergi matrahı mantığı, 2022 tarifesi ve dönemin asgari ücret vergi muafiyeti reformu. Güncel oranlar için 2026 hesap makinesine bakın.",
  keywords: [
    "2022 gelir vergisi hesaplama",
    "gelir vergisi hesaplama 2022",
    "2022 vergi dilimleri",
    "gelir vergisi oranları 2022",
    "kümülatif vergi matrahı",
    "asgari ücret vergi muafiyeti 2022",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/rehberler/gelir-vergisi-hesaplama-2022`,
    languages: {
      tr: `${SITE_URL}/tr/rehberler/gelir-vergisi-hesaplama-2022`,
      "x-default": `${SITE_URL}/tr/rehberler/gelir-vergisi-hesaplama-2022`,
    },
  },
  openGraph: {
    title: "2022 Gelir Vergisi Dilimleri (Arşiv)",
    url: `${SITE_URL}/tr/rehberler/gelir-vergisi-hesaplama-2022`,
    locale: "tr_TR",
    siteName: "Calculator360Pro",
    description:
      "2022 vergi dilimleri ve kümülatif hesaplama mantığı arşiv referansı. Güncel oranlar için 2026 hesap makinesini kullanın.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const BREADCRUMB_ITEMS = [
  { name: "Ana Sayfa", path: "/tr" },
  { name: "Rehberler", path: "/tr/rehberler" },
  { name: "2022 Gelir Vergisi Dilimleri (Arşiv)", path: "/tr/rehberler/gelir-vergisi-hesaplama-2022" },
];

const faqs = [
  {
    q: "Bu sayfadaki 2022 oranları hâlâ geçerli mi?",
    a: "Hayır. Gelir vergisi dilim sınırları her yıl yeniden değerleme oranına göre güncellenir. Bu sayfa yalnızca 2022 yılına ait geçmiş veriyi arşiv olarak sunar; 2026 için güncel oranları görmek için gelir vergisi hesap makinesini kullanın.",
  },
  {
    q: "Neden hâlâ 2022 verisi tutuyorsunuz?",
    a: "2022 için geriye dönük hesap yapması gereken (örneğin o yıla ait bir ihtilafı veya eksik beyanı kontrol eden) kullanıcılar için referans niteliğinde tutuyoruz. Dilim sınırları yıldan yıla değiştiği için güncel yılın verisiyle karıştırılmaması önemlidir.",
  },
  {
    q: "Asgari ücret ne zamandan beri vergiden muaf?",
    a: "1 Ocak 2022'den itibaren, brüt asgari ücrete isabet eden gelir vergisi ve damga vergisi tutarı tüm ücretlilerin maaşından düşülüyor (asgari ücret vergi istisnası). Böylece asgari ücretle çalışanların eline geçen net ücretten gelir ve damga vergisi kesintisi yapılmıyor.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function GelirVergisiHesaplama2022Page() {
  const breadcrumbSchema = generateSimpleBreadcrumbSchema(BREADCRUMB_ITEMS as any);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-[#f8fafc] py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <nav className="mb-6 text-sm text-[#64748b]" aria-label="Breadcrumb">
            <Link href="/tr">Ana Sayfa</Link> / <Link href="/tr/rehberler">Rehberler</Link> /{" "}
            <span className="text-[#1e293b] font-medium">2022 Gelir Vergisi Dilimleri (Arşiv)</span>
          </nav>

          <div className="mb-6 p-4 rounded-lg bg-amber-50 border border-amber-200 text-sm text-amber-800">
            <strong>Arşiv sayfası:</strong> Bu sayfa yalnızca 2022 yılına ait geçmiş vergi dilimlerini gösterir. Güncel
            (2026) gelir vergisi dilimleri ve hesaplama için{" "}
            <Link href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi" className="underline font-medium">
              gelir vergisi hesap makinesini
            </Link>{" "}
            kullanın.
          </div>

          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">2022 Gelir Vergisi Dilimleri (Arşiv Referansı)</h1>
          <p className="text-lg text-[#64748b] mb-8 leading-relaxed">
            Bu rehber, 2022 yılına ait gelir vergisi dilimlerini ve kümülatif hesaplama mantığını arşiv referansı olarak
            sunar. Geriye dönük bir hesap yapıyorsanız veya o yıla ait bir kayıt doğrulaması gerekiyorsa bu sayfa size
            yardımcı olur. Güncel yıl için bu sayfadaki oranları kullanmayın.
          </p>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">Kümülatif Mantık Nedir?</h2>
          <p className="text-[#334155] leading-relaxed mb-6">
            Ücret gelirlerinde (aylık bordro uygulamalarında) vergi, yıl başından itibaren biriken matrah üzerinden
            dilime göre hesaplanır. Yani her ay, o ana kadar biriken gelir üzerinden &ldquo;kümülatif&rdquo; vergi yeniden
            değerlendirilir ve yıl ilerledikçe matrah üst dilimlere geçebilir. Bu mantık 2022&apos;de olduğu gibi bugün de
            (2026&apos;da) aynı şekilde işler; değişen yalnızca dilim sınırlarıdır.
          </p>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">2022 Vergi Dilimleri (Ücret Gelirleri)</h2>
          <div className="bg-white border border-[#e2e8f0] rounded-lg p-4 mb-8">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#1e293b] text-white">
                    <th className="text-left py-2 px-3 font-semibold">Kümülatif Yıllık Gelir</th>
                    <th className="text-right py-2 px-3 font-semibold">Oran</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#e2e8f0]">
                    <td className="py-2 px-3 text-[#334155]">0 – 32.000 TL</td>
                    <td className="py-2 px-3 text-right font-semibold text-[#2563eb]">%15</td>
                  </tr>
                  <tr className="border-b border-[#e2e8f0]">
                    <td className="py-2 px-3 text-[#334155]">32.000 – 70.000 TL</td>
                    <td className="py-2 px-3 text-right font-semibold text-[#2563eb]">%20</td>
                  </tr>
                  <tr className="border-b border-[#e2e8f0]">
                    <td className="py-2 px-3 text-[#334155]">70.000 – 250.000 TL</td>
                    <td className="py-2 px-3 text-right font-semibold text-[#2563eb]">%27</td>
                  </tr>
                  <tr className="border-b border-[#e2e8f0]">
                    <td className="py-2 px-3 text-[#334155]">250.000 – 880.000 TL</td>
                    <td className="py-2 px-3 text-right font-semibold text-[#2563eb]">%35</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-[#334155]">880.000 TL ve üzeri</td>
                    <td className="py-2 px-3 text-right font-semibold text-[#2563eb]">%40</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">2022&apos;nin Getirdiği Önemli Değişiklik: Asgari Ücret Vergi İstisnası</h2>
          <p className="text-[#334155] leading-relaxed mb-6">
            1 Ocak 2022&apos;den itibaren yürürlüğe giren düzenlemeyle, brüt asgari ücrete isabet eden gelir vergisi ve
            damga vergisi tutarı hesaplanıp tüm ücretlilerin vergisinden düşülmeye başlandı. Bu, daha önce yalnızca asgari
            geçim indirimi (AGİ) olarak uygulanan desteğin yerini aldı ve 2022&apos;den beri hem asgari ücretle çalışanlar
            hem de daha yüksek ücret alanlar için matrahın bir kısmının vergiden istisna tutulmasını sağladı. Bu mekanizma
            günümüzde (2026) de aynı mantıkla devam ediyor; güncel hesaplama için{" "}
            <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">
              maaş hesap makinesini
            </Link>{" "}
            kullanabilirsiniz.
          </p>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">Adım Adım Hesaplama Mantığı</h2>
          <ol className="space-y-3 text-[#334155] list-decimal list-inside mb-6">
            <li>İlgili yıl için brüt gelirinizi veya vergiye esas matrahınızı belirleyin.</li>
            <li>Kümülatif tutarı o yılın dilim aralıklarına göre değerlendirin.</li>
            <li>Dilim oranlarını kademeli olarak uygulayarak toplam gelir vergisini hesaplayın (her dilim yalnızca kendi aralığındaki tutara uygulanır, tüm gelire değil).</li>
            <li>Asgari ücret istisnasını düşün (2022 ve sonrası için).</li>
            <li>Gerekirse damga vergisi gibi ek kalemleri ayrıca kontrol edin.</li>
          </ol>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">Neden Dilimler Her Yıl Değişir?</h2>
          <p className="text-[#334155] leading-relaxed mb-6">
            Gelir vergisi dilim sınırları, Maliye Bakanlığı&apos;nın her yıl açıkladığı yeniden değerleme oranına göre
            güncellenir. Bu sayede enflasyon nedeniyle çalışanların bir üst vergi dilimine geçmesi (bracket creep) belli
            ölçüde yavaşlatılır. Bu yüzden 2022 tarifesini herhangi bir başka yıla uygulamak yanlış sonuç verir; her zaman
            ilgili yılın kendi tarifesini kullanmak gerekir.
          </p>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">Güncel Yıl İçin Hesap Makinesini Kullanın</h2>
          <p className="text-[#334155] leading-relaxed mb-6">
            Calculator360Pro&apos;daki gelir vergisi hesap makinesi 2026 yılı güncel dilimlerini ve ücret ile ücret dışı
            gelirler için ayrı tarifeleri kullanır.
          </p>
          <p className="mb-6">
            <Link
              href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi"
              className="inline-block bg-[#2563eb] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors"
            >
              Gelir Vergisi Hesap Makinesi (2026)
            </Link>
          </p>

          <h2 className="text-xl font-bold text-[#1e293b] mt-10 mb-4">Sıkça Sorulan Sorular</h2>
          <div className="space-y-4 mb-8">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-semibold text-[#1e293b]">{f.q}</h3>
                <p className="text-[#334155] mt-1">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white border border-[#e2e8f0] rounded-lg p-4">
            <h2 className="text-lg font-bold text-[#1e293b] mb-2">Kaynaklar ve Yazar Bilgisi</h2>
            <p className="text-sm text-[#64748b]">
              <strong className="text-[#1e293b]">Yazar:</strong> Calculator360Pro Ekibi
            </p>
            <ul className="mt-3 space-y-2 text-sm text-[#334155]">
              <li>
                Resmi kaynak:{" "}
                <a
                  href="https://www.gib.gov.tr"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#2563eb] hover:underline"
                >
                  gib.gov.tr
                </a>
              </li>
              <li>Not: Dilim aralıkları gelir türüne göre uygulamada farklılaşabilir; kendi durumunuz için doğrulayın.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

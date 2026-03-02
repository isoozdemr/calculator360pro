import { Metadata } from "next";
import { WaterIntakeCalculator } from "@/components/calculators/WaterIntakeCalculator";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { CalculatorDisclaimer } from "@/components/calculators/CalculatorDisclaimer";
import { generateTurkishHowToSchema, generateTurkishBreadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Günlük Su İhtiyacı Hesaplama 2026 | Kilo ve Aktivite - Ücretsiz",
  description: "Günlük su ihtiyacı hesaplama 2026. Kilo, aktivite ve iklime göre ne kadar su içmeniz gerektiğini öğrenin. Bardak ve ml cinsinden. Ücretsiz, anında sonuç.",
  keywords: [
    "günlük su ihtiyacı hesaplama",
    "su tüketimi hesaplama",
    "günde ne kadar su içmeli",
    "su ihtiyacı hesap makinesi",
    "günlük su miktarı",
    "kiloya göre su ihtiyacı",
    "günde kaç bardak su içilmeli",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/saglik/su-tuketimi-hesap-makinesi`,
    languages: {
      en: `${SITE_URL}/calculators/health/water-intake-calculator`,
      tr: `${SITE_URL}/tr/hesap-makineleri/saglik/su-tuketimi-hesap-makinesi`,
      "x-default": `${SITE_URL}/calculators/health/water-intake-calculator`,
    },
  },
  openGraph: {
    title: "Günlük Su İhtiyacı Hesaplama 2026 - Su Tüketimi",
    description: "Kilo ve aktiviteye göre günlük su ihtiyacı. Ücretsiz hesapla.",
    url: `${SITE_URL}/tr/hesap-makineleri/saglik/su-tuketimi-hesap-makinesi`,
    locale: "tr_TR",
    siteName: "Calculator360Pro",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Günde ne kadar su içmeliyim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Günlük su ihtiyacı vücut ağırlığı, aktivite ve iklime göre değişir. Genel bir kılavuz: kilogram başına günde yaklaşık 30–35 ml (ör. 70 kg için 2,1–2,5 litre). Bu hesap makinesi kilo ve aktivite düzeyinize göre günlük hedefi ml ve bardak olarak verir.",
      },
    },
    {
      "@type": "Question",
      name: "Su ihtiyacı aktiviteye göre değişir mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Sedanter yaşamda daha az, hareketli veya çok aktif yaşamda daha fazla sıvı gerekir. Sıcak ve nemli hava da ihtiyacı artırır. Hesaplama aracında aktivite seviyesi ve isteğe bağlı sıcak iklim / hamilelik seçenekleri vardır.",
      },
    },
    {
      "@type": "Question",
      name: "Su ml mi bardak mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sonuç hem ml hem bardak (250 ml/bardak) olarak gösterilir. Gün içine yayarak için; susuzluk ve idrar rengi yeterli hidrasyon için ipucu verir.",
      },
    },
  ],
};

export default function SuTuketimiPage() {
  const pageUrl = `${SITE_URL}/tr/hesap-makineleri/saglik/su-tuketimi-hesap-makinesi`;
  const howToSteps = [
    { name: "Vücut ağırlığını girin", text: "Kilonuzu kilogram cinsinden girin." },
    { name: "Aktivite seviyesini seçin", text: "Günlük aktivite düzeyinizi seçin." },
    { name: "İsteğe bağlı: iklim veya hamilelik", text: "Sıcak/nemli iklim veya hamilelik varsa işaretleyin." },
    { name: "Hesapla'ya tıklayın", text: "Günlük su ihtiyacınızı ml ve bardak olarak görün." },
  ];
  const howToSchema = generateTurkishHowToSchema(
    "Su Tüketimi Hesap Makinesi Nasıl Kullanılır?",
    "Günlük su ihtiyacı hesaplama adımları.",
    howToSteps,
    pageUrl
  );
  const breadcrumbSchema = generateTurkishBreadcrumbSchema("Sağlık", "saglik", "Su Tüketimi Hesap Makinesi", "su-tuketimi-hesap-makinesi");

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Su Tüketimi Hesap Makinesi",
    description: "Günlük su ihtiyacı hesaplama, kilo ve aktiviteye göre",
    url: pageUrl,
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
    inLanguage: "tr",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-[#f8fafc] py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-[#64748b]">
              <li><Link href="/tr" className="hover:text-[#2563eb] transition-colors">Ana Sayfa</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><Link href="/tr/hesap-makineleri" className="hover:text-[#2563eb] transition-colors">Hesap Makineleri</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><Link href="/tr/hesap-makineleri/saglik" className="hover:text-[#2563eb] transition-colors">Sağlık</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-[#1e293b] font-medium">Su Tüketimi Hesap Makinesi</li>
            </ol>
          </nav>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              Günlük Su İhtiyacı Hesaplama 2026
            </h1>
            <p className="text-lg text-[#64748b]">
              Kilo, aktivite ve iklime göre günde ne kadar su içmeniz gerektiğini hesaplayın. Sonuç ml ve bardak olarak. Ücretsiz.
            </p>
          </div>

          <WaterIntakeCalculator locale="tr" />
          <CalculatorDisclaimer category="health" locale="tr" />

          <div className="mt-12 prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Günlük Su İhtiyacı Nasıl Hesaplanır?</h2>
            <p className="text-[#64748b] leading-relaxed mb-4">
              Yeterli sıvı alımı enerji, sindirim ve genel sağlık için önemlidir. Günlük ihtiyaç vücut ağırlığı, aktivite düzeyi ve iklime göre değişir. Yaygın bir kılavuz: kilogram başına günde yaklaşık 30–35 ml sıvı. Örneğin 70 kg bir yetişkin için günde yaklaşık 2,1–2,5 litre (9–10 bardak) temel ihtiyaçtır. Hareketli yaşam ve sıcak hava bu ihtiyacı artırır. Bu hesap makinesi kilo ve aktivite seçiminize göre günlük hedefi ml ve bardak olarak verir. <Link href="/tr/hesap-makineleri/saglik/kalori-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Kalori hesap makinesi</Link> ve <Link href="/tr/hesap-makineleri/saglik/bmi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">BMI hesap makinesi</Link> ile birlikte kullanabilirsiniz.
            </p>

            <h3 className="text-xl font-semibold text-[#1e293b] mt-6 mb-3">Aktivite ve İklim</h3>
            <p className="text-[#64748b] leading-relaxed mb-4">
              Sedanter yaşamda temel miktar genelde yeterlidir. Hafif ve orta aktivite (yürüyüş, egzersiz) terlemeyi artırdığı için biraz daha sıvı gerekir. Çok aktif veya sıcak/nemli ortamda ekstra sıvı ekleyin. Araçta hamilelik veya sıcak iklim seçeneği de vardır. Susuzluk ve açık renkli idrar yeterli hidrasyon göstergesidir.
            </p>

            <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#1e293b]">Günde ne kadar su içmeliyim?</h4>
                <p className="text-[#64748b] mt-1">Vücut ağırlığı ve aktiviteye göre değişir. Genelde kg başına 30–35 ml (70 kg için yaklaşık 2,1–2,5 litre). Bu araç kilo ve aktiviteye göre hedef verir.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#1e293b]">Su ihtiyacı aktiviteye göre değişir mi?</h4>
                <p className="text-[#64748b] mt-1">Evet. Daha aktif veya sıcak ortamda ihtiyaç artar. Hesaplama aracında aktivite ve isteğe bağlı iklim/hamilelik seçenekleri vardır.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#1e293b]">Su ml mi bardak mı?</h4>
                <p className="text-[#64748b] mt-1">Sonuç hem ml hem bardak (250 ml/bardak) olarak gösterilir. Gün içine yayarak için.</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <RelatedCalculatorsTR categorySlug="saglik" currentSlug="su-tuketimi-hesap-makinesi" maxResults={6} />
          </div>
        </div>
      </div>
    </>
  );
}

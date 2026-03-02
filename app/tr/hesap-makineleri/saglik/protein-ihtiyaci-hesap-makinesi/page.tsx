import { Metadata } from "next";
import { ProteinCalculator } from "@/components/calculators/ProteinCalculator";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { CalculatorDisclaimer } from "@/components/calculators/CalculatorDisclaimer";
import { generateTurkishHowToSchema, generateTurkishBreadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Protein İhtiyacı Hesaplama 2026 | Günlük Gram - Ücretsiz",
  description: "Günlük protein ihtiyacı hesaplama 2026. Kilo verme, koruma veya kas için kaç gram protein almalısınız? Kilo ve hedefe göre gram. Ücretsiz, anında sonuç.",
  keywords: [
    "protein ihtiyacı hesaplama",
    "günlük protein hesaplama",
    "günde ne kadar protein",
    "protein ihtiyacı hesap makinesi",
    "kilo başına protein",
    "kas için protein ihtiyacı",
    "kilo vermek için protein",
    "günlük protein gramı",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/saglik/protein-ihtiyaci-hesap-makinesi`,
    languages: {
      en: `${SITE_URL}/calculators/health/protein-calculator`,
      tr: `${SITE_URL}/tr/hesap-makineleri/saglik/protein-ihtiyaci-hesap-makinesi`,
      "x-default": `${SITE_URL}/calculators/health/protein-calculator`,
    },
  },
  openGraph: {
    title: "Protein İhtiyacı Hesaplama 2026 - Günlük Gram",
    description: "Kilo ve hedefe göre günlük protein ihtiyacı. Ücretsiz hesapla.",
    url: `${SITE_URL}/tr/hesap-makineleri/saglik/protein-ihtiyaci-hesap-makinesi`,
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
      name: "Günde ne kadar protein almalıyım?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vücut ağırlığı ve hedefe göre değişir. Sedanter yetişkinler için temel kılavuz kg başına günde yaklaşık 0,8 g. Kilo vermede kas korumak için 1,2–1,6 g/kg, kas kazanımı için 1,6–2,2 g/kg sık önerilir. Bu hesap makinesi kilo ve hedef seçiminize göre günlük gram hedefi verir.",
      },
    },
    {
      "@type": "Question",
      name: "Kas için daha fazla protein gerekir mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Kas kazanımı için genelde 1,6–2,2 g/kg yeterlidir; daha fazlası çoğu kişide ek fayda sağlamaz. Proteini öğünlere yayıp direnç antrenmanı ile birleştirin. Araçta 'kas kazanımı' hedefi bu aralığı kullanır.",
      },
    },
    {
      "@type": "Question",
      name: "Kilo vermek için protein ihtiyacı nasıl olmalı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kilo verirken kas kaybını azaltmak ve tokluk için daha yüksek protein (1,2–1,6 g/kg) önerilir. Hesaplama aracında 'kilo ver' seçeneği bu aralığı verir. Kalori açığı ve egzersiz ile birlikte kullanın.",
      },
    },
  ],
};

export default function ProteinIhtiyaciPage() {
  const pageUrl = `${SITE_URL}/tr/hesap-makineleri/saglik/protein-ihtiyaci-hesap-makinesi`;
  const howToSteps = [
    { name: "Vücut ağırlığını girin", text: "Kilonuzu kilogram cinsinden girin." },
    { name: "Hedefi seçin", text: "Kilo koruma, kilo verme veya kas kazanımı seçin." },
    { name: "Hesapla'ya tıklayın", text: "Günlük protein hedefini gram ve aralık olarak görün." },
  ];
  const howToSchema = generateTurkishHowToSchema(
    "Protein İhtiyacı Hesap Makinesi Nasıl Kullanılır?",
    "Günlük protein ihtiyacı hesaplama, kilo ve hedefe göre.",
    howToSteps,
    pageUrl
  );
  const breadcrumbSchema = generateTurkishBreadcrumbSchema("Sağlık", "saglik", "Protein İhtiyacı Hesap Makinesi", "protein-ihtiyaci-hesap-makinesi");

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Protein İhtiyacı Hesap Makinesi",
    description: "Günlük protein ihtiyacı hesaplama, kilo ve hedefe göre",
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
              <li className="text-[#1e293b] font-medium">Protein İhtiyacı Hesap Makinesi</li>
            </ol>
          </nav>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              Protein İhtiyacı Hesaplama 2026
            </h1>
            <p className="text-lg text-[#64748b]">
              Kilo ve hedefinize göre günde kaç gram protein almanız gerektiğini hesaplayın. Kilo koruma, kilo verme veya kas kazanımı. Ücretsiz.
            </p>
          </div>

          <ProteinCalculator locale="tr" />
          <CalculatorDisclaimer category="health" locale="tr" />

          <div className="mt-12 prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Günlük Protein İhtiyacı</h2>
            <p className="text-[#64748b] leading-relaxed mb-4">
              Protein kas, bağışıklık ve tokluk için gereklidir. İhtiyaç vücut ağırlığı ve hedefe göre değişir: kilo koruma, kilo verme (kas koruyarak) veya kas kazanımı. Sedanter yetişkinler için yaygın kılavuz kg başına günde 0,8 g proteindir. Kilo verirken 1,2–1,6 g/kg, kas kazanırken 1,6–2,2 g/kg sık önerilir. Bu hesap makinesi kilo ve hedef seçiminize göre günlük gram hedefi ve aralık verir. <Link href="/tr/hesap-makineleri/saglik/kalori-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Kalori hesap makinesi</Link> ve <Link href="/tr/hesap-makineleri/saglik/su-tuketimi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">su tüketimi hesap makinesi</Link> ile birlikte kullanabilirsiniz.
            </p>

            <h3 className="text-xl font-semibold text-[#1e293b] mt-6 mb-3">Kilo Verme ve Kas İçin Protein</h3>
            <p className="text-[#64748b] leading-relaxed mb-4">
              Kalori açığında yeterli protein kas kaybını azaltır ve tokluğu artırabilir. Kas kazanımı için hem yeterli protein hem direnç antrenmanı gerekir; proteini öğünlere yaymak (ör. 20–40 g/öğün) faydalıdır. Bu araç genel kılavuz sunar; kişiselleştirilmiş diyet için diyetisyen veya hekime danışın.
            </p>

            <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#1e293b]">Günde ne kadar protein almalıyım?</h4>
                <p className="text-[#64748b] mt-1">Vücut ağırlığı ve hedefe göre değişir. Temel kılavuz 0,8 g/kg; kilo verme için 1,2–1,6 g/kg, kas için 1,6–2,2 g/kg. Hesaplama aracı kilo ve hedefe göre hedef verir.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#1e293b]">Kas için daha fazla protein gerekir mi?</h4>
                <p className="text-[#64748b] mt-1">Evet. Kas kazanımı için 1,6–2,2 g/kg yeterlidir. Proteini öğünlere yayıp direnç antrenmanı ile birleştirin.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#1e293b]">Kilo vermek için protein ihtiyacı nasıl olmalı?</h4>
                <p className="text-[#64748b] mt-1">Kilo verirken 1,2–1,6 g/kg önerilir; kas korunur ve tokluk artar. Araçta 'kilo ver' seçeneği bu aralığı kullanır.</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <RelatedCalculatorsTR categorySlug="saglik" currentSlug="protein-ihtiyaci-hesap-makinesi" maxResults={6} />
          </div>
        </div>
      </div>
    </>
  );
}

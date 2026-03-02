import { Metadata } from "next";
import { DebtToIncomeCalculator } from "@/components/calculators/DebtToIncomeCalculator";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { CalculatorDisclaimer } from "@/components/calculators/CalculatorDisclaimer";
import { generateTurkishHowToSchema, generateTurkishBreadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gelir Gider Oranı Hesaplama 2026 | Kredi Uygunluk - Ücretsiz",
  description: "Gelir gider oranı (DTI) hesaplama 2026. Konut ve ihtiyaç kredisi uygunluğunuzu kontrol edin. Ön ve arka uç oranları, banka sınırları. Ücretsiz, anında sonuç.",
  keywords: [
    "gelir gider oranı hesaplama",
    "gelir gider oranı",
    "kredi uygunluk hesaplama",
    "DTI oranı",
    "konut kredisi uygunluk",
    "aylık borç oranı",
    "banka gelir gider sınırı",
    "kredi için gelir gider oranı kaç olmalı",
    "gelir gider oranı nasıl hesaplanır",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/finans/gelir-gider-orani-hesap-makinesi`,
    languages: {
      en: `${SITE_URL}/calculators/finance/debt-to-income-calculator`,
      tr: `${SITE_URL}/tr/hesap-makineleri/finans/gelir-gider-orani-hesap-makinesi`,
      "x-default": `${SITE_URL}/calculators/finance/debt-to-income-calculator`,
    },
  },
  openGraph: {
    title: "Gelir Gider Oranı Hesaplama 2026 - Kredi Uygunluk",
    description: "DTI ile konut ve ihtiyaç kredisi uygunluğunuzu kontrol edin. Ücretsiz hesapla.",
    url: `${SITE_URL}/tr/hesap-makineleri/finans/gelir-gider-orani-hesap-makinesi`,
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
      name: "Gelir gider oranı (DTI) nedir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gelir gider oranı, aylık toplam borç ödemelerinizin brüt (vergi öncesi) aylık gelirinize oranıdır, yüzde olarak ifade edilir. Örneğin brüt geliriniz 20.000 TL ve aylık borç ödemeleriniz 6.000 TL ise DTI oranınız %30'tur. Bankalar bu oranı kredi başvurularında kullanır.",
      },
    },
    {
      "@type": "Question",
      name: "İyi bir gelir gider oranı kaç olmalı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Çoğu banka toplam borç yükünün (arka uç DTI) %36 veya altında olmasını tercih eder; bazı konut kredisi programlarında %43'e kadar kabul edilebilir. Konut gideri tek başına (ön uç) genelde brüt gelirin %28'ini aşmamalıdır. DTI'nizi düşürmek için borç ödemelerinizi azaltabilir veya gelirinizi artırabilirsiniz.",
      },
    },
    {
      "@type": "Question",
      name: "Ön uç ve arka uç DTI farkı nedir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ön uç DTI sadece konut giderinizi (kredi taksiti veya kira, vergi, sigorta) brüt gelire böler. Arka uç DTI ise tüm aylık borçlarınızı (konut + taşıt, kredi kartı, öğrenim kredisi vb.) brüt gelire böler. Bankalar genelde her iki oranı da değerlendirir.",
      },
    },
    {
      "@type": "Question",
      name: "Gelir gider oranımı nasıl düşürebilirim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Borç ödemelerinizi azaltmak (kredi kartı veya kredi kapatma, refinans) veya gelirinizi artırmak DTI'nizi düşürür. Yeni kredi başvurusundan önce ek borç almamak önemlidir. Kredi kartı borcunu erken kapatmak için kredi kartı borç hesap makinesi kullanabilirsiniz.",
      },
    },
  ],
};

export default function GelirGiderOraniPage() {
  const pageUrl = `${SITE_URL}/tr/hesap-makineleri/finans/gelir-gider-orani-hesap-makinesi`;
  const howToSteps = [
    { name: "Aylık brüt gelirinizi girin", text: "Vergi öncesi toplam aylık gelirinizi girin." },
    { name: "Konut ödemesini girin", text: "Kira veya konut kredisi taksiti (PITI) girin. Henüz konut gideriniz yoksa 0 bırakın." },
    { name: "Diğer aylık borçları girin", text: "Taşıt, kredi kartı, öğrenim kredisi vb. toplam aylık borç ödemesini girin." },
    { name: "Hesapla'ya tıklayın", text: "Ön uç ve arka uç DTI oranlarınızı görün." },
    { name: "Sonuçları yorumlayın", text: "Oranlarınızı banka eşikleriyle (örn. %28 ön uç, %36 veya %43 arka uç) karşılaştırın." },
  ];
  const howToSchema = generateTurkishHowToSchema(
    "Gelir Gider Oranı Hesap Makinesi Nasıl Kullanılır?",
    "Kredi uygunluğu için DTI hesaplama adımları.",
    howToSteps,
    pageUrl
  );
  const breadcrumbSchema = generateTurkishBreadcrumbSchema("Finans", "finans", "Gelir Gider Oranı Hesap Makinesi", "gelir-gider-orani-hesap-makinesi");

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Gelir Gider Oranı Hesap Makinesi",
    description: "Kredi ve konut kredisi uygunluğu için DTI (gelir gider oranı) hesaplama",
    url: pageUrl,
    applicationCategory: "FinanceApplication",
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
              <li><Link href="/tr/hesap-makineleri/finans" className="hover:text-[#2563eb] transition-colors">Finans</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-[#1e293b] font-medium">Gelir Gider Oranı Hesap Makinesi</li>
            </ol>
          </nav>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              Gelir Gider Oranı Hesaplama 2026 - Kredi Uygunluk
            </h1>
            <p className="text-lg text-[#64748b]">
              Konut ve ihtiyaç kredisi başvurusu öncesi gelir gider oranınızı (DTI) hesaplayın. Ön uç ve arka uç oranları ile banka eşiklerini karşılaştırın. Ücretsiz, anında sonuç.
            </p>
          </div>

          <DebtToIncomeCalculator locale="tr" />
          <CalculatorDisclaimer category="finance" locale="tr" />

          <div className="mt-12 prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Gelir Gider Oranı (DTI) Nedir?</h2>
            <p className="text-[#64748b] leading-relaxed mb-4">
              Gelir gider oranı (İngilizce debt-to-income ratio, DTI), aylık toplam borç ödemelerinizin brüt aylık gelirinize bölünmesiyle elde edilen yüzdedir. Bankalar ve finans kuruluşları, kredi veya konut kredisi verirken bu oranı kullanarak başvuru sahibinin aylık yükünü değerlendirir. Oran ne kadar düşükse, kredi onayı alma ve uygun faiz oranı bulma şansı genelde o kadar artar. Türkiye&apos;de de benzer mantıkla borç/gelir oranı değerlendirilir; <Link href="/tr/hesap-makineleri/finans/konut-kredisi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">konut kredisi hesap makinesi</Link> ile aylık taksit tahmini yaptıktan sonra gelir gider oranınızı bu araçla kontrol edebilirsiniz.
            </p>

            <h3 className="text-xl font-semibold text-[#1e293b] mt-6 mb-3">Ön Uç ve Arka Uç DTI</h3>
            <p className="text-[#64748b] leading-relaxed mb-4">
              <strong>Ön uç oranı</strong> yalnızca konut giderinizi (kira veya konut kredisi taksiti, vergi, sigorta) brüt gelire böler. <strong>Arka uç oranı</strong> ise konut dahil tüm aylık borç ödemelerinizi (taşıt kredisi, kredi kartı asgari ödemesi, öğrenim kredisi vb.) brüt gelire böler. Birçok banka her iki oranı da inceler; konut kredisi için ön uç %28, arka uç %36 veya %43 gibi eşikler yaygındır. <Link href="/tr/hesap-makineleri/finans/kredi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Kredi hesap makinesi</Link> ile mevcut kredi taksitlerinizi hesaplayıp bu sayfadaki gelir gider oranına ekleyebilirsiniz.
            </p>

            <h3 className="text-xl font-semibold text-[#1e293b] mt-6 mb-3">İyi Bir Gelir Gider Oranı Kaç Olmalı?</h3>
            <p className="text-[#64748b] leading-relaxed mb-4">
              Genel kabul gören arka uç eşiği %36&apos;nın altıdır; %36–43 arası bazı ürünlerde kabul edilebilir, %43 üzeri ise onayı zorlaştırabilir. Ön uç (sadece konut) için %28 ve altı tercih edilir. Bu eşikler kurumdan kuruma değişir; Türkiye&apos;deki bankalar da kendi iç politikalarına göre benzer oranlar kullanır. Gelir gider oranınızı düşürmek için mevcut borçları azaltmak (örneğin <Link href="/tr/hesap-makineleri/finans/kredi-karti-borc-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">kredi kartı borç hesap makinesi</Link> ile erken kapanış planı yapmak) veya geliri artırmak etkili olur. <Link href="/tr/hesap-makineleri/finans/butce-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Bütçe hesap makinesi</Link> ile aylık giderlerinizi gözden geçirebilirsiniz.
            </p>

            <h3 className="text-xl font-semibold text-[#1e293b] mt-6 mb-3">Hangi Borçlar DTI&apos;ye Dahil?</h3>
            <p className="text-[#64748b] leading-relaxed mb-4">
              Kira veya konut kredisi taksiti (anapara + faiz + vergi + sigorta), taşıt kredisi, ihtiyaç kredisi, öğrenim kredisi, kredi kartı asgari ödemeleri ve diğer aylık sabit borç ödemeleri DTI hesabına dahil edilir. Faturalar (elektrik, su, iletişim), market ve benzeri giderler genelde bu oranda yer almaz. Yeni alacağınız konut kredisi için başvururken, gelecekteki aylık konut taksitiniz de hem ön uç hem arka uç oranında dikkate alınır.
            </p>

            <h3 className="text-xl font-semibold text-[#1e293b] mt-6 mb-3">Türkiye&apos;de Banka Uygulamaları</h3>
            <p className="text-[#64748b] leading-relaxed mb-4">
              Türkiye&apos;deki bankalar konut ve ihtiyaç kredisi verirken borç/gelir oranı benzeri kriterlere bakar. Findeks skoru, gelir belgesi ve mevcut borçlar birlikte değerlendirilir. Gelir gider oranı hesaplama aracı, kendi durumunuzu önceden görmeniz için eğitim ve planlama amacıyla sunulmaktadır; nihai kredi kararı bankaya aittir. <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Maaş hesap makinesi</Link> ile net gelirinizi, <Link href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">vergi hesap makinesi</Link> ile vergi diliminizi kontrol edebilirsiniz.
            </p>

            <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#1e293b]">Gelir gider oranı (DTI) nedir?</h4>
                <p className="text-[#64748b] mt-1">Gelir gider oranı, aylık toplam borç ödemelerinizin brüt (vergi öncesi) aylık gelirinize oranıdır, yüzde olarak ifade edilir. Bankalar kredi başvurularında bu oranı kullanır.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#1e293b]">İyi bir gelir gider oranı kaç olmalı?</h4>
                <p className="text-[#64748b] mt-1">Çoğu banka arka uç DTI&apos;nin %36 veya altında olmasını tercih eder; konut gideri (ön uç) için %28 ve altı yaygındır. %43&apos;e kadar kabul eden programlar da olabilir.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#1e293b]">Ön uç ve arka uç DTI farkı nedir?</h4>
                <p className="text-[#64748b] mt-1">Ön uç sadece konut giderinizi, arka uç ise konut dahil tüm aylık borçlarınızı brüt gelire böler. Bankalar genelde her ikisini de değerlendirir.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#1e293b]">Gelir gider oranımı nasıl düşürebilirim?</h4>
                <p className="text-[#64748b] mt-1">Borç ödemelerinizi azaltmak (kredi kapatma, refinans) veya gelirinizi artırmak DTI&apos;yi düşürür. Yeni kredi başvurusundan önce ek borç almamak önemlidir.</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <RelatedCalculatorsTR categorySlug="finans" currentSlug="gelir-gider-orani-hesap-makinesi" maxResults={6} />
          </div>
        </div>
      </div>
    </>
  );
}

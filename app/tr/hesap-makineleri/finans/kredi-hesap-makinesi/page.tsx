import { Metadata } from "next";
import { TurkeyLoanCalculator } from "@/components/calculators/tr/TurkeyLoanCalculator";
import { DATA_VERSION, CONSUMER_LOAN_FEES_2026 } from "@/lib/data/turkey-2026-data";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { generateTurkishHowToSchema, generateTurkishBreadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kredi Hesaplama 2026 | İhtiyaç Kredisi Hesap Makinesi - KKDF, BSMV Dahil",
  description: "2026 güncel oranları ile ihtiyaç, taşıt ve eğitim kredisi hesaplayın. KKDF ve BSMV dahil gerçek maliyet hesaplama. Aylık taksit ve ödeme planı.",
  keywords: [
    "kredi hesaplama",
    "ihtiyaç kredisi hesaplama",
    "taşıt kredisi hesaplama",
    "taksit hesaplama",
    "kredi faiz hesaplama",
    "KKDF hesaplama",
    "BSMV hesaplama",
    "kredi maliyeti hesaplama",
    "kredi hesap makinesi 2026",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/finans/kredi-hesap-makinesi`,
    languages: {
      en: `${SITE_URL}/calculators/finance/loan-calculator`,
      tr: `${SITE_URL}/tr/hesap-makineleri/finans/kredi-hesap-makinesi`,
    },
  },
  openGraph: {
    title: "Kredi Hesaplama 2026 - İhtiyaç Kredisi Hesap Makinesi",
    description: "KKDF ve BSMV dahil gerçek kredi maliyeti hesaplama.",
    locale: "tr_TR",
  },
};

export default function TurkeyLoanCalculatorPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Türkiye Kredi Hesap Makinesi",
    description: "2026 yılı KKDF ve BSMV oranları dahil tüketici kredisi hesaplama",
    url: `${SITE_URL}/tr/hesap-makineleri/finans/kredi-hesap-makinesi`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "TRY",
    },
    inLanguage: "tr",
    dateModified: DATA_VERSION.lastUpdated,
  };

  const krediUrl = `${SITE_URL}/tr/hesap-makineleri/finans/kredi-hesap-makinesi`;
  const howToSteps = [
    { name: "Kredi tutarı ve vadeyi girin", text: "Çekmek istediğiniz kredi tutarını ve vadeyi (ay) girin." },
    { name: "Faiz oranını ve kredi türünü seçin", text: "Yıllık faiz oranını ve kredi türünü (ihtiyaç, taşıt, eğitim) seçin." },
    { name: "Hesapla butonuna tıklayın", text: "KKDF ve BSMV dahil aylık taksit ve toplam maliyeti görün." },
  ];
  const howToSchema = generateTurkishHowToSchema(
    "Kredi Hesap Makinesi Nasıl Kullanılır?",
    "İhtiyaç ve taşıt kredisi taksit hesaplamak için adımlar.",
    howToSteps,
    krediUrl
  );
  const breadcrumbSchema = generateTurkishBreadcrumbSchema("Finans", "finans", "Kredi Hesap Makinesi", "kredi-hesap-makinesi");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="min-h-screen bg-[#f8fafc] py-8">
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
                <Link href="/tr/hesap-makineleri" className="hover:text-[#2563eb] transition-colors">
                  Hesap Makineleri
                </Link>
              </li>
              <li><span className="mx-2">/</span></li>
              <li>
                <Link href="/tr/hesap-makineleri/finans" className="hover:text-[#2563eb] transition-colors">
                  Finans
                </Link>
              </li>
              <li><span className="mx-2">/</span></li>
              <li className="text-[#1e293b] font-medium">Kredi Hesap Makinesi</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              Kredi Hesaplama 2026 - İhtiyaç Kredisi
            </h1>
            <p className="text-lg text-[#64748b]">
              2026 güncel KKDF ve BSMV oranları dahil gerçek kredi maliyetinizi hesaplayın. 
              İhtiyaç, taşıt ve eğitim kredisi için aylık taksit ve toplam ödeme.
            </p>
          </div>

          {/* Calculator */}
          <TurkeyLoanCalculator />

          {/* SEO Content */}
          <div className="mt-12 prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-4">İhtiyaç Kredisi (Tüketici Kredisi) Nedir?</h2>
            <p className="text-[#64748b] leading-relaxed mb-4">
              İhtiyaç kredisi, kişisel veya ailevi ihtiyaçlarınızı karşılamak için bankalardan 
              aldığınız, genellikle 12–60 ay vadeli tüketici kredisidir. Taşıt ve eğitim kredisi 
              de tüketici kredisi kapsamındadır; konut kredisi ise ayrı bir rejimle KKDF/BSMV 
              muafiyetine sahiptir. Tüketici kredilerinde faiz üzerinden <strong>KKDF</strong> (Kaynak 
              Kullanımı Destekleme Fonu) ve <strong>BSMV</strong> (Banka ve Sigorta Muameleleri Vergisi) 
              uygulanır; bu yüzden bankanın söylediği nominal faiz oranının üzerinde bir efektif 
              maliyet oluşur. <Link href="/tr/hesap-makineleri/finans/kredi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Kredi hesap makinesi</Link> ile 
              KKDF ve BSMV dahil aylık taksit ve toplam maliyeti hesaplayabilirsiniz.
            </p>
            <p className="text-[#64748b] leading-relaxed mb-6">
              Konut alımı için <Link href="/tr/hesap-makineleri/finans/konut-kredisi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">konut kredisi hesap makinesi</Link>, 
              aylık ödeme kapasitenizi görmek için <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">maaş hesap makinesi</Link> ve 
              <Link href="/tr/hesap-makineleri/finans/butce-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">bütçe hesap makinesi</Link> kullanabilirsiniz.
            </p>

            <h2 className="text-2xl font-bold text-[#1e293b] mt-8 mb-4">İpuçları ve Öneriler</h2>
            <ul className="list-disc list-inside text-[#64748b] space-y-2 mb-6">
              <li><strong>Efektif faize bakın:</strong> Nominal faiz + KKDF + BSMV ile gerçek maliyeti bu hesap makinesinde görün.</li>
              <li><strong>Kısa vade tercih edin:</strong> Vade kısaldıkça toplam faiz düşer; aylık taksit bütçenizi zorlamayacak en kısa vadeyi seçin.</li>
              <li><strong>Konut için konut kredisi:</strong> Ev alacaksanız konut kredisi KKDF/BSMV&apos;den muaftır; <Link href="/tr/hesap-makineleri/finans/konut-kredisi-hesap-makinesi" className="text-[#2563eb] hover:underline">konut kredisi hesap makinesi</Link> ile karşılaştırın.</li>
              <li><strong>Vergi ve BES:</strong> <Link href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi" className="text-[#2563eb] hover:underline">Vergi hesap makinesi</Link> ile diliminizi, <Link href="/tr/hesap-makineleri/finans/bes-devlet-katkisi-hesap-makinesi" className="text-[#2563eb] hover:underline">BES devlet katkısı hesap makinesi</Link> ile birikim senaryonuzu değerlendirin.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1e293b] mt-8 mb-4">Türkiye&apos;de Tüketici Kredileri 2026</h2>
            <p className="text-[#64748b] leading-relaxed mb-4">
              Tüketici kredileri, kişisel ihtiyaçlar için bankalardan alınan kredilerdir. 
              Türkiye&apos;de bu krediler üzerinden KKDF ve BSMV gibi ek vergiler alınmaktadır.
            </p>

            <h3>KKDF ve BSMV Nedir?</h3>
            <h4>KKDF (Kaynak Kullanımı Destekleme Fonu)</h4>
            <p>
              Tüketici kredilerinde faiz üzerinden alınan bir vergidir. 
              2026 yılı için oran: <strong>%{CONSUMER_LOAN_FEES_2026.kkdf}</strong>
            </p>

            <h4>BSMV (Banka ve Sigorta Muameleleri Vergisi)</h4>
            <p>
              Banka işlemleri üzerinden alınan vergidir. 
              2026 yılı için oran: <strong>%{CONSUMER_LOAN_FEES_2026.bsmv}</strong>
            </p>

            <h4>Toplam Ek Maliyet</h4>
            <p>
              Faiz oranı üzerine eklenen toplam vergi yükü: 
              <strong> %{CONSUMER_LOAN_FEES_2026.totalAdditionalCost}</strong>
            </p>
            <p>
              Bu demektir ki, bankadan %3 faiz oranı ile kredi aldığınızda, gerçek (efektif) 
              faiz oranınız yaklaşık %3.6 olacaktır.
            </p>

            <h3>Kredi Türleri ve Vergi Farklılıkları</h3>
            <ul>
              <li>
                <strong>İhtiyaç Kredisi:</strong> KKDF %{CONSUMER_LOAN_FEES_2026.byType.personal.kkdf} + 
                BSMV %{CONSUMER_LOAN_FEES_2026.byType.personal.bsmv}
              </li>
              <li>
                <strong>Taşıt Kredisi:</strong> KKDF %{CONSUMER_LOAN_FEES_2026.byType.vehicle.kkdf} + 
                BSMV %{CONSUMER_LOAN_FEES_2026.byType.vehicle.bsmv}
              </li>
              <li>
                <strong>Eğitim Kredisi:</strong> KKDF %{CONSUMER_LOAN_FEES_2026.byType.education.kkdf} + 
                BSMV %{CONSUMER_LOAN_FEES_2026.byType.education.bsmv} (KKDF muafiyeti!)
              </li>
            </ul>

            <h3>Kredi Seçerken Dikkat Edilecekler</h3>
            <ol>
              <li>
                <strong>Efektif Faiz Oranına Bakın:</strong> Reklamlarda gösterilen faiz oranı 
                genellikle nominal orandır. Gerçek maliyeti görmek için KKDF ve BSMV dahil 
                efektif faizi sorun.
              </li>
              <li>
                <strong>Dosya Masrafı:</strong> Bazı bankalar kredi açılışında dosya masrafı alır.
              </li>
              <li>
                <strong>Sigorta:</strong> Hayat sigortası ve işsizlik sigortası opsiyonel olabilir.
              </li>
              <li>
                <strong>Erken Kapama:</strong> Krediyi erken kapatırsanız komisyon ödeyebilirsiniz.
              </li>
            </ol>

            <h3>Kredi Başvuru Şartları</h3>
            <ul>
              <li>En az 18 yaş (bazı bankalar 21)</li>
              <li>Düzenli gelir belgesi veya maaş bordrosu</li>
              <li>Yeterli kredi notu (findeks)</li>
              <li>Borç/gelir oranı makul seviyede</li>
            </ul>

            <h3>Kredi Puanı (Findeks) Önemi</h3>
            <p>
              Findeks puanınız, bankaların size kredi verip vermeyeceğini ve hangi faiz 
              oranını uygulayacağını belirler. Yüksek puan = düşük faiz oranı.
            </p>
          </div>

          <div className="mt-12">
            <RelatedCalculatorsTR categorySlug="finans" currentSlug="kredi-hesap-makinesi" maxResults={6} />
          </div>
        </div>
      </div>
    </>
  );
}

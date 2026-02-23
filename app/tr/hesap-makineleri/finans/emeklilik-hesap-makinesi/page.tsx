import { Metadata } from "next";
import { TurkeyRetirementCalculator } from "@/components/calculators/tr/TurkeyRetirementCalculator";
import { DATA_VERSION, SGK_PREMIUM_DAY_REQUIREMENTS, BES_2026 } from "@/lib/data/turkey-2026-data";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { CalculatorDisclaimer } from "@/components/calculators/CalculatorDisclaimer";
import { generateTurkishHowToSchema, generateTurkishBreadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emeklilik Hesaplama 2026 | SGK Emeklilik Yaşı ve BES Hesap Makinesi",
  description: "SGK emeklilik yaşınızı, prim gün şartını ve BES projeksiyonunuzu hesaplayın. EYT durumunuzu öğrenin. 2026 güncel SGK verileri ile doğru emeklilik planlaması.",
  keywords: [
    "emeklilik hesaplama",
    "SGK emeklilik yaşı",
    "emeklilik yaşı hesaplama",
    "prim gün sayısı hesaplama",
    "EYT hesaplama",
    "BES hesaplama",
    "bireysel emeklilik hesaplama",
    "ne zaman emekli olurum",
    "emeklilik hesap makinesi 2026",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/finans/emeklilik-hesap-makinesi`,
    languages: {
      en: `${SITE_URL}/calculators/finance/retirement-calculator`,
      tr: `${SITE_URL}/tr/hesap-makineleri/finans/emeklilik-hesap-makinesi`,
      "x-default": `${SITE_URL}/calculators/finance/retirement-calculator`,
    },
  },
  openGraph: {
    title: "Emeklilik Hesaplama 2026 - SGK ve BES",
    description: "SGK emeklilik yaşı, prim gün şartı ve BES projeksiyonu hesaplama.",
    locale: "tr_TR",
  },
};

export default function TurkeyRetirementCalculatorPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Türkiye Emeklilik Hesap Makinesi",
    description: "2026 yılı SGK emeklilik yaşı, prim gün sayısı ve BES hesaplama aracı",
    url: `${SITE_URL}/tr/hesap-makineleri/finans/emeklilik-hesap-makinesi`,
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

  const emeklilikUrl = `${SITE_URL}/tr/hesap-makineleri/finans/emeklilik-hesap-makinesi`;
  const howToSteps = [
    { name: "Doğum yılınızı girin", text: "SGK emeklilik yaşı için doğum yılınızı seçin." },
    { name: "Cinsiyet ve sigorta bilgilerini girin", text: "Cinsiyet ve sigorta başlangıç tarihi gibi alanları doldurun." },
    { name: "Hesapla butonuna tıklayın", text: "Emeklilik yaşı, prim günü ve BES projeksiyonunu görün." },
  ];
  const howToSchema = generateTurkishHowToSchema(
    "Emeklilik Hesap Makinesi Nasıl Kullanılır?",
    "SGK emeklilik yaşı ve BES hesaplamak için adımlar.",
    howToSteps,
    emeklilikUrl
  );
  const breadcrumbSchema = generateTurkishBreadcrumbSchema("Finans", "finans", "Emeklilik Hesap Makinesi", "emeklilik-hesap-makinesi");

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
              <li className="text-[#1e293b] font-medium">Emeklilik Hesap Makinesi</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              Emeklilik Hesaplama 2026 - SGK ve BES
            </h1>
            <p className="text-lg text-[#64748b]">
              SGK emeklilik yaşınızı, prim gün şartınızı ve EYT durumunuzu öğrenin. 
              BES (Bireysel Emeklilik Sistemi) projeksiyonunuzu görün.
            </p>
          </div>

          {/* Calculator */}
          <TurkeyRetirementCalculator />
          <CalculatorDisclaimer category="finance" locale="tr" />

          {/* SEO Content */}
          <div className="mt-12 prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-4">SGK Emekliliği Nedir?</h2>
            <p className="text-[#64748b] leading-relaxed mb-4">
              SGK emekliliği, 4/a (işçi), 4/b (bağ-kur) veya 4/c (memur) kapsamında prim 
              ödeyerek çalışanların belirli yaş ve prim gün şartlarını tamamlaması sonucu 
              aylık bağlanmasıdır. Emeklilik yaşı doğum yılınıza göre kademeli olarak artar; 
              1984 ve sonrası doğumlular için 65 yaş (kadın ve erkek) uygulanır. Prim gün şartı 
              en az 7.200 gün (20 yıl) olup, EYT kapsamındakiler 08.09.1999 öncesi sigorta girişi 
              ile yaş şartı olmadan prim gününü tamamlayarak emekli olabilir. Bu sayfadaki 
              <strong> emeklilik hesap makinesi</strong> ile doğum yılınız ve sigorta girişinize 
              göre emeklilik yaşınızı ve prim gün şartınızı görebilirsiniz.
            </p>
            <p className="text-[#64748b] leading-relaxed mb-6">
              BES (Bireysel Emeklilik Sistemi), SGK&apos;ya ek olarak devlet katkısı ile birikim 
              yapmanızı sağlar. <Link href="/tr/hesap-makineleri/finans/bes-devlet-katkisi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">BES devlet katkısı hesap makinesi</Link> ile 
              birikim projeksiyonunuzu, <Link href="/tr/rehberler/sgk-emeklilik-tablosu" className="text-[#2563eb] hover:underline font-medium">SGK Emeklilik Tablosu</Link> rehberi ile 
              yaş ve prim detaylarını inceleyebilirsiniz.
            </p>

            <h2 className="text-2xl font-bold text-[#1e293b] mt-8 mb-4">Türkiye&apos;de Emeklilik Sistemi 2026</h2>
            <p className="text-[#64748b] leading-relaxed mb-4">
              Türkiye&apos;de emeklilik, SGK (Sosyal Güvenlik Kurumu) tarafından yönetilen 
              zorunlu sistem ve isteğe bağlı BES (Bireysel Emeklilik Sistemi) olmak üzere 
              iki ana bileşenden oluşur.
            </p>

            <h3 className="text-xl font-bold text-[#1e293b] mt-6 mb-3">SGK Emeklilik Şartları</h3>
            <p>
              SGK&apos;dan emekli olabilmek için iki temel şart karşılanmalıdır:
            </p>
            <ol>
              <li>
                <strong>Yaş Şartı:</strong> Doğum yılınıza göre belirlenen emeklilik yaşına 
                ulaşmanız gerekir. Bu yaş kadın ve erkekler için farklıdır.
              </li>
              <li>
                <strong>Prim Gün Şartı:</strong> En az {SGK_PREMIUM_DAY_REQUIREMENTS.normal.minDays.toLocaleString("tr-TR")} gün 
                ({SGK_PREMIUM_DAY_REQUIREMENTS.normal.minYears} yıl) prim ödemiş olmanız gerekir.
              </li>
            </ol>

            <h3>EYT (Emeklilikte Yaşa Takılanlar) Nedir?</h3>
            <p>
              EYT, 08.09.1999 tarihinden önce sigortalı olanların yaş şartı aranmaksızın 
              sadece prim gün sayısını tamamlayarak emekli olabilmelerini sağlayan düzenlemedir.
            </p>
            <p>
              <strong>EYT Şartları:</strong>
            </p>
            <ul>
              <li>08.09.1999 öncesi sigorta girişi</li>
              <li>7200 gün (20 yıl) prim ödenmesi</li>
            </ul>
            <p>
              EYT kapsamındaysanız, yaş şartı aranmadan emekli olabilirsiniz.
            </p>

            <h3>Emeklilik Yaşı Tablosu</h3>
            <p>
              Emeklilik yaşı doğum yılına göre kademeli olarak artmaktadır:
            </p>
            <ul>
              <li>1956-1959 doğumlular: Erkek 60, Kadın 58</li>
              <li>1960-1963 doğumlular: Erkek 61, Kadın 59</li>
              <li>1984 ve sonrası doğumlular: Erkek 65, Kadın 65</li>
            </ul>

            <h3>BES (Bireysel Emeklilik Sistemi)</h3>
            <p>
              BES, SGK emekliliğini tamamlayan isteğe bağlı bir sistemdir. 
              2026 yılı için avantajları:
            </p>
            <ul>
              <li><strong>Devlet Katkısı:</strong> %{BES_2026.stateContribution} (ödediğinizin %25&apos;i kadar)</li>
              <li><strong>Yıllık Maksimum:</strong> {BES_2026.maxStateContributionPerYear.toLocaleString("tr-TR")} TL devlet katkısı</li>
              <li><strong>Emeklilik Yaşı:</strong> {BES_2026.minimumAge} yaş ve {BES_2026.minimumYears} yıl sistemde kalma</li>
            </ul>

            <h4>Devlet Katkısı Hak Ediş Oranları</h4>
            <ul>
              <li>3 yıl sonra: %{BES_2026.vestingRates.year3}</li>
              <li>6 yıl sonra: %{BES_2026.vestingRates.year6}</li>
              <li>10 yıl sonra: %{BES_2026.vestingRates.year10}</li>
              <li>Emeklilik halinde: %{BES_2026.vestingRates.retirement}</li>
            </ul>

            <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">Emeklilik Planlaması İpuçları</h3>
            <ol className="list-decimal list-inside text-[#64748b] space-y-2 mb-4">
              <li>
                <strong>Erken başlayın:</strong> Hem SGK hem BES için erken başlamak 
                daha yüksek birikim sağlar. <Link href="/tr/hesap-makineleri/finans/bes-devlet-katkisi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">BES devlet katkısı hesap makinesi</Link> ile senaryonuzu görün.
              </li>
              <li>
                <strong>Prim günlerinizi takip edin:</strong> e-Devlet üzerinden 
                SGK hizmet dökümünüzü kontrol edin; <Link href="/tr/rehberler/sgk-emeklilik-tablosu" className="text-[#2563eb] hover:underline font-medium">SGK Emeklilik Tablosu</Link> rehberinde yaş ve gün şartlarını inceleyin.
              </li>
              <li>
                <strong>BES&apos;e katılın:</strong> Devlet katkısı sayesinde paranız 
                %25 daha hızlı büyür; vergi indirimi de ek avantajdır. <Link href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Vergi hesap makinesi</Link> ile BES indirimi sonrası vergi tasarrufunuzu hesaplayın.
              </li>
              <li>
                <strong>Sigorta açıklarını kapatın:</strong> Borçlanma ile geçmiş 
                dönemleri sigortalı sayabilirsiniz; maliyet için SGK veya mali müşavire danışın.
              </li>
              <li>
                <strong>Birikim hedefi koyun:</strong> <Link href="/tr/hesap-makineleri/finans/birikim-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Birikim hesap makinesi</Link> ve 
                <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium"> maaş hesap makinesi</Link> ile aylık tasarruf kapasitenizi değerlendirin.
              </li>
            </ol>

            <h3>e-Devlet&apos;ten Emeklilik Bilgisi Sorgulama</h3>
            <p>
              e-Devlet (turkiye.gov.tr) üzerinden şu bilgilere erişebilirsiniz:
            </p>
            <ul>
              <li>SGK Tescil ve Hizmet Dökümü</li>
              <li>Prim gün sayısı</li>
              <li>Emeklilik için kalan süre</li>
              <li>BES hesap bilgileri</li>
            </ul>
          </div>

          {/* Related Blog Post */}
          <div className="mt-12 bg-[#f8fafc] rounded-lg border-2 border-[#e2e8f0] p-6 mb-6">
            <h3 className="text-xl font-bold text-[#1e293b] mb-4">
              İlgili Blog Yazıları
            </h3>
            <Link href="/tr/blog/eyt-nedir-kimler-faydalanabilir" className="block hover:opacity-80 transition-opacity">
              <h4 className="font-semibold text-[#1e293b] mb-2 hover:text-[#2563eb]">
                EYT Nedir? Kimler Faydalanabilir?
              </h4>
              <p className="text-sm text-[#64748b] mb-2">
                Erken Yaşlananlar Yasası (EYT) nedir, kimler faydalanabilir, emeklilik yaşı ve prim günü hesaplama. EYT ile emeklilik şartları rehberi.
              </p>
              <span className="text-[#2563eb] font-medium text-sm">
                Yazıyı Oku →
              </span>
            </Link>
          </div>

          <div className="mt-12">
            <RelatedCalculatorsTR categorySlug="finans" currentSlug="emeklilik-hesap-makinesi" maxResults={6} />
          </div>
        </div>
      </div>
    </>
  );
}

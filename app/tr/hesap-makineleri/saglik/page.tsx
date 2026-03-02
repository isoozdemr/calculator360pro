import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { TR_CALCULATORS, TR_CATEGORY_PAGE_TITLES } from "@/lib/tr-calculators-nav";

const healthCalculators = TR_CALCULATORS.filter((c) => c.category === "saglik").map((c) => ({
  name: c.name,
  slug: c.slug,
  description: c.description ?? "",
  icon: c.icon ?? "🏥",
}));

export const metadata: Metadata = {
  title: "Sağlık Hesap Makineleri - BMI, Kalori ve Daha Fazlası",
  description: "Sağlık hesap makineleri 2026: BMI, kalori ihtiyacı, vücut yağ oranı ve gebelik hesaplama. WHO ve Türkiye standartlarına uygun. Ücretsiz online araçlar - hemen hesaplayın.",
  keywords: [
    "sağlık hesap makinesi",
    "bmi hesaplama",
    "kalori hesaplama",
    "ideal kilo",
    "vücut kitle indeksi",
    "bazal metabolizma",
    "günlük kalori ihtiyacı",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/saglik`,
    languages: {
      "en": `${SITE_URL}/calculators/health`,
      "tr": `${SITE_URL}/tr/hesap-makineleri/saglik`,
      "x-default": `${SITE_URL}/calculators/health`,
    },
  },
  openGraph: {
    title: "Sağlık Hesap Makineleri | Calculator360Pro",
    description: "Ücretsiz sağlık hesap makineleri: BMI, kalori, ideal kilo hesaplama.",
    url: `${SITE_URL}/tr/hesap-makineleri/saglik`,
    type: "website",
    locale: "tr_TR",
    siteName: "Calculator360Pro",
  },
};

const categorySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: TR_CATEGORY_PAGE_TITLES.saglik,
  description: "Ücretsiz sağlık hesap makineleri: BMI, kalori, ideal kilo hesaplama.",
  url: `${SITE_URL}/tr/hesap-makineleri/saglik`,
  inLanguage: "tr-TR",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: healthCalculators.length,
    itemListElement: healthCalculators.map((calc, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: { "@type": "SoftwareApplication", name: calc.name, url: `${SITE_URL}/tr/hesap-makineleri/saglik/${calc.slug}` },
    })),
  },
};

export default function SaglikKategorisiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }} />
    <div className="min-h-screen bg-[#f8fafc] py-16">
      <div className="container mx-auto px-4 max-w-6xl">
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
            <li className="text-[#1e293b] font-medium">Sağlık</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">🏥</span>
            <div>
              <h1 className="text-3xl font-bold text-[#1e293b]">
                Sağlık Hesap Makineleri
              </h1>
              <p className="text-[#64748b] mt-2">
                Sağlığınızı takip etmek ve daha bilinçli kararlar almak için ücretsiz sağlık hesap makineleri.
              </p>
            </div>
          </div>
        </div>

        {/* Açıklayıcı İçerik */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Sağlık metrikleri, genel sağlık durumunu değerlendirmek için kullanılan önemli göstergeler. 
              BMI, kalori ihtiyacı, ideal kilo gibi değerler sağlık planlaması için temel bilgiler sağlıyor. 
              Bu metrikleri düzenli takip etmek, sağlıklı yaşam için önemli.
            </p>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              BMI, vücut ağırlığının boy uzunluğuna göre değerlendirilmesi için kullanılan bir ölçüt. 
              Dünya Sağlık Örgütü standartlarına göre kategorilere ayrılıyor. Normal BMI aralığı 18,5-24,9 
              arasında. Bu aralığın dışında olmak sağlık risklerini artırabiliyor.
            </p>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Günlük kalori ihtiyacı, bazal metabolizma hızı ve aktivite seviyesine göre değişiyor. 
              BMR, vücudun dinlenme halindeyken harcadığı kalori. TDEE ise günlük toplam enerji harcaması. 
              Bu değerleri bilmek, beslenme planlaması için gerekli.
            </p>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Sağlık hesap makinelerimiz, WHO ve Türkiye Sağlık Bakanlığı standartlarına uygun. 
              Tüm hesaplamalar bilimsel formüller kullanılarak yapılıyor. Ancak bu hesaplamalar genel 
              bilgilendirme amaçlı, kesin tanı için sağlık uzmanına danışmak gerekiyor.
            </p>
          </div>
        </div>

        {/* Calculator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {healthCalculators.map((calculator) => (
            <Link
              key={calculator.slug}
              href={`/tr/hesap-makineleri/saglik/${calculator.slug}`}
              className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 hover:border-[#2563eb] hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{calculator.icon}</span>
                <div>
                  <h2 className="text-xl font-semibold text-[#1e293b] group-hover:text-[#2563eb] transition-colors">
                    {calculator.name}
                  </h2>
                  <p className="text-[#64748b] text-sm mt-2">
                    {calculator.description}
                  </p>
                  <span className="inline-flex items-center text-[#2563eb] text-sm font-medium mt-4">
                    Hesapla
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* FAQ Bölümü */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
            Sıkça Sorulan Sorular
          </h2>
          <div className="space-y-4">
            <div className="border-b border-[#e2e8f0] pb-4">
              <h3 className="font-semibold text-[#1e293b] mb-2">
                BMI nedir ve nasıl hesaplanır?
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                BMI, vücut ağırlığının kilogram cinsinden değerinin, boy uzunluğunun metre cinsinden 
                karesine bölünmesiyle hesaplanıyor. Örneğin 70 kg ağırlığında ve 1,75 m boyunda bir 
                kişi için BMI = 70 / (1,75)² = 22,86 oluyor.
              </p>
            </div>
            <div className="border-b border-[#e2e8f0] pb-4">
              <h3 className="font-semibold text-[#1e293b] mb-2">
                Günlük kalori ihtiyacı nasıl belirlenir?
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                Günlük kalori ihtiyacı, bazal metabolizma hızı ve aktivite seviyesine göre belirleniyor. 
                BMR, yaş, cinsiyet, boy ve kilo ile hesaplanıyor. TDEE ise BMR'nin aktivite katsayısıyla 
                çarpılmasıyla bulunuyor.
              </p>
            </div>
            <div className="border-b border-[#e2e8f0] pb-4">
              <h3 className="font-semibold text-[#1e293b] mb-2">
                İdeal kilo nasıl hesaplanır?
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                İdeal kilo, BMI'nin 22-23 aralığında olduğu kilodur. Formül: İdeal Kilo = Boy (m)² × 22,5. 
                Bu aralık, sağlık risklerinin en düşük olduğu aralık olarak kabul ediliyor.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1e293b] mb-2">
                Bu hesaplamalar ne kadar güvenilir?
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                Hesaplamalarımız WHO ve Türkiye Sağlık Bakanlığı standartlarına uygun. Ancak bu hesaplamalar 
                genel bilgilendirme amaçlı. Kişisel sağlık durumunuz için mutlaka doktor veya diyetisyen ile 
                görüşmeniz gerekiyor.
              </p>
            </div>
          </div>
        </div>

        {/* İlgili Blog Yazıları */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
            İlgili Blog Yazıları
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/tr/blog/bmi-nedir-ideal-kilo-nasil-hesaplanir"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">
                BMI Nedir? İdeal Kilo Nasıl Hesaplanır?
              </h3>
              <p className="text-sm text-[#64748b]">
                BMI hesaplama, ideal kilo belirleme ve sağlıklı kilo yönetimi hakkında detaylı bilgi.
              </p>
            </Link>
            <Link
              href="/tr/blog/kalori-acigi-ile-kilo-verme-nasil-calisir"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">
                Kalori Açığı ile Kilo Verme: Nasıl Çalışır?
              </h3>
              <p className="text-sm text-[#64748b]">
                Kalori açığı oluşturma, kilo verme stratejileri ve sağlıklı beslenme yöntemleri.
              </p>
            </Link>
            <Link
              href="/tr/blog/gunluk-kalori-ihtiyaci-bmr-ve-tdee-nedir"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">
                Günlük Kalori İhtiyacı: BMR ve TDEE Nedir?
              </h3>
              <p className="text-sm text-[#64748b]">
                Bazal metabolizma hızı, toplam günlük enerji harcaması ve kalori ihtiyacı hesaplama.
              </p>
            </Link>
            <Link
              href="/tr/blog/saglikli-beslenme-who-onerileri-ve-turk-mutfagi"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">
                Sağlıklı Beslenme: WHO Önerileri ve Türk Mutfağı
              </h3>
              <p className="text-sm text-[#64748b]">
                Dünya Sağlık Örgütü beslenme önerileri ve Türk mutfağında sağlıklı seçenekler.
              </p>
            </Link>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            Sağlığınızı Takip Edin
          </h2>
          <div className="space-y-3 text-blue-800">
            <p>
              Sağlık hesap makinelerimiz, Dünya Sağlık Örgütü (WHO) ve T.C. Sağlık 
              Bakanlığı standartlarına uygun olarak hazırlanmıştır.
            </p>
            <p className="text-sm">
              <strong>Önemli Not:</strong> Bu hesap makineleri yalnızca bilgilendirme 
              amaçlıdır. Sağlık durumunuz hakkında kesin bilgi için mutlaka bir sağlık 
              uzmanına danışın.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

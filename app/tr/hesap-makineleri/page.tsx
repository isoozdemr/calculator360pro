import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";
import { getTRCategoriesForHomepage, type TRCategorySlug } from "@/lib/tr-calculators-nav";

export const metadata: Metadata = {
  title: "Tüm Hesap Makineleri 2026 | Vergi, Maaş, Kredi",
  description: "Tüm hesap makineleri 2026: vergi, maaş, kredi, konut kredisi, emeklilik, BMI, kalori, yüzde ve yaş hesaplama. Türkiye'ye özel ücretsiz araçlar - anında hesaplayın.",
  keywords: [
    "hesap makinesi",
    "online hesap makinesi",
    "vergi hesaplama",
    "maaş hesaplama",
    "brüt net hesaplama",
    "kredi hesaplama",
    "konut kredisi hesaplama",
    "mortgage hesaplama",
    "emeklilik hesaplama",
    "emeklilik yaşı hesaplama",
    "bmi hesaplama",
    "vücut kitle indeksi",
    "kalori hesaplama",
    "günlük kalori ihtiyacı",
    "not ortalaması hesaplama",
    "gano hesaplama",
    "yüzde hesaplama",
    "yaş hesaplama",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri`,
    languages: {
      en: `${SITE_URL}/calculators`,
      tr: `${SITE_URL}/tr/hesap-makineleri`,
      "x-default": `${SITE_URL}/calculators`,
    },
  },
  openGraph: {
    title: "Tüm Hesap Makineleri 2026 | Calculator360Pro Türkiye",
    description: "Türkiye'ye özel tüm ücretsiz hesap makineleri. 2026 güncel veriler.",
    locale: "tr_TR",
    type: "website",
  },
};

const CATEGORY_ICONS: Record<TRCategorySlug, string> = {
  finans: "💰",
  saglik: "🏥",
  egitim: "📚",
  matematik: "🔢",
  "tarih-zaman": "📅",
};

const LONG_DESCRIPTIONS: Record<TRCategorySlug, string> = {
  finans: "Finansal kararlarınızı doğru verilerle destekleyin. Brüt maaşınızdan net maaşınızı hesaplayın, kredi maliyetlerinizi KKDF ve BSMV dahil öğrenin, emeklilik planlamanızı yapın. Tüm hesaplamalar 2026 yılı Türkiye düzenlemelerine uygun olarak yapılmaktadır.",
  saglik: "Sağlığınızı takip edin ve bilinçli kararlar alın. Vücut kitle indeksinizi hesaplayın, günlük kalori ihtiyacınızı öğrenin. Tüm hesaplamalar bilimsel formüllere dayanmaktadır.",
  egitim: "Akademik başarınızı takip edin. GANO (Genel Ağırlıklı Not Ortalaması) ve AGNO hesaplama, 4'lük ve 100'lük not sistemi dönüşümü, harf notu hesaplama.",
  matematik: "Yüzde hesaplama, oran bulma, artış ve azalış hesaplama. Alışverişte indirim hesabından maaş zammı hesaplamasına kadar birçok alanda kullanılabilir.",
  "tarih-zaman": "Doğum tarihinizden yaşınızı hesaplayın, iki tarih arasındaki farkı bulun. Resmi işlemler için yaş hesabı, burç hesaplama ve doğum günü geri sayımı.",
};

const categories = getTRCategoriesForHomepage().map((cat) => ({
  name: cat.category,
  slug: cat.slug,
  icon: CATEGORY_ICONS[cat.slug],
  description: cat.description,
  longDescription: LONG_DESCRIPTIONS[cat.slug],
  calculators: cat.calculators,
}));

const popularCalculators = [
  { name: "Maaş Hesaplama", slug: "finans/maas-hesap-makinesi", icon: "💵" },
  { name: "Vergi Hesaplama", slug: "finans/vergi-hesap-makinesi", icon: "💰" },
  { name: "Kredi Hesaplama", slug: "finans/kredi-hesap-makinesi", icon: "💳" },
  { name: "BMI Hesaplama", slug: "saglik/bmi-hesap-makinesi", icon: "⚖️" },
  { name: "Not Ortalaması", slug: "egitim/not-ortalamasi-hesap-makinesi", icon: "📚" },
  { name: "Emeklilik Hesaplama", slug: "finans/emeklilik-hesap-makinesi", icon: "🏖️" },
];

export default function TurkeyCalculatorsPage() {
  const totalCalculators = categories.reduce((sum, cat) => sum + cat.calculators.length, 0);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e293b] to-[#334155] text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-[#94a3b8]">
              <li>
                <Link href="/tr" className="hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li><span className="mx-2">/</span></li>
              <li className="text-white font-medium">Hesap Makineleri</li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Tüm Hesap Makineleri
              </h1>
              <p className="text-lg text-[#94a3b8] max-w-2xl">
                Türkiye&apos;ye özel <strong className="text-white">{totalCalculators} farklı hesap makinesi</strong> ile 
                vergi, maaş, kredi, sağlık ve eğitim hesaplamalarınızı yapın. Tüm araçlar 
                2026 yılı güncel verileri ile çalışmaktadır.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-[#334155] px-4 py-2 rounded-full text-sm whitespace-nowrap">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>Güncelleme: {DATA_VERSION.lastUpdatedDisplay}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access - Popular Calculators */}
      <section className="py-8 bg-white border-b border-[#e2e8f0]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-sm font-semibold text-[#64748b] uppercase tracking-wider mb-4">
            Hızlı Erişim - En Çok Kullanılanlar
          </h2>
          <div className="flex flex-wrap gap-3">
            {popularCalculators.map((calc) => (
              <Link
                key={calc.slug}
                href={`/tr/hesap-makineleri/${calc.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#f8fafc] hover:bg-[#2563eb] hover:text-white text-[#1e293b] rounded-full border border-[#e2e8f0] transition-colors text-sm font-medium"
              >
                <span>{calc.icon}</span>
                {calc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {categories.map((category) => (
            <div key={category.slug} className="mb-16">
              {/* Category Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">{category.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-[#1e293b]">
                      {category.name}
                    </h2>
                    <Link
                      href={`/tr/hesap-makineleri/${category.slug}`}
                      className="text-[#2563eb] hover:text-[#1d4ed8] text-sm font-medium hidden md:inline-flex items-center"
                    >
                      Kategoriyi Görüntüle
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  <p className="text-[#64748b] mt-1">{category.description}</p>
                </div>
              </div>

              {/* Calculator Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.calculators.map((calc) => (
                  <Link
                    key={calc.slug}
                    href={`/tr/hesap-makineleri/${category.slug}/${calc.slug}`}
                    className="bg-white rounded-xl p-6 border-2 border-[#e2e8f0] hover:border-[#2563eb] hover:shadow-xl transition-all group relative"
                  >
                    {calc.badge && (
                      <span className={`absolute top-4 right-4 px-2 py-1 text-xs font-semibold rounded-full ${
                        calc.badge === "En Popüler" 
                          ? "bg-orange-100 text-orange-700"
                          : calc.badge === "Yeni"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}>
                        {calc.badge}
                      </span>
                    )}
                    <div className="text-3xl mb-3">{calc.icon}</div>
                    <h3 className="text-lg font-bold text-[#1e293b] group-hover:text-[#2563eb] transition-colors mb-2">
                      {calc.name}
                    </h3>
                    <p className="text-sm text-[#64748b] leading-relaxed">
                      {calc.description ?? ""}
                    </p>
                    <div className="mt-4 flex items-center text-[#2563eb] text-sm font-medium">
                      Hesapla
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Category Long Description */}
              <div className="mt-6 p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]">
                <p className="text-sm text-[#64748b]">{category.longDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white border-t border-[#e2e8f0]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-4">
              Hesap Makinelerimizin Özellikleri
            </h2>
            <p className="text-[#64748b] max-w-2xl mx-auto">
              Neden Calculator360Pro hesap makinelerini tercih etmelisiniz?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#1e293b] mb-2">%100 Doğruluk</h3>
              <p className="text-sm text-[#64748b]">
                Tüm hesaplamalar resmi formüller ve güncel veriler kullanılarak yapılır.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#1e293b] mb-2">Anında Sonuç</h3>
              <p className="text-sm text-[#64748b]">
                Değerleri girin, sonuçlarınızı saniyeler içinde detaylı olarak görün.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#1e293b] mb-2">Mobil Uyumlu</h3>
              <p className="text-sm text-[#64748b]">
                Telefon, tablet ve bilgisayardan sorunsuz kullanım.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#1e293b] mb-2">Gizlilik Garantisi</h3>
              <p className="text-sm text-[#64748b]">
                Verileriniz sunucuya gönderilmez, tüm hesaplamalar tarayıcınızda yapılır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
              Türkiye İçin Özel Hesap Makineleri
            </h2>
            
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Calculator360Pro olarak Türkiye&apos;deki kullanıcıların ihtiyaçlarına özel hesap 
              makineleri geliştiriyoruz. Diğer uluslararası hesap makinesi sitelerinden farklı 
              olarak, bizim araçlarımız Türkiye&apos;nin kendine özgü vergi sistemi, SGK mevzuatı 
              ve finansal düzenlemelerine göre çalışmaktadır.
            </p>

            <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
              Finans Hesap Makinelerinde Türkiye Farkı
            </h3>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Türkiye&apos;de finansal hesaplamalar yaparken dikkat edilmesi gereken birçok 
              yerel düzenleme bulunmaktadır. Örneğin, <strong>maaş hesaplama</strong> yaparken 
              SGK işçi payı (%14), işsizlik sigortası (%1), gelir vergisi dilimleri ve 
              AGİ (Asgari Geçim İndirimi) hesaba katılmalıdır.
            </p>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              <strong>Kredi hesaplama</strong> yaparken ise bankanın uyguladığı faiz oranının 
              yanı sıra KKDF (Kaynak Kullanımını Destekleme Fonu - %15) ve BSMV (Banka ve 
              Sigorta Muameleleri Vergisi - %10) kesintileri de toplam maliyete eklenir. 
              Bu kesintiler yalnızca Türkiye&apos;ye özgüdür.
            </p>

            <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
              2026 Yılı Güncellemeleri
            </h3>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Her yıl değişen vergi dilimleri, asgari ücret, SGK tavan tutarı ve diğer 
              finansal parametreler hesap makinelerimizde anında güncellenmektedir. 2026 yılı 
              için gelir vergisi dilimleri, SGK prim oranları ve asgari ücret tutarları 
              sistemimize eklenmiştir.
            </p>

            <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
              Sağlık ve Eğitim Hesaplamaları
            </h3>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Sağlık hesap makinelerimiz (BMI, kalori) Dünya Sağlık Örgütü ve Türkiye 
              Sağlık Bakanlığı standartlarına uygundur. Eğitim hesap makinelerimiz ise 
              Türk üniversitelerinde kullanılan 4&apos;lük not sistemi ve AKTS kredi 
              hesaplamasına göre çalışmaktadır.
            </p>

            <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
              Doğru Hesaplama İçin İpuçları
            </h3>
            <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
              <li>Maaş hesaplamada brüt maaşınızı doğru girin (işveren tarafından belirtilen tutar)</li>
              <li>Kredi hesaplamada faiz oranını yıllık olarak girin (aylık faiz × 12)</li>
              <li>Emeklilik hesaplamada işe başlama tarihinizi doğru belirtin</li>
              <li>BMI hesaplamada kilonuzu kg, boyunuzu cm cinsinden girin</li>
              <li>Not ortalamasında tüm derslerinizi ve AKTS kredilerini ekleyin</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8">
              <p className="text-sm text-blue-800">
                <strong>Not:</strong> Hesap makinelerimiz bilgilendirme amaçlıdır. Önemli finansal, 
                vergisel veya sağlık kararları için mutlaka ilgili profesyonellere danışın.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4">
            En Popüler Hesap Makineleri ile Başlayın
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Binlerce kullanıcının güvendiği hesap makineleri ile doğru sonuçlara hızla ulaşın.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tr/hesap-makineleri/finans/maas-hesap-makinesi"
              className="inline-flex items-center px-6 py-3 bg-white text-[#2563eb] font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              💵 Maaş Hesapla
            </Link>
            <Link
              href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi"
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              💰 Vergi Hesapla
            </Link>
            <Link
              href="/tr/hesap-makineleri/finans/kredi-hesap-makinesi"
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              💳 Kredi Hesapla
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { TR_CALCULATORS, TR_CATEGORY_PAGE_TITLES } from "@/lib/tr-calculators-nav";

const calculators = TR_CALCULATORS.filter((c) => c.category === "finans").map((c) => ({
  name: c.name,
  slug: c.slug,
  description: c.description ?? "",
  icon: c.icon ?? "💰",
}));

export const metadata: Metadata = {
  title: "Finans Hesap Makineleri | Vergi, Maaş, Kredi Hesaplama",
  description: "Finans hesap makineleri 2026: vergi, maaş, konut kredisi, tüketici kredisi, emeklilik ve BES. Güncel vergi dilimleri ve SGK oranları. Türkiye'ye özel ücretsiz araçlar - hemen hesaplayın.",
  keywords: [
    "finans hesap makineleri",
    "vergi hesaplama",
    "maaş hesaplama",
    "konut kredisi hesaplama",
    "kredi hesaplama",
    "emeklilik hesaplama",
    "BES hesaplama",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/finans`,
    languages: {
      en: `${SITE_URL}/calculators/finance`,
      tr: `${SITE_URL}/tr/hesap-makineleri/finans`,
      "x-default": `${SITE_URL}/calculators/finance`,
    },
  },
};

const categorySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: TR_CATEGORY_PAGE_TITLES.finans,
  description: "Türkiye'ye özel vergi, maaş, kredi ve emeklilik hesaplama araçları.",
  url: `${SITE_URL}/tr/hesap-makineleri/finans`,
  inLanguage: "tr-TR",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: calculators.length,
    itemListElement: calculators.map((calc, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: calc.name,
        url: `${SITE_URL}/tr/hesap-makineleri/finans/${calc.slug}`,
      },
    })),
  },
};

export default function FinanceCalculatorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }} />
    <div className="min-h-screen bg-[#f8fafc] py-8">
      <div className="container mx-auto px-4 max-w-6xl">
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
            <li className="text-[#1e293b] font-medium">Finans</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-[#1e293b] mb-4">
          Finans Hesap Makineleri
        </h1>
        <p className="text-lg text-[#64748b] mb-8">
          Türkiye&apos;ye özel vergi, maaş, kredi ve emeklilik hesaplama araçları. 
          2026 yılı güncel veriler ile doğru hesaplamalar.
        </p>

        {/* Açıklayıcı İçerik */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Finansal hesaplamalar günlük hayatın önemli bir parçası. Maaş hesaplama, vergi hesaplama, 
              kredi hesaplama gibi işlemler doğru yapıldığında finansal planlama kolaylaşıyor. Türkiye&apos;de 
              finansal hesaplamalar, özellikle vergi ve SGK mevzuatı nedeniyle karmaşık olabiliyor.
            </p>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              2026 yılında gelir vergisi dilimleri, SGK oranları, asgari ücret gibi değerler güncellendi. 
              Bu değişiklikler maaş hesaplamalarını, vergi hesaplamalarını ve emeklilik planlamasını etkiliyor. 
              Güncel verilerle hesaplama yapmak, doğru sonuçlar almak için şart.
            </p>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Finans hesap makinelerimiz, Türkiye&apos;ye özel düzenlemeleri dikkate alıyor. KKDF, BSMV, 
              AGİ gibi yalnızca Türkiye&apos;de geçerli olan kesintiler hesaplamalara dahil ediliyor. 
              Vergi dilimleri, SGK oranları gibi değerler resmi kaynaklardan alınıyor ve düzenli olarak güncelleniyor.
            </p>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Maaş hesaplama, brüt maaştan net maaşa geçişte hangi kesintilerin yapıldığını anlamak için önemli. 
              SGK kesintileri, gelir vergisi, damga vergisi, AGİ gibi faktörler net maaşı etkiliyor. 
              Doğru hesaplama yapmak, bütçe planlaması için gerekli.
            </p>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Vergi hesaplama, kademeli vergi sistemi nedeniyle karmaşık. Gelir arttıkça vergi oranı artıyor 
              ama tüm gelire tek bir yüksek oran uygulanmıyor. Her dilime farklı oran uygulanıyor, bu da 
              efektif vergi oranını düşürüyor.
            </p>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Kredi hesaplama, faiz oranları ve yasal kesintiler nedeniyle dikkat gerektiriyor. KKDF ve BSMV 
              gibi kesintiler toplam maliyeti artırıyor. Sadece faiz oranına bakmak yeterli değil, tüm maliyetleri 
              hesaplamak gerekiyor.
            </p>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Emeklilik hesaplama, sigorta başlangıç tarihine göre değişiyor. EYT kapsamındakiler için farklı 
              şartlar, 1999 sonrası sigortalılar için farklı şartlar var. Prim günü sayısı, emeklilik yaşı 
              gibi faktörler emeklilik tarihini belirliyor.
            </p>
          </div>
        </div>

        {/* Hesap Makineleri Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {calculators.map((calc) => (
            <Link
              key={calc.slug}
              href={`/tr/hesap-makineleri/finans/${calc.slug}`}
              className="bg-white p-6 rounded-lg border-2 border-[#e2e8f0] hover:border-[#2563eb] hover:shadow-lg transition-all group"
            >
              <div className="text-4xl mb-4">{calc.icon}</div>
              <h2 className="text-lg font-semibold text-[#1e293b] group-hover:text-[#2563eb] mb-2">
                {calc.name}
              </h2>
              <p className="text-sm text-[#64748b]">{calc.description}</p>
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
                2026 yılı vergi dilimleri nelerdir?
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                2026 yılı gelir vergisi dilimleri: 0-190.000 TL arası yüzde 15, 190.000-400.000 TL arası yüzde 20, 
                400.000-1.500.000 TL arası yüzde 27, 1.500.000-5.300.000 TL arası yüzde 35, 5.300.000 TL üzeri yüzde 40 
                oranında vergilendiriliyor.
              </p>
            </div>
            <div className="border-b border-[#e2e8f0] pb-4">
              <h3 className="font-semibold text-[#1e293b] mb-2">
                Brüt maaştan net maaş nasıl hesaplanır?
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                Brüt maaştan SGK işçi payı yüzde 14, işsizlik sigortası yüzde 1 ve gelir vergisi kesildikten sonra 
                net maaş bulunuyor. AGİ eklenerek nihai net maaş hesaplanıyor. Asgari ücretliler gelir vergisinden 
                ve damga vergisinden muaf.
              </p>
            </div>
            <div className="border-b border-[#e2e8f0] pb-4">
              <h3 className="font-semibold text-[#1e293b] mb-2">
                KKDF ve BSMV nedir?
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                KKDF, Kaynak Kullanımını Destekleme Fonu, tüketici kredilerinde yüzde 15 oranında uygulanıyor. 
                BSMV, Banka ve Sigorta Muameleleri Vergisi, faiz üzerinden yüzde 10 oranında uygulanıyor. 
                Bu kesintiler kredi maliyetini artırıyor.
              </p>
            </div>
            <div className="border-b border-[#e2e8f0] pb-4">
              <h3 className="font-semibold text-[#1e293b] mb-2">
                Emeklilik yaşı nasıl hesaplanır?
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                Emeklilik yaşı doğum yılınıza, cinsiyetinize ve işe başlama tarihinize göre değişiyor. 
                1999 öncesi sigortalı olanlar EYT şartlarından yararlanıyor. 1999 sonrası sigortalı olanlar 
                için farklı şartlar geçerli.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1e293b] mb-2">
                Hesaplamalar ne kadar güncel?
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                Tüm hesaplamalar 2026 yılı güncel verileriyle yapılıyor. Vergi dilimleri, SGK oranları, 
                asgari ücret gibi değerler resmi kaynaklardan alınıyor ve düzenli olarak güncelleniyor. 
                Yıl içinde değişiklikler olduğunda hesaplamalar güncelleniyor.
              </p>
            </div>
          </div>
        </div>

        {/* İlgili Blog Yazıları */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
            İlgili Blog Yazıları
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/tr/blog/2026-gelir-vergisi-dilimleri-hesaplama-rehberi"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">
                2026 Gelir Vergisi Dilimleri ve Hesaplama Rehberi
              </h3>
              <p className="text-sm text-[#64748b]">
                Kademeli vergi sistemi, kümülatif vergi matrahı ve efektif vergi oranı hakkında detaylı bilgi.
              </p>
            </Link>
            <Link
              href="/tr/blog/brutten-nete-maas-hesaplama-sgk-agi-vergi"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">
                Brütten Nete Maaş Hesaplama: SGK, AGİ, Vergi Rehberi
              </h3>
              <p className="text-sm text-[#64748b]">
                Maaş hesaplama adımları, kesintiler ve net maaş hesaplama yöntemleri.
              </p>
            </Link>
            <Link
              href="/tr/blog/2026-asgari-ucret-net-maas-hesaplama-sgk-kesintileri"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">
                2026 Asgari Ücret: Net Maaş Hesaplama ve SGK Kesintileri
              </h3>
              <p className="text-sm text-[#64748b]">
                2026 asgari ücret tutarı, net maaş hesaplama ve vergi muafiyetleri.
              </p>
            </Link>
            <Link
              href="/tr/blog/ihtiyac-kredisi-mi-konut-kredisi-mi-hangisi-daha-avantajli"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">
                İhtiyaç Kredisi mi Konut Kredisi mi? Hangisi Daha Avantajlı?
              </h3>
              <p className="text-sm text-[#64748b]">
                İki kredi türü arasındaki farklar, faiz oranları ve masraflar karşılaştırması.
              </p>
            </Link>
          </div>
        </div>

        {/* Rehber Sayfaları */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
            Finansal Rehberler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/tr/rehberler/finansal-terimler-sozlugu"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">
                Finansal Terimler Sözlüğü
              </h3>
              <p className="text-sm text-[#64748b]">
                Vergi, SGK, kredi ve emeklilik terimlerinin açıklamaları
              </p>
            </Link>
            <Link
              href="/tr/rehberler/vergi-takvimi-2026"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">
                2026 Vergi Takvimi
              </h3>
              <p className="text-sm text-[#64748b]">
                Vergi ödeme tarihleri ve beyanname süreleri
              </p>
            </Link>
            <Link
              href="/tr/rehberler/sgk-emeklilik-tablosu"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">
                SGK Emeklilik Tablosu
              </h3>
              <p className="text-sm text-[#64748b]">
                Emeklilik yaşı, prim günü ve emeklilik şartları
              </p>
            </Link>
            <Link
              href="/tr/rehberler/kredi-notu-nasil-yukseltilir"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">
                Kredi Notu Nasıl Yükseltilir?
              </h3>
              <p className="text-sm text-[#64748b]">
                Findeks kredi notu ve yükseltme ipuçları
              </p>
            </Link>
            <Link
              href="/tr/rehberler/vergi-indirimleri-rehberi-2026"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">
                2026 Vergi İndirimleri Rehberi
              </h3>
              <p className="text-sm text-[#64748b]">
                Eğitim, sağlık, BES ve bağış indirimleri
              </p>
            </Link>
            <Link
              href="/tr/rehberler/yatirim-baslangic-rehberi-2026"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">
                Yatırım Başlangıç Rehberi 2026
              </h3>
              <p className="text-sm text-[#64748b]">
                Yatırıma nereden başlanır, adımlar ve araçlar
              </p>
            </Link>
          </div>
        </div>

        {/* Diğer Kategoriler */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
            Diğer Hesap Makinesi Kategorileri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/tr/hesap-makineleri/saglik"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors text-center"
            >
              <div className="text-3xl mb-2">🏥</div>
              <h3 className="font-semibold text-[#1e293b]">Sağlık</h3>
              <p className="text-sm text-[#64748b] mt-1">BMI, kalori, gebelik</p>
            </Link>
            <Link
              href="/tr/hesap-makineleri/egitim"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors text-center"
            >
              <div className="text-3xl mb-2">📚</div>
              <h3 className="font-semibold text-[#1e293b]">Eğitim</h3>
              <p className="text-sm text-[#64748b] mt-1">Not ortalaması</p>
            </Link>
            <Link
              href="/tr/hesap-makineleri/matematik"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors text-center"
            >
              <div className="text-3xl mb-2">🔢</div>
              <h3 className="font-semibold text-[#1e293b]">Matematik</h3>
              <p className="text-sm text-[#64748b] mt-1">Yüzde, indirim</p>
            </Link>
            <Link
              href="/tr/hesap-makineleri/tarih-zaman"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors text-center"
            >
              <div className="text-3xl mb-2">📅</div>
              <h3 className="font-semibold text-[#1e293b]">Tarih & Zaman</h3>
              <p className="text-sm text-[#64748b] mt-1">Yaş, tarih farkı</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

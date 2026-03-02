import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { generateSimpleBreadcrumbSchema } from "@/lib/seo/schema";
import { TR_REHBERLER } from "@/lib/tr-rehberler";

export const metadata: Metadata = {
  title: "Hakkımızda - Misyonumuz ve Ekibimiz",
  description: "Calculator360Pro hakkında: Uzmanlar tarafından geliştirilen ücretsiz online hesap makineleri. Ekibimizle tanışın, misyonumuzu keşfedin. Hesaplamaları herkes için erişilebilir kılıyoruz.",
  keywords: ["hakkımızda", "Calculator360Pro", "ücretsiz hesap makineleri", "misyon", "ekip", "online hesaplama"],
  alternates: {
    canonical: `${SITE_URL}/tr/hakkimizda`,
    languages: {
      "en": `${SITE_URL}/about`,
      "tr": `${SITE_URL}/tr/hakkimizda`,
      "x-default": `${SITE_URL}/about`,
    },
  },
  openGraph: {
    title: "Hakkımızda - Calculator360Pro",
    description: "Calculator360Pro hakkında bilgi edinin - Uzmanlar tarafından geliştirilen ücretsiz online hesap makineleri.",
    url: `${SITE_URL}/tr/hakkimizda`,
    type: "website",
    siteName: "Calculator360Pro",
    locale: "tr_TR",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Hakkımızda - Calculator360Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hakkımızda - Calculator360Pro",
    description: "Calculator360Pro hakkında bilgi edinin - Uzmanlar tarafından geliştirilen ücretsiz online hesap makineleri.",
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// E-E-A-T için ekip üyeleri
const teamMembers = [
  {
    name: "Finans İçerik Ekibi",
    role: "İçerik ve Araştırma",
    credentials: "Mali Müşavir ve Finans Uzmanları",
    description: "Finans içeriklerimiz, Türkiye'de aktif olarak çalışan mali müşavirler ve finans uzmanları tarafından hazırlanıyor ve gözden geçiriliyor. 2026 yılı vergi dilimleri, SGK oranları ve finansal mevzuat konularında güncel bilgiler sağlıyoruz. Tüm finansal hesaplamalar resmi kaynaklardan doğrulanıyor.",
    expertise: ["Vergi Hesaplamaları", "SGK Mevzuatı", "Kredi Hesaplamaları", "Emeklilik Planlaması"],
    sources: ["Gelir İdaresi Başkanlığı", "Sosyal Güvenlik Kurumu", "T.C. Merkez Bankası"],
  },
  {
    name: "Sağlık İçerik Ekibi",
    role: "İçerik ve Araştırma",
    credentials: "Beslenme ve Sağlık Uzmanları",
    description: "Sağlık içeriklerimiz, beslenme uzmanları ve sağlık danışmanları tarafından hazırlanıyor. Dünya Sağlık Örgütü standartlarına uygun bilgiler sunuyoruz. BMI, kalori hesaplamaları ve sağlık metrikleri konularında güncel ve doğru bilgiler sağlıyoruz.",
    expertise: ["Beslenme Bilimi", "Sağlık Metrikleri", "Kilo Yönetimi", "Fitness Hesaplamaları"],
    sources: ["Dünya Sağlık Örgütü", "Türkiye Sağlık Bakanlığı"],
  },
  {
    name: "Eğitim İçerik Ekibi",
    role: "İçerik ve Araştırma",
    credentials: "Eğitim Uzmanları ve Akademisyenler",
    description: "Eğitim içeriklerimiz, üniversite öğretim üyeleri ve eğitim uzmanları tarafından hazırlanıyor. Türk eğitim sistemine uygun not hesaplama yöntemleri ve akademik standartlar konularında bilgi sağlıyoruz.",
    expertise: ["Not Sistemi Hesaplamaları", "Akademik Standartlar", "Eğitim Metrikleri"],
    sources: ["Yükseköğretim Kurulu", "Üniversite Not Sistemleri"],
  },
  {
    name: "Geliştirici Ekibi",
    role: "Mühendislik",
    credentials: "Full-Stack Geliştirme Uzmanları",
    description: "Geliştirici ekibimiz, modern web teknolojileri kullanarak hızlı, güvenilir ve kullanıcı dostu hesap makineleri oluşturuyor. Tüm hesaplamalar tarayıcıda yapılıyor, kişisel veriler saklanmıyor.",
    expertise: ["Web Geliştirme", "UI/UX Tasarım", "Performans Optimizasyonu", "Erişilebilirlik"],
    sources: [],
  },
];

// Güven göstergeleri
const trustIndicators = [
  {
    title: "Doğru Hesaplamalar",
    description: "Tüm formüller endüstri standartlarına göre doğrulanmıştır",
    icon: "✓",
  },
  {
    title: "Gizlilik Odaklı",
    description: "Kişisel veri toplama veya depolama yapılmaz",
    icon: "🔒",
  },
  {
    title: "Sonsuza Kadar Ücretsiz",
    description: "Tüm hesap makineleri gizli ücret olmadan ücretsiz",
    icon: "💰",
  },
  {
    title: "Düzenli Güncellemeler",
    description: "Geri bildirimlere göre sürekli iyileştirilir",
    icon: "🔄",
  },
];

const hakkimizdaBreadcrumbSchema = generateSimpleBreadcrumbSchema([
  { name: "Ana Sayfa", path: "/tr" },
  { name: "Hakkımızda", path: "/tr/hakkimizda" },
]);

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hakkimizdaBreadcrumbSchema) }} />
      <div className="container mx-auto px-4 max-w-4xl">
        <nav className="mb-6 text-sm text-[#64748b]" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li><Link href="/tr" className="hover:text-[#2563eb]">Ana Sayfa</Link></li>
            <li>/</li>
            <li className="text-[#1e293b] font-medium">Hakkımızda</li>
          </ol>
        </nav>
        {/* Hero Section */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <h1 className="text-4xl font-bold text-[#1e293b] mb-4">
            Calculator360Pro Hakkında
          </h1>
          <p className="text-xl text-[#64748b] leading-relaxed">
            Doğru hesaplamaları herkese tamamen ücretsiz olarak erişilebilir kılma 
            misyonuyla yola çıktık. 2025'ten bu yana, binlerce kullanıcının daha iyi 
            finansal, sağlık ve eğitim kararları almasına yardımcı olduk.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {trustIndicators.map((indicator) => (
            <div
              key={indicator.title}
              className="bg-white rounded-lg border-2 border-[#e2e8f0] p-4 text-center"
            >
              <div className="text-2xl mb-2">{indicator.icon}</div>
              <h3 className="font-semibold text-[#1e293b] text-sm mb-1">
                {indicator.title}
              </h3>
              <p className="text-xs text-[#64748b]">{indicator.description}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Hikayemiz
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Calculator360Pro, 2025 yılında basit bir hedefle kuruldu: doğru, güvenilir 
                hesaplamaları herkes için erişilebilir kılmak. Birçok online hesap makinesinin 
                reklamlarla dolu olduğunu, kayıt gerektirdiğini veya yanlış sonuçlar verdiğini 
                fark ettik. Daha iyisini yapabileceğimizi biliyorduk.
              </p>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Bugün Calculator360Pro, finans, sağlık, eğitim, matematik ve daha fazlasını 
                kapsayan 25'ten fazla ücretsiz hesap makinesi sunmaktadır. Her hesap makinesi, 
                uzman ekibimiz tarafından düzenli olarak gözden geçirilen ve güncellenen 
                endüstri standardı formüller kullanılarak doğruluk öncelikli olarak 
                geliştirilmiştir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Misyonumuz
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                <strong>Herkese finansları, sağlıkları, eğitimleri ve günlük yaşamları 
                hakkında bilinçli kararlar almalarına yardımcı olan ücretsiz, doğru 
                hesaplama araçları sağlamak.</strong>
              </p>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Sayıları anlamanın pahalı yazılımlar veya karmaşık elektronik tablolar 
                gerektirmemesi gerektiğine inanıyoruz. İster konut kredisi ödemelerinizi 
                hesaplıyor, ister sağlık metriklerinizi takip ediyor, ister eğitiminizi 
                planlıyor olun, hızlı ve kolay bir şekilde doğru cevaplar almanıza 
                yardımcı olmak istiyoruz.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Neler Sunuyoruz
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-[#f8fafc] rounded-lg">
                  <h3 className="font-semibold text-[#1e293b] mb-2">Finans Hesap Makineleri</h3>
                  <p className="text-sm text-[#64748b]">
                    Konut kredisi, kredi, faiz, vergi, maaş, bütçe ve yatırım hesap makineleri
                  </p>
                </div>
                <div className="p-4 bg-[#f8fafc] rounded-lg">
                  <h3 className="font-semibold text-[#1e293b] mb-2">Sağlık Hesap Makineleri</h3>
                  <p className="text-sm text-[#64748b]">
                    BMI, vücut yağı, kalori, hamilelik ve diğer sağlıkla ilgili hesap makineleri
                  </p>
                </div>
                <div className="p-4 bg-[#f8fafc] rounded-lg">
                  <h3 className="font-semibold text-[#1e293b] mb-2">Eğitim Hesap Makineleri</h3>
                  <p className="text-sm text-[#64748b]">
                    Not ortalaması, not, yüzde ve akademik hesap makineleri
                  </p>
                </div>
                <div className="p-4 bg-[#f8fafc] rounded-lg">
                  <h3 className="font-semibold text-[#1e293b] mb-2">Matematik ve Tarih Hesap Makineleri</h3>
                  <p className="text-sm text-[#64748b]">
                    Bilimsel, yüzde, yaş, tarih ve zaman hesap makineleri
                  </p>
                </div>
              </div>
              <p className="text-[#64748b] leading-relaxed">
                <Link href="/tr/hesap-makineleri" className="text-[#2563eb] hover:underline">
                  Tüm hesap makinelerimize göz atın →
                </Link>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Rehberler
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Vergi, emeklilik, kredi ve yatırım konularında 2026 güncel rehberlerimiz hesap makinelerimizi tamamlar.
                <Link href="/tr/rehberler" className="text-[#2563eb] hover:underline font-medium ml-1">
                  Tüm rehberlere göz atın →
                </Link>
              </p>
              <ul className="list-disc list-inside text-[#64748b] space-y-2">
                {TR_REHBERLER.map((rehber) => (
                  <li key={rehber.slug}>
                    <Link href={`/tr/rehberler/${rehber.slug}`} className="text-[#2563eb] hover:underline">
                      {rehber.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Doğruluğa Olan Bağlılığımız
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Calculator360Pro'daki her hesap makinesi, endüstri standardı formüller 
                ve metodolojiler kullanılarak oluşturulmuştur. Sürecimiz şunları içerir:
              </p>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
                <li><strong>Araştırma:</strong> Resmi kaynakları, akademik makaleleri ve endüstri standartlarını inceliyoruz</li>
                <li><strong>Geliştirme:</strong> Hesap makineleri hassasiyet ve detaylara dikkat edilerek oluşturuluyor</li>
                <li><strong>Test:</strong> Lansmandan önce birden fazla test vakası doğruluğu doğruluyor</li>
                <li><strong>İnceleme:</strong> Düzenli incelemeler formüllerin düzenlemelerle güncel kalmasını sağlıyor</li>
                <li><strong>Güncellemeler:</strong> Kullanıcı geri bildirimlerini dahil ediyoruz ve gerektiğinde güncelliyoruz</li>
              </ul>
              <p className="text-[#64748b] leading-relaxed text-sm bg-[#eff6ff] p-4 rounded-lg">
                <strong>Önemli:</strong> Doğruluk için çabalasak da hesap makinelerimiz yalnızca 
                bilgilendirme amaçlıdır. Önemli finansal, sağlık veya hukuki kararlar için 
                lütfen nitelikli profesyonellere danışın.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Neden Calculator360Pro'yu Seçmelisiniz?
              </h2>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
                <li><strong>%100 Ücretsiz:</strong> Tüm hesap makineleri tamamen ücretsiz kullanılabilir</li>
                <li><strong>Kayıt Gerekmez:</strong> Herhangi bir hesap makinesine anında erişin, kayıt gerekmez</li>
                <li><strong>Mobil Uyumlu:</strong> Telefonlarda, tabletlerde ve bilgisayarlarda mükemmel çalışır</li>
                <li><strong>Gizlilik Öncelikli:</strong> Verilerinizi takip etmiyoruz, saklamıyoruz veya satmıyoruz</li>
                <li><strong>Detaylı Açıklamalar:</strong> Her hesap makinesi formüller ve kılavuzlar içerir</li>
                <li><strong>Düzenli Güncellemeler:</strong> Kullanıcı geri bildirimlerine göre sürekli iyileştirilir</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Türkiye İçin Özel İçerik
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Türkiye'deki kullanıcılarımız için özel olarak hazırlanmış hesap makineleri 
                sunuyoruz. Bu hesap makineleri:
              </p>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
                <li><strong>2026 Güncel Vergi Dilimleri:</strong> En güncel Türkiye gelir vergisi oranları</li>
                <li><strong>SGK Prim Hesaplamaları:</strong> İşçi ve işveren SGK primi hesapları</li>
                <li><strong>Asgari Ücret Verileri:</strong> 2026 yılı asgari ücret ve AGİ hesaplamaları</li>
                <li><strong>Konut Kredisi:</strong> Türkiye bankalarına uygun kredi hesaplamaları</li>
                <li><strong>Üniversite Not Sistemi:</strong> Türk üniversiteleri 4'lük not sistemi</li>
                <li><strong>Emeklilik Hesabı:</strong> SGK emeklilik yaşı ve prim gün hesaplamaları</li>
              </ul>
            </section>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
            Ekibimiz
          </h2>
          <div className="space-y-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="p-6 bg-[#f8fafc] rounded-lg"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-[#1e293b] text-lg">
                      {member.name}
                    </h3>
                    <p className="text-[#2563eb] text-sm font-medium mb-2">
                      {member.role} • {member.credentials}
                    </p>
                    <p className="text-[#64748b] text-sm mb-3">
                      {member.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-white text-xs text-[#64748b] rounded-full border border-[#e2e8f0]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    {member.sources && member.sources.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-[#e2e8f0]">
                        <p className="text-xs text-[#64748b] mb-1 font-medium">Kaynaklar:</p>
                        <div className="flex flex-wrap gap-2">
                          {member.sources.map((source) => (
                            <span
                              key={source}
                              className="text-xs text-[#64748b]"
                            >
                              {source}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kaynaklar ve Referanslar */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
            Kaynaklar ve Referanslar
          </h2>
          <p className="text-[#64748b] mb-4 leading-relaxed">
            Hesaplamalarımızda kullanılan veriler aşağıdaki resmi kurumlardan alınmaktadır. Tüm veriler düzenli olarak güncellenmekte ve doğrulanmaktadır.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[#f8fafc] rounded-lg">
              <h3 className="font-semibold text-[#1e293b] mb-2">Vergi ve Maliye</h3>
              <ul className="text-sm text-[#64748b] space-y-1">
                <li>• Gelir İdaresi Başkanlığı (gib.gov.tr)</li>
                <li>• T.C. Resmi Gazete (resmigazete.gov.tr)</li>
                <li>• Maliye Bakanlığı</li>
              </ul>
            </div>
            <div className="p-4 bg-[#f8fafc] rounded-lg">
              <h3 className="font-semibold text-[#1e293b] mb-2">Sosyal Güvenlik</h3>
              <ul className="text-sm text-[#64748b] space-y-1">
                <li>• Sosyal Güvenlik Kurumu (sgk.gov.tr)</li>
                <li>• Çalışma ve Sosyal Güvenlik Bakanlığı (csgb.gov.tr)</li>
              </ul>
            </div>
            <div className="p-4 bg-[#f8fafc] rounded-lg">
              <h3 className="font-semibold text-[#1e293b] mb-2">Sağlık</h3>
              <ul className="text-sm text-[#64748b] space-y-1">
                <li>• Dünya Sağlık Örgütü (WHO)</li>
                <li>• Türkiye Sağlık Bakanlığı</li>
              </ul>
            </div>
            <div className="p-4 bg-[#f8fafc] rounded-lg">
              <h3 className="font-semibold text-[#1e293b] mb-2">Eğitim</h3>
              <ul className="text-sm text-[#64748b] space-y-1">
                <li>• Yükseköğretim Kurulu (YÖK)</li>
                <li>• Üniversite Not Sistemleri</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Son Güncelleme:</strong> Ocak 2026. Tüm veriler 2026 yılı güncel mevzuatına göre güncellenmiştir. 
              Vergi dilimleri, SGK oranları ve diğer finansal veriler resmi kaynaklardan alınmaktadır.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
            Bize Ulaşın
          </h2>
          <p className="text-[#64748b] leading-relaxed mb-4">
            Geri bildirimlerinize değer veriyoruz ve size yardımcı olmak için buradayız. 
            Sorularınız, önerileriniz veya yardıma ihtiyacınız olursa lütfen bize ulaşmaktan 
            çekinmeyin.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-[#f8fafc] rounded-lg">
              <h3 className="font-semibold text-[#1e293b] mb-2">Genel Sorular</h3>
              <a
                href="mailto:contact@calculator360pro.com"
                className="text-[#2563eb] hover:underline"
              >
                contact@calculator360pro.com
              </a>
            </div>
            <div className="p-4 bg-[#f8fafc] rounded-lg">
              <h3 className="font-semibold text-[#1e293b] mb-2">Yanıt Süresi</h3>
              <p className="text-[#64748b] text-sm">
                Genellikle 24-48 saat içinde yanıt veriyoruz
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://twitter.com/calculator360pro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] hover:text-[#2563eb] transition-colors text-sm"
            >
              Twitter/X
            </a>
            <a
              href="https://www.facebook.com/calculator360pro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] hover:text-[#2563eb] transition-colors text-sm"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/company/calculator360pro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] hover:text-[#2563eb] transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { generateSimpleBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Calculator360Pro Gizlilik Politikası - Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi.",
  keywords: ["gizlilik politikası", "gizlilik", "veri koruma", "Calculator360Pro gizlilik", "çerez politikası"],
  alternates: {
    canonical: `${SITE_URL}/tr/gizlilik-politikasi`,
    languages: {
      "en": `${SITE_URL}/privacy-policy`,
      "tr": `${SITE_URL}/tr/gizlilik-politikasi`,
      "x-default": `${SITE_URL}/privacy-policy`,
    },
  },
  openGraph: {
    title: "Gizlilik Politikası - Calculator360Pro",
    description: "Calculator360Pro Gizlilik Politikası",
    url: `${SITE_URL}/tr/gizlilik-politikasi`,
    type: "website",
    locale: "tr_TR",
    siteName: "Calculator360Pro",
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

const gizlilikBreadcrumbSchema = generateSimpleBreadcrumbSchema([
  { name: "Ana Sayfa", path: "/tr" },
  { name: "Gizlilik Politikası", path: "/tr/gizlilik-politikasi" },
]);

export default function GizlilikPolitikasiPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gizlilikBreadcrumbSchema) }} />
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-[#64748b]">
            <li>
              <Link href="/tr" className="hover:text-[#2563eb]">
                Ana Sayfa
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#1e293b] font-medium">Gizlilik Politikası</li>
          </ol>
        </nav>

        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8">
          <h1 className="text-4xl font-bold text-[#1e293b] mb-8">
            Gizlilik Politikası
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-[#64748b] mb-4">
              Son güncelleme: {new Date().toLocaleDateString("tr-TR")}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                1. Giriş
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Calculator360Pro ("biz", "bizim" veya "bize") olarak gizliliğinizi 
                korumaya kararlıyız. Bu Gizlilik Politikası, calculator360pro.com 
                web sitemizi ziyaret ettiğinizde bilgilerinizi nasıl topladığımızı, 
                kullandığımızı, ifşa ettiğimizi ve koruduğumuzu açıklar.
              </p>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Bu politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) 
                ve Avrupa Birliği Genel Veri Koruma Yönetmeliği (GDPR) kapsamında 
                hazırlanmıştır.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                2. Toplanan Bilgiler
              </h2>
              <h3 className="text-xl font-semibold text-[#1e293b] mb-3">
                2.1 Otomatik Olarak Toplanan Bilgiler
              </h3>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Web sitemizi ziyaret ettiğinizde, cihazınız hakkında belirli bilgileri 
                otomatik olarak toplarız:
              </p>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
                <li>IP adresi</li>
                <li>Tarayıcı türü ve sürümü</li>
                <li>İşletim sistemi</li>
                <li>Ziyaret edilen sayfalar ve sayfalarda geçirilen süre</li>
                <li>Yönlendiren web sitesi adresleri</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1e293b] mb-3">
                2.2 Hesap Makinesi Kullanımı
              </h3>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Hesap makinelerimize girdiğiniz veriler (örneğin, kilo, boy, gelir vb.) 
                <strong> sunucularımızda saklanmaz</strong>. Tüm hesaplamalar tarayıcınızda 
                yerel olarak gerçekleştirilir.
              </p>

              <h3 className="text-xl font-semibold text-[#1e293b] mb-3">
                2.3 Çerezler ve İzleme Teknolojileri
              </h3>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Web sitemizdeki etkinliği izlemek ve belirli bilgileri depolamak için 
                çerezler ve benzer izleme teknolojileri kullanıyoruz. Çerezler, anonim 
                benzersiz bir tanımlayıcı içerebilen küçük miktarda veri içeren dosyalardır.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                3. Bilgilerinizi Nasıl Kullanıyoruz
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Topladığımız bilgileri şu amaçlarla kullanıyoruz:
              </p>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
                <li>Hizmetlerimizi sağlamak, sürdürmek ve geliştirmek</li>
                <li>Kullanım kalıplarını ve eğilimleri analiz etmek</li>
                <li>Deneyiminizi kişiselleştirmek</li>
                <li>İlgili reklamları görüntülemek</li>
                <li>Web sitesi güvenliğini sağlamak ve dolandırıcılığı önlemek</li>
              </ul>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Sitemizdeki reklamlar, gezinme aktiviteniz ve ilgi alanlarınıza göre
                kişiselleştirilmiş olabilir. Reklam tercihlerinizi yönetmek veya
                kişiselleştirilmiş reklamlardan çıkmak için tarayıcı ayarlarınızı veya
                Google hesabınızı (örn. adssettings.google.com) kullanabilirsiniz.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                4. Üçüncü Taraf Hizmetleri
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Hakkınızda bilgi toplayabilecek üçüncü taraf hizmetleri kullanıyoruz:
              </p>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
                <li>
                  <strong>Google Analytics:</strong> Web sitesi trafiğini ve kullanım 
                  kalıplarını analiz etmek için
                </li>
                <li>
                  <strong>Google AdSense:</strong> Reklam görüntülemek için
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                5. Haklarınız (KVKK & GDPR)
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                6698 sayılı KVKK ve GDPR kapsamında aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
                <li>Kişisel verilerinize erişim hakkı</li>
                <li>Düzeltme hakkı</li>
                <li>Silme hakkı ("unutulma hakkı")</li>
                <li>İşlemeyi kısıtlama hakkı</li>
                <li>Veri taşınabilirliği hakkı</li>
                <li>İtiraz hakkı</li>
                <li>Otomatik karar vermeye tabi olmama hakkı</li>
              </ul>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Bu haklarınızı kullanmak için contact@calculator360pro.com adresine 
                e-posta gönderebilirsiniz.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                6. Veri Güvenliği
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Kişisel bilgilerinizi korumak için uygun teknik ve organizasyonel 
                önlemler uyguluyoruz. Ancak, internet üzerinden hiçbir iletim yöntemi 
                %100 güvenli değildir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                7. Çocukların Gizliliği
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Web sitemiz 13 yaşın altındaki çocuklara yönelik değildir. 13 yaşın 
                altındaki çocuklardan bilerek kişisel bilgi toplamıyoruz.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                8. Uluslararası Veri Aktarımı
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Verileriniz, Türkiye dışındaki sunucularda (Google sunucuları) 
                işlenebilir. Bu durumda, verilerinizin güvenliği için gerekli 
                önlemler alınmaktadır.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                9. Bu Gizlilik Politikasındaki Değişiklikler
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Herhangi bir 
                değişiklik olması durumunda, yeni Gizlilik Politikasını bu sayfada 
                yayınlayarak ve "Son güncelleme" tarihini güncelleyerek sizi 
                bilgilendireceğiz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                10. İletişim
              </h2>
              <p className="text-[#64748b] leading-relaxed">
                Bu Gizlilik Politikası hakkında sorularınız varsa, lütfen bizimle 
                iletişime geçin:{" "}
                <a href="mailto:contact@calculator360pro.com" className="text-[#2563eb] hover:underline">
                  contact@calculator360pro.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

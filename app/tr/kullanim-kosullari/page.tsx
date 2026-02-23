import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { generateSimpleBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: "Calculator360Pro Kullanım Koşulları - Web sitemizi kullanırken uymanız gereken kurallar ve koşullar.",
  keywords: ["kullanım koşulları", "şartlar", "yasal", "Calculator360Pro koşullar", "kullanıcı sözleşmesi"],
  alternates: {
    canonical: `${SITE_URL}/tr/kullanim-kosullari`,
    languages: {
      "en": `${SITE_URL}/terms-of-service`,
      "tr": `${SITE_URL}/tr/kullanim-kosullari`,
      "x-default": `${SITE_URL}/terms-of-service`,
    },
  },
  openGraph: {
    title: "Kullanım Koşulları - Calculator360Pro",
    description: "Calculator360Pro Kullanım Koşulları",
    url: `${SITE_URL}/tr/kullanim-kosullari`,
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

const kullanimKosullariBreadcrumbSchema = generateSimpleBreadcrumbSchema([
  { name: "Ana Sayfa", path: "/tr" },
  { name: "Kullanım Koşulları", path: "/tr/kullanim-kosullari" },
]);

export default function KullanimKosullariPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(kullanimKosullariBreadcrumbSchema) }} />
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
            <li className="text-[#1e293b] font-medium">Kullanım Koşulları</li>
          </ol>
        </nav>

        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8">
          <h1 className="text-4xl font-bold text-[#1e293b] mb-8">
            Kullanım Koşulları
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-[#64748b] mb-4">
              Son güncelleme: {new Date().toLocaleDateString("tr-TR")}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                1. Koşulların Kabulü
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Calculator360Pro'ya erişerek ve kullanarak, bu sözleşmenin 
                şartlarını kabul etmiş sayılırsınız. Bu şartları kabul 
                etmiyorsanız, lütfen web sitemizi kullanmayın.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                2. Kullanım Lisansı
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Calculator360Pro'yu yalnızca kişisel, ticari olmayan amaçlarla 
                geçici olarak kullanmanıza izin verilmektedir. Bu bir lisans 
                verilmesidir, mülkiyet devri değildir ve bu lisans kapsamında 
                şunları yapamazsınız:
              </p>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
                <li>Materyalleri değiştirmek veya kopyalamak</li>
                <li>Materyalleri herhangi bir ticari amaçla kullanmak</li>
                <li>Web sitesinde bulunan herhangi bir yazılımı tersine mühendislik 
                    yapmaya çalışmak</li>
                <li>Herhangi bir telif hakkı veya diğer mülkiyet notlarını kaldırmak</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                3. Sorumluluk Reddi
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Calculator360Pro'daki hesap makineleri "olduğu gibi" sunulmaktadır. 
                Açık veya zımni hiçbir garanti vermiyoruz ve bu kapsamda, satılabilirlik, 
                belirli bir amaca uygunluk veya fikri mülkiyet ihlali gibi zımni 
                garantiler dahil ancak bunlarla sınırlı olmamak üzere tüm garantileri 
                reddediyoruz.
              </p>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Ayrıca, Calculator360Pro web sitesindeki hesap makinelerinin 
                doğruluğu, olası sonuçları veya güvenilirliği konusunda herhangi 
                bir garanti vermiyoruz.
              </p>
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 mb-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Önemli:</strong> Hesap makinelerimiz yalnızca bilgilendirme 
                  amaçlıdır. Finansal, sağlık, hukuki veya diğer profesyonel kararlar 
                  için mutlaka ilgili uzmanlara danışın.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                4. Sınırlamalar
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Hiçbir durumda Calculator360Pro veya tedarikçileri, Calculator360Pro 
                web sitesindeki hesap makinelerinin kullanımından veya 
                kullanılamamasından kaynaklanan herhangi bir zarardan (veri kaybı 
                veya kâr kaybı dahil ancak bunlarla sınırlı olmamak üzere) sorumlu 
                tutulamaz.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                5. Materyallerin Doğruluğu
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Calculator360Pro'da görünen hesap makineleri teknik, tipografik 
                veya fotografik hatalar içerebilir. Calculator360Pro, web 
                sitesindeki hesap makinelerinin doğru, eksiksiz veya güncel 
                olduğunu garanti etmez.
              </p>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Calculator360Pro, önceden haber vermeksizin web sitesindeki 
                hesap makinelerinde değişiklik yapabilir. Ancak, bu değişiklikleri 
                güncelleme taahhüdünde bulunmuyoruz.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                6. Türkiye&apos;ye Özel Hesap Makineleri
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Türkiye&apos;ye özel hesap makinelerimiz (vergi, maaş, emeklilik vb.) 
                Türkiye Cumhuriyeti mevzuatına göre hazırlanmıştır. Ancak:
              </p>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
                <li>Vergi oranları ve düzenlemeler yıl içinde değişebilir</li>
                <li>Hesaplamalar tahmini sonuçlar sağlar</li>
                <li>Kesin bilgi için ilgili resmi kurumları kontrol edin</li>
                <li>Vergi ve mali konularda mali müşavirinize danışın</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                7. Bağlantılar
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Calculator360Pro, web sitesine bağlı tüm siteleri incelememiştir 
                ve bu tür bağlantılı sitelerin içeriğinden sorumlu değildir. 
                Herhangi bir bağlantının dahil edilmesi, Calculator360Pro 
                tarafından sitenin onaylandığı anlamına gelmez.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                8. Değişiklikler
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Calculator360Pro, web sitesi için bu kullanım koşullarını 
                önceden haber vermeksizin herhangi bir zamanda değiştirebilir. 
                Bu web sitesini kullanarak, o anki geçerli kullanım koşullarına 
                bağlı olmayı kabul etmiş olursunuz.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                9. Uygulanacak Hukuk
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Bu Kullanım Koşulları Türkiye Cumhuriyeti yasalarına tabidir 
                ve buna göre yorumlanacaktır. Bu koşullardan doğan herhangi 
                bir anlaşmazlık Türkiye mahkemelerinin münhasır yargı yetkisine 
                tabi olacaktır.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                10. İletişim Bilgileri
              </h2>
              <p className="text-[#64748b] leading-relaxed">
                Bu Kullanım Koşulları hakkında sorularınız varsa, lütfen 
                bizimle iletişime geçin:{" "}
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

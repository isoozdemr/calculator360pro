import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { TurkeyPregnancyCalculator } from "@/components/calculators/tr/TurkeyPregnancyCalculator";

export const metadata: Metadata = {
  title: "Gebelik Hesap Makinesi - Doğum Tarihi Hesaplama 2026 | Calculator360Pro",
  description: "Ücretsiz gebelik hesap makinesi. Son adet tarihinden doğum tarihi, gebelik haftası ve trimester hesaplama. Hamilelik takibi için ideal.",
  keywords: [
    "gebelik hesaplama",
    "doğum tarihi hesaplama",
    "gebelik haftası hesaplama",
    "hamilelik hesap makinesi",
    "son adet tarihi hesaplama",
    "gebelik takibi",
    "doğum tarihi bulma",
    "gebelik hesap makinesi",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/saglik/gebelik-hesap-makinesi`,
    languages: {
      "en": `${SITE_URL}/calculators/health/pregnancy-calculator`,
      "tr": `${SITE_URL}/tr/hesap-makineleri/saglik/gebelik-hesap-makinesi`,
    },
  },
  openGraph: {
    title: "Gebelik Hesap Makinesi | Calculator360Pro",
    description: "Ücretsiz gebelik hesap makinesi. Doğum tarihi ve gebelik haftası hesaplama.",
    url: `${SITE_URL}/tr/hesap-makineleri/saglik/gebelik-hesap-makinesi`,
    type: "website",
    locale: "tr_TR",
    siteName: "Calculator360Pro",
  },
};

const faqs = [
  {
    question: "Doğum tarihi nasıl hesaplanır?",
    answer: "Doğum tarihi, son adet tarihinin ilk gününe 280 gün (40 hafta) eklenerek hesaplanır. Bu, Naegele kuralı olarak bilinen standart yöntemdir. Örneğin, son adet tarihi 1 Ocak ise, tahmini doğum tarihi 8 Ekim civarındadır.",
  },
  {
    question: "Gebelik haftası nasıl hesaplanır?",
    answer: "Gebelik haftası, son adet tarihinin ilk gününden bugüne kadar geçen sürenin hafta ve gün olarak hesaplanmasıdır. Örneğin, son adet tarihinden 70 gün geçtiyse, gebelik 10. hafta, 0. gündür.",
  },
  {
    question: "Trimester nedir?",
    answer: "Trimester, gebeliğin üç aylık dönemleridir. Birinci trimester 0-13. hafta, ikinci trimester 14-27. hafta, üçüncü trimester 28-40. hafta arasındadır. Her trimester'da farklı gelişim aşamaları ve dikkat edilmesi gerekenler vardır.",
  },
  {
    question: "Doğum tarihi ne kadar doğrudur?",
    answer: "Doğum tarihleri tahminidir. Bebeklerin sadece yaklaşık %5'i tam tahmini tarihte doğar. Çoğu doğum, tahmini tarihten 2 hafta önce veya sonra gerçekleşir. Ultrason ölçümleri ile daha doğru bir tahmin yapılabilir.",
  },
];

export default function GebelikHesapMakinesiPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Gebelik Hesap Makinesi",
    description: "Doğum tarihi ve gebelik haftası hesaplama aracı",
    url: `${SITE_URL}/tr/hesap-makineleri/saglik/gebelik-hesap-makinesi`,
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "TRY"
    },
    inLanguage: "tr"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="min-h-screen bg-[#f8fafc]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1e293b] to-[#334155] text-white py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Breadcrumb */}
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-[#94a3b8]">
                <li>
                  <Link href="/tr" className="hover:text-white transition-colors">
                    Ana Sayfa
                  </Link>
                </li>
                <li><span className="mx-2">/</span></li>
                <li>
                  <Link href="/tr/hesap-makineleri" className="hover:text-white transition-colors">
                    Hesap Makineleri
                  </Link>
                </li>
                <li><span className="mx-2">/</span></li>
                <li>
                  <Link href="/tr/hesap-makineleri/saglik" className="hover:text-white transition-colors">
                    Sağlık
                  </Link>
                </li>
                <li><span className="mx-2">/</span></li>
                <li className="text-white font-medium">Gebelik Hesap Makinesi</li>
              </ol>
            </nav>

            {/* Header */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                Gebelik Hesap Makinesi
              </h1>
              <p className="text-lg text-[#94a3b8] max-w-2xl">
                Son adet tarihinden doğum tarihi, gebelik haftası ve trimester hesaplama. 
                Hamilelik takibi için ideal.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <TurkeyPregnancyCalculator />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-8">
              Gebelik Hesaplama Nasıl Yapılır?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[#f8fafc] rounded-xl p-6 border border-[#e2e8f0]">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-[#2563eb]">
                  1
                </div>
                <h3 className="font-bold text-[#1e293b] mb-2">Son Adet Tarihi</h3>
                <p className="text-sm text-[#64748b]">
                  Son adet döneminizin ilk gününü girin.
                </p>
              </div>
              <div className="bg-[#f8fafc] rounded-xl p-6 border border-[#e2e8f0]">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-[#2563eb]">
                  2
                </div>
                <h3 className="font-bold text-[#1e293b] mb-2">Hesaplama</h3>
                <p className="text-sm text-[#64748b]">
                  Doğum tarihi ve gebelik haftası hesaplanır.
                </p>
              </div>
              <div className="bg-[#f8fafc] rounded-xl p-6 border border-[#e2e8f0]">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-[#2563eb]">
                  3
                </div>
                <h3 className="font-bold text-[#1e293b] mb-2">Sonuç</h3>
                <p className="text-sm text-[#64748b]">
                  Doğum tarihi, gebelik haftası ve trimester bilgilerini görün.
                </p>
              </div>
            </div>

            {/* Example Calculation */}
            <div className="bg-[#f8fafc] rounded-xl p-6 border border-[#e2e8f0]">
              <h3 className="font-bold text-[#1e293b] mb-4 flex items-center gap-2">
                <span className="text-xl">📅</span>
                Örnek: Son Adet Tarihi 1 Ocak 2026
              </h3>
              <div className="space-y-2 text-[#64748b]">
                <p><strong className="text-[#1e293b]">Tahmini Doğum Tarihi:</strong> 8 Ekim 2026 (SAT + 280 gün)</p>
                <p><strong className="text-[#1e293b]">Gebelik Süresi:</strong> 40 hafta (280 gün)</p>
                <p><strong className="text-[#1e293b]">Trimester:</strong> Gebelik ilerledikçe değişir</p>
                <p className="text-sm mt-4"><strong className="text-[#1e293b]">Not:</strong> Bu hesaplama tahminidir. Kesin bilgi için doktorunuza danışın.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-12 bg-[#f8fafc]">
          <div className="container mx-auto px-4 max-w-4xl">
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
                Gebelik Hesaplama Rehberi
              </h2>
              
              <p className="text-[#64748b] mb-6 leading-relaxed">
                Gebelik hesaplama, hamilelik takibi için önemli bir araçtır. 
                Son adet tarihinizden doğum tarihinizi, gebelik haftanızı ve 
                hangi trimester'da olduğunuzu öğrenebilirsiniz.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                Naegele Kuralı
              </h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Doğum tarihi hesaplaması, Naegele kuralına göre yapılır. Bu kural, 
                son adet tarihinin ilk gününe 280 gün (40 hafta) eklenmesi prensibine dayanır. 
                Bu yöntem, dünya çapında en yaygın kullanılan gebelik hesaplama yöntemidir.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                Trimester Dönemleri
              </h3>
              <div className="bg-white rounded-lg p-6 mb-6 border border-[#e2e8f0]">
                <ul className="space-y-3 text-[#64748b]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#2563eb] font-bold">1.</span>
                    <div>
                      <strong className="text-[#1e293b]">Birinci Trimester (0-13. hafta):</strong> Embriyo gelişimi, organ oluşumu
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#2563eb] font-bold">2.</span>
                    <div>
                      <strong className="text-[#1e293b]">İkinci Trimester (14-27. hafta):</strong> Fetal büyüme, hareket başlangıcı
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#2563eb] font-bold">3.</span>
                    <div>
                      <strong className="text-[#1e293b]">Üçüncü Trimester (28-40. hafta):</strong> Hızlı büyüme, doğum hazırlığı
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8">
                <p className="text-sm text-blue-800">
                  <strong>Önemli Not:</strong> Bu hesap makinesi bilgilendirme amaçlıdır. 
                  Gebelik takibi ve sağlık sorunları için mutlaka doktorunuza danışın. 
                  Doğum tarihleri tahminidir ve ultrason ölçümleri ile daha doğru bilgi alınabilir.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-8 text-center">
              Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#f8fafc] rounded-lg p-6 border border-[#e2e8f0]">
                  <h3 className="font-bold text-[#1e293b] mb-2 flex items-start gap-2">
                    <span className="text-[#2563eb]">S:</span>
                    {faq.question}
                  </h3>
                  <p className="text-[#64748b] leading-relaxed pl-6">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Calculators */}
        <section className="py-12 bg-[#f8fafc]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
              İlgili Hesap Makineleri
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link 
                href="/tr/hesap-makineleri/saglik/bmi-hesap-makinesi"
                className="bg-white p-6 rounded-lg border-2 border-[#e2e8f0] hover:border-[#2563eb] transition-colors group"
              >
                <div className="text-3xl mb-3">⚖️</div>
                <h3 className="font-bold text-[#1e293b] group-hover:text-[#2563eb] mb-2">
                  BMI Hesap Makinesi
                </h3>
                <p className="text-sm text-[#64748b]">
                  Vücut kitle indeksi hesaplama
                </p>
              </Link>
              <Link 
                href="/tr/hesap-makineleri/saglik/kalori-hesap-makinesi"
                className="bg-white p-6 rounded-lg border-2 border-[#e2e8f0] hover:border-[#2563eb] transition-colors group"
              >
                <div className="text-3xl mb-3">🍎</div>
                <h3 className="font-bold text-[#1e293b] group-hover:text-[#2563eb] mb-2">
                  Kalori Hesap Makinesi
                </h3>
                <p className="text-sm text-[#64748b]">
                  Günlük kalori ihtiyacı hesaplama
                </p>
              </Link>
              <Link 
                href="/tr/blog"
                className="bg-white p-6 rounded-lg border-2 border-[#e2e8f0] hover:border-[#2563eb] transition-colors group"
              >
                <div className="text-3xl mb-3">📝</div>
                <h3 className="font-bold text-[#1e293b] group-hover:text-[#2563eb] mb-2">
                  Blog Yazıları
                </h3>
                <p className="text-sm text-[#64748b]">
                  Sağlık rehberleri ve ipuçları
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

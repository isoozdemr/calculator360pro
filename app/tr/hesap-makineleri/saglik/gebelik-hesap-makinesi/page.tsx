import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { TurkeyPregnancyCalculator } from "@/components/calculators/tr/TurkeyPregnancyCalculator";
import { CalculatorDisclaimer } from "@/components/calculators/CalculatorDisclaimer";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";

export const metadata: Metadata = {
  title: "Gebelik Hesap Makinesi 2026 - Doğum Tarihi Hesapla",
  description: "Gebelik hesap makinesi 2026: Son adet tarihinden doğum tarihi ve gebelik haftası hesaplayın. Trimester bilgisi ve hamilelik takibi. Ücretsiz gebelik hesaplama - hemen deneyin.",
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
      "x-default": `${SITE_URL}/calculators/health/pregnancy-calculator`,
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
  {
    question: "Adet düzensizliği doğum tarihini etkiler mi?",
    answer: "Evet. Düzensiz adet görenlerde son adet tarihi yanıltıcı olabilir. İlk trimester ultrason (CRL) ölçümü ile daha doğru tahmin yapılır. Doktorunuz her iki yöntemi birlikte değerlendirir.",
  },
  {
    question: "Tüp bebek gebeliğinde hesaplama farklı mı?",
    answer: "Tüp bebekte transfer tarihi veya yumurta toplama tarihi baz alınır; son adet tarihi farklı hesaplanır. Bu durumda hesaplamayı merkeziniz veya doktorunuz yapar.",
  },
];

const howToSteps = [
  { name: "Son adet tarihini girin", text: "Son adet döneminizin ilk gününü seçin." },
  { name: "Hesapla butonuna tıklayın", text: "Tahmini doğum tarihi ve gebelik haftası hesaplanır." },
  { name: "Trimester bilgisini inceleyin", text: "Hangi trimester'da olduğunuzu ve hafta bilgisini görün." },
];

export default function GebelikHesapMakinesiPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Gebelik Hesap Makinesi"
        description="Doğum tarihi ve gebelik haftası hesaplama aracı"
        slug="gebelik-hesap-makinesi"
        categorySlug="saglik"
        categoryName="Sağlık"
        dateModified={DATA_VERSION.lastUpdated}
        category="health"
        faqs={faqs}
        howToName="Gebelik Hesap Makinesi Nasıl Kullanılır?"
        howToDescription="Doğum tarihi ve gebelik haftası hesaplamak için adımlar."
        howToSteps={howToSteps}
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
            <CalculatorDisclaimer category="health" locale="tr" />
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
                Gebelik ve Doğum Tarihi Nedir?
              </h2>
              <p className="text-[#64748b] mb-6 leading-relaxed">
                Gebelik, son adet tarihinin (SAT) ilk gününden itibaren ortalama 40 hafta (280 gün) süren 
                süreçtir. Tahmini doğum tarihi, SAT&apos;e 280 gün eklenerek hesaplanır (Naegele kuralı). 
                Bu hesap makinesi gebelik haftanızı, trimester döneminizi ve tahmini doğum tarihinizi verir. 
                Hamilelikte kilo ve kalori takibi için <Link href="/tr/hesap-makineleri/saglik/bmi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">BMI</Link> ve 
                <Link href="/tr/hesap-makineleri/saglik/kalori-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium"> kalori hesap makinesi</Link> kullanabilirsiniz.
              </p>

              <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
                Gebelik Hesaplama Rehberi
              </h2>
              
              <p className="text-[#64748b] mb-6 leading-relaxed">
                Gebelik hesaplama, hamilelik takibi için önemli bir araçtır. 
                Son adet tarihinizden doğum tarihinizi, gebelik haftanızı ve 
                hangi trimester&apos;da olduğunuzu öğrenebilirsiniz.
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

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                Gebelik Takvimi ve Hafta Hafta Gelişim
              </h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                İlk trimester (0–13. hafta) embriyo ve organ gelişimi, ikinci trimester (14–27. hafta) 
                fetal büyüme ve hareket, üçüncü trimester (28–40. hafta) hızlı kilo alımı ve doğum 
                hazırlığı dönemidir. Hafta bilgisi, doğum öncesi kontrollerinizi planlamanıza yardımcı olur.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                Ultrason ile Hesaplama Farkı
              </h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Son adet tarihi (SAT) ile hesaplanan doğum tarihi, düzenli adet görenlerde güvenilirdir. 
                Adet düzensizliği veya ovülasyon gecikmesi varsa ultrason ölçümleri (özellikle ilk trimester 
                CRL ölçümü) daha doğru tahmin verebilir. Doktorunuz her iki yöntemi birlikte değerlendirir.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                İpuçları ve Öneriler
              </h3>
              <ul className="list-disc list-inside text-[#64748b] space-y-2 mb-4">
                <li>Sağlıklı kilo aralığı: <Link href="/tr/hesap-makineleri/saglik/bmi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">BMI hesap makinesi</Link>.</li>
                <li>Günlük kalori ihtiyacı: <Link href="/tr/hesap-makineleri/saglik/kalori-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">kalori hesap makinesi</Link>.</li>
                <li>İki tarih arası gün: <Link href="/tr/hesap-makineleri/tarih-zaman/tarih-farki-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">tarih farkı hesap makinesi</Link>.</li>
                <li>Vücut kompozisyonu takibi: <Link href="/tr/hesap-makineleri/saglik/vucut-yag-orani-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">vücut yağ oranı hesap makinesi</Link>.</li>
                <li>Doğum tarihi ve yaş hesaplama: <Link href="/tr/hesap-makineleri/tarih-zaman/yas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">yaş hesap makinesi</Link>.</li>
              </ul>

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

        <section className="py-12 bg-[#f8fafc]">
          <div className="container mx-auto px-4 max-w-4xl">
            <RelatedCalculatorsTR categorySlug="saglik" currentSlug="gebelik-hesap-makinesi" maxResults={6} />
          </div>
        </section>
      </div>
    </>
  );
}

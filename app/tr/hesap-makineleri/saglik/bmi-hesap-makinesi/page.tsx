import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { generateTurkishHowToSchema, generateTurkishBreadcrumbSchema } from "@/lib/seo/schema";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { TurkeyBMICalculator } from "@/components/calculators/tr/TurkeyBMICalculator";
import { CalculatorDisclaimer } from "@/components/calculators/CalculatorDisclaimer";

export const metadata: Metadata = {
  title: "BMI Hesap Makinesi 2026 - İdeal Kilo Hesapla",
  description: "BMI hesap makinesi: Kilonuz ve boyunuzla vücut kitle indeksinizi saniyede hesaplayın. WHO kategorileri ve ideal kilo aralığı. Ücretsiz BMI hesaplama - hemen deneyin.",
  keywords: [
    "bmi hesaplama",
    "vücut kitle indeksi",
    "kilo boy oranı",
    "ideal kilo hesaplama",
    "obezite hesaplama",
    "bmi hesap makinesi",
    "zayıflık testi",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/saglik/bmi-hesap-makinesi`,
    languages: {
      "en": `${SITE_URL}/calculators/health/bmi-calculator`,
      "tr": `${SITE_URL}/tr/hesap-makineleri/saglik/bmi-hesap-makinesi`,
      "x-default": `${SITE_URL}/calculators/health/bmi-calculator`,
    },
  },
  openGraph: {
    title: "BMI Hesap Makinesi - Vücut Kitle İndeksi | Calculator360Pro",
    description: "Ücretsiz BMI hesap makinesi. Kilonuz ve boyunuzla BMI değerinizi hesaplayın.",
    url: `${SITE_URL}/tr/hesap-makineleri/saglik/bmi-hesap-makinesi`,
    type: "website",
    locale: "tr_TR",
    siteName: "Calculator360Pro",
  },
};

// Schema markup
function generateBMISchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "BMI Hesap Makinesi",
    "description": "Vücut Kitle İndeksi (BMI) hesaplama aracı",
    "url": `${SITE_URL}/tr/hesap-makineleri/saglik/bmi-hesap-makinesi`,
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "TRY"
    },
    "inLanguage": "tr"
  };
}

const bmiFaqs = [
  { q: "BMI nedir?", a: "BMI (Body Mass Index - Vücut Kitle İndeksi), kilo ve boy kullanılarak hesaplanan bir değerdir. Formül: BMI = Kilo (kg) / Boy² (m²). WHO tarafından kabul edilen standart kategorilere göre değerlendirilir." },
  { q: "Normal BMI aralığı nedir?", a: "WHO standartlarına göre normal BMI aralığı 18.5 ile 24.9 arasındadır. 18.5'in altı zayıf, 25-29.9 arası fazla kilolu, 30 ve üzeri obez olarak değerlendirilir." },
  { q: "Türkiye'de obezite oranı nedir?", a: "T.C. Sağlık Bakanlığı verilerine göre Türkiye'de yetişkin nüfusunun yaklaşık %30'u obez kategorisindedir. Bu oran Avrupa ortalamasının üzerindedir." },
  { q: "Çocuklar için BMI nasıl yorumlanır?", a: "Çocuklarda BMI yaş ve cinsiyete göre persentil (yüzdelik dilim) tabloları ile değerlendirilir. Yetişkin kategorileri kullanılmaz. Yorumlama için çocuk doktoruna danışın." },
  { q: "BMI sporcular için güvenilir mi?", a: "Kas kütlesi yüksek sporcularda BMI yanıltıcı olabilir; vücut yağ oranı ölçümü daha anlamlıdır. Bel çevresi ve kan değerleri ile birlikte değerlendirilmesi önerilir." },
  { q: "İdeal kilo nasıl hesaplanır?", a: "İdeal kilo için hedef BMI 22 kabul edilir: İdeal kilo = 22 × Boy² (m²). Örneğin 1,70 m boy için yaklaşık 63,6 kg. Kişiye göre 18,5–24,9 aralığında değişebilir." },
];

function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": bmiFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a },
    })),
  };
}

const bmiHowToSteps = [
  { name: "Kilo ve boyu girin", text: "Kilonuzu (kg) ve boyunuzu (cm veya m) ilgili alanlara girin." },
  { name: "Hesapla butonuna tıklayın", text: "BMI değerinizi ve WHO kategorisini görün." },
  { name: "Sonucu yorumlayın", text: "İdeal kilo aralığı ve sağlık kategorisini inceleyin." },
];

export default function BMIHesapMakinesiPage() {
  const bmiUrl = `${SITE_URL}/tr/hesap-makineleri/saglik/bmi-hesap-makinesi`;
  const howToSchema = generateTurkishHowToSchema(
    "BMI Hesap Makinesi Nasıl Kullanılır?",
    "Vücut Kitle İndeksi hesaplamak için adımlar.",
    bmiHowToSteps,
    bmiUrl
  );
  const breadcrumbSchema = generateTurkishBreadcrumbSchema("Sağlık", "saglik", "BMI Hesap Makinesi", "bmi-hesap-makinesi");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBMISchema()),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema()),
        }}
      />
      
      <div className="min-h-screen bg-[#f8fafc] py-16">
        <div className="container mx-auto px-4 max-w-4xl">
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
              <li>
                <Link href="/tr/hesap-makineleri/saglik" className="hover:text-[#2563eb]">
                  Sağlık
                </Link>
              </li>
              <li>/</li>
              <li className="text-[#1e293b] font-medium">BMI Hesap Makinesi</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              BMI Hesap Makinesi
            </h1>
            <p className="text-[#64748b] max-w-2xl mx-auto">
              Vücut Kitle İndeksinizi (BMI) hesaplayın ve WHO standartlarına göre 
              sağlık durumunuzu değerlendirin.
            </p>
          </div>

          {/* Calculator */}
          <TurkeyBMICalculator />
          <CalculatorDisclaimer category="health" locale="tr" />

          {/* Educational Content */}
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                BMI Nedir?
              </h2>
              <p className="text-[#64748b] mb-4">
                BMI (Body Mass Index - Vücut Kitle İndeksi), kilo ve boy kullanılarak 
                hesaplanan ve vücut yağ oranı hakkında genel bir fikir veren bir değerdir. 
                Dünya Sağlık Örgütü (WHO) tarafından kabul edilen standart bir ölçümdür.
              </p>
              <p className="text-[#64748b] mb-4">
                BMI tek başına tanı koymaz; ancak fazla kilolu ve obezite riski taramasında 
                yaygın kullanılır. Bel çevresi ve <Link href="/tr/hesap-makineleri/saglik/vucut-yag-orani-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">vücut yağ oranı</Link> gibi 
                ölçümler de sağlık değerlendirmesinde tamamlayıcıdır. Günlük kalori ihtiyacınızı 
                bilmek için <Link href="/tr/hesap-makineleri/saglik/kalori-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">kalori hesap makinesi</Link> kullanabilirsiniz.
              </p>
              <div className="bg-[#f8fafc] rounded-lg p-4">
                <p className="font-mono text-center text-lg">
                  BMI = Kilo (kg) ÷ Boy² (m²)
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                BMI Nasıl Hesaplanır?
              </h2>
              <ol className="list-decimal list-inside text-[#64748b] space-y-2">
                <li>Kilonuzu kilogram (kg) cinsinden girin</li>
                <li>Boyunuzu santimetre (cm) cinsinden girin</li>
                <li>"BMI Hesapla" butonuna tıklayın</li>
                <li>Sonucunuzu ve kategorinizi görüntüleyin</li>
              </ol>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                2026 Güncel BMI Referansları
              </h2>
              <p className="text-[#64748b] mb-4">
                WHO ve Türkiye Sağlık Bakanlığı referanslarına göre yetişkin BMI kategorileri 
                (zayıf &lt;18.5, normal 18.5–24.9, fazla kilolu 25–29.9, obez ≥30) 2026 yılında 
                da geçerlidir. Çocuk ve ergenlerde yaş ve cinsiyete göre persentil eğrileri 
                kullanılır; bu hesap makinesi yetişkin (18+ yaş) için tasarlanmıştır.
              </p>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                BMI Kategorileri
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#f8fafc]">
                      <th className="px-4 py-3 text-left font-semibold text-[#1e293b]">Kategori</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#1e293b]">BMI Aralığı</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#1e293b]">Açıklama</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e2e8f0]">
                    <tr>
                      <td className="px-4 py-3 text-yellow-600 font-medium">Zayıf</td>
                      <td className="px-4 py-3 text-[#64748b]">&lt; 18.5</td>
                      <td className="px-4 py-3 text-[#64748b]">Yetersiz beslenme riski</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-green-600 font-medium">Normal</td>
                      <td className="px-4 py-3 text-[#64748b]">18.5 - 24.9</td>
                      <td className="px-4 py-3 text-[#64748b]">Sağlıklı kilo aralığı</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-orange-600 font-medium">Fazla Kilolu</td>
                      <td className="px-4 py-3 text-[#64748b]">25 - 29.9</td>
                      <td className="px-4 py-3 text-[#64748b]">Kilo verme önerilir</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-red-500 font-medium">1. Derece Obez</td>
                      <td className="px-4 py-3 text-[#64748b]">30 - 34.9</td>
                      <td className="px-4 py-3 text-[#64748b]">Sağlık riski artmış</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-red-600 font-medium">2. Derece Obez</td>
                      <td className="px-4 py-3 text-[#64748b]">35 - 39.9</td>
                      <td className="px-4 py-3 text-[#64748b]">Ciddi sağlık riski</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-red-700 font-medium">3. Derece Obez</td>
                      <td className="px-4 py-3 text-[#64748b]">≥ 40</td>
                      <td className="px-4 py-3 text-[#64748b]">Çok ciddi sağlık riski</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 mb-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Sıkça Sorulan Sorular
              </h2>
              <div className="space-y-4">
                {bmiFaqs.map((faq, i) => (
                  <div key={i} className="border-b border-[#e2e8f0] pb-4 last:border-0">
                    <h3 className="font-semibold text-[#1e293b] mb-2">{faq.q}</h3>
                    <p className="text-[#64748b] text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Blog Post */}
            <div className="bg-[#f8fafc] rounded-lg border-2 border-[#e2e8f0] p-6 mb-6">
              <h2 className="text-xl font-bold text-[#1e293b] mb-4">
                İlgili Blog Yazıları
              </h2>
              <Link href="/tr/blog/bmi-nedir-ideal-kilo-nasil-hesaplanir" className="block hover:opacity-80 transition-opacity">
                <h3 className="font-semibold text-[#1e293b] mb-2 hover:text-[#2563eb]">
                  BMI Nedir? İdeal Kilo Nasıl Hesaplanır?
                </h3>
                <p className="text-sm text-[#64748b] mb-2">
                  BMI (Vücut Kitle İndeksi) nedir, nasıl hesaplanır, ideal kilo aralığı nedir? BMI hesaplama ve sağlıklı kilo yönetimi rehberi.
                </p>
                <span className="text-[#2563eb] font-medium text-sm">
                  Yazıyı Oku →
                </span>
              </Link>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                BMI ve Sağlık Riskleri
              </h2>
              <p className="text-[#64748b] mb-4">
                Yüksek BMI değerleri (25 ve üzeri) kalp hastalığı, tip 2 diyabet, yüksek tansiyon, 
                uyku apnesi ve eklem problemleri riskini artırır. Düşük BMI (18.5 altı) ise 
                bağışıklık zayıflığı, kemik erimesi ve yetersiz beslenme ile ilişkilendirilir. 
                T.C. Sağlık Bakanlığı verilerine göre Türkiye&apos;de yetişkin obezite oranı 
                son yıllarda artış göstermektedir; bu nedenle düzenli BMI takibi önemlidir.
              </p>
              <p className="text-[#64748b] mb-4">
                İdeal kilo aralığınızı bilmek, hem kilo verme hem kilo alma hedeflerinizi 
                sağlıklı sınırlar içinde tutmanıza yardımcı olur. Günlük kalori ihtiyacınızı 
                hesaplamak için <Link href="/tr/hesap-makineleri/saglik/kalori-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Kalori Hesap Makinesi</Link> aracımızı 
                kullanabilirsiniz.
              </p>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Çocuklar ve Ergenler İçin BMI
              </h2>
              <p className="text-[#64748b] mb-4">
                Yetişkin BMI kategorileri 18 yaş altı için doğrudan uygulanmaz. Çocuklarda ve 
                ergenlerde BMI, yaş ve cinsiyete göre yüzdelik dilimler (persentil) ile 
                değerlendirilir. Sağlık Bakanlığı ve WHO çocuk büyüme eğrilerini referans alır. 
                Çocuğunuzun BMI&apos;sini hesapladıktan sonra yorumlama için bir çocuk doktoruna 
                veya aile hekiminize danışmanız önerilir.
              </p>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Gerçek Hayat Örnekleri
              </h2>
              <p className="text-[#64748b] mb-4">
                Örnek 1: Boyu 170 cm, kilosu 75 kg olan bir kişi için BMI = 75 / (1,7 × 1,7) = 25,95 
                (fazla kilolu kategorisi). Sağlıklı aralığa (18,5–24,9) girmek için yaklaşık 
                72 kg civarına inmesi önerilir. Örnek 2: 165 cm, 55 kg → BMI = 20,2 (normal). 
                Bu değer ideal aralıkta kabul edilir.
              </p>
              <p className="text-[#64748b] mb-4">
                Sporcularda kas kütlesi fazla olduğundan BMI yüksek çıkabilir; bu durumda 
                vücut yağ oranı ölçümü daha anlamlıdır. Yaşlı bireylerde ise kas kaybı 
                nedeniyle BMI normal çıksa bile kas zayıflığı olabilir.
              </p>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Uzman İpuçları
              </h2>
              <ul className="list-disc list-inside text-[#64748b] space-y-2 mb-4">
                <li>BMI&apos;nizi 3–6 ayda bir aynı tartı ve mezura ile ölçün; sabah aç karnına ölçüm daha tutarlıdır.</li>
                <li>Bel çevrenizi de takip edin: erkeklerde 94 cm, kadınlarda 80 cm üzeri risk artışı gösterebilir. <Link href="/tr/hesap-makineleri/saglik/vucut-yag-orani-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Vücut yağ oranı hesap makinesi</Link> ile daha detaylı tahmin alabilirsiniz.</li>
                <li>Kilo verme hedeflerinde haftada 0,5–1 kg kayıp sağlıklı kabul edilir; ani diyetlerden kaçının. Günlük kalori ihtiyacınız için <Link href="/tr/hesap-makineleri/saglik/kalori-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">kalori hesap makinesi</Link> kullanın.</li>
                <li>Düzenli fiziksel aktivite ve dengeli beslenme, BMI&apos;yi sağlıklı aralıkta tutmanın temelidir.</li>
                <li>Gebelikte BMI takibi için <Link href="/tr/hesap-makineleri/saglik/gebelik-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">gebelik hesap makinesi</Link> ve sağlık uzmanı önerisi alın.</li>
              </ul>
              <p className="text-[#64748b]">
                Detaylı rehber için <Link href="/tr/blog/saglikli-beslenme-who-onerileri-ve-turk-mutfagi" className="text-[#2563eb] hover:underline font-medium">Sağlıklı Beslenme: WHO Önerileri ve Türk Mutfağı</Link> yazımızı okuyabilirsiniz.
              </p>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                BMI&apos;nin Sınırlamaları
              </h2>
              <ul className="list-disc list-inside text-[#64748b] space-y-2">
                <li>Kas kütlesi yüksek olan sporcularda yanıltıcı olabilir</li>
                <li>Yaşlı bireylerde kas kaybını hesaba katmaz</li>
                <li>Bel çevresi ve vücut yağ dağılımını ölçmez</li>
                <li>Çocuklar ve hamileler için farklı tablolar kullanılmalıdır</li>
              </ul>
              <p className="mt-4 text-sm text-[#64748b] bg-yellow-50 p-4 rounded-lg">
                <strong>Öneri:</strong> BMI tek başına sağlık durumunuzu belirlemez. 
                Bel çevresi ölçümü, kan testleri ve genel sağlık değerlendirmesi için 
                bir sağlık uzmanına danışmanızı öneririz.
              </p>
            </div>

            <section className="py-12 bg-[#f8fafc] mt-8">
              <RelatedCalculatorsTR categorySlug="saglik" currentSlug="bmi-hesap-makinesi" maxResults={6} />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

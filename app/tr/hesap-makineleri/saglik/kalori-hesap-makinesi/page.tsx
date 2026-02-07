import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { TurkeyCalorieCalculator } from "@/components/calculators/tr/TurkeyCalorieCalculator";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";

export const metadata: Metadata = {
  title: "Kalori Hesap Makinesi 2026 - BMH ve TDEE Hesapla",
  description: "Günlük kalori ihtiyacınızı anında hesaplayın! BMH, TDEE ve makro önerileri. Kilo verme/alma için ücretsiz - deneyin.",
  keywords: [
    "kalori hesaplama",
    "günlük kalori ihtiyacı",
    "bazal metabolizma",
    "BMH hesaplama",
    "TDEE hesaplama",
    "kilo verme kalori",
    "kilo alma kalori",
    "makro besin hesaplama",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/saglik/kalori-hesap-makinesi`,
    languages: {
      "en": `${SITE_URL}/calculators/health/calorie-calculator`,
      "tr": `${SITE_URL}/tr/hesap-makineleri/saglik/kalori-hesap-makinesi`,
    },
  },
  openGraph: {
    title: "Kalori Hesap Makinesi - Günlük Kalori İhtiyacı | Calculator360Pro",
    description: "Ücretsiz kalori hesap makinesi. Günlük kalori ihtiyacınızı hesaplayın.",
    url: `${SITE_URL}/tr/hesap-makineleri/saglik/kalori-hesap-makinesi`,
    type: "website",
    locale: "tr_TR",
    siteName: "Calculator360Pro",
  },
};

const kaloriFaqs = [
  { question: "Günlük kalori ihtiyacı nasıl hesaplanır?", answer: "Günlük kalori ihtiyacı, Bazal Metabolizma Hızı (BMH) ile aktivite faktörünün çarpılmasıyla hesaplanır. BMH için Mifflin-St Jeor denklemi kullanılır: Erkek (10×kilo)+(6.25×boy)-(5×yaş)+5, Kadın aynı formül -161." },
  { question: "Kilo vermek için günde kaç kalori almalıyım?", answer: "Sağlıklı kilo vermek için günlük ihtiyacınızın 500 kalori altında kalmanız önerilir; haftada ~0,5 kg kayıp. Kadınlar 1200, erkekler 1500 kalorinin altına düşmemeli." },
  { question: "BMH (Bazal Metabolizma Hızı) nedir?", answer: "BMH, vücudun dinlenme halinde temel yaşamsal fonksiyonlar için harcadığı enerjidir. Solunum, kalp atışı, hücre yenilenmesi bu enerjiye dahildir." },
  { question: "TDEE ile BMH farkı nedir?", answer: "BMH sadece dinlenme metabolizmasıdır. TDEE (Toplam Günlük Enerji Harcaması) BMH + günlük aktivite ve egzersizle harcanan kalorilerin toplamıdır." },
  { question: "Makro besin dağılımı nasıl olmalı?", answer: "Türkiye Beslenme Rehberi'ne göre kabaca: protein %15-20, karbonhidrat %45-55, yağ %25-30. Hedef ve sağlık durumuna göre diyetisyen ile kişiselleştirilebilir." },
  { question: "Kalori açığı ne kadar güvenli?", answer: "Günde 500 kalori açığı çoğu yetişkin için güvenli kabul edilir. Daha büyük açıklar besin eksikliği ve metabolizma yavaşlaması riski taşır; uzman kontrolü önerilir." },
];

const howToSteps = [
  { name: "Cinsiyet ve yaş girin", text: "Cinsiyetinizi ve yaşınızı seçin." },
  { name: "Boy ve kilo girin", text: "Boy (cm) ve kilo (kg) değerlerinizi girin." },
  { name: "Aktivite seviyesi seçin", text: "Günlük aktivite seviyenizi (sedanter, hafif, orta, aktif, çok aktif) seçin." },
  { name: "Hedef seçin (isteğe bağlı)", text: "Kilo verme, kilo alma veya mevcut kiloyu koruma hedefini seçin." },
  { name: "Sonuçları inceleyin", text: "BMH, TDEE ve makro önerilerini görün." },
];

export default function KaloriHesapMakinesiPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Kalori Hesap Makinesi"
        description="Günlük kalori ihtiyacı hesaplama aracı"
        slug="kalori-hesap-makinesi"
        categorySlug="saglik"
        categoryName="Sağlık"
        dateModified="2026-01-01"
        category="health"
        faqs={kaloriFaqs}
        howToName="Kalori Hesap Makinesi Nasıl Kullanılır?"
        howToDescription="Günlük kalori ihtiyacı hesaplamak için adımlar."
        howToSteps={howToSteps}
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
              <li className="text-[#1e293b] font-medium">Kalori Hesap Makinesi</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              Kalori Hesap Makinesi
            </h1>
            <p className="text-[#64748b] max-w-2xl mx-auto">
              Günlük kalori ihtiyacınızı hesaplayın ve hedefinize uygun beslenme 
              planı oluşturun. BMH, TDEE ve makro besin önerileri ile birlikte.
            </p>
          </div>

          {/* Calculator */}
          <TurkeyCalorieCalculator />

          {/* Educational Content */}
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Kalori Hesaplama Nedir?
              </h2>
              <p className="text-[#64748b] mb-4">
                Kalori hesaplama, vücudunuzun günlük enerji ihtiyacını belirlemenize 
                yardımcı olur. Bu hesaplama yaş, cinsiyet, kilo, boy ve aktivite 
                düzeyinize göre yapılır.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#f8fafc] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1e293b] mb-2">BMH (Bazal Metabolizma Hızı)</h3>
                  <p className="text-sm text-[#64748b]">
                    Vücudunuzun dinlenme halinde temel yaşamsal fonksiyonlar için 
                    harcadığı enerji miktarı.
                  </p>
                </div>
                <div className="bg-[#f8fafc] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1e293b] mb-2">TDEE (Günlük Toplam Enerji)</h3>
                  <p className="text-sm text-[#64748b]">
                    BMH + günlük aktivitelerinizle birlikte toplam harcadığınız 
                    enerji miktarı.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Aktivite Düzeyleri
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-[#f8fafc] rounded-lg">
                  <span className="font-semibold text-[#1e293b] min-w-[120px]">Hareketsiz</span>
                  <p className="text-sm text-[#64748b]">
                    Masa başı iş, çok az veya hiç egzersiz yok (BMH × 1.2)
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-[#f8fafc] rounded-lg">
                  <span className="font-semibold text-[#1e293b] min-w-[120px]">Hafif Aktif</span>
                  <p className="text-sm text-[#64748b]">
                    Haftada 1-3 gün hafif egzersiz (BMH × 1.375)
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-[#f8fafc] rounded-lg">
                  <span className="font-semibold text-[#1e293b] min-w-[120px]">Orta Aktif</span>
                  <p className="text-sm text-[#64748b]">
                    Haftada 3-5 gün orta şiddette egzersiz (BMH × 1.55)
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-[#f8fafc] rounded-lg">
                  <span className="font-semibold text-[#1e293b] min-w-[120px]">Aktif</span>
                  <p className="text-sm text-[#64748b]">
                    Haftada 6-7 gün yoğun egzersiz (BMH × 1.725)
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-[#f8fafc] rounded-lg">
                  <span className="font-semibold text-[#1e293b] min-w-[120px]">Çok Aktif</span>
                  <p className="text-sm text-[#64748b]">
                    Çok yoğun egzersiz veya fiziksel iş (BMH × 1.9)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Sıkça Sorulan Sorular
              </h2>
              <div className="space-y-4 mb-8">
                {kaloriFaqs.map((faq, i) => (
                  <div key={i} className="border-b border-[#e2e8f0] pb-4 last:border-0">
                    <h3 className="font-semibold text-[#1e293b] mb-2">{faq.question}</h3>
                    <p className="text-[#64748b] text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Makro Besinler
              </h2>
              <p className="text-[#64748b] mb-4">
                T.C. Sağlık Bakanlığı Türkiye Beslenme Rehberi&apos;ne göre önerilen 
                makro besin dağılımı:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#f8fafc] rounded-lg p-4 text-center">
                  <h3 className="font-semibold text-[#1e293b] mb-2">Protein</h3>
                  <p className="text-2xl font-bold text-[#2563eb]">%15-20</p>
                  <p className="text-xs text-[#64748b] mt-1">
                    Et, balık, yumurta, süt ürünleri, baklagiller
                  </p>
                </div>
                <div className="bg-[#f8fafc] rounded-lg p-4 text-center">
                  <h3 className="font-semibold text-[#1e293b] mb-2">Karbonhidrat</h3>
                  <p className="text-2xl font-bold text-[#2563eb]">%45-55</p>
                  <p className="text-xs text-[#64748b] mt-1">
                    Tam tahıllar, meyve, sebze, baklagiller
                  </p>
                </div>
                <div className="bg-[#f8fafc] rounded-lg p-4 text-center">
                  <h3 className="font-semibold text-[#1e293b] mb-2">Yağ</h3>
                  <p className="text-2xl font-bold text-[#2563eb]">%25-30</p>
                  <p className="text-xs text-[#64748b] mt-1">
                    Zeytinyağı, ceviz, badem, balık yağı
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Kilo Verme ve Kilo Alma Hedefleri
              </h2>
              <p className="text-[#64748b] mb-4">
                Sağlıklı kilo vermek için günlük ihtiyacınızın yaklaşık 500 kalori altında beslenmek 
                haftada 0,5 kg kayba denk gelir. Kilo almak için 300–500 kalori fazla almanız önerilir. 
                Günlük 1200 kalorinin (kadınlar) veya 1500 kalorinin (erkekler) altına düşmeyin; 
                metabolizma yavaşlayabilir ve besin eksikliği riski artar. Kalori açığı ile kilo verme 
                mantığını detaylı anlamak için <Link href="/tr/blog/kalori-acigi-ile-kilo-verme-nasil-calisir" className="text-[#2563eb] hover:underline font-medium">Kalori Açığı ile Kilo Verme</Link> ve 
                <Link href="/tr/blog/gunluk-kalori-ihtiyaci-bmr-ve-tdee-nedir" className="text-[#2563eb] hover:underline font-medium"> Günlük Kalori İhtiyacı: BMR ve TDEE</Link> yazılarımızı okuyabilirsiniz.
              </p>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Türk Mutfağında Kalori Örnekleri
              </h2>
              <p className="text-[#64748b] mb-4">
                Ortalama porsiyonlar (yaklaşık): mercimek çorba 150–200 kcal, döner dürüm 400–600 kcal, 
                zeytinyağlı yemek 200–300 kcal, börek 250–400 kcal, simit 250 kcal, ayran 60 kcal. 
                Porsiyon büyüklüğü ve tarife göre değişir; etiket ve uygulamalarla takip edebilirsiniz. 
                Sağlıklı beslenme rehberi için <Link href="/tr/blog/saglikli-beslenme-who-onerileri-ve-turk-mutfagi" className="text-[#2563eb] hover:underline font-medium">Sağlıklı Beslenme: WHO Önerileri ve Türk Mutfağı</Link> yazımıza bakın.
              </p>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Sağlıklı Beslenme Önerileri
              </h2>
              <ul className="list-disc list-inside text-[#64748b] space-y-2">
                <li>Günde en az 5 porsiyon sebze ve meyve tüketin</li>
                <li>Tam tahıllı ürünleri tercih edin (tam buğday, yulaf, bulgur)</li>
                <li>Günde 2-3 porsiyon süt ve süt ürünleri tüketin</li>
                <li>Kırmızı et yerine balık ve beyaz eti tercih edin</li>
                <li>Günde en az 8-10 bardak su için</li>
                <li>Şekerli içecekler ve işlenmiş gıdalardan kaçının</li>
                <li>Öğün atlamayın, düzenli beslenin</li>
              </ul>
              <p className="mt-4 text-[#64748b]">
                Vücut kitle indeksinizi takip etmek için <Link href="/tr/hesap-makineleri/saglik/bmi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">BMI Hesap Makinesi</Link> aracımızı kullanabilirsiniz.
              </p>
              <p className="mt-4 text-sm text-[#64748b] bg-yellow-50 p-4 rounded-lg">
                <strong>Önemli:</strong> Bu hesaplama genel bir tahmin sağlar. 
                Kişisel beslenme planı için bir diyetisyene danışmanızı öneririz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

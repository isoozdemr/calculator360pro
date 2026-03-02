import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { TurkeyDateCalculator } from "@/components/calculators/tr/TurkeyDateCalculator";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";

export const metadata: Metadata = {
  title: "Tarih Farkı Hesap Makinesi 2026 - Gün/Ay Hesapla",
  description: "Tarih farkı hesap makinesi 2026: İki tarih arasındaki gün, hafta, ay ve iş günü sayısını hesaplayın. Proje ve teslimat süreleri için ücretsiz tarih farkı hesaplama.",
  keywords: [
    "tarih farkı hesaplama",
    "tarih farkı hesap makinesi",
    "iki tarih arası gün hesaplama",
    "tarih aralığı hesaplama",
    "gün sayısı hesaplama",
    "iş günü hesaplama",
    "tarih hesaplama",
    "tarih farkı bulma",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/tarih-zaman/tarih-farki-hesap-makinesi`,
    languages: {
      "en": `${SITE_URL}/calculators/date-time/date-calculator`,
      "tr": `${SITE_URL}/tr/hesap-makineleri/tarih-zaman/tarih-farki-hesap-makinesi`,
      "x-default": `${SITE_URL}/calculators/date-time/date-calculator`,
    },
  },
  openGraph: {
    title: "Tarih Farkı Hesap Makinesi | Calculator360Pro",
    description: "Ücretsiz tarih farkı hesap makinesi. İki tarih arasındaki farkı hesaplayın.",
    url: `${SITE_URL}/tr/hesap-makineleri/tarih-zaman/tarih-farki-hesap-makinesi`,
    type: "website",
    locale: "tr_TR",
    siteName: "Calculator360Pro",
  },
};

const faqs = [
  {
    question: "İki tarih arasındaki gün sayısı nasıl hesaplanır?",
    answer: "İki tarih arasındaki gün sayısı, bitiş tarihinden başlangıç tarihini çıkararak hesaplanır. Artık yıllar ve farklı ay uzunlukları otomatik olarak hesaba katılır. Örneğin, 1 Ocak 2026 ile 31 Ocak 2026 arası 30 gündür.",
  },
  {
    question: "İş günü nedir ve nasıl hesaplanır?",
    answer: "İş günü, hafta sonları (Cumartesi ve Pazar) hariç olan günlerdir. İş günü hesaplama, proje planlaması, teslimat süreleri ve çalışma süreleri için önemlidir. Hafta içi günler (Pazartesi-Cuma) iş günü olarak sayılır.",
  },
  {
    question: "Artık yıl tarih hesaplamasını etkiler mi?",
    answer: "Evet, artık yıllar (Şubat ayının 29 gün olduğu yıllar) tarih hesaplamalarını etkiler. Hesap makinesi otomatik olarak artık yılları hesaba katar ve doğru gün sayısını verir. Artık yıllar her 4 yılda bir gelir (bazı istisnalar hariç).",
  },
  {
    question: "Bitiş tarihi dahil edilmeli mi?",
    answer: "Bitiş tarihinin dahil edilip edilmeyeceği, hesaplama amacınıza bağlıdır. Örneğin, bir proje 1 Ocak'ta başlayıp 31 Ocak'ta bitiyorsa, bitiş tarihini dahil ederseniz 31 gün, dahil etmezseniz 30 gün olur. Hesap makinesinde bu seçeneği işaretleyebilirsiniz.",
  },
  {
    question: "Resmi tatiller iş gününe dahil mi?",
    answer: "Bu hesap makinesi sadece hafta sonlarını (Cumartesi-Pazar) iş gününden çıkarır. Resmi tatilleri (bayram, 1 Ocak vb.) kendiniz çıkararak gerçek iş günü sayısını hesaplayabilirsiniz.",
  },
  {
    question: "Ay farkı neden yaklaşık gösterilir?",
    answer: "Aylar farklı gün sayısına sahip olduğu için (28-31) ay farkı tam sayı olmayabilir. Gün ve hafta farkı kesin, ay farkı referans içindir.",
  },
];

const howToSteps = [
  { name: "Başlangıç tarihini seçin", text: "İlk tarihi gün, ay ve yıl olarak girin." },
  { name: "Bitiş tarihini seçin", text: "İkinci tarihi girin." },
  { name: "Bitiş dahil mi seçin", text: "Bitiş gününün sayıma dahil edilip edilmeyeceğini işaretleyin." },
  { name: "Hesapla", text: "Gün, hafta, ay ve iş günü farkını görün." },
];

export default function TarihFarkiHesapMakinesiPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Tarih Farkı Hesap Makinesi"
        description="İki tarih arasındaki farkı hesaplama aracı - Gün, hafta, ay, yıl ve iş günü hesaplama"
        slug="tarih-farki-hesap-makinesi"
        categorySlug="tarih-zaman"
        categoryName="Tarih-Zaman"
        dateModified={DATA_VERSION.lastUpdated}
        category="date-time"
        faqs={faqs}
        howToName="Tarih Farkı Hesap Makinesi Nasıl Kullanılır?"
        howToDescription="İki tarih arası fark hesaplamak için adımlar."
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
                  <Link href="/tr/hesap-makineleri/tarih-zaman" className="hover:text-white transition-colors">
                    Tarih-Zaman
                  </Link>
                </li>
                <li><span className="mx-2">/</span></li>
                <li className="text-white font-medium">Tarih Farkı Hesap Makinesi</li>
              </ol>
            </nav>

            {/* Header */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                Tarih Farkı Hesap Makinesi
              </h1>
              <p className="text-lg text-[#94a3b8] max-w-2xl">
                İki tarih arasındaki gün, hafta, ay ve yıl farkını hesaplayın. 
                İş günü hesaplama dahil.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <TurkeyDateCalculator />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-8">
              Tarih Farkı Nasıl Hesaplanır?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[#f8fafc] rounded-xl p-6 border border-[#e2e8f0]">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-[#2563eb]">
                  1
                </div>
                <h3 className="font-bold text-[#1e293b] mb-2">Başlangıç Tarihi</h3>
                <p className="text-sm text-[#64748b]">
                  İlk tarihi seçin veya girin.
                </p>
              </div>
              <div className="bg-[#f8fafc] rounded-xl p-6 border border-[#e2e8f0]">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-[#2563eb]">
                  2
                </div>
                <h3 className="font-bold text-[#1e293b] mb-2">Bitiş Tarihi</h3>
                <p className="text-sm text-[#64748b]">
                  İkinci tarihi seçin veya girin.
                </p>
              </div>
              <div className="bg-[#f8fafc] rounded-xl p-6 border border-[#e2e8f0]">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-[#2563eb]">
                  3
                </div>
                <h3 className="font-bold text-[#1e293b] mb-2">Sonuç</h3>
                <p className="text-sm text-[#64748b]">
                  Gün, hafta, ay, yıl ve iş günü farkını görün.
                </p>
              </div>
            </div>

            {/* Example Calculation */}
            <div className="bg-[#f8fafc] rounded-xl p-6 border border-[#e2e8f0]">
              <h3 className="font-bold text-[#1e293b] mb-4 flex items-center gap-2">
                <span className="text-xl">📅</span>
                Örnek: 1 Ocak 2026 - 31 Ocak 2026
              </h3>
              <div className="space-y-2 text-[#64748b]">
                <p><strong className="text-[#1e293b]">Gün Farkı:</strong> 30 gün (bitiş dahil: 31 gün)</p>
                <p><strong className="text-[#1e293b]">Hafta Farkı:</strong> 4 hafta</p>
                <p><strong className="text-[#1e293b]">Ay Farkı:</strong> 1 ay</p>
                <p><strong className="text-[#1e293b]">Yıl Farkı:</strong> 0 yıl</p>
                <p><strong className="text-[#1e293b]">İş Günü:</strong> ~22 iş günü (hafta sonları hariç)</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-12 bg-[#f8fafc]">
          <div className="container mx-auto px-4 max-w-4xl">
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
                Tarih Farkı Nedir?
              </h2>
              <p className="text-[#64748b] mb-6 leading-relaxed">
                Tarih farkı, iki tarih arasında geçen süreyi gün, hafta, ay veya yıl olarak ifade eder. 
                Proje süreleri, teslimat tarihleri, çalışma süreleri ve iş günü hesaplamalarında kullanılır. 
                Bu araç bitiş gününün dahil edilip edilmeyeceğini seçmenize ve iş günü (hafta sonları hariç) 
                sayısını göstermenize olanak tanır. Doğum tarihinden yaş hesaplamak için 
                <Link href="/tr/hesap-makineleri/tarih-zaman/yas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium mx-1">yaş hesap makinesi</Link>, 
                çalışma saati toplamı için <Link href="/tr/hesap-makineleri/tarih-zaman/saat-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">saat hesap makinesi</Link> kullanabilirsiniz.
              </p>

              <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
                Tarih Farkı Hesaplama Rehberi
              </h2>
              
              <p className="text-[#64748b] mb-6 leading-relaxed">
                Tarih farkı hesaplama, proje planlaması, teslimat süreleri, 
                çalışma süreleri ve birçok işlem için önemlidir. İki tarih arasındaki 
                farkı gün, hafta, ay ve yıl olarak hesaplayabilirsiniz.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                Tarih Hesaplama Kullanım Alanları
              </h3>
              <div className="bg-white rounded-lg p-6 mb-6 border border-[#e2e8f0]">
                <ul className="space-y-3 text-[#64748b]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#2563eb] font-bold">1.</span>
                    <div>
                      <strong className="text-[#1e293b]">Proje Planlaması:</strong> Proje sürelerini hesaplama
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#2563eb] font-bold">2.</span>
                    <div>
                      <strong className="text-[#1e293b]">Teslimat Süreleri:</strong> Sipariş ve teslimat tarihleri
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#2563eb] font-bold">3.</span>
                    <div>
                      <strong className="text-[#1e293b]">Çalışma Süreleri:</strong> İş günü hesaplama
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#2563eb] font-bold">4.</span>
                    <div>
                      <strong className="text-[#1e293b]">Etkinlik Planlama:</strong> Etkinlik tarihleri arası süre
                    </div>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                Artık Yıl Hesaplaması
              </h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Artık yıllar (Şubat ayının 29 gün olduğu yıllar) tarih hesaplamalarını etkiler. 
                Hesap makinesi otomatik olarak artık yılları hesaba katar. Artık yıllar her 4 yılda bir gelir, 
                ancak yüzyıl yılları (100'ün katı) sadece 400'ün katı ise artık yıldır.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                Proje ve Teslimat Süreleri
              </h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                İş günü hesaplama, teslimat vaatleri, sözleşme süreleri ve proje planlamasında kritiktir. 
                Hafta sonları ve resmi tatilleri çıkararak gerçek iş günü sayısını bilmek, gerçekçi 
                deadline koymanıza yardımcı olur. İş günü seçeneğimiz Cumartesi-Pazar hariç günleri sayar; 
                resmi tatilleri kendiniz çıkarabilirsiniz.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                İpuçları ve İlgili Hesaplamalar
              </h3>
              <ul className="list-disc list-inside text-[#64748b] space-y-2 mb-4">
                <li>Yaş hesaplama: <Link href="/tr/hesap-makineleri/tarih-zaman/yas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Yaş hesap makinesi</Link> ile doğum tarihinden bugüne süreyi görün.</li>
                <li>Gebelik haftası ve doğum tarihi: <Link href="/tr/hesap-makineleri/saglik/gebelik-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Gebelik hesap makinesi</Link>.</li>
                <li>Çalışma saati toplamı: <Link href="/tr/hesap-makineleri/tarih-zaman/saat-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Saat hesap makinesi</Link>.</li>
                <li>Ücret hesaplama: <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Maaş hesap makinesi</Link> ile çalışma günü/saatine göre hesaplama yapın.</li>
                <li>Emeklilik yaşı ve prim süresi: <Link href="/tr/hesap-makineleri/finans/emeklilik-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Emeklilik hesap makinesi</Link>.</li>
              </ul>
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
            <RelatedCalculatorsTR categorySlug="tarih-zaman" currentSlug="tarih-farki-hesap-makinesi" maxResults={6} />
          </div>
        </section>
      </div>
    </>
  );
}

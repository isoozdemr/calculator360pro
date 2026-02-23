import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { TurkeyHoursCalculator } from "@/components/calculators/tr";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";

export const metadata: Metadata = {
  title: "Saat Hesap Makinesi 2026 - Çalışma Süresi",
  description: "Başlangıç ve bitiş saati ile toplam süre, ücret hesaplama. Ücretsiz saat hesap makinesi.",
  keywords: [
    "saat hesap makinesi",
    "çalışma süresi hesaplama",
    "toplam saat hesaplama",
    "mesai hesaplama",
    "saatlik ücret hesaplama",
    "süre hesaplama",
    "başlangıç bitiş saati",
    "çalışma saati hesaplayıcı",
    "ücret hesaplama saat",
    "dakika saat çevirme",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/tarih-zaman/saat-hesap-makinesi`,
    languages: { "en": `${SITE_URL}/calculators/date-time/hours-calculator`, "tr": `${SITE_URL}/tr/hesap-makineleri/tarih-zaman/saat-hesap-makinesi`, "x-default": `${SITE_URL}/calculators/date-time/hours-calculator` },
  },
  openGraph: { title: "Saat Hesap Makinesi 2026", url: `${SITE_URL}/tr/hesap-makineleri/tarih-zaman/saat-hesap-makinesi`, locale: "tr_TR", siteName: "Calculator360Pro" },
};

const faqs = [
  { question: "Çalışma süresi nasıl hesaplanır?", answer: "Bitiş saati - başlangıç saati. Ara vermeler varsa çıkarılır. Sonuç saat ve dakika olarak görünür." },
  { question: "Ücret hesaplamada kullanılır mı?", answer: "Evet. Toplam çalışma saati x saatlik ücret = brüt ücret. Net için vergi ve kesintiler uygulanır." },
  { question: "Gece vardiyası nasıl hesaplanır?", answer: "Bitiş saati ertesi günü gösteriyorsa 24 saat ekleyerek toplam süreyi hesaplayın. Bazı araçlar bunu otomatik yapar." },
  { question: "Dakika ondalık mı saat mi?", answer: "Sonuç genelde saat ve dakika (örn. 2 saat 30 dk) veya ondalık saat (2,5 saat) olarak gösterilir; ücret hesaplamada ondalık kullanılır." },
  { question: "Part-time veya esnek çalışmada kullanılır mı?", answer: "Evet. Günlük veya haftalık toplam çalışma saatini hesaplamak, mesai ve ücret tahmini yapmak için uygundur. Birden fazla giriş-çıkış varsa her birini ayrı hesaplayıp toplayabilirsiniz." },
  { question: "Sonuç nasıl yorumlanır?", answer: "Toplam süre saat ve dakika veya ondalık saat olarak gösterilir. Saatlik ücret girildiyse brüt kazanç da hesaplanır; net ücret için vergi ve SGK kesintilerini ayrıca değerlendirin." },
];

const howToSteps = [
  { name: "Başlangıç saatini girin", text: "İş başlangıç veya başlangıç saatini seçin." },
  { name: "Bitiş saatini girin", text: "Bitiş saatini girin. Ertesi gün için 24 saatlik format kullanılabilir." },
  { name: "Ara varsa çıkarın", text: "Yemek veya mola sürelerini çıkararak net çalışma süresini alın." },
  { name: "Toplam ve ücret", text: "Toplam süre ve isteğe bağlı saatlik ücret ile brüt ücreti görün." },
];

export default function SaatHesapMakinesiPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Saat Hesap Makinesi"
        description="Çalışma süresi ve toplam saat hesaplama aracı"
        slug="saat-hesap-makinesi"
        categorySlug="tarih-zaman"
        categoryName="Tarih-Zaman"
        dateModified={DATA_VERSION.lastUpdated}
        category="date-time"
        faqs={faqs}
        howToName="Saat Hesap Makinesi Nasıl Kullanılır?"
        howToDescription="Çalışma süresi hesaplamak için adımlar."
        howToSteps={howToSteps}
      />
      <div className="min-h-screen bg-[#f8fafc] py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="mb-6 text-sm text-[#64748b]">
            <ol className="flex items-center space-x-2">
              <li><Link href="/tr" className="hover:text-[#2563eb]">Ana Sayfa</Link></li>
              <li>/</li>
              <li><Link href="/tr/hesap-makineleri" className="hover:text-[#2563eb]">Hesap Makineleri</Link></li>
              <li>/</li>
              <li><Link href="/tr/hesap-makineleri/tarih-zaman" className="hover:text-[#2563eb]">Tarih-Zaman</Link></li>
              <li>/</li>
              <li className="text-[#1e293b] font-medium">Saat Hesap Makinesi</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Saat Hesap Makinesi</h1>
          <p className="text-[#64748b] mb-8">Çalışma süresi ve toplam saat hesaplama.</p>
          <TurkeyHoursCalculator />
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Saat (Çalışma Süresi) Hesaplama Nedir?</h2>
              <p className="text-[#64748b] mb-4">
                Çalışma süresi hesaplama, başlangıç ve bitiş saatleri arasında geçen toplam saati 
                bulmanıza yarar. Part-time veya fazla mesai toplamları, proje süreleri ve ücretlendirme 
                için sık kullanılır. Bu araç günlük toplam çalışma saatini hesaplar.
              </p>
              <p className="text-[#64748b] mb-4">
                Başlangıç ve bitiş saatini seçin; ara (mola) varsa süreyi çıkarın. Toplam süre otomatik 
                hesaplanır. İsteğe bağlı saatlik ücret girerseniz brüt kazanç da görünür. Gece vardiyasında 
                bitiş ertesi günü gösteriyorsa araç 24 saatlik eklemeyi destekleyebilir. Net maaş için 
                vergi ve kesintileri ayrıca <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">maaş hesap makinesi</Link> ile hesaplayabilirsiniz.
              </p>
              <p className="text-[#64748b]">
                İki tarih arası gün sayısı için <Link href="/tr/hesap-makineleri/tarih-zaman/tarih-farki-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">tarih farkı hesap makinesi</Link>, 
                doğum tarihinden yaş için <Link href="/tr/hesap-makineleri/tarih-zaman/yas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">yaş hesap makinesi</Link> kullanabilirsiniz.
              </p>
            </div>
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">İpuçları ve İlgili Araçlar</h2>
              <ul className="list-disc list-inside text-[#64748b] space-y-2 mb-4">
                <li>Mola sürelerini çıkararak net çalışma saatini hesaplayın.</li>
                <li>Ücret hesaplama: <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">maaş hesap makinesi</Link> ile aylık maaş ve vergi.</li>
                <li>İş günü sayısı: <Link href="/tr/hesap-makineleri/tarih-zaman/tarih-farki-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">tarih farkı hesap makinesi</Link> iş günü seçeneği.</li>
                <li>Vergi dilimi: <Link href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">vergi hesap makinesi</Link>.</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-xl font-bold text-[#1e293b] mb-4">Sıkça Sorulan Sorular</h2>
              {faqs.map((f, i) => (
                <div key={i} className="mb-4"><h3 className="font-semibold text-[#1e293b]">{f.question}</h3><p className="text-sm text-[#64748b]">{f.answer}</p></div>
              ))}
              <p className="mt-4 text-[#64748b]">
                <Link href="/tr/hesap-makineleri/tarih-zaman/tarih-farki-hesap-makinesi" className="text-[#2563eb] hover:underline">Tarih Farkı</Link>,{" "}
                <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline">Maaş Hesap Makinesi</Link>.
              </p>
            </div>
          </div>
          <section className="mt-12">
            <RelatedCalculatorsTR categorySlug="tarih-zaman" currentSlug="saat-hesap-makinesi" maxResults={6} />
          </section>
        </div>
      </div>
    </>
  );
}

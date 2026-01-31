import { Metadata } from "next";
import { TurkeyGPACalculator } from "@/components/calculators/tr/TurkeyGPACalculator";
import { DATA_VERSION, GPA_INFO } from "@/lib/data/turkey-2026-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not Ortalaması Hesaplama | GANO Hesap Makinesi - 4'lük ve 100'lük Sistem",
  description: "Üniversite not ortalamanızı (GANO) hesaplayın. YÖK standardı 4'lük ve 100'lük not sistemi dönüşümü. Onur ve yüksek onur öğrencisi durumunuzu öğrenin.",
  keywords: [
    "not ortalaması hesaplama",
    "GANO hesaplama",
    "GPA hesaplama türkiye",
    "üniversite not ortalaması",
    "4lük not sistemi",
    "100lük not sistemi",
    "harf notu dönüşümü",
    "not ortalaması hesap makinesi",
    "YÖK not sistemi",
  ],
  alternates: {
    canonical: "https://calculator360pro.com/tr/hesap-makineleri/egitim/not-ortalamasi-hesap-makinesi",
    languages: {
      "en": "https://calculator360pro.com/calculators/education/gpa-calculator",
      "tr": "https://calculator360pro.com/tr/hesap-makineleri/egitim/not-ortalamasi-hesap-makinesi",
    },
  },
  openGraph: {
    title: "Not Ortalaması (GANO) Hesaplama",
    description: "Türkiye üniversite not sistemi ile GANO hesaplama aracı.",
    locale: "tr_TR",
  },
};

export default function TurkeyGPACalculatorPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Türkiye Not Ortalaması (GANO) Hesap Makinesi",
    description: "YÖK standardı 4'lük ve 100'lük not sistemi ile GANO hesaplama",
    url: "https://calculator360pro.com/tr/hesap-makineleri/egitim/not-ortalamasi-hesap-makinesi",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "TRY",
    },
    inLanguage: "tr",
    dateModified: DATA_VERSION.lastUpdated,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <div className="min-h-screen bg-[#f8fafc] py-8">
        <div className="container mx-auto px-4 max-w-4xl">
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
              <li>
                <Link href="/tr/hesap-makineleri/egitim" className="hover:text-[#2563eb] transition-colors">
                  Eğitim
                </Link>
              </li>
              <li><span className="mx-2">/</span></li>
              <li className="text-[#1e293b] font-medium">Not Ortalaması Hesap Makinesi</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              Not Ortalaması (GANO) Hesaplama
            </h1>
            <p className="text-lg text-[#64748b]">
              Türkiye üniversite not sistemi ile GANO&apos;nuzu hesaplayın. 100&apos;lük ve 4&apos;lük 
              sistem dönüşümü, harf notu karşılıkları ve onur öğrencisi durumunuz.
            </p>
          </div>

          {/* Calculator */}
          <TurkeyGPACalculator />

          {/* SEO Content */}
          <div className="mt-12 prose prose-slate max-w-none">
            <h2>Türkiye Üniversite Not Sistemi Rehberi</h2>
            <p>
              Türkiye&apos;de üniversiteler YÖK (Yükseköğretim Kurulu) tarafından belirlenen 
              standart not sistemini kullanır. Bu sistem hem 100&apos;lük hem de 4&apos;lük 
              nota dönüşüm sağlar.
            </p>

            <h3>GANO Nedir?</h3>
            <p>
              GANO (Genel Ağırlıklı Not Ortalaması), tüm derslerinizin kredi ağırlıklı 
              ortalamasıdır. Her dersin kredisi ile o dersten aldığınız notun 4&apos;lük 
              karşılığı çarpılır, toplamları toplam krediye bölünür.
            </p>
            <p>
              <strong>Formül:</strong> GANO = Σ(Ders Kredisi × 4&apos;lük Not) / Σ(Ders Kredisi)
            </p>

            <h3>4&apos;lük Not Sistemi</h3>
            <p>
              YÖK standardında kullanılan temel sistem 4.0 üzerinden değerlendirmedir:
            </p>
            <ul>
              <li><strong>AA (4.0):</strong> 90-100 puan - Pekiyi</li>
              <li><strong>BA (3.5):</strong> 85-89 puan - İyi-Pekiyi</li>
              <li><strong>BB (3.0):</strong> 80-84 puan - İyi</li>
              <li><strong>CB (2.5):</strong> 75-79 puan - Orta-İyi</li>
              <li><strong>CC (2.0):</strong> 70-74 puan - Orta (Geçme sınırı)</li>
              <li><strong>DC (1.5):</strong> 65-69 puan - Zayıf-Orta</li>
              <li><strong>DD (1.0):</strong> 60-64 puan - Zayıf</li>
              <li><strong>FD (0.5):</strong> 50-59 puan - Devamsız başarısız</li>
              <li><strong>FF (0.0):</strong> 0-49 puan - Başarısız</li>
            </ul>

            <h3>Mezuniyet Şartları</h3>
            <p>
              Türkiye&apos;de lisans mezuniyeti için minimum GANO: 
              <strong> {GPA_INFO.passingGPA}</strong>
            </p>
            <p>
              Bazı programlar (tıp, hukuk vb.) daha yüksek GANO gerektirebilir.
            </p>

            <h3>Onur ve Yüksek Onur Öğrencisi</h3>
            <ul>
              <li>
                <strong>Onur Öğrencisi:</strong> GANO {GPA_INFO.honorGPA} ve üzeri
              </li>
              <li>
                <strong>Yüksek Onur Öğrencisi:</strong> GANO {GPA_INFO.highHonorGPA} ve üzeri
              </li>
            </ul>
            <p>
              Bu unvanlar diploma üzerinde belirtilir ve iş başvurularında avantaj sağlar.
            </p>

            <h3>Not Ortalamasını Yükseltme Stratejileri</h3>
            <ol>
              <li>
                <strong>Yüksek kredili derslere odaklanın:</strong> 4-5 kredili dersler 
                GANO&apos;nuzu daha çok etkiler.
              </li>
              <li>
                <strong>Düşük notlu dersleri tekrar alın:</strong> Bazı üniversiteler 
                ders tekrarı imkanı sunar.
              </li>
              <li>
                <strong>Seçmeli derslerde stratejik olun:</strong> İyi olduğunuz 
                alanlardan seçmeli ders alın.
              </li>
            </ol>

            <h3>Uluslararası Dönüşüm</h3>
            <p>
              Yurt dışı başvurularında Türkiye GANO&apos;su genellikle şöyle dönüştürülür:
            </p>
            <ul>
              <li>3.5-4.0 → A / First Class (Birinci Sınıf)</li>
              <li>3.0-3.49 → B / Upper Second (İkinci Sınıf Üst)</li>
              <li>2.5-2.99 → C / Lower Second (İkinci Sınıf Alt)</li>
              <li>2.0-2.49 → D / Third Class (Üçüncü Sınıf)</li>
            </ul>
          </div>

          {/* Related Calculators */}
          <div className="mt-12 bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
            <h3 className="text-xl font-bold text-[#1e293b] mb-4">
              İlgili Hesap Makineleri
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                href="/tr/hesap-makineleri/finans/kredi-hesap-makinesi"
                className="p-4 bg-[#f8fafc] rounded-lg hover:bg-[#e2e8f0] transition-colors"
              >
                <h4 className="font-semibold text-[#1e293b]">Eğitim Kredisi Hesaplama</h4>
                <p className="text-sm text-[#64748b]">Öğrenci kredisi hesap makinesi</p>
              </Link>
              <Link 
                href="/tr/hesap-makineleri/finans/emeklilik-hesap-makinesi"
                className="p-4 bg-[#f8fafc] rounded-lg hover:bg-[#e2e8f0] transition-colors"
              >
                <h4 className="font-semibold text-[#1e293b]">Emeklilik Hesap Makinesi</h4>
                <p className="text-sm text-[#64748b]">Mezuniyet sonrası emeklilik planlaması</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

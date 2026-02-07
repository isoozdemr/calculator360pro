import { Metadata } from "next";
import { TurkeyGPACalculator } from "@/components/calculators/tr/TurkeyGPACalculator";
import { SITE_URL } from "@/lib/constants";
import { DATA_VERSION, GPA_INFO } from "@/lib/data/turkey-2026-data";
import Link from "next/link";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";

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
    canonical: `${SITE_URL}/tr/hesap-makineleri/egitim/not-ortalamasi-hesap-makinesi`,
    languages: {
      en: `${SITE_URL}/calculators/education/gpa-calculator`,
      tr: `${SITE_URL}/tr/hesap-makineleri/egitim/not-ortalamasi-hesap-makinesi`,
    },
  },
  openGraph: {
    title: "Not Ortalaması (GANO) Hesaplama",
    description: "Türkiye üniversite not sistemi ile GANO hesaplama aracı.",
    locale: "tr_TR",
  },
};

const faqs = [
  { question: "GANO nedir?", answer: "GANO (Genel Akademik Not Ortalaması), üniversitede aldığınız derslerin kredi ağırlıklı not ortalamasıdır. YÖK standartlarına göre 4'lük veya 100'lük sistemle hesaplanır." },
  { question: "4'lük sistem nasıl hesaplanır?", answer: "Her dersin harf notu (A=4, B=3, C=2, D=1, F=0) kredi ile çarpılır; toplamı alınan toplam krediye bölünür. Örneğin A (3 kredi) ve B (2 kredi) = (4×3 + 3×2) / 5 = 3,6." },
  { question: "Onur ve yüksek onur öğrencisi nedir?", answer: "Genelde GANO 3,00–3,49 arası onur, 3,50 ve üzeri yüksek onur sayılır. Üniversite yönetmeliklerine göre değişebilir." },
  { question: "100'lük sistem 4'lüğe nasıl dönüşür?", answer: "YÖK dönüşüm tablosuna göre 90–100 = 4,00; 85–89 = 3,50; 80–84 = 3,00 vb. Hesap makinesi bu dönüşümü otomatik yapar." },
  { question: "Not ortalaması nerede kullanılır?", answer: "Staj başvuruları, yüksek lisans/doktora başvuruları, burs ve bazı iş ilanlarında GANO istenir." },
];

const howToSteps = [
  { name: "Dersleri ekleyin", text: "Ders adı, kredi ve harf notu (veya 100'lük puan) girin." },
  { name: "Sistemi seçin", text: "4'lük veya 100'lük not sistemini seçin." },
  { name: "Hesapla", text: "GANO ve onur/yüksek onur durumunu görün." },
];

export default function TurkeyGPACalculatorPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Not Ortalaması (GANO) Hesap Makinesi"
        description="YÖK standardı 4'lük ve 100'lük not sistemi ile GANO hesaplama"
        slug="not-ortalamasi-hesap-makinesi"
        categorySlug="egitim"
        categoryName="Eğitim"
        dateModified={DATA_VERSION.lastUpdated}
        category="education"
        faqs={faqs}
        howToName="Not Ortalaması Hesap Makinesi Nasıl Kullanılır?"
        howToDescription="GANO hesaplamak için adımlar."
        howToSteps={howToSteps}
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

            <h3>GANO ve AGNO Farkı</h3>
            <p>
              GANO (Genel Ağırlıklı Not Ortalaması) tüm dönemlerdeki dersleri kapsar. 
              AGNO (Ağırlıklı Genel Not Ortalaması) bazı üniversitelerde aynı kavram için kullanılır; 
              bazılarında ise sadece başarılı derslerin ortalamasını ifade eder. Üniversitenizin 
              öğretim ve sınav yönetmeliğini kontrol edin. Detaylı karşılaştırma için 
              <Link href="/tr/blog/gano-ve-agno-arasindaki-farklar-hangi-sistem-kullaniliyor" className="text-[#2563eb] hover:underline font-medium mx-1">GANO ve AGNO Arasındaki Farklar</Link> 
              blog yazımızı okuyabilirsiniz.
            </p>

            <h3>İpuçları ve İlgili Araçlar</h3>
            <ul className="list-disc list-inside text-[#64748b] space-y-2 mb-4">
              <li>Öğrenim kredisi taksitini planlamak için <Link href="/tr/hesap-makineleri/finans/ogrenim-kredisi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">öğrenim kredisi hesap makinesi</Link>.</li>
              <li>Yüzde ve oran hesapları: <Link href="/tr/hesap-makineleri/matematik/yuzde-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">yüzde hesap makinesi</Link>, <Link href="/tr/hesap-makineleri/matematik/indirim-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">indirim hesap makinesi</Link>.</li>
              <li>Bütçe ve gelir planlaması: <Link href="/tr/hesap-makineleri/finans/butce-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">bütçe hesap makinesi</Link>, <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">maaş hesap makinesi</Link>.</li>
              <li>Kredi ve vergi: <Link href="/tr/hesap-makineleri/finans/kredi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">kredi hesap makinesi</Link>, <Link href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">vergi hesap makinesi</Link>.</li>
            </ul>

            <h3>Sıkça Sorulan Sorular</h3>
            <p><strong>Not ortalaması nasıl yükseltilir?</strong> Yüksek kredili derslere odaklanın, düşük notlu dersleri tekrar alın (imkan varsa), seçmeli derslerde stratejik olun. <Link href="/tr/blog/universite-not-ortalamasi-nasil-yukseltilir" className="text-[#2563eb] hover:underline font-medium">Üniversite Not Ortalaması Nasıl Yükseltilir?</Link> yazımızda daha fazla ipucu bulabilirsiniz.</p>
            <p><strong>Mezuniyet için minimum GANO kaç?</strong> YÖK standardında lisans için genellikle 2.0 (CC ortalaması) gerekir; bazı programlar daha yüksek talep eder.</p>
            <p><strong>Yurt dışı yüksek lisans için GANO yeterli mi?</strong> Çoğu program 3.0 ve üzeri ister; prestijli okullar 3.5+ bekleyebilir. ALES/YÖKDİL gibi sınavlar da değerlendirmeye alınır.</p>
          </div>

          <div className="mt-12">
            <RelatedCalculatorsTR categorySlug="egitim" currentSlug="not-ortalamasi-hesap-makinesi" maxResults={6} />
          </div>
          <div className="mt-6 p-4 bg-[#f8fafc] rounded-lg">
            <h3 className="font-bold text-[#1e293b] mb-2">İlgili Blog</h3>
            <Link href="/tr/blog/universite-not-ortalamasi-nasil-yukseltilir" className="text-[#2563eb] hover:underline">Üniversite Not Ortalaması Nasıl Yükseltilir?</Link>
            {" · "}
            <Link href="/tr/blog" className="text-[#2563eb] hover:underline">Tüm Rehberler</Link>
          </div>
        </div>
      </div>
    </>
  );
}

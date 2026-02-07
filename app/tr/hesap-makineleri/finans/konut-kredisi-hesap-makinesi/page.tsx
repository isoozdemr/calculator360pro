import { Metadata } from "next";
import { TurkeyMortgageCalculator } from "@/components/calculators/tr/TurkeyMortgageCalculator";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";
import Link from "next/link";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";

export const metadata: Metadata = {
  title: "Konut Kredisi Hesaplama 2026 | Mortgage Hesap Makinesi - KKDF, BSMV",
  description: "2026 güncel faiz oranları ile konut kredisi hesaplayın. Tapu harcı, KKDF, BSMV dahil toplam maliyet ve ödeme planı. Türkiye'nin en doğru konut kredisi hesap makinesi.",
  keywords: [
    "konut kredisi hesaplama",
    "mortgage hesaplama",
    "ev kredisi hesaplama",
    "konut kredisi faiz hesaplama",
    "aylık taksit hesaplama",
    "tapu harcı hesaplama",
    "konut kredisi 2026",
    "mortgage calculator türkiye",
  ],
  alternates: {
    canonical: "https://calculator360pro.com/tr/hesap-makineleri/finans/konut-kredisi-hesap-makinesi",
    languages: {
      "en": "https://calculator360pro.com/calculators/finance/mortgage-calculator",
      "tr": "https://calculator360pro.com/tr/hesap-makineleri/finans/konut-kredisi-hesap-makinesi",
    },
  },
  openGraph: {
    title: "Konut Kredisi Hesaplama 2026",
    description: "Güncel faiz oranları ile konut kredisi taksit ve maliyet hesaplama.",
    locale: "tr_TR",
  },
};

const faqs = [
  { question: "Konut kredisi KKDF ve BSMV uygulanır mı?", answer: "Türkiye'de konut kredilerinde KKDF ve BSMV uygulanmaz (%0). Bu muafiyet konut kredisini tüketici ve taşıt kredisine göre daha avantajlı kılar." },
  { question: "Tapu harcı oranı nedir?", answer: "Konut alım satımında tapu harcı toplam %4'tür; genelde alıcı ve satıcı payları ayrı ayrı %2 olarak hesaplanır. Alıcı tek taraf olarak ödeyebilir." },
  { question: "Minimum peşinat oranı ne kadar?", answer: "Bankalar genellikle konut değerinin en fazla %80'ine kadar kredi verir; yani en az %20 peşinat gerekir. Daha yüksek peşinat taksiti düşürür." },
  { question: "Konut kredisi vadesi kaç yıl olabilir?", answer: "Türkiye'de konut kredileri genelde 1–20 yıl vade ile sunulur. Uzun vade aylık taksiti düşürür ancak toplam faiz maliyeti artar." },
  { question: "Erken ödeme cezası var mı?", answer: "Bazı bankalarda erken kapamada cezai şart uygulanabilir. Sözleşmedeki erken ödeme maddesini kontrol edin; erken kapatma planınız varsa bankaya sorun." },
];

const howToSteps = [
  { name: "Kredi tutarı ve vade girin", text: "Almak istediğiniz konut kredisi tutarını ve vadeyi (yıl veya ay) girin." },
  { name: "Faiz oranını seçin", text: "Bankanın sunduğu yıllık nominal faiz oranını girin." },
  { name: "Hesapla butonuna tıklayın", text: "Aylık taksit, toplam geri ödeme ve isteğe bağlı tapu harcı dahil maliyeti görün." },
  { name: "Ödeme planını inceleyin", text: "Taksit tablosunda anapara ve faiz dağılımını inceleyin." },
];

export default function TurkeyMortgageCalculatorPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Konut Kredisi Hesap Makinesi"
        description="2026 yılı güncel oranları ile konut kredisi hesaplama aracı"
        slug="konut-kredisi-hesap-makinesi"
        categorySlug="finans"
        categoryName="Finans"
        dateModified={DATA_VERSION.lastUpdated}
        category="finance"
        faqs={faqs}
        howToName="Konut Kredisi Hesap Makinesi Nasıl Kullanılır?"
        howToDescription="Konut kredisi taksit ve maliyet hesaplamak için adımlar."
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
                <Link href="/tr/hesap-makineleri/finans" className="hover:text-[#2563eb] transition-colors">
                  Finans
                </Link>
              </li>
              <li><span className="mx-2">/</span></li>
              <li className="text-[#1e293b] font-medium">Konut Kredisi Hesap Makinesi</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              Konut Kredisi Hesaplama 2026
            </h1>
            <p className="text-lg text-[#64748b]">
              Güncel faiz oranları ile konut kredisi taksitinizi, toplam ödemenizi ve 
              tapu harcı dahil tüm maliyetleri hesaplayın.
            </p>
          </div>

          {/* Calculator */}
          <TurkeyMortgageCalculator />

          {/* SEO Content */}
          <div className="mt-12 prose prose-slate max-w-none">
            <h2>Türkiye&apos;de Konut Kredisi Rehberi 2026</h2>
            <p>
              Konut kredisi (mortgage), ev satın almak için bankalardan alınan uzun vadeli 
              bir kredi türüdür. Türkiye&apos;de konut kredileri genellikle 1-20 yıl vade ile 
              sunulmaktadır.
            </p>

            <h3>Konut Kredisinin Avantajları</h3>
            <p>
              Türkiye&apos;de konut kredileri bazı vergi avantajlarına sahiptir:
            </p>
            <ul>
              <li><strong>KKDF Muafiyeti:</strong> Konut kredilerinde Kaynak Kullanımı Destekleme Fonu (KKDF) uygulanmaz (%0)</li>
              <li><strong>BSMV Muafiyeti:</strong> Banka ve Sigorta Muameleleri Vergisi alınmaz (%0)</li>
            </ul>
            <p>
              Bu muafiyetler, konut kredisini tüketici kredilerine göre daha avantajlı kılar.
            </p>

            <h3>Konut Kredisi Maliyetleri</h3>
            <h4>1. Faiz Gideri</h4>
            <p>
              Kredinin ana maliyetidir. Yıllık faiz oranı bankadan bankaya ve vadeye göre değişir.
            </p>

            <h4>2. Tapu Harcı</h4>
            <p>
              Konut alım satımında hem alıcı hem satıcı %2 oranında tapu harcı öder. 
              Toplam oran %4&apos;tür ancak genellikle alıcı öder.
            </p>

            <h4>3. Ekspertiz Ücreti</h4>
            <p>
              Banka, kredi vermeden önce evin değerini belirlemek için ekspertiz yaptırır. 
              Bu ücret genellikle 3.000-8.000 TL arasındadır.
            </p>

            <h4>4. Dosya Masrafı</h4>
            <p>
              Kredi açılışında alınan bir defalık ücrettir.
            </p>

            <h3>Peşinat ve LTV Oranı</h3>
            <p>
              LTV (Loan to Value) oranı, kredinin konut değerine oranıdır. Türkiye&apos;de 
              bankalar genellikle konut değerinin %80&apos;ine kadar kredi vermektedir. 
              Bu nedenle minimum %20 peşinat gereklidir.
            </p>

            <h3>Konut Kredisi Başvuru Şartları</h3>
            <ul>
              <li>En az 18 yaş</li>
              <li>Düzenli gelir belgesi</li>
              <li>Kredi notu (findeks) yeterli düzeyde</li>
              <li>Borç/gelir oranı makul seviyede</li>
            </ul>

            <h3>Erken Ödeme</h3>
            <p>
              Konut kredisini vadesinden önce kapatabilirsiniz. Ancak bazı bankalar 
              erken kapama komisyonu alabilir. Bu oranlar genellikle kalan anaparanın 
              %1-2&apos;si arasındadır.
            </p>

            <h3>Sıkça Sorulan Sorular</h3>
            <div className="space-y-4 mt-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-slate-200 pb-4 last:border-0">
                  <h4 className="font-semibold text-slate-800 mb-2">{faq.question}</h4>
                  <p className="text-slate-600 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Blog Post */}
          <div className="mt-12 bg-[#f8fafc] rounded-lg border-2 border-[#e2e8f0] p-6 mb-6">
            <h3 className="text-xl font-bold text-[#1e293b] mb-4">
              İlgili Blog Yazıları
            </h3>
            <Link href="/tr/blog/konut-kredisi-alirken-dikkat-edilecekler-2026" className="block hover:opacity-80 transition-opacity">
              <h4 className="font-semibold text-[#1e293b] mb-2 hover:text-[#2563eb]">
                Konut Kredisi Alırken Dikkat Edilecekler 2026
              </h4>
              <p className="text-sm text-[#64748b] mb-2">
                Konut kredisi alırken dikkat edilmesi gerekenler, faiz oranları, masraflar ve ipotek işlemleri hakkında kapsamlı rehber.
              </p>
              <span className="text-[#2563eb] font-medium text-sm">
                Yazıyı Oku →
              </span>
            </Link>
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
                <h4 className="font-semibold text-[#1e293b]">Kredi Hesap Makinesi</h4>
                <p className="text-sm text-[#64748b]">İhtiyaç ve taşıt kredisi hesaplama</p>
              </Link>
              <Link 
                href="/tr/hesap-makineleri/finans/maas-hesap-makinesi"
                className="p-4 bg-[#f8fafc] rounded-lg hover:bg-[#e2e8f0] transition-colors"
              >
                <h4 className="font-semibold text-[#1e293b]">Maaş Hesap Makinesi</h4>
                <p className="text-sm text-[#64748b]">Kredi ödeme kapasitesi için maaş hesaplama</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

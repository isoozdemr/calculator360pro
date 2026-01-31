import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Finans Hesap Makineleri | Vergi, Maaş, Kredi Hesaplama",
  description: "Türkiye'ye özel finans hesap makineleri. Vergi hesaplama, maaş hesaplama, konut kredisi, tüketici kredisi ve emeklilik hesaplama araçları.",
  alternates: {
    canonical: "https://calculator360pro.com/tr/hesap-makineleri/finans",
  },
};

const calculators = [
  {
    name: "Vergi Hesap Makinesi",
    slug: "vergi-hesap-makinesi",
    description: "2026 gelir vergisi dilimleri ile yıllık verginizi hesaplayın",
    icon: "💰",
  },
  {
    name: "Maaş Hesap Makinesi",
    slug: "maas-hesap-makinesi",
    description: "Brüt-net maaş hesaplama, SGK, AGİ dahil",
    icon: "💵",
  },
  {
    name: "Konut Kredisi Hesap Makinesi",
    slug: "konut-kredisi-hesap-makinesi",
    description: "Mortgage hesaplama, tapu harcı ve ödeme planı",
    icon: "🏠",
  },
  {
    name: "Kredi Hesap Makinesi",
    slug: "kredi-hesap-makinesi",
    description: "İhtiyaç kredisi hesaplama, KKDF ve BSMV dahil",
    icon: "💳",
  },
  {
    name: "Emeklilik Hesap Makinesi",
    slug: "emeklilik-hesap-makinesi",
    description: "SGK emeklilik yaşı, prim gün sayısı ve BES hesaplama",
    icon: "🏖️",
  },
];

export default function FinanceCalculatorsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-8">
      <div className="container mx-auto px-4 max-w-6xl">
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
            <li className="text-[#1e293b] font-medium">Finans</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-[#1e293b] mb-4">
          Finans Hesap Makineleri
        </h1>
        <p className="text-lg text-[#64748b] mb-8">
          Türkiye&apos;ye özel vergi, maaş, kredi ve emeklilik hesaplama araçları. 
          2026 yılı güncel veriler ile doğru hesaplamalar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculators.map((calc) => (
            <Link
              key={calc.slug}
              href={`/tr/hesap-makineleri/finans/${calc.slug}`}
              className="bg-white p-6 rounded-lg border-2 border-[#e2e8f0] hover:border-[#2563eb] hover:shadow-lg transition-all group"
            >
              <div className="text-4xl mb-4">{calc.icon}</div>
              <h2 className="text-lg font-semibold text-[#1e293b] group-hover:text-[#2563eb] mb-2">
                {calc.name}
              </h2>
              <p className="text-sm text-[#64748b]">{calc.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

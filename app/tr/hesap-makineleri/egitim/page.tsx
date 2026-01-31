import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Eğitim Hesap Makineleri | Not Ortalaması Hesaplama",
  description: "Türkiye üniversite not sistemi ile GANO hesaplama. 4'lük ve 100'lük not sistemi dönüşümü. YÖK standardı hesap makinesi.",
  alternates: {
    canonical: "https://calculator360pro.com/tr/hesap-makineleri/egitim",
  },
};

const calculators = [
  {
    name: "Not Ortalaması Hesap Makinesi",
    slug: "not-ortalamasi-hesap-makinesi",
    description: "GANO hesaplama, 4'lük ve 100'lük not sistemi dönüşümü",
    icon: "📚",
  },
];

export default function EducationCalculatorsPage() {
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
            <li className="text-[#1e293b] font-medium">Eğitim</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-[#1e293b] mb-4">
          Eğitim Hesap Makineleri
        </h1>
        <p className="text-lg text-[#64748b] mb-8">
          Türkiye üniversite not sistemi (YÖK standardı) ile not ortalaması hesaplama araçları.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculators.map((calc) => (
            <Link
              key={calc.slug}
              href={`/tr/hesap-makineleri/egitim/${calc.slug}`}
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

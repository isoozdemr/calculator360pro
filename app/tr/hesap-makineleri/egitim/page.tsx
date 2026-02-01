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

        {/* Açıklayıcı İçerik */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Üniversite not ortalaması, akademik başarının önemli bir göstergesi. Yüksek not ortalaması, 
              mezuniyet sonrası iş bulma, yüksek lisans başvuruları ve burs başvuruları için avantaj sağlıyor. 
              Not ortalamasını doğru hesaplamak, akademik planlama için gerekli.
            </p>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Türk üniversitelerinde genellikle 4'lük not sistemi kullanılıyor. AA, BA, BB, CB, CC, DC, DD, 
              FD, FF harf notları var. Her harf notunun sayısal karşılığı var. AA 4.0, BA 3.5, BB 3.0 gibi 
              değerler kullanılıyor.
            </p>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              GANO, genel ağırlıklı not ortalaması. AKTS kredileri dikkate alınarak hesaplanıyor. Her dersin 
              notu, o dersin AKTS kredisiyle çarpılıyor. Tüm derslerin toplamı, toplam AKTS kredisine bölünüyor. 
              Bu, ağırlıklı ortalama veriyor.
            </p>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              AGNO, ağırlıksız genel not ortalaması. AKTS kredileri dikkate alınmadan hesaplanıyor. Tüm ders 
              notlarının toplamı, ders sayısına bölünüyor. Çoğu üniversitede GANO kullanılıyor çünkü ders yükünü 
              dikkate alıyor.
            </p>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Not ortalaması hesaplarken başarısız dersler de dikkate alınıyor. FF notu genellikle 0.0 olarak 
              hesaplanıyor. Bu, not ortalamasını düşürüyor. Başarısız dersleri tekrar alarak not ortalamasını 
              yükseltebilirsiniz.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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

        {/* FAQ Bölümü */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
            Sıkça Sorulan Sorular
          </h2>
          <div className="space-y-4">
            <div className="border-b border-[#e2e8f0] pb-4">
              <h3 className="font-semibold text-[#1e293b] mb-2">
                GANO ve AGNO arasındaki fark nedir?
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                GANO, AKTS kredileri dikkate alınarak hesaplanan ağırlıklı ortalama. AGNO ise AKTS kredileri 
                dikkate alınmadan hesaplanan basit ortalama. Çoğu üniversitede GANO kullanılıyor çünkü ders 
                yükünü dikkate alıyor.
              </p>
            </div>
            <div className="border-b border-[#e2e8f0] pb-4">
              <h3 className="font-semibold text-[#1e293b] mb-2">
                Not ortalaması nasıl yükseltilir?
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                Not ortalamasını yükseltmek için derslere düzenli katılım, düzenli çalışma, ödev ve projeleri 
                zamanında teslim etmek önemli. Düşük notlu dersleri tekrar alarak da not ortalamasını yükseltebilirsiniz.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1e293b] mb-2">
                Başarısız dersler not ortalamasını etkiler mi?
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                Evet, başarısız dersler not ortalamasını düşürüyor. FF notu genellikle 0.0 olarak hesaplanıyor. 
                Başarısız dersleri tekrar alarak not ortalamasını yükseltebilirsiniz.
              </p>
            </div>
          </div>
        </div>

        {/* İlgili Blog Yazıları */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
            İlgili Blog Yazıları
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/tr/blog/universite-not-ortalamasi-nasil-yukseltilir"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">
                Üniversite Not Ortalaması Nasıl Yükseltilir?
              </h3>
              <p className="text-sm text-[#64748b]">
                Not ortalaması yükseltme yöntemleri, ders çalışma stratejileri ve akademik başarı ipuçları.
              </p>
            </Link>
            <Link
              href="/tr/blog/gano-ve-agno-arasindaki-farklar-hangi-sistem-kullaniliyor"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">
                GANO ve AGNO Arasındaki Farklar: Hangi Sistem Kullanılıyor?
              </h3>
              <p className="text-sm text-[#64748b]">
                GANO ve AGNO hesaplama yöntemleri, farklar ve hangi üniversitelerde hangi sistem kullanılıyor.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

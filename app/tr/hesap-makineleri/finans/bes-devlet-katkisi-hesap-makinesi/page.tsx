import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { DATA_VERSION, BES_2026 } from "@/lib/data/turkey-2026-data";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { BESStateContributionCalculator } from "@/components/calculators/tr/BESStateContributionCalculator";

export const metadata: Metadata = {
  title: "BES Devlet Katkısı Hesap Makinesi 2026 | Aylık Katkı ve Birikim",
  description:
    "Bireysel Emeklilik Sistemi (BES) devlet katkısı %25 ile ne kadar birikim yaparsınız? Aylık katkı, 10 yıl ve 56 yaş senaryoları. Ücretsiz BES hesap makinesi 2026.",
  keywords: [
    "BES devlet katkısı hesaplama",
    "BES ne kadar yatırmalıyım",
    "BES devlet katkısı 2026",
    "emeklilik birikim hesaplama",
    "aylık BES katkısı hesaplama",
    "bireysel emeklilik hesaplama",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/finans/bes-devlet-katkisi-hesap-makinesi`,
    languages: {
      en: `${SITE_URL}/calculators/finance/retirement-calculator`,
      tr: `${SITE_URL}/tr/hesap-makineleri/finans/bes-devlet-katkisi-hesap-makinesi`,
    },
  },
  openGraph: {
    title: "BES Devlet Katkısı Hesap Makinesi 2026 | Calculator360Pro",
    description:
      "BES %25 devlet katkısı ile birikiminizi hesaplayın. Aylık katkı, getiri ve 10 yıl senaryosu.",
    url: `${SITE_URL}/tr/hesap-makineleri/finans/bes-devlet-katkisi-hesap-makinesi`,
    type: "website",
    locale: "tr_TR",
    siteName: "Calculator360Pro",
  },
};

const faqs = [
  {
    question: "BES devlet katkısı oranı nedir?",
    answer:
      "Bireysel Emeklilik Sistemi'nde (BES) devlet, yaptığınız katkıların %25'ini hesabınıza ekler. 2026 yılında yıllık devlet katkısı üst limiti 20.000 TL'dir. Yani yıllık 80.000 TL'ye kadar yaptığınız katkının tamamı %25 devlet katkısı alır; bu tutarın üzerindeki kısım devlet katkısına tabi değildir.",
  },
  {
    question: "BES'e aylık ne kadar yatırmalıyım?",
    answer:
      "Bütçenize göre değişir. Devlet katkısından tam yararlanmak için yıllık 80.000 TL katkı (ayda yaklaşık 6.667 TL) yeterlidir; bu durumda devlet 20.000 TL ekler. Daha düşük aylık katkılarda da %25 devlet katkısı alırsınız; örneğin ayda 1.000 TL (yıllık 12.000 TL) katkıda devlet 3.000 TL ekler.",
  },
  {
    question: "BES 10 yıl ve 56 yaş kuralı nedir?",
    answer:
      "Devlet katkısının tamamını hak etmek için en az 10 yıl sistemde kalmanız ve 56 yaşını doldurmanız gerekir. Erken çekimlerde devlet katkısı oranı düşer (3 yıl sonra %15, 6 yıl sonra %35, 10 yıl sonra %60 gibi). Bu hesap makinesi 10 yıl ve sonrası birikim senaryosunu gösterir.",
  },
  {
    question: "BES vergi indirimi nasıl uygulanır?",
    answer:
      "BES katkıları, gelir vergisi matrahından düşülebilir. Yıllık belirli bir limite kadar (ör. 30.000 TL) yaptığınız katkı vergi matrahınızdan düşülür; böylece hem devlet katkısı hem vergi tasarrufu elde edersiniz. Detay için BES sözleşmenizi veya emeklilik şirketinizi kontrol edin.",
  },
  {
    question: "BES mi mevduat mı daha karlı?",
    answer:
      "BES'te devlet katkısı (%25) ve vergi indirimi nedeniyle, aynı tutarı mevduata yatırmaktan genelde daha avantajlıdır. Mevduat faizi vergiye tabi olabilir; BES uzun vadeli birikim ve emeklilik amaçlıdır. Getiri oranı BES fon getirisine bağlıdır; bu hesap makinesinde beklenen getiri oranını kendiniz girebilirsiniz.",
  },
  {
    question: "BES devlet katkısı 2026 tavanı ne kadar?",
    answer:
      "2026 yılında BES devlet katkısı üst limiti yıllık 20.000 TL'dir. Yani devletin ekleyeceği katkı en fazla 20.000 TL olur; buna karşılık sizin yıllık katkınız 80.000 TL'ye kadar %25 devlet katkısı alır (80.000 × 0,25 = 20.000 TL).",
  },
];

const howToSteps = [
  {
    name: "Aylık katkı tutarını girin",
    text: "BES'e aylık olarak yatırmayı planladığınız TL tutarını girin (örn. 1.000 veya 2.500).",
  },
  {
    name: "Katkı süresini seçin",
    text: "Kaç yıl boyunca katkı yapacağınızı yıl olarak girin (örn. 10 veya 20).",
  },
  {
    name: "Beklenen getiri oranını girin",
    text: "BES fonlarının yıllık getiri beklentinizi yüzde olarak girin (örn. 10). Varsayılan %10 tahminidir.",
  },
  {
    name: "Hesapla butonuna tıklayın",
    text: "Hesapla butonuna tıklayarak toplam birikim, sizin katkınız ve devlet katkısı tutarını görün.",
  },
  {
    name: "Sonucu yorumlayın",
    text: "Sonuç özetinde 10 yıl (veya girdiğiniz süre) sonraki tahmini birikiminiz ve devlet katkısı payı gösterilir.",
  },
];

export default function BESDevletKatkisiHesapMakinesiPage() {
  return (
    <>
      <SchemaMarkupTR
        name="BES Devlet Katkısı ve Emeklilik Birikim Hesap Makinesi 2026"
        description="BES %25 devlet katkısı ile aylık katkı ve birikim hesaplama. 10 yıl ve 56 yaş senaryoları."
        slug="bes-devlet-katkisi-hesap-makinesi"
        categorySlug="finans"
        categoryName="Finans"
        dateModified={DATA_VERSION.lastUpdated}
        category="finance"
        faqs={faqs}
        howToName="BES Devlet Katkısı Hesap Makinesi Nasıl Kullanılır?"
        howToDescription="BES aylık katkı ve devlet katkısı ile birikim hesaplamak için adımlar."
        howToSteps={howToSteps}
      />

      <div className="min-h-screen bg-[#f8fafc]">
        <section className="bg-gradient-to-br from-[#1e293b] to-[#334155] text-white py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center flex-wrap gap-x-2 text-sm text-[#94a3b8]">
                <li>
                  <Link href="/tr" className="hover:text-white transition-colors">
                    Ana Sayfa
                  </Link>
                </li>
                <li><span className="mx-1">/</span></li>
                <li>
                  <Link href="/tr/hesap-makineleri" className="hover:text-white transition-colors">
                    Hesap Makineleri
                  </Link>
                </li>
                <li><span className="mx-1">/</span></li>
                <li>
                  <Link href="/tr/hesap-makineleri/finans" className="hover:text-white transition-colors">
                    Finans
                  </Link>
                </li>
                <li><span className="mx-1">/</span></li>
                <li className="text-white font-medium">BES Devlet Katkısı</li>
              </ol>
            </nav>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                  BES Devlet Katkısı Hesap Makinesi 2026
                </h1>
                <p className="text-lg text-[#94a3b8] max-w-2xl">
                  Bireysel Emeklilik Sistemi&apos;nde aylık katkınız ve %25 devlet katkısı ile ne kadar birikim yapacağınızı hesaplayın.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-[#334155] px-4 py-2 rounded-full text-sm whitespace-nowrap">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>{DATA_VERSION.lastUpdatedDisplay}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <BESStateContributionCalculator />
          </div>
        </section>

        <section className="py-8 bg-white border-t border-[#e2e8f0]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
              BES Devlet Katkısı Hesap Makinesi Nasıl Kullanılır?
            </h2>
            <ol className="space-y-4 list-decimal list-inside text-[#475569]">
              <li id="adim-1"><strong className="text-[#1e293b]">Aylık katkı:</strong> BES&apos;e ayda ne kadar yatıracağınızı TL olarak girin.</li>
              <li id="adim-2"><strong className="text-[#1e293b]">Katkı süresi:</strong> Kaç yıl katkı yapacağınızı seçin (örn. 10 yıl).</li>
              <li id="adim-3"><strong className="text-[#1e293b]">Getiri oranı:</strong> Beklenen yıllık getiriyi % olarak girin (varsayılan %10).</li>
              <li id="adim-4"><strong className="text-[#1e293b]">Hesapla:</strong> Sonuç özetinde toplam birikim ve devlet katkısını görün.</li>
              <li id="adim-5"><strong className="text-[#1e293b]">Yorumlayın:</strong> 10 yıl / 56 yaş kuralını unutmayın; erken çekimde devlet katkısı düşer.</li>
            </ol>
          </div>
        </section>

        <section className="py-8 bg-[#f8fafc]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
              2026 BES Devlet Katkısı Kuralları
            </h2>
            <ul className="list-disc list-inside text-[#64748b] space-y-2 mb-4">
              <li>Devlet katkısı oranı: %{BES_2026.stateContribution}</li>
              <li>Yıllık devlet katkısı üst limiti: {BES_2026.maxStateContributionPerYear.toLocaleString("tr-TR")} TL</li>
              <li>Tam devlet katkısı için sistemde kalma: en az {BES_2026.minimumYears} yıl</li>
              <li>Emeklilik için minimum yaş: {BES_2026.minimumAge}</li>
            </ul>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
                BES Nedir ve Devlet Katkısı Nasıl Çalışır?
              </h2>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Bireysel Emeklilik Sistemi (BES), çalışanların emeklilik için düzenli birikim yapmasını teşvik eden bir sistemdir. Katkılarınızın %25&apos;i devlet tarafından hesabınıza eklenir; 2026 yılında yıllık devlet katkısı üst limiti 20.000 TL&apos;dir. Yani yıllık 80.000 TL&apos;ye kadar yaptığınız katkının tamamı %25 devlet katkısı alır.
              </p>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                BES&apos;ten tam fayda için en az 10 yıl sistemde kalmanız ve 56 yaşını doldurmanız gerekir. Erken çekimde devlet katkısının bir kısmı geri alınır. BES katkıları ayrıca gelir vergisi matrahından düşülebilir; bu da ek vergi tasarrufu sağlar.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                Örnek Senaryolar
              </h3>
              <p className="text-[#64748b] mb-2">
                <strong>Aylık 1.000 TL:</strong> Yıllık 12.000 TL katkı, devlet 3.000 TL ekler. 10 yılda (getiri hariç) 120.000 + 30.000 = 150.000 TL. Getiri ile birlikte hesap makinesinde görebilirsiniz.
              </p>
              <p className="text-[#64748b] mb-2">
                <strong>Aylık 5.000 TL:</strong> Yıllık 60.000 TL katkı, devlet 15.000 TL ekler. 10 yılda katkılar 600.000 + 150.000 = 750.000 TL (getiri eklenmeden).
              </p>
              <p className="text-[#64748b] mb-4">
                <strong>Aylık 7.000 TL:</strong> Yıllık 84.000 TL katkı; devlet en fazla 20.000 TL ekler (tavan). 84.000 TL&apos;lik katkının 80.000 TL&apos;si %25, kalan 4.000 TL devlet katkısız.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                BES ve Vergi İndirimi
              </h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                BES katkıları gelir vergisi matrahından düşülebilir. Yıllık belirli bir limite kadar (örneğin 30.000 TL) yaptığınız katkı, vergi hesaplamasında matrahtan düşülür; böylece hem devlet katkısı hem de vergi tasarrufu elde edersiniz. Yüksek gelirli çalışanlar için bu çifte avantaj önemlidir. <Link href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Vergi hesap makinesi</Link> ile vergi dilimlerinizi kontrol edebilir; BES katkısı sonrası vergi tasarrufunuzu tahmin edebilirsiniz.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                BES mi Mevduat mı?
              </h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Mevduat faizi vergiye tabidir ve devlet katkısı yoktur. BES&apos;te ise %25 devlet katkısı ve vergi indirimi vardır; getiri de fon performansına bağlıdır. Kısa vadeli ihtiyaçlar için mevduat, uzun vadeli emeklilik birikimi için BES genelde daha mantıklıdır. <Link href="/tr/hesap-makineleri/finans/birikim-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Birikim hesap makinesi</Link> ile mevduat senaryolarını, bu araç ile BES senaryolarını karşılaştırabilirsiniz.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                İlgili Araçlar ve Rehberler
              </h3>
              <ul className="list-disc list-inside text-[#64748b] space-y-2">
                <li>
                  <Link href="/tr/blog/bireysel-emeklilik-bes-devlet-katkisi-nasil-hesaplanir" className="text-[#2563eb] hover:underline font-medium">BES Devlet Katkısı Nasıl Hesaplanır?</Link> – Detaylı rehber
                </li>
                <li>
                  <Link href="/tr/hesap-makineleri/finans/emeklilik-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Emeklilik Hesap Makinesi</Link> – SGK ve yaş hesaplama
                </li>
                <li>
                  <Link href="/tr/rehberler/sgk-emeklilik-tablosu" className="text-[#2563eb] hover:underline font-medium">SGK Emeklilik Tablosu</Link> – Emeklilik yaşı ve prim
                </li>
                <li>
                  <Link href="/tr/hesap-makineleri/finans/birikim-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Birikim Hesap Makinesi</Link> – Düzenli tasarruf
                </li>
                <li>
                  <Link href="/tr/rehberler/finansal-terimler-sozlugu" className="text-[#2563eb] hover:underline font-medium">Finansal Terimler Sözlüğü</Link>
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="py-12 bg-[#f8fafc] border-t border-[#e2e8f0]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
              Sıkça Sorulan Sorular
            </h2>
            <ul className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
              {faqs.map((faq, i) => (
                <li key={i} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="font-bold text-[#1e293b] mb-2" itemProp="name">{faq.question}</h3>
                  <p className="text-[#64748b]" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <span itemProp="text">{faq.answer}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

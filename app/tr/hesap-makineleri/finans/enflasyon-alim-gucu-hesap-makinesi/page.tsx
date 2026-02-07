import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";
import {
  INFLATION_DATA_VERSION,
  TURKEY_ANNUAL_INFLATION_RATES,
} from "@/lib/data/turkey-inflation-data";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { InflationPurchasingPowerCalculator } from "@/components/calculators/tr/InflationPurchasingPowerCalculator";

export const metadata: Metadata = {
  title: "Enflasyon ve Alım Gücü Hesap Makinesi 2026 | TÜİK TÜFE ile Hesaplama",
  description:
    "TÜİK yıllık TÜFE oranları ile paranızın alım gücünü hesaplayın. Geçmiş veya gelecek yıla göre TL değeri, enflasyon etkisi. Ücretsiz enflasyon hesap makinesi 2026.",
  keywords: [
    "enflasyon hesaplama",
    "alım gücü kaybı hesaplama",
    "100 tl 2020'de ne kadar ediyordu",
    "paranın değeri hesaplama",
    "enflasyon hesap makinesi 2026",
    "TÜFE hesaplama",
    "maaşım eridi hesaplama",
    "TL alım gücü",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/finans/enflasyon-alim-gucu-hesap-makinesi`,
    languages: {
      en: `${SITE_URL}/calculators/finance/inflation-purchasing-power-calculator`,
      tr: `${SITE_URL}/tr/hesap-makineleri/finans/enflasyon-alim-gucu-hesap-makinesi`,
    },
  },
  openGraph: {
    title: "Enflasyon ve Alım Gücü Hesap Makinesi 2026 | Calculator360Pro",
    description:
      "TÜİK TÜFE ile paranızın alım gücünü hesaplayın. Geçmiş veya gelecek yıla göre TL değeri.",
    url: `${SITE_URL}/tr/hesap-makineleri/finans/enflasyon-alim-gucu-hesap-makinesi`,
    type: "website",
    locale: "tr_TR",
    siteName: "Calculator360Pro",
  },
};

const faqs = [
  {
    question: "Enflasyon nedir ve alım gücünü nasıl etkiler?",
    answer:
      "Enflasyon, fiyatların genel düzeyinin sürekli artmasıdır. Aynı para ile daha az mal ve hizmet alınabildiği için paranızın alım gücü düşer. Örneğin 2020'de 100 TL ile alabildiğiniz bir sepet, 2026'da aynı fiyata alınamayabilir; TÜİK TÜFE oranları bu farkı hesaplamak için kullanılır.",
  },
  {
    question: "Enflasyon hesaplamasında hangi veriler kullanılıyor?",
    answer:
      "Bu hesap makinesi TÜİK (Türkiye İstatistik Kurumu) yıllık Tüketici Fiyat Endeksi (TÜFE) oranlarını kullanır. Veriler resmi kaynaklardan alınır ve yıl sonu açıklamalarına göre güncellenir. 2015–2026 arası yıllık oranlar bileşik olarak uygulanır.",
  },
  {
    question: "100 TL 2020'de bugüne göre ne kadar ediyor?",
    answer:
      "2020'den 2026'ya kadar olan yıllık TÜFE oranları bileşik uygulandığında, 2020'deki 100 TL'nin 2026'daki alım gücü karşılığı hesaplanabilir. Hesaplama aracında başlangıç yılı 2020, bitiş yılı 2026 ve tutar 100 girerek anında sonucu görebilirsiniz.",
  },
  {
    question: "Gelecek yıllar için enflasyon tahmini nasıl yapılıyor?",
    answer:
      "Gelecek yıllar için TÜİK henüz resmi oran açıklamadığından, tahmini oranlar kullanılabilir. Bu hesap makinesinde 2026 için tahmini oran kullanılmaktadır; yıl sonu TÜİK açıklaması sonrası veri güncellenir. Tahminler yatırım kararı yerine bilgilendirme amaçlıdır.",
  },
  {
    question: "Alım gücü kaybı nasıl hesaplanır?",
    answer:
      "Alım gücü kaybı, paranızın belirli bir dönemde enflasyon nedeniyle satın alma gücünün ne kadar azaldığını gösterir. Önce başlangıç yılındaki tutarın bitiş yılındaki eşdeğeri hesaplanır; ardından 'o parayla o yılda ne alınabileceği' ile 'bugün aynı nominal tutarla ne alınabileceği' karşılaştırılabilir.",
  },
  {
    question: "Maaşım eridi derken ne kastediliyor?",
    answer:
      "Maaşınız nominal olarak artsa bile, enflasyon daha yüksekse reel (gerçek) alım gücünüz düşer. Yani aynı maaşla daha az mal/hizmet alırsınız. Bu hesap makinesi ile geçmiş bir yıldaki maaşınızın bugünkü TL karşılığını görerek 'maaşım eridi' ifadesini sayısal olarak anlayabilirsiniz.",
  },
];

const howToSteps = [
  {
    name: "Tutarı girin",
    text: "Hesaplamak istediğiniz TL tutarını 'Tutar (TL)' alanına girin. Örneğin 100.000 veya 50.000.",
  },
  {
    name: "Başlangıç yılını seçin",
    text: "Paranın değerini referans alacağınız başlangıç yılını açılır listeden seçin (örn. 2020).",
  },
  {
    name: "Bitiş yılını seçin",
    text: "Karşılaştırmak istediğiniz bitiş yılını seçin (örn. 2026 veya bugün).",
  },
  {
    name: "Hesapla butonuna tıklayın",
    text: "Hesapla butonuna tıklayarak, başlangıç yılındaki tutarın bitiş yılındaki alım gücü eşdeğerini görün.",
  },
  {
    name: "Sonucu yorumlayın",
    text: "Çıkan tutar, bitiş yılındaki fiyat düzeyine göre başlangıç yılındaki paranızın eşdeğeridir.",
  },
];

export default function EnflasyonAlimGucuHesapMakinesiPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Enflasyon ve Alım Gücü Hesap Makinesi 2026"
        description="TÜİK yıllık TÜFE oranları ile paranızın alım gücünü hesaplayın. Geçmiş veya gelecek yıla göre TL değeri."
        slug="enflasyon-alim-gucu-hesap-makinesi"
        categorySlug="finans"
        categoryName="Finans"
        dateModified={DATA_VERSION.lastUpdated}
        category="finance"
        faqs={faqs}
        howToName="Enflasyon ve Alım Gücü Hesap Makinesi Nasıl Kullanılır?"
        howToDescription="TÜİK TÜFE verileri ile paranızın alım gücünü hesaplamak için adımlar."
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
                <li className="text-white font-medium">Enflasyon ve Alım Gücü</li>
              </ol>
            </nav>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                  Enflasyon ve Alım Gücü Hesap Makinesi 2026
                </h1>
                <p className="text-lg text-[#94a3b8] max-w-2xl">
                  TÜİK yıllık TÜFE oranları ile paranızın alım gücünü hesaplayın. Geçmiş veya gelecek yıla göre TL değeri, enflasyon etkisi.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-[#334155] px-4 py-2 rounded-full text-sm whitespace-nowrap">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>{INFLATION_DATA_VERSION.lastUpdatedDisplay}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <InflationPurchasingPowerCalculator />
          </div>
        </section>

        {/* Nasıl kullanılır - HowTo adımları */}
        <section className="py-8 bg-white border-t border-[#e2e8f0]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
              Enflasyon ve Alım Gücü Hesap Makinesi Nasıl Kullanılır?
            </h2>
            <ol className="space-y-4 list-decimal list-inside text-[#475569]">
              <li id="adim-1"><strong className="text-[#1e293b]">Tutarı girin:</strong> Hesaplamak istediğiniz TL tutarını yazın.</li>
              <li id="adim-2"><strong className="text-[#1e293b]">Başlangıç yılını seçin:</strong> Paranın değerini referans alacağınız yıl.</li>
              <li id="adim-3"><strong className="text-[#1e293b]">Bitiş yılını seçin:</strong> Karşılaştırmak istediğiniz hedef yıl.</li>
              <li id="adim-4"><strong className="text-[#1e293b]">Hesapla:</strong> Sonuç özeti kutusunda eşdeğer tutarı görün.</li>
              <li id="adim-5"><strong className="text-[#1e293b]">Yorumlayın:</strong> Bitiş yılındaki fiyat düzeyine göre alım gücü eşdeğeridir.</li>
            </ol>
          </div>
        </section>

        {/* Yıllık TÜFE tablosu */}
        <section className="py-8 bg-[#f8fafc]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
              Türkiye Yıllık TÜFE Enflasyon Oranları
            </h2>
            <p className="text-[#64748b] mb-4">
              Aşağıdaki tablo TÜİK açıklamalarına göre yıllık Tüketici Fiyat Endeksi (TÜFE) oranlarını göstermektedir. Kaynak: {INFLATION_DATA_VERSION.source}.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg border border-[#e2e8f0]">
                <thead>
                  <tr className="bg-[#f1f5f9]">
                    <th className="border border-[#e2e8f0] px-4 py-3 text-left font-semibold text-[#1e293b]">Yıl</th>
                    <th className="border border-[#e2e8f0] px-4 py-3 text-right font-semibold text-[#1e293b]">Yıllık TÜFE (%)</th>
                    <th className="border border-[#e2e8f0] px-4 py-3 text-left font-semibold text-[#1e293b]">Not</th>
                  </tr>
                </thead>
                <tbody>
                  {[...TURKEY_ANNUAL_INFLATION_RATES].reverse().map((row) => (
                    <tr key={row.year} className="hover:bg-[#f8fafc]">
                      <td className="border border-[#e2e8f0] px-4 py-3 text-[#475569]">{row.year}</td>
                      <td className="border border-[#e2e8f0] px-4 py-3 text-right font-medium text-[#1e293b]">%{row.ratePercent.toFixed(2)}</td>
                      <td className="border border-[#e2e8f0] px-4 py-3 text-sm text-[#64748b]">{row.description ?? "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Derin SEO içerik */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
                Enflasyon ve Alım Gücü Nedir?
              </h2>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Enflasyon, fiyatların genel düzeyinin sürekli artmasıdır. Türkiye&apos;de TÜİK tarafından aylık ve yıllık açıklanan Tüketici Fiyat Endeksi (TÜFE), enflasyonun resmi ölçüsü olarak kabul edilir. Enflasyon yükseldikçe aynı nominal tutarla (örneğin 1.000 TL) daha az mal ve hizmet alırsınız; buna alım gücü kaybı denir.
              </p>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Bu hesap makinesi, belirli bir yıldaki TL tutarının başka bir yıldaki alım gücü eşdeğerini hesaplar. Örneğin 2020&apos;de 100.000 TL birikiminiz vardı; 2026&apos;da aynı alım gücüne sahip olmak için nominal olarak ne kadar paranız olması gerekir? TÜİK yıllık TÜFE oranları bileşik uygulanarak bu soruya yanıt verilir.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                Enflasyon Hesaplama Formülü
              </h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                İki yıl arasında bileşik enflasyon faktörü şu şekilde hesaplanır: her yıl için (1 + o yılın TÜFE oranı) çarpılır. Örneğin 2020&apos;den 2022&apos;ye kadar faktör = (1 + r_2020)(1 + r_2021). Bitiş yılındaki eşdeğer tutar = Başlangıç tutarı × bu faktör.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                Örnek Senaryolar
              </h3>
              <p className="text-[#64748b] mb-2">
                <strong>Senaryo 1 – Maaş:</strong> 2020&apos;de aylık 15.000 TL maaş alıyordunuz. 2026 fiyatlarıyla aynı alım gücüne sahip olmak için maaşınızın nominal olarak yaklaşık kaç TL olması gerekir? Hesaplama aracında 15.000 TL, 2020 ve 2026 girerek sonucu görebilirsiniz.
              </p>
              <p className="text-[#64748b] mb-2">
                <strong>Senaryo 2 – Birikim:</strong> 2018&apos;de 50.000 TL birikiminiz vardı. Bu paranın 2026&apos;daki alım gücü eşdeğeri nedir? Başlangıç 2018, bitiş 2026, tutar 50.000 ile hesaplayabilirsiniz.
              </p>
              <p className="text-[#64748b] mb-4">
                <strong>Senaryo 3 – Kira:</strong> 2022&apos;de aylık 10.000 TL kira ödüyordunuz. 2026&apos;da aynı reel kira için nominal kira yaklaşık ne olur? 10.000, 2022, 2026 girerek tahmini görebilirsiniz.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                Neden Alım Gücü Önemli?
              </h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Maaş artışları, birikim hedefleri ve yatırım getirileri değerlendirilirken nominal (görünen) tutarlar yanıltıcı olabilir. Örneğin maaşınız iki katına çıkmış olsa bile, aynı dönemde fiyatlar üç katına çıktıysa reel olarak daha kötü durumdasınızdır. Alım gücü hesabı, paranızın gerçek değerini anlamanızı sağlar. Kira, maaş, birikim veya yatırım kararlarında enflasyonu dikkate almak, uzun vadeli finansal sağlık için kritiktir.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                Reel Getiri Nedir?
              </h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Banka faizi veya yatırım getirisi yüksek görünse bile, enflasyonu düşündüğünüzde reel (gerçek) getiri daha düşük olabilir. Reel getiri = nominal getiri − enflasyon oranı (kabaca). Örneğin mevduat faizi %40, enflasyon %50 ise reel getiri negatiftir; paranız değer kaybediyor demektir. <Link href="/tr/hesap-makineleri/finans/bilesik-faiz-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Bileşik faiz hesap makinesi</Link> ile nominal getiriyi hesaplayıp, bu sayfadaki enflasyon verileriyle reel getiriyi kıyaslayabilirsiniz.
              </p>

              <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
                İpuçları ve Öneriler
              </h2>
              <ul className="list-disc list-inside text-[#64748b] space-y-2 mb-6">
                <li>Maaş zamlarınızı enflasyon oranıyla kıyaslayın; reel artış için TÜFE&apos;nin üzerinde zam hedefleyin. <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Maaş hesap makinesi</Link> ile net maaşınızı görün.</li>
                <li>Birikim hedeflerinizi nominal değil alım gücü cinsinden düşünün. <Link href="/tr/hesap-makineleri/finans/birikim-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Birikim hesap makinesi</Link> ile aylık tasarruf planı yapın.</li>
                <li>Yatırım getirisinde reel getiriyi hesaplayın: nominal getiri − enflasyon. <Link href="/tr/hesap-makineleri/finans/bilesik-faiz-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Bileşik faiz</Link> ve <Link href="/tr/hesap-makineleri/finans/yatirim-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">yatırım hesap makinesi</Link> kullanın.</li>
                <li>BES ve emeklilik birikiminde uzun vadede enflasyonu yenen getiri önemlidir. <Link href="/tr/hesap-makineleri/finans/bes-devlet-katkisi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">BES devlet katkısı hesap makinesi</Link> ile senaryonuzu kurun.</li>
              </ul>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                İlgili Araçlar ve Rehberler
              </h3>
              <ul className="list-disc list-inside text-[#64748b] space-y-2">
                <li>
                  <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Maaş Hesap Makinesi</Link> – Brüt net maaş ve SGK kesintileri
                </li>
                <li>
                  <Link href="/tr/hesap-makineleri/finans/birikim-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Birikim Hesap Makinesi</Link> – Düzenli tasarruf ve getiri
                </li>
                <li>
                  <Link href="/tr/hesap-makineleri/finans/bilesik-faiz-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Bileşik Faiz Hesap Makinesi</Link> – Yatırım getirisi
                </li>
                <li>
                  <Link href="/tr/rehberler/finansal-terimler-sozlugu" className="text-[#2563eb] hover:underline font-medium">Finansal Terimler Sözlüğü</Link> – TÜFE, enflasyon, reel getiri
                </li>
                <li>
                  <Link href="/tr/blog/brutten-nete-maas-hesaplama-sgk-agi-vergi" className="text-[#2563eb] hover:underline font-medium">Brütten Nete Maaş Hesaplama</Link> – Maaş ve vergi rehberi
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* FAQ */}
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

        <section className="py-12 bg-white border-t border-[#e2e8f0]">
          <div className="container mx-auto px-4 max-w-4xl">
            <RelatedCalculatorsTR categorySlug="finans" currentSlug="enflasyon-alim-gucu-hesap-makinesi" maxResults={6} />
          </div>
        </section>
      </div>
    </>
  );
}

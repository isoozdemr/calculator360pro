import Link from "next/link";
import { TrCalculatorShell, trCalculatorMetadata, type Faq } from "@/components/calculators/tr/TrCalculatorShell";
import { TapuHarciHesaplama } from "@/components/calculators/tr/TapuHarciHesaplama";

const SLUG = "tapu-harci-hesap-makinesi";

export const metadata = trCalculatorMetadata({
  category: "finans",
  slug: SLUG,
  title: "Tapu Harcı Hesaplama 2026 | Alıcı ve Satıcı Payı %4",
  description: "Tapu harcı hesaplama 2026: satış bedeline göre alıcı ve satıcının ödeyeceği tapu harcını (%2 + %2) anında hesaplayın. Ev alırken toplam masrafınızı öğrenin.",
  keywords: ["tapu harcı hesaplama", "tapu harcı 2026", "tapu masrafı hesaplama", "ev alırken tapu harcı"],
  ogTitle: "Tapu Harcı Hesaplama 2026",
});

const faqs: Faq[] = [
  { q: "2026 tapu harcı yüzde kaç?", a: "Tapu harcı satış bedelinin %4'üdür; alıcı %2, satıcı %2 öder." },
  { q: "Tapu harcını kim öder?", a: "Kanuna göre alıcı ve satıcı %2'şer öder. Uygulamada taraflar anlaşarak tamamını alıcının ödemesini kararlaştırabilir." },
  { q: "Tapu harcı hangi değer üzerinden alınır?", a: "Tapuda beyan edilen satış bedeli üzerinden alınır; bu bedel emlak vergisi değerinden düşük olamaz." },
  { q: "Tapu harcı dışında hangi masraflar var?", a: "Döner sermaye işletme ücreti, gerekiyorsa zorunlu deprem sigortası (DASK) ve ekspertiz ücreti ödenir." },
];

export default function Page() {
  return (
    <TrCalculatorShell
      category="finans"
      categoryName="Finans"
      slug={SLUG}
      name="Tapu Harcı Hesap Makinesi"
      h1="Tapu Harcı Hesaplama 2026"
      intro="Tapuda beyan edilecek satış bedelini girin; alıcı ve satıcının ödeyeceği tapu harcını anında görün."
      calculator={<TapuHarciHesaplama />}
      faqs={faqs}
    >
            <h2>Tapu Harcı Nasıl Hesaplanır?</h2>
            <p>Gayrimenkul satışlarında tapu harcı, beyan edilen satış bedelinin <strong>%4&apos;üdür</strong> ve kural olarak alıcı ile satıcı tarafından <strong>%2&apos;şer</strong> ödenir (492 sayılı Harçlar Kanunu). Taraflar anlaşarak harcın tamamını tek tarafın ödemesini kararlaştırabilir.</p>
            <p><strong>Örnek:</strong> 3.000.000 TL bedelle satılan bir daire için toplam tapu harcı 120.000 TL&apos;dir; alıcı 60.000 TL, satıcı 60.000 TL öder.</p>
            <h2>Beyan Değeri Kuralı</h2>
            <p>Tapuda beyan edilen bedel, gayrimenkulün belediyeden alınan emlak vergisi değerinden düşük olamaz. Gerçek satış bedelinin altında beyan, vergi ziyaı cezasına yol açabilir. Tapu harcına ek olarak Tapu Kadastro Genel Müdürlüğü döner sermaye ücreti tahsil edilir. Ev alırken <Link href="/tr/hesap-makineleri/finans/konut-kredisi-hesap-makinesi">konut kredisi taksitlerinizi</Link> ve <Link href="/tr/hesap-makineleri/finans/emlak-vergisi-hesap-makinesi">emlak vergisini</Link> de hesaplayın.</p>
    </TrCalculatorShell>
  );
}

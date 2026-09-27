import Link from "next/link";
import { TrCalculatorShell, trCalculatorMetadata, type Faq } from "@/components/calculators/tr/TrCalculatorShell";
import { KiraArtisHesaplama } from "@/components/calculators/tr/KiraArtisHesaplama";

const SLUG = "kira-artis-hesap-makinesi";

export const metadata = trCalculatorMetadata({
  category: "finans",
  slug: SLUG,
  title: "Kira Artış Oranı Hesaplama 2026 | TÜFE ile Yeni Kira",
  description: "Kira artış hesaplama 2026: mevcut kiranız ve 12 aylık TÜFE ortalamasıyla yasal kira artış tutarını ve yeni kiranızı hesaplayın. Kiracı ve ev sahipleri için ücretsiz.",
  keywords: ["kira artış oranı hesaplama", "kira artışı 2026", "kira zammı hesaplama", "tüfe kira artışı"],
  ogTitle: "Kira Artış Oranı Hesaplama 2026",
});

const faqs: Faq[] = [
  { q: "2026 kira artış oranı ne kadar?", a: "Kira artış oranı her ay TÜİK'in açıkladığı 12 aylık TÜFE ortalamasına göre değişir. Sözleşmenizin yenilendiği aydan önceki ayın verisini TÜİK enflasyon bülteninden kontrol edin." },
  { q: "Ev sahibi TÜFE'den fazla zam yapabilir mi?", a: "Hayır. Sözleşmede daha yüksek bir oran yazsa bile konut ve çatılı işyeri kiralarında artış 12 aylık TÜFE ortalamasını geçemez; aşan kısım geçersizdir." },
  { q: "%25 kira sınırı devam ediyor mu?", a: "Hayır. Konut kiralarındaki %25 artış sınırı 1 Temmuz 2024'te sona erdi. Bu tarihten sonraki yenilemelerde yalnızca TÜFE sınırı uygulanır." },
  { q: "Kira artışı ne zaman yapılır?", a: "Artış, sözleşmenin yenilendiği kira döneminin başında (genellikle sözleşme yıl dönümünde) uygulanır." },
];

export default function Page() {
  return (
    <TrCalculatorShell
      category="finans"
      categoryName="Finans"
      slug={SLUG}
      name="Kira Artış Hesap Makinesi"
      h1="Kira Artış Oranı Hesaplama 2026"
      intro="Mevcut kiranızı ve yenileme ayına ait 12 aylık TÜFE ortalamasını girin; yasal sınırdaki yeni kiranızı anında hesaplayın."
      calculator={<KiraArtisHesaplama />}
      faqs={faqs}
    >
            <h2>Kira Artış Oranı Nasıl Belirlenir?</h2>
            <p>Türk Borçlar Kanunu 344. maddeye göre konut ve çatılı işyeri kiralarında yenilenen kira yılındaki artış, <strong>bir önceki kira yılının 12 aylık TÜFE ortalamasını</strong> geçemez. Konutlarda uygulanan %25 sınırı 2 Temmuz 2024&apos;te sona erdi; artık yalnızca TÜFE sınırı geçerlidir.</p>
            <p><strong>Formül:</strong> Yeni kira = mevcut kira × (1 + 12 aylık TÜFE ortalaması / 100)</p>
            <p><strong>Örnek:</strong> Aylık 20.000 TL kira ödeyen bir kiracı için yenileme ayında açıklanan 12 aylık TÜFE ortalaması %40 ise yeni kira en fazla 20.000 × 1,40 = <strong>28.000 TL</strong> olabilir.</p>
            <h2>5 Yılı Dolduran Kiracılar</h2>
            <p>Beş yılı aşan kira sözleşmelerinde ve her beş yıllık dönemin sonunda kira bedeli, hakim tarafından emsal kiralar, TÜFE ve mülkün durumu dikkate alınarak yeniden belirlenebilir (kira tespit davası). Ev almayı düşünüyorsanız <Link href="/tr/hesap-makineleri/finans/konut-kredisi-hesap-makinesi">konut kredisi</Link> ve <Link href="/tr/hesap-makineleri/finans/tapu-harci-hesap-makinesi">tapu harcı</Link> hesaplayıcılarına göz atın.</p>
    </TrCalculatorShell>
  );
}

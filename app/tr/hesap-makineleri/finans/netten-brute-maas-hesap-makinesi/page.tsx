import Link from "next/link";
import { TrCalculatorShell, trCalculatorMetadata, type Faq } from "@/components/calculators/tr/TrCalculatorShell";
import { NettenBruteHesaplama } from "@/components/calculators/tr/NettenBruteHesaplama";

const SLUG = "netten-brute-maas-hesap-makinesi";

export const metadata = trCalculatorMetadata({
  category: "finans",
  slug: SLUG,
  title: "Netten Brüte Maaş Hesaplama 2026 | Net Maaş Brüt Ne Kadar?",
  description: "Netten brüte maaş hesaplama 2026: eline geçecek net maaştan gerekli brüt maaşı, SGK, gelir vergisi ve damga vergisi kesintileriyle birlikte hesaplayın. Ücretsiz.",
  keywords: ["netten brüte maaş hesaplama", "netten brüte hesaplama 2026", "net maaş brüt ne kadar", "netten brüte çevirme"],
  ogTitle: "Netten Brüte Maaş Hesaplama 2026",
});

const faqs: Faq[] = [
  { q: "Netten brüte nasıl hesaplanır?", a: "Brüt maaştan SGK işçi payı (%14), işsizlik sigortası (%1), asgari ücret istisnası düşülmüş gelir vergisi ve damga vergisi çıkarılarak net bulunur. Netten brüte hesaplamada bu işlem tersine çevrilir; hesap makinemiz istenen neti veren brütü otomatik bulur." },
  { q: "40.000 TL net maaşın brütü ne kadar?", a: "2026 Ocak ayı matrahına göre 40.000 TL net maaş yaklaşık 49.550 TL brüte karşılık gelir. Kesin tutar için hesap makinesini kullanın." },
  { q: "Net maaş neden yıl içinde düşer?", a: "Gelir vergisi kümülatif matrah üzerinden hesaplanır. Yıl içinde toplam matrah 190.000 TL'yi aştığında %20, 400.000 TL'yi aştığında %27 dilime geçilir ve aynı brütle alınan net maaş azalır." },
  { q: "Asgari ücretin brütü ne kadar?", a: "2026 brüt asgari ücret 33.030 TL, net asgari ücret 28.075,50 TL'dir." },
];

export default function Page() {
  return (
    <TrCalculatorShell
      category="finans"
      categoryName="Finans"
      slug={SLUG}
      name="Netten Brüte Maaş Hesap Makinesi"
      h1="Netten Brüte Maaş Hesaplama 2026"
      intro="Eline geçmesini istediğiniz net maaşı girin; 2026 vergi ve SGK oranlarıyla gereken brüt maaşı ve tüm kesintileri görün."
      calculator={<NettenBruteHesaplama />}
      faqs={faqs}
    >
      <h2>Netten Brüte Maaş Hesaplama Nasıl Yapılır?</h2>
      <p>İş görüşmelerinde teklifler çoğunlukla net, bordrolar ise brüt üzerinden konuşulur. Netten brüte hesaplamada; SGK işçi payı (%14), işsizlik sigortası işçi payı (%1), gelir vergisi ve damga vergisi dikkate alınır. 2022&apos;den beri asgari ücrete isabet eden gelir ve damga vergisi tüm çalışanlar için istisnadır; bu yüzden yalnızca asgari ücreti aşan kısım vergilendirilir.</p>
      <h2>2026 Gelir Vergisi Dilimleri (Ücretliler)</h2>
      <table><thead><tr><th>Yıllık matrah</th><th>Oran</th></tr></thead><tbody>
        <tr><td>190.000 TL&apos;ye kadar</td><td>%15</td></tr>
        <tr><td>190.000 – 400.000 TL</td><td>%20</td></tr>
        <tr><td>400.000 – 1.500.000 TL</td><td>%27</td></tr>
        <tr><td>1.500.000 – 5.300.000 TL</td><td>%35</td></tr>
        <tr><td>5.300.000 TL üzeri</td><td>%40</td></tr>
      </tbody></table>
      <p>Brütten nete hesaplama için <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi">maaş hesap makinesini</Link>, asgari ücret detayları için <Link href="/tr/hesap-makineleri/finans/asgari-ucret-hesap-makinesi">asgari ücret hesap makinesini</Link> kullanabilirsiniz.</p>
    </TrCalculatorShell>
  );
}

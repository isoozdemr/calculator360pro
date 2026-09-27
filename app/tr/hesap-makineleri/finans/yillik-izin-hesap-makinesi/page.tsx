import Link from "next/link";
import { TrCalculatorShell, trCalculatorMetadata, type Faq } from "@/components/calculators/tr/TrCalculatorShell";
import { YillikIzinHesaplama } from "@/components/calculators/tr/YillikIzinHesaplama";

const SLUG = "yillik-izin-hesap-makinesi";

export const metadata = trCalculatorMetadata({
  category: "finans",
  slug: SLUG,
  title: "Yıllık İzin Hesaplama 2026 | Kaç Gün İzin Hakkım Var?",
  description: "Yıllık izin hesaplama: işe giriş tarihiniz ve yaşınıza göre İş Kanunu'na göre kaç gün yıllık izin hakkınız olduğunu ve kullanılmayan izin ücretini hesaplayın.",
  keywords: ["yıllık izin hesaplama", "yıllık izin kaç gün", "kullanılmayan izin ücreti hesaplama", "yıllık izin süresi 2026"],
  ogTitle: "Yıllık İzin Hesaplama 2026",
});

const faqs: Faq[] = [
  { q: "Yıllık izin hakkı ne zaman başlar?", a: "İşe başladığınız tarihten itibaren deneme süresi dahil en az 1 yıl çalıştıktan sonra yıllık ücretli izin hakkı doğar." },
  { q: "5 yıl çalışan kaç gün izin kullanır?", a: "5 yıl (dahil) ile 15 yıl arası kıdemi olan işçi yılda 20 gün ücretli izin hakkına sahiptir." },
  { q: "Kullanılmayan yıllık izin yanar mı?", a: "Hayır. Kullanılmayan yıllık izinler sonraki yıllara devreder ve iş sözleşmesi sona erdiğinde ücreti ödenir. Zamanaşımı sözleşmenin bitiminden itibaren 5 yıldır." },
  { q: "Yıllık izin bölünebilir mi?", a: "Taraflar anlaşırsa izin, bir bölümü 10 günden az olmamak üzere en fazla üçe bölünebilir." },
];

export default function Page() {
  return (
    <TrCalculatorShell
      category="finans"
      categoryName="Finans"
      slug={SLUG}
      name="Yıllık İzin Hesap Makinesi"
      h1="Yıllık İzin Hesaplama 2026"
      intro="İşe giriş tarihinizi ve yaşınızı girin; İş Kanunu 53. maddeye göre yıllık ücretli izin gün sayınızı ve kullanılmayan izin ücretinizi görün."
      calculator={<YillikIzinHesaplama />}
      faqs={faqs}
    >
            <h2>Yıllık İzin Süreleri (İş Kanunu md. 53)</h2>
            <table><thead><tr><th>Kıdem</th><th>Yıllık izin</th></tr></thead><tbody>
              <tr><td>1 – 5 yıl (5 dahil değil)</td><td>14 gün</td></tr>
              <tr><td>5 – 15 yıl (15 dahil değil)</td><td>20 gün</td></tr>
              <tr><td>15 yıl ve üzeri</td><td>26 gün</td></tr>
            </tbody></table>
            <p>18 yaş ve altındaki işçilerle 50 yaş ve üzerindeki işçilere verilecek yıllık izin 20 günden az olamaz. İzin süreleri iş sözleşmesiyle artırılabilir, ancak azaltılamaz. İzin süresine denk gelen hafta tatili ve resmi tatiller izin süresinden sayılmaz.</p>
            <h2>Kullanılmayan İzin Ücreti</h2>
            <p>İş sözleşmesi herhangi bir nedenle sona erdiğinde kullanılmayan yıllık izin günlerinin ücreti, son brüt ücret üzerinden ödenir: <strong>brüt maaş / 30 × kullanılmayan gün</strong>. Örneğin 36.000 TL brüt maaşlı ve 10 gün kullanılmamış izni olan çalışana 12.000 TL brüt izin ücreti ödenir. İşten ayrılırken <Link href="/tr/hesap-makineleri/finans/kidem-tazminati-hesap-makinesi">kıdem tazminatınızı</Link> da hesaplayabilirsiniz.</p>
    </TrCalculatorShell>
  );
}

import Link from "next/link";
import { TrCalculatorShell, trCalculatorMetadata, type Faq } from "@/components/calculators/tr/TrCalculatorShell";
import { FazlaMesaiHesaplama } from "@/components/calculators/tr/FazlaMesaiHesaplama";

const SLUG = "fazla-mesai-hesap-makinesi";

export const metadata = trCalculatorMetadata({
  category: "finans",
  slug: SLUG,
  title: "Fazla Mesai Hesaplama 2026 | Saatlik Ücret ve %50 Zam",
  description: "Fazla mesai hesaplama 2026: brüt maaşınız ve fazla çalışma saatinizle %50 zamlı fazla mesai ücretinizi ve resmi tatil çalışma ücretinizi hesaplayın.",
  keywords: ["fazla mesai hesaplama", "fazla mesai ücreti hesaplama 2026", "saatlik ücret hesaplama", "bayram mesaisi hesaplama"],
  ogTitle: "Fazla Mesai Hesaplama 2026",
});

const faqs: Faq[] = [
  { q: "Fazla mesai saat ücreti nasıl hesaplanır?", a: "Aylık brüt maaş 225'e bölünerek saatlik ücret bulunur, bu tutar 1,5 ile çarpılır. Örneğin 36.000 TL brüt maaşta saatlik ücret 160 TL, fazla mesai saat ücreti 240 TL'dir." },
  { q: "Yılda en fazla kaç saat fazla mesai yapılabilir?", a: "İş Kanunu'na göre yıllık fazla çalışma süresi 270 saati geçemez ve işçinin yazılı onayı gerekir." },
  { q: "Fazla mesai yerine izin verilebilir mi?", a: "Evet. İşçi isterse her fazla çalışma saati için 1 saat 30 dakika serbest zaman kullanabilir; bu süre 6 ay içinde verilmelidir." },
  { q: "Bayramda çalışana kaç yevmiye ödenir?", a: "Genel tatil ve bayram günlerinde çalışan işçiye aylık ücretine ek olarak o gün için bir tam günlük ücret (toplamda çift yevmiye) ödenir." },
];

export default function Page() {
  return (
    <TrCalculatorShell
      category="finans"
      categoryName="Finans"
      slug={SLUG}
      name="Fazla Mesai Hesap Makinesi"
      h1="Fazla Mesai Hesaplama 2026"
      intro="Brüt maaşınızı ve fazla çalıştığınız saati girin; saatlik ücretinizi, %50 zamlı fazla mesai ücretinizi ve tatil günü ek ücretinizi görün."
      calculator={<FazlaMesaiHesaplama />}
      faqs={faqs}
    >
            <h2>Fazla Mesai Nasıl Hesaplanır?</h2>
            <p>Haftalık 45 saati aşan çalışmalar fazla mesaidir (İş Kanunu md. 41). Her bir fazla çalışma saati için normal saatlik ücretin <strong>%50 fazlası</strong> ödenir. Saatlik ücret, aylık brüt ücretin 225&apos;e bölünmesiyle bulunur (30 gün × 7,5 saat).</p>
            <p><strong>Formül:</strong> Fazla mesai ücreti = (brüt maaş / 225) × 1,5 × fazla mesai saati</p>
            <p><strong>Örnek:</strong> 45.000 TL brüt maaşlı bir çalışanın saatlik ücreti 200 TL&apos;dir. Ay içinde 10 saat fazla mesai yaptığında 200 × 1,5 × 10 = <strong>3.000 TL brüt</strong> fazla mesai ücreti alır.</p>
            <h2>Resmi Tatil ve Bayram Çalışması</h2>
            <p>Ulusal bayram ve genel tatil günlerinde çalışan işçiye, o gün için aylık ücretine ek olarak <strong>bir günlük ücreti</strong> daha ödenir. Yıllık fazla mesai 270 saati geçemez. Fazla mesai ücretinizin netini görmek için <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi">maaş hesap makinesini</Link> kullanabilirsiniz.</p>
    </TrCalculatorShell>
  );
}

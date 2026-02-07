import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { TurkeyTipCalculator } from "@/components/calculators/tr";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";

export const metadata: Metadata = {
  title: "Bahsis Hesap Makinesi 2026 - Restoran Bahsis Hesaplama",
  description: "Restoran fişi üzerinden bahşiş ve kişi başı ödeme hesaplayın. %10, %15, %20 veya özel tutar. Ücretsiz bahşiş hesaplayıcı.",
  keywords: [
    "bahsis hesaplama",
    "bahsis hesap makinesi",
    "restoran bahsis",
    "kisi basi odeme hesaplama",
    "fis uzerinden bahsis",
    "yuzde bahsis hesaplama",
    "grup yemek odeme",
    "bahsis ne kadar verilir",
    "bahsis hesaplayici",
    "servis ucreti hesaplama",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/finans/bahsis-hesap-makinesi`,
    languages: { "en": `${SITE_URL}/calculators/finance/tip-calculator`, "tr": `${SITE_URL}/tr/hesap-makineleri/finans/bahsis-hesap-makinesi` },
  },
  openGraph: { title: "Bahsis Hesap Makinesi 2026", url: `${SITE_URL}/tr/hesap-makineleri/finans/bahsis-hesap-makinesi`, locale: "tr_TR", siteName: "Calculator360Pro" },
};

const faqs = [
  { question: "Bahşiş nasıl hesaplanır?", answer: "Fiş tutarı üzerinden yüzde seçerek (örneğin %10, %15, %20) veya tutar girerek hesaplanır. Kişi sayısına bölerek kişi başı pay da görüntülenir." },
  { question: "Ne kadar bahşiş verilir?", answer: "Ülkeye ve duruma göre değişir. Türkiye'de restoranlarda %5-10 yaygın; ABD'de %15-20 standart. Hizmet kalitesine göre artırıp azaltabilirsiniz." },
  { question: "KDV dahil mi hesaplanmalı?", answer: "Çoğu uygulamada fiş tutarı (KDV dahil) baz alınır. İsterseniz KDV hariç tutarı girip ona göre bahşiş hesaplayabilirsiniz; genelde KDV dahil üzerinden verilir." },
  { question: "Kişi başı ödeme nasıl bulunur?", answer: "Toplam (fiş + bahşiş) kişi sayısına bölünür. Grup yemeklerinde herkes eşit pay ödemek için bu değeri kullanır." },
  { question: "Bahşiş vergiye tabi mi?", answer: "Türkiye'de çalışanın aldığı bahşiş gelir niteliğinde olabilir; detaylar vergi mevzuatına göre değişir. Hesaplayıcı sadece tutar hesaplar; vergi danışmanlığı vermez." },
];

const howToSteps = [
  { name: "Fiş tutarını girin", text: "Restoran veya hizmet fişi toplam tutarını girin." },
  { name: "Bahşiş yüzdesi veya tutar seçin", text: "Yüzde (%10, %15, %20) veya özel tutar seçin." },
  { name: "Kişi sayısı (isteğe bağlı)", text: "Grup yemeğinde kişi sayısını girerek kişi başı payı görün." },
  { name: "Toplam ödemeyi görün", text: "Fiş + bahşiş toplamı ve kişi başı düşen tutarı inceleyin." },
];

export default function BahsisPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Bahsis Hesap Makinesi"
        description="Restoran fişi üzerinden bahşiş ve kişi başı ödeme hesaplama aracı"
        slug="bahsis-hesap-makinesi"
        categorySlug="finans"
        categoryName="Finans"
        dateModified={DATA_VERSION.lastUpdated}
        category="finance"
        faqs={faqs}
        howToName="Bahşiş Hesap Makinesi Nasıl Kullanılır?"
        howToDescription="Bahşiş tutarı hesaplamak için adımlar."
        howToSteps={howToSteps}
      />
      <div className="min-h-screen bg-[#f8fafc] py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="mb-6 text-sm text-[#64748b]">
            <ol className="flex items-center space-x-2">
              <li><Link href="/tr" className="hover:text-[#2563eb]">Ana Sayfa</Link></li>
              <li>/</li>
              <li><Link href="/tr/hesap-makineleri" className="hover:text-[#2563eb]">Hesap Makineleri</Link></li>
              <li>/</li>
              <li><Link href="/tr/hesap-makineleri/finans" className="hover:text-[#2563eb]">Finans</Link></li>
              <li>/</li>
              <li className="text-[#1e293b] font-medium">Bahsis</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Bahsis Hesap Makinesi</h1>
          <p className="text-[#64748b] mb-4">
            Restoran veya hizmet fişi üzerinden bahşiş tutarını ve kişi başı ödemeyi hızlıca hesaplayın. Fiş tutarını ve istediğiniz bahşiş yüzdesini (veya tutarını) girerek toplam ödeme ve kişi başı payı görürsünüz. Grup yemeklerinde herkesin eşit pay vermesi için çok kullanışlıdır.
          </p>
          <p className="text-[#64748b] mb-8">
            Bahşiş oranı ülke ve hizmete göre değişir; araç farklı yüzdeleri denemenize olanak tanır. Hizmet kalitesine göre %10, %15, %20 veya özel bir tutar seçebilirsiniz.
          </p>
          <TurkeyTipCalculator />
          <div className="mt-12 bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
            <h2 className="text-xl font-bold text-[#1e293b] mb-4">Sıkça Sorulan Sorular</h2>
            {faqs.map((f, i) => (
              <div key={i} className="mb-4"><h3 className="font-semibold text-[#1e293b]">{f.question}</h3><p className="text-sm text-[#64748b]">{f.answer}</p></div>
            ))}
            <p className="mt-4 text-[#64748b]">
              İlgili hesap makineleri:{" "}
              <Link href="/tr/hesap-makineleri/matematik/yuzde-hesap-makinesi" className="text-[#2563eb] hover:underline">Yüzde Hesap Makinesi</Link>,{" "}
              <Link href="/tr/hesap-makineleri/matematik/indirim-hesap-makinesi" className="text-[#2563eb] hover:underline">İndirim Hesap Makinesi</Link>,{" "}
              <Link href="/tr/hesap-makineleri/finans/butce-hesap-makinesi" className="text-[#2563eb] hover:underline">Bütçe Hesap Makinesi</Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

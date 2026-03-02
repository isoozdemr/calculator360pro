import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { FractionCalculator } from "@/components/calculators/FractionCalculator";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";

export const metadata: Metadata = {
  title: "Kesir Hesap Makinesi 2026 - Toplama Çarpma Bölme | Ücretsiz",
  description: "Kesir hesap makinesi 2026: Kesir toplama, çıkarma, çarpma ve bölme. Sadeleştirme ve ondalık dönüşüm. Öğrenciler ve öğretmenler için ücretsiz online kesir hesaplama; anında sonuç.",
  keywords: [
    "kesir hesap makinesi",
    "kesir toplama",
    "kesir çarpma",
    "kesir bölme",
    "kesir sadeleştirme",
    "kesir hesaplama",
    "ondalık kesir",
    "payda eşitleme",
    "matematik kesir",
    "online kesir hesaplama",
    "kesir işlemleri",
    "basit kesir",
    "bileşik kesir",
    "OBEB OKEK kesir",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/matematik/kesir-hesap-makinesi`,
    languages: { en: `${SITE_URL}/calculators/math/fraction-calculator`, tr: `${SITE_URL}/tr/hesap-makineleri/matematik/kesir-hesap-makinesi`, "x-default": `${SITE_URL}/calculators/math/fraction-calculator` },
  },
  openGraph: {
    title: "Kesir Hesap Makinesi 2026 - Toplama Çarpma Bölme | Ücretsiz",
    description: "Kesir toplama, çıkarma, çarpma, bölme ve sadeleştirme. Ondalık sonuç. Öğrenciler ve öğretmenler için ücretsiz online kesir hesaplama aracı.",
    url: `${SITE_URL}/tr/hesap-makineleri/matematik/kesir-hesap-makinesi`,
    locale: "tr_TR",
    siteName: "Calculator360Pro",
    type: "website",
  },
};

const faqs = [
  { question: "İki kesir nasıl toplanır?", answer: "Paydalar eşit değilse önce ortak payda bulunur (OKEK). Her kesir ortak paydaya çevrilir, paylar toplanır, payda aynı kalır. Örneğin 1/2 + 1/3 = 3/6 + 2/6 = 5/6." },
  { question: "Kesir nasıl sadeleştirilir?", answer: "Pay ve paydanın en büyük ortak böleni (OBEB) bulunur; pay ve payda buna bölünür. Örneğin 8/12 için OBEB(8,12)=4, sadeleşmiş hali 2/3." },
  { question: "Kesir ondalık sayıya nasıl çevrilir?", answer: "Pay, paydaya bölünür. Örneğin 3/4 = 3 ÷ 4 = 0,75. Devirli ondalıklar için bölme işlemi yeterli basamakla yapılır." },
  { question: "Kesirlerde çarpma nasıl yapılır?", answer: "Paylar çarpılır, paydalar çarpılır. (a/b) × (c/d) = (a×c)/(b×d). Örneğin 2/3 × 4/5 = 8/15. Mümkünse sonuç sadeleştirilir." },
  { question: "Kesirlerde bölme nasıl yapılır?", answer: "İkinci kesir ters çevrilir (pay ve payda yer değiştirir), sonra çarpma yapılır. (a/b) ÷ (c/d) = (a/b) × (d/c). Örneğin 2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6." },
  { question: "Karma kesir nedir?", answer: "Tam kısım ve basit kesrin toplamıdır (örn. 2 1/3 = 2 + 1/3 = 7/3). Hesap makinesinde önce bileşik kesre çevirip işlem yapabilirsiniz." },
];

const howToSteps = [
  { name: "Kesirleri girin", text: "İki kesrin pay ve paydalarını ilgili alanlara yazın." },
  { name: "İşlemi seçin", text: "Toplama, çıkarma, çarpma veya bölme seçin." },
  { name: "Hesapla", text: "Sonucu kesir ve ondalık olarak görün." },
];

export default function KesirHesapMakinesiPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Kesir Hesap Makinesi"
        description="Kesir toplama, çıkarma, çarpma, bölme ve sadeleştirme aracı"
        slug="kesir-hesap-makinesi"
        categorySlug="matematik"
        categoryName="Matematik"
        dateModified={DATA_VERSION.lastUpdated}
        category="math"
        faqs={faqs}
        howToName="Kesir Hesap Makinesi Nasıl Kullanılır?"
        howToDescription="Kesir hesaplamak için adımlar."
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
              <li><Link href="/tr/hesap-makineleri/matematik" className="hover:text-[#2563eb]">Matematik</Link></li>
              <li>/</li>
              <li className="text-[#1e293b] font-medium">Kesir Hesap Makinesi</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Kesir Hesap Makinesi</h1>
          <p className="text-[#64748b] mb-6">Kesir toplama, çıkarma, çarpma, bölme ve sadeleştirme. Ondalık sonuç.</p>
          <FractionCalculator locale="tr" />
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Kesir Hesap Makinesi Nedir?</h2>
              <p className="text-[#64748b] mb-4">
                Kesir hesap makinesi, iki kesir üzerinde toplama, çıkarma, çarpma ve bölme işlemlerini yapan,
                sonucu sadeleştirilmiş kesir ve ondalık sayı olarak gösteren ücretsiz araçtır. Öğrenciler
                ödev ve sınavlarda, öğretmenler ders hazırlığında kullanabilir.
              </p>
              <p className="text-[#64748b] mb-4">
                Pay ve paydaları girdikten sonra işlemi seçip hesapla dediğinizde sonuç hem kesir (sadeleştirilmiş)
                hem de ondalık formatta gösterilir. Toplama ve çıkarmada paydalar eşit değilse otomatik ortak
                payda hesaplanır.
              </p>
              <h3 className="text-xl font-bold text-[#1e293b] mt-6 mb-3">Kesir Türleri ve Terimler</h3>
              <p className="text-[#64748b] mb-4">
                Basit kesir, payı paydasından küçük olan kesirdir (ör. 3/4). Bileşik kesir payı paydasına eşit veya büyük olan kesirdir (ör. 5/4). Tam sayı ve basit kesrin bir arada yazıldığı ifadeye karma kesir denir (ör. 2 1/3). Pay, kesir çizgisinin üstündeki; payda ise altındaki sayıdır. Payda bir bütünün kaç eşit parçaya bölündüğünü, pay ise bu parçalardan kaçının alındığını gösterir. Kesir hesaplama yaparken bu terimleri bilmek işlemleri anlamanıza yardımcı olur.
              </p>
              <h3 className="text-xl font-bold text-[#1e293b] mt-6 mb-3">Kesir Toplama ve Çıkarma Nasıl Yapılır?</h3>
              <p className="text-[#64748b] mb-4">
                Paydalar eşitse doğrudan paylar toplanır veya çıkarılır; payda aynı kalır. Örneğin 2/5 + 1/5 = 3/5. Paydalar farklıysa önce ortak payda (OKEK – en küçük ortak kat) bulunur. Her kesir bu ortak paydaya genişletilir, sonra paylar toplanır veya çıkarılır. Örnek: 1/2 + 1/3 için ortak payda 6; 1/2 = 3/6, 1/3 = 2/6, toplam 5/6. Bu kesir hesap makinesi payda eşitleme işlemini otomatik yapar; siz yalnızca pay ve paydaları girin.
              </p>
              <h3 className="text-xl font-bold text-[#1e293b] mt-6 mb-3">Kesir Çarpma ve Bölme Kuralları</h3>
              <p className="text-[#64748b] mb-4">
                Kesirlerde çarpma: Paylar çarpılır, paydalar çarpılır. (a/b) × (c/d) = (a×c)/(b×d). Örneğin 2/3 × 4/5 = 8/15. Sonuç sadeleştirilebiliyorsa (8 ve 15’in ortak böleni yok, bu örnekte sadeleşmez) en sade hali yazılır. Kesirlerde bölme: İkinci kesir ters çevrilir (pay ile payda yer değiştirir), ardından çarpma yapılır. (a/b) ÷ (c/d) = (a/b) × (d/c). Örnek: 2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6 (sadeleştirilmiş). Online kesir hesaplama aracımız bu işlemleri anında yapar.
              </p>
              <h3 className="text-xl font-bold text-[#1e293b] mt-6 mb-3">Sadeleştirme ve OBEB</h3>
              <p className="text-[#64748b] mb-4">
                Bir kesri sadeleştirmek, pay ve paydayı ortak bölenlere bölmek demektir. En sade hale getirmek için pay ve paydanın OBEB’i (en büyük ortak bölen) alınır; her ikisi de bu sayıya bölünür. Örneğin 8/12 için OBEB(8, 12) = 4; 8÷4 = 2, 12÷4 = 3; sadeleşmiş kesir 2/3. Hesap makinesi sonucu her zaman sadeleştirilmiş ve ondalık formatta gösterir; böylece hem kesir hem ondalık cevabı tek ekranda görürsünüz.
              </p>
              <h3 className="text-xl font-bold text-[#1e293b] mt-6 mb-3">Kesirden Ondalık Sayıya Geçiş</h3>
              <p className="text-[#64748b] mb-4">
                Kesri ondalık sayıya çevirmek için pay, paydaya bölünür. 3/4 = 3 ÷ 4 = 0,75. Devirli ondalık çıkabilir (ör. 1/3 = 0,333…); hesap makinesi yeterli basamakla gösterir. Ondalık kesir hesaplama tarafında da aynı araç size yardımcı olur. Günlük hayatta oranlar, tarifler ve yüzdeler sıklıkla kesir ve ondalık ile ifade edilir; <Link href="/tr/hesap-makineleri/matematik/yuzde-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">yüzde hesap makinesi</Link> ile birlikte kullanabilirsiniz.
              </p>
              <h3 className="text-xl font-bold text-[#1e293b] mt-6 mb-3">Sık Yapılan Hatalar ve İpuçları</h3>
              <p className="text-[#64748b] mb-4">
                Yaygın hata: Paydaları eşitlemeden payları toplamak (1/2 + 1/3 = 2/5 yanlıştır; doğrusu 5/6). Bir diğeri: Bölmede ikinci kesri ters çevirmeyi unutmak. İpucu: Karma kesir kullanıyorsanız önce bileşik kesre çevirin (2 1/3 = 7/3). Sonuçları mümkünse sadeleştirin; sınavlarda en sade hal genelde istenir. Matematik kesir konusu ilköğretimden liseye kadar tekrarlanır; bu ücretsiz kesir hesaplama aracı ödev ve tekrar için idealdir.
              </p>
              <h3 className="text-xl font-bold text-[#1e293b] mt-6 mb-3">Örnek Hesaplamalar</h3>
              <p className="text-[#64748b] mb-4">
                1/4 + 2/4 = 3/4 (paydalar eşit, paylar toplanır). 1/2 + 1/4 için ortak payda 4: 1/2 = 2/4, 2/4 + 1/4 = 3/4. 3/5 − 1/5 = 2/5. 2/3 × 3/4 = 6/12 = 1/2 (sadeleştirme sonrası). 1/2 ÷ 2/3 = 1/2 × 3/2 = 3/4. Bu örnekler kesir işlemlerinin mantığını gösterir; hesap makinesi ile aynı sonuçları anında alırsınız.
              </p>
              <h3 className="text-xl font-bold text-[#1e293b] mt-6 mb-3">Kesir Hesaplama Nerede Kullanılır?</h3>
              <p className="text-[#64748b] mb-4">
                Tariflerde malzeme oranları (1/2 bardak, 2/3 çorba kaşığı), inşaat ve ölçümde (metrenin kesirleri), oran ve yüzde problemlerinde, olasılık ve istatistikte kesirler sıkça geçer. İş hayatında kar payları, zaman dilimleri ve performans oranları da kesir veya ondalık ile ifade edilir. Kesir hesap makinesi bu tür günlük ve mesleki hesaplamalarda hızlı sonuç almanızı sağlar. İlgili diğer araçlar: <Link href="/tr/hesap-makineleri/matematik/indirim-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">indirim hesap makinesi</Link> (yüzde indirim), <Link href="/tr/hesap-makineleri/matematik/yuzde-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">yüzde hesap makinesi</Link> (oran ve artış/azalış).
              </p>
              <p className="text-[#64748b]">
                <Link href="/tr/hesap-makineleri/matematik/yuzde-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Yüzde hesap makinesi</Link>,{" "}
                <Link href="/tr/hesap-makineleri/matematik/bilimsel-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">bilimsel hesap makinesi</Link>,{" "}
                <Link href="/tr/hesap-makineleri/egitim/not-ortalamasi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">not ortalaması hesap makinesi</Link>,{" "}
                <Link href="/tr/hesap-makineleri/matematik/birim-cevirici" className="text-[#2563eb] hover:underline font-medium">birim çevirici</Link>.
              </p>
            </div>
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-xl font-bold text-[#1e293b] mb-4">Sıkça Sorulan Sorular</h2>
              {faqs.map((f, i) => (
                <div key={i} className="mb-4"><h3 className="font-semibold text-[#1e293b]">{f.question}</h3><p className="text-sm text-[#64748b]">{f.answer}</p></div>
              ))}
            </div>
          </div>
          <section className="mt-12">
            <RelatedCalculatorsTR categorySlug="matematik" currentSlug="kesir-hesap-makinesi" maxResults={6} />
          </section>
        </div>
      </div>
    </>
  );
}

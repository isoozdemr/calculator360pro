import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { CalculatorDisclaimer } from "@/components/calculators/CalculatorDisclaimer";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { EmlakVergisiHesaplama } from "@/components/calculators/tr/EmlakVergisiHesaplama";

export const metadata: Metadata = {
  title: "Emlak Vergisi Hesaplama 2026 | Yıllık Emlak Vergisi Hesap Makinesi",
  description:
    "Türkiye'de emlak vergisi hesaplama. Gayrimenkul değeri ve vergi oranına göre yıllık emlak verginizi hesaplayın. Konut ve işyeri oranları. Ücretsiz emlak vergisi hesap makinesi 2026.",
  keywords: [
    "emlak vergisi hesaplama",
    "emlak vergisi 2026",
    "yıllık emlak vergisi",
    "gayrimenkul vergisi hesaplama",
    "emlak vergisi oranları",
    "konut vergisi hesaplama",
    "emlak vergisi ne zaman ödenir",
    "emlak vergisi hesap makinesi",
    "taşınmaz vergisi",
    "bina vergisi hesaplama",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/finans/emlak-vergisi-hesap-makinesi`,
    languages: {
      en: `${SITE_URL}/calculators/finance/tax-calculator`,
      tr: `${SITE_URL}/tr/hesap-makineleri/finans/emlak-vergisi-hesap-makinesi`,
      "x-default": `${SITE_URL}/tr/hesap-makineleri/finans/emlak-vergisi-hesap-makinesi`,
    },
  },
  openGraph: {
    title: "Emlak Vergisi Hesaplama 2026 | Calculator360Pro",
    description: "Gayrimenkul değeri ve vergi oranına göre yıllık emlak verginizi hesaplayın. Konut ve işyeri oranları.",
    url: `${SITE_URL}/tr/hesap-makineleri/finans/emlak-vergisi-hesap-makinesi`,
    type: "website",
    locale: "tr_TR",
    siteName: "Calculator360Pro",
  },
};

const faqs = [
  {
    question: "Emlak vergisi nasıl hesaplanır?",
    answer:
      "Emlak vergisi, gayrimenkulün vergi değeri (genelde belediyenin belirlediği emlak vergisi değeri veya piyasa değerine yakın bir değer) üzerinden yıllık oranla hesaplanır. Formül: Yıllık emlak vergisi = Emlak vergi değeri × Vergi oranı. Konutlar için oran genelde %0,1–0,2, işyerleri için daha yüksek olabilir. Belediyeler oranları yıllık belirler.",
  },
  {
    question: "Emlak vergisi ne zaman ödenir?",
    answer:
      "Türkiye'de emlak vergisi yılda iki eşit taksitte ödenir. İlk taksit Mart ayında, ikinci taksit Kasım ayında son ödeme tarihine kadar ödenir. Tarihler belediyeden belediyeye birkaç gün farklılık gösterebilir. Gecikme halinde gecikme faizi uygulanır.",
  },
  {
    question: "Emlak vergisi oranları 2026'da ne kadar?",
    answer:
      "Emlak vergisi oranları belediyeler tarafından belirlenir; 2026 yılında konutlar için genelde %0,1 ile %0,2 arasında, işyeri ve diğer binalar için %0,4–0,6 civarı olabilir. Büyükşehirlerde oranlar farklı uygulanabilir. Kesin oran için ilgili belediyenin vergi dairelerine veya web sitesine bakın.",
  },
  {
    question: "Emlak vergisi kimler öder?",
    answer:
      "Emlak vergisini, taşınmazın maliki (mülk sahibi) veya tapuya göre hak sahibi öder. Yıl içinde mülk el değiştirdiyse, o yılın vergisi genelde dönemsel olarak eski ve yeni malik arasında paylaştırılır veya tapu devir tarihine göre hesaplanır.",
  },
  {
    question: "Emlak vergisi değeri ile piyasa değeri aynı mı?",
    answer:
      "Hayır. Emlak vergisi değeri, belediyenin vergi amaçlı tespit ettiği değerdir; genelde piyasa değerinden düşük tutulur. Piyasa değeri ise alım-satım fiyatıdır. Vergi hesaplamasında emlak vergisi değeri (beyan veya belediye tespiti) kullanılır. Bu hesap makinesi tahmini için girdiğiniz değeri kullanır.",
  },
];

const howToSteps = [
  { name: "Emlak değerini girin", text: "Gayrimenkulün vergi değerini veya tahmini piyasa değerini TL olarak girin." },
  { name: "Vergi oranını seçin", text: "Konut, işyeri veya diğer için uygun oranı seçin veya özel oran yazın." },
  { name: "Hesapla butonuna tıklayın", text: "Yıllık tahmini emlak vergisi tutarını görün." },
  { name: "Sonucu yorumlayın", text: "Kesin tutar için belediyenizin oran ve değer bilgisini kullanın." },
];

export default function EmlakVergisiHesapMakinesiPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Emlak Vergisi Hesap Makinesi 2026"
        description="Gayrimenkul değeri ve vergi oranına göre yıllık emlak vergisi hesaplama. Konut ve işyeri oranları."
        slug="emlak-vergisi-hesap-makinesi"
        categorySlug="finans"
        categoryName="Finans"
        dateModified="2026-02-01"
        category="finance"
        faqs={faqs}
        howToName="Emlak Vergisi Hesap Makinesi Nasıl Kullanılır?"
        howToDescription="Emlak vergisi hesaplamak için adımlar."
        howToSteps={howToSteps}
      />

      <div className="min-h-screen bg-[#f8fafc]">
        <section className="bg-gradient-to-br from-[#1e293b] to-[#334155] text-white py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center flex-wrap gap-x-2 text-sm text-[#94a3b8]">
                <li><Link href="/tr" className="hover:text-white transition-colors">Ana Sayfa</Link></li>
                <li><span className="mx-1">/</span></li>
                <li><Link href="/tr/hesap-makineleri" className="hover:text-white transition-colors">Hesap Makineleri</Link></li>
                <li><span className="mx-1">/</span></li>
                <li><Link href="/tr/hesap-makineleri/finans" className="hover:text-white transition-colors">Finans</Link></li>
                <li><span className="mx-1">/</span></li>
                <li className="text-white font-medium">Emlak Vergisi Hesap Makinesi</li>
              </ol>
            </nav>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                  Emlak Vergisi Hesaplama 2026
                </h1>
                <p className="text-lg text-[#94a3b8] max-w-2xl">
                  Gayrimenkul değeri ve vergi oranına göre yıllık emlak verginizi tahmini hesaplayın. Konut ve işyeri oranları.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <EmlakVergisiHesaplama />
            <CalculatorDisclaimer category="finance" locale="tr" />
          </div>
        </section>

        <section className="py-8 bg-white border-t border-[#e2e8f0]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-6">Emlak Vergisi Hesap Makinesi Nasıl Kullanılır?</h2>
            <ol className="space-y-4 list-decimal list-inside text-[#475569]">
              <li><strong className="text-[#1e293b]">Emlak değerini girin:</strong> Vergi değeri veya tahmini değeri TL olarak yazın.</li>
              <li><strong className="text-[#1e293b]">Vergi oranını seçin:</strong> Konut veya işyeri için uygun oranı seçin.</li>
              <li><strong className="text-[#1e293b]">Hesapla:</strong> Yıllık tahmini emlak vergisini görün.</li>
              <li><strong className="text-[#1e293b]">Kesin tutar:</strong> Belediyenize danışın.</li>
            </ol>
          </div>
        </section>

        <section className="py-12 bg-[#f8fafc]">
          <div className="container mx-auto px-4 max-w-4xl">
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-6">Emlak Vergisi Nedir?</h2>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Emlak vergisi, Türkiye&apos;de taşınmazlar (bina, arsa, işyeri) üzerinden alınan yıllık bir belediye vergisidir. 1319 sayılı Emlak Vergisi Kanunu kapsamında belediyeler tarafından tahsil edilir. Vergi, taşınmazın vergi değeri üzerinden uygulanan oranla hesaplanır. Konutlar için oran genelde düşük (%0,1–0,2), ticari binalar ve arsalar için daha yüksek olabilir. Her yıl Mart ve Kasım&apos;da iki taksit halinde ödenir.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">Emlak Vergisi Nasıl Hesaplanır?</h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Yıllık emlak vergisi = Emlak vergi değeri × Vergi oranı. Emlak vergi değeri, belediyenin tespit ettiği veya beyan edilen değerdir; piyasa değerinden farklıdır. Oranlar belediye meclisi kararıyla belirlenir; büyükşehir ve ilçe belediyelerinde farklı uygulanabilir. Bu hesap makinesi, girdiğiniz değer ve seçtiğiniz oranla tahmini yıllık vergiyi hesaplar. Kesin tutar için ilgili belediyenin vergi birimine veya e-beyan sistemine bakmanız gerekir.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">Emlak Vergisi Oranları 2026</h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Konutlar için genelde %0,1 ile %0,2 arasında, işyeri ve diğer binalar için %0,4–0,6 civarı oranlar uygulanır. Büyükşehirlerde konut oranı biraz daha yüksek olabilir. Arsa ve arazide oran farklı tespit edilebilir. Oranlar yıllık güncellenebildiği için 2026 kesin oranları için belediyenizi kontrol edin. <Link href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Gelir vergisi hesaplama</Link> için vergi hesap makinemizi de kullanabilirsiniz.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">Emlak Vergisi Ne Zaman Ödenir?</h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Emlak vergisi yılda iki eşit taksitte ödenir. İlk taksit Mart ayında, ikinci taksit Kasım ayında son ödeme tarihine kadar yatırılır. Ödeme tarihleri belediyeden belediyeye birkaç gün değişebilir. Gecikmede gecikme faizi uygulanır; bu nedenle zamanında ödeme yapmak önemlidir. Ödemeler belediye veznesi, banka veya e-devlet üzerinden yapılabilir.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">Kimler Emlak Vergisi Öder?</h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Taşınmazın maliki (tapuda kayıtlı mülk sahibi) emlak vergisi mükellefidir. Yıl içinde mülk satıldıysa, o yılın vergisi genelde devir tarihine göre alıcı ve satıcı arasında paylaştırılır veya tek tarafa yansıtılır. Kira geliri elde eden malik, emlak vergisini kendisi öder; kiracı ödemez. Birden fazla malik varsa (hisseli mülkiyet), vergi hisselere göre dağıtılabilir.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">Vergi Değeri ile Piyasa Değeri Farkı</h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Emlak vergisi değeri, belediyenin vergi amaçlı tespit ettiği değerdir; genelde satış fiyatlarından (piyasa değeri) düşük tutulur. Piyasa değeri alım-satımda oluşan fiyattır. Vergi hesaplamasında yalnızca emlak vergisi değeri kullanılır. Değer itirazları belirli sürelerde vergi dairesine veya belediyeye yapılabilir. Bu araçta tahmini hesaplama için girdiğiniz değeri kullanıyoruz; kesin vergi için belediyenin tespit ettiği değer geçerlidir.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">Örnek Hesaplamalar</h3>
              <p className="text-[#64748b] mb-2">
                <strong>Örnek 1 – Konut:</strong> Vergi değeri 2.000.000 TL olan bir konut için %0,1 oranında yıllık emlak vergisi = 2.000.000 × 0,001 = 2.000 TL. İki taksitte ödeneceği için her taksit 1.000 TL olur.
              </p>
              <p className="text-[#64748b] mb-2">
                <strong>Örnek 2 – İşyeri:</strong> Vergi değeri 5.000.000 TL olan bir işyeri için %0,4 oranında yıllık emlak vergisi = 5.000.000 × 0,004 = 20.000 TL. Mart ve Kasım&apos;da 10.000 TL olmak üzere iki taksit ödenir.
              </p>
              <p className="text-[#64748b] mb-4">
                <strong>Örnek 3 – Büyükşehir konutu:</strong> Vergi değeri 3.500.000 TL ve oran %0,2 ise yıllık vergi = 3.500.000 × 0,002 = 7.000 TL. Bu hesap makinesinde değer ve oranı girerek kendi senaryonuzu hesaplayabilirsiniz.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">Emlak Vergisi Muafiyet ve İstisnalar</h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Bazı taşınmazlar emlak vergisinden muaf veya indirimli olabilir. Örneğin kamu hizmetine ayrılmış binalar, bazı eğitim ve sağlık tesisleri, belirli koşullarda engelli vatandaşların tek konutu gibi durumlarda muafiyet veya indirim uygulanabilir. Detaylar 1319 sayılı Kanun ve belediye uygulamalarına göre değişir. Muafiyet talep edecekseniz belediyenize başvurmanız ve gerekli belgeleri sunmanız gerekir. Bu hesap makinesi muafiyet sonrası tutarı hesaplamaz; genel oranlara göre tahmin verir.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">Ödeme Yöntemleri ve Gecikme Faizi</h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Emlak vergisi belediye veznesi, anlaşmalı bankalar, e-devlet üzerinden veya belediyenin online ödeme sayfasından yatırılabilir. Ödeme süresi içinde yatırılmazsa gecikme faizi uygulanır; bu nedenle tarihleri takip etmek ve mümkünse otomatik ödeme veya hatırlatıcı kullanmak faydalıdır. Birden fazla taşınmazınız varsa her biri için ayrı vergi tahakkuk eder; toplu ödeme imkânı olan belediyelerde tek seferde ödeyebilirsiniz.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">Yeni Mülk Aldıysanız</h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Yıl içinde taşınmaz satın aldıysanız, o yılın emlak vergisi genelde tapu devir tarihine göre dönemsel hesaplanır veya alıcıya yansıtılır. Satış sözleşmesinde vergi payı bazen alıcı ve satıcı arasında belirtilir. İlk yıl tahakkuknameleri gecikebileceği için belediyeden veya e-beyan sisteminden kontrol etmeniz iyi olur. <Link href="/tr/hesap-makineleri/finans/konut-kredisi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Konut kredisi hesap makinesi</Link> ile mortgage maliyetinizi hesaplarken yıllık emlak vergisini de bütçenize ekleyebilirsiniz.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">İpuçları ve Sık Yapılan Hatalar</h3>
              <ul className="list-disc list-inside text-[#64748b] space-y-2 mb-6">
                <li>Ödeme tarihlerini kaçırmayın; gecikme faizi uygulanır.</li>
                <li>Vergi değeri tespitine itiraz sürelerini takip edin.</li>
                <li>Konut ve işyeri oranları farklıdır; doğru oranı seçin.</li>
                <li>Yeni aldığınız taşınmazda ilk yıl vergi dönemsel olabilir; belediyeden bilgi alın.</li>
                <li>Piyasa değeri ile vergi değerini karıştırmayın; vergi değeri genelde daha düşüktür.</li>
                <li>Birden fazla taşınmazınız varsa hepsini ayrı ayrı kontrol edin; bazı belediyeler tek beyanla toplu ödeme imkânı sunar.</li>
              </ul>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">İlgili Araçlar</h3>
              <ul className="list-disc list-inside text-[#64748b] space-y-2">
                <li><Link href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Vergi Hesap Makinesi</Link> – Gelir vergisi</li>
                <li><Link href="/tr/hesap-makineleri/finans/konut-kredisi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Konut Kredisi Hesap Makinesi</Link> – Mortgage hesaplama</li>
                <li><Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Maaş Hesap Makinesi</Link> – Brüt net maaş</li>
                <li><Link href="/tr/hesap-makineleri/finans" className="text-[#2563eb] hover:underline font-medium">Finans Hesap Makineleri</Link> – Tüm araçlar</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="py-12 bg-white border-t border-[#e2e8f0]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-6">Sıkça Sorulan Sorular</h2>
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

        <section className="py-12 bg-[#f8fafc] border-t border-[#e2e8f0]">
          <div className="container mx-auto px-4 max-w-4xl">
            <RelatedCalculatorsTR categorySlug="finans" currentSlug="emlak-vergisi-hesap-makinesi" maxResults={6} />
          </div>
        </section>
      </div>
    </>
  );
}

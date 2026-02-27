import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { CalculatorDisclaimer } from "@/components/calculators/CalculatorDisclaimer";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { PrimGunuHesaplama } from "@/components/calculators/tr/PrimGunuHesaplama";

export const metadata: Metadata = {
  title: "Prim Günü Hesaplama | SGK Prim Günü Hesap Makinesi",
  description:
    "SGK prim günü hesaplama. Tarih aralığına göre toplam prim günü sayısını hesaplayın. Emeklilik için kaç gün prim ödediğinizi tahmini öğrenin. Ücretsiz prim günü hesap makinesi.",
  keywords: [
    "prim günü hesaplama",
    "SGK prim günü",
    "kaç gün prim",
    "emeklilik prim günü",
    "prim günü hesap makinesi",
    "sigorta prim günü",
    "emeklilik için kaç gün",
    "prim ödeme günü hesaplama",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/finans/prim-gunu-hesap-makinesi`,
    languages: {
      en: `${SITE_URL}/calculators/finance/retirement-calculator`,
      tr: `${SITE_URL}/tr/hesap-makineleri/finans/prim-gunu-hesap-makinesi`,
      "x-default": `${SITE_URL}/tr/hesap-makineleri/finans/prim-gunu-hesap-makinesi`,
    },
  },
  openGraph: {
    title: "Prim Günü Hesaplama | SGK Prim Günü Hesap Makinesi",
    description: "Tarih aralığına göre SGK prim günü sayısını hesaplayın. Emeklilik için tahmini prim günü.",
    url: `${SITE_URL}/tr/hesap-makineleri/finans/prim-gunu-hesap-makinesi`,
    type: "website",
    locale: "tr_TR",
    siteName: "Calculator360Pro",
  },
};

const faqs = [
  {
    question: "SGK prim günü nedir?",
    answer:
      "Prim günü, sigortalı olarak çalıştığınız veya prim ödediğiniz her bir takvim günüdür. SGK emeklilik şartlarında toplam prim günü sayısı (örneğin 7200 gün veya 9000 gün) ve yaş şartı birlikte aranır. Her ay tam çalışma genelde 30 gün prim sayılır; yarım ay çalışmalar gün sayısına göre işlenir.",
  },
  {
    question: "Prim günü nasıl hesaplanır?",
    answer:
      "Prim günü, sigorta başlangıç ve bitiş tarihleri arasında prim ödenen veya hizmet geçen günlerin toplamıdır. Bu hesap makinesi, girdiğiniz başlangıç ve bitiş tarihi arasındaki takvim günü sayısını verir. Kesin prim günü SGK e-devlet veya işyeri kayıtlarına göre belirlenir; eksik veya fazla ödemeler kayda yansır.",
  },
  {
    question: "Emeklilik için kaç gün prim gerekir?",
    answer:
      "Emeklilik için gereken prim günü, doğum yılınıza ve sigorta giriş tarihinize göre değişir. Örneğin 7200 gün (20 yıl), 9000 gün (25 yıl) gibi şartlar uygulanabilir. Yaş şartı da aynı anda sağlanmalıdır. Güncel şartlar için SGK emeklilik yaşı tablosuna veya e-devlet üzerinden sorgulama yapın.",
  },
  {
    question: "Prim günü ile çalışma günü aynı mı?",
    answer:
      "Tam gün sigortalı çalışmada her çalışma günü bir prim günü sayılır. Yarım gün veya kısmi süreli işlerde prim günü orantılı hesaplanabilir. Ücretsiz izin, grev veya prim ödenmeyen dönemler prim gününe dahil edilmez. Bu araç takvim günü sayısı verir; resmi kayıt SGK&apos;dadır.",
  },
  {
    question: "Prim günümü nereden öğrenebilirim?",
    answer:
      "Prim günü bilginizi e-devlet üzerinden SGK hizmet dökümü veya emeklilik sorgulama ekranından görebilirsiniz. İşyerinizden alacağınız hizmet belgesi de prim günlerini gösterir. Bu hesap makinesi yalnızca verdiğiniz tarih aralığına göre tahmini gün sayısı hesaplar; kesin bilgi SGK kayıtlarındadır.",
  },
];

const howToSteps = [
  { name: "Başlangıç tarihini girin", text: "Sigorta veya prim ödemesinin başladığı tarihi seçin." },
  { name: "Bitiş tarihini girin", text: "Dönemin bittiği tarihi seçin." },
  { name: "Hesapla butonuna tıklayın", text: "Toplam prim günü (tahmini) sayısını görün." },
  { name: "Sonucu yorumlayın", text: "Kesin prim günü için SGK e-devlet veya hizmet dökümünü kullanın." },
];

export default function PrimGunuHesapMakinesiPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Prim Günü Hesap Makinesi"
        description="Tarih aralığına göre SGK prim günü sayısı hesaplama. Emeklilik için tahmini prim günü."
        slug="prim-gunu-hesap-makinesi"
        categorySlug="finans"
        categoryName="Finans"
        dateModified="2026-02-27"
        category="finance"
        faqs={faqs}
        howToName="Prim Günü Hesap Makinesi Nasıl Kullanılır?"
        howToDescription="SGK prim günü hesaplamak için adımlar."
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
                <li className="text-white font-medium">Prim Günü Hesap Makinesi</li>
              </ol>
            </nav>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3">Prim Günü Hesaplama</h1>
                <p className="text-lg text-[#94a3b8] max-w-2xl">
                  Tarih aralığına göre toplam SGK prim günü sayısını tahmini hesaplayın. Emeklilik için kaç gün prim ödediğinizi kabaca görmek için kullanın.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <PrimGunuHesaplama />
            <CalculatorDisclaimer category="finance" locale="tr" />
          </div>
        </section>

        <section className="py-8 bg-white border-t border-[#e2e8f0]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-6">Prim Günü Hesap Makinesi Nasıl Kullanılır?</h2>
            <ol className="space-y-4 list-decimal list-inside text-[#475569]">
              <li><strong className="text-[#1e293b]">Başlangıç tarihi:</strong> Sigorta girişinizin veya prim ödemesinin başladığı tarihi girin.</li>
              <li><strong className="text-[#1e293b]">Bitiş tarihi:</strong> Dönemin bittiği tarihi girin (örn. işten ayrılış veya bugün).</li>
              <li><strong className="text-[#1e293b]">Hesapla:</strong> Toplam prim günü (tahmini) sayısını görün.</li>
              <li><strong className="text-[#1e293b]">Kesin bilgi:</strong> SGK e-devlet veya hizmet dökümünden kontrol edin.</li>
            </ol>
          </div>
        </section>

        <section className="py-12 bg-[#f8fafc]">
          <div className="container mx-auto px-4 max-w-4xl">
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-6">SGK Prim Günü Nedir?</h2>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                SGK (Sosyal Güvenlik Kurumu) prim günü, sigortalı olarak çalıştığınız veya prim ödediğiniz her bir takvim gününü ifade eder. Emeklilik ve malullük aylığı gibi haklar, toplam prim günü sayısı ve yaş şartı ile birlikte değerlendirilir. Örneğin belirli doğum yılı grupları için 7200 gün (yaklaşık 20 yıl) veya 9000 gün (25 yıl) prim ödeme şartı aranabilir. Prim günü, işe giriş ve çıkış tarihleriniz, staj, askerlik borçlanması ve diğer özel süreler dahil SGK kayıtlarınızda biriken günlerin toplamıdır.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">Prim Günü Nasıl Hesaplanır?</h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Yasal olarak prim günü, sigortalılık süresinde prim ödenen veya hizmet geçen günlerin SGK sistemine işlenmesiyle oluşur. Tam gün çalışmada her çalışma günü bir prim günü sayılır; aylık 30 gün prim bildirimi yaygındır. Yarım gün veya kısmi süreli işlerde gün sayısı orantılı hesaplanır. Bu hesap makinesi, sizin girdiğiniz başlangıç ve bitiş tarihi arasındaki takvim günü sayısını verir; böylece belirli bir çalışma döneminin kabaca kaç güne denk geldiğini görebilirsiniz. Kesin prim günü mutlaka SGK kayıtları ve e-devlet hizmet dökümü ile kontrol edilmelidir; eksik veya fazla ödemeler, borçlanma ve farklı statüler (4a, 4b, 4c) kayda ayrı ayrı yansır.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">Emeklilik Şartları ve Prim Günü</h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Emeklilik için hem yaş hem de prim günü şartı birlikte aranır. Doğum yılınıza ve sigorta giriş tarihinize göre gereken minimum prim günü (örneğin 7200, 9000) ve emeklilik yaşı kanunla belirlenir. Tablolar zaman zaman güncellendiği için güncel şartları SGK emeklilik yaşı tablosundan veya e-devlet üzerinden emeklilik sorgulama sayfasından öğrenmeniz gerekir. Bu araç yalnızca verdiğiniz tarih aralığındaki gün sayısını hesaplar; emeklilik yaşı veya özel düzenlemeleri (kadın/erkek, malullük, vazife malullüğü vb.) dikkate almaz. <Link href="/tr/hesap-makineleri/finans/emeklilik-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Emeklilik hesap makinesi</Link> ile emeklilik yaşı ve prim özetini birlikte inceleyebilirsiniz.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">Hangi Dönemler Prim Gününe Sayılır?</h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                4a (işçi), 4b (bağ-kur) ve 4c (memur) statülerinde prim ödenen süreler prim gününe sayılır. Askerlik borçlanması yapılan süreler, belirli koşullarda staj süreleri ve yurt dışı borçlanma gibi özel düzenlemeler de prim gününe eklenebilir. Ücretsiz izin, grev veya prim ödenmeyen boşluk dönemleri prim gününe dahil edilmez. Birden fazla işte aynı ay içinde çalıştıysanız, aynı ay için en fazla 30 gün prim sayılır (çift prim yok). Bu hesap makinesi sadece iki tarih arasındaki gün sayısını verir; hangi dönemlerin SGK&apos;da ne şekilde göründüğü kayıtlara bağlıdır.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">Prim Günü Sorgulama: e-Devlet ve SGK</h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Kesin prim günü bilginizi e-devlet (gss.sgk.gov.tr veya e-devlet girişi ile SGK sorgulama) üzerinden veya SGK il/merkez müdürlüklerinden alacağınız hizmet dökümü ile öğrenebilirsiniz. Hizmet dökümünde işe giriş-çıkış tarihleri, toplam gün ve prim tutarları yer alır. Bu hesap makinesi tahmini bir araçtır; resmi işlemlerde ve emeklilik başvurularında SGK kayıtları geçerlidir. Eksik veya hatalı görünen kayıtlar için SGK&apos;ya veya işyerinize başvurmanız gerekebilir.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">Örnek Hesaplamalar</h3>
              <p className="text-[#64748b] mb-2">
                <strong>Örnek 1:</strong> 1 Ocak 2020 – 31 Aralık 2024 arası tam 5 yıl çalıştıysanız, takvim günü sayısı 1827 gün (artık yıl dahil) civarındadır. SGK&apos;da her ay 30 gün bildirildiyse 5×12×30 = 1800 gün prim görünebilir; küçük farklar ay gün sayılarından kaynaklanır.
              </p>
              <p className="text-[#64748b] mb-2">
                <strong>Örnek 2:</strong> 15 Mart 2015 – 15 Mart 2025 arası tam 10 yıl. Bu araçla başlangıç ve bitiş tarihini girerek yaklaşık 3653 gün (10 yıl) elde edersiniz. Kesin sayı SGK hizmet dökümünde yer alır.
              </p>
              <p className="text-[#64748b] mb-4">
                <strong>Örnek 3:</strong> Birden fazla iş geçmişiniz varsa her dönemi ayrı ayrı hesaplayıp toplamak yerine, toplam prim gününüzü doğrudan e-devletten almanız daha doğrudur; çünkü aynı aya denk gelen işlerde 30 gün sınırı vardır.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">İlgili Araçlar</h3>
              <ul className="list-disc list-inside text-[#64748b] space-y-2">
                <li><Link href="/tr/hesap-makineleri/finans/emeklilik-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Emeklilik Hesap Makinesi</Link> – Emeklilik yaşı ve prim özeti</li>
                <li><Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Maaş Hesap Makinesi</Link> – Brüt-net maaş, SGK kesintileri</li>
                <li><Link href="/tr/hesap-makineleri/tarih-zaman/tarih-farki-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Tarih Farkı Hesap Makinesi</Link> – İki tarih arası gün/ay/yıl</li>
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
            <RelatedCalculatorsTR categorySlug="finans" currentSlug="prim-gunu-hesap-makinesi" maxResults={6} />
          </div>
        </section>
      </div>
    </>
  );
}

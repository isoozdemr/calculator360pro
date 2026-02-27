import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { HaftalikCalismaSaatiHesaplama } from "@/components/calculators/tr/HaftalikCalismaSaatiHesaplama";

export const metadata: Metadata = {
  title: "Haftalık Çalışma Saati Hesaplama | Haftalık Çalışma Süresi",
  description:
    "Haftalık çalışma saati hesaplama. Günlük çalışma sürelerinizi girerek toplam haftalık saati hesaplayın. 45 saat sınırı ile karşılaştırın. Ücretsiz haftalık çalışma saati hesap makinesi.",
  keywords: [
    "haftalık çalışma saati hesaplama",
    "haftalık çalışma süresi",
    "kaç saat çalışıyorum",
    "45 saat haftalık",
    "çalışma saati hesaplama",
    "iş kanunu çalışma süresi",
    "haftalık mesai hesaplama",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/tarih-zaman/haftalik-calisma-saati-hesap-makinesi`,
    languages: {
      en: `${SITE_URL}/calculators/date-time/hours-calculator`,
      tr: `${SITE_URL}/tr/hesap-makineleri/tarih-zaman/haftalik-calisma-saati-hesap-makinesi`,
      "x-default": `${SITE_URL}/tr/hesap-makineleri/tarih-zaman/haftalik-calisma-saati-hesap-makinesi`,
    },
  },
  openGraph: {
    title: "Haftalık Çalışma Saati Hesaplama | Calculator360Pro",
    description: "Günlük çalışma sürelerinize göre haftalık toplam saati hesaplayın. 45 saat sınırı bilgisi.",
    url: `${SITE_URL}/tr/hesap-makineleri/tarih-zaman/haftalik-calisma-saati-hesap-makinesi`,
    type: "website",
    locale: "tr_TR",
    siteName: "Calculator360Pro",
  },
};

const faqs = [
  {
    question: "Haftalık çalışma süresi kaç saattir?",
    answer:
      "Türkiye İş Kanunu'na göre haftalık normal çalışma süresi 45 saati aşamaz. Haftalık 45 saatin üzerindeki çalışmalar fazla mesai sayılır ve fazla mesai ücreti veya serbest zaman ile telafi edilir. Toplu iş sözleşmeleri veya bireysel sözleşmeler daha düşük süre öngörebilir.",
  },
  {
    question: "Haftalık çalışma saati nasıl hesaplanır?",
    answer:
      "Haftalık çalışma saati, her gün çalıştığınız saatlerin toplamıdır. Örneğin pazartesi–cuma 8’er saat çalışıyorsanız 5×8 = 40 saat. Bu hesap makinesiyle günlük saatleri tek tek girebilir veya “her gün aynı saat” seçeneğiyle gün sayısı × saat şeklinde hesaplatabilirsiniz.",
  },
  {
    question: "45 saati aşan çalışma ne olur?",
    answer:
      "45 saati aşan kısım fazla mesai sayılır. Fazla mesai için ücret artışı (en az yüzde 50) veya serbest zaman verilmesi gerekir. Detaylar iş sözleşmeniz ve toplu iş sözleşmesine göre değişir. Bu araç yalnızca toplam saati hesaplar; hukuki sonuç için iş hukuku uzmanına danışın.",
  },
  {
    question: "Cumartesi ve pazar çalışması nasıl sayılır?",
    answer:
      "Hafta tatili (genelde pazar) ve ulusal bayramlarda yapılan çalışmalar ayrı kurallara tabidir; bu hesap makinesi gün ayırt etmeden toplam haftalık saati hesaplar. Hangi günlerin tatil veya fazla mesai sayıldığı iş sözleşmesi ve İş Kanunu ile belirlenir.",
  },
  {
    question: "Kısmi süreli çalışmada haftalık saat nasıl hesaplanır?",
    answer:
      "Kısmi süreli işlerde haftalık çalışma süresi, tam süreli işin haftalık çalışma süresinin yarısından az olamaz (ör. tam süre 45 saatse kısmi süre en az 22,5 saat civarı). Günlük saatleri bu hesap makinesine girerek toplam haftalık saatinizi hesaplayabilirsiniz.",
  },
];

const howToSteps = [
  { name: "Modu seçin", text: "Her gün aynı saat mi çalışıyorsunuz yoksa günlük saatleri ayrı mı gireceksiniz, seçin." },
  { name: "Saatleri girin", text: "Günlük çalışma saatlerinizi veya gün sayısı × saat değerini girin." },
  { name: "Hesapla butonuna tıklayın", text: "Haftalık toplam çalışma saatinizi görün." },
  { name: "45 saat ile karşılaştırın", text: "Sonuç 45 saati aşıyorsa fazla mesai hakkında bilgi alabilirsiniz." },
];

export default function HaftalikCalismaSaatiHesapMakinesiPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Haftalık Çalışma Saati Hesap Makinesi"
        description="Günlük çalışma sürelerine göre haftalık toplam saat hesaplama. 45 saat sınırı bilgisi."
        slug="haftalik-calisma-saati-hesap-makinesi"
        categorySlug="tarih-zaman"
        categoryName="Tarih ve Zaman"
        dateModified="2026-02-27"
        category="date-time"
        faqs={faqs}
        howToName="Haftalık Çalışma Saati Hesap Makinesi Nasıl Kullanılır?"
        howToDescription="Haftalık çalışma saati hesaplamak için adımlar."
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
                <li><Link href="/tr/hesap-makineleri/tarih-zaman" className="hover:text-white transition-colors">Tarih ve Zaman</Link></li>
                <li><span className="mx-1">/</span></li>
                <li className="text-white font-medium">Haftalık Çalışma Saati Hesap Makinesi</li>
              </ol>
            </nav>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3">Haftalık Çalışma Saati Hesaplama</h1>
                <p className="text-lg text-[#94a3b8] max-w-2xl">
                  Günlük çalışma sürelerinizi girerek haftalık toplam saati hesaplayın. İş Kanunu’ndaki 45 saatlik haftalık sınır ile karşılaştırın.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <HaftalikCalismaSaatiHesaplama />
          </div>
        </section>

        <section className="py-8 bg-white border-t border-[#e2e8f0]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-6">Haftalık Çalışma Saati Hesap Makinesi Nasıl Kullanılır?</h2>
            <ol className="space-y-4 list-decimal list-inside text-[#475569]">
              <li><strong className="text-[#1e293b]">Mod:</strong> Her gün aynı saat çalışıyorsanız “Her gün aynı saat”i seçin; günlük saatler farklıysa “Günlük saatleri ayrı ayrı girin”i seçin.</li>
              <li><strong className="text-[#1e293b]">Saatleri girin:</strong> Günlük saat veya gün sayısı × saat değerini girin.</li>
              <li><strong className="text-[#1e293b]">Hesapla:</strong> Haftalık toplam çalışma saatinizi görün.</li>
              <li><strong className="text-[#1e293b]">45 saat:</strong> Sonuç 45 saati aşıyorsa fazla mesai hakkında bilgi notunu okuyun.</li>
            </ol>
          </div>
        </section>

        <section className="py-12 bg-[#f8fafc]">
          <div className="container mx-auto px-4 max-w-4xl">
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-6">Haftalık Çalışma Süresi Nedir?</h2>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Haftalık çalışma süresi, bir hafta içinde çalıştığınız toplam saat sayısıdır. Türkiye’de 4857 sayılı İş Kanunu’na göre haftalık normal çalışma süresi 45 saati aşamaz. Bu süre, işveren ve işçi arasında haftanın günlerine dağıtılabilir; örneğin 5 gün × 9 saat veya 6 gün × 7,5 saat gibi. 45 saati aşan kısım fazla mesai sayılır ve ek ücret veya serbest zaman ile telafi edilmesi gerekir. Bu hesap makinesi, günlük çalışma saatlerinizi toplayarak haftalık toplam saati verir ve 45 saatlik sınırla karşılaştırmanıza yardımcı olur.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">İş Kanunu ve 45 Saat Sınırı</h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                4857 sayılı İş Kanunu’nun 63. maddesine göre, haftalık normal çalışma süresi 45 saati geçemez. Bu süre toplu iş sözleşmeleri veya bireysel iş sözleşmeleri ile 45 saatin altında belirlenebilir. Fazla mesai için kanunda öngörülen koşullar ve ücret artışı (en az yüzde 50) uygulanır. Denkleştirme uygulaması olan işlerde süreler farklı hesaplanabilir. Bu araç yalnızca toplam saat hesaplar; hukuki sonuçlar için İş Kanunu ve sözleşmenize bakmanız gerekir.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">Günlük Çalışma Saati ve Haftalık Toplam</h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Günlük çalışma süresi genelde 11 saati aşamaz (İş Kanunu md. 63). Yani tek bir günde 11 saatten fazla çalışma normal kabul edilmez; arada dinlenme ve fazla mesai kuralları devreye girer. Haftalık toplamı hesaplarken her gün çalıştığınız saatleri toplamanız yeterlidir. Örneğin pazartesi 8, salı 9, çarşamba 8, perşembe 8, cuma 7 saat çalışıyorsanız toplam 40 saattir. Bu hesap makinesiyle hem “her gün X saat, Y gün” hem de günlük saatleri tek tek girerek hesaplama yapabilirsiniz.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">Fazla Mesai ve Serbest Zaman</h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Haftalık 45 saati aşan çalışmalar fazla mesai sayılır. Fazla mesai için işçinin onayı gerekir ve en az yüzde 50 zamlı ücret ödenir veya fazla çalışılan her saat için 1 saat 15 dakika serbest zaman verilebilir. Hangi seçeneğin uygulandığı iş sözleşmesi veya toplu iş sözleşmesi ile belirlenir. Bu hesap makinesi toplam saati gösterir; 45 saatin üzerindeki kısmı siz hesaplayabilirsiniz (örn. 50 saat çalıştıysanız 5 saat fazla mesai).
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">Kısmi Süreli ve Esnek Çalışma</h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Kısmi süreli iş sözleşmelerinde haftalık çalışma süresi, tam süreli işin haftalık çalışma süresinin yarısından az olamaz (örn. tam süre 45 saatse kısmi süre en az yaklaşık 22,5 saat). Esnek çalışma veya denkleştirme uygulamasında haftalık ortalama 45 saat sınırı belirli bir referans döneminde (örn. 2–3 ay) sağlanabilir. Bu araç tek bir haftanın toplamını hesaplar; denkleştirme dönemi hesabı ayrıdır.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">Örnek Hesaplamalar</h3>
              <p className="text-[#64748b] mb-2">
                <strong>Örnek 1:</strong> Pazartesi–cuma 8’er saat: 5 × 8 = 40 saat. 45 saatlik sınırın altında.
              </p>
              <p className="text-[#64748b] mb-2">
                <strong>Örnek 2:</strong> Pazartesi–cumartesi 7,5 saat: 6 × 7,5 = 45 saat. Sınıra eşit.
              </p>
              <p className="text-[#64748b] mb-4">
                <strong>Örnek 3:</strong> Pazartesi–cuma 9’ar saat: 5 × 9 = 45 saat. 9 saatlik günlük süre 11 saat sınırının altında, haftalık toplam 45 saat sınıra eşit.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">İlgili Araçlar</h3>
              <ul className="list-disc list-inside text-[#64748b] space-y-2">
                <li><Link href="/tr/hesap-makineleri/tarih-zaman/saat-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Saat Hesap Makinesi</Link> – Süre ve saat toplama</li>
                <li><Link href="/tr/hesap-makineleri/tarih-zaman/tarih-farki-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Tarih Farkı Hesap Makinesi</Link> – İki tarih arası süre</li>
                <li><Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Maaş Hesap Makinesi</Link> – Brüt-net maaş</li>
                <li><Link href="/tr/hesap-makineleri/tarih-zaman" className="text-[#2563eb] hover:underline font-medium">Tarih ve Zaman Hesap Makineleri</Link> – Tüm araçlar</li>
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
            <RelatedCalculatorsTR categorySlug="tarih-zaman" currentSlug="haftalik-calisma-saati-hesap-makinesi" maxResults={6} />
          </div>
        </section>
      </div>
    </>
  );
}

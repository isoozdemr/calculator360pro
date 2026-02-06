import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Yatirim Baslangic Rehberi 2026 | Calculator360Pro",
  description: "Yatirima nereden baslanir? Mevduat, BES, hisse, tahvil karsilastirmasi. Getiri hesaplama araclari. Ucretsiz yatirim ve birikim hesaplayicilar.",
  alternates: { canonical: `${SITE_URL}/tr/rehberler/yatirim-baslangic-rehberi-2026`, languages: { tr: `${SITE_URL}/tr/rehberler/yatirim-baslangic-rehberi-2026` } },
  openGraph: { title: "Yatirim Baslangic Rehberi 2026", url: `${SITE_URL}/tr/rehberler/yatirim-baslangic-rehberi-2026`, locale: "tr_TR", siteName: "Calculator360Pro" },
};

export default function YatirimBaslangicRehberiPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <nav className="mb-6 text-sm text-[#64748b]">
          <Link href="/tr">Ana Sayfa</Link> / <Link href="/tr/hesap-makineleri">Hesap Makineleri</Link> / Rehberler / Yatirim Baslangic
        </nav>
        <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Yatirim Baslangic Rehberi 2026</h1>
        <p className="text-[#64748b] mb-4">
          Yatirima baslarken önce acil fon ayirin, borclari yönetin, sonra mevduat veya BES gibi düsük riskli araclarla baslayabilirsiniz. Bileşik faiz uzun vadede önemli fark yaratir.
        </p>
        <h2 className="text-xl font-semibold text-[#1e293b] mt-6 mb-2">Yatirimda Ilk Adimlar</h2>
        <p className="text-[#64748b] mb-4">
          Ilk adim, 3-6 aylik giderinizi karsilayacak kadar nakit veya vadesiz mevduat tutmaktir. Bu acil fon, is kaybi veya beklenmedik harcamalarda yatirimlarinizi zorla satmanizi engeller. Ikinci adim, yuksek faizli kredi karti veya kredileri azaltmaktir; buradaki getiri cogu yatirimdan yuksek olur. Ucuncu adimda mevduat, BES veya devlet tahvili gibi dusuk riskli araclarla baslayip, risk toleransiniza ve bilginize gore hisse veya fon ekleyebilirsiniz.
        </p>
        <div className="prose prose-slate max-w-none space-y-4 text-[#64748b]">
          <h2 className="text-xl font-semibold text-[#1e293b]">Adimlar</h2>
          <ul className="list-disc pl-6">
            <li>Acil fon: 3-6 aylik gider kadar likit birikim</li>
            <li>Borç önceligi: Yüksek faizli borçlari azaltin</li>
            <li>Mevduat veya BES ile baslayin; risk toleransiniza göre cesitlendirin</li>
          </ul>
          <p className="mb-2">
            Yatirim ve birikim hesaplayicilari ile farkli senaryolari (aylik yatirim, vade, beklenen getiri) karsilastirarak kendi planinizi olusturabilirsiniz. Uzun vade ve duzenli yatirim, bilesik faiz sayesinde onemli birikim olusturabilir.
          </p>
          <p>
            <Link href="/tr/hesap-makineleri/finans/yatirim-hesap-makinesi" className="text-[#2563eb] hover:underline">Yatirim Hesap Makinesi</Link>,{" "}
            <Link href="/tr/hesap-makineleri/finans/bilesik-faiz-hesap-makinesi" className="text-[#2563eb] hover:underline">Bileşik Faiz Hesap Makinesi</Link> ve{" "}
            <Link href="/tr/hesap-makineleri/finans/birikim-hesap-makinesi" className="text-[#2563eb] hover:underline">Birikim Hesap Makinesi</Link> ile senaryolarinizi hesaplayin.{" "}
            <Link href="/tr/blog/yatirim-araclari-karsilastirmasi-2026" className="text-[#2563eb] hover:underline">Yatirim Araclari Karsilastirmasi</Link> ve{" "}
            <Link href="/tr/rehberler/finansal-terimler-sozlugu" className="text-[#2563eb] hover:underline">Finansal Terimler Sözlügü</Link> rehberlerimize bakin.
          </p>
        </div>
      </div>
    </div>
  );
}

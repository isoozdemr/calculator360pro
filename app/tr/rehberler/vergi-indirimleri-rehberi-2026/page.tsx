import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "2026 Vergi Indirimleri Rehberi | Calculator360Pro",
  description: "2026 gelir vergisi indirimleri: egitim, saglik, BES, bagis. Vergi indirimi hesaplama. Vergi hesap makinesi.",
  alternates: { canonical: `${SITE_URL}/tr/rehberler/vergi-indirimleri-rehberi-2026`, languages: { tr: `${SITE_URL}/tr/rehberler/vergi-indirimleri-rehberi-2026` } },
  openGraph: { title: "2026 Vergi Indirimleri Rehberi", url: `${SITE_URL}/tr/rehberler/vergi-indirimleri-rehberi-2026`, locale: "tr_TR", siteName: "Calculator360Pro" },
};

export default function VergiIndirimleriRehberiPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <nav className="mb-6 text-sm text-[#64748b]">
          <Link href="/tr">Ana Sayfa</Link> / <Link href="/tr/hesap-makineleri">Hesap Makineleri</Link> / Rehberler / Vergi Indirimleri
        </nav>
        <h1 className="text-3xl font-bold text-[#1e293b] mb-4">2026 Vergi Indirimleri Rehberi</h1>
        <p className="text-[#64748b] mb-4">
          2026 yilinda gelir vergisinden dusulebilecek harcamalar: egitim ve saglik, BES katkilari, bagis. Limitler mevzuata gore degisir.
        </p>
        <h2 className="text-xl font-semibold text-[#1e293b] mt-6 mb-2">Vergi Indirimi Nasil Alinir?</h2>
        <p className="text-[#64748b] mb-4">
          Indirimler, beyanname verirken ilgili harcama kalemlerini belgeleyerek talep edilir. Egitim ve saglik harcamalari icin fatura veya makbuz saklayin; BES icin katki dekontlari, bagis icin ise bagis belgesi gereklidir. Bu belgeleri yillik gelir vergisi beyannamenizde ilgili bolumlere isleyerek indirim hakkini kullanirsiniz. Limitler her yil guncellenebilir; 2026 icin guncel limitleri Gelir Idaresi veya muhasebecinizden kontrol edin.
        </p>
        <div className="prose prose-slate max-w-none space-y-4 text-[#64748b]">
          <h2 className="text-xl font-semibold text-[#1e293b]">Yaygin Indirimler</h2>
          <ul className="list-disc pl-6">
            <li>Egitim harcamalari (belirli limitlere kadar)</li>
            <li>Saglik harcamalari (belirli limitlere kadar)</li>
            <li>BES katki payi (vergi avantaji)</li>
            <li>Bagis ve yardimlar</li>
          </ul>
          <p className="mb-2">
            Her indirim kaleminin ust siniri vardir. Toplam indirim tutariniz vergi matrahindan dusulur; yani vergi hesaplanan tutar azalir ve odenen vergi dusebilir. Indirimleri dogru hesaplamak icin bir vergi veya maas hesap araci kullanmak faydali olur.
          </p>
          <p>
            <Link href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi" className="text-[#2563eb] hover:underline">Vergi Hesap Makinesi</Link>,{" "}
            <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline">Maas Hesap Makinesi</Link>,{" "}
            <Link href="/tr/blog/2026-gelir-vergisi-dilimleri-hesaplama-rehberi" className="text-[#2563eb] hover:underline">2026 Gelir Vergisi Rehberi</Link>,{" "}
            <Link href="/tr/rehberler/vergi-takvimi-2026" className="text-[#2563eb] hover:underline">Vergi Takvimi</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

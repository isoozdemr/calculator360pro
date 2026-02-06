import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kredi Notu Nasil Yükseltilir? | Calculator360Pro",
  description: "Findeks kredi notu nedir, nasil yükselir? Kredi notu yükseltme ipuclari ve adimlar. Kredi ve bütçe hesaplama araclari.",
  alternates: { canonical: `${SITE_URL}/tr/rehberler/kredi-notu-nasil-yukseltilir`, languages: { tr: `${SITE_URL}/tr/rehberler/kredi-notu-nasil-yukseltilir` } },
  openGraph: { title: "Kredi Notu Nasil Yükseltilir?", url: `${SITE_URL}/tr/rehberler/kredi-notu-nasil-yukseltilir`, locale: "tr_TR", siteName: "Calculator360Pro" },
};

export default function KrediNotuRehberiPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <nav className="mb-6 text-sm text-[#64748b]">
          <Link href="/tr">Ana Sayfa</Link> / <Link href="/tr/hesap-makineleri">Hesap Makineleri</Link> / Rehberler / Kredi Notu
        </nav>
        <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Kredi Notu Nasil Yükseltilir?</h1>
        <p className="text-[#64748b] mb-4">
          Findeks kredi notu, bankalarin kredi talebinizi degerlendirmekte kullandigi bir puandir. Notunuzu yükseltmek icin ödemelerinizi zamaninda yapin, borc oranini düsürün ve gereksiz kredi sorgulamasindan kaçinin.
        </p>
        <h2 className="text-xl font-semibold text-[#1e293b] mt-6 mb-2">Kredi Notu Neden Önemli?</h2>
        <p className="text-[#64748b] mb-4">
          Kredi notu, konut kredisi, tasit kredisi veya kredi karti basvurularinda onay sansinizi ve faiz oranini dogrudan etkiler. Yüksek not, daha uygun kosullar ve daha dusuk faiz demektir. Dusuk not ise reddedilme veya yuksek maliyetle karsilasma riski tasir. Bu yuzden notunuzu bilmek ve zaman icinde iyilestirmek uzun vadede cok tasarruf saglar.
        </p>
        <div className="prose prose-slate max-w-none space-y-4 text-[#64748b]">
          <h2 className="text-xl font-semibold text-[#1e293b]">Temel Ipuclari</h2>
          <ul className="list-disc pl-6">
            <li>Faturalari ve kredi taksitlerini zamaninda ödeyin.</li>
            <li>Kredi kartı borcunu azaltin; kullanım oranini %30 altinda tutun.</li>
            <li>Gereksiz kredi basvurusu yapmayin; her sorgu notu etkiler.</li>
            <li>Mevcut kredileri erken kapatmak bazen notu olumlu etkiler.</li>
          </ul>
          <h2 className="text-xl font-semibold text-[#1e293b] mt-6">Ne Yapmaktan Kaçinmalisiniz?</h2>
          <p className="mb-2">
            Cok sik kredi veya kredi karti basvurusu yapmak, gecikmeli odemeler ve yuksek kullanım orani notu dusurur. Findeks uzerinden kendi notunuzu yilda birkac kez sorgulamaniz notu olumsuz etkilemez; ancak her banka basvurusu yeni bir sorgu olarak islenir. Bu nedenle ihtiyaciniz yoksa basvuru yapmayin.
          </p>
          <p>
            <Link href="/tr/hesap-makineleri/finans/kredi-hesap-makinesi" className="text-[#2563eb] hover:underline">Kredi Hesap Makinesi</Link> ile taksit planlayin.{" "}
            <Link href="/tr/hesap-makineleri/finans/butce-hesap-makinesi" className="text-[#2563eb] hover:underline">Bütçe Hesap Makinesi</Link> ile gelir-gider dengesini kurun.{" "}
            <Link href="/tr/rehberler/finansal-terimler-sozlugu" className="text-[#2563eb] hover:underline">Finansal Terimler Sözlügü</Link> ve{" "}
            <Link href="/tr/rehberler/vergi-takvimi-2026" className="text-[#2563eb] hover:underline">Vergi Takvimi</Link> rehberlerimize bakin.
          </p>
        </div>
      </div>
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Iletisim | Calculator360Pro",
  description: "Calculator360Pro ile iletisime gecin. Soru, geri bildirim veya destek icin e-posta gonderin. Genelde 24-48 saat icinde yanit veriyoruz.",
  alternates: { canonical: `${SITE_URL}/tr/iletisim`, languages: { en: `${SITE_URL}/contact`, tr: `${SITE_URL}/tr/iletisim` } },
  openGraph: { title: "Iletisim", url: `${SITE_URL}/tr/iletisim`, locale: "tr_TR", siteName: "Calculator360Pro" },
};

export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Iletisim</h1>
        <p className="text-[#64748b] mb-6">
          Soru, geri bildirim veya destek icin bize yazin. Genelde 24-48 saat icinde yanit veriyoruz.
        </p>
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#1e293b] mb-2">E-posta</h2>
          <a href="mailto:contact@calculator360pro.com" className="text-[#2563eb] hover:underline">
            contact@calculator360pro.com
          </a>
        </div>
        <p className="text-[#64748b] text-sm">
          <Link href="/tr/hakkimizda" className="text-[#2563eb] hover:underline">Hakkimizda</Link> |{" "}
          <Link href="/tr/gizlilik-politikasi" className="text-[#2563eb] hover:underline">Gizlilik Politikasi</Link> |{" "}
          <Link href="/tr/kullanim-kosullari" className="text-[#2563eb] hover:underline">Kullanim Kosullari</Link>
        </p>
      </div>
    </div>
  );
}

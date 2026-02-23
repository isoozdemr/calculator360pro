import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { generateSimpleBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "İletişim | Calculator360Pro",
  description: "Calculator360Pro ile iletişime geçin. Soru, geri bildirim veya destek için e-posta gönderin. Genelde 24-48 saat içinde yanıt veriyoruz.",
  keywords: ["iletişim", "destek", "geri bildirim", "Calculator360Pro iletişim", "hesap makinesi destek"],
  alternates: { canonical: `${SITE_URL}/tr/iletisim`, languages: { en: `${SITE_URL}/contact`, tr: `${SITE_URL}/tr/iletisim`, "x-default": `${SITE_URL}/contact` } },
  openGraph: { title: "İletişim", url: `${SITE_URL}/tr/iletisim`, locale: "tr_TR", siteName: "Calculator360Pro" },
};

const iletisimBreadcrumbSchema = generateSimpleBreadcrumbSchema([
  { name: "Ana Sayfa", path: "/tr" },
  { name: "İletişim", path: "/tr/iletisim" },
]);

export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(iletisimBreadcrumbSchema) }} />
      <div className="container mx-auto px-4 max-w-2xl">
        <nav className="mb-6 text-sm text-[#64748b]" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li><Link href="/tr" className="hover:text-[#2563eb]">Ana Sayfa</Link></li>
            <li>/</li>
            <li className="text-[#1e293b] font-medium">İletişim</li>
          </ol>
        </nav>
        <h1 className="text-3xl font-bold text-[#1e293b] mb-4">İletişim</h1>
        <p className="text-[#64748b] mb-6">
          Soru, geri bildirim veya destek için bize yazın. Genelde 24-48 saat içinde yanıt veriyoruz.
        </p>
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#1e293b] mb-2">E-posta</h2>
          <a href="mailto:contact@calculator360pro.com" className="text-[#2563eb] hover:underline">
            contact@calculator360pro.com
          </a>
        </div>
        <p className="text-[#64748b] text-sm">
          <Link href="/tr/hakkimizda" className="text-[#2563eb] hover:underline">Hakkımızda</Link> |{" "}
          <Link href="/tr/gizlilik-politikasi" className="text-[#2563eb] hover:underline">Gizlilik Politikası</Link> |{" "}
          <Link href="/tr/kullanim-kosullari" className="text-[#2563eb] hover:underline">Kullanım Koşulları</Link>
        </p>
      </div>
    </div>
  );
}

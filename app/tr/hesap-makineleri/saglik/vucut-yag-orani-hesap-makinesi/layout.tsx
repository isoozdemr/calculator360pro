import { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vücut Yağ Oranı Hesap Makinesi 2026",
  description: "Vücut yağ yüzdesi hesaplama. BMI'dan daha doğru vücut kompozisyonu. Ücretsiz hesaplayın.",
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/saglik/vucut-yag-orani-hesap-makinesi`,
    languages: { "en": `${SITE_URL}/calculators/health/body-fat-calculator`, "tr": `${SITE_URL}/tr/hesap-makineleri/saglik/vucut-yag-orani-hesap-makinesi` },
  },
  openGraph: { title: "Vücut Yağ Oranı Hesap Makinesi 2026", url: `${SITE_URL}/tr/hesap-makineleri/saglik/vucut-yag-orani-hesap-makinesi`, locale: "tr_TR", siteName: "Calculator360Pro" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

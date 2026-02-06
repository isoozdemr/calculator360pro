import { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vucut Yag Orani Hesap Makinesi 2026",
  description: "Vucut yag yuzdesi hesaplama. BMI'dan daha dogru vucut kompozisyonu. Ucretsiz hesaplayin.",
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/saglik/vucut-yag-orani-hesap-makinesi`,
    languages: { "en": `${SITE_URL}/calculators/health/body-fat-calculator`, "tr": `${SITE_URL}/tr/hesap-makineleri/saglik/vucut-yag-orani-hesap-makinesi` },
  },
  openGraph: { title: "Vucut Yag Orani Hesap Makinesi 2026", url: `${SITE_URL}/tr/hesap-makineleri/saglik/vucut-yag-orani-hesap-makinesi`, locale: "tr_TR", siteName: "Calculator360Pro" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

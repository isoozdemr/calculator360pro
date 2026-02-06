import { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bahsis Hesap Makinesi 2026",
  description: "Restoran bahsis ve kisi basi ucret hesaplama. Ucretsiz.",
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/finans/bahsis-hesap-makinesi`,
    languages: { "en": `${SITE_URL}/calculators/finance/tip-calculator`, "tr": `${SITE_URL}/tr/hesap-makineleri/finans/bahsis-hesap-makinesi` },
  },
  openGraph: { title: "Bahsis Hesap Makinesi 2026", url: `${SITE_URL}/tr/hesap-makineleri/finans/bahsis-hesap-makinesi`, locale: "tr_TR", siteName: "Calculator360Pro" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

import { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kredi Karti Borc Hesap Makinesi 2026",
  description: "Kredi karti borcu kapanma suresi ve faiz hesaplama. Ucretsiz.",
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/finans/kredi-karti-borc-hesap-makinesi`,
    languages: { "en": `${SITE_URL}/calculators/finance/credit-card-payoff-calculator`, "tr": `${SITE_URL}/tr/hesap-makineleri/finans/kredi-karti-borc-hesap-makinesi` },
  },
  openGraph: { title: "Kredi Karti Borc Hesap Makinesi 2026", url: `${SITE_URL}/tr/hesap-makineleri/finans/kredi-karti-borc-hesap-makinesi`, locale: "tr_TR", siteName: "Calculator360Pro" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

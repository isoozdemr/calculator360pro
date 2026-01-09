import { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Search - Calculator360Pro",
  description: "Search for calculators and articles on Calculator360Pro",
  alternates: {
    canonical: `${SITE_URL}/search`,
  },
  robots: {
    index: false,
    follow: true,
  },
};


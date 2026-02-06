/**
 * EN–TR blog post slug mappings for hreflang and alternates.
 * Only pairs that are translations of each other should be listed.
 * If a slug is not in the mapping, that post has no translation; do not set the other language.
 */

/** Turkish blog slug -> English blog slug */
export const BLOG_TR_TO_EN: Record<string, string> = {
  "konut-kredisi-alirken-dikkat-edilecekler-2026": "how-to-calculate-mortgage-payment",
  "bmi-nedir-ideal-kilo-nasil-hesaplanir": "understanding-bmi-calculator",
  "brutten-nete-maas-hesaplama-sgk-agi-vergi": "salary-calculator-guide",
  "2026-gelir-vergisi-dilimleri-hesaplama-rehberi": "tax-calculator-guide",
  "2026-bilesik-faiz-hesaplama-rehberi": "compound-interest-explained",
  "universite-not-ortalamasi-nasil-yukseltilir": "gpa-calculator-guide",
  "gano-ve-agno-arasindaki-farklar-hangi-sistem-kullaniliyor": "gpa-calculator-guide",
  "yatirim-araclari-karsilastirmasi-2026": "investment-calculator-guide",
};

/** English blog slug -> Turkish blog slug (first TR slug when multiple TR map to same EN) */
export const BLOG_EN_TO_TR: Record<string, string> = Object.entries(BLOG_TR_TO_EN).reduce(
  (acc, [tr, en]) => {
    if (!acc[en]) acc[en] = tr;
    return acc;
  },
  {} as Record<string, string>
);

export function getEnBlogSlugForTr(trSlug: string): string | undefined {
  return BLOG_TR_TO_EN[trSlug];
}

export function getTrBlogSlugForEn(enSlug: string): string | undefined {
  return BLOG_EN_TO_TR[enSlug];
}

"use client";

/**
 * Visible disclaimer for health and finance calculators (AdSense compliance).
 * Shown below the calculator tool; not a substitute for professional advice.
 */

type DisclaimerCategory = "health" | "finance";

const DISCLAIMER_TEXT: Record<DisclaimerCategory, { en: string; tr: string }> = {
  health: {
    en: "This tool is for informational and educational purposes only. It is not a substitute for professional medical, nutritional, or health advice. For diagnosis, treatment, or personalized guidance, please consult a qualified healthcare provider.",
    tr: "Bu araç yalnızca bilgilendirme ve eğitim amaçlıdır. Tıbbi, beslenme veya sağlık danışmanlığı yerine geçmez. Tanı, tedavi veya kişiye özel rehberlik için lütfen bir sağlık uzmanına danışın.",
  },
  finance: {
    en: "This tool is for informational purposes only. It is not legal, tax, or financial advice. Results are estimates; actual figures may vary. For decisions involving loans, taxes, or investments, please consult a qualified professional.",
    tr: "Bu araç yalnızca bilgilendirme amaçlıdır. Hukuki, vergi veya mali danışmanlık niteliği taşımaz. Sonuçlar tahminidir; gerçek rakamlar farklılık gösterebilir. Kredi, vergi veya yatırım kararları için lütfen yetkili bir uzmana danışın.",
  },
};

interface CalculatorDisclaimerProps {
  category: "health" | "finance";
  locale: "en" | "tr";
}

export function CalculatorDisclaimer({ category, locale }: CalculatorDisclaimerProps) {
  const text = DISCLAIMER_TEXT[category][locale];
  return (
    <div
      className="mt-4 p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-sm"
      role="note"
      aria-label={locale === "en" ? "Disclaimer" : "Sorumluluk reddi"}
    >
      <p className="leading-relaxed">{text}</p>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatPercent } from "@/lib/format/locale-format";
import { CalculatorDisclaimer } from "@/components/calculators/CalculatorDisclaimer";

type Locale = "en" | "tr";

export function ROICalculator({ locale: localeProp = "en" }: { locale?: Locale }) {
  const locale = localeProp;
  const isTr = locale === "tr";
  const [initialCost, setInitialCost] = useState("");
  const [finalValue, setFinalValue] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState<{ roi: number; annualized?: number } | null>(null);
  const [copied, setCopied] = useState(false);
  const [costError, setCostError] = useState<string | null>(null);
  const [valueError, setValueError] = useState<string | null>(null);
  const [yearsError, setYearsError] = useState<string | null>(null);

  const calculate = () => {
    const cost = parseLocaleNumber(initialCost, locale);
    const value = parseLocaleNumber(finalValue, locale);
    const yNum = years.trim() ? parseLocaleNumber(years, locale) : null;

    if (cost == null || cost <= 0) {
      setCostError(isTr ? "Maliyet 0'dan büyük olmalı" : "Cost must be greater than 0");
      setResult(null);
      return;
    }
    if (value == null) {
      setValueError(isTr ? "Geçerli bir sayı girin" : "Enter a valid number");
      setResult(null);
      return;
    }
    if (yNum != null && (yNum <= 0 || yNum > 200)) {
      setYearsError(isTr ? "0,01 – 200 arası girin" : "Enter between 0.01 and 200");
      setResult(null);
      return;
    }
    setCostError(null);
    setValueError(null);
    setYearsError(null);

    const gain = value - cost;
    const roi = cost === 0 ? 0 : (gain / cost) * 100;
    let annualized: number | undefined;
    if (yNum != null && yNum > 0 && roi !== -100) {
      const mult = 1 + roi / 100;
      if (mult > 0) annualized = (Math.pow(mult, 1 / yNum) - 1) * 100;
    }
    setResult({ roi, annualized });
  };

  const reset = () => {
    setInitialCost("");
    setFinalValue("");
    setYears("");
    setResult(null);
    setCostError(null);
    setValueError(null);
    setYearsError(null);
    setCopied(false);
  };

  const copyResult = () => {
    if (!result) return;
    const text = result.annualized != null
      ? "ROI: " + formatPercent(result.roi, locale) + " | Annualized: " + formatPercent(result.annualized, locale)
      : "ROI: " + formatPercent(result.roi, locale);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <FormattedNumberInput
          label={isTr ? "Yatırım Maliyeti (TL)" : "Initial cost / investment ($)"}
          value={initialCost}
          onChange={(v) => { setInitialCost(v); if (costError) setCostError(null); }}
          locale={locale}
          formatAs="currency"
          error={costError || undefined}
        />
        <FormattedNumberInput
          label={isTr ? "Toplam Getiri / Kazanç (TL)" : "Final value / amount received ($)"}
          value={finalValue}
          onChange={(v) => { setFinalValue(v); if (valueError) setValueError(null); }}
          locale={locale}
          formatAs="currency"
          error={valueError || undefined}
        />
        <FormattedNumberInput
          label={isTr ? "Tutma süresi (yıl) — isteğe bağlı" : "Holding period (years) — optional"}
          value={years}
          onChange={(v) => { setYears(v); if (yearsError) setYearsError(null); }}
          locale={locale}
          formatAs="number"
          maxFractionDigits={2}
          error={yearsError || undefined}
          helperText={isTr ? "Sadece toplam ROI için boş bırakın" : "Leave blank for total ROI only"}
        />
        <div className="flex gap-3">
          <Button onClick={calculate} className="flex-1">{isTr ? "Hesapla" : "Calculate ROI"}</Button>
          <Button onClick={reset} variant="outline">{isTr ? "Sıfırla" : "Reset"}</Button>
        </div>
      </div>
      {result && (
        <div className="bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6 space-y-3" id="result-summary">
          <h3 className="text-lg font-semibold text-[#1e293b]">{isTr ? "Sonuç" : "Result"}</h3>
          <p className="text-2xl font-bold text-[#10b981] font-mono">ROI: {formatPercent(result.roi, locale)}</p>
          {result.annualized != null && <p className="text-lg text-[#64748b]">{isTr ? "Yıllık getiri: " : "Annualized return: "}{formatPercent(result.annualized, locale)} {isTr ? "yıllık" : "per year"}</p>}
          <Button onClick={copyResult} variant="outline" size="sm">{copied ? (isTr ? "Kopyalandı!" : "Copied!") : (isTr ? "Sonucu kopyala" : "Copy result")}</Button>
        </div>
      )}
      <CalculatorDisclaimer category="finance" locale={localeProp} />
    </div>
  );
}

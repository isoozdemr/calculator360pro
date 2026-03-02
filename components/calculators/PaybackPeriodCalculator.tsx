"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber } from "@/lib/format/locale-format";

type Locale = "en" | "tr";

export function PaybackPeriodCalculator({ locale: localeProp = "en" }: { locale?: Locale }) {
  const locale = localeProp;
  const isTr = locale === "tr";
  const [initialInvestment, setInitialInvestment] = useState("");
  const [cashFlow, setCashFlow] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);
  const [result, setResult] = useState<{ years: number; months: number } | null>(null);
  const [copied, setCopied] = useState(false);
  const [investmentError, setInvestmentError] = useState<string | null>(null);
  const [cashFlowError, setCashFlowError] = useState<string | null>(null);

  const calculate = () => {
    const inv = parseLocaleNumber(initialInvestment, locale);
    const flow = parseLocaleNumber(cashFlow, locale);
    if (inv == null || inv <= 0) {
      setInvestmentError(isTr ? "Pozitif bir sayı girin" : "Enter a positive number");
      setResult(null);
      return;
    }
    if (flow == null || flow <= 0) {
      setCashFlowError(isTr ? "Pozitif bir sayı girin" : "Enter a positive number");
      setResult(null);
      return;
    }
    setInvestmentError(null);
    setCashFlowError(null);
    const monthsToPayback = isMonthly ? inv / flow : (inv / flow) * 12;
    const years = Math.floor(monthsToPayback / 12);
    const months = Math.round(monthsToPayback % 12);
    setResult({ years, months: monthsToPayback < 12 ? Math.round(monthsToPayback) : months });
  };

  const reset = () => {
    setInitialInvestment("");
    setCashFlow("");
    setResult(null);
    setInvestmentError(null);
    setCashFlowError(null);
    setCopied(false);
  };

  const copyResult = () => {
    if (!result) return;
    const text = isTr
      ? (result.years >= 1
          ? `Geri ödeme süresi: ${result.years} yıl ${result.months} ay`
          : `Geri ödeme süresi: ${result.months} ay`)
      : (result.years >= 1
          ? `Payback period: ${result.years} year(s) ${result.months} month(s)`
          : `Payback period: ${result.months} month(s)`);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const displayYears = result ? result.years : 0;
  const displayMonths = result ? (result.years >= 1 ? result.months : result.months) : 0;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <FormattedNumberInput
          label={isTr ? "Başlangıç yatırımı (TL)" : "Initial investment ($)"}
          value={initialInvestment}
          onChange={(v) => { setInitialInvestment(v); if (investmentError) setInvestmentError(null); }}
          locale={locale}
          formatAs="currency"
          error={investmentError || undefined}
        />
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="annual"
              name="flowType"
              checked={!isMonthly}
              onChange={() => setIsMonthly(false)}
            />
            <label htmlFor="annual">{isTr ? "Yıllık net nakit akışı" : "Annual net cash flow"}</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="monthly"
              name="flowType"
              checked={isMonthly}
              onChange={() => setIsMonthly(true)}
            />
            <label htmlFor="monthly">{isTr ? "Aylık net nakit akışı" : "Monthly net cash flow"}</label>
          </div>
        </div>
        <FormattedNumberInput
          label={isMonthly ? (isTr ? "Aylık net nakit akışı (TL)" : "Monthly net cash flow ($)") : (isTr ? "Yıllık net nakit akışı (TL)" : "Annual net cash flow ($)")}
          value={cashFlow}
          onChange={(v) => { setCashFlow(v); if (cashFlowError) setCashFlowError(null); }}
          locale={locale}
          formatAs="currency"
          error={cashFlowError || undefined}
        />
        <div className="flex gap-3">
          <Button onClick={calculate} className="flex-1">
            {isTr ? "Geri ödeme süresini hesapla" : "Calculate payback"}
          </Button>
          <Button onClick={reset} variant="outline">
            {isTr ? "Sıfırla" : "Reset"}
          </Button>
        </div>
      </div>

      {result && (
        <div className="bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6 space-y-3" id="result-summary">
          <h3 className="text-lg font-semibold text-[#1e293b]">{isTr ? "Sonuç" : "Result"}</h3>
          <p className="text-2xl font-bold text-[#10b981] font-mono">
            {isTr
              ? (displayYears >= 1
                  ? `Geri ödeme süresi: ${displayYears} yıl${displayMonths > 0 ? ` ${displayMonths} ay` : ""}`
                  : `Geri ödeme süresi: ${displayMonths} ay`)
              : (displayYears >= 1
                  ? `Payback period: ${displayYears} year(s)${displayMonths > 0 ? ` ${displayMonths} month(s)` : ""}`
                  : `Payback period: ${displayMonths} month(s)`)}
          </p>
          <p className="text-sm text-[#64748b]">
            {isTr ? "Basit geri ödeme (başlangıç yatırımı ÷ nakit akışı). Paranın zaman değeri hesaba katılmaz." : "Simple payback (initial investment ÷ cash flow). Does not account for time value of money."}
          </p>
          <Button onClick={copyResult} variant="outline" size="sm">
            {copied ? (isTr ? "Kopyalandı!" : "Copied!") : (isTr ? "Sonucu kopyala" : "Copy result")}
          </Button>
        </div>
      )}
    </div>
  );
}

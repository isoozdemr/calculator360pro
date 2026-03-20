"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { formatCurrency, parseLocaleNumber } from "@/lib/format/locale-format";

type Locale = "en" | "tr";

function amortizedMonthlyPayment(principal: number, annualRatePct: number, years: number): number {
  const r = annualRatePct / 100 / 12;
  const n = years * 12;
  if (n <= 0) return 0;
  if (r === 0) return principal / n;

  const pow = Math.pow(1 + r, n);
  return (principal * r * pow) / (pow - 1);
}

function totalInterest(principal: number, monthlyPayment: number, years: number): number {
  const n = years * 12;
  return monthlyPayment * n - principal;
}

export function RefinanceCalculator({ locale: localeProp = "en" }: { locale?: Locale }) {
  const locale = localeProp;
  const isTr = locale === "tr";

  const [currentLoan, setCurrentLoan] = useState("");
  const [currentRate, setCurrentRate] = useState("");
  const [currentTermYears, setCurrentTermYears] = useState("");

  const [newRate, setNewRate] = useState("");
  const [newTermYears, setNewTermYears] = useState("");

  const [refinanceCost, setRefinanceCost] = useState("");

  const [result, setResult] = useState<{
    currentMonthlyPayment: number;
    newMonthlyPayment: number;
    monthlySavings: number;
    totalInterestCurrent: number;
    totalInterestNew: number;
    breakEvenMonths: number | null;
  } | null>(null);

  const calculate = () => {
    const p0 = parseLocaleNumber(currentLoan, locale);
    const r0 = parseLocaleNumber(currentRate.replace(/%/g, "").trim(), locale);
    const t0 = parseLocaleNumber(currentTermYears, locale);

    const r1 = parseLocaleNumber(newRate.replace(/%/g, "").trim(), locale);
    const t1 = parseLocaleNumber(newTermYears, locale);
    const cost = parseLocaleNumber(refinanceCost, locale) ?? 0;

    if (p0 == null || p0 <= 0 || r0 == null || r0 < 0 || t0 == null || t0 <= 0) {
      setResult(null);
      return;
    }
    if (r1 == null || r1 < 0 || t1 == null || t1 <= 0) {
      setResult(null);
      return;
    }

    const currentMonthlyPayment = amortizedMonthlyPayment(p0, r0, t0);
    const newMonthlyPayment = amortizedMonthlyPayment(p0, r1, t1);

    const monthlySavings = currentMonthlyPayment - newMonthlyPayment;
    const totalInterestCurrent = totalInterest(p0, currentMonthlyPayment, t0);
    const totalInterestNew = totalInterest(p0, newMonthlyPayment, t1);

    const breakEvenMonths = monthlySavings > 0 ? cost / monthlySavings : null;

    setResult({
      currentMonthlyPayment,
      newMonthlyPayment,
      monthlySavings,
      totalInterestCurrent,
      totalInterestNew,
      breakEvenMonths,
    });
  };

  const reset = () => {
    setCurrentLoan("");
    setCurrentRate("");
    setCurrentTermYears("");
    setNewRate("");
    setNewTermYears("");
    setRefinanceCost("");
    setResult(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-[#1e293b]">
            {isTr ? "Refinansman Karşılaştırma" : "Refinance Comparison"}
          </h2>
          <p className="text-sm text-[#64748b]">
            {isTr
              ? "Mevcut kredi ile yeni kredi seçeneklerini aylık ödeme ve toplam faiz açısından karşılaştırın."
              : "Compare current vs new loan options by monthly payment and total interest."}
          </p>

          <FormattedNumberInput
            label={isTr ? "Mevcut Kredi Tutarı ($)" : "Current Loan Amount ($)"}
            value={currentLoan}
            onChange={(v) => setCurrentLoan(v)}
            locale={locale}
            formatAs="currency"
            helperText={isTr ? "Kalan kredi bakiyesini girin." : "Enter your remaining loan balance."}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormattedNumberInput
              label={isTr ? "Mevcut Faiz (%)" : "Current Interest Rate (%)"}
              value={currentRate}
              onChange={(v) => setCurrentRate(v)}
              locale={locale}
              formatAs="percent"
              helperText={isTr ? "Yıllık faiz oranı." : "Annual interest rate."}
            />
            <FormattedNumberInput
              label={isTr ? "Mevcut Vade (yıl)" : "Current Term (years)"}
              value={currentTermYears}
              onChange={(v) => setCurrentTermYears(v)}
              locale={locale}
              formatAs="number"
              maxFractionDigits={0}
              helperText={isTr ? "Kalan süreyi yıl olarak girin." : "Remaining time in years."}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormattedNumberInput
              label={isTr ? "Yeni Faiz (%)" : "New Interest Rate (%)"}
              value={newRate}
              onChange={(v) => setNewRate(v)}
              locale={locale}
              formatAs="percent"
              helperText={isTr ? "Teklif edilen yıllık oran." : "Proposed annual rate."}
            />
            <FormattedNumberInput
              label={isTr ? "Yeni Vade (yıl)" : "New Term (years)"}
              value={newTermYears}
              onChange={(v) => setNewTermYears(v)}
              locale={locale}
              formatAs="number"
              maxFractionDigits={0}
              helperText={isTr ? "Yeni kredinin vadesi." : "New loan term."}
            />
          </div>

          <FormattedNumberInput
            label={isTr ? "Refinansman Masrafı ($) (opsiyonel)" : "Refinancing Cost ($) (optional)"}
            value={refinanceCost}
            onChange={(v) => setRefinanceCost(v)}
            locale={locale}
            formatAs="currency"
            helperText={isTr ? "Açılış/masraflar için yaklaşık tutar." : "Estimated fees/closing costs."}
          />

          <div className="flex gap-3">
            <Button onClick={calculate} className="flex-1">
              {isTr ? "Karşılaştır" : "Compare"}
            </Button>
            <Button onClick={reset} variant="outline">
              {isTr ? "Sıfırla" : "Reset"}
            </Button>
          </div>
        </div>

        {result && (
          <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-[#1e293b]">
              {isTr ? "Refinansman Sonuçları" : "Refinance Results"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg border border-[#e2e8f0] p-4">
                <p className="text-sm text-[#64748b]">{isTr ? "Mevcut Aylık Ödeme" : "Current Monthly Payment"}</p>
                <p className="text-2xl font-bold text-[#1e293b] font-mono">
                  {formatCurrency(result.currentMonthlyPayment, locale)}
                </p>
              </div>
              <div className="bg-white rounded-lg border border-[#e2e8f0] p-4">
                <p className="text-sm text-[#64748b]">{isTr ? "Yeni Aylık Ödeme" : "New Monthly Payment"}</p>
                <p className="text-2xl font-bold text-[#1e293b] font-mono">
                  {formatCurrency(result.newMonthlyPayment, locale)}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-[#e2e8f0] p-4">
              <p className="text-sm text-[#64748b]">{isTr ? "Aylık Tasarruf" : "Monthly Savings"}</p>
              <p className="text-2xl font-bold text-[#1e293b] font-mono">
                {formatCurrency(result.monthlySavings, locale)}
              </p>
              <p className="text-xs text-[#64748b] mt-1">
                {result.breakEvenMonths == null
                  ? isTr
                    ? "Aylık tasarruf negatif: masrafı geri alma hesabı uygulanamaz."
                    : "Monthly savings is not positive: break-even not available."
                  : isTr
                    ? `Tahmini geri ödeme: ${Math.ceil(result.breakEvenMonths)} ay.`
                    : `Estimated break-even: ${Math.ceil(result.breakEvenMonths)} months.`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg border border-[#e2e8f0] p-4">
                <p className="text-sm text-[#64748b]">{isTr ? "Mevcut Toplam Faiz" : "Total Interest (Current)"}</p>
                <p className="text-xl font-bold text-[#1e293b] font-mono">
                  {formatCurrency(result.totalInterestCurrent, locale)}
                </p>
              </div>
              <div className="bg-white rounded-lg border border-[#e2e8f0] p-4">
                <p className="text-sm text-[#64748b]">{isTr ? "Yeni Toplam Faiz" : "Total Interest (New)"}</p>
                <p className="text-xl font-bold text-[#1e293b] font-mono">
                  {formatCurrency(result.totalInterestNew, locale)}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#64748b]">
              {isTr
                ? "Bu hesap, sabit faizli amortisman varsayımıyla yaklaşık sonuç üretir."
                : "This is an estimate using fixed-rate amortization assumptions."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}


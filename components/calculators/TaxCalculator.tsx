"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatCurrency, formatPercent } from "@/lib/format/locale-format";

// Simplified US tax brackets for 2026 (single filer)
const TAX_BRACKETS = [
  { min: 0, max: 12400, rate: 0.1 },
  { min: 12401, max: 50400, rate: 0.12 },
  { min: 50401, max: 105700, rate: 0.22 },
  { min: 105701, max: 201775, rate: 0.24 },
  { min: 201776, max: 256225, rate: 0.32 },
  { min: 256226, max: 640600, rate: 0.35 },
  { min: 640601, max: Infinity, rate: 0.37 },
];

const STANDARD_DEDUCTION = 16100; // 2026 single filer

type Locale = "en" | "tr";

export function TaxCalculator({ locale: localeProp = "en" }: { locale?: Locale }) {
  const locale = localeProp;
  const isTr = locale === "tr";
  const [income, setIncome] = useState("");
  const [deductions, setDeductions] = useState("");
  const [result, setResult] = useState<{
    taxableIncome: number;
    taxOwed: number;
    effectiveRate: number;
    marginalRate: number;
  } | null>(null);
  const [incomeError, setIncomeError] = useState<string | null>(null);
  const [deductionsError, setDeductionsError] = useState<string | null>(null);

  const calculateTax = (taxableIncome: number) => {
    let tax = 0;
    let remainingIncome = taxableIncome;

    for (const bracket of TAX_BRACKETS) {
      if (remainingIncome <= 0) break;

      const bracketIncome = Math.min(
        remainingIncome,
        bracket.max === Infinity ? remainingIncome : bracket.max - bracket.min
      );
      tax += bracketIncome * bracket.rate;
      remainingIncome -= bracketIncome;
    }

    return tax;
  };

  const calculate = () => {
    const grossIncome = parseLocaleNumber(income, locale);
    const itemizedDeductions = deductions.trim() ? (parseLocaleNumber(deductions, locale) ?? 0) : 0;

    if (grossIncome == null || grossIncome <= 0) {
      setIncomeError(isTr ? "Pozitif gelir girin" : "Enter a positive income");
      setResult(null);
      return;
    }
    if (deductions.trim() && (itemizedDeductions < 0 || isNaN(itemizedDeductions))) {
      setDeductionsError(isTr ? "Geçerli bir tutar girin" : "Enter a valid amount");
      setResult(null);
      return;
    }
    setIncomeError(null);
    setDeductionsError(null);

    if (grossIncome > 0) {
      const deduction = Math.max(STANDARD_DEDUCTION, itemizedDeductions);
      const taxableIncome = Math.max(0, grossIncome - deduction);
      const taxOwed = calculateTax(taxableIncome);
      const effectiveRate = (taxOwed / grossIncome) * 100;

      // Find marginal rate
      let marginalRate = 0;
      for (const bracket of TAX_BRACKETS) {
        if (taxableIncome >= bracket.min && taxableIncome < bracket.max) {
          marginalRate = bracket.rate * 100;
          break;
        }
      }

      setResult({
        taxableIncome,
        taxOwed,
        effectiveRate,
        marginalRate,
      });
    }
  };

  const reset = () => {
    setIncome("");
    setDeductions("");
    setResult(null);
    setIncomeError(null);
    setDeductionsError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <FormattedNumberInput
            label={isTr ? "Yıllık Gelir ($)" : "Annual Income ($)"}
            value={income}
            onChange={(v) => { setIncome(v); setIncomeError(null); }}
            locale={locale}
            formatAs="currency"
            error={incomeError || undefined}
            helperText={isTr ? "Brüt yıllık gelirinizi girin" : "Enter your gross annual income"}
          />
          <FormattedNumberInput
            label={isTr ? "İndirimler ($) – İsteğe bağlı" : "Itemized Deductions ($) - Optional"}
            value={deductions}
            onChange={(v) => { setDeductions(v); setDeductionsError(null); }}
            locale={locale}
            formatAs="currency"
            error={deductionsError || undefined}
            helperText={isTr ? "İndirimleri girin veya standart indirim için boş bırakın" : "Enter itemized deductions or leave blank to use standard deduction"}
          />
          <p className="text-sm text-[#64748b]">
            {isTr ? "2026 standart indirim: " : "Standard deduction for 2026: "}{formatCurrency(STANDARD_DEDUCTION, locale)}
          </p>

          <div className="flex gap-3">
            <Button onClick={calculate} className="flex-1">
              {isTr ? "Vergi Hesapla" : "Calculate Tax"}
            </Button>
            <Button onClick={reset} variant="outline">
              {isTr ? "Sıfırla" : "Reset"}
            </Button>
          </div>
        </div>

        {result && (
          <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-[#1e293b]">
              {isTr ? "Vergi Sonuçları" : "Tax Results"}
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-[#64748b]">
                  {isTr ? "Vergiye tabi gelir" : "Taxable Income"}
                </p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.taxableIncome, locale)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">
                  {isTr ? "Ödenecek vergi" : "Tax Owed"}
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.taxOwed, locale)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">
                  {isTr ? "Etkin vergi oranı" : "Effective Tax Rate"}
                </p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  {formatPercent(result.effectiveRate, locale)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">
                  {isTr ? "Marjinal vergi oranı" : "Marginal Tax Rate"}
                </p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  {formatPercent(result.marginalRate, locale)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


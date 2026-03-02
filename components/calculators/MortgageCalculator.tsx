"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatCurrency } from "@/lib/format/locale-format";

type Locale = "en" | "tr";

export function MortgageCalculator({ locale: localeProp = "en" }: { locale?: Locale }) {
  const locale = localeProp;
  const isTr = locale === "tr";
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalInterest: number;
    totalPayment: number;
  } | null>(null);
  const [principalError, setPrincipalError] = useState<string | null>(null);
  const [interestRateError, setInterestRateError] = useState<string | null>(null);
  const [loanTermError, setLoanTermError] = useState<string | null>(null);

  const calculate = () => {
    const p = parseLocaleNumber(principal, locale);
    const rateRaw = parseLocaleNumber(interestRate.replace(/%/g, "").trim(), locale);
    const nYears = parseLocaleNumber(loanTerm, locale);

    if (p == null || p < 1000 || p > 10000000) {
      setPrincipalError(isTr ? "1.000 – 10.000.000 arası girin" : "Enter between 1,000 and 10,000,000");
      setResult(null);
      return;
    }
    if (rateRaw == null || rateRaw < 0 || rateRaw > 100) {
      setInterestRateError(isTr ? "Yıllık faiz oranı %0–100" : "Annual interest rate 0–100%");
      setResult(null);
      return;
    }
    if (nYears == null || nYears < 1 || nYears > 50) {
      setLoanTermError(isTr ? "1–50 yıl arası girin" : "Enter 1–50 years");
      setResult(null);
      return;
    }
    setPrincipalError(null);
    setInterestRateError(null);
    setLoanTermError(null);

    const r = rateRaw / 100 / 12;
    const n = nYears * 12;
    const monthlyPayment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = monthlyPayment * n;
    const totalInterest = totalPayment - p;

    setResult({ monthlyPayment, totalInterest, totalPayment });
  };

  const reset = () => {
    setPrincipal("");
    setInterestRate("");
    setLoanTerm("");
    setResult(null);
    setPrincipalError(null);
    setInterestRateError(null);
    setLoanTermError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <FormattedNumberInput
            label={isTr ? "Kredi Tutarı ($)" : "Loan Amount ($)"}
            value={principal}
            onChange={(v) => { setPrincipal(v); setPrincipalError(null); }}
            locale={locale}
            formatAs="currency"
            error={principalError || undefined}
            helperText={isTr ? "Toplam kredi tutarını girin" : "Enter the total loan amount"}
          />
          <FormattedNumberInput
            label={isTr ? "Yıllık Faiz Oranı (%)" : "Annual Interest Rate (%)"}
            value={interestRate}
            onChange={(v) => { setInterestRate(v); setInterestRateError(null); }}
            locale={locale}
            formatAs="percent"
            error={interestRateError || undefined}
            helperText={isTr ? "Yıllık faiz oranını yüzde olarak girin" : "Enter the annual interest rate as a percentage"}
          />
          <FormattedNumberInput
            label={isTr ? "Vade (yıl)" : "Loan Term (years)"}
            value={loanTerm}
            onChange={(v) => { setLoanTerm(v); setLoanTermError(null); }}
            locale={locale}
            formatAs="number"
            maxFractionDigits={0}
            error={loanTermError || undefined}
            helperText={isTr ? "Vadeyi yıl olarak girin (1–50)" : "Enter the loan term in years (1-50)"}
          />

          <div className="flex gap-3">
            <Button onClick={calculate} className="flex-1">
              {isTr ? "Hesapla" : "Calculate"}
            </Button>
            <Button onClick={reset} variant="outline">
              {isTr ? "Sıfırla" : "Reset"}
            </Button>
          </div>
        </div>

        {result && (
          <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-[#1e293b]">
              {isTr ? "Sonuçlar" : "Results"}
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-[#64748b]">
                  {isTr ? "Aylık Taksit" : "Monthly Payment"}
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.monthlyPayment, locale)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">
                  {isTr ? "Toplam Faiz" : "Total Interest"}
                </p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.totalInterest, locale)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">
                  {isTr ? "Toplam Ödeme" : "Total Payment"}
                </p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.totalPayment, locale)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


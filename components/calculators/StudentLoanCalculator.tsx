"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatCurrency } from "@/lib/format/locale-format";

type Locale = "en" | "tr";

export function StudentLoanCalculator({ locale: localeProp = "en" }: { locale?: Locale } = {}) {
  const locale = localeProp;
  const isTr = locale === "tr";
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [repaymentPlan, setRepaymentPlan] = useState<"standard" | "extended">("standard");
  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalInterest: number;
    totalPayment: number;
    payoffDate: string;
  } | null>(null);
  const [loanAmountError, setLoanAmountError] = useState<string | null>(null);
  const [interestRateError, setInterestRateError] = useState<string | null>(null);
  const [loanTermError, setLoanTermError] = useState<string | null>(null);

  const maxTerm = repaymentPlan === "standard" ? 10 : 25;

  const calculate = () => {
    const principal = parseLocaleNumber(loanAmount, locale);
    const rateRaw = parseLocaleNumber(interestRate.replace(/%/g, "").trim(), locale);
    const nYears = parseLocaleNumber(loanTerm, locale);

    if (principal == null || principal < 1000 || principal > 10000000) {
      setLoanAmountError(isTr ? "1.000 – 10.000.000 arası girin" : "Enter between 1,000 and 10,000,000");
      setResult(null);
      return;
    }
    if (rateRaw == null || rateRaw < 0 || rateRaw > 100) {
      setInterestRateError(isTr ? "Yıllık faiz oranı %0–100" : "Annual interest rate 0–100%");
      setResult(null);
      return;
    }
    if (nYears == null || nYears < 5 || nYears > maxTerm || !Number.isInteger(nYears)) {
      setLoanTermError(isTr ? `Vade 5–${maxTerm} yıl (tam sayı)` : `Loan term 5–${maxTerm} years (integer)`);
      setResult(null);
      return;
    }
    setLoanAmountError(null);
    setInterestRateError(null);
    setLoanTermError(null);

    const r = rateRaw / 100 / 12;
    const n = nYears * 12;
    const monthlyPayment = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = monthlyPayment * n;
    const totalInterest = totalPayment - principal;

    const today = new Date();
    const payoffDate = new Date(today);
    payoffDate.setMonth(payoffDate.getMonth() + n);
    const payoffDateStr = payoffDate.toLocaleDateString(locale === "tr" ? "tr-TR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    setResult({ monthlyPayment, totalInterest, totalPayment, payoffDate: payoffDateStr });
  };

  const reset = () => {
    setLoanAmount("");
    setInterestRate("");
    setLoanTerm("");
    setRepaymentPlan("standard");
    setResult(null);
    setLoanAmountError(null);
    setInterestRateError(null);
    setLoanTermError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <FormattedNumberInput
            label={isTr ? "Kredi Tutarı ($)" : "Loan Amount ($)"}
            value={loanAmount}
            onChange={(v) => { setLoanAmount(v); setLoanAmountError(null); }}
            locale={locale}
            formatAs="currency"
            error={loanAmountError || undefined}
            helperText={isTr ? "Toplam öğrenim kredisi tutarı" : "Enter the total student loan amount"}
          />
          <FormattedNumberInput
            label={isTr ? "Yıllık Faiz Oranı (%)" : "Annual Interest Rate (%)"}
            value={interestRate}
            onChange={(v) => { setInterestRate(v); setInterestRateError(null); }}
            locale={locale}
            formatAs="percent"
            error={interestRateError || undefined}
            helperText={isTr ? "Yıllık faiz oranı yüzde" : "Enter the annual interest rate as a percentage"}
          />
          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-1.5">
              {isTr ? "Geri Ödeme Planı" : "Repayment Plan"}
            </label>
            <select
              value={repaymentPlan}
              onChange={(e) => setRepaymentPlan(e.target.value as "standard" | "extended")}
              className="w-full px-4 py-2.5 border-2 border-[#e2e8f0] rounded-lg bg-white text-[#1e293b] min-h-[44px]"
            >
              <option value="standard">{isTr ? "Standart (5-10 yıl)" : "Standard (5-10 years)"}</option>
              <option value="extended">{isTr ? "Uzun (5-25 yıl)" : "Extended (5-25 years)"}</option>
            </select>
          </div>
          <FormattedNumberInput
            label={isTr ? "Vade (yıl)" : "Loan Term (years)"}
            value={loanTerm}
            onChange={(v) => { setLoanTerm(v); setLoanTermError(null); }}
            locale={locale}
            formatAs="number"
            maxFractionDigits={0}
            error={loanTermError || undefined}
            helperText={repaymentPlan === "standard" ? (isTr ? "Vade (5–10 yıl)" : "Enter the loan term in years (5-10)") : (isTr ? "Vade (5–25 yıl)" : "Enter the loan term in years (5-25)")}
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
              <div>
                <p className="text-sm text-[#64748b]">
                  {isTr ? "Kapanış Tarihi" : "Payoff Date"}
                </p>
                <p className="text-lg font-semibold text-[#1e293b]">
                  {result.payoffDate}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


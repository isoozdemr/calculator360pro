"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatCurrency } from "@/lib/format/locale-format";

type Locale = "en" | "tr";

export function CreditCardPayoffCalculator({ locale: localeProp = "en" }: { locale?: Locale } = {}) {
  const locale = localeProp;
  const isTr = locale === "tr";
  const [balance, setBalance] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [result, setResult] = useState<{
    payoffTime: number;
    totalInterest: number;
    totalPayment: number;
    minimumPayment: number;
    warning: string | null;
  } | null>(null);
  const [balanceError, setBalanceError] = useState<string | null>(null);
  const [interestRateError, setInterestRateError] = useState<string | null>(null);
  const [monthlyPaymentError, setMonthlyPaymentError] = useState<string | null>(null);

  const calculate = () => {
    const bal = parseLocaleNumber(balance, locale);
    const rateRaw = parseLocaleNumber(interestRate.replace(/%/g, "").trim(), locale);
    const payment = parseLocaleNumber(monthlyPayment, locale);

    if (bal == null || bal <= 0) {
      setBalanceError(isTr ? "Pozitif bakiye girin" : "Enter a positive balance");
      setResult(null);
      return;
    }
    if (rateRaw == null || rateRaw < 0 || rateRaw > 100) {
      setInterestRateError(isTr ? "Yıllık faiz oranı %0–100" : "Annual interest rate 0–100%");
      setResult(null);
      return;
    }
    if (payment == null || payment <= 0) {
      setMonthlyPaymentError(isTr ? "Pozitif aylık ödeme girin" : "Enter a positive monthly payment");
      setResult(null);
      return;
    }

    const rate = rateRaw / 100 / 12;
    const minimumPayment = Math.max(bal * 0.01 + bal * rate, 25);

    if (payment < minimumPayment) {
      setMonthlyPaymentError(isTr ? `Minimum ödeme en az ${formatCurrency(minimumPayment, locale)} olmalı` : `Minimum payment should be at least ${formatCurrency(minimumPayment, locale)}`);
      setResult(null);
      return;
    }

    if (payment <= bal * rate) {
      setMonthlyPaymentError(isTr ? "Aylık ödeme aylık faizden büyük olmalı" : "Monthly payment must be greater than monthly interest");
      setResult(null);
      return;
    }
    setBalanceError(null);
    setInterestRateError(null);
    setMonthlyPaymentError(null);

    // Calculate payoff time using iterative method
    let remainingBalance = bal;
    let months = 0;
    let totalInterest = 0;
    const maxMonths = 600; // 50 years max

    while (remainingBalance > 0.01 && months < maxMonths) {
      const monthlyInterest = remainingBalance * rate;
      totalInterest += monthlyInterest;
      remainingBalance = remainingBalance + monthlyInterest - payment;
      months++;
    }

    const totalPayment = bal + totalInterest;
    let warning: string | null = null;

    if (payment < minimumPayment * 1.5) {
      warning = isTr ? "Daha hızlı kapanması ve faiz tasarrufu için minimumun üzerinde ödeme yapmayı düşünün." : "Consider paying more than the minimum to pay off faster and save on interest.";
    }

    setResult({
      payoffTime: months,
      totalInterest,
      totalPayment,
      minimumPayment,
      warning,
    });
  };

  const reset = () => {
    setBalance("");
    setInterestRate("");
    setMonthlyPayment("");
    setResult(null);
    setBalanceError(null);
    setInterestRateError(null);
    setMonthlyPaymentError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <FormattedNumberInput
            label={isTr ? "Kredi Kartı Bakiyesi ($)" : "Credit Card Balance ($)"}
            value={balance}
            onChange={(v) => { setBalance(v); setBalanceError(null); }}
            locale={locale}
            formatAs="currency"
            error={balanceError || undefined}
            helperText={isTr ? "Güncel kredi kartı bakiyesi" : "Enter the current credit card balance"}
          />
          <FormattedNumberInput
            label={isTr ? "Yıllık Faiz Oranı (%)" : "Annual Interest Rate (%)"}
            value={interestRate}
            onChange={(v) => { setInterestRate(v); setInterestRateError(null); }}
            locale={locale}
            formatAs="percent"
            error={interestRateError || undefined}
            helperText={isTr ? "Yıllık faiz oranı (APR) yüzde" : "Enter the annual interest rate (APR) as a percentage"}
          />
          <FormattedNumberInput
            label={isTr ? "Aylık Ödeme ($)" : "Monthly Payment ($)"}
            value={monthlyPayment}
            onChange={(v) => { setMonthlyPayment(v); setMonthlyPaymentError(null); }}
            locale={locale}
            formatAs="currency"
            error={monthlyPaymentError || undefined}
            helperText={isTr ? "Her ay ödemeyi planladığınız tutar" : "Enter the amount you plan to pay each month"}
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
                  {isTr ? "Kapanma Süresi" : "Payoff Time"}
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {result.payoffTime < 12 
                    ? `${result.payoffTime} ${result.payoffTime === 1 ? (isTr ? "ay" : "month") : (isTr ? "ay" : "months")}`
                    : `${(result.payoffTime / 12).toFixed(1)} ${isTr ? "yıl" : "years"}`}
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
              <div className="pt-3 border-t border-[#10b981]/30">
                <p className="text-sm text-[#64748b]">
                  {isTr ? "Minimum Ödeme" : "Minimum Payment"}
                </p>
                <p className="text-lg font-semibold text-[#1e293b]">
                  {formatCurrency(result.minimumPayment, locale)}
                </p>
              </div>
              {result.warning && (
                <div className="pt-3 border-t border-[#10b981]/30">
                  <p className="text-sm text-[#ef4444] font-medium">
                    ⚠️ {result.warning}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


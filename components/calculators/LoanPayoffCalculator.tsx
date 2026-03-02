"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatCurrency } from "@/lib/format/locale-format";

type Locale = "en" | "tr";

function payoffMonths(
  balance: number,
  annualRate: number,
  monthlyPayment: number
): { months: number; totalInterest: number } {
  const r = annualRate / 100 / 12;
  let b = balance;
  let months = 0;
  let totalInterest = 0;
  const maxMonths = 600;
  while (b > 0.01 && months < maxMonths) {
    const interest = b * r;
    totalInterest += interest;
    b = b + interest - monthlyPayment;
    months++;
  }
  return { months, totalInterest };
}

export function LoanPayoffCalculator({ locale: localeProp = "en" }: { locale?: Locale }) {
  const locale = localeProp;
  const isTr = locale === "tr";
  const [balance, setBalance] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [extraPayment, setExtraPayment] = useState("");
  const [result, setResult] = useState<{
    monthsNoExtra: number;
    monthsWithExtra: number;
    interestNoExtra: number;
    interestWithExtra: number;
    interestSaved: number;
    totalPaymentNoExtra: number;
    totalPaymentWithExtra: number;
  } | null>(null);

  const [balanceError, setBalanceError] = useState<string | null>(null);
  const [interestRateError, setInterestRateError] = useState<string | null>(null);
  const [monthlyPaymentError, setMonthlyPaymentError] = useState<string | null>(null);
  const [extraPaymentError, setExtraPaymentError] = useState<string | null>(null);

  const calculate = () => {
    const bal = parseLocaleNumber(balance, locale);
    const rate = parseLocaleNumber(interestRate.replace(/%/g, "").trim(), locale);
    const payment = parseLocaleNumber(monthlyPayment, locale);
    const extra = extraPayment.trim() === "" ? 0 : (parseLocaleNumber(extraPayment, locale) ?? 0);

    if (bal == null || bal <= 0) {
      setBalanceError(isTr ? "Bakiye 0'dan büyük olmalı" : "Balance must be greater than 0");
      setResult(null);
      return;
    }
    if (rate == null || rate < 0 || rate > 100) {
      setInterestRateError(isTr ? "Faiz oranı 0–100 arası olmalı" : "Interest rate must be between 0 and 100");
      setResult(null);
      return;
    }
    if (payment == null || payment <= 0) {
      setMonthlyPaymentError(isTr ? "Aylık taksit 0'dan büyük olmalı" : "Monthly payment must be greater than 0");
      setResult(null);
      return;
    }
    if (extra < 0) {
      setExtraPaymentError(isTr ? "0 veya pozitif girin" : "Enter 0 or positive");
      setResult(null);
      return;
    }
    setBalanceError(null);
    setInterestRateError(null);
    setMonthlyPaymentError(null);
    setExtraPaymentError(null);

    const r = rate / 100 / 12;
    if (payment <= bal * r) {
      setMonthlyPaymentError(isTr ? "Aylık taksit, aylık faizden büyük olmalı" : "Monthly payment must be greater than monthly interest");
      return;
    }

    const noExtra = payoffMonths(bal, rate, payment);
    const withExtra = extra > 0 ? payoffMonths(bal, rate, payment + extra) : noExtra;

    setResult({
      monthsNoExtra: noExtra.months,
      monthsWithExtra: withExtra.months,
      interestNoExtra: noExtra.totalInterest,
      interestWithExtra: withExtra.totalInterest,
      interestSaved: noExtra.totalInterest - withExtra.totalInterest,
      totalPaymentNoExtra: bal + noExtra.totalInterest,
      totalPaymentWithExtra: bal + withExtra.totalInterest,
    });
  };

  const reset = () => {
    setBalance("");
    setInterestRate("");
    setMonthlyPayment("");
    setExtraPayment("");
    setResult(null);
    setBalanceError(null);
    setInterestRateError(null);
    setMonthlyPaymentError(null);
    setExtraPaymentError(null);
  };

  const formatMonths = (months: number) => {
    if (isTr) {
      if (months < 12) return `${months} ay`;
      const years = Math.floor(months / 12);
      const m = Math.round(months % 12);
      if (m === 0) return `${years} yıl`;
      return `${years} yıl ${m} ay`;
    }
    if (months < 12) return `${months} month${months !== 1 ? "s" : ""}`;
    const years = Math.floor(months / 12);
    const m = Math.round(months % 12);
    if (m === 0) return `${years} year${years !== 1 ? "s" : ""}`;
    return `${years} year${years !== 1 ? "s" : ""} ${m} month${m !== 1 ? "s" : ""}`;
  };
  const formatMoney = (n: number) => formatCurrency(n, locale);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <FormattedNumberInput
            label={isTr ? "Kalan Bakiye (TL)" : "Current Loan Balance ($)"}
            value={balance}
            onChange={(v) => { setBalance(v); setBalanceError(null); }}
            locale={locale}
            formatAs="currency"
            error={balanceError || undefined}
            helperText={isTr ? "Kalan anapara" : "Remaining principal"}
          />
          <FormattedNumberInput
            label={isTr ? "Yıllık Faiz Oranı (%)" : "Annual Interest Rate (%)"}
            value={interestRate}
            onChange={(v) => { setInterestRate(v); setInterestRateError(null); }}
            locale={locale}
            formatAs="percent"
            maxFractionDigits={2}
            error={interestRateError || undefined}
            helperText={isTr ? "Mevcut kredi APR" : "Current loan APR"}
          />
          <FormattedNumberInput
            label={isTr ? "Aylık Taksit (TL)" : "Monthly Payment ($)"}
            value={monthlyPayment}
            onChange={(v) => { setMonthlyPayment(v); setMonthlyPaymentError(null); }}
            locale={locale}
            formatAs="currency"
            error={monthlyPaymentError || undefined}
            helperText={isTr ? "Mevcut toplam aylık taksit (A+F)" : "Current total monthly payment (P&I)"}
          />
          <FormattedNumberInput
            label={isTr ? "Ekstra Aylık Ödeme (TL)" : "Extra Monthly Payment ($)"}
            value={extraPayment}
            onChange={(v) => { setExtraPayment(v); setExtraPaymentError(null); }}
            locale={locale}
            formatAs="currency"
            error={extraPaymentError || undefined}
            helperText={isTr ? "Her ay eklenecek ek tutar" : "Additional amount to add each month"}
          />

          <div className="flex gap-3">
            <Button onClick={calculate} className="flex-1">{isTr ? "Hesapla" : "Calculate"}</Button>
            <Button onClick={reset} variant="outline">{isTr ? "Sıfırla" : "Reset"}</Button>
          </div>
        </div>

        {result && (
          <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-[#1e293b]">{isTr ? "Kapanış Sonuçları" : "Payoff Results"}</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-[#64748b]">{isTr ? "Ekstra ödeme olmadan kapanış" : "Payoff without extra payment"}</p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">{formatMonths(result.monthsNoExtra)}</p>
                <p className="text-sm text-[#64748b]">{isTr ? "Toplam faiz: " : "Total interest: "}{formatMoney(result.interestNoExtra)}</p>
              </div>
              {result.monthsWithExtra !== result.monthsNoExtra && (
                <>
                  <div>
                    <p className="text-sm text-[#64748b]">{isTr ? "Ekstra ödeme ile kapanış" : "Payoff with extra payment"}</p>
                    <p className="text-2xl font-bold text-[#10b981] font-mono">{formatMonths(result.monthsWithExtra)}</p>
                    <p className="text-sm text-[#64748b]">{isTr ? "Toplam faiz: " : "Total interest: "}{formatMoney(result.interestWithExtra)}</p>
                  </div>
                  <div className="pt-3 border-t border-[#10b981]/30">
                    <p className="text-sm text-[#64748b]">{isTr ? "Tasarruf edilen faiz" : "Interest saved"}</p>
                    <p className="text-xl font-bold text-[#10b981]">{formatMoney(result.interestSaved)}</p>
                    <p className="text-sm text-[#64748b]">{isTr ? "Tasarruf edilen süre: " : "Time saved: "}{formatMonths(result.monthsNoExtra - result.monthsWithExtra)}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

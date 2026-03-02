"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

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
  const isTr = localeProp === "tr";
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
    const balanceErr = validateField(balance, COMMON_RULES.positiveNumber);
    const rateErr = validateField(interestRate, COMMON_RULES.interestRate);
    const paymentErr = validateField(monthlyPayment, COMMON_RULES.positiveNumber);
    const extraErr = validateField(extraPayment, { pattern: /^[0-9]+\.?[0-9]*$/, required: false, min: 0 });

    if (balanceErr || rateErr || paymentErr) {
      setBalanceError(balanceErr);
      setInterestRateError(rateErr);
      setMonthlyPaymentError(paymentErr);
      setExtraPaymentError(extraErr || null);
      setResult(null);
      return;
    }
    setBalanceError(null);
    setInterestRateError(null);
    setMonthlyPaymentError(null);
    setExtraPaymentError(extraErr || null);

    const bal = parseFloat(balance);
    const rate = parseFloat(interestRate);
    const payment = parseFloat(monthlyPayment);
    const extra = extraPayment.trim() === "" ? 0 : parseFloat(extraPayment);

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
  const formatMoney = (n: number) => isTr ? `${n.toLocaleString("tr-TR", { minimumFractionDigits: 2 })} ₺` : `$${n.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <Input
            label={isTr ? "Kalan Bakiye (TL)" : "Current Loan Balance ($)"}
            type="number"
            value={balance}
            onChange={(e) => { setBalance(e.target.value); setBalanceError(null); }}
            onBlur={() => setBalanceError(validateField(balance, COMMON_RULES.positiveNumber))}
            placeholder={isTr ? "örn. 200000" : "e.g. 200000"}
            error={balanceError || undefined}
            helperText={isTr ? "Kalan anapara" : "Remaining principal"}
            step="1000"
            min="1"
          />
          <Input
            label={isTr ? "Yıllık Faiz Oranı (%)" : "Annual Interest Rate (%)"}
            type="number"
            value={interestRate}
            onChange={(e) => { setInterestRate(e.target.value); setInterestRateError(null); }}
            onBlur={() => setInterestRateError(validateField(interestRate, COMMON_RULES.interestRate))}
            placeholder={isTr ? "örn. 6" : "e.g. 6"}
            error={interestRateError || undefined}
            helperText={isTr ? "Mevcut kredi APR" : "Current loan APR"}
            step="0.1"
            min="0"
            max="30"
          />
          <Input
            label={isTr ? "Aylık Taksit (TL)" : "Monthly Payment ($)"}
            type="number"
            value={monthlyPayment}
            onChange={(e) => { setMonthlyPayment(e.target.value); setMonthlyPaymentError(null); }}
            onBlur={() => setMonthlyPaymentError(validateField(monthlyPayment, COMMON_RULES.positiveNumber))}
            placeholder={isTr ? "Anapara + faiz" : "Principal + interest only"}
            error={monthlyPaymentError || undefined}
            helperText={isTr ? "Mevcut toplam aylık taksit (A+F)" : "Current total monthly payment (P&I)"}
            step="50"
            min="0.01"
          />
          <Input
            label={isTr ? "Ekstra Aylık Ödeme (TL)" : "Extra Monthly Payment ($)"}
            type="number"
            value={extraPayment}
            onChange={(e) => { setExtraPayment(e.target.value); setExtraPaymentError(null); }}
            onBlur={() => setExtraPaymentError(validateField(extraPayment, { pattern: /^[0-9]+\.?[0-9]*$/, required: false, min: 0 }) || null)}
            placeholder={isTr ? "İsteğe bağlı - örn. 100" : "Optional - e.g. 100"}
            error={extraPaymentError || undefined}
            helperText={isTr ? "Her ay eklenecek ek tutar" : "Additional amount to add each month"}
            step="25"
            min="0"
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

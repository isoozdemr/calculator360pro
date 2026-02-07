"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

const formatTL = (value: number) =>
  new Intl.NumberFormat("tr-TR", { style: "decimal", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value) + " TL";

export function TurkeyCreditCardPayoffCalculator() {
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

  const handleBalanceChange = (value: string) => {
    setBalance(value);
    if (balanceError) setBalanceError(null);
  };

  const handleInterestRateChange = (value: string) => {
    setInterestRate(value);
    if (interestRateError) setInterestRateError(null);
  };

  const handleMonthlyPaymentChange = (value: string) => {
    setMonthlyPayment(value);
    if (monthlyPaymentError) setMonthlyPaymentError(null);
  };

  const calculate = () => {
    const balanceErr = validateField(balance, COMMON_RULES.positiveNumber);
    const interestErr = validateField(interestRate, COMMON_RULES.interestRate);
    const paymentErr = validateField(monthlyPayment, COMMON_RULES.positiveNumber);

    if (balanceErr || interestErr || paymentErr) {
      setBalanceError(balanceErr);
      setInterestRateError(interestErr);
      setMonthlyPaymentError(paymentErr);
      return;
    }

    const bal = parseFloat(balance);
    const rate = parseFloat(interestRate) / 100 / 12;
    const payment = parseFloat(monthlyPayment);

    const minimumPayment = Math.max(bal * 0.01 + bal * rate, 25);

    if (payment < minimumPayment) {
      setMonthlyPaymentError(`Aylık ödeme en az ${formatTL(minimumPayment)} olmalıdır`);
      return;
    }

    if (payment <= bal * rate) {
      setMonthlyPaymentError("Aylık ödeme, aylık faiz tutarından büyük olmalıdır");
      return;
    }

    let remainingBalance = bal;
    let months = 0;
    let totalInterest = 0;
    const maxMonths = 600;

    while (remainingBalance > 0.01 && months < maxMonths) {
      const monthlyInterest = remainingBalance * rate;
      totalInterest += monthlyInterest;
      remainingBalance = remainingBalance + monthlyInterest - payment;
      months++;
    }

    const totalPayment = bal + totalInterest;
    let warning: string | null = null;
    if (payment < minimumPayment * 1.5) {
      warning = "Daha hızlı kapanması ve faiz tasarrufu için minimum ödemeden fazla ödeme yapmayı düşünün.";
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
          <Input
            label="Borç Bakiyesi (TL)"
            type="number"
            value={balance}
            onChange={(e) => handleBalanceChange(e.target.value)}
            onBlur={() => {
              const error = validateField(balance, COMMON_RULES.positiveNumber);
              setBalanceError(error);
            }}
            placeholder="Kredi kartı bakiyesi (örn. 5000)"
            error={balanceError || undefined}
            helperText="Güncel kredi kartı borç bakiyesi"
            step="10"
            min="0.01"
          />
          <Input
            label="Yıllık Faiz Oranı (%)"
            type="number"
            value={interestRate}
            onChange={(e) => handleInterestRateChange(e.target.value)}
            onBlur={() => {
              const error = validateField(interestRate, COMMON_RULES.interestRate);
              setInterestRateError(error);
            }}
            placeholder="Faiz oranı (örn. 18,5)"
            error={interestRateError || undefined}
            helperText="Yıllık faiz oranı (APR) yüzde olarak"
            step="0.1"
            min="0"
            max="100"
          />
          <Input
            label="Aylık Ödeme (TL)"
            type="number"
            value={monthlyPayment}
            onChange={(e) => handleMonthlyPaymentChange(e.target.value)}
            onBlur={() => {
              const error = validateField(monthlyPayment, COMMON_RULES.positiveNumber);
              setMonthlyPaymentError(error);
            }}
            placeholder="Aylık ödeme (örn. 200)"
            error={monthlyPaymentError || undefined}
            helperText="Her ay ödemeyi planladığınız tutar"
            step="10"
            min="0.01"
          />

          <div className="flex gap-3">
            <Button onClick={calculate} className="flex-1">
              Hesapla
            </Button>
            <Button onClick={reset} variant="outline">
              Sıfırla
            </Button>
          </div>
        </div>

        {result && (
          <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-[#1e293b]">Sonuçlar</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-[#64748b]">Kapanma Süresi</p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {result.payoffTime < 12
                    ? `${result.payoffTime} ${result.payoffTime === 1 ? "ay" : "ay"}`
                    : `${(result.payoffTime / 12).toFixed(1)} yıl`}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">Toplam Faiz</p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">{formatTL(result.totalInterest)}</p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">Toplam Ödeme</p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">{formatTL(result.totalPayment)}</p>
              </div>
              <div className="pt-3 border-t border-[#10b981]/30">
                <p className="text-sm text-[#64748b]">Asgari Ödeme</p>
                <p className="text-lg font-semibold text-[#1e293b]">{formatTL(result.minimumPayment)}</p>
              </div>
              {result.warning && (
                <div className="pt-3 border-t border-[#10b981]/30">
                  <p className="text-sm text-[#ef4444] font-medium">⚠️ {result.warning}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

const formatTL = (value: number) =>
  new Intl.NumberFormat("tr-TR", { style: "decimal", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value) + " TL";

export function TurkeySavingsCalculator() {
  const [initialDeposit, setInitialDeposit] = useState("");
  const [monthlyDeposit, setMonthlyDeposit] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [result, setResult] = useState<{
    finalAmount: number;
    totalDeposits: number;
    interestEarned: number;
  } | null>(null);

  const [initialDepositError, setInitialDepositError] = useState<string | null>(null);
  const [monthlyDepositError, setMonthlyDepositError] = useState<string | null>(null);
  const [interestRateError, setInterestRateError] = useState<string | null>(null);
  const [timePeriodError, setTimePeriodError] = useState<string | null>(null);

  const handleInitialDepositChange = (value: string) => {
    setInitialDeposit(value);
    if (initialDepositError) setInitialDepositError(null);
  };

  const handleMonthlyDepositChange = (value: string) => {
    setMonthlyDeposit(value);
    if (monthlyDepositError) setMonthlyDepositError(null);
  };

  const handleInterestRateChange = (value: string) => {
    setInterestRate(value);
    if (interestRateError) setInterestRateError(null);
  };

  const handleTimePeriodChange = (value: string) => {
    setTimePeriod(value);
    if (timePeriodError) setTimePeriodError(null);
  };

  const calculate = () => {
    const initialErr = validateField(initialDeposit, COMMON_RULES.optionalPositive);
    const monthlyErr = validateField(monthlyDeposit, COMMON_RULES.optionalPositive);
    const interestErr = validateField(interestRate, COMMON_RULES.interestRate);
    const timeErr = validateField(timePeriod, COMMON_RULES.timeYears);

    if (interestErr || timeErr) {
      setInterestRateError(interestErr);
      setTimePeriodError(timeErr);
      return;
    }

    const initial = parseFloat(initialDeposit) || 0;
    const monthly = parseFloat(monthlyDeposit) || 0;
    const rate = parseFloat(interestRate) / 100 / 12;
    const years = parseFloat(timePeriod);
    const months = years * 12;

    if (!isNaN(initial) && !isNaN(monthly) && !isNaN(rate) && !isNaN(months) && months > 0) {
      let finalAmount = initial * Math.pow(1 + rate, months);
      if (monthly > 0 && rate > 0) {
        finalAmount += monthly * ((Math.pow(1 + rate, months) - 1) / rate);
      } else if (monthly > 0) {
        finalAmount += monthly * months;
      }
      const totalDeposits = initial + monthly * months;
      const interestEarned = finalAmount - totalDeposits;
      setResult({ finalAmount, totalDeposits, interestEarned });
    }
  };

  const reset = () => {
    setInitialDeposit("");
    setMonthlyDeposit("");
    setInterestRate("");
    setTimePeriod("");
    setResult(null);
    setInitialDepositError(null);
    setMonthlyDepositError(null);
    setInterestRateError(null);
    setTimePeriodError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <Input
            label="Başlangıç Birikimi (TL)"
            type="number"
            value={initialDeposit}
            onChange={(e) => handleInitialDepositChange(e.target.value)}
            onBlur={() => {
              const error = validateField(initialDeposit, COMMON_RULES.optionalPositive);
              setInitialDepositError(error);
            }}
            placeholder="Başlangıç tutarı (örn. 1000)"
            error={initialDepositError || undefined}
            helperText="İsteğe bağlı: başlangıç tutarı"
            step="100"
            min="0"
          />
          <Input
            label="Aylık Birikim (TL)"
            type="number"
            value={monthlyDeposit}
            onChange={(e) => handleMonthlyDepositChange(e.target.value)}
            onBlur={() => {
              const error = validateField(monthlyDeposit, COMMON_RULES.optionalPositive);
              setMonthlyDepositError(error);
            }}
            placeholder="Aylık birikim (örn. 200)"
            error={monthlyDepositError || undefined}
            helperText="İsteğe bağlı: aylık tasarruf tutarı"
            step="10"
            min="0"
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
            placeholder="Faiz oranı (örn. 3,5)"
            error={interestRateError || undefined}
            helperText="Yıllık faiz oranı (yüzde)"
            step="0.01"
            min="0"
            max="100"
          />
          <Input
            label="Vade (yıl)"
            type="number"
            value={timePeriod}
            onChange={(e) => handleTimePeriodChange(e.target.value)}
            onBlur={() => {
              const error = validateField(timePeriod, COMMON_RULES.timeYears);
              setTimePeriodError(error);
            }}
            placeholder="Birikim süresi (örn. 10)"
            error={timePeriodError || undefined}
            helperText="Birikim vadesi (yıl)"
            step="0.1"
            min="0.01"
            max="100"
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
                <p className="text-sm text-[#64748b]">Toplam Birikim</p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">{formatTL(result.finalAmount)}</p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">Yatırılan Toplam</p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">{formatTL(result.totalDeposits)}</p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">Faiz Getirisi</p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">{formatTL(result.interestEarned)}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

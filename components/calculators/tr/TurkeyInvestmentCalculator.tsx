"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

const formatTL = (value: number) =>
  new Intl.NumberFormat("tr-TR", { style: "decimal", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value) + " TL";

export function TurkeyInvestmentCalculator() {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [result, setResult] = useState<{
    finalAmount: number;
    totalContributions: number;
    interestEarned: number;
  } | null>(null);

  const [initialInvestmentError, setInitialInvestmentError] = useState<string | null>(null);
  const [monthlyContributionError, setMonthlyContributionError] = useState<string | null>(null);
  const [interestRateError, setInterestRateError] = useState<string | null>(null);
  const [timePeriodError, setTimePeriodError] = useState<string | null>(null);

  const handleInitialInvestmentChange = (value: string) => {
    setInitialInvestment(value);
    if (initialInvestmentError) setInitialInvestmentError(null);
  };

  const handleMonthlyContributionChange = (value: string) => {
    setMonthlyContribution(value);
    if (monthlyContributionError) setMonthlyContributionError(null);
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
    const initialErr = validateField(initialInvestment, COMMON_RULES.optionalPositive);
    const monthlyErr = validateField(monthlyContribution, COMMON_RULES.optionalPositive);
    const interestErr = validateField(interestRate, COMMON_RULES.interestRate);
    const timeErr = validateField(timePeriod, COMMON_RULES.timeYears);

    if (interestErr || timeErr) {
      setInterestRateError(interestErr);
      setTimePeriodError(timeErr);
      return;
    }

    const initial = parseFloat(initialInvestment) || 0;
    const monthly = parseFloat(monthlyContribution) || 0;
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
      const totalContributions = initial + monthly * months;
      const interestEarned = finalAmount - totalContributions;
      setResult({ finalAmount, totalContributions, interestEarned });
    }
  };

  const reset = () => {
    setInitialInvestment("");
    setMonthlyContribution("");
    setInterestRate("");
    setTimePeriod("");
    setResult(null);
    setInitialInvestmentError(null);
    setMonthlyContributionError(null);
    setInterestRateError(null);
    setTimePeriodError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <Input
            label="Başlangıç Tutarı (TL)"
            type="number"
            value={initialInvestment}
            onChange={(e) => handleInitialInvestmentChange(e.target.value)}
            onBlur={() => {
              const error = validateField(initialInvestment, COMMON_RULES.optionalPositive);
              setInitialInvestmentError(error);
            }}
            placeholder="Başlangıç tutarı (örn. 5000)"
            error={initialInvestmentError || undefined}
            helperText="İsteğe bağlı: ilk yatırım tutarı"
            step="100"
            min="0"
          />
          <Input
            label="Aylık Yatırım (TL)"
            type="number"
            value={monthlyContribution}
            onChange={(e) => handleMonthlyContributionChange(e.target.value)}
            onBlur={() => {
              const error = validateField(monthlyContribution, COMMON_RULES.optionalPositive);
              setMonthlyContributionError(error);
            }}
            placeholder="Aylık yatırım (örn. 500)"
            error={monthlyContributionError || undefined}
            helperText="İsteğe bağlı: her ay yatırılacak tutar"
            step="10"
            min="0"
          />
          <Input
            label="Yıllık Getiri Oranı (%)"
            type="number"
            value={interestRate}
            onChange={(e) => handleInterestRateChange(e.target.value)}
            onBlur={() => {
              const error = validateField(interestRate, COMMON_RULES.interestRate);
              setInterestRateError(error);
            }}
            placeholder="Beklenen yıllık getiri (örn. 7)"
            error={interestRateError || undefined}
            helperText="Beklenen yıllık getiri oranı"
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
            placeholder="Yatırım süresi (örn. 20)"
            error={timePeriodError || undefined}
            helperText="Yatırım vadesi (yıl)"
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
                <p className="text-sm text-[#64748b]">Tahmini Son Değer</p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">{formatTL(result.finalAmount)}</p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">Toplam Yatırım</p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">{formatTL(result.totalContributions)}</p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">Getiri</p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">{formatTL(result.interestEarned)}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

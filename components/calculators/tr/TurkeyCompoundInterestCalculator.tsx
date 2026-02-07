"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

const formatTL = (value: number) =>
  new Intl.NumberFormat("tr-TR", { style: "decimal", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value) + " TL";

export function TurkeyCompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [time, setTime] = useState("");
  const [compoundingFrequency, setCompoundingFrequency] = useState("12");
  const [result, setResult] = useState<{
    finalAmount: number;
    interestEarned: number;
  } | null>(null);

  const [principalError, setPrincipalError] = useState<string | null>(null);
  const [interestRateError, setInterestRateError] = useState<string | null>(null);
  const [timeError, setTimeError] = useState<string | null>(null);

  const handlePrincipalChange = (value: string) => {
    setPrincipal(value);
    if (principalError) setPrincipalError(null);
  };

  const handleInterestRateChange = (value: string) => {
    setInterestRate(value);
    if (interestRateError) setInterestRateError(null);
  };

  const handleTimeChange = (value: string) => {
    setTime(value);
    if (timeError) setTimeError(null);
  };

  const calculate = () => {
    const principalErr = validateField(principal, COMMON_RULES.positiveNumber);
    const interestErr = validateField(interestRate, COMMON_RULES.interestRate);
    const timeErr = validateField(time, COMMON_RULES.timeYears);

    if (principalErr || interestErr || timeErr) {
      setPrincipalError(principalErr);
      setInterestRateError(interestErr);
      setTimeError(timeErr);
      return;
    }

    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 100;
    const t = parseFloat(time);
    const n = parseFloat(compoundingFrequency);

    if (!isNaN(p) && !isNaN(r) && !isNaN(t) && !isNaN(n) && p > 0 && r >= 0 && t > 0 && n > 0) {
      const finalAmount = p * Math.pow(1 + r / n, n * t);
      const interestEarned = finalAmount - p;
      setResult({ finalAmount, interestEarned });
    }
  };

  const reset = () => {
    setPrincipal("");
    setInterestRate("");
    setTime("");
    setCompoundingFrequency("12");
    setResult(null);
    setPrincipalError(null);
    setInterestRateError(null);
    setTimeError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <Input
            label="Ana Para (TL)"
            type="number"
            value={principal}
            onChange={(e) => handlePrincipalChange(e.target.value)}
            onBlur={() => {
              const error = validateField(principal, COMMON_RULES.positiveNumber);
              setPrincipalError(error);
            }}
            placeholder="Ana para (örn. 10000)"
            error={principalError || undefined}
            helperText="Başlangıç yatırım tutarı"
            step="100"
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
            placeholder="Faiz oranı (örn. 5,5)"
            error={interestRateError || undefined}
            helperText="Yıllık faiz oranı (yüzde)"
            step="0.01"
            min="0"
            max="100"
          />
          <Input
            label="Vade (yıl)"
            type="number"
            value={time}
            onChange={(e) => handleTimeChange(e.target.value)}
            onBlur={() => {
              const error = validateField(time, COMMON_RULES.timeYears);
              setTimeError(error);
            }}
            placeholder="Vade (örn. 10)"
            error={timeError || undefined}
            helperText="Yatırım vadesi (yıl)"
            step="0.1"
            min="0.01"
            max="100"
          />
          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-1.5">Bileşikleşme Sıklığı</label>
            <select
              value={compoundingFrequency}
              onChange={(e) => setCompoundingFrequency(e.target.value)}
              className="w-full px-4 py-2.5 border-2 border-[#e2e8f0] rounded-lg bg-white text-[#1e293b] min-h-[44px]"
            >
              <option value="1">Yıllık</option>
              <option value="2">Altı ayda bir</option>
              <option value="4">Üç ayda bir</option>
              <option value="12">Aylık</option>
              <option value="365">Günlük</option>
            </select>
          </div>

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

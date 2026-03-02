"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatCurrency } from "@/lib/format/locale-format";

type Locale = "en" | "tr";

export function CompoundInterestCalculator({ locale: localeProp = "en" }: { locale?: Locale } = {}) {
  const locale = localeProp;
  const isTr = locale === "tr";
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

  const calculate = () => {
    const p = parseLocaleNumber(principal, locale);
    const rateRaw = parseLocaleNumber(interestRate.replace(/%/g, "").trim(), locale);
    const t = parseLocaleNumber(time, locale);
    const n = parseFloat(compoundingFrequency);

    if (p == null || p <= 0) {
      setPrincipalError(isTr ? "Pozitif tutar girin" : "Enter a positive amount");
      setResult(null);
      return;
    }
    if (rateRaw == null || rateRaw < 0 || rateRaw > 100) {
      setInterestRateError(isTr ? "Yıllık faiz oranı %0–100" : "Annual interest rate 0–100%");
      setResult(null);
      return;
    }
    if (t == null || t < 0.01 || t > 100) {
      setTimeError(isTr ? "0,01–100 yıl arası girin" : "Enter 0.01–100 years");
      setResult(null);
      return;
    }
    setPrincipalError(null);
    setInterestRateError(null);
    setTimeError(null);

    const r = rateRaw / 100;
    const finalAmount = p * Math.pow(1 + r / n, n * t);
    const interestEarned = finalAmount - p;
    setResult({ finalAmount, interestEarned });
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
          <FormattedNumberInput
            label={isTr ? "Ana Para ($)" : "Principal Amount ($)"}
            value={principal}
            onChange={(v) => { setPrincipal(v); setPrincipalError(null); }}
            locale={locale}
            formatAs="currency"
            error={principalError || undefined}
            helperText={isTr ? "Başlangıç yatırım tutarı" : "Enter the initial investment amount"}
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
          <FormattedNumberInput
            label={isTr ? "Süre (yıl)" : "Time (years)"}
            value={time}
            onChange={(v) => { setTime(v); setTimeError(null); }}
            locale={locale}
            formatAs="number"
            maxFractionDigits={2}
            error={timeError || undefined}
            helperText={isTr ? "Yatırım süresi (yıl)" : "Enter the investment period in years"}
          />
          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-1.5">
              {isTr ? "Birleştirme Sıklığı" : "Compounding Frequency"}
            </label>
            <select
              value={compoundingFrequency}
              onChange={(e) => setCompoundingFrequency(e.target.value)}
              className="w-full px-4 py-2.5 border-2 border-[#e2e8f0] rounded-lg bg-white text-[#1e293b] min-h-[44px]"
            >
              <option value="1">Annually</option>
              <option value="2">Semi-annually</option>
              <option value="4">Quarterly</option>
              <option value="12">Monthly</option>
              <option value="365">Daily</option>
            </select>
          </div>

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
                  {isTr ? "Toplam Tutar" : "Final Amount"}
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.finalAmount, locale)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">
                  {isTr ? "Kazanılan Faiz" : "Interest Earned"}
                </p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.interestEarned, locale)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


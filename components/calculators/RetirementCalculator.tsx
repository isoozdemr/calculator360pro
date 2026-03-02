"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatCurrency } from "@/lib/format/locale-format";

type Locale = "en" | "tr";

export function RetirementCalculator({ locale: localeProp = "en" }: { locale?: Locale } = {}) {
  const locale = localeProp;
  const isTr = locale === "tr";
  const [currentAge, setCurrentAge] = useState("");
  const [retirementAge, setRetirementAge] = useState("");
  const [currentSavings, setCurrentSavings] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [result, setResult] = useState<{
    retirementSavings: number;
    totalContributions: number;
    interestEarned: number;
    monthlyIncome: number;
  } | null>(null);
  const [currentAgeError, setCurrentAgeError] = useState<string | null>(null);
  const [retirementAgeError, setRetirementAgeError] = useState<string | null>(null);
  const [currentSavingsError, setCurrentSavingsError] = useState<string | null>(null);
  const [monthlyContributionError, setMonthlyContributionError] = useState<string | null>(null);
  const [expectedReturnError, setExpectedReturnError] = useState<string | null>(null);

  const parseOpt = (v: string) => (v.trim() ? (parseLocaleNumber(v, locale) ?? 0) : 0);

  const calculate = () => {
    const current = parseLocaleNumber(currentAge, locale);
    const retirement = parseLocaleNumber(retirementAge, locale);
    const savings = parseOpt(currentSavings);
    const monthly = parseOpt(monthlyContribution);
    const rateRaw = parseLocaleNumber(expectedReturn.replace(/%/g, "").trim(), locale);

    if (current == null || current < 18 || current > 100) {
      setCurrentAgeError(isTr ? "18–100 arası yaş girin" : "Enter age 18–100");
      setResult(null);
      return;
    }
    if (retirement == null || retirement < 18 || retirement > 100) {
      setRetirementAgeError(isTr ? "18–100 arası yaş girin" : "Enter age 18–100");
      setResult(null);
      return;
    }
    if (retirement <= current) {
      setRetirementAgeError(isTr ? "Emeklilik yaşı mevcut yaştan büyük olmalı" : "Retirement age must be greater than current age");
      setResult(null);
      return;
    }
    if (rateRaw == null || rateRaw < 0 || rateRaw > 100) {
      setExpectedReturnError(isTr ? "Beklenen getiri %0–100" : "Expected return 0–100%");
      setResult(null);
      return;
    }
    setCurrentAgeError(null);
    setRetirementAgeError(null);
    setCurrentSavingsError(null);
    setMonthlyContributionError(null);
    setExpectedReturnError(null);

    const rate = rateRaw / 100 / 12;
    const months = (retirement - current) * 12;
    let retirementSavings = savings * Math.pow(1 + rate, months);
    if (monthly > 0 && rate > 0) {
      retirementSavings += monthly * ((Math.pow(1 + rate, months) - 1) / rate);
    } else if (monthly > 0) {
      retirementSavings += monthly * months;
    }
    const totalContributions = savings + monthly * months;
    const interestEarned = retirementSavings - totalContributions;
    const monthlyIncome = (retirementSavings * 0.04) / 12;
    setResult({ retirementSavings, totalContributions, interestEarned, monthlyIncome });
  };

  const reset = () => {
    setCurrentAge("");
    setRetirementAge("");
    setCurrentSavings("");
    setMonthlyContribution("");
    setExpectedReturn("");
    setResult(null);
    setCurrentAgeError(null);
    setRetirementAgeError(null);
    setCurrentSavingsError(null);
    setMonthlyContributionError(null);
    setExpectedReturnError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <FormattedNumberInput
            label={isTr ? "Mevcut Yaş" : "Current Age"}
            value={currentAge}
            onChange={(v) => { setCurrentAge(v); setCurrentAgeError(null); }}
            locale={locale}
            formatAs="number"
            maxFractionDigits={0}
            error={currentAgeError || undefined}
            helperText={isTr ? "Mevcut yaşınız" : "Enter your current age"}
          />
          <FormattedNumberInput
            label={isTr ? "Emeklilik Yaşı" : "Retirement Age"}
            value={retirementAge}
            onChange={(v) => { setRetirementAge(v); setRetirementAgeError(null); }}
            locale={locale}
            formatAs="number"
            maxFractionDigits={0}
            error={retirementAgeError || undefined}
            helperText={isTr ? "Planladığınız emeklilik yaşı" : "Enter your planned retirement age"}
          />
          <FormattedNumberInput
            label={isTr ? "Mevcut Birikim ($)" : "Current Savings ($)"}
            value={currentSavings}
            onChange={(v) => { setCurrentSavings(v); setCurrentSavingsError(null); }}
            locale={locale}
            formatAs="currency"
            error={currentSavingsError || undefined}
            helperText={isTr ? "Mevcut emeklilik birikiminiz (isteğe bağlı)" : "Enter your current retirement savings (optional)"}
          />
          <FormattedNumberInput
            label={isTr ? "Aylık Katkı ($)" : "Monthly Contribution ($)"}
            value={monthlyContribution}
            onChange={(v) => { setMonthlyContribution(v); setMonthlyContributionError(null); }}
            locale={locale}
            formatAs="currency"
            error={monthlyContributionError || undefined}
            helperText={isTr ? "Aylık emeklilik katkısı (isteğe bağlı)" : "Enter monthly retirement contribution (optional)"}
          />
          <FormattedNumberInput
            label={isTr ? "Beklenen Yıllık Getiri (%)" : "Expected Annual Return (%)"}
            value={expectedReturn}
            onChange={(v) => { setExpectedReturn(v); setExpectedReturnError(null); }}
            locale={locale}
            formatAs="percent"
            error={expectedReturnError || undefined}
            helperText={isTr ? "Beklenen yıllık getiri yüzde" : "Enter expected annual return as a percentage"}
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
              {isTr ? "Emeklilik Tahmini" : "Retirement Projection"}
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-[#64748b]">
                  {isTr ? "Emeklilik Birikimi" : "Retirement Savings"}
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.retirementSavings, locale)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">
                  {isTr ? "Toplam Katkı" : "Total Contributions"}
                </p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.totalContributions, locale)}
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
              <div className="pt-3 border-t border-[#10b981]/30">
                <p className="text-sm text-[#64748b]">
                  {isTr ? "Tahmini Aylık Gelir (%4 kuralı)" : "Estimated Monthly Income (4% rule)"}
                </p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.monthlyIncome, locale)}
                </p>
                <p className="text-xs text-[#64748b] mt-1">
                  {isTr ? "Yıllık %4 çekim oranına dayanır" : "Based on 4% annual withdrawal rate"}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatCurrency } from "@/lib/format/locale-format";

type Locale = "en" | "tr";

export function InvestmentCalculator({ locale: localeProp = "en" }: { locale?: Locale } = {}) {
  const locale = localeProp;
  const isTr = locale === "tr";
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

  const parseOpt = (v: string) => (v.trim() ? (parseLocaleNumber(v, locale) ?? 0) : 0);

  const calculate = () => {
    const initial = parseOpt(initialInvestment);
    const monthly = parseOpt(monthlyContribution);
    const rateRaw = parseLocaleNumber(interestRate.replace(/%/g, "").trim(), locale);
    const years = parseLocaleNumber(timePeriod, locale);

    if (rateRaw == null || rateRaw < 0 || rateRaw > 100) {
      setInterestRateError(isTr ? "Yıllık getiri %0–100" : "Annual return 0–100%");
      setResult(null);
      return;
    }
    if (years == null || years < 0.01 || years > 100) {
      setTimePeriodError(isTr ? "0,01–100 yıl arası girin" : "Enter 0.01–100 years");
      setResult(null);
      return;
    }
    setInitialInvestmentError(null);
    setMonthlyContributionError(null);
    setInterestRateError(null);
    setTimePeriodError(null);

    const rate = rateRaw / 100 / 12;
    const months = years * 12;
    let finalAmount = initial * Math.pow(1 + rate, months);
    if (monthly > 0 && rate > 0) {
      finalAmount += monthly * ((Math.pow(1 + rate, months) - 1) / rate);
    } else if (monthly > 0) {
      finalAmount += monthly * months;
    }
    const totalContributions = initial + monthly * months;
    const interestEarned = finalAmount - totalContributions;
    setResult({ finalAmount, totalContributions, interestEarned });
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
          <FormattedNumberInput
            label={isTr ? "Başlangıç Yatırımı ($)" : "Initial Investment ($)"}
            value={initialInvestment}
            onChange={(v) => { setInitialInvestment(v); setInitialInvestmentError(null); }}
            locale={locale}
            formatAs="currency"
            error={initialInvestmentError || undefined}
            helperText={isTr ? "Başlangıç yatırım tutarı (isteğe bağlı)" : "Enter starting investment amount (optional)"}
          />
          <FormattedNumberInput
            label={isTr ? "Aylık Katkı ($)" : "Monthly Contribution ($)"}
            value={monthlyContribution}
            onChange={(v) => { setMonthlyContribution(v); setMonthlyContributionError(null); }}
            locale={locale}
            formatAs="currency"
            error={monthlyContributionError || undefined}
            helperText={isTr ? "Aylık yatırım tutarı (isteğe bağlı)" : "Enter monthly investment amount (optional)"}
          />
          <FormattedNumberInput
            label={isTr ? "Yıllık Getiri Oranı (%)" : "Annual Interest Rate (%)"}
            value={interestRate}
            onChange={(v) => { setInterestRate(v); setInterestRateError(null); }}
            locale={locale}
            formatAs="percent"
            error={interestRateError || undefined}
            helperText={isTr ? "Beklenen yıllık getiri yüzde" : "Enter expected annual return as a percentage"}
          />
          <FormattedNumberInput
            label={isTr ? "Süre (yıl)" : "Time Period (years)"}
            value={timePeriod}
            onChange={(v) => { setTimePeriod(v); setTimePeriodError(null); }}
            locale={locale}
            formatAs="number"
            maxFractionDigits={2}
            error={timePeriodError || undefined}
            helperText={isTr ? "Yatırım süresi (yıl)" : "Enter the investment period in years"}
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
                  {isTr ? "Toplam Tutar" : "Final Amount"}
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.finalAmount, locale)}
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


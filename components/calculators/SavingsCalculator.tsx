"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatCurrency } from "@/lib/format/locale-format";

type Locale = "en" | "tr";

export function SavingsCalculator({ locale: localeProp = "en" }: { locale?: Locale } = {}) {
  const locale = localeProp;
  const isTr = locale === "tr";
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

  const calculate = () => {
    const initialParsed = initialDeposit.trim() ? parseLocaleNumber(initialDeposit, locale) : 0;
    const monthlyParsed = monthlyDeposit.trim() ? parseLocaleNumber(monthlyDeposit, locale) : 0;
    const initial = initialParsed ?? 0;
    const monthly = monthlyParsed ?? 0;
    const rateRaw = parseLocaleNumber(interestRate.replace(/%/g, "").trim(), locale);
    const years = parseLocaleNumber(timePeriod, locale);

    if (initialDeposit.trim() && initialParsed == null) {
      setInitialDepositError(isTr ? "Geçerli tutar girin" : "Enter a valid amount");
      setResult(null);
      return;
    }
    if (initial < 0) {
      setInitialDepositError(isTr ? "Negatif olamaz" : "Cannot be negative");
      setResult(null);
      return;
    }
    if (monthlyDeposit.trim() && monthlyParsed == null) {
      setMonthlyDepositError(isTr ? "Geçerli tutar girin" : "Enter a valid amount");
      setResult(null);
      return;
    }
    if (monthly < 0) {
      setMonthlyDepositError(isTr ? "Negatif olamaz" : "Cannot be negative");
      setResult(null);
      return;
    }
    if (rateRaw == null || rateRaw < 0 || rateRaw > 100) {
      setInterestRateError(isTr ? "Yıllık faiz oranı %0–100" : "Annual interest rate 0–100%");
      setResult(null);
      return;
    }
    if (years == null || years < 0.01 || years > 100) {
      setTimePeriodError(isTr ? "0,01–100 yıl arası girin" : "Enter 0.01–100 years");
      setResult(null);
      return;
    }
    setInitialDepositError(null);
    setMonthlyDepositError(null);
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
    const totalDeposits = initial + monthly * months;
    const interestEarned = finalAmount - totalDeposits;
    setResult({ finalAmount, totalDeposits, interestEarned });
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
          <FormattedNumberInput
            label={isTr ? "Başlangıç Yatırımı ($)" : "Initial Deposit ($)"}
            value={initialDeposit}
            onChange={(v) => { setInitialDeposit(v); setInitialDepositError(null); }}
            locale={locale}
            formatAs="currency"
            error={initialDepositError || undefined}
            helperText={isTr ? "Başlangıç tutarı (isteğe bağlı)" : "Enter starting amount (optional)"}
          />
          <FormattedNumberInput
            label={isTr ? "Aylık Yatırım ($)" : "Monthly Deposit ($)"}
            value={monthlyDeposit}
            onChange={(v) => { setMonthlyDeposit(v); setMonthlyDepositError(null); }}
            locale={locale}
            formatAs="currency"
            error={monthlyDepositError || undefined}
            helperText={isTr ? "Aylık tasarruf (isteğe bağlı)" : "Enter monthly savings amount (optional)"}
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
            label={isTr ? "Süre (yıl)" : "Time Period (years)"}
            value={timePeriod}
            onChange={(v) => { setTimePeriod(v); setTimePeriodError(null); }}
            locale={locale}
            formatAs="number"
            maxFractionDigits={2}
            error={timePeriodError || undefined}
            helperText={isTr ? "Tasarruf süresi (yıl)" : "Enter the savings period in years"}
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
                  {isTr ? "Toplam Yatırım" : "Total Deposits"}
                </p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.totalDeposits, locale)}
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


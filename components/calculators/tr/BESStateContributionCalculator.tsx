"use client";

import { useState } from "react";
import { BES_2026 } from "@/lib/data/turkey-2026-data";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatCurrency } from "@/lib/format/locale-format";

const STATE_RATE = BES_2026.stateContribution / 100; // 0.25
const STATE_CAP_PER_YEAR = BES_2026.maxStateContributionPerYear; // 20000

function calculateStateContribution(yearlyContribution: number): number {
  const stateAdd = yearlyContribution * STATE_RATE;
  return Math.min(stateAdd, STATE_CAP_PER_YEAR);
}

function calculateBESFutureValue(
  monthlyContribution: number,
  years: number,
  annualReturnPercent: number
): {
  totalUser: number;
  totalState: number;
  totalAccumulated: number;
  yearlyBreakdown: { year: number; user: number; state: number; balance: number }[];
} {
  const yearlyUser = monthlyContribution * 12;
  const r = annualReturnPercent / 100;
  let balance = 0;
  let totalUser = 0;
  let totalState = 0;
  const yearlyBreakdown: { year: number; user: number; state: number; balance: number }[] = [];

  for (let y = 1; y <= years; y++) {
    const stateAdd = calculateStateContribution(yearlyUser);
    totalUser += yearlyUser;
    totalState += stateAdd;
    balance = (balance + yearlyUser + stateAdd) * (1 + r);
    yearlyBreakdown.push({
      year: y,
      user: yearlyUser,
      state: stateAdd,
      balance: Math.round(balance * 100) / 100,
    });
  }

  return {
    totalUser,
    totalState,
    totalAccumulated: Math.round(balance * 100) / 100,
    yearlyBreakdown,
  };
}

export function BESStateContributionCalculator() {
  const [monthlyContribution, setMonthlyContribution] = useState("1000");
  const [years, setYears] = useState("10");
  const [annualReturn, setAnnualReturn] = useState("10");
  const [result, setResult] = useState<{
    totalUser: number;
    totalState: number;
    totalAccumulated: number;
    years: number;
  } | null>(null);

  const locale = "tr" as const;

  const calculate = () => {
    const monthly = parseLocaleNumber(monthlyContribution, locale);
    const yRaw = parseLocaleNumber(years, locale);
    const y = yRaw != null ? Math.round(yRaw) : NaN;
    const ret = parseLocaleNumber(annualReturn, locale);
    if (
      monthly == null ||
      monthly <= 0 ||
      Number.isNaN(y) ||
      y < 1 ||
      y > 40 ||
      ret == null ||
      ret < 0
    ) {
      return;
    }
    const calc = calculateBESFutureValue(monthly, y, ret);
    setResult({
      totalUser: calc.totalUser,
      totalState: calc.totalState,
      totalAccumulated: calc.totalAccumulated,
      years: y,
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-xl border-2 border-[#e2e8f0] p-6 shadow-sm space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <FormattedNumberInput
              label="Aylık katkı (TL)"
              value={monthlyContribution}
              onChange={setMonthlyContribution}
              locale={locale}
              formatAs="currency"
              helperText={undefined}
            />
            <p className="text-xs text-[#64748b] mt-1">
              Devlet %25 ekler (yıllık max {formatCurrency(STATE_CAP_PER_YEAR, locale)})
            </p>
          </div>
          <div>
            <FormattedNumberInput
              label="Katkı süresi (yıl)"
              value={years}
              onChange={setYears}
              locale={locale}
              formatAs="number"
              maxFractionDigits={0}
            />
          </div>
          <FormattedNumberInput
            label="Beklenen yıllık getiri (%)"
            value={annualReturn}
            onChange={setAnnualReturn}
            locale={locale}
            formatAs="percent"
            helperText={undefined}
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <Button onClick={calculate} variant="primary">
            Hesapla
          </Button>
          <Button
            onClick={() => {
              setMonthlyContribution("1000");
              setYears("10");
              setAnnualReturn("10");
              setResult(null);
            }}
            variant="secondary"
          >
            Sıfırla
          </Button>
        </div>
      </div>

      {result && (
        <div
          className="bg-gradient-to-br from-[#1e293b] to-[#334155] text-white rounded-xl p-6 shadow-lg"
          id="sonuc-ozeti"
        >
          <p className="text-sm text-[#94a3b8] mb-2">Sonuç özeti</p>
          <p className="text-xl md:text-2xl font-bold leading-snug mb-4">
            {result.years} yıl sonra toplam birikim:{" "}
            <span className="text-[#93c5fd]">
              {formatCurrency(result.totalAccumulated, locale)}
            </span>
          </p>
          <ul className="space-y-1 text-[#94a3b8] text-sm">
            <li>Sizin katkınız: {formatCurrency(result.totalUser, locale)}</li>
            <li>Devlet katkısı (%25): {formatCurrency(result.totalState, locale)}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

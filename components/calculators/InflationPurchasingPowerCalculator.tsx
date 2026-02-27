"use client";

import { useState } from "react";
import {
  adjustAmountForUSAInflation,
  USA_INFLATION_YEAR_MIN,
  USA_INFLATION_YEAR_MAX,
} from "@/lib/data/usa-inflation-data";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function InflationPurchasingPowerCalculator() {
  const [amount, setAmount] = useState("10000");
  const [startYear, setStartYear] = useState("2020");
  const [endYear, setEndYear] = useState("2026");
  const [result, setResult] = useState<{
    equivalentAmount: number;
    startYear: number;
    endYear: number;
    amount: number;
  } | null>(null);

  const yearOptions = Array.from(
    { length: USA_INFLATION_YEAR_MAX - USA_INFLATION_YEAR_MIN + 1 },
    (_, i) => USA_INFLATION_YEAR_MIN + i
  );

  const calculate = () => {
    const am = parseFloat(amount.replace(/,/g, "."));
    const sY = parseInt(startYear, 10);
    const eY = parseInt(endYear, 10);
    if (
      isNaN(am) ||
      am <= 0 ||
      isNaN(sY) ||
      isNaN(eY) ||
      sY < USA_INFLATION_YEAR_MIN ||
      sY > USA_INFLATION_YEAR_MAX ||
      eY < USA_INFLATION_YEAR_MIN ||
      eY > USA_INFLATION_YEAR_MAX
    ) {
      return;
    }
    const equivalentAmount = adjustAmountForUSAInflation(am, sY, eY);
    setResult({
      amount: am,
      startYear: sY,
      endYear: eY,
      equivalentAmount,
    });
  };

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-xl border-2 border-[#e2e8f0] p-6 shadow-sm space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-[#475569] mb-2">
              Amount ($)
            </label>
            <Input
              type="text"
              inputMode="decimal"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="10,000"
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#475569] mb-2">
              Start year
            </label>
            <select
              value={startYear}
              onChange={(e) => setStartYear(e.target.value)}
              className="w-full rounded-lg border border-[#e2e8f0] px-4 py-2.5 text-[#1e293b] focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
            >
              {yearOptions.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#475569] mb-2">
              End year
            </label>
            <select
              value={endYear}
              onChange={(e) => setEndYear(e.target.value)}
              className="w-full rounded-lg border border-[#e2e8f0] px-4 py-2.5 text-[#1e293b] focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
            >
              {yearOptions.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button onClick={calculate} variant="primary">
            Calculate
          </Button>
          <Button
            onClick={() => {
              setAmount("10000");
              setStartYear("2020");
              setEndYear("2026");
              setResult(null);
            }}
            variant="secondary"
          >
            Reset
          </Button>
        </div>
      </div>

      {result && (
        <div
          className="bg-gradient-to-br from-[#1e293b] to-[#334155] text-white rounded-xl p-6 shadow-lg"
          id="result-summary"
        >
          <p className="text-sm text-[#94a3b8] mb-2">Result summary</p>
          <p className="text-xl md:text-2xl font-bold leading-snug">
            {formatCurrency(result.amount)} ({result.startYear} value) is
            equivalent to approximately{" "}
            <span className="text-[#93c5fd]">
              {formatCurrency(result.equivalentAmount)}
            </span>{" "}
            in {result.endYear} purchasing power.
          </p>
          <p className="text-[#94a3b8] mt-3 text-sm">
            Based on BLS annual CPI-U inflation rates.
          </p>
        </div>
      )}
    </div>
  );
}

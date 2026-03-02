"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatNumber, formatPercent } from "@/lib/format/locale-format";

type Locale = "en" | "tr";

export function PercentageCalculator({ locale: localeProp = "en" }: { locale?: Locale }) {
  const locale = localeProp;
  const [value, setValue] = useState("");
  const [percentage, setPercentage] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [calculationType, setCalculationType] = useState<
    "of" | "increase" | "decrease"
  >("of");
  const [oldValue, setOldValue] = useState("");
  const [newValue, setNewValue] = useState("");
  
  const [valueError, setValueError] = useState<string | null>(null);
  const [percentageError, setPercentageError] = useState<string | null>(null);
  const [oldValueError, setOldValueError] = useState<string | null>(null);
  const [newValueError, setNewValueError] = useState<string | null>(null);

  const calculate = () => {
    if (calculationType === "of") {
      const val = parseLocaleNumber(value, locale);
      const perc = parseLocaleNumber(percentage.replace(/%/g, "").trim(), locale);
      if (val == null || val <= 0) {
        setValueError(locale === "tr" ? "Pozitif bir sayı girin" : "Enter a positive number");
        setResult(null);
        return;
      }
      if (perc == null || perc < 0 || perc > 100) {
        setPercentageError(locale === "tr" ? "0–100 arası girin" : "Enter a value between 0 and 100");
        setResult(null);
        return;
      }
      setValueError(null);
      setPercentageError(null);
      setResult((val * perc) / 100);
    } else if (calculationType === "increase" || calculationType === "decrease") {
      const old = parseLocaleNumber(oldValue, locale);
      const newVal = parseLocaleNumber(newValue, locale);
      if (old == null || old <= 0) {
        setOldValueError(locale === "tr" ? "Pozitif bir sayı girin" : "Enter a positive number");
        setResult(null);
        return;
      }
      if (newVal == null || newVal < 0) {
        setNewValueError(locale === "tr" ? "Geçerli bir sayı girin" : "Enter a valid number");
        setResult(null);
        return;
      }
      if (old === 0) {
        setOldValueError(locale === "tr" ? "Eski değer sıfır olamaz" : "Old value cannot be zero");
        setResult(null);
        return;
      }
      setOldValueError(null);
      setNewValueError(null);
      if (calculationType === "increase") {
        setResult(((newVal - old) / old) * 100);
      } else {
        setResult(((old - newVal) / old) * 100);
      }
    }
  };

  const reset = () => {
    setValue("");
    setPercentage("");
    setOldValue("");
    setNewValue("");
    setResult(null);
    setValueError(null);
    setPercentageError(null);
    setOldValueError(null);
    setNewValueError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setCalculationType("of")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] ${
                calculationType === "of"
                  ? "bg-[#2563eb] text-white"
                  : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              Percentage Of
            </button>
            <button
              onClick={() => setCalculationType("increase")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] ${
                calculationType === "increase"
                  ? "bg-[#2563eb] text-white"
                  : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              Percentage Increase
            </button>
            <button
              onClick={() => setCalculationType("decrease")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] ${
                calculationType === "decrease"
                  ? "bg-[#2563eb] text-white"
                  : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              Percentage Decrease
            </button>
          </div>

          {calculationType === "of" ? (
            <>
              <FormattedNumberInput
                label="Value"
                value={value}
                onChange={(v) => { setValue(v); setValueError(null); }}
                locale={locale}
                formatAs="number"
                error={valueError || undefined}
                helperText={locale === "tr" ? "Temel değeri girin" : "Enter the base value"}
              />
              <FormattedNumberInput
                label="Percentage (%)"
                value={percentage}
                onChange={(v) => { setPercentage(v); setPercentageError(null); }}
                locale={locale}
                formatAs="percent"
                error={percentageError || undefined}
                helperText={locale === "tr" ? "0–100 arası yüzde girin" : "Enter percentage between 0 and 100"}
              />
            </>
          ) : (
            <>
              <FormattedNumberInput
                label={locale === "tr" ? "Eski Değer" : "Old Value"}
                value={oldValue}
                onChange={(v) => { setOldValue(v); setOldValueError(null); }}
                locale={locale}
                formatAs="number"
                error={oldValueError || undefined}
                helperText={locale === "tr" ? "Orijinal değeri girin" : "Enter the original value"}
              />
              <FormattedNumberInput
                label={locale === "tr" ? "Yeni Değer" : "New Value"}
                value={newValue}
                onChange={(v) => { setNewValue(v); setNewValueError(null); }}
                locale={locale}
                formatAs="number"
                error={newValueError || undefined}
                helperText={locale === "tr" ? "Yeni değeri girin" : "Enter the new value"}
              />
            </>
          )}

          <div className="flex gap-3">
            <Button onClick={calculate} className="flex-1">
              Calculate
            </Button>
            <Button onClick={reset} variant="outline">
              Reset
            </Button>
          </div>
        </div>

        {result !== null && (
          <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#1e293b] mb-2">
              Result
            </h3>
            <p className="text-3xl font-bold text-[#10b981] font-mono">
              {calculationType === "of"
                ? formatNumber(result, locale, { minFractionDigits: 0, maxFractionDigits: 2 })
                : formatPercent(result, locale)}
            </p>
            {calculationType === "of" && (
              <p className="text-sm text-[#64748b] mt-2">
                {percentage}% of {value} = {formatNumber(result, locale, { minFractionDigits: 0, maxFractionDigits: 2 })}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}


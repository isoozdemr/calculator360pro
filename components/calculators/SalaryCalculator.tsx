"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatCurrency } from "@/lib/format/locale-format";

type Locale = "en" | "tr";

export function SalaryCalculator({ locale: localeProp = "en" }: { locale?: Locale } = {}) {
  const locale = localeProp;
  const isTr = locale === "tr";
  const [salary, setSalary] = useState("");
  const [payFrequency, setPayFrequency] = useState<"annual" | "monthly" | "hourly">("annual");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [result, setResult] = useState<{
    annual: number;
    monthly: number;
    weekly: number;
    hourly: number;
    takeHome: number;
  } | null>(null);
  const [salaryError, setSalaryError] = useState<string | null>(null);
  const [hoursError, setHoursError] = useState<string | null>(null);

  const calculate = () => {
    const salaryVal = parseLocaleNumber(salary, locale);
    const hoursVal = payFrequency === "hourly" ? parseLocaleNumber(hoursPerWeek, locale) : 40;

    if (salaryVal == null || salaryVal <= 0) {
      setSalaryError(isTr ? "Pozitif tutar girin" : "Enter a positive amount");
      setResult(null);
      return;
    }
    if (payFrequency === "hourly" && (hoursVal == null || hoursVal < 1 || hoursVal > 168)) {
      setHoursError(isTr ? "Haftalık 1–168 saat girin" : "Enter 1–168 hours per week");
      setResult(null);
      return;
    }
    setSalaryError(null);
    setHoursError(null);

    let annualSalary = 0;
    if (payFrequency === "annual") {
      annualSalary = salaryVal;
    } else if (payFrequency === "monthly") {
      annualSalary = salaryVal * 12;
    } else {
      const hours = hoursVal ?? 40;
      annualSalary = salaryVal * hours * 52;
    }

    const monthly = annualSalary / 12;
    const weekly = annualSalary / 52;
    const hours = hoursVal ?? 40;
    const hourly = annualSalary / (hours * 52);
    const takeHome = annualSalary * 0.8;

    setResult({ annual: annualSalary, monthly, weekly, hourly, takeHome });
  };

  const reset = () => {
    setSalary("");
    setPayFrequency("annual");
    setHoursPerWeek("40");
    setResult(null);
    setSalaryError(null);
    setHoursError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-1.5">
              Pay Frequency
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setPayFrequency("annual")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] ${
                  payFrequency === "annual"
                    ? "bg-[#2563eb] text-white"
                    : "bg-[#f1f5f9] text-[#1e293b]"
                }`}
              >
                Annual
              </button>
              <button
                onClick={() => setPayFrequency("monthly")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] ${
                  payFrequency === "monthly"
                    ? "bg-[#2563eb] text-white"
                    : "bg-[#f1f5f9] text-[#1e293b]"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setPayFrequency("hourly")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] ${
                  payFrequency === "hourly"
                    ? "bg-[#2563eb] text-white"
                    : "bg-[#f1f5f9] text-[#1e293b]"
                }`}
              >
                Hourly
              </button>
            </div>
          </div>

          <FormattedNumberInput
            label={
              payFrequency === "annual"
                ? (isTr ? "Yıllık Maaş ($)" : "Annual Salary ($)")
                : payFrequency === "monthly"
                ? (isTr ? "Aylık Maaş ($)" : "Monthly Salary ($)")
                : (isTr ? "Saatlik Ücret ($)" : "Hourly Wage ($)")
            }
            value={salary}
            onChange={(v) => { setSalary(v); setSalaryError(null); }}
            locale={locale}
            formatAs="currency"
            error={salaryError || undefined}
            helperText={
              payFrequency === "annual"
                ? (isTr ? "Yıllık maaşınızı girin" : "Enter your annual salary")
                : payFrequency === "monthly"
                ? (isTr ? "Aylık maaşınızı girin" : "Enter your monthly salary")
                : (isTr ? "Saatlik ücretinizi girin" : "Enter your hourly wage")
            }
          />

          {payFrequency === "hourly" && (
            <FormattedNumberInput
              label={isTr ? "Haftalık Saat" : "Hours Per Week"}
              value={hoursPerWeek}
              onChange={(v) => { setHoursPerWeek(v); setHoursError(null); }}
              locale={locale}
              formatAs="number"
              maxFractionDigits={0}
              error={hoursError || undefined}
              helperText={isTr ? "Haftalık çalışma saatinizi girin" : "Enter the number of hours you work per week"}
            />
          )}

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
              {isTr ? "Maaş Dağılımı" : "Salary Breakdown"}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-[#64748b]">{isTr ? "Yıllık" : "Annual"}</p>
                <p className="text-xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.annual, locale)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">{isTr ? "Aylık" : "Monthly"}</p>
                <p className="text-xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.monthly, locale)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">{isTr ? "Haftalık" : "Weekly"}</p>
                <p className="text-xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.weekly, locale)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">{isTr ? "Saatlik" : "Hourly"}</p>
                <p className="text-xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.hourly, locale)}
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-[#10b981]/30">
              <p className="text-sm text-[#64748b]">
                {isTr ? "Tahmini net (yaklaşık %20 vergi sonrası)" : "Estimated Take-Home (after ~20% taxes)"}
              </p>
              <p className="text-2xl font-bold text-[#10b981] font-mono">
                {formatCurrency(result.takeHome, locale)}/year
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


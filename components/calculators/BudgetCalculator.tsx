"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatCurrency, formatPercent } from "@/lib/format/locale-format";

type Locale = "en" | "tr";

export function BudgetCalculator({ locale: localeProp = "en" }: { locale?: Locale } = {}) {
  const locale = localeProp;
  const isTr = locale === "tr";
  const [income, setIncome] = useState("");
  const [housing, setHousing] = useState("");
  const [food, setFood] = useState("");
  const [transport, setTransport] = useState("");
  const [utilities, setUtilities] = useState("");
  const [entertainment, setEntertainment] = useState("");
  const [other, setOther] = useState("");
  const [result, setResult] = useState<{
    totalExpenses: number;
    remainingIncome: number;
    percentageBreakdown: Record<string, number>;
  } | null>(null);
  const [incomeError, setIncomeError] = useState<string | null>(null);
  const [housingError, setHousingError] = useState<string | null>(null);
  const [foodError, setFoodError] = useState<string | null>(null);
  const [transportError, setTransportError] = useState<string | null>(null);
  const [utilitiesError, setUtilitiesError] = useState<string | null>(null);
  const [entertainmentError, setEntertainmentError] = useState<string | null>(null);
  const [otherError, setOtherError] = useState<string | null>(null);

  const parseOpt = (v: string) => (v.trim() ? (parseLocaleNumber(v, locale) ?? 0) : 0);

  const calculate = () => {
    const incomeVal = parseLocaleNumber(income, locale);
    if (incomeVal == null || incomeVal <= 0) {
      setIncomeError(isTr ? "Pozitif gelir girin" : "Enter a positive income");
      setResult(null);
      return;
    }
    setIncomeError(null);
    setHousingError(null);
    setFoodError(null);
    setTransportError(null);
    setUtilitiesError(null);
    setEntertainmentError(null);
    setOtherError(null);

    const expenses = {
      housing: parseOpt(housing),
      food: parseOpt(food),
      transport: parseOpt(transport),
      utilities: parseOpt(utilities),
      entertainment: parseOpt(entertainment),
      other: parseOpt(other),
    };

    const totalExpenses = Object.values(expenses).reduce((sum, val) => sum + val, 0);
    const remainingIncome = incomeVal - totalExpenses;
    const percentageBreakdown: Record<string, number> = {};
    Object.entries(expenses).forEach(([key, value]) => {
      percentageBreakdown[key] = (value / incomeVal) * 100;
    });

    setResult({ totalExpenses, remainingIncome, percentageBreakdown });
  };

  const reset = () => {
    setIncome("");
    setHousing("");
    setFood("");
    setTransport("");
    setUtilities("");
    setEntertainment("");
    setOther("");
    setResult(null);
    setIncomeError(null);
    setHousingError(null);
    setFoodError(null);
    setTransportError(null);
    setUtilitiesError(null);
    setEntertainmentError(null);
    setOtherError(null);
  };

  const expenseLabels: Record<string, { en: string; tr: string }> = {
    housing: { en: "Housing", tr: "Konut" },
    food: { en: "Food", tr: "Yemek" },
    transport: { en: "Transport", tr: "Ulaşım" },
    utilities: { en: "Utilities", tr: "Faturalar" },
    entertainment: { en: "Entertainment", tr: "Eğlence" },
    other: { en: "Other", tr: "Diğer" },
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <FormattedNumberInput
            label={isTr ? "Aylık Gelir ($)" : "Monthly Income ($)"}
            value={income}
            onChange={(v) => { setIncome(v); setIncomeError(null); }}
            locale={locale}
            formatAs="currency"
            error={incomeError || undefined}
            helperText={isTr ? "Toplam aylık geliriniz" : "Enter your total monthly income"}
          />
          <FormattedNumberInput
            label={isTr ? "Konut ($)" : "Housing ($)"}
            value={housing}
            onChange={(v) => { setHousing(v); setHousingError(null); }}
            locale={locale}
            formatAs="currency"
            error={housingError || undefined}
            helperText={isTr ? "Kira, mortgage, sigorta vb." : "Rent, mortgage, insurance, etc."}
          />
          <FormattedNumberInput
            label={isTr ? "Yemek ($)" : "Food ($)"}
            value={food}
            onChange={(v) => { setFood(v); setFoodError(null); }}
            locale={locale}
            formatAs="currency"
            error={foodError || undefined}
            helperText={isTr ? "Market, restoran vb." : "Groceries, dining out, etc."}
          />
          <FormattedNumberInput
            label={isTr ? "Ulaşım ($)" : "Transport ($)"}
            value={transport}
            onChange={(v) => { setTransport(v); setTransportError(null); }}
            locale={locale}
            formatAs="currency"
            error={transportError || undefined}
            helperText={isTr ? "Araç, benzin, toplu taşıma vb." : "Car payment, gas, public transport, etc."}
          />
          <FormattedNumberInput
            label={isTr ? "Faturalar ($)" : "Utilities ($)"}
            value={utilities}
            onChange={(v) => { setUtilities(v); setUtilitiesError(null); }}
            locale={locale}
            formatAs="currency"
            error={utilitiesError || undefined}
            helperText={isTr ? "Elektrik, su, internet, telefon vb." : "Electricity, water, internet, phone, etc."}
          />
          <FormattedNumberInput
            label={isTr ? "Eğlence ($)" : "Entertainment ($)"}
            value={entertainment}
            onChange={(v) => { setEntertainment(v); setEntertainmentError(null); }}
            locale={locale}
            formatAs="currency"
            error={entertainmentError || undefined}
            helperText={isTr ? "Film, hobi, abonelikler vb." : "Movies, hobbies, subscriptions, etc."}
          />
          <FormattedNumberInput
            label={isTr ? "Diğer Giderler ($)" : "Other Expenses ($)"}
            value={other}
            onChange={(v) => { setOther(v); setOtherError(null); }}
            locale={locale}
            formatAs="currency"
            error={otherError || undefined}
            helperText={isTr ? "Diğer aylık giderler" : "Any other monthly expenses"}
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
              {isTr ? "Bütçe Özeti" : "Budget Summary"}
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-[#64748b]">
                  {isTr ? "Toplam Gider" : "Total Expenses"}
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.totalExpenses, locale)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">
                  {isTr ? "Kalan Gelir" : "Remaining Income"}
                </p>
                <p className={`text-3xl font-bold font-mono ${
                  result.remainingIncome >= 0 ? "text-[#10b981]" : "text-[#ef4444]"
                }`}>
                  {formatCurrency(result.remainingIncome, locale)}
                </p>
              </div>
              <div className="pt-3 border-t border-[#10b981]/30">
                <p className="text-sm font-semibold text-[#1e293b] mb-2">
                  {isTr ? "Gider dağılımı (gelire oran %)" : "Expense Breakdown (% of income)"}
                </p>
                <div className="space-y-1">
                  {Object.entries(result.percentageBreakdown).map(([key, percentage]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-[#64748b]">{expenseLabels[key][isTr ? "tr" : "en"]}:</span>
                      <span className="font-medium text-[#1e293b]">{formatPercent(percentage, locale, { maxFractionDigits: 1 })}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


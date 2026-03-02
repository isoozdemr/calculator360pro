"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatCurrency, formatPercent } from "@/lib/format/locale-format";

const locale = "tr" as const;

export function TurkeyBudgetCalculator() {
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

  const calculate = () => {
    const incomeVal = parseLocaleNumber(income, locale);
    if (incomeVal == null || incomeVal < 0) {
      setIncomeError("Geçerli bir gelir girin");
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
      housing: parseLocaleNumber(housing, locale) ?? 0,
      food: parseLocaleNumber(food, locale) ?? 0,
      transport: parseLocaleNumber(transport, locale) ?? 0,
      utilities: parseLocaleNumber(utilities, locale) ?? 0,
      entertainment: parseLocaleNumber(entertainment, locale) ?? 0,
      other: parseLocaleNumber(other, locale) ?? 0,
    };
    const totalExpenses = Object.values(expenses).reduce((sum, val) => sum + val, 0);
    const remainingIncome = incomeVal - totalExpenses;
    const percentageBreakdown: Record<string, number> = {};
    Object.entries(expenses).forEach(([key, value]) => {
      if (incomeVal > 0) percentageBreakdown[key] = (value / incomeVal) * 100;
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

  const expenseLabels: Record<string, string> = {
    housing: "Konut",
    food: "Yemek",
    transport: "Ulaşım",
    utilities: "Faturalar",
    entertainment: "Eğlence",
    other: "Diğer",
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <FormattedNumberInput label="Aylık Gelir (TL)" value={income} onChange={(v) => { setIncome(v); setIncomeError(null); }} locale={locale} formatAs="currency" error={incomeError || undefined} helperText="Toplam aylık geliriniz" />
          <FormattedNumberInput label="Konut (TL)" value={housing} onChange={(v) => { setHousing(v); setHousingError(null); }} locale={locale} formatAs="currency" error={housingError || undefined} helperText="Kira, mortgage, sigorta vb." />
          <FormattedNumberInput label="Yemek (TL)" value={food} onChange={(v) => { setFood(v); setFoodError(null); }} locale={locale} formatAs="currency" error={foodError || undefined} helperText="Market, restoran vb." />
          <FormattedNumberInput label="Ulaşım (TL)" value={transport} onChange={(v) => { setTransport(v); setTransportError(null); }} locale={locale} formatAs="currency" error={transportError || undefined} helperText="Araç, benzin, toplu taşıma vb." />
          <FormattedNumberInput label="Faturalar (TL)" value={utilities} onChange={(v) => { setUtilities(v); setUtilitiesError(null); }} locale={locale} formatAs="currency" error={utilitiesError || undefined} helperText="Elektrik, su, internet, telefon vb." />
          <FormattedNumberInput label="Eğlence (TL)" value={entertainment} onChange={(v) => { setEntertainment(v); setEntertainmentError(null); }} locale={locale} formatAs="currency" error={entertainmentError || undefined} helperText="Sinema, hobi, abonelikler vb." />
          <FormattedNumberInput label="Diğer Giderler (TL)" value={other} onChange={(v) => { setOther(v); setOtherError(null); }} locale={locale} formatAs="currency" error={otherError || undefined} helperText="Diğer aylık giderler" />

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
            <h3 className="text-lg font-semibold text-[#1e293b]">Bütçe Özeti</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-[#64748b]">Toplam Gider</p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">{formatCurrency(result.totalExpenses, locale)}</p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">Kalan Gelir</p>
                <p className={`text-3xl font-bold font-mono ${result.remainingIncome >= 0 ? "text-[#10b981]" : "text-[#ef4444]"}`}>
                  {formatCurrency(result.remainingIncome, locale)}
                </p>
              </div>
              <div className="pt-3 border-t border-[#10b981]/30">
                <p className="text-sm font-semibold text-[#1e293b] mb-2">Gider Dağılımı (gelire oranı %)</p>
                <div className="space-y-1">
                  {Object.entries(result.percentageBreakdown).map(([key, percentage]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-[#64748b]">{expenseLabels[key]}:</span>
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

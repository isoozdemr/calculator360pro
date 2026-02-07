"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

const formatTL = (value: number) =>
  new Intl.NumberFormat("tr-TR", { style: "decimal", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value) + " TL";

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

  const handleIncomeChange = (value: string) => {
    setIncome(value);
    if (incomeError) setIncomeError(null);
  };

  const handleExpenseChange = (setter: (v: string) => void, errorSetter: (v: string | null) => void) => (value: string) => {
    setter(value);
    errorSetter(null);
  };

  const calculate = () => {
    const incomeErr = validateField(income, COMMON_RULES.income);
    const housingErr = validateField(housing, COMMON_RULES.optionalPositive);
    const foodErr = validateField(food, COMMON_RULES.optionalPositive);
    const transportErr = validateField(transport, COMMON_RULES.optionalPositive);
    const utilitiesErr = validateField(utilities, COMMON_RULES.optionalPositive);
    const entertainmentErr = validateField(entertainment, COMMON_RULES.optionalPositive);
    const otherErr = validateField(other, COMMON_RULES.optionalPositive);

    if (incomeErr) {
      setIncomeError(incomeErr);
      return;
    }

    const incomeVal = parseFloat(income);
    const expenses = {
      housing: parseFloat(housing) || 0,
      food: parseFloat(food) || 0,
      transport: parseFloat(transport) || 0,
      utilities: parseFloat(utilities) || 0,
      entertainment: parseFloat(entertainment) || 0,
      other: parseFloat(other) || 0,
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
          <Input
            label="Aylık Gelir (TL)"
            type="number"
            value={income}
            onChange={(e) => handleIncomeChange(e.target.value)}
            onBlur={() => {
              const error = validateField(income, COMMON_RULES.income);
              setIncomeError(error);
            }}
            placeholder="Aylık gelir (örn. 5000)"
            error={incomeError || undefined}
            helperText="Toplam aylık geliriniz"
            step="100"
            min="0"
          />
          <Input
            label="Konut (TL)"
            type="number"
            value={housing}
            onChange={(e) => handleExpenseChange(setHousing, setHousingError)(e.target.value)}
            onBlur={() => {
              const error = validateField(housing, COMMON_RULES.optionalPositive);
              setHousingError(error);
            }}
            placeholder="Konut giderleri (örn. 1500)"
            error={housingError || undefined}
            helperText="Kira, mortgage, sigorta vb."
            step="10"
            min="0"
          />
          <Input
            label="Yemek (TL)"
            type="number"
            value={food}
            onChange={(e) => handleExpenseChange(setFood, setFoodError)(e.target.value)}
            onBlur={() => {
              const error = validateField(food, COMMON_RULES.optionalPositive);
              setFoodError(error);
            }}
            placeholder="Yemek giderleri (örn. 600)"
            error={foodError || undefined}
            helperText="Market, restoran vb."
            step="10"
            min="0"
          />
          <Input
            label="Ulaşım (TL)"
            type="number"
            value={transport}
            onChange={(e) => handleExpenseChange(setTransport, setTransportError)(e.target.value)}
            onBlur={() => {
              const error = validateField(transport, COMMON_RULES.optionalPositive);
              setTransportError(error);
            }}
            placeholder="Ulaşım giderleri (örn. 400)"
            error={transportError || undefined}
            helperText="Araç, benzin, toplu taşıma vb."
            step="10"
            min="0"
          />
          <Input
            label="Faturalar (TL)"
            type="number"
            value={utilities}
            onChange={(e) => handleExpenseChange(setUtilities, setUtilitiesError)(e.target.value)}
            onBlur={() => {
              const error = validateField(utilities, COMMON_RULES.optionalPositive);
              setUtilitiesError(error);
            }}
            placeholder="Fatura giderleri (örn. 200)"
            error={utilitiesError || undefined}
            helperText="Elektrik, su, internet, telefon vb."
            step="10"
            min="0"
          />
          <Input
            label="Eğlence (TL)"
            type="number"
            value={entertainment}
            onChange={(e) => handleExpenseChange(setEntertainment, setEntertainmentError)(e.target.value)}
            onBlur={() => {
              const error = validateField(entertainment, COMMON_RULES.optionalPositive);
              setEntertainmentError(error);
            }}
            placeholder="Eğlence giderleri (örn. 300)"
            error={entertainmentError || undefined}
            helperText="Sinema, hobi, abonelikler vb."
            step="10"
            min="0"
          />
          <Input
            label="Diğer Giderler (TL)"
            type="number"
            value={other}
            onChange={(e) => handleExpenseChange(setOther, setOtherError)(e.target.value)}
            onBlur={() => {
              const error = validateField(other, COMMON_RULES.optionalPositive);
              setOtherError(error);
            }}
            placeholder="Diğer giderler (örn. 500)"
            error={otherError || undefined}
            helperText="Diğer aylık giderler"
            step="10"
            min="0"
          />

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
                <p className="text-3xl font-bold text-[#10b981] font-mono">{formatTL(result.totalExpenses)}</p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">Kalan Gelir</p>
                <p className={`text-3xl font-bold font-mono ${result.remainingIncome >= 0 ? "text-[#10b981]" : "text-[#ef4444]"}`}>
                  {formatTL(result.remainingIncome)}
                </p>
              </div>
              <div className="pt-3 border-t border-[#10b981]/30">
                <p className="text-sm font-semibold text-[#1e293b] mb-2">Gider Dağılımı (gelire oranı %)</p>
                <div className="space-y-1">
                  {Object.entries(result.percentageBreakdown).map(([key, percentage]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-[#64748b]">{expenseLabels[key]}:</span>
                      <span className="font-medium text-[#1e293b]">{percentage.toFixed(1)}%</span>
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

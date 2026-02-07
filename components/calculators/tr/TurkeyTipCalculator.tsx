"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

const PEOPLE_RULES_TR = {
  required: true,
  min: 1,
  max: 100,
  custom: {
    validate: (v: string) => {
      const num = parseFloat(v);
      return !isNaN(num) && num >= 1 && num <= 100 && Number.isInteger(num);
    },
    message: "Kişi sayısı 1 ile 100 arasında olmalıdır",
  },
} as typeof COMMON_RULES.positiveNumber;

const formatTL = (value: number) =>
  new Intl.NumberFormat("tr-TR", { style: "decimal", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value) + " TL";

export function TurkeyTipCalculator() {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("1");
  const [result, setResult] = useState<{
    tipAmount: number;
    totalAmount: number;
    perPerson: number;
  } | null>(null);

  const [billAmountError, setBillAmountError] = useState<string | null>(null);
  const [tipPercentageError, setTipPercentageError] = useState<string | null>(null);
  const [numberOfPeopleError, setNumberOfPeopleError] = useState<string | null>(null);

  const handleBillAmountChange = (value: string) => {
    setBillAmount(value);
    if (billAmountError) setBillAmountError(null);
  };

  const handleTipPercentageChange = (value: string) => {
    setTipPercentage(value);
    if (tipPercentageError) setTipPercentageError(null);
  };

  const handleNumberOfPeopleChange = (value: string) => {
    setNumberOfPeople(value);
    if (numberOfPeopleError) setNumberOfPeopleError(null);
  };

  const calculate = () => {
    const billErr = validateField(billAmount, COMMON_RULES.positiveNumber);
    const tipErr = validateField(tipPercentage, COMMON_RULES.percentage);
    const peopleErr = validateField(numberOfPeople, PEOPLE_RULES_TR);

    if (billErr || tipErr || peopleErr) {
      setBillAmountError(billErr);
      setTipPercentageError(tipErr);
      setNumberOfPeopleError(peopleErr);
      return;
    }

    const bill = parseFloat(billAmount);
    const tip = parseFloat(tipPercentage);
    const people = parseFloat(numberOfPeople);

    if (!isNaN(bill) && !isNaN(tip) && !isNaN(people) && bill > 0 && tip >= 0 && people >= 1) {
      const tipAmount = (bill * tip) / 100;
      const totalAmount = bill + tipAmount;
      const perPerson = totalAmount / people;
      setResult({ tipAmount, totalAmount, perPerson });
    }
  };

  const reset = () => {
    setBillAmount("");
    setTipPercentage("");
    setNumberOfPeople("1");
    setResult(null);
    setBillAmountError(null);
    setTipPercentageError(null);
    setNumberOfPeopleError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <Input
            label="Fiş Tutarı (TL)"
            type="number"
            value={billAmount}
            onChange={(e) => handleBillAmountChange(e.target.value)}
            onBlur={() => {
              const error = validateField(billAmount, COMMON_RULES.positiveNumber);
              setBillAmountError(error);
            }}
            placeholder="Toplam fiş tutarı (örn. 100)"
            error={billAmountError || undefined}
            helperText="Toplam hesap tutarını girin"
            step="0.01"
            min="0.01"
          />
          <Input
            label="Bahşiş Yüzdesi (%)"
            type="number"
            value={tipPercentage}
            onChange={(e) => handleTipPercentageChange(e.target.value)}
            onBlur={() => {
              const error = validateField(tipPercentage, COMMON_RULES.percentage);
              setTipPercentageError(error);
            }}
            placeholder="Bahşiş oranı (örn. 15)"
            error={tipPercentageError || undefined}
            helperText="Bahşiş yüzdesi (0-100)"
            step="0.1"
            min="0"
            max="100"
          />
          <Input
            label="Kişi Sayısı"
            type="number"
            value={numberOfPeople}
            onChange={(e) => handleNumberOfPeopleChange(e.target.value)}
            onBlur={() => {
              const error = validateField(numberOfPeople, PEOPLE_RULES_TR);
              setNumberOfPeopleError(error);
            }}
            placeholder="Kişi sayısı (örn. 2)"
            error={numberOfPeopleError || undefined}
            helperText="Hesabı bölecek kişi sayısı"
            step="1"
            min="1"
            max="100"
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
            <h3 className="text-lg font-semibold text-[#1e293b]">Sonuçlar</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-[#64748b]">Bahşiş Tutarı</p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">{formatTL(result.tipAmount)}</p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">Toplam Ödeme</p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">{formatTL(result.totalAmount)}</p>
              </div>
              {parseFloat(numberOfPeople) > 1 && (
                <div>
                  <p className="text-sm text-[#64748b]">Kişi Başı</p>
                  <p className="text-2xl font-bold text-[#10b981] font-mono">{formatTL(result.perPerson)}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

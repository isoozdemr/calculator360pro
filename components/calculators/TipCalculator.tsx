"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatCurrency } from "@/lib/format/locale-format";

type Locale = "en" | "tr";

export function TipCalculator({ locale: localeProp = "en" }: { locale?: Locale }) {
  const locale = localeProp;
  const isTr = locale === "tr";
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

  const calculate = () => {
    const bill = parseLocaleNumber(billAmount, locale);
    const tip = parseLocaleNumber(tipPercentage.replace(/%/g, "").trim(), locale);
    const people = parseLocaleNumber(numberOfPeople, locale);

    if (bill == null || bill <= 0) {
      setBillAmountError(isTr ? "Pozitif tutar girin" : "Enter a positive amount");
      setResult(null);
      return;
    }
    if (tip == null || tip < 0 || tip > 100) {
      setTipPercentageError(isTr ? "0–100 arası girin" : "Enter 0–100");
      setResult(null);
      return;
    }
    if (people == null || people < 1 || people > 100 || !Number.isInteger(people)) {
      setNumberOfPeopleError(isTr ? "1–100 arası tam sayı girin" : "Enter 1–100 (integer)");
      setResult(null);
      return;
    }
    setBillAmountError(null);
    setTipPercentageError(null);
    setNumberOfPeopleError(null);

    const tipAmount = (bill * tip) / 100;
    const totalAmount = bill + tipAmount;
    const perPerson = totalAmount / people;
    setResult({ tipAmount, totalAmount, perPerson });
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
          <FormattedNumberInput
            label={isTr ? "Hesap Tutarı ($)" : "Bill Amount ($)"}
            value={billAmount}
            onChange={(v) => { setBillAmount(v); setBillAmountError(null); }}
            locale={locale}
            formatAs="currency"
            error={billAmountError || undefined}
            helperText={isTr ? "Toplam hesap tutarını girin" : "Enter the total bill amount"}
          />
          <FormattedNumberInput
            label={isTr ? "Bahşiş Yüzdesi (%)" : "Tip Percentage (%)"}
            value={tipPercentage}
            onChange={(v) => { setTipPercentage(v); setTipPercentageError(null); }}
            locale={locale}
            formatAs="percent"
            error={tipPercentageError || undefined}
            helperText={isTr ? "Bahşiş yüzdesi (0–100)" : "Enter tip percentage (0-100)"}
          />
          <FormattedNumberInput
            label={isTr ? "Kişi Sayısı" : "Number of People"}
            value={numberOfPeople}
            onChange={(v) => { setNumberOfPeople(v); setNumberOfPeopleError(null); }}
            locale={locale}
            formatAs="number"
            maxFractionDigits={0}
            error={numberOfPeopleError || undefined}
            helperText={isTr ? "Hesabı bölen kişi sayısı" : "Enter number of people splitting the bill"}
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
                  {isTr ? "Bahşiş Tutarı" : "Tip Amount"}
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.tipAmount, locale)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">
                  {isTr ? "Toplam Tutar" : "Total Amount"}
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.totalAmount, locale)}
                </p>
              </div>
              {(parseLocaleNumber(numberOfPeople, locale) ?? 0) > 1 && (
                <div>
                  <p className="text-sm text-[#64748b]">
                    {isTr ? "Kişi Başı" : "Per Person"}
                  </p>
                  <p className="text-2xl font-bold text-[#10b981] font-mono">
                    {formatCurrency(result.perPerson, locale)}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


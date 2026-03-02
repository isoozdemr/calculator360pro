"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatCurrency } from "@/lib/format/locale-format";

type Locale = "en" | "tr";

export function CarLoanCalculator({ locale: localeProp = "en" }: { locale?: Locale } = {}) {
  const locale = localeProp;
  const isTr = locale === "tr";
  const [carPrice, setCarPrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalInterest: number;
    totalPayment: number;
  } | null>(null);
  const [carPriceError, setCarPriceError] = useState<string | null>(null);
  const [downPaymentError, setDownPaymentError] = useState<string | null>(null);
  const [interestRateError, setInterestRateError] = useState<string | null>(null);
  const [loanTermError, setLoanTermError] = useState<string | null>(null);

  const calculate = () => {
    const price = parseLocaleNumber(carPrice, locale);
    const down = downPayment.trim() ? (parseLocaleNumber(downPayment, locale) ?? 0) : 0;
    const rateRaw = parseLocaleNumber(interestRate.replace(/%/g, "").trim(), locale);
    const nYears = parseLocaleNumber(loanTerm, locale);

    if (price == null || price <= 0) {
      setCarPriceError(isTr ? "Pozitif fiyat girin" : "Enter a positive price");
      setResult(null);
      return;
    }
    if (down < 0 || (downPayment.trim() && isNaN(down))) {
      setDownPaymentError(isTr ? "Geçerli peşinat girin" : "Enter a valid down payment");
      setResult(null);
      return;
    }
    const principal = price - down;
    if (principal <= 0) {
      setDownPaymentError(isTr ? "Peşinat araç fiyatından fazla olamaz" : "Down payment cannot exceed car price");
      setResult(null);
      return;
    }
    if (rateRaw == null || rateRaw < 0 || rateRaw > 100) {
      setInterestRateError(isTr ? "Yıllık faiz oranı %0–100" : "Annual interest rate 0–100%");
      setResult(null);
      return;
    }
    if (nYears == null || nYears < 1 || nYears > 8 || !Number.isInteger(nYears)) {
      setLoanTermError(isTr ? "Vade 1–8 yıl (tam sayı)" : "Loan term 1–8 years (integer)");
      setResult(null);
      return;
    }
    setCarPriceError(null);
    setDownPaymentError(null);
    setInterestRateError(null);
    setLoanTermError(null);

    const r = rateRaw / 100 / 12;
    const n = nYears * 12;
    const monthlyPayment = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = monthlyPayment * n;
    const totalInterest = totalPayment - principal;
    setResult({ monthlyPayment, totalInterest, totalPayment });
  };

  const reset = () => {
    setCarPrice("");
    setDownPayment("");
    setInterestRate("");
    setLoanTerm("");
    setResult(null);
    setCarPriceError(null);
    setDownPaymentError(null);
    setInterestRateError(null);
    setLoanTermError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <FormattedNumberInput
            label={isTr ? "Araç Fiyatı ($)" : "Car Price ($)"}
            value={carPrice}
            onChange={(v) => { setCarPrice(v); setCarPriceError(null); }}
            locale={locale}
            formatAs="currency"
            error={carPriceError || undefined}
            helperText={isTr ? "Toplam araç fiyatı" : "Enter the total car price"}
          />
          <FormattedNumberInput
            label={isTr ? "Peşinat ($)" : "Down Payment ($)"}
            value={downPayment}
            onChange={(v) => { setDownPayment(v); setDownPaymentError(null); }}
            locale={locale}
            formatAs="currency"
            error={downPaymentError || undefined}
            helperText={isTr ? "Peşinat tutarı (isteğe bağlı)" : "Enter down payment amount (optional)"}
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
            label={isTr ? "Vade (yıl)" : "Loan Term (years)"}
            value={loanTerm}
            onChange={(v) => { setLoanTerm(v); setLoanTermError(null); }}
            locale={locale}
            formatAs="number"
            maxFractionDigits={0}
            error={loanTermError || undefined}
            helperText={isTr ? "Vade (1–8 yıl)" : "Enter the loan term in years (1-8)"}
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
                  {isTr ? "Aylık Taksit" : "Monthly Payment"}
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.monthlyPayment, locale)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">
                  {isTr ? "Toplam Faiz" : "Total Interest"}
                </p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.totalInterest, locale)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">
                  {isTr ? "Toplam Ödeme" : "Total Payment"}
                </p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.totalPayment, locale)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


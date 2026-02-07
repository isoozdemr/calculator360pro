"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

const formatTL = (value: number) =>
  new Intl.NumberFormat("tr-TR", { style: "decimal", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value) + " TL";

const termRule = {
  required: true,
  min: 1,
  max: 8,
  custom: {
    validate: (v: string) => {
      const num = parseFloat(v);
      return !isNaN(num) && num >= 1 && num <= 8 && Number.isInteger(num);
    },
    message: "Vade 1 ile 8 yıl arasında olmalıdır",
  },
} as typeof COMMON_RULES.positiveNumber;

export function TurkeyCarLoanCalculator() {
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

  const handleCarPriceChange = (value: string) => {
    setCarPrice(value);
    if (carPriceError) setCarPriceError(null);
  };

  const handleDownPaymentChange = (value: string) => {
    setDownPayment(value);
    if (downPaymentError) setDownPaymentError(null);
  };

  const handleInterestRateChange = (value: string) => {
    setInterestRate(value);
    if (interestRateError) setInterestRateError(null);
  };

  const handleLoanTermChange = (value: string) => {
    setLoanTerm(value);
    if (loanTermError) setLoanTermError(null);
  };

  const calculate = () => {
    const priceErr = validateField(carPrice, COMMON_RULES.positiveNumber);
    const downErr = validateField(downPayment, COMMON_RULES.optionalPositive);
    const interestErr = validateField(interestRate, COMMON_RULES.interestRate);
    const termErr = validateField(loanTerm, termRule);

    if (priceErr || interestErr || termErr) {
      setCarPriceError(priceErr);
      setDownPaymentError(downErr);
      setInterestRateError(interestErr);
      setLoanTermError(termErr);
      return;
    }

    const price = parseFloat(carPrice);
    const down = parseFloat(downPayment) || 0;
    const principal = price - down;

    if (principal <= 0) {
      setDownPaymentError("Peşinat araç fiyatını aşamaz");
      return;
    }

    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;

    if (!isNaN(principal) && !isNaN(r) && !isNaN(n) && principal > 0 && r >= 0 && n > 0) {
      const monthlyPayment = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPayment = monthlyPayment * n;
      const totalInterest = totalPayment - principal;
      setResult({ monthlyPayment, totalInterest, totalPayment });
    }
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
          <Input
            label="Araç Fiyatı (TL)"
            type="number"
            value={carPrice}
            onChange={(e) => handleCarPriceChange(e.target.value)}
            onBlur={() => {
              const error = validateField(carPrice, COMMON_RULES.positiveNumber);
              setCarPriceError(error);
            }}
            placeholder="Araç fiyatı (örn. 25000)"
            error={carPriceError || undefined}
            helperText="Aracın toplam fiyatı"
            step="100"
            min="0.01"
          />
          <Input
            label="Peşinat (TL)"
            type="number"
            value={downPayment}
            onChange={(e) => handleDownPaymentChange(e.target.value)}
            onBlur={() => {
              const error = validateField(downPayment, COMMON_RULES.optionalPositive);
              setDownPaymentError(error);
            }}
            placeholder="Peşinat (örn. 5000)"
            error={downPaymentError || undefined}
            helperText="Peşinat tutarı (isteğe bağlı)"
            step="100"
            min="0"
          />
          <Input
            label="Yıllık Faiz Oranı (%)"
            type="number"
            value={interestRate}
            onChange={(e) => handleInterestRateChange(e.target.value)}
            onBlur={() => {
              const error = validateField(interestRate, COMMON_RULES.interestRate);
              setInterestRateError(error);
            }}
            placeholder="Faiz oranı (örn. 4,5)"
            error={interestRateError || undefined}
            helperText="Yıllık faiz oranı (yüzde)"
            step="0.01"
            min="0"
            max="100"
          />
          <Input
            label="Vade (yıl)"
            type="number"
            value={loanTerm}
            onChange={(e) => handleLoanTermChange(e.target.value)}
            onBlur={() => {
              const error = validateField(loanTerm, termRule);
              setLoanTermError(error);
            }}
            placeholder="Vade (örn. 5)"
            error={loanTermError || undefined}
            helperText="Kredi vadesi (1-8 yıl)"
            step="1"
            min="1"
            max="8"
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
                <p className="text-sm text-[#64748b]">Aylık Taksit</p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">{formatTL(result.monthlyPayment)}</p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">Toplam Faiz</p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">{formatTL(result.totalInterest)}</p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">Toplam Ödeme</p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">{formatTL(result.totalPayment)}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

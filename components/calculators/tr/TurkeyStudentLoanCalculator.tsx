"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

const formatTL = (value: number) =>
  new Intl.NumberFormat("tr-TR", { style: "decimal", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value) + " TL";

const getTermRule = (repaymentPlan: "standard" | "extended") => ({
  required: true,
  min: 5,
  max: repaymentPlan === "standard" ? 10 : 25,
  custom: {
    validate: (v: string) => {
      const num = parseFloat(v);
      const maxTerm = repaymentPlan === "standard" ? 10 : 25;
      return !isNaN(num) && num >= 5 && num <= maxTerm && Number.isInteger(num);
    },
    message: `Vade ${repaymentPlan === "standard" ? "5 ile 10" : "5 ile 25"} yıl arasında olmalıdır`,
  },
} as typeof COMMON_RULES.positiveNumber);

export function TurkeyStudentLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [repaymentPlan, setRepaymentPlan] = useState<"standard" | "extended">("standard");
  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalInterest: number;
    totalPayment: number;
    payoffDate: string;
  } | null>(null);

  const [loanAmountError, setLoanAmountError] = useState<string | null>(null);
  const [interestRateError, setInterestRateError] = useState<string | null>(null);
  const [loanTermError, setLoanTermError] = useState<string | null>(null);

  const handleLoanAmountChange = (value: string) => {
    setLoanAmount(value);
    if (loanAmountError) setLoanAmountError(null);
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
    const amountErr = validateField(loanAmount, COMMON_RULES.loanAmount);
    const interestErr = validateField(interestRate, COMMON_RULES.interestRate);
    const termErr = validateField(loanTerm, getTermRule(repaymentPlan));

    if (amountErr || interestErr || termErr) {
      setLoanAmountError(amountErr);
      setInterestRateError(interestErr);
      setLoanTermError(termErr);
      return;
    }

    const principal = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;

    if (!isNaN(principal) && !isNaN(r) && !isNaN(n) && principal > 0 && r >= 0 && n > 0) {
      const monthlyPayment = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPayment = monthlyPayment * n;
      const totalInterest = totalPayment - principal;

      const today = new Date();
      const payoffDate = new Date(today);
      payoffDate.setMonth(payoffDate.getMonth() + n);
      const payoffDateStr = payoffDate.toLocaleDateString("tr-TR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      setResult({
        monthlyPayment,
        totalInterest,
        totalPayment,
        payoffDate: payoffDateStr,
      });
    }
  };

  const reset = () => {
    setLoanAmount("");
    setInterestRate("");
    setLoanTerm("");
    setRepaymentPlan("standard");
    setResult(null);
    setLoanAmountError(null);
    setInterestRateError(null);
    setLoanTermError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <Input
            label="Kredi Tutarı (TL)"
            type="number"
            value={loanAmount}
            onChange={(e) => handleLoanAmountChange(e.target.value)}
            onBlur={() => {
              const error = validateField(loanAmount, COMMON_RULES.loanAmount);
              setLoanAmountError(error);
            }}
            placeholder="Kredi tutarı (örn. 30000)"
            error={loanAmountError || undefined}
            helperText="Toplam öğrenim kredisi tutarı"
            step="1000"
            min="1000"
            max="10000000"
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
            placeholder="Faiz oranı (örn. 5,5)"
            error={interestRateError || undefined}
            helperText="Yıllık faiz oranı (yüzde)"
            step="0.01"
            min="0"
            max="100"
          />
          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-1.5">Ödeme Planı</label>
            <select
              value={repaymentPlan}
              onChange={(e) => setRepaymentPlan(e.target.value as "standard" | "extended")}
              className="w-full px-4 py-2.5 border-2 border-[#e2e8f0] rounded-lg bg-white text-[#1e293b] min-h-[44px]"
            >
              <option value="standard">Standart (5-10 yıl)</option>
              <option value="extended">Genişletilmiş (5-25 yıl)</option>
            </select>
          </div>
          <Input
            label="Vade (yıl)"
            type="number"
            value={loanTerm}
            onChange={(e) => handleLoanTermChange(e.target.value)}
            onBlur={() => {
              const error = validateField(loanTerm, getTermRule(repaymentPlan));
              setLoanTermError(error);
            }}
            placeholder={repaymentPlan === "standard" ? "Vade (5-10 yıl)" : "Vade (5-25 yıl)"}
            error={loanTermError || undefined}
            helperText={repaymentPlan === "standard" ? "Vade (5-10 yıl)" : "Vade (5-25 yıl)"}
            step="1"
            min="5"
            max={repaymentPlan === "standard" ? 10 : 25}
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
              <div>
                <p className="text-sm text-[#64748b]">Kapanma Tarihi</p>
                <p className="text-lg font-semibold text-[#1e293b]">{result.payoffDate}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

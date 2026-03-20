"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { formatCurrency, parseLocaleNumber } from "@/lib/format/locale-format";

type Locale = "en" | "tr";

type PlanKey = "IBR" | "PAYE" | "SAVE" | "CUSTOM";

function simulatePayoff({
  principal,
  annualRatePct,
  monthlyPayment,
  maxMonths,
}: {
  principal: number;
  annualRatePct: number;
  monthlyPayment: number;
  maxMonths: number;
}): { payoffMonth: number | null; totalInterest: number; totalPaid: number } {
  const r = annualRatePct / 100 / 12;
  let balance = principal;
  let totalInterest = 0;
  const payment = monthlyPayment;

  for (let month = 1; month <= maxMonths; month++) {
    const interest = balance * r;
    totalInterest += interest;

    const principalPaid = payment - interest;
    if (principalPaid <= 0) {
      // Payment doesn't cover interest => won't amortize.
      return { payoffMonth: null, totalInterest, totalPaid: payment * (month - 1) };
    }

    balance -= principalPaid;
    if (balance <= 0) {
      const totalPaid = payment * month;
      return { payoffMonth: month, totalInterest, totalPaid };
    }
  }

  return { payoffMonth: null, totalInterest, totalPaid: payment * maxMonths };
}

export function IncomeDrivenStudentLoanCalculator({
  locale: localeProp = "en",
}: {
  locale?: Locale;
}) {
  const locale = localeProp;
  const isTr = locale === "tr";

  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");

  const [plan, setPlan] = useState<PlanKey>("IBR");
  const [discretionaryIncomeAnnual, setDiscretionaryIncomeAnnual] = useState("");
  const [customPercent, setCustomPercent] = useState("");

  const [result, setResult] = useState<{
    monthlyPayment: number;
    estimatedPayoffMonths: number | null;
    estimatedTotalInterest: number;
    estimatedTotalPaid: number;
    effectivePercent: number;
  } | null>(null);

  const getEffectivePercent = (): number | null => {
    if (plan === "IBR") return 15;
    if (plan === "PAYE") return 10;
    if (plan === "SAVE") return 5;
    const v = parseLocaleNumber(customPercent, locale);
    return v == null ? null : v;
  };

  const calculate = () => {
    const p = parseLocaleNumber(principal, locale);
    const rate = parseLocaleNumber(interestRate.replace(/%/g, "").trim(), locale);
    const inc = parseLocaleNumber(discretionaryIncomeAnnual, locale);

    if (p == null || p <= 0 || rate == null || rate < 0 || inc == null || inc < 0) {
      setResult(null);
      return;
    }

    const effectivePercent = getEffectivePercent();
    if (effectivePercent == null || effectivePercent < 0 || effectivePercent > 100) {
      setResult(null);
      return;
    }

    const annualPaymentBase = (inc * effectivePercent) / 100;
    const monthlyPayment = annualPaymentBase / 12;

    const { payoffMonth, totalInterest, totalPaid } = simulatePayoff({
      principal: p,
      annualRatePct: rate,
      monthlyPayment,
      maxMonths: 600, // cap at 50 years for an estimate
    });

    setResult({
      monthlyPayment,
      estimatedPayoffMonths: payoffMonth,
      estimatedTotalInterest: totalInterest,
      estimatedTotalPaid: totalPaid,
      effectivePercent,
    });
  };

  const reset = () => {
    setPrincipal("");
    setInterestRate("");
    setPlan("IBR");
    setDiscretionaryIncomeAnnual("");
    setCustomPercent("");
    setResult(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-[#1e293b]">
            {isTr ? "Gelire Dayalı Öğrenci Kredisi (Tahmini)" : "Income-Driven Student Loan (Estimate)"}
          </h2>
          <p className="text-sm text-[#64748b] leading-relaxed">
            {isTr
              ? "Bu araç, gelire dayalı aylık ödemeyi basitleştirilmiş bir yüzde kuralıyla tahmin eder ve sabit aylık ödeme varsayımıyla amortisman kapanışını yaklaşık hesaplar."
              : "This tool estimates income-driven monthly payments using a simplified percentage rule and estimates payoff using a fixed monthly payment amortization simulation."}
          </p>

          <FormattedNumberInput
            label={isTr ? "Kredi Ana Para ($)" : "Loan Principal ($)"}
            value={principal}
            onChange={(v) => setPrincipal(v)}
            locale={locale}
            formatAs="currency"
            helperText={isTr ? "Kalan bakiye (ana para)." : "Remaining loan balance (principal)."}
          />

          <FormattedNumberInput
            label={isTr ? "Yıllık Faiz Oranı (%)" : "Annual Interest Rate (%)"}
            value={interestRate}
            onChange={(v) => setInterestRate(v)}
            locale={locale}
            formatAs="percent"
            helperText={isTr ? "Faiz oranı (yıllık)." : "Annual interest rate."}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#1e293b] mb-2">
                {isTr ? "Plan" : "Plan"}
              </label>
              <select
                value={plan}
                onChange={(e) => setPlan(e.target.value as PlanKey)}
                className="w-full px-4 py-2.5 border-2 border-[#e2e8f0] rounded-lg bg-white text-[#1e293b] min-h-[44px]"
              >
                <option value="IBR">IBR (15%)</option>
                <option value="PAYE">PAYE (10%)</option>
                <option value="SAVE">SAVE (5%)</option>
                <option value="CUSTOM">{isTr ? "Özel (% gir)" : "Custom (% input)"}</option>
              </select>
              <p className="text-xs text-[#64748b] mt-2">
                {isTr
                  ? "Yüzdeler yaklaşık/temsilidir. Resmi kurallar gelire göre değişebilir."
                  : "Percent values are simplified/representative. Official rules depend on eligibility and calculations."}
              </p>
            </div>
            <FormattedNumberInput
              label={isTr ? "Gelire Dayalı Matrah (Yıllık $)" : "Discretionary Income (Annual $)"}
              value={discretionaryIncomeAnnual}
              onChange={(v) => setDiscretionaryIncomeAnnual(v)}
              locale={locale}
              formatAs="currency"
              helperText={isTr ? "Alet, bu tutarın yüzde kaçını ödeyeceğinizi kullanır." : "The calculator uses a percent of this discretionary income to estimate the monthly payment."}
            />
          </div>

          {plan === "CUSTOM" && (
            <FormattedNumberInput
              label={isTr ? "Özel Ödeme Yüzdesi (%)" : "Custom Payment Percent (%)"}
              value={customPercent}
              onChange={(v) => setCustomPercent(v)}
              locale={locale}
              formatAs="percent"
              helperText={isTr ? "0–100 arası." : "0–100 range."}
            />
          )}

          <div className="flex gap-3">
            <Button onClick={calculate} className="flex-1">
              {isTr ? "Tahmin Et" : "Estimate"}
            </Button>
            <Button onClick={reset} variant="outline">
              {isTr ? "Sıfırla" : "Reset"}
            </Button>
          </div>
        </div>

        {result && (
          <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-[#1e293b]">
              {isTr ? "Tahmini Sonuçlar" : "Estimated Results"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg border border-[#e2e8f0] p-4">
                <p className="text-sm text-[#64748b]">{isTr ? "Aylık Ödeme" : "Estimated Monthly Payment"}</p>
                <p className="text-2xl font-bold text-[#1e293b] font-mono">{formatCurrency(result.monthlyPayment, locale)}</p>
                <p className="text-xs text-[#64748b] mt-2">
                  {isTr ? "Kullanılan oran" : "Using percent"}:{" "}
                  <span className="font-medium text-[#1e293b]">{result.effectivePercent}%</span>
                </p>
              </div>
              <div className="bg-white rounded-lg border border-[#e2e8f0] p-4">
                <p className="text-sm text-[#64748b]">{isTr ? "Tahmini Kapanış" : "Estimated Payoff"}</p>
                <p className="text-2xl font-bold text-[#1e293b] font-mono">
                  {result.estimatedPayoffMonths == null
                    ? isTr
                      ? "Kapanış yok (tahmin)"
                      : "No payoff (estimate)"
                    : `${result.estimatedPayoffMonths} ${isTr ? "ay" : "months"}`}
                </p>
                <p className="text-xs text-[#64748b] mt-2">
                  {isTr
                    ? "Kapanış hesabı, sabit aylık ödeme ve basitleştirilmiş amortisman varsayar."
                    : "Payoff estimate assumes fixed monthly payments and simplified amortization."}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg border border-[#e2e8f0] p-4">
                <p className="text-sm text-[#64748b]">{isTr ? "Tahmini Toplam Faiz" : "Estimated Total Interest"}</p>
                <p className="text-xl font-bold text-[#1e293b] font-mono">{formatCurrency(result.estimatedTotalInterest, locale)}</p>
              </div>
              <div className="bg-white rounded-lg border border-[#e2e8f0] p-4">
                <p className="text-sm text-[#64748b]">{isTr ? "Tahmini Toplam Ödeme" : "Estimated Total Paid"}</p>
                <p className="text-xl font-bold text-[#1e293b] font-mono">{formatCurrency(result.estimatedTotalPaid, locale)}</p>
              </div>
            </div>

            <p className="text-xs text-[#64748b]">
              {isTr
                ? "Not: Gelire dayalı resmi ödeme kuralları ve affetme süreçlerini bu araç modellemez."
                : "Note: This tool does not model official income-driven eligibility rules or forgiveness outcomes."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}


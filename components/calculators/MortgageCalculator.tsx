"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatCurrency } from "@/lib/format/locale-format";

type Locale = "en" | "tr";

export function MortgageCalculator({ locale: localeProp = "en" }: { locale?: Locale }) {
  const locale = localeProp;
  const isTr = locale === "tr";
  const [homeValue, setHomeValue] = useState("");
  const [downPaymentPercent, setDownPaymentPercent] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [result, setResult] = useState<{
    baseMonthlyPayment: number; // principal + interest (P&I)
    taxesMonthly: number;
    insuranceMonthly: number;
    pmiMonthly: number;
    totalMonthlyPayment: number; // P&I + taxes + insurance + PMI
    totalInterest: number;
    totalPaymentBase: number; // principal + interest
    totalPaymentAllIn: number; // (P&I + taxes + insurance + PMI) * n
    amortizationSchedule: Array<{
      month: number;
      paymentBase: number;
      interest: number;
      principal: number;
      balance: number;
      totalPayment: number;
    }>;
  } | null>(null);
  const [homeValueError, setHomeValueError] = useState<string | null>(null);
  const [downPaymentPercentError, setDownPaymentPercentError] = useState<string | null>(null);
  const [interestRateError, setInterestRateError] = useState<string | null>(null);
  const [loanTermError, setLoanTermError] = useState<string | null>(null);
  const [propertyTaxesAnnual, setPropertyTaxesAnnual] = useState("");
  const [homeInsuranceAnnual, setHomeInsuranceAnnual] = useState("");
  const [pmiMonthly, setPmiMonthly] = useState("");

  const [scheduleMonthsToShow, setScheduleMonthsToShow] = useState<12 | 24 | 36>(24);

  const calculate = () => {
    const home = parseLocaleNumber(homeValue, locale);
    const downPercent = parseLocaleNumber(downPaymentPercent.replace(/%/g, "").trim(), locale);
    const rateRaw = parseLocaleNumber(interestRate.replace(/%/g, "").trim(), locale);
    const nYears = parseLocaleNumber(loanTerm, locale);

    if (home == null || home < 1000 || home > 10000000) {
      setHomeValueError(isTr ? "1.000 – 10.000.000 arası girin" : "Enter between 1,000 and 10,000,000");
      setResult(null);
      return;
    }
    if (downPercent == null || downPercent < 0 || downPercent >= 100) {
      setDownPaymentPercentError(isTr ? "Peşinat %0 – %99 girin" : "Down payment %0 – %99");
      setResult(null);
      return;
    }
    if (rateRaw == null || rateRaw < 0 || rateRaw > 100) {
      setInterestRateError(isTr ? "Yıllık faiz oranı %0–100" : "Annual interest rate 0–100%");
      setResult(null);
      return;
    }
    if (nYears == null || nYears < 1 || nYears > 50) {
      setLoanTermError(isTr ? "1–50 yıl arası girin" : "Enter 1–50 years");
      setResult(null);
      return;
    }
    const taxesAnnualVal = parseLocaleNumber(propertyTaxesAnnual, locale);
    const insuranceAnnualVal = parseLocaleNumber(homeInsuranceAnnual, locale);
    const pmiMonthlyVal = parseLocaleNumber(pmiMonthly, locale);

    const taxesAnnualSafe = taxesAnnualVal ?? 0;
    const insuranceAnnualSafe = insuranceAnnualVal ?? 0;
    const pmiMonthlySafe = pmiMonthlyVal ?? 0;

    const loanAmount = home * (1 - downPercent / 100);

    // PMI eligibility: common rule of thumb: down payment < 20% => PMI applies
    const pmiEligible = downPercent < 20;
    const effectivePmiMonthly = pmiEligible ? Math.max(0, pmiMonthlySafe) : 0;
    const taxesMonthly = Math.max(0, taxesAnnualSafe) / 12;
    const insuranceMonthly = Math.max(0, insuranceAnnualSafe) / 12;

    if (loanAmount < 1000) {
      setHomeValueError(
        isTr
          ? "Peşinat girildikten sonra kredi tutarı 1.000 TL'den büyük olmalı"
          : "Loan amount after down payment must be above 1,000"
      );
      setResult(null);
      return;
    }

    setHomeValueError(null);
    setDownPaymentPercentError(null);
    setInterestRateError(null);
    setLoanTermError(null);

    const r = rateRaw / 100 / 12;
    const n = nYears * 12;
    const baseMonthlyPayment =
      r === 0
        ? loanAmount / n
        : (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPaymentBase = baseMonthlyPayment * n;
    const totalInterest = totalPaymentBase - loanAmount;

    // amortization schedule for first N months
    const schedule: Array<{
      month: number;
      paymentBase: number;
      interest: number;
      principal: number;
      balance: number;
      totalPayment: number;
    }> = [];
    let balance = loanAmount;

    const monthsToShow = Math.min(scheduleMonthsToShow, n);
    const totalMonthlyPayment = baseMonthlyPayment + taxesMonthly + insuranceMonthly + effectivePmiMonthly;
    const totalPaymentAllIn = totalMonthlyPayment * n;

    for (let month = 1; month <= monthsToShow; month++) {
      const interest = balance * r;
      let principalPortion = baseMonthlyPayment - interest;
      if (principalPortion > balance) principalPortion = balance;
      balance = balance - principalPortion;

      schedule.push({
        month,
        paymentBase: baseMonthlyPayment,
        interest,
        principal: principalPortion,
        balance: Math.max(0, balance),
        totalPayment: totalMonthlyPayment,
      });
    }

    setResult({
      baseMonthlyPayment,
      taxesMonthly,
      insuranceMonthly,
      pmiMonthly: effectivePmiMonthly,
      totalMonthlyPayment,
      totalInterest,
      totalPaymentBase,
      totalPaymentAllIn,
      amortizationSchedule: schedule,
    });
  };

  const reset = () => {
    setHomeValue("");
    setDownPaymentPercent("");
    setInterestRate("");
    setLoanTerm("");
    setResult(null);
    setHomeValueError(null);
    setDownPaymentPercentError(null);
    setInterestRateError(null);
    setLoanTermError(null);
    setPropertyTaxesAnnual("");
    setHomeInsuranceAnnual("");
    setPmiMonthly("");
    setScheduleMonthsToShow(24);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <FormattedNumberInput
            label={isTr ? "Ev Değeri ($)" : "Home Value ($)"}
            value={homeValue}
            onChange={(v) => {
              setHomeValue(v);
              setHomeValueError(null);
            }}
            locale={locale}
            formatAs="currency"
            error={homeValueError || undefined}
            helperText={isTr ? "Evin toplam değerini girin" : "Enter the home value"}
          />
          <FormattedNumberInput
            label={isTr ? "Peşinat (%)" : "Down Payment (%)"}
            value={downPaymentPercent}
            onChange={(v) => {
              setDownPaymentPercent(v);
              setDownPaymentPercentError(null);
            }}
            locale={locale}
            formatAs="percent"
            error={downPaymentPercentError || undefined}
            helperText={isTr ? "PMI için: %20'nin altı kabul edilir" : "For PMI: under 20% triggers PMI"}
          />
          <FormattedNumberInput
            label={isTr ? "Yıllık Faiz Oranı (%)" : "Annual Interest Rate (%)"}
            value={interestRate}
            onChange={(v) => {
              setInterestRate(v);
              setInterestRateError(null);
            }}
            locale={locale}
            formatAs="percent"
            error={interestRateError || undefined}
            helperText={isTr ? "Yıllık faiz oranını yüzde olarak girin" : "Enter the annual interest rate as a percentage"}
          />
          <FormattedNumberInput
            label={isTr ? "Vade (yıl)" : "Loan Term (years)"}
            value={loanTerm}
            onChange={(v) => {
              setLoanTerm(v);
              setLoanTermError(null);
            }}
            locale={locale}
            formatAs="number"
            maxFractionDigits={0}
            error={loanTermError || undefined}
            helperText={isTr ? "Vadeyi yıl olarak girin (1–50)" : "Enter the loan term in years (1-50)"}
          />

          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormattedNumberInput
              label={isTr ? "Emlak Vergisi (Yıllık, $)" : "Property Taxes (Annual, $)"}
              value={propertyTaxesAnnual}
              onChange={(v) => setPropertyTaxesAnnual(v)}
              locale={locale}
              formatAs="currency"
              helperText={isTr ? "İsteğe bağlı: 0 girin" : "Optional: enter 0 if you don't know"}
            />
            <FormattedNumberInput
              label={isTr ? "Konut Sigortası (Yıllık, $)" : "Homeowners Insurance (Annual, $)"}
              value={homeInsuranceAnnual}
              onChange={(v) => setHomeInsuranceAnnual(v)}
              locale={locale}
              formatAs="currency"
              helperText={isTr ? "İsteğe bağlı: 0 girin" : "Optional: enter 0 if you don't know"}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormattedNumberInput
              label={isTr ? "PMI (Aylık, $)" : "PMI (Monthly, $)"}
              value={pmiMonthly}
              onChange={(v) => setPmiMonthly(v)}
              locale={locale}
              formatAs="currency"
              helperText={isTr ? "Peşinat %20'nin altındaysa tahmini PMI girin" : "If down payment < 20%, enter your estimated PMI"}
            />
            <div className="space-y-2">
              <p className="text-sm font-medium text-[#1e293b]">
                {isTr ? "Amortizasyon Çizelgesi" : "Amortization Schedule"}
              </p>
              <select
                value={scheduleMonthsToShow}
                onChange={(e) => setScheduleMonthsToShow(parseInt(e.target.value, 10) as 12 | 24 | 36)}
                className="w-full px-4 py-2.5 border-2 border-[#e2e8f0] rounded-lg bg-white text-[#1e293b] min-h-[44px]"
              >
                <option value={12}>{isTr ? "İlk 12 ay" : "First 12 months"}</option>
                <option value={24}>{isTr ? "İlk 24 ay" : "First 24 months"}</option>
                <option value={36}>{isTr ? "İlk 36 ay" : "First 36 months"}</option>
              </select>
              <p className="text-xs text-[#64748b]">
                {isTr ? "Çizelge sadece seçilen aralık için gösterilir." : "Schedule is shown only for the selected range."}
              </p>
            </div>
          </div>

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
                  {isTr ? "Aylık Taksit (P&I)" : "Monthly Payment (P&I)"}
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.baseMonthlyPayment, locale)}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-sm text-[#64748b]">{isTr ? "Vergi / Ay" : "Taxes / Mo"}</p>
                  <p className="text-xl font-bold text-[#10b981] font-mono">
                    {formatCurrency(result.taxesMonthly, locale)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#64748b]">{isTr ? "Sigorta / Ay" : "Insurance / Mo"}</p>
                  <p className="text-xl font-bold text-[#10b981] font-mono">
                    {formatCurrency(result.insuranceMonthly, locale)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#64748b]">{isTr ? "PMI / Ay" : "PMI / Mo"}</p>
                  <p className="text-xl font-bold text-[#10b981] font-mono">
                    {formatCurrency(result.pmiMonthly, locale)}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm text-[#64748b]">
                  {isTr ? "Toplam Aylık Ödeme" : "Total Monthly Payment"}
                </p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.totalMonthlyPayment, locale)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">
                  {isTr ? "Toplam Faiz (P&I)" : "Total Interest (P&I)"}
                </p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.totalInterest, locale)}
                </p>
              </div>

              <div>
                <p className="text-sm text-[#64748b]">{isTr ? "Toplam (P&I)" : "Total (P&I)"}</p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.totalPaymentBase, locale)}
                </p>
              </div>

              <div>
                <p className="text-sm text-[#64748b]">{isTr ? "Toplam (Tümüyle)" : "Total (All-in)"}</p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.totalPaymentAllIn, locale)}
                </p>
              </div>

              {/* Amortization schedule (limited) */}
              {result.amortizationSchedule.length > 0 && (
                <div className="mt-4 pt-4 border-t border-[#10b981]/30">
                  <h4 className="text-lg font-semibold text-[#1e293b] mb-3">
                    {isTr ? "Amortizasyon Çizelgesi" : "Amortization Schedule"}
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-[720px] text-sm">
                      <thead>
                        <tr className="text-left">
                          <th className="px-2 py-2 border-b">{isTr ? "Ay" : "Mo"}</th>
                          <th className="px-2 py-2 border-b">{isTr ? "Faiz" : "Interest"}</th>
                          <th className="px-2 py-2 border-b">{isTr ? "Anapara" : "Principal"}</th>
                          <th className="px-2 py-2 border-b">{isTr ? "Kalan" : "Balance"}</th>
                          <th className="px-2 py-2 border-b">{isTr ? "Toplam" : "Total"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.amortizationSchedule.map((row) => (
                          <tr key={row.month} className="border-b last:border-b-0">
                            <td className="px-2 py-2 font-medium text-[#1e293b]">{row.month}</td>
                            <td className="px-2 py-2 font-mono">{formatCurrency(row.interest, locale)}</td>
                            <td className="px-2 py-2 font-mono">{formatCurrency(row.principal, locale)}</td>
                            <td className="px-2 py-2 font-mono">{formatCurrency(row.balance, locale)}</td>
                            <td className="px-2 py-2 font-mono text-[#065f46]">{formatCurrency(row.totalPayment, locale)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


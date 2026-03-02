"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatCurrency, formatPercent } from "@/lib/format/locale-format";

type Locale = "en" | "tr";

export function DebtToIncomeCalculator({ locale: localeProp = "en" }: { locale?: Locale }) {
  const locale = localeProp;
  const isTr = locale === "tr";
  const [grossIncome, setGrossIncome] = useState("");
  const [housingPayment, setHousingPayment] = useState("");
  const [otherDebts, setOtherDebts] = useState("");
  const [result, setResult] = useState<{
    frontEndDTI: number;
    backEndDTI: number;
    totalDebt: number;
    frontEndOk: boolean;
    backEndOk36: boolean;
    backEndOk43: boolean;
  } | null>(null);

  const [grossIncomeError, setGrossIncomeError] = useState<string | null>(null);
  const [housingPaymentError, setHousingPaymentError] = useState<string | null>(null);
  const [otherDebtsError, setOtherDebtsError] = useState<string | null>(null);

  const handleGrossIncomeChange = (value: string) => {
    setGrossIncome(value);
    if (grossIncomeError) setGrossIncomeError(null);
  };
  const handleHousingPaymentChange = (value: string) => {
    setHousingPayment(value);
    if (housingPaymentError) setHousingPaymentError(null);
  };
  const handleOtherDebtsChange = (value: string) => {
    setOtherDebts(value);
    if (otherDebtsError) setOtherDebtsError(null);
  };

  const calculate = () => {
    const incomeNum = parseLocaleNumber(grossIncome, locale);
    const housingNum = housingPayment.trim() === "" ? 0 : parseLocaleNumber(housingPayment, locale);
    const otherNum = otherDebts.trim() === "" ? 0 : parseLocaleNumber(otherDebts, locale);

    if (incomeNum == null || incomeNum <= 0) {
      setGrossIncomeError(isTr ? "Gelir 0'dan büyük olmalı" : "Income must be greater than 0");
      setResult(null);
      return;
    }
    if (housingNum != null && housingNum < 0) {
      setHousingPaymentError(isTr ? "0 veya pozitif girin" : "Enter 0 or positive");
      setResult(null);
      return;
    }
    if (otherNum != null && otherNum < 0) {
      setOtherDebtsError(isTr ? "0 veya pozitif girin" : "Enter 0 or positive");
      setResult(null);
      return;
    }
    setGrossIncomeError(null);
    setHousingPaymentError(null);
    setOtherDebtsError(null);

    const income = incomeNum;
    const housing = housingNum ?? 0;
    const other = otherNum ?? 0;

    const totalDebt = housing + other;
    const frontEndDTI = housing > 0 ? (housing / income) * 100 : 0;
    const backEndDTI = totalDebt > 0 ? (totalDebt / income) * 100 : 0;

    setResult({
      frontEndDTI,
      backEndDTI,
      totalDebt,
      frontEndOk: frontEndDTI <= 28,
      backEndOk36: backEndDTI <= 36,
      backEndOk43: backEndDTI <= 43,
    });
  };

  const reset = () => {
    setGrossIncome("");
    setHousingPayment("");
    setOtherDebts("");
    setResult(null);
    setGrossIncomeError(null);
    setHousingPaymentError(null);
    setOtherDebtsError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <FormattedNumberInput
            label={isTr ? "Aylık Brüt Gelir (TL)" : "Gross Monthly Income ($)"}
            value={grossIncome}
            onChange={handleGrossIncomeChange}
            locale={locale}
            formatAs="currency"
            error={grossIncomeError || undefined}
            helperText={isTr ? "Vergi öncesi toplam aylık geliriniz" : "Your total pre-tax monthly income"}
          />
          <FormattedNumberInput
            label={isTr ? "Aylık Konut Ödemesi (TL)" : "Monthly Housing Payment ($)"}
            value={housingPayment}
            onChange={handleHousingPaymentChange}
            locale={locale}
            formatAs="currency"
            error={housingPaymentError || undefined}
            helperText={isTr ? "Kira veya mortgage (PITI). Konut gideriniz yoksa 0 girin." : "Rent or mortgage (PITI). Use 0 if you don't have housing cost yet."}
          />
          <FormattedNumberInput
            label={isTr ? "Diğer Aylık Borçlar (TL)" : "Other Monthly Debts ($)"}
            value={otherDebts}
            onChange={handleOtherDebtsChange}
            locale={locale}
            formatAs="currency"
            error={otherDebtsError || undefined}
            helperText={isTr ? "Diğer tüm aylık borç ödemelerinin toplamı" : "All other monthly debt payments combined"}
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
            <h3 className="text-lg font-semibold text-[#1e293b]">{isTr ? "DTI Oranlarınız" : "Your DTI Ratios"}</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-[#64748b]">{isTr ? "Ön uç DTI (sadece konut)" : "Front-end DTI (housing only)"}</p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {formatPercent(result.frontEndDTI, locale, { maxFractionDigits: 1 })}
                </p>
                <p className="text-sm text-[#64748b] mt-1">
                  {result.frontEndOk
                    ? (isTr ? "Genelde %28 altı tercih edilir." : "Typically under 28% is preferred.")
                    : (isTr ? "%28 üzeri. Konut giderini azaltmayı veya geliri artırmayı düşünün." : "Above 28%. Consider reducing housing cost or increasing income.")}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">{isTr ? "Arka uç DTI (tüm borçlar)" : "Back-end DTI (all debts)"}</p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {formatPercent(result.backEndDTI, locale, { maxFractionDigits: 1 })}
                </p>
                <p className="text-sm text-[#64748b] mt-1">
                  {result.backEndOk36
                    ? (isTr ? "%36 altı. Çoğu kurum için güçlü." : "Under 36%. Strong for most lenders.")
                    : result.backEndOk43
                      ? (isTr ? "%36–43. Uygun olabilir; kurum diğer faktörlere bakar." : "36–43%. May qualify; lender will consider other factors.")
                      : (isTr ? "%43 üzeri. Onay zorlaşabilir; borç ödemeyi düşünün." : "Above 43%. Approval may be harder; consider paying down debt.")}
                </p>
              </div>
              <div className="pt-3 border-t border-[#10b981]/30">
                <p className="text-sm text-[#64748b]">{isTr ? "Toplam aylık borç" : "Total monthly debt"}</p>
                <p className="text-xl font-semibold text-[#1e293b] font-mono">
                  {formatCurrency(result.totalDebt, locale)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

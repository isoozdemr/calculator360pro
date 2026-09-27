"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatCurrency } from "@/lib/format/locale-format";

const locale = "tr" as const;

export function FazlaMesaiHesaplama() {
  const [gross, setGross] = useState("");
  const [overtime, setOvertime] = useState("");
  const [holiday, setHoliday] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<null | { hourly: number; overtimePay: number; holidayPay: number; total: number }>(null);

  const calculate = () => {
    setError(null);
    setResult(null);
    const g = parseLocaleNumber(gross, locale);
    if (!g || g <= 0) {
      setError("Brüt maaşı girin.");
      return;
    }
    const hourly = g / 225;
    const o = parseLocaleNumber(overtime, locale) ?? 0;
    const h = parseLocaleNumber(holiday, locale) ?? 0;
    const overtimePay = hourly * 1.5 * o;
    const holidayPay = (g / 30) * h; // tatil günü çalışmasına ek 1 yevmiye
    setResult({ hourly, overtimePay, holidayPay, total: overtimePay + holidayPay });
  };

  const fmt = (n: number) => formatCurrency(n, locale);
  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-4">
        <FormattedNumberInput label="Aylık brüt maaş (TL)" value={gross} onChange={setGross} locale={locale} formatAs="currency" placeholder="Örn. 40.000" />
        <FormattedNumberInput label="Fazla mesai saati (haftalık 45 saati aşan)" value={overtime} onChange={setOvertime} locale={locale} formatAs="number" placeholder="Örn. 12" />
        <FormattedNumberInput label="Çalışılan resmi/bayram tatili günü — isteğe bağlı" value={holiday} onChange={setHoliday} locale={locale} formatAs="number" maxFractionDigits={0} />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button onClick={calculate} className="w-full">Hesapla</Button>
      </div>
      {result && (
        <div className="bg-white rounded-lg border-2 border-[#10b981] p-6 space-y-2">
          <p className="text-sm text-[#64748b]">Saatlik brüt ücret: {fmt(result.hourly)} (brüt / 225)</p>
          <p className="text-[#1e293b]">Fazla mesai ücreti (%50 zamlı): <strong>{fmt(result.overtimePay)}</strong></p>
          {result.holidayPay > 0 && <p className="text-[#1e293b]">Tatil günü çalışma ek ücreti: <strong>{fmt(result.holidayPay)}</strong></p>}
          <p className="text-3xl font-bold text-[#10b981]">{fmt(result.total)} <span className="text-base font-normal text-[#64748b]">brüt</span></p>
        </div>
      )}
    </div>
  );
}

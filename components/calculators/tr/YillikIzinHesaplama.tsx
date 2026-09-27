"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatCurrency } from "@/lib/format/locale-format";

const locale = "tr" as const;

/** İş Kanunu md. 53 */
export function annualLeaveDays(years: number, age: number): number {
  if (years < 1) return 0;
  let days = years < 5 ? 14 : years < 15 ? 20 : 26;
  if ((age > 0 && age <= 18) || age >= 50) days = Math.max(days, 20);
  return days;
}

export function YillikIzinHesaplama() {
  const [startDate, setStartDate] = useState("");
  const [age, setAge] = useState("");
  const [gross, setGross] = useState("");
  const [unused, setUnused] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<null | { years: number; days: number; pay: number | null; unusedDays: number }>(null);

  const calculate = () => {
    setError(null);
    setResult(null);
    const start = new Date(startDate);
    if (!startDate || Number.isNaN(start.getTime()) || start > new Date()) {
      setError("Geçerli bir işe giriş tarihi girin.");
      return;
    }
    const years = Math.floor((Date.now() - start.getTime()) / (365.25 * 86400000));
    const a = parseLocaleNumber(age, locale) ?? 0;
    const days = annualLeaveDays(years, a);
    const g = parseLocaleNumber(gross, locale);
    const u = parseLocaleNumber(unused, locale) ?? 0;
    setResult({ years, days, unusedDays: u, pay: g && u > 0 ? (g / 30) * u : null });
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-4">
        <label className="block text-sm font-medium text-[#1e293b]">
          İşe giriş tarihi
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="mt-1 w-full rounded-lg border-2 border-[#e2e8f0] p-2" />
        </label>
        <FormattedNumberInput label="Yaşınız" value={age} onChange={setAge} locale={locale} formatAs="number" maxFractionDigits={0} placeholder="Örn. 35" />
        <FormattedNumberInput label="Brüt maaş (TL) — izin ücreti için, isteğe bağlı" value={gross} onChange={setGross} locale={locale} formatAs="currency" />
        <FormattedNumberInput label="Kullanılmayan izin günü — isteğe bağlı" value={unused} onChange={setUnused} locale={locale} formatAs="number" maxFractionDigits={0} />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button onClick={calculate} className="w-full">Hesapla</Button>
      </div>
      {result && (
        <div className="bg-white rounded-lg border-2 border-[#10b981] p-6 space-y-2">
          <p className="text-sm text-[#64748b]">Kıdem: {result.years} tam yıl</p>
          <p className="text-3xl font-bold text-[#10b981]">{result.days} gün / yıl</p>
          {result.days === 0 && <p className="text-sm text-amber-700">Yıllık izin hakkı 1 yıl çalışmayı doldurunca doğar.</p>}
          {result.pay != null && (
            <p className="text-[#1e293b]">
              {result.unusedDays} günlük kullanılmayan izin ücreti (brüt): <strong>{formatCurrency(result.pay, locale)}</strong>
            </p>
          )}
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatCurrency } from "@/lib/format/locale-format";
import {
  STAMP_TAX_RATE,
  getSeveranceCeiling,
  getNoticeWeeks,
} from "@/lib/data/kidem-tazminati-2026";

const locale = "tr" as const;

interface Result {
  years: number;
  months: number;
  days: number;
  dailyGross: number;
  ceilingApplied: boolean;
  ceiling: number;
  severanceGross: number;
  severanceStamp: number;
  severanceNet: number;
  noticeWeeks: number;
  noticeGross: number;
}

function diffYMD(start: Date, end: Date) {
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();
  if (days < 0) {
    months -= 1;
    days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return { years, months, days };
}

export function KidemTazminatiHesaplama() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [grossSalary, setGrossSalary] = useState("");
  const [extras, setExtras] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    setError(null);
    setResult(null);
    if (!startDate || !endDate) {
      setError("İşe giriş ve çıkış tarihlerini girin.");
      return;
    }
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end <= start) {
      setError("Çıkış tarihi giriş tarihinden sonra olmalıdır.");
      return;
    }
    const salary = parseLocaleNumber(grossSalary, locale);
    if (salary == null || salary <= 0) {
      setError("Brüt maaşı girin.");
      return;
    }
    const extra = parseLocaleNumber(extras, locale) ?? 0;

    const { years, months, days } = diffYMD(start, end);
    const monthlyGross = salary + Math.max(0, extra);
    const ceiling = getSeveranceCeiling(end);
    const base = Math.min(monthlyGross, ceiling);
    const serviceYears = years + months / 12 + days / 365;

    // Kıdem tazminatı en az 1 yıl çalışma şartına bağlıdır
    const severanceGross = years >= 1 ? base * serviceYears : 0;
    const severanceStamp = severanceGross * STAMP_TAX_RATE;

    const totalDays = Math.floor((end.getTime() - start.getTime()) / 86400000);
    const noticeWeeks = getNoticeWeeks(totalDays);
    const noticeGross = (monthlyGross / 30) * noticeWeeks * 7;

    setResult({
      years,
      months,
      days,
      dailyGross: monthlyGross / 30,
      ceilingApplied: monthlyGross > ceiling,
      ceiling,
      severanceGross,
      severanceStamp,
      severanceNet: severanceGross - severanceStamp,
      noticeWeeks,
      noticeGross,
    });
  };

  const reset = () => {
    setStartDate("");
    setEndDate("");
    setGrossSalary("");
    setExtras("");
    setResult(null);
    setError(null);
  };

  const fmt = (n: number) => formatCurrency(n, locale);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium text-[#1e293b]">
            İşe giriş tarihi
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="mt-1 w-full rounded-lg border-2 border-[#e2e8f0] p-2"
            />
          </label>
          <label className="block text-sm font-medium text-[#1e293b]">
            İşten çıkış tarihi
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="mt-1 w-full rounded-lg border-2 border-[#e2e8f0] p-2"
            />
          </label>
        </div>
        <FormattedNumberInput
          label="Son brüt maaş (TL)"
          value={grossSalary}
          onChange={setGrossSalary}
          locale={locale}
          formatAs="currency"
          placeholder="Örn. 45.000"
        />
        <FormattedNumberInput
          label="Aylık düzenli ek ödemeler - brüt (yol, yemek, ikramiye vb., TL)"
          value={extras}
          onChange={setExtras}
          locale={locale}
          formatAs="currency"
          placeholder="Örn. 3.000"
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <div className="flex gap-3">
          <Button onClick={handleCalculate} className="flex-1">Hesapla</Button>
          <Button onClick={reset} variant="outline">Temizle</Button>
        </div>
      </div>

      {result && (
        <div className="bg-white rounded-lg border-2 border-[#10b981] p-6 space-y-4">
          <p className="text-sm text-[#64748b]">
            Çalışma süresi: <strong>{result.years} yıl {result.months} ay {result.days} gün</strong>
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm text-[#64748b]">Net kıdem tazminatı</p>
              <p className="text-2xl font-bold text-[#10b981]">{fmt(result.severanceNet)}</p>
              <p className="text-xs text-[#64748b]">
                Brüt {fmt(result.severanceGross)} − damga vergisi {fmt(result.severanceStamp)}
              </p>
            </div>
            <div>
              <p className="text-sm text-[#64748b]">Brüt ihbar tazminatı ({result.noticeWeeks} hafta)</p>
              <p className="text-2xl font-bold text-[#2563eb]">{fmt(result.noticeGross)}</p>
              <p className="text-xs text-[#64748b]">Gelir vergisi ve damga vergisi ayrıca kesilir.</p>
            </div>
          </div>
          {result.years < 1 && (
            <p className="text-sm text-amber-700">1 yıldan az çalışmada kıdem tazminatı hakkı doğmaz.</p>
          )}
          {result.ceilingApplied && (
            <p className="text-sm text-amber-700">
              Giydirilmiş brüt ücretiniz kıdem tazminatı tavanını ({fmt(result.ceiling)}) aştığı için hesap tavan üzerinden yapıldı.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

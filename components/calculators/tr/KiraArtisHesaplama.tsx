"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatCurrency } from "@/lib/format/locale-format";

const locale = "tr" as const;

export function KiraArtisHesaplama() {
  const [rent, setRent] = useState("");
  const [rate, setRate] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<null | { increase: number; newRent: number; yearly: number }>(null);

  const calculate = () => {
    setError(null);
    setResult(null);
    const r = parseLocaleNumber(rent, locale);
    const p = parseLocaleNumber(rate, locale);
    if (!r || r <= 0 || p == null || p < 0) {
      setError("Mevcut kira ve artış oranını girin.");
      return;
    }
    const increase = (r * p) / 100;
    setResult({ increase, newRent: r + increase, yearly: (r + increase) * 12 });
  };

  const fmt = (n: number) => formatCurrency(n, locale);
  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-4">
        <FormattedNumberInput label="Mevcut aylık kira (TL)" value={rent} onChange={setRent} locale={locale} formatAs="currency" placeholder="Örn. 20.000" />
        <FormattedNumberInput label="Artış oranı (%) — kira yenileme ayındaki 12 aylık TÜFE ortalaması" value={rate} onChange={setRate} locale={locale} formatAs="number" placeholder="TÜİK'in açıkladığı oranı girin" />
        <p className="text-xs text-[#64748b]">Konut ve çatılı işyeri kiralarında artış, yenileme ayından önceki ayın 12 aylık TÜFE ortalamasını geçemez. Güncel oranı TÜİK enflasyon bülteninden kontrol edin.</p>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button onClick={calculate} className="w-full">Hesapla</Button>
      </div>
      {result && (
        <div className="bg-white rounded-lg border-2 border-[#10b981] p-6 space-y-2">
          <p className="text-sm text-[#64748b]">Artış tutarı: {fmt(result.increase)}</p>
          <p className="text-3xl font-bold text-[#10b981]">{fmt(result.newRent)} <span className="text-base font-normal text-[#64748b]">yeni aylık kira</span></p>
          <p className="text-sm text-[#64748b]">Yıllık toplam: {fmt(result.yearly)}</p>
        </div>
      )}
    </div>
  );
}

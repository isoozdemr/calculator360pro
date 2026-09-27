"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatCurrency } from "@/lib/format/locale-format";

const locale = "tr" as const;

export function TapuHarciHesaplama() {
  const [price, setPrice] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<null | { each: number; total: number }>(null);

  const calculate = () => {
    setError(null);
    setResult(null);
    const p = parseLocaleNumber(price, locale);
    if (!p || p <= 0) {
      setError("Satış bedelini girin.");
      return;
    }
    setResult({ each: p * 0.02, total: p * 0.04 });
  };

  const fmt = (n: number) => formatCurrency(n, locale);
  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-4">
        <FormattedNumberInput label="Tapuda beyan edilecek satış bedeli (TL)" value={price} onChange={setPrice} locale={locale} formatAs="currency" placeholder="Örn. 3.000.000" />
        <p className="text-xs text-[#64748b]">Beyan edilen bedel, belediye emlak vergisi değerinden düşük olamaz.</p>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button onClick={calculate} className="w-full">Hesapla</Button>
      </div>
      {result && (
        <div className="bg-white rounded-lg border-2 border-[#10b981] p-6 space-y-2">
          <p className="text-[#1e293b]">Alıcı payı (%2): <strong>{fmt(result.each)}</strong></p>
          <p className="text-[#1e293b]">Satıcı payı (%2): <strong>{fmt(result.each)}</strong></p>
          <p className="text-3xl font-bold text-[#10b981]">{fmt(result.total)} <span className="text-base font-normal text-[#64748b]">toplam tapu harcı</span></p>
          <p className="text-xs text-[#64748b]">Döner sermaye işletme ücreti ayrıca tahsil edilir.</p>
        </div>
      )}
    </div>
  );
}

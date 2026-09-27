"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatCurrency } from "@/lib/format/locale-format";
import { calculateNetSalary, MINIMUM_WAGE_2026 } from "@/lib/data/turkey-2026-data";

const locale = "tr" as const;

/** Net maaştan brüte ikili arama ile döner (Ocak ayı matrahı esas) */
export function netToGross(net: number): number {
  let lo = net, hi = net * 3;
  for (let i = 0; i < 80; i++) {
    const mid = (lo + hi) / 2;
    if (calculateNetSalary(mid).net < net) lo = mid; else hi = mid;
  }
  return hi;
}

export function NettenBruteHesaplama() {
  const [net, setNet] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ReturnType<typeof calculateNetSalary> | null>(null);

  const calculate = () => {
    setError(null);
    setResult(null);
    const n = parseLocaleNumber(net, locale);
    if (!n || n < MINIMUM_WAGE_2026.net) {
      setError(`Net maaş en az net asgari ücret (${formatCurrency(MINIMUM_WAGE_2026.net, locale)}) olmalıdır.`);
      return;
    }
    setResult(calculateNetSalary(netToGross(n)));
  };

  const fmt = (v: number) => formatCurrency(v, locale);
  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-4">
        <FormattedNumberInput label="Aylık net maaş (TL)" value={net} onChange={setNet} locale={locale} formatAs="currency" placeholder="Örn. 40.000" />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button onClick={calculate} className="w-full">Brüte Çevir</Button>
      </div>
      {result && (
        <div className="bg-white rounded-lg border-2 border-[#10b981] p-6 space-y-2">
          <p className="text-sm text-[#64748b]">Gerekli brüt maaş</p>
          <p className="text-3xl font-bold text-[#10b981]">{fmt(result.gross)}</p>
          <ul className="text-sm text-[#64748b] space-y-1">
            <li>SGK işçi payı (%14): {fmt(result.deductions.sgk)}</li>
            <li>İşsizlik sigortası (%1): {fmt(result.deductions.unemployment)}</li>
            <li>Gelir vergisi (istisna sonrası): {fmt(result.deductions.incomeTax)}</li>
            <li>Damga vergisi (istisna sonrası): {fmt(result.deductions.stampTax)}</li>
          </ul>
          <p className="text-xs text-[#64748b]">Ocak ayı (kümülatif matrah sıfır) esas alınmıştır; yıl içinde vergi dilimi değiştikçe aynı neti sağlayan brüt artar.</p>
        </div>
      )}
    </div>
  );
}

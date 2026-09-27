"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatCurrency } from "@/lib/format/locale-format";
import { MINIMUM_WAGE_2026 } from "@/lib/data/turkey-2026-data";

const locale = "tr" as const;
const STAMP = 0.00759;

function durationDays(premiumDays: number): number {
  if (premiumDays >= 1080) return 300;
  if (premiumDays >= 900) return 240;
  if (premiumDays >= 600) return 180;
  return 0;
}

export function IssizlikMaasiHesaplama() {
  const [salaries, setSalaries] = useState(["", "", "", ""]);
  const [premiumDays, setPremiumDays] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<null | {
    gross: number; stamp: number; net: number; capped: boolean; floored: boolean; days: number; total: number;
  }>(null);

  const calculate = () => {
    setError(null);
    setResult(null);
    const vals = salaries.map((s) => parseLocaleNumber(s, locale) ?? 0);
    if (vals.some((v) => v <= 0)) {
      setError("Son 4 ayın brüt maaşlarını girin.");
      return;
    }
    const days = parseLocaleNumber(premiumDays, locale) ?? 0;
    const avg = vals.reduce((a, b) => a + b, 0) / 4;
    const max = MINIMUM_WAGE_2026.gross * 0.8;
    const min = MINIMUM_WAGE_2026.gross * 0.4;
    let gross = avg * 0.4;
    const capped = gross > max;
    const floored = gross < min;
    gross = Math.min(Math.max(gross, min), max);
    const stamp = gross * STAMP;
    const net = gross - stamp;
    const d = durationDays(days);
    setResult({ gross, stamp, net, capped, floored, days: d, total: (net / 30) * d });
  };

  const fmt = (n: number) => formatCurrency(n, locale);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-4">
        <p className="text-sm text-[#64748b]">İşten ayrılmadan önceki son 4 ayın brüt (prime esas) kazançlarını girin.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {salaries.map((v, i) => (
            <FormattedNumberInput
              key={i}
              label={`${i + 1}. ay brüt kazanç (TL)`}
              value={v}
              onChange={(nv) => setSalaries((prev) => prev.map((p, j) => (j === i ? nv : p)))}
              locale={locale}
              formatAs="currency"
            />
          ))}
        </div>
        <FormattedNumberInput
          label="Son 3 yıldaki toplam işsizlik sigortası prim günü"
          value={premiumDays}
          onChange={setPremiumDays}
          locale={locale}
          formatAs="number"
          maxFractionDigits={0}
          placeholder="Örn. 900"
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button onClick={calculate} className="w-full">Hesapla</Button>
      </div>
      {result && (
        <div className="bg-white rounded-lg border-2 border-[#10b981] p-6 space-y-3">
          <div>
            <p className="text-sm text-[#64748b]">Aylık net işsizlik maaşı</p>
            <p className="text-3xl font-bold text-[#10b981]">{fmt(result.net)}</p>
            <p className="text-xs text-[#64748b]">Brüt {fmt(result.gross)} − damga vergisi {fmt(result.stamp)}</p>
          </div>
          {result.capped && <p className="text-sm text-amber-700">Tutar yasal üst sınıra (brüt asgari ücretin %80&apos;i) göre sınırlandı.</p>}
          {result.floored && <p className="text-sm text-amber-700">Tutar en düşük işsizlik maaşı olarak gösterildi (brüt asgari ücretin %40&apos;ı).</p>}
          {result.days > 0 ? (
            <p className="text-sm text-[#1e293b]">
              Ödeme süresi: <strong>{result.days} gün ({result.days / 30} ay)</strong> — toplam yaklaşık <strong>{fmt(result.total)}</strong>
            </p>
          ) : (
            <p className="text-sm text-amber-700">Son 3 yılda en az 600 gün prim şartı sağlanmadığı için işsizlik ödeneği hakkı doğmaz (prim günü girmediyseniz süreyi hesaplayamayız).</p>
          )}
        </div>
      )}
    </div>
  );
}

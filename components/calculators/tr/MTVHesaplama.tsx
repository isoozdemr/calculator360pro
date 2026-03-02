"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatCurrency } from "@/lib/format/locale-format";
import { calculateMTV2026 } from "@/lib/data/mtv-2026";

const locale = "tr" as const;

export function MTVHesaplama() {
  const [engineCC, setEngineCC] = useState("");
  const [vehicleAge, setVehicleAge] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    setError(null);
    setResult(null);
    const ccRaw = parseLocaleNumber(engineCC, locale);
    const ageRaw = parseLocaleNumber(vehicleAge, locale);
    const cc = ccRaw != null ? Math.round(ccRaw) : NaN;
    const age = ageRaw != null ? Math.round(ageRaw) : NaN;
    if (Number.isNaN(cc) || cc < 1 || cc > 10000) {
      setError("Motor hacmini 1–10000 cm³ arasında girin.");
      return;
    }
    if (Number.isNaN(age) || age < 1 || age > 30) {
      setError("Araç yaşını 1–30 arasında girin.");
      return;
    }
    const mtv = calculateMTV2026(cc, age);
    if (mtv === null) {
      setError("Bu değerler için MTV bulunamadı.");
      return;
    }
    setResult(mtv);
  };

  const reset = () => {
    setEngineCC("");
    setVehicleAge("");
    setResult(null);
    setError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <p className="text-sm text-[#64748b]">
          2026 MTV (2018 öncesi tescilli otomobiller için tahmini). 2018 sonrası tescilli araçlarda taşıt değeri (matrah) da kullanıldığı için resmi tutarı belediyenizden veya e-Devlet&apos;ten kontrol edin.
        </p>
        <div className="space-y-4">
          <FormattedNumberInput
            label="Motor hacmi (cm³)"
            value={engineCC}
            onChange={setEngineCC}
            locale={locale}
            formatAs="number"
            maxFractionDigits={0}
            helperText="Örn. 1400, 1600, 1800"
          />
          <FormattedNumberInput
            label="Araç yaşı (yıl)"
            value={vehicleAge}
            onChange={setVehicleAge}
            locale={locale}
            formatAs="number"
            maxFractionDigits={0}
            helperText="Örn. 5"
          />
          <div className="flex gap-3">
            <Button onClick={handleCalculate} className="flex-1">Hesapla</Button>
            <Button onClick={reset} variant="outline">Sıfırla</Button>
          </div>
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        {result !== null && (
          <div className="bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6">
            <p className="text-sm text-[#64748b]">Yıllık MTV (2026, tahmini)</p>
            <p className="text-3xl font-bold text-[#10b981]">{formatCurrency(result, locale)}</p>
            <p className="text-xs text-[#64748b] mt-2">Yılda 2 taksit (Ocak ve Temmuz) ödenir.</p>
          </div>
        )}
      </div>
    </div>
  );
}

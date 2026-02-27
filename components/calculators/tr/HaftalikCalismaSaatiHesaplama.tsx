"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const DAYS = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"] as const;

export function HaftalikCalismaSaatiHesaplama() {
  const [usePreset, setUsePreset] = useState(true);
  const [presetHours, setPresetHours] = useState("8");
  const [presetDays, setPresetDays] = useState("5");
  const [hours, setHours] = useState<Record<string, string>>(
    DAYS.reduce((acc, d) => ({ ...acc, [d]: "" }), {} as Record<string, string>)
  );
  const [result, setResult] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const calculate = () => {
    setError(null);
    if (usePreset) {
      const h = parseFloat(presetHours.replace(/,/g, "."));
      const d = parseInt(presetDays, 10);
      if (isNaN(h) || h < 0 || h > 24) {
        setError("Geçerli bir saat girin (0–24).");
        return;
      }
      if (isNaN(d) || d < 0 || d > 7) {
        setError("Gün sayısı 0–7 arası olmalıdır.");
        return;
      }
      setResult(h * d);
      return;
    }
    let total = 0;
    for (const day of DAYS) {
      const val = hours[day];
      if (!val || val.trim() === "") continue;
      const num = parseFloat(val.replace(/,/g, "."));
      if (isNaN(num) || num < 0 || num > 24) {
        setError(`${day} için geçerli bir saat girin (0–24).`);
        return;
      }
      total += num;
    }
    setResult(total);
  };

  const reset = () => {
    setHours(DAYS.reduce((acc, d) => ({ ...acc, [d]: "" }), {} as Record<string, string>));
    setPresetHours("8");
    setPresetDays("5");
    setResult(null);
    setError(null);
    setCopied(false);
  };

  const copyResult = () => {
    if (result === null) return;
    navigator.clipboard.writeText(`Haftalık toplam çalışma saati: ${result.toFixed(1)} saat`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const weeklyLimit = 45;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-xl border-2 border-[#e2e8f0] p-6 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="preset"
            name="mode"
            checked={usePreset}
            onChange={() => setUsePreset(true)}
          />
          <label htmlFor="preset">Her gün aynı saat (örn. 5 gün × 8 saat)</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="custom"
            name="mode"
            checked={!usePreset}
            onChange={() => setUsePreset(false)}
          />
          <label htmlFor="custom">Günlük saatleri ayrı ayrı girin</label>
        </div>

        {usePreset && (
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-[#475569] mb-2">Günlük çalışma saati</label>
              <Input
                type="text"
                inputMode="decimal"
                value={presetHours}
                onChange={(e) => setPresetHours(e.target.value)}
                placeholder="8"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#475569] mb-2">Haftada kaç gün çalışıyorsunuz?</label>
              <Input
                type="number"
                min="0"
                max="7"
                value={presetDays}
                onChange={(e) => setPresetDays(e.target.value)}
                placeholder="5"
                className="w-full"
              />
            </div>
          </div>
        )}

        {!usePreset && (
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {DAYS.map((day) => (
              <div key={day}>
                <label className="block text-sm font-medium text-[#475569] mb-1">{day}</label>
                <Input
                  type="text"
                  inputMode="decimal"
                  value={hours[day]}
                  onChange={(e) => setHours({ ...hours, [day]: e.target.value })}
                  placeholder="0"
                  className="w-full"
                />
              </div>
            ))}
          </div>
        )}

        {error && <p className="text-sm text-red-600">{error}</p>}
        <div className="flex gap-3">
          <Button onClick={calculate} className="flex-1">Hesapla</Button>
          <Button onClick={reset} variant="outline">Sıfırla</Button>
        </div>
      </div>

      {result !== null && (
        <div className="bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6 space-y-3" id="result-summary">
          <h3 className="text-lg font-semibold text-[#1e293b]">Sonuç</h3>
          <p className="text-2xl font-bold text-[#10b981] font-mono">Haftalık toplam: {result.toFixed(1)} saat</p>
          {result > weeklyLimit && (
            <p className="text-sm text-amber-700">
              Türkiye İş Kanunu&apos;na göre haftalık normal çalışma süresi genelde 45 saati aşmamalıdır. {result.toFixed(1)} saat, 45 saatlik sınırın üzerindedir; fazla mesai uygulaması iş sözleşmesi ve mevzuata tabidir.
            </p>
          )}
          {result <= weeklyLimit && result > 0 && (
            <p className="text-sm text-[#64748b]">45 saatlik haftalık sınırın altında.</p>
          )}
          <Button onClick={copyResult} variant="outline" size="sm">{copied ? "Kopyalandı!" : "Sonucu kopyala"}</Button>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

/** Türkiye emlak vergisi oranları (yıllık, tahmini – belediyeye göre değişir) */
const RATE_OPTIONS = [
  { value: 0.001, label: "Konut (genel) %0,1" },
  { value: 0.002, label: "Konut (büyükşehir) %0,2" },
  { value: 0.004, label: "İşyeri / ticari %0,4" },
  { value: 0.006, label: "Diğer (arsa vb.) %0,6" },
];

export function EmlakVergisiHesaplama() {
  const [value, setValue] = useState("1000000");
  const [rateIndex, setRateIndex] = useState(0);
  const [customRate, setCustomRate] = useState("");
  const [result, setResult] = useState<{ annualTax: number; rate: number } | null>(null);

  const rate = customRate ? parseFloat(customRate.replace(/,/g, ".")) / 100 : RATE_OPTIONS[rateIndex].value;

  const calculate = () => {
    const val = parseFloat(value.replace(/,/g, "."));
    if (isNaN(val) || val <= 0) return;
    if (customRate && (isNaN(rate) || rate <= 0 || rate > 10)) return;
    const annualTax = val * rate;
    setResult({ annualTax, rate });
  };

  const formatTRY = (n: number) =>
    new Intl.NumberFormat("tr-TR", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(n) + " TL";

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-xl border-2 border-[#e2e8f0] p-6 shadow-sm space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-[#475569] mb-2">
              Emlak değeri (TL)
            </label>
            <Input
              type="text"
              inputMode="decimal"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="1.000.000"
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#475569] mb-2">
              Vergi oranı
            </label>
            <select
              value={customRate ? "" : rateIndex}
              onChange={(e) => {
                setRateIndex(parseInt(e.target.value, 10));
                setCustomRate("");
              }}
              className="w-full rounded-lg border border-[#e2e8f0] px-4 py-2.5 text-[#1e293b] focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
            >
              {RATE_OPTIONS.map((opt, i) => (
                <option key={i} value={i}>
                  {opt.label}
                </option>
              ))}
            </select>
            <p className="text-xs text-[#64748b] mt-1">
              Özel oran:{" "}
              <input
                type="text"
                inputMode="decimal"
                value={customRate}
                onChange={(e) => setCustomRate(e.target.value)}
                placeholder="örn. 0,2"
                className="w-20 border border-[#e2e8f0] rounded px-2 py-1 text-sm"
              />{" "}
              %
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button onClick={calculate} variant="primary">
            Hesapla
          </Button>
          <Button
            onClick={() => {
              setValue("1000000");
              setRateIndex(0);
              setCustomRate("");
              setResult(null);
            }}
            variant="secondary"
          >
            Sıfırla
          </Button>
        </div>
      </div>

      {result && (
        <div
          className="bg-gradient-to-br from-[#1e293b] to-[#334155] text-white rounded-xl p-6 shadow-lg"
          id="sonuc-ozeti"
        >
          <p className="text-sm text-[#94a3b8] mb-2">Yıllık emlak vergisi (tahmini)</p>
          <p className="text-xl md:text-2xl font-bold leading-snug">
            <span className="text-[#93c5fd]">{formatTRY(result.annualTax)}</span>
            <br />
            <span className="text-sm font-normal text-[#94a3b8]">
              (Oran: %{(result.rate * 100).toFixed(2)})
            </span>
          </p>
          <p className="text-[#94a3b8] mt-3 text-sm">
            Belediyelere göre oranlar değişir. Kesin tutar için belediyenize danışın.
          </p>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

function parseDate(s: string): Date | null {
  if (!s || s.length < 10) return null;
  const d = new Date(s);
  return isNaN(d.getTime()) ? null : d;
}

function daysBetween(start: Date, end: Date): number {
  const ms = end.getTime() - start.getTime();
  return Math.max(0, Math.ceil(ms / (24 * 60 * 60 * 1000)));
}

export function PrimGunuHesaplama() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const calculate = () => {
    setError(null);
    const start = parseDate(startDate);
    const end = parseDate(endDate);
    if (!start) {
      setError("Geçerli bir başlangıç tarihi girin.");
      return;
    }
    if (!end) {
      setError("Geçerli bir bitiş tarihi girin.");
      return;
    }
    if (end < start) {
      setError("Bitiş tarihi başlangıç tarihinden önce olamaz.");
      return;
    }
    const days = daysBetween(start, end) + 1;
    setResult(days);
  };

  const reset = () => {
    setStartDate("");
    setEndDate("");
    setResult(null);
    setError(null);
    setCopied(false);
  };

  const copyResult = () => {
    if (result === null) return;
    navigator.clipboard.writeText(`Toplam prim günü: ${result} gün`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-xl border-2 border-[#e2e8f0] p-6 shadow-sm space-y-6">
        <p className="text-sm text-[#64748b]">
          SGK prim ödemesi yapılan veya sigortalı çalışılan tarih aralığını girin. Hesaplanan gün sayısı tahminidir; kesin prim günü SGK kayıtlarına göre belirlenir.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-[#475569] mb-2">Başlangıç tarihi</label>
            <Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#475569] mb-2">Bitiş tarihi</label>
            <Input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <div className="flex gap-3">
          <Button onClick={calculate} className="flex-1">Hesapla</Button>
          <Button onClick={reset} variant="outline">Sıfırla</Button>
        </div>
      </div>
      {result !== null && (
        <div className="bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6 space-y-3" id="result-summary">
          <h3 className="text-lg font-semibold text-[#1e293b]">Sonuç</h3>
          <p className="text-2xl font-bold text-[#10b981] font-mono">Toplam prim günü: {result} gün</p>
          <p className="text-sm text-[#64748b]">Tarih aralığındaki takvim günü sayısıdır. Resmi prim günü SGK kayıtlarına göre değişebilir.</p>
          <Button onClick={copyResult} variant="outline" size="sm">{copied ? "Kopyalandı!" : "Sonucu kopyala"}</Button>
        </div>
      )}
    </div>
  );
}

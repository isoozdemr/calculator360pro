"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface TimeEntry {
  clockIn: string;
  clockOut: string;
  breakMinutes: string;
}

export function TurkeyHoursCalculator() {
  const [entries, setEntries] = useState<TimeEntry[]>([{ clockIn: "", clockOut: "", breakMinutes: "0" }]);
  const [result, setResult] = useState<{
    dailyHours: number[];
    totalHours: number;
    totalMinutes: number;
    regularHours: number;
    overtimeHours: number;
  } | null>(null);
  const [errors, setErrors] = useState<Record<number, string>>({});

  const handleEntryChange = useCallback((index: number, field: keyof TimeEntry, value: string) => {
    setEntries((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
    if (errors[index]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[index];
        return updated;
      });
    }
  }, [errors]);

  const addEntry = useCallback(() => {
    setEntries((prev) => [...prev, { clockIn: "", clockOut: "", breakMinutes: "0" }]);
  }, []);

  const removeEntry = useCallback((index: number) => {
    setEntries((prev) => prev.filter((_, i) => i !== index));
    setErrors((prev) => {
      const updated = { ...prev };
      delete updated[index];
      return updated;
    });
  }, []);

  const parseTime = useCallback((timeStr: string): number => {
    if (!timeStr) return NaN;
    const [hours, minutes] = timeStr.split(":").map(Number);
    if (isNaN(hours) || isNaN(minutes)) return NaN;
    return hours * 60 + minutes;
  }, []);

  const calculate = useCallback(() => {
    const newErrors: Record<number, string> = {};
    const dailyHours: number[] = [];

    entries.forEach((entry, index) => {
      if (!entry.clockIn || !entry.clockOut) {
        newErrors[index] = "Giriş ve çıkış saati zorunludur";
        return;
      }
      const clockInMinutes = parseTime(entry.clockIn);
      const clockOutMinutes = parseTime(entry.clockOut);
      const breakMinutes = parseFloat(entry.breakMinutes) || 0;
      if (isNaN(clockInMinutes) || isNaN(clockOutMinutes)) {
        newErrors[index] = "Saat formatı HH:MM olmalıdır";
        return;
      }
      let workMinutes = clockOutMinutes - clockInMinutes;
      if (workMinutes < 0) workMinutes += 24 * 60;
      workMinutes -= breakMinutes;
      if (workMinutes < 0) {
        newErrors[index] = "Mola süresi çalışma süresini aşamaz";
        return;
      }
      dailyHours.push(workMinutes / 60);
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);
    const totalMinutes = Math.round(totalHours * 60);
    const regularHours = Math.min(totalHours, 40);
    const overtimeHours = Math.max(0, totalHours - 40);
    setResult({ dailyHours, totalHours, totalMinutes, regularHours, overtimeHours });
  }, [entries, parseTime]);

  const reset = useCallback(() => {
    setEntries([{ clockIn: "", clockOut: "", breakMinutes: "0" }]);
    setResult(null);
    setErrors({});
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          {entries.map((entry, index) => (
            <div key={index} className="p-4 border-2 border-[#e2e8f0] rounded-lg space-y-3">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-[#1e293b]">Gün {index + 1}</h4>
                {entries.length > 1 && (
                  <button onClick={() => removeEntry(index)} className="text-sm text-[#ef4444] hover:text-[#dc2626]">
                    Kaldır
                  </button>
                )}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Input
                  label="Giriş Saati"
                  type="time"
                  value={entry.clockIn}
                  onChange={(e) => handleEntryChange(index, "clockIn", e.target.value)}
                  error={errors[index]?.includes("Giriş") ? errors[index] : undefined}
                />
                <Input
                  label="Çıkış Saati"
                  type="time"
                  value={entry.clockOut}
                  onChange={(e) => handleEntryChange(index, "clockOut", e.target.value)}
                  error={errors[index]?.includes("Çıkış") ? errors[index] : undefined}
                />
              </div>
              <Input
                label="Mola (dakika)"
                type="number"
                value={entry.breakMinutes}
                onChange={(e) => handleEntryChange(index, "breakMinutes", e.target.value)}
                helperText="Ücretsiz mola süresi (dakika)"
                min="0"
                step="1"
              />
              {errors[index] && !errors[index].includes("Giriş") && !errors[index].includes("Çıkış") && (
                <p className="text-xs text-[#ef4444]">{errors[index]}</p>
              )}
            </div>
          ))}

          <Button onClick={addEntry} variant="outline" className="w-full">
            Başka Gün Ekle
          </Button>

          <div className="flex gap-3">
            <Button onClick={calculate} className="flex-1">
              Saatleri Hesapla
            </Button>
            <Button onClick={reset} variant="outline">
              Sıfırla
            </Button>
          </div>
        </div>

        {result && (
          <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-[#1e293b]">Sonuçlar</h3>
            <div className="space-y-3">
              {result.dailyHours.map((hours, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-sm text-[#64748b]">Gün {index + 1}</span>
                  <span className="text-base font-semibold text-[#10b981] font-mono">
                    {hours.toFixed(2)} saat
                  </span>
                </div>
              ))}
              <div className="pt-3 border-t border-[#10b981] space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-[#64748b]">Toplam Saat</span>
                  <span className="text-2xl font-bold text-[#10b981] font-mono">{result.totalHours.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#64748b]">Normal Saat</span>
                  <span className="text-xl font-bold text-[#10b981] font-mono">{result.regularHours.toFixed(2)}</span>
                </div>
                {result.overtimeHours > 0 && (
                  <div className="flex justify-between">
                    <span className="text-sm text-[#64748b]">Mesai Saati</span>
                    <span className="text-xl font-bold text-[#10b981] font-mono">{result.overtimeHours.toFixed(2)}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

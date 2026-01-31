"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function TurkeyPercentageCalculator() {
  const [value, setValue] = useState("");
  const [percentage, setPercentage] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [calculationType, setCalculationType] = useState<
    "of" | "increase" | "decrease" | "findPercentage"
  >("of");
  const [oldValue, setOldValue] = useState("");
  const [newValue, setNewValue] = useState("");
  
  const [valueError, setValueError] = useState<string | null>(null);
  const [percentageError, setPercentageError] = useState<string | null>(null);
  const [oldValueError, setOldValueError] = useState<string | null>(null);
  const [newValueError, setNewValueError] = useState<string | null>(null);

  const handleValueChange = (val: string) => {
    setValue(val);
    if (valueError) setValueError(null);
  };

  const handlePercentageChange = (val: string) => {
    setPercentage(val);
    if (percentageError) setPercentageError(null);
  };

  const handleOldValueChange = (val: string) => {
    setOldValue(val);
    if (oldValueError) setOldValueError(null);
  };

  const handleNewValueChange = (val: string) => {
    setNewValue(val);
    if (newValueError) setNewValueError(null);
  };

  const calculate = () => {
    if (calculationType === "of") {
      const val = parseFloat(value);
      const perc = parseFloat(percentage);
      
      if (!value || isNaN(val) || val <= 0) {
        setValueError("Lütfen geçerli bir değer girin");
        return;
      }
      if (!percentage || isNaN(perc) || perc < 0) {
        setPercentageError("Lütfen geçerli bir yüzde girin");
        return;
      }
      
      setResult((val * perc) / 100);
    } else if (calculationType === "increase" || calculationType === "decrease") {
      const old = parseFloat(oldValue);
      const newVal = parseFloat(newValue);
      
      if (!oldValue || isNaN(old) || old <= 0) {
        setOldValueError("Lütfen geçerli bir eski değer girin");
        return;
      }
      if (!newValue || isNaN(newVal) || newVal <= 0) {
        setNewValueError("Lütfen geçerli bir yeni değer girin");
        return;
      }

      if (calculationType === "increase") {
        setResult(((newVal - old) / old) * 100);
      } else {
        setResult(((old - newVal) / old) * 100);
      }
    } else if (calculationType === "findPercentage") {
      const val = parseFloat(value);
      const perc = parseFloat(percentage);
      
      if (!value || isNaN(val) || val <= 0) {
        setValueError("Lütfen geçerli bir değer girin");
        return;
      }
      if (!percentage || isNaN(perc) || perc <= 0) {
        setPercentageError("Lütfen geçerli bir toplam değer girin");
        return;
      }
      
      setResult((val / perc) * 100);
    }
  };

  const reset = () => {
    setValue("");
    setPercentage("");
    setOldValue("");
    setNewValue("");
    setResult(null);
    setValueError(null);
    setPercentageError(null);
    setOldValueError(null);
    setNewValueError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <button
              onClick={() => setCalculationType("of")}
              className={`px-3 py-2 rounded-lg font-medium transition-colors min-h-[44px] text-sm ${
                calculationType === "of"
                  ? "bg-[#2563eb] text-white"
                  : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              Yüzde Hesapla
            </button>
            <button
              onClick={() => setCalculationType("increase")}
              className={`px-3 py-2 rounded-lg font-medium transition-colors min-h-[44px] text-sm ${
                calculationType === "increase"
                  ? "bg-[#2563eb] text-white"
                  : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              Artış Oranı
            </button>
            <button
              onClick={() => setCalculationType("decrease")}
              className={`px-3 py-2 rounded-lg font-medium transition-colors min-h-[44px] text-sm ${
                calculationType === "decrease"
                  ? "bg-[#2563eb] text-white"
                  : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              Azalış Oranı
            </button>
            <button
              onClick={() => setCalculationType("findPercentage")}
              className={`px-3 py-2 rounded-lg font-medium transition-colors min-h-[44px] text-sm ${
                calculationType === "findPercentage"
                  ? "bg-[#2563eb] text-white"
                  : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              Oran Bul
            </button>
          </div>

          {calculationType === "of" && (
            <>
              <Input
                label="Değer"
                type="number"
                value={value}
                onChange={(e) => handleValueChange(e.target.value)}
                onBlur={() => {
                  const val = parseFloat(value);
                  if (!value || isNaN(val) || val <= 0) {
                    setValueError("Lütfen geçerli bir değer girin");
                  }
                }}
                placeholder="Değeri girin (örn: 1000)"
                error={valueError || undefined}
                helperText="Yüzdesi hesaplanacak değer"
                step="0.01"
                min="0.01"
              />
              <Input
                label="Yüzde (%)"
                type="number"
                value={percentage}
                onChange={(e) => handlePercentageChange(e.target.value)}
                onBlur={() => {
                  const perc = parseFloat(percentage);
                  if (!percentage || isNaN(perc) || perc < 0) {
                    setPercentageError("Lütfen geçerli bir yüzde girin");
                  }
                }}
                placeholder="Yüzde girin (örn: 25)"
                error={percentageError || undefined}
                helperText="Hesaplanacak yüzde değeri"
                step="0.01"
                min="0"
              />
            </>
          )}

          {calculationType === "findPercentage" && (
            <>
              <Input
                label="Parça Değer"
                type="number"
                value={value}
                onChange={(e) => handleValueChange(e.target.value)}
                onBlur={() => {
                  const val = parseFloat(value);
                  if (!value || isNaN(val) || val <= 0) {
                    setValueError("Lütfen geçerli bir değer girin");
                  }
                }}
                placeholder="Parça değeri girin (örn: 25)"
                error={valueError || undefined}
                helperText="Yüzdesi bulunacak parça değer"
                step="0.01"
                min="0.01"
              />
              <Input
                label="Toplam Değer"
                type="number"
                value={percentage}
                onChange={(e) => handlePercentageChange(e.target.value)}
                onBlur={() => {
                  const perc = parseFloat(percentage);
                  if (!percentage || isNaN(perc) || perc <= 0) {
                    setPercentageError("Lütfen geçerli bir toplam değer girin");
                  }
                }}
                placeholder="Toplam değeri girin (örn: 100)"
                error={percentageError || undefined}
                helperText="Toplam değer"
                step="0.01"
                min="0.01"
              />
            </>
          )}

          {(calculationType === "increase" || calculationType === "decrease") && (
            <>
              <Input
                label="Eski Değer"
                type="number"
                value={oldValue}
                onChange={(e) => handleOldValueChange(e.target.value)}
                onBlur={() => {
                  const old = parseFloat(oldValue);
                  if (!oldValue || isNaN(old) || old <= 0) {
                    setOldValueError("Lütfen geçerli bir değer girin");
                  }
                }}
                placeholder="Eski değeri girin (örn: 100)"
                error={oldValueError || undefined}
                helperText="Değişiklik öncesi değer"
                step="0.01"
                min="0.01"
              />
              <Input
                label="Yeni Değer"
                type="number"
                value={newValue}
                onChange={(e) => handleNewValueChange(e.target.value)}
                onBlur={() => {
                  const newVal = parseFloat(newValue);
                  if (!newValue || isNaN(newVal) || newVal <= 0) {
                    setNewValueError("Lütfen geçerli bir değer girin");
                  }
                }}
                placeholder="Yeni değeri girin (örn: 120)"
                error={newValueError || undefined}
                helperText="Değişiklik sonrası değer"
                step="0.01"
                min="0.01"
              />
            </>
          )}

          <div className="flex gap-3">
            <Button onClick={calculate} className="flex-1">
              Hesapla
            </Button>
            <Button onClick={reset} variant="outline">
              Sıfırla
            </Button>
          </div>
        </div>

        {result !== null && (
          <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#1e293b] mb-2">
              Sonuç
            </h3>
            <p className="text-3xl font-bold text-[#10b981] font-mono">
              {calculationType === "of"
                ? `${result.toFixed(2)}`
                : `%${result.toFixed(2)}`}
            </p>
            {calculationType === "of" && (
              <p className="text-sm text-[#64748b] mt-2">
                {value}&apos;nin %{percentage}&apos;ı = {result.toFixed(2)}
              </p>
            )}
            {calculationType === "findPercentage" && (
              <p className="text-sm text-[#64748b] mt-2">
                {value}, {percentage}&apos;nin %{result.toFixed(2)}&apos;sidir
              </p>
            )}
            {calculationType === "increase" && (
              <p className="text-sm text-[#64748b] mt-2">
                {oldValue}&apos;den {newValue}&apos;ye %{result.toFixed(2)} artış
              </p>
            )}
            {calculationType === "decrease" && (
              <p className="text-sm text-[#64748b] mt-2">
                {oldValue}&apos;den {newValue}&apos;ye %{result.toFixed(2)} azalış
              </p>
            )}
          </div>
        )}
      </div>

      {/* Bilgilendirme Kutusu */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">💡 Yüzde Hesaplama İpuçları</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• <strong>Yüzde hesapla:</strong> 1000&apos;in %20&apos;si = 200</li>
          <li>• <strong>Artış oranı:</strong> 100&apos;den 120&apos;ye = %20 artış</li>
          <li>• <strong>Azalış oranı:</strong> 100&apos;den 80&apos;e = %20 azalış</li>
          <li>• <strong>Oran bul:</strong> 25, 100&apos;ün yüzde kaçı = %25</li>
        </ul>
      </div>
    </div>
  );
}

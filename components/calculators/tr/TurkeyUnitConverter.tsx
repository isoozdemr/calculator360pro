"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

type UnitType = "length" | "weight" | "temperature" | "volume" | "area";

const UNIT_CONVERSIONS: Record<UnitType, Record<string, number>> = {
  length: {
    meter: 1,
    kilometer: 0.001,
    centimeter: 100,
    millimeter: 1000,
    mile: 0.000621371,
    yard: 1.09361,
    foot: 3.28084,
    inch: 39.3701,
  },
  weight: {
    kilogram: 1,
    gram: 1000,
    ton: 0.001,
    pound: 2.20462,
    ounce: 35.274,
  },
  temperature: {
    celsius: 1,
    fahrenheit: 1,
    kelvin: 1,
  },
  volume: {
    liter: 1,
    milliliter: 1000,
    gallon: 0.264172,
    quart: 1.05669,
    pint: 2.11338,
    cup: 4.22675,
    fluidOunce: 33.814,
  },
  area: {
    squareMeter: 1,
    squareKilometer: 0.000001,
    hectare: 0.0001,
    acre: 0.000247105,
    squareMile: 0.000000386102,
    squareYard: 1.19599,
    squareFoot: 10.7639,
    squareInch: 1550,
  },
};

const UNIT_LABELS_TR: Record<string, Record<string, string>> = {
  length: {
    meter: "Metre (m)",
    kilometer: "Kilometre (km)",
    centimeter: "Santimetre (cm)",
    millimeter: "Milimetre (mm)",
    mile: "Mil (mi)",
    yard: "Yarda (yd)",
    foot: "Fit (ft)",
    inch: "İnç (in)",
  },
  weight: {
    kilogram: "Kilogram (kg)",
    gram: "Gram (g)",
    ton: "Metrik Ton (t)",
    pound: "Pound (lb)",
    ounce: "Ons (oz)",
  },
  temperature: {
    celsius: "Celsius (°C)",
    fahrenheit: "Fahrenheit (°F)",
    kelvin: "Kelvin (K)",
  },
  volume: {
    liter: "Litre (L)",
    milliliter: "Mililitre (mL)",
    gallon: "Galon (gal)",
    quart: "Kuart (qt)",
    pint: "Pint (pt)",
    cup: "Fincan (c)",
    fluidOunce: "Sıvı Onsu (fl oz)",
  },
  area: {
    squareMeter: "Metrekare (m²)",
    squareKilometer: "Kilometrekare (km²)",
    hectare: "Hektar (ha)",
    acre: "Dönüm (ac)",
    squareMile: "Mil kare (mi²)",
    squareYard: "Yarda kare (yd²)",
    squareFoot: "Fit kare (ft²)",
    squareInch: "İnç kare (in²)",
  },
};

const CATEGORY_LABELS_TR: Record<UnitType, string> = {
  length: "Uzunluk",
  weight: "Ağırlık",
  temperature: "Sıcaklık",
  volume: "Hacim",
  area: "Alan",
};

export function TurkeyUnitConverter() {
  const [unitType, setUnitType] = useState<UnitType>("length");
  const [fromUnit, setFromUnit] = useState("meter");
  const [toUnit, setToUnit] = useState("kilometer");
  const [value, setValue] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [valueError, setValueError] = useState<string | null>(null);

  const handleValueChange = useCallback((val: string) => {
    setValue(val);
    if (valueError) setValueError(null);
  }, [valueError]);

  const handleUnitTypeChange = useCallback((type: UnitType) => {
    setUnitType(type);
    const units = Object.keys(UNIT_CONVERSIONS[type]);
    setFromUnit(units[0]);
    setToUnit(units[1] || units[0]);
    setValue("");
    setResult(null);
  }, []);

  const convertTemperature = useCallback((val: number, from: string, to: string): number => {
    if (from === to) return val;
    let celsius = 0;
    if (from === "celsius") celsius = val;
    else if (from === "fahrenheit") celsius = (val - 32) * 5 / 9;
    else if (from === "kelvin") celsius = val - 273.15;
    else return val;
    if (to === "celsius") return celsius;
    if (to === "fahrenheit") return (celsius * 9 / 5) + 32;
    if (to === "kelvin") return celsius + 273.15;
    return celsius;
  }, []);

  const calculate = useCallback(() => {
    if (!value || value.trim() === "") {
      setValueError("Değer gerekli");
      return;
    }
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      setValueError("Geçerli bir sayı girin");
      return;
    }
    setValueError(null);

    if (unitType === "temperature") {
      const converted = convertTemperature(numValue, fromUnit, toUnit);
      setResult(converted);
      return;
    }

    const fromFactor = UNIT_CONVERSIONS[unitType][fromUnit];
    const toFactor = UNIT_CONVERSIONS[unitType][toUnit];
    if (!fromFactor || !toFactor) {
      setValueError("Geçersiz birim seçimi");
      return;
    }
    const baseValue = numValue / fromFactor;
    const converted = baseValue * toFactor;
    setResult(converted);
  }, [value, unitType, fromUnit, toUnit, convertTemperature]);

  const reset = useCallback(() => {
    setValue("");
    setResult(null);
    setValueError(null);
  }, []);

  const unitOptions = Object.keys(UNIT_CONVERSIONS[unitType]).map((key) => ({
    value: key,
    label: UNIT_LABELS_TR[unitType]?.[key] || key,
  }));

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-1.5">Birim Türü</label>
            <select
              value={unitType}
              onChange={(e) => handleUnitTypeChange(e.target.value as UnitType)}
              className="w-full px-4 py-2.5 text-base border-2 border-[#e2e8f0] rounded-lg bg-white text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent min-h-[44px]"
            >
              <option value="length">{CATEGORY_LABELS_TR.length}</option>
              <option value="weight">{CATEGORY_LABELS_TR.weight}</option>
              <option value="temperature">{CATEGORY_LABELS_TR.temperature}</option>
              <option value="volume">{CATEGORY_LABELS_TR.volume}</option>
              <option value="area">{CATEGORY_LABELS_TR.area}</option>
            </select>
          </div>

          <Input
            label="Değer"
            type="number"
            value={value}
            onChange={(e) => handleValueChange(e.target.value)}
            error={valueError || undefined}
            helperText="Çevrilecek değeri girin"
            step="0.01"
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#1e293b] mb-1.5">Kaynak</label>
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="w-full px-4 py-2.5 text-base border-2 border-[#e2e8f0] rounded-lg bg-white text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent min-h-[44px]"
              >
                {unitOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1e293b] mb-1.5">Hedef</label>
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="w-full px-4 py-2.5 text-base border-2 border-[#e2e8f0] rounded-lg bg-white text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent min-h-[44px]"
              >
                {unitOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-3">
            <Button onClick={calculate} className="flex-1">
              Çevir
            </Button>
            <Button onClick={reset} variant="outline">
              Sıfırla
            </Button>
          </div>
        </div>

        {result !== null && (
          <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-[#1e293b]">Sonuç</h3>
            <div>
              <p className="text-sm text-[#64748b] mb-2">
                {value} {unitOptions.find((o) => o.value === fromUnit)?.label} =
              </p>
              <p className="text-3xl font-bold text-[#10b981] font-mono">
                {result.toFixed(6).replace(/\.?0+$/, "")} {unitOptions.find((o) => o.value === toUnit)?.label}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  calculateIncomeTax,
  INCOME_TAX_BRACKETS_2026,
  DATA_VERSION,
} from "@/lib/data/turkey-2026-data";

interface TaxFormData {
  annualIncome: number;
  incomeType: "wage" | "self-employment" | "rental" | "other";
}

interface TaxResult {
  grossIncome: number;
  totalTax: number;
  netIncome: number;
  effectiveRate: number;
  breakdown: {
    bracket: { min: number; max: number | null; rate: number };
    taxableAmount: number;
    tax: number;
  }[];
}

export function TurkeyTaxCalculator() {
  const [result, setResult] = useState<TaxResult | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<TaxFormData>();

  const onSubmit = (data: TaxFormData) => {
    const taxResult = calculateIncomeTax(data.annualIncome);
    
    setResult({
      grossIncome: data.annualIncome,
      totalTax: taxResult.totalTax,
      netIncome: data.annualIncome - taxResult.totalTax,
      effectiveRate: taxResult.effectiveRate,
      breakdown: taxResult.breakdown,
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
      {/* Güncelleme Bilgisi */}
      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-700">
          <strong>Son Güncelleme:</strong> {DATA_VERSION.lastUpdatedDisplay} | 
          <strong> Kaynak:</strong> {DATA_VERSION.sources.tax}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-[#1e293b] mb-2">
            Yıllık Gelir (TL)
          </label>
          <input
            type="number"
            {...register("annualIncome", {
              required: "Yıllık gelir gereklidir",
              min: { value: 0, message: "Gelir 0'dan küçük olamaz" },
            })}
            className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-lg focus:border-[#2563eb] focus:outline-none transition-colors"
            placeholder="Örn: 500000"
          />
          {errors.annualIncome && (
            <p className="text-red-500 text-sm mt-1">{errors.annualIncome.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-[#1e293b] mb-2">
            Gelir Türü
          </label>
          <select
            {...register("incomeType")}
            className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-lg focus:border-[#2563eb] focus:outline-none transition-colors"
          >
            <option value="wage">Ücret Geliri (Maaş)</option>
            <option value="self-employment">Serbest Meslek Geliri</option>
            <option value="rental">Kira Geliri</option>
            <option value="other">Diğer Gelirler</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-[#2563eb] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors"
        >
          Vergi Hesapla
        </button>
      </form>

      {result && (
        <div className="mt-8 space-y-6">
          <h3 className="text-xl font-bold text-[#1e293b] border-b pb-2">
            Vergi Hesaplama Sonuçları
          </h3>
          
          {/* Ana Sonuçlar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0]">
              <p className="text-sm text-[#64748b]">Brüt Gelir</p>
              <p className="text-2xl font-bold text-[#1e293b]">
                {formatCurrency(result.grossIncome)}
              </p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="text-sm text-red-600">Toplam Vergi</p>
              <p className="text-2xl font-bold text-red-700">
                {formatCurrency(result.totalTax)}
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm text-green-600">Net Gelir</p>
              <p className="text-2xl font-bold text-green-700">
                {formatCurrency(result.netIncome)}
              </p>
            </div>
            <div className="bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0]">
              <p className="text-sm text-[#64748b]">Efektif Vergi Oranı</p>
              <p className="text-2xl font-bold text-[#1e293b]">
                %{result.effectiveRate.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Vergi Dilimi Detayları */}
          <div className="bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0]">
            <h4 className="font-semibold text-[#1e293b] mb-4">
              Vergi Dilimi Detayları
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#e2e8f0]">
                    <th className="text-left py-2 px-3 text-[#64748b]">Dilim</th>
                    <th className="text-left py-2 px-3 text-[#64748b]">Oran</th>
                    <th className="text-right py-2 px-3 text-[#64748b]">Matrah</th>
                    <th className="text-right py-2 px-3 text-[#64748b]">Vergi</th>
                  </tr>
                </thead>
                <tbody>
                  {result.breakdown.map((item, index) => (
                    <tr key={index} className="border-b border-[#e2e8f0] last:border-0">
                      <td className="py-2 px-3 text-[#1e293b]">
                        {formatCurrency(item.bracket.min)} - {item.bracket.max ? formatCurrency(item.bracket.max) : "∞"}
                      </td>
                      <td className="py-2 px-3 text-[#1e293b]">%{item.bracket.rate}</td>
                      <td className="py-2 px-3 text-right text-[#1e293b]">
                        {formatCurrency(item.taxableAmount)}
                      </td>
                      <td className="py-2 px-3 text-right font-semibold text-red-600">
                        {formatCurrency(item.tax)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 2026 Vergi Dilimleri Tablosu */}
      <div className="mt-8 bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0]">
        <h4 className="font-semibold text-[#1e293b] mb-4">
          2026 Yılı Gelir Vergisi Dilimleri
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#e2e8f0]">
                <th className="text-left py-2 px-3 text-[#64748b]">Gelir Aralığı</th>
                <th className="text-right py-2 px-3 text-[#64748b]">Vergi Oranı</th>
              </tr>
            </thead>
            <tbody>
              {INCOME_TAX_BRACKETS_2026.map((bracket, index) => (
                <tr key={index} className="border-b border-[#e2e8f0] last:border-0">
                  <td className="py-2 px-3 text-[#1e293b]">
                    {formatCurrency(bracket.min)} - {bracket.max ? formatCurrency(bracket.max) : "ve üzeri"}
                  </td>
                  <td className="py-2 px-3 text-right font-semibold text-[#2563eb]">
                    %{bracket.rate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

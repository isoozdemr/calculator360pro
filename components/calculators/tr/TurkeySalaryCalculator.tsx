"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  calculateNetSalary,
  MINIMUM_WAGE_2026,
  SGK_RATES_2026,
  AGI_RATES_2026,
  DATA_VERSION,
} from "@/lib/data/turkey-2026-data";

interface SalaryFormData {
  grossSalary: number;
  maritalStatus: "single" | "marriedSpouseWorking" | "marriedSpouseNotWorking";
  childCount: number;
}

interface SalaryResult {
  gross: number;
  net: number;
  deductions: {
    sgk: number;
    unemployment: number;
    incomeTax: number;
    stampTax: number;
    total: number;
  };
  agi: number;
  employerCost: number;
}

export function TurkeySalaryCalculator() {
  const [result, setResult] = useState<SalaryResult | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<SalaryFormData>({
    defaultValues: {
      maritalStatus: "single",
      childCount: 0,
    },
  });

  const onSubmit = (data: SalaryFormData) => {
    const salaryResult = calculateNetSalary(
      data.grossSalary,
      data.maritalStatus,
      data.childCount
    );

    // İşveren maliyeti hesaplama
    const sgkBase = Math.min(Math.max(data.grossSalary, SGK_RATES_2026.limits.floor), SGK_RATES_2026.limits.ceiling);
    const employerSgk = sgkBase * (SGK_RATES_2026.employer.sgk / 100);
    const employerUnemployment = sgkBase * (SGK_RATES_2026.employer.unemployment / 100);
    const employerCost = data.grossSalary + employerSgk + employerUnemployment;

    setResult({
      ...salaryResult,
      employerCost,
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
          <strong> Kaynaklar:</strong> {DATA_VERSION.sources.sgk}, {DATA_VERSION.sources.minimumWage}
        </p>
      </div>

      {/* Asgari Ücret Bilgisi */}
      <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="font-semibold text-yellow-800 mb-2">
          2026 Asgari Ücret Bilgisi
        </h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-yellow-700">Brüt:</span>
            <span className="font-semibold text-yellow-900 ml-2">
              {formatCurrency(MINIMUM_WAGE_2026.gross)}
            </span>
          </div>
          <div>
            <span className="text-yellow-700">Net:</span>
            <span className="font-semibold text-yellow-900 ml-2">
              {formatCurrency(MINIMUM_WAGE_2026.net)}
            </span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-[#1e293b] mb-2">
            Brüt Maaş (TL)
          </label>
          <input
            type="number"
            {...register("grossSalary", {
              required: "Brüt maaş gereklidir",
              min: { value: MINIMUM_WAGE_2026.gross, message: `Minimum asgari ücret (${formatCurrency(MINIMUM_WAGE_2026.gross)}) olmalıdır` },
            })}
            className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-lg focus:border-[#2563eb] focus:outline-none transition-colors"
            placeholder={`Örn: ${MINIMUM_WAGE_2026.gross}`}
          />
          {errors.grossSalary && (
            <p className="text-red-500 text-sm mt-1">{errors.grossSalary.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-[#1e293b] mb-2">
            Medeni Durum
          </label>
          <select
            {...register("maritalStatus")}
            className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-lg focus:border-[#2563eb] focus:outline-none transition-colors"
          >
            <option value="single">Bekar</option>
            <option value="marriedSpouseWorking">Evli (Eşi Çalışıyor)</option>
            <option value="marriedSpouseNotWorking">Evli (Eşi Çalışmıyor)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#1e293b] mb-2">
            Çocuk Sayısı
          </label>
          <select
            {...register("childCount", { valueAsNumber: true })}
            className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-lg focus:border-[#2563eb] focus:outline-none transition-colors"
          >
            <option value={0}>Çocuk Yok</option>
            <option value={1}>1 Çocuk</option>
            <option value={2}>2 Çocuk</option>
            <option value={3}>3 Çocuk</option>
            <option value={4}>4 Çocuk</option>
            <option value={5}>5+ Çocuk</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-[#2563eb] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors"
        >
          Maaş Hesapla
        </button>
      </form>

      {result && (
        <div className="mt-8 space-y-6">
          <h3 className="text-xl font-bold text-[#1e293b] border-b pb-2">
            Maaş Hesaplama Sonuçları
          </h3>

          {/* Ana Sonuçlar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0]">
              <p className="text-sm text-[#64748b]">Brüt Maaş</p>
              <p className="text-2xl font-bold text-[#1e293b]">
                {formatCurrency(result.gross)}
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm text-green-600">Net Maaş (Ele Geçen)</p>
              <p className="text-2xl font-bold text-green-700">
                {formatCurrency(result.net)}
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm text-purple-600">İşveren Maliyeti</p>
              <p className="text-2xl font-bold text-purple-700">
                {formatCurrency(result.employerCost)}
              </p>
            </div>
          </div>

          {/* Kesinti Detayları */}
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h4 className="font-semibold text-red-800 mb-4">Kesintiler</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-red-600">SGK İşçi Payı (%{SGK_RATES_2026.worker.sgk})</p>
                <p className="font-semibold text-red-700">
                  {formatCurrency(result.deductions.sgk)}
                </p>
              </div>
              <div>
                <p className="text-sm text-red-600">İşsizlik Sigortası (%{SGK_RATES_2026.worker.unemployment})</p>
                <p className="font-semibold text-red-700">
                  {formatCurrency(result.deductions.unemployment)}
                </p>
              </div>
              <div>
                <p className="text-sm text-red-600">Gelir Vergisi</p>
                <p className="font-semibold text-red-700">
                  {formatCurrency(result.deductions.incomeTax)}
                </p>
              </div>
              <div>
                <p className="text-sm text-red-600">Damga Vergisi</p>
                <p className="font-semibold text-red-700">
                  {formatCurrency(result.deductions.stampTax)}
                </p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-red-200">
              <div className="flex justify-between items-center">
                <span className="text-red-700 font-semibold">Toplam Kesinti:</span>
                <span className="text-xl font-bold text-red-800">
                  {formatCurrency(result.deductions.total)}
                </span>
              </div>
            </div>
          </div>

          {/* AGI Bilgisi */}
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">Asgari Geçim İndirimi (AGİ)</h4>
            <div className="flex justify-between items-center">
              <span className="text-green-600">Aylık AGİ Tutarı:</span>
              <span className="text-xl font-bold text-green-700">
                {formatCurrency(result.agi)}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* SGK Oranları Bilgisi */}
      <div className="mt-8 bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0]">
        <h4 className="font-semibold text-[#1e293b] mb-4">
          2026 SGK ve Kesinti Oranları
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-medium text-[#1e293b] mb-2">İşçi Kesintileri</h5>
            <ul className="text-sm text-[#64748b] space-y-1">
              <li>• SGK Primi: %{SGK_RATES_2026.worker.sgk}</li>
              <li>• İşsizlik Sigortası: %{SGK_RATES_2026.worker.unemployment}</li>
              <li>• Gelir Vergisi: Kademeli (%15-%40)</li>
              <li>• Damga Vergisi: ‰7.59 (asgari ücret muaf)</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-[#1e293b] mb-2">İşveren Kesintileri</h5>
            <ul className="text-sm text-[#64748b] space-y-1">
              <li>• SGK Primi: %{SGK_RATES_2026.employer.sgk}</li>
              <li>• İşsizlik Sigortası: %{SGK_RATES_2026.employer.unemployment}</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-[#e2e8f0]">
          <h5 className="font-medium text-[#1e293b] mb-2">SGK Taban/Tavan</h5>
          <ul className="text-sm text-[#64748b] space-y-1">
            <li>• Taban Ücret: {formatCurrency(SGK_RATES_2026.limits.floor)}</li>
            <li>• Tavan Ücret: {formatCurrency(SGK_RATES_2026.limits.ceiling)}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

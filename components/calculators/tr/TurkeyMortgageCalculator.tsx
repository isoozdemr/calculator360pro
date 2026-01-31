"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  calculateLoanCost,
  MORTGAGE_FEES_2026,
  DATA_VERSION,
} from "@/lib/data/turkey-2026-data";

interface MortgageFormData {
  propertyValue: number;
  downPayment: number;
  interestRate: number;
  termYears: number;
}

interface MortgageResult {
  loanAmount: number;
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  effectiveRate: number;
  titleDeedFee: number;
  estimatedTotalCost: number;
  amortizationSchedule: {
    month: number;
    payment: number;
    principal: number;
    interest: number;
    balance: number;
  }[];
}

export function TurkeyMortgageCalculator() {
  const [result, setResult] = useState<MortgageResult | null>(null);
  const [showFullSchedule, setShowFullSchedule] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<MortgageFormData>({
    defaultValues: {
      termYears: 10,
      interestRate: 2.5,
    },
  });

  const propertyValue = watch("propertyValue");
  const downPayment = watch("downPayment");

  const onSubmit = (data: MortgageFormData) => {
    const loanAmount = data.propertyValue - data.downPayment;
    const termMonths = data.termYears * 12;
    
    const loanResult = calculateLoanCost(
      loanAmount,
      data.interestRate,
      termMonths,
      "mortgage"
    );

    // Tapu harcı hesaplama
    const titleDeedFee = data.propertyValue * (MORTGAGE_FEES_2026.titleDeedFees.buyer / 100);

    // Amortisman tablosu oluşturma
    const monthlyRate = data.interestRate / 100 / 12;
    let balance = loanAmount;
    const amortizationSchedule: MortgageResult["amortizationSchedule"] = [];

    for (let month = 1; month <= termMonths; month++) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = loanResult.monthlyPayment - interestPayment;
      balance -= principalPayment;

      amortizationSchedule.push({
        month,
        payment: loanResult.monthlyPayment,
        principal: principalPayment,
        interest: interestPayment,
        balance: Math.max(0, balance),
      });
    }

    setResult({
      loanAmount,
      monthlyPayment: loanResult.monthlyPayment,
      totalPayment: loanResult.totalPayment,
      totalInterest: loanResult.totalInterest,
      effectiveRate: loanResult.effectiveRate,
      titleDeedFee,
      estimatedTotalCost: loanResult.totalPayment + titleDeedFee + downPayment,
      amortizationSchedule,
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const ltvRatio = propertyValue && downPayment 
    ? ((propertyValue - downPayment) / propertyValue * 100).toFixed(1) 
    : "0";

  return (
    <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
      {/* Güncelleme Bilgisi */}
      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-700">
          <strong>Son Güncelleme:</strong> {DATA_VERSION.lastUpdatedDisplay} | 
          <strong> Kaynak:</strong> {DATA_VERSION.sources.banking}
        </p>
      </div>

      {/* Konut Kredisi Avantajları */}
      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
        <h4 className="font-semibold text-green-800 mb-2">
          Konut Kredisi Vergi Avantajları (2026)
        </h4>
        <ul className="text-sm text-green-700 space-y-1">
          <li>✓ KKDF: %{MORTGAGE_FEES_2026.kkdf.mortgage} (Konut kredisinde muaf)</li>
          <li>✓ BSMV: %{MORTGAGE_FEES_2026.bsmv.mortgage} (Konut kredisinde muaf)</li>
          <li>• Tapu Harcı (Alıcı): %{MORTGAGE_FEES_2026.titleDeedFees.buyer}</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-2">
              Konut Değeri (TL)
            </label>
            <input
              type="number"
              {...register("propertyValue", {
                required: "Konut değeri gereklidir",
                min: { value: 100000, message: "Minimum 100.000 TL olmalıdır" },
              })}
              className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-lg focus:border-[#2563eb] focus:outline-none transition-colors"
              placeholder="Örn: 5000000"
            />
            {errors.propertyValue && (
              <p className="text-red-500 text-sm mt-1">{errors.propertyValue.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-2">
              Peşinat (TL)
            </label>
            <input
              type="number"
              {...register("downPayment", {
                required: "Peşinat gereklidir",
                min: { value: 0, message: "Peşinat 0'dan küçük olamaz" },
              })}
              className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-lg focus:border-[#2563eb] focus:outline-none transition-colors"
              placeholder="Örn: 1000000"
            />
            {errors.downPayment && (
              <p className="text-red-500 text-sm mt-1">{errors.downPayment.message}</p>
            )}
            {propertyValue && downPayment && (
              <p className="text-sm text-[#64748b] mt-1">
                LTV Oranı: %{ltvRatio} (Kredi/Değer)
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-2">
              Yıllık Faiz Oranı (%)
            </label>
            <input
              type="number"
              step="0.01"
              {...register("interestRate", {
                required: "Faiz oranı gereklidir",
                min: { value: 0.1, message: "Minimum %0.1 olmalıdır" },
                max: { value: 50, message: "Maksimum %50 olabilir" },
              })}
              className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-lg focus:border-[#2563eb] focus:outline-none transition-colors"
              placeholder="Örn: 2.5"
            />
            {errors.interestRate && (
              <p className="text-red-500 text-sm mt-1">{errors.interestRate.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-2">
              Vade (Yıl)
            </label>
            <select
              {...register("termYears", { valueAsNumber: true })}
              className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-lg focus:border-[#2563eb] focus:outline-none transition-colors"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20].map((year) => (
                <option key={year} value={year}>
                  {year} Yıl ({year * 12} Ay)
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#2563eb] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors"
        >
          Kredi Hesapla
        </button>
      </form>

      {result && (
        <div className="mt-8 space-y-6">
          <h3 className="text-xl font-bold text-[#1e293b] border-b pb-2">
            Konut Kredisi Sonuçları
          </h3>

          {/* Ana Sonuçlar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0]">
              <p className="text-sm text-[#64748b]">Kredi Tutarı</p>
              <p className="text-2xl font-bold text-[#1e293b]">
                {formatCurrency(result.loanAmount)}
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-600">Aylık Taksit</p>
              <p className="text-2xl font-bold text-blue-700">
                {formatCurrency(result.monthlyPayment)}
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm text-green-600">Efektif Faiz</p>
              <p className="text-2xl font-bold text-green-700">
                %{result.effectiveRate.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Maliyet Detayları */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="text-sm text-red-600">Toplam Faiz</p>
              <p className="text-xl font-bold text-red-700">
                {formatCurrency(result.totalInterest)}
              </p>
            </div>
            <div className="bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0]">
              <p className="text-sm text-[#64748b]">Toplam Geri Ödeme</p>
              <p className="text-xl font-bold text-[#1e293b]">
                {formatCurrency(result.totalPayment)}
              </p>
            </div>
          </div>

          {/* Ek Masraflar */}
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-4">Ek Masraflar</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-yellow-600">Tapu Harcı (Alıcı)</p>
                <p className="font-semibold text-yellow-700">
                  {formatCurrency(result.titleDeedFee)}
                </p>
              </div>
              <div>
                <p className="text-sm text-yellow-600">Ekspertiz Ücreti (Tahmini)</p>
                <p className="font-semibold text-yellow-700">
                  {formatCurrency(MORTGAGE_FEES_2026.otherFees.appraisalFee.min)} - {formatCurrency(MORTGAGE_FEES_2026.otherFees.appraisalFee.max)}
                </p>
              </div>
            </div>
          </div>

          {/* Tahmini Toplam Maliyet */}
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <div className="flex justify-between items-center">
              <span className="text-purple-700 font-semibold">Tahmini Toplam Maliyet:</span>
              <span className="text-2xl font-bold text-purple-800">
                {formatCurrency(result.estimatedTotalCost)}
              </span>
            </div>
            <p className="text-xs text-purple-600 mt-2">
              (Peşinat + Toplam Geri Ödeme + Tapu Harcı)
            </p>
          </div>

          {/* Ödeme Planı */}
          <div className="bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0]">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold text-[#1e293b]">Ödeme Planı</h4>
              <button
                onClick={() => setShowFullSchedule(!showFullSchedule)}
                className="text-sm text-[#2563eb] hover:underline"
              >
                {showFullSchedule ? "Özet Göster" : "Tamamını Göster"}
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#e2e8f0]">
                    <th className="text-left py-2 px-3 text-[#64748b]">Ay</th>
                    <th className="text-right py-2 px-3 text-[#64748b]">Taksit</th>
                    <th className="text-right py-2 px-3 text-[#64748b]">Anapara</th>
                    <th className="text-right py-2 px-3 text-[#64748b]">Faiz</th>
                    <th className="text-right py-2 px-3 text-[#64748b]">Kalan Borç</th>
                  </tr>
                </thead>
                <tbody>
                  {(showFullSchedule 
                    ? result.amortizationSchedule 
                    : result.amortizationSchedule.slice(0, 12)
                  ).map((row) => (
                    <tr key={row.month} className="border-b border-[#e2e8f0] last:border-0">
                      <td className="py-2 px-3 text-[#1e293b]">{row.month}</td>
                      <td className="py-2 px-3 text-right text-[#1e293b]">
                        {formatCurrency(row.payment)}
                      </td>
                      <td className="py-2 px-3 text-right text-green-600">
                        {formatCurrency(row.principal)}
                      </td>
                      <td className="py-2 px-3 text-right text-red-600">
                        {formatCurrency(row.interest)}
                      </td>
                      <td className="py-2 px-3 text-right text-[#1e293b]">
                        {formatCurrency(row.balance)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

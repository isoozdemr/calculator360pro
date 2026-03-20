"use client";

import { useMemo, useState } from "react";

const CURRENCIES = ["USD", "EUR", "GBP", "TRY", "JPY", "CAD", "AUD"];

export function CurrencyConverterCalculator() {
  const [amount, setAmount] = useState(100);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [rate, setRate] = useState(35.2);

  const result = useMemo(() => {
    const converted = amount * rate;
    const reverseRate = rate > 0 ? 1 / rate : 0;
    return { converted, reverseRate };
  }, [amount, rate]);

  return (
    <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
      <h2 className="text-xl font-bold text-[#1e293b] mb-4">Currency Converter Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <label className="text-sm text-[#475569] md:col-span-1">
          Amount
          <input className="w-full mt-1 border rounded p-2" type="number" min={0} value={amount} onChange={(e) => setAmount(Number(e.target.value || 0))} />
        </label>
        <label className="text-sm text-[#475569]">
          From
          <select className="w-full mt-1 border rounded p-2" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
            {CURRENCIES.map((code) => <option key={code}>{code}</option>)}
          </select>
        </label>
        <label className="text-sm text-[#475569]">
          To
          <select className="w-full mt-1 border rounded p-2" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
            {CURRENCIES.map((code) => <option key={code}>{code}</option>)}
          </select>
        </label>
        <label className="text-sm text-[#475569]">
          Exchange Rate
          <input className="w-full mt-1 border rounded p-2" type="number" min={0} step="0.000001" value={rate} onChange={(e) => setRate(Number(e.target.value || 0))} />
        </label>
      </div>

      <div className="mt-6 bg-[#f8fafc] rounded-lg p-4 border">
        <p className="text-lg font-bold text-[#1e293b]">
          {amount.toFixed(2)} {fromCurrency} = {result.converted.toFixed(2)} {toCurrency}
        </p>
        <p className="text-sm text-[#475569] mt-1">Reverse rate: 1 {toCurrency} = {result.reverseRate.toFixed(6)} {fromCurrency}</p>
        <p className="text-xs text-[#64748b] mt-2">Manual-rate mode: verify live rates and fees before transactions.</p>
      </div>
    </div>
  );
}

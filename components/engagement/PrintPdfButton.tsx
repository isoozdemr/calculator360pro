"use client";

export function PrintPdfButton() {
  const handlePrint = () => {
    window.print();
  };
  return (
    <button
      type="button"
      onClick={handlePrint}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-[#e2e8f0] bg-white text-[#1e293b] hover:border-[#2563eb] hover:text-[#2563eb] transition-colors text-sm font-medium print:hidden"
      aria-label="Print or save as PDF"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2h-2m-4-1v8" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11v6m0 0l-3-3m3 3l3-3" />
      </svg>
      Print / Save as PDF
    </button>
  );
}

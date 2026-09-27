/** Kıdem tazminatı tavanları (brüt, TL). Kaynak: Hazine ve Maliye Bakanlığı genelgeleri. */
export const SEVERANCE_CEILINGS = [
  { from: "2026-07-01", amount: 73729.87 },
  { from: "2026-01-01", amount: 64948.77 },
  { from: "2025-07-01", amount: 53919.68 },
  { from: "2025-01-01", amount: 46655.43 },
] as const;

export const STAMP_TAX_RATE = 0.00759;

export function getSeveranceCeiling(exitDate: Date): number {
  const iso = exitDate.toISOString().slice(0, 10);
  const match = SEVERANCE_CEILINGS.find((c) => iso >= c.from);
  return (match ?? SEVERANCE_CEILINGS[SEVERANCE_CEILINGS.length - 1]).amount;
}

/** İş Kanunu md. 17 ihbar süreleri */
export function getNoticeWeeks(totalDays: number): number {
  if (totalDays < 182) return 2;
  if (totalDays < 548) return 4;
  if (totalDays < 1095) return 6;
  return 8;
}

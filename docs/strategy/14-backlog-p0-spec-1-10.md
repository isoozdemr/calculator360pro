# P0 Spec (Pages 1-10)

Detailed implementation contract for the first 10 pages.

## 1) Mortgage Extra Payment Calculator (Tool)
- Keywords: mortgage extra payment calculator, extra mortgage payment payoff.
- SERP intent: transactional calculator.
- Content skeleton: quick answer -> inputs -> extra-payment scenarios -> payoff impact table -> FAQ.
- Embedded tool/CTA: native tool; CTA `Calculate payoff impact`.
- Schema: `WebApplication`, `FAQPage`, `BreadcrumbList`.

## 2) Best Mortgage Calculator for 2026 (Landing/Embed)
- Keywords: what is the best mortgage calculator, best mortgage calculator 2026.
- SERP intent: comparison/decision.
- Content skeleton: comparison checklist -> why PITI matters -> tool demo -> shortlist criteria -> FAQ.
- Embedded tool/CTA: embed mortgage widget; CTA `Try calculator with your numbers`.
- Schema: `Article`, `FAQPage`, `BreadcrumbList`.

## 3) Mortgage PMI Calculator (Tool)
- Keywords: PMI calculator, mortgage pmi estimate.
- SERP intent: transactional calculator.
- Content skeleton: PMI basics -> down payment threshold -> monthly PMI estimate -> cancellation scenarios -> FAQ.
- Embedded tool/CTA: native tool; CTA `Estimate PMI monthly`.
- Schema: `WebApplication`, `FAQPage`, `BreadcrumbList`.

## 4) Mortgage Calculator with Taxes, Insurance & HOA (Landing/Embed)
- Keywords: mortgage calculator with taxes and insurance, PITI calculator.
- SERP intent: calculator + explanatory.
- Content skeleton: PITI definition -> required inputs -> HOA effect -> worked examples -> FAQ.
- Embedded tool/CTA: embedded mortgage calculator pre-filled with escrow fields.
- Schema: `HowTo`, `FAQPage`, `BreadcrumbList`.

## 5) Mortgage Amortization Schedule Export Calculator (Tool)
- Keywords: mortgage amortization schedule export, mortgage schedule csv.
- SERP intent: utility/download.
- Content skeleton: schedule preview -> export options -> practical use cases -> FAQ.
- Embedded tool/CTA: native tool; CTA `Download schedule`.
- Schema: `WebApplication`, `FAQPage`, `BreadcrumbList`.

## 6) Mortgage Refinance Break-Even Calculator (Landing/Embed)
- Keywords: refinance calculator break even, refinance closing costs calculator.
- SERP intent: decision calculator.
- Content skeleton: break-even formula -> current vs new loan -> costs and timeline -> recommendation heuristics -> FAQ.
- Embedded tool/CTA: embed refinance comparison block.
- Schema: `HowTo`, `FAQPage`, `BreadcrumbList`.

## 7) Student Loans Monthly Payment: Standard vs Extended (Landing/Embed)
- Keywords: student loans monthly payment calculator, standard vs extended student loan.
- SERP intent: compare/educational.
- Content skeleton: payment logic -> term comparison matrix -> example scenarios -> CTA to calculator -> FAQ.
- Embedded tool/CTA: embedded student-loan calculator with term toggle.
- Schema: `Article`, `FAQPage`, `BreadcrumbList`.

## 8) Student Loan Amortization Schedule Calculator (Tool)
- Keywords: student loan amortization schedule, student loan payment table.
- SERP intent: utility calculator.
- Content skeleton: inputs -> schedule table -> first N months visualization -> export note -> FAQ.
- Embedded tool/CTA: native tool CTA `Generate payment table`.
- Schema: `WebApplication`, `FAQPage`, `BreadcrumbList`.

## 9) Income-Driven Student Loan Payment Calculator (Tool)
- Keywords: income driven repayment calculator student loan monthly, SAVE IBR PAYE calculator.
- SERP intent: estimate monthly under plan assumptions.
- Content skeleton: discretionary income logic -> plan options -> estimate ranges -> limitations/disclaimer -> FAQ.
- Embedded tool/CTA: native tool CTA `Estimate IDR payment`.
- Schema: `WebApplication`, `FAQPage`, `BreadcrumbList`.

## 10) KYK Ogrenim Kredisi Aylik Taksit Hesabi 2026 (TR Landing/Embed)
- Keywords: ogrenim kredisi aylik odeme hesaplama, kyk taksit hesaplama.
- SERP intent: practical TR estimate.
- Content skeleton: odeme mantigi -> vade secenekleri -> ornek tablo -> tool yonlendirme -> SSS.
- Embedded tool/CTA: TR calculator CTA `Aylik taksidi hesapla`.
- Schema: `HowTo`, `FAQPage`, `BreadcrumbList`.

## P0 rollout notes
- Publish order: 1 -> 2 -> 4 -> 3 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10.
- Internal links per page: min 4 links (2 horizontal, 1 hub, 1 cross-cluster).
- Success metric (30 days): indexation + first impressions + CTR baseline.


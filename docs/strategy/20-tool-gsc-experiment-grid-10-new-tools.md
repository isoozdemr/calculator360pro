# 28-Day GSC Experiment Grid (10 New EN Tools)

This matrix operationalizes monthly iteration for the 10 new tool pages.

## Cadence

- Day 0: Publish and request indexing.
- Day 14: Check indexation and initial impressions.
- Day 28: Run one-variable experiment per page.
- Day 56: Keep / revert / replace based on CTR and impressions.

## Success Rules

- Keep a variant if CTR improves by at least 15% with stable impressions.
- Replace a variant if CTR drops in 2 consecutive cycles.
- Change one variable only per page per cycle.

## Tool-Level Experiment Matrix

| Tool Slug | Primary Query Intent | Cycle 1 Variable | Variant A | Variant B | Cycle 2 Variable | Variant A | Variant B |
|---|---|---|---|---|---|---|---|
| `capital-gains-tax-calculator` | estimate tax on gains | Title angle | Capital Gains Tax Calculator | Capital Gains Tax Estimator | FAQ match | add "long-term vs short-term" FAQ | add "cost basis" FAQ |
| `self-employed-tax-calculator` | estimate SE tax | Title angle | Self-Employed Tax Calculator | 1099 Self-Employment Tax Calculator | Meta specificity | generic estimate | mention 92.35% and wage-base context |
| `net-worth-calculator` | personal finance snapshot | Meta angle | assets minus liabilities | track monthly progress wording | FAQ match | negative net worth FAQ | valuation method FAQ |
| `apr-calculator` | compare loan offers | Title angle | APR Calculator | Loan APR Calculator | FAQ match | APR vs interest rate FAQ | fees impact FAQ |
| `debt-snowball-calculator` | debt payoff strategy | Title angle | Debt Snowball Calculator | Debt Snowball Payoff Planner | Meta angle | payoff order focus | time + interest savings focus |
| `ovulation-calculator` | fertile window estimate | Title angle | Ovulation Calculator | Fertile Window Calculator | FAQ match | irregular cycle FAQ | reliability FAQ |
| `ideal-weight-calculator` | healthy weight range | Meta angle | BMI-based range description | healthy weight by height description | FAQ match | BMI limits FAQ | exact weight vs range FAQ |
| `percentage-points-calculator` | points vs percent difference | Title angle | Percentage Points Calculator | Percent vs Percentage Points Calculator | FAQ match | baseline zero FAQ | finance reporting FAQ |
| `work-hours-timesheet-calculator` | weekly hours + overtime | Title angle | Work Hours Timesheet Calculator | Timesheet and Overtime Calculator | Meta angle | break deduction focus | weekly overtime focus |
| `currency-converter-calculator` | quick conversion | Title angle | Currency Converter Calculator | Exchange Rate Converter Calculator | FAQ match | manual rate FAQ | bank spread/fee FAQ |

## Required Tracking Columns (change log)

For each page and cycle, record:

- URL
- Date applied
- Variable changed (title / meta / FAQ)
- Old copy
- New copy
- Impressions (last 28, previous 28)
- Clicks (last 28, previous 28)
- CTR (last 28, previous 28)
- Average position (last 28, previous 28)
- Decision (keep / revert / replace)

## Internal Link Boost Queue (if impressions low, CTR acceptable)

- Expand links from:
  - `/calculators`
  - category hubs (`/calculators/finance`, `/calculators/health`, `/calculators/math`, `/calculators/date-time`)
  - related tool pages via `relatedCalculators`
- Add one contextual internal link from at least two existing high-impression pages per new tool.

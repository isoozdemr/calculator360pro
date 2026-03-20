# Competitor Feature Spec and Minimums

All pages in the 50-page backlog must satisfy these minimums by cluster.

## Mortgage cluster
### Competitor pattern
- P&I + taxes + insurance + PMI shown separately and as total payment.
- Amortization table with at least first N months.
- Scenario-based guidance (extra payment, refinance, frequency).

### Minimum feature set (required)
1. Inputs: principal/home value, rate, term.
2. Escrow inputs: taxes and insurance.
3. Optional PMI logic or equivalent extra-cost toggle.
4. Monthly breakdown row: P&I, taxes, insurance, PMI, total.
5. Amortization preview table (min 12 months).
6. One scenario comparison block.

## Student loans cluster
### Competitor pattern
- Standard/extended comparison.
- Schedule visibility and payment decomposition.
- IDR pages expose discretionary-income assumptions.

### Minimum feature set (required)
1. Inputs: principal, APR, term.
2. Output: monthly payment, total interest, total paid.
3. Standard vs extended comparison view on relevant pages.
4. Schedule preview (min 12 months).
5. For IDR pages: income, family size, poverty adjustment, plan %.
6. Educational disclaimer for non-official estimates.

## BMI cluster
### Competitor pattern
- Formula + category interpretation.
- Adult ranges and health caution.

### Minimum feature set (required)
1. Metric and imperial input support.
2. BMI result with category label.
3. Category explanation (underweight/normal/overweight/obesity).
4. Medical caution note.
5. One worked example.

## Calorie cluster
### Competitor pattern
- BMR/TDEE explanation.
- Goal-based targets (lose/maintain/gain).
- Activity multipliers shown.

### Minimum feature set (required)
1. Age, sex, height, weight, activity inputs.
2. BMR and TDEE outputs.
3. Goal-mode calories (deficit/maintenance/surplus).
4. Method visibility (Mifflin-St Jeor baseline).
5. Macro split suggestion on macro pages.

## Percentage cluster
### Competitor pattern
- Core 3 operations + practical examples.
- Clear distinction between percent and percentage points.

### Minimum feature set (required)
1. "X% of Y" calculator.
2. "A is what % of B" calculator.
3. Percent change calculator.
4. Percentage points helper for dedicated pages.
5. 3+ real-life examples with quick copy.

## Release gating
- No page ships if minimum set is incomplete for its cluster.
- Content/FAQ cannot claim unavailable calculations.
- If a feature is deferred, page title/description must avoid the promise.


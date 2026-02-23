/**
 * Category Page Content
 *
 * Goals: SEO, AdSense compliance (minimum substantial content per category page).
 * Each category has 400-800 words of unique, informative content.
 */

export const CATEGORY_CONTENT: Record<string, string> = {
  finance: `
    <h2>Why Use Finance Calculators?</h2>
    <p>Financial planning often starts with simple calculations: how much will I pay each month on a loan? What is my take-home pay after taxes? How much do I need to save for retirement? Our free finance calculators help you answer these questions quickly and accurately, with no sign-up required.</p>
    <p>Whether you are comparing mortgage offers, planning your budget, or estimating tax withholding, having the right numbers at your fingertips supports better decisions. Finance calculators reduce errors from manual math and let you explore scenarios—for example, how a lower interest rate or a longer term changes your monthly payment.</p>

    <h3>Loans and Credit</h3>
    <p>Loan calculators use the standard amortization formula to compute monthly payments, total interest, and payoff timelines. For consumer loans, factors such as APR, term length, and fees all affect the total cost. Our <a href="/calculators/finance/loan-calculator">loan calculator</a> and <a href="/calculators/finance/mortgage-calculator">mortgage calculator</a> support these calculations. Credit card debt can grow quickly due to high interest rates; our <a href="/calculators/finance/credit-card-payoff-calculator">credit card payoff calculator</a> shows how extra payments shorten the payoff period and reduce total interest.</p>

    <h3>Tax and Salary</h3>
    <p>Understanding your after-tax income is essential for budgeting. Income tax is often progressive, so effective rates depend on your total income and deductions. Our <a href="/calculators/finance/tax-calculator">tax calculator</a> helps estimate liability, and our <a href="/calculators/finance/salary-calculator">salary calculator</a> helps you see how gross pay translates to net pay after typical withholdings and deductions.</p>

    <h3>Savings and Investment</h3>
    <p>Compound interest can significantly grow savings over time. Our <a href="/calculators/finance/savings-calculator">savings calculator</a> and <a href="/calculators/finance/compound-interest-calculator">compound interest calculator</a> let you project future balances. For retirement, our <a href="/calculators/finance/retirement-calculator">retirement calculator</a> and <a href="/calculators/finance/investment-calculator">investment calculator</a> help you set targets and see the impact of regular contributions and expected returns. These tools are for estimation only; actual results depend on market conditions and your situation.</p>

    <h3>Daily Financial Tools</h3>
    <p>Smaller but useful tools include our <a href="/calculators/finance/tip-calculator">tip calculator</a> for splitting bills and tipping, and our <a href="/calculators/finance/discount-calculator">discount calculator</a> for sale prices and percentage-off deals. For multi-currency amounts, use our <a href="/calculators/finance/currency-converter">currency converter</a>. All calculators are free and designed to give you clear, immediate results for everyday financial questions.</p>
  `,

  health: `
    <h2>Why Use Health Calculators?</h2>
    <p>Health calculators provide quick estimates for common metrics such as body mass index (BMI), daily calorie needs, and body composition. They are useful for tracking trends and setting rough targets, but they are not a substitute for medical advice or professional assessments.</p>

    <h3>BMI and Body Composition</h3>
    <p>BMI is a simple ratio of weight to height used by health organizations to classify underweight, normal weight, overweight, and obesity. Our <a href="/calculators/health/bmi-calculator">BMI calculator</a> supports both metric and imperial units. BMI does not distinguish muscle from fat, so athletes or very muscular individuals may get results that look "overweight" even when they are healthy. For a more detailed view of body composition, our <a href="/calculators/health/body-fat-calculator">body fat calculator</a> uses additional measurements to estimate body fat percentage.</p>

    <h3>Calories and Nutrition</h3>
    <p>Knowing your approximate daily calorie needs helps with weight maintenance, loss, or gain. Our <a href="/calculators/health/calorie-calculator">calorie calculator</a> estimates total daily energy expenditure (TDEE) based on age, sex, weight, height, and activity level. These are estimates; individual needs vary. Use them as a starting point and adjust based on your own results and any guidance from a doctor or dietitian.</p>

    <h3>Pregnancy and Special Cases</h3>
    <p>Our <a href="/calculators/health/pregnancy-calculator">pregnancy calculator</a> helps estimate due date and current gestational stage from the last menstrual period. It is for general information only; prenatal care and due dates should be confirmed by a healthcare provider.</p>

    <p>All health tools on this site are for informational and educational use only. They do not diagnose conditions or replace professional medical or nutritional advice. For personalized guidance, consult a qualified healthcare provider.</p>
  `,

  education: `
    <h2>Why Use Education Calculators?</h2>
    <p>Students and educators often need to compute grades, grade point averages (GPA), and weighted or unweighted scores. Our education calculators handle these tasks quickly and consistently, so you can focus on planning and improvement rather than manual arithmetic.</p>

    <h3>GPA and Grades</h3>
    <p>Grade point average is a standard way to summarize academic performance. Many schools use a 4.0 scale where letter grades map to point values (e.g., A = 4.0, B = 3.0). Our <a href="/calculators/education/gpa-calculator">GPA calculator</a> supports the 4.0 scale and lets you enter letter grades and credit hours to compute cumulative or term GPA. Weighted GPAs, used in some high schools for honors or AP courses, can also be modeled by assigning higher point values to those grades.</p>

    <h3>Planning and Goals</h3>
    <p>Knowing your current GPA and how future grades affect it helps you set realistic targets. For example, you can see what grades you need in remaining courses to reach a desired cumulative GPA. Education calculators are useful for quick checks and planning; for official GPA or transcript questions, always refer to your institution's policies and records.</p>

    <p>We also offer <a href="/calculators/math/percentage-calculator">percentage calculators</a> that are helpful for test scores and assignment grades. Combine these tools with good study habits and support from teachers or tutors for the best outcomes.</p>
  `,

  math: `
    <h2>Why Use Math Calculators?</h2>
    <p>Math calculators cover everyday arithmetic, percentages, and unit conversions, as well as more advanced scientific and algebraic operations. They are useful for homework, quick checks, and real-world problems in work or daily life.</p>

    <h3>Percentages and Proportions</h3>
    <p>Percentages appear everywhere: discounts, tax, tips, and statistics. Our <a href="/calculators/math/percentage-calculator">percentage calculator</a> handles basic percentage of a number, percentage increase and decrease, and "what percent is X of Y?" style questions. Related tools include our <a href="/calculators/finance/discount-calculator">discount calculator</a> for sale prices and our <a href="/calculators/finance/tip-calculator">tip calculator</a> for splitting bills.</p>

    <h3>Scientific and Unit Conversions</h3>
    <p>For trigonometry, logarithms, powers, and other functions, our <a href="/calculators/math/scientific-calculator">scientific calculator</a> provides a full set of operations. When you need to convert between units—length, weight, volume, temperature, or others—our <a href="/calculators/math/unit-converter">unit converter</a> supports many common systems (metric, imperial, etc.) so you can get consistent results for recipes, travel, or coursework.</p>

    <h3>Accuracy and Use</h3>
    <p>All math tools are designed to give accurate results for the given inputs. For high-stakes or official use, always verify with your own checks or with an authority (e.g., teacher, examiner). These calculators are meant to support learning and productivity, not to replace understanding of the underlying math.</p>
  `,

  "date-time": `
    <h2>Why Use Date and Time Calculators?</h2>
    <p>Date and time calculators answer questions like: How old am I in years, months, and days? How many days between two dates? How many hours did I work this week? They are useful for planning, record-keeping, and quick reference.</p>

    <h3>Age and Date Difference</h3>
    <p>Our <a href="/calculators/date-time/age-calculator">age calculator</a> computes your exact age from your birth date to today (or another end date), in years, months, and days. It is handy for forms, eligibility checks, or simply satisfying curiosity. The <a href="/calculators/date-time/date-calculator">date calculator</a> finds the number of days between two dates, or the date that is a given number of days before or after a start date. This helps with project timelines, deadlines, and countdowns.</p>

    <h3>Time and Hours</h3>
    <p>Tracking elapsed time is common for work, study, or events. Our <a href="/calculators/date-time/hours-calculator">hours calculator</a> lets you add or subtract time intervals (hours and minutes) so you can total work hours, duration of activities, or time between start and end. All date and time tools use the Gregorian calendar and do not account for local daylight saving or time zone rules unless you enter times that already reflect them.</p>

    <p>Use these calculators for planning and estimation. For legal or official purposes (e.g., age verification, payroll), always follow the rules and systems required by your organization or jurisdiction.</p>
  `,
};

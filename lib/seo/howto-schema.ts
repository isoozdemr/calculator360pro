import { CalculatorDefinition } from "@/lib/calculators/definitions";
import { SITE_URL, getCategorySlugByKey } from "@/lib/constants";

/**
 * Calculator HowTo steps definitions
 * Each calculator has specific steps for the HowTo schema
 */
const CALCULATOR_HOWTO_STEPS: Record<string, Array<{ name: string; text: string }>> = {
  "percentage-calculator": [
    { name: "Enter the first value", text: "Enter the number you want to calculate the percentage of in the first input field." },
    { name: "Enter the second value", text: "Enter the total or base number in the second input field." },
    { name: "Select calculation type", text: "Choose the type of percentage calculation you need (percentage of, percentage increase, or percentage decrease)." },
    { name: "Click Calculate", text: "Press the Calculate button to see your result instantly." },
    { name: "View your result", text: "The calculator will display the percentage result with detailed explanation." },
  ],
  "bmi-calculator": [
    { name: "Select your unit system", text: "Choose between metric (kg/cm) or imperial (lbs/inches) units." },
    { name: "Enter your weight", text: "Input your current weight in the weight field." },
    { name: "Enter your height", text: "Input your height in the height field." },
    { name: "Click Calculate", text: "Press the Calculate button to compute your BMI." },
    { name: "Review your BMI category", text: "The calculator shows your BMI value and which category (underweight, normal, overweight, obese) you fall into." },
  ],
  "mortgage-calculator": [
    { name: "Enter loan amount", text: "Input the total amount you plan to borrow for your mortgage." },
    { name: "Enter interest rate", text: "Input the annual interest rate offered by your lender." },
    { name: "Select loan term", text: "Choose your loan term (typically 15 or 30 years)." },
    { name: "Enter down payment", text: "Input your down payment amount if applicable." },
    { name: "Click Calculate", text: "Press Calculate to see your monthly payment and amortization schedule." },
    { name: "Review payment breakdown", text: "View your monthly payment, total interest, and payment schedule." },
  ],
  "gpa-calculator": [
    { name: "Add your courses", text: "Click 'Add Course' to add each course you've taken." },
    { name: "Enter course name", text: "Type the name of each course." },
    { name: "Enter credits/hours", text: "Input the credit hours for each course." },
    { name: "Select your grade", text: "Choose the letter grade you received for each course." },
    { name: "Click Calculate GPA", text: "Press Calculate to compute your Grade Point Average." },
    { name: "View your GPA", text: "The calculator displays your cumulative GPA on the 4.0 scale." },
  ],
  "age-calculator": [
    { name: "Enter your birth date", text: "Select or input your date of birth using the date picker." },
    { name: "Select the reference date", text: "Choose the date you want to calculate your age as of (defaults to today)." },
    { name: "Click Calculate", text: "Press the Calculate button to compute your exact age." },
    { name: "View detailed age breakdown", text: "See your age in years, months, weeks, and days." },
  ],
  "compound-interest-calculator": [
    { name: "Enter principal amount", text: "Input your initial investment or savings amount." },
    { name: "Enter interest rate", text: "Input the annual interest rate as a percentage." },
    { name: "Select compounding frequency", text: "Choose how often interest compounds (daily, monthly, quarterly, annually)." },
    { name: "Enter time period", text: "Input the number of years for your investment." },
    { name: "Add regular contributions", text: "Optionally add monthly or annual contributions to see accelerated growth." },
    { name: "Click Calculate", text: "Press Calculate to see your investment growth projection." },
  ],
  "loan-calculator": [
    { name: "Enter loan amount", text: "Input the total amount you want to borrow." },
    { name: "Enter interest rate", text: "Input the annual interest rate for the loan." },
    { name: "Select loan term", text: "Choose the length of time to repay the loan." },
    { name: "Click Calculate", text: "Press Calculate to see your monthly payment and total cost." },
    { name: "Review amortization schedule", text: "View the breakdown of principal and interest for each payment." },
  ],
  "tax-calculator": [
    { name: "Enter your income", text: "Input your annual gross income before taxes." },
    { name: "Select filing status", text: "Choose your tax filing status (single, married, head of household)." },
    { name: "Enter deductions", text: "Input your deductions (standard or itemized)." },
    { name: "Add tax credits", text: "Enter any tax credits you qualify for." },
    { name: "Click Calculate", text: "Press Calculate to estimate your tax liability." },
    { name: "Review tax breakdown", text: "See your effective tax rate and total taxes owed." },
  ],
  "calorie-calculator": [
    { name: "Enter your age", text: "Input your current age in years." },
    { name: "Select your gender", text: "Choose your biological gender for accurate calculations." },
    { name: "Enter height and weight", text: "Input your current height and weight." },
    { name: "Select activity level", text: "Choose your typical daily activity level (sedentary to very active)." },
    { name: "Click Calculate", text: "Press Calculate to see your daily calorie needs." },
    { name: "View calorie recommendations", text: "See calories for maintenance, weight loss, and weight gain goals." },
  ],
  "body-fat-calculator": [
    { name: "Select your gender", text: "Choose your gender as body fat calculations differ between men and women." },
    { name: "Enter your measurements", text: "Input your height, neck circumference, and waist circumference. Women also need hip measurement." },
    { name: "Enter your weight", text: "Input your current body weight." },
    { name: "Click Calculate", text: "Press Calculate to estimate your body fat percentage." },
    { name: "Review your results", text: "See your body fat percentage and which fitness category you fall into." },
  ],
  "scientific-calculator": [
    { name: "Enter your expression", text: "Type the mathematical expression you want to calculate using the number pad and function buttons." },
    { name: "Use advanced functions", text: "Access trigonometric, logarithmic, and exponential functions using the function buttons." },
    { name: "Set angle mode", text: "Choose between degrees and radians for trigonometric calculations." },
    { name: "Press equals", text: "Click the equals button or press Enter to calculate the result." },
    { name: "View and use result", text: "The result is displayed and can be used in subsequent calculations." },
  ],
  "salary-calculator": [
    { name: "Enter gross salary", text: "Input your total salary before any deductions." },
    { name: "Select pay frequency", text: "Choose whether your salary is annual, monthly, bi-weekly, or hourly." },
    { name: "Enter tax information", text: "Input your filing status and any additional withholdings." },
    { name: "Add deductions", text: "Enter any pre-tax deductions like retirement contributions or health insurance." },
    { name: "Click Calculate", text: "Press Calculate to see your take-home pay breakdown." },
    { name: "Review salary breakdown", text: "View your net pay, tax breakdown, and annual totals." },
  ],
  "investment-calculator": [
    { name: "Enter initial investment", text: "Input the amount you plan to invest initially." },
    { name: "Set expected return rate", text: "Enter the expected annual rate of return for your investment." },
    { name: "Enter investment period", text: "Specify how many years you plan to invest." },
    { name: "Add regular contributions", text: "Enter any monthly or annual contributions you plan to make." },
    { name: "Click Calculate", text: "Press Calculate to project your investment growth." },
    { name: "Review growth projection", text: "View your projected investment value and growth chart." },
  ],
  "car-loan-calculator": [
    { name: "Enter vehicle price", text: "Input the purchase price of the vehicle." },
    { name: "Enter down payment", text: "Input your down payment amount." },
    { name: "Enter interest rate", text: "Input the annual interest rate for the auto loan." },
    { name: "Select loan term", text: "Choose the loan duration (typically 36, 48, 60, or 72 months)." },
    { name: "Add trade-in value", text: "Enter the value of any trade-in vehicle if applicable." },
    { name: "Click Calculate", text: "Press Calculate to see your monthly payment and total cost." },
  ],
  "student-loan-calculator": [
    { name: "Enter total loan balance", text: "Input your total student loan balance." },
    { name: "Enter interest rate", text: "Input the average interest rate across your loans." },
    { name: "Select repayment plan", text: "Choose your repayment plan type (standard, income-driven, etc.)." },
    { name: "Enter monthly payment", text: "Input your planned monthly payment amount." },
    { name: "Click Calculate", text: "Press Calculate to see your payoff timeline and total interest." },
    { name: "Explore repayment options", text: "Compare different payment amounts to see how they affect payoff time." },
  ],
  "credit-card-payoff-calculator": [
    { name: "Enter credit card balance", text: "Input your current credit card balance." },
    { name: "Enter interest rate (APR)", text: "Input your card's annual percentage rate." },
    { name: "Enter monthly payment", text: "Input your planned monthly payment amount." },
    { name: "Click Calculate", text: "Press Calculate to see your payoff timeline." },
    { name: "View payoff schedule", text: "See how long it will take to pay off your balance and total interest paid." },
    { name: "Try extra payments", text: "Experiment with higher payments to see how much time and money you can save." },
  ],
  "retirement-calculator": [
    { name: "Enter current age and retirement age", text: "Input your current age and the age you plan to retire." },
    { name: "Enter current savings", text: "Input your current retirement savings balance." },
    { name: "Enter monthly contributions", text: "Input how much you contribute to retirement each month." },
    { name: "Set expected return rate", text: "Enter your expected annual investment return rate." },
    { name: "Enter retirement income needs", text: "Estimate your annual income needs in retirement." },
    { name: "Click Calculate", text: "Press Calculate to see if you're on track for retirement." },
  ],
  "savings-calculator": [
    { name: "Enter initial deposit", text: "Input your starting savings amount." },
    { name: "Enter interest rate", text: "Input the annual interest rate for your savings account." },
    { name: "Select compounding frequency", text: "Choose how often interest compounds (daily, monthly, annually)." },
    { name: "Enter regular deposits", text: "Input any regular monthly deposits you plan to make." },
    { name: "Enter time period", text: "Specify how many years you want to save." },
    { name: "Click Calculate", text: "Press Calculate to see your savings growth projection." },
  ],
  "budget-calculator": [
    { name: "Enter your income", text: "Input your total monthly income from all sources." },
    { name: "Enter fixed expenses", text: "Input fixed monthly expenses like rent, utilities, and insurance." },
    { name: "Enter variable expenses", text: "Input variable expenses like groceries, entertainment, and transportation." },
    { name: "Set savings goals", text: "Specify how much you want to save each month." },
    { name: "Click Calculate", text: "Press Calculate to see your budget breakdown." },
    { name: "Review and adjust", text: "See where your money goes and identify areas to reduce spending." },
  ],
  "tip-calculator": [
    { name: "Enter bill amount", text: "Input the total bill amount before tip." },
    { name: "Select tip percentage", text: "Choose your desired tip percentage (15%, 18%, 20%, or custom)." },
    { name: "Enter number of people", text: "If splitting the bill, enter how many people are paying." },
    { name: "Click Calculate", text: "Press Calculate to see the tip amount and total." },
    { name: "View split amounts", text: "See how much each person owes including tip." },
  ],
  "discount-calculator": [
    { name: "Enter original price", text: "Input the original price of the item." },
    { name: "Enter discount percentage", text: "Input the discount percentage (e.g., 20 for 20% off)." },
    { name: "Click Calculate", text: "Press Calculate to see the discounted price." },
    { name: "View savings", text: "See the sale price and how much you save." },
    { name: "Try multiple discounts", text: "Stack multiple discounts to see cumulative savings." },
  ],
  "date-calculator": [
    { name: "Enter start date", text: "Select or input the starting date." },
    { name: "Enter end date", text: "Select or input the ending date." },
    { name: "Select calculation type", text: "Choose to calculate days between dates, or add/subtract days from a date." },
    { name: "Click Calculate", text: "Press Calculate to see the result." },
    { name: "View detailed breakdown", text: "See the difference in years, months, weeks, and days." },
  ],
  "unit-converter": [
    { name: "Select conversion category", text: "Choose the type of conversion (length, weight, temperature, volume, etc.)." },
    { name: "Enter the value", text: "Input the value you want to convert." },
    { name: "Select source unit", text: "Choose the unit you're converting from." },
    { name: "Select target unit", text: "Choose the unit you're converting to." },
    { name: "View result", text: "The converted value is displayed instantly." },
  ],
  "pregnancy-calculator": [
    { name: "Enter last menstrual period date", text: "Input the first day of your last menstrual period." },
    { name: "Or enter conception date", text: "Alternatively, enter your estimated conception date if known." },
    { name: "Click Calculate", text: "Press Calculate to see your due date and pregnancy timeline." },
    { name: "View pregnancy milestones", text: "See important dates and trimester breakdown." },
    { name: "Track your progress", text: "Monitor your current pregnancy week and upcoming milestones." },
  ],
  "hours-calculator": [
    { name: "Enter start time", text: "Input the start time for the period you want to calculate." },
    { name: "Enter end time", text: "Input the end time for the period." },
    { name: "Add break time", text: "Enter any break time to subtract from total hours." },
    { name: "Click Calculate", text: "Press Calculate to see total hours worked." },
    { name: "View time breakdown", text: "See hours, minutes, and decimal hours for payroll." },
  ],
  "currency-converter": [
    { name: "Enter amount", text: "Input the amount you want to convert." },
    { name: "Select source currency", text: "Choose the currency you're converting from." },
    { name: "Select target currency", text: "Choose the currency you're converting to." },
    { name: "View conversion rate", text: "The current exchange rate is displayed." },
    { name: "View converted amount", text: "See the converted amount in your target currency." },
  ],
  "inflation-purchasing-power-calculator": [
    { name: "Enter amount", text: "Input the dollar amount you want to convert (e.g., 10000 or 50000)." },
    { name: "Select start year", text: "Choose the year the amount is from (e.g., 2020)." },
    { name: "Select end year", text: "Choose the year you want the equivalent value in (e.g., 2026)." },
    { name: "Click Calculate", text: "Press Calculate to see the equivalent amount in end-year purchasing power." },
    { name: "Interpret result", text: "The result shows what the start-year amount is worth in end-year dollars based on BLS CPI-U inflation." },
  ],
  "fraction-calculator": [
    { name: "Enter first fraction", text: "Enter the numerator and denominator of the first fraction (e.g., 1 and 2 for 1/2)." },
    { name: "Select operation", text: "Choose add, subtract, multiply, or divide." },
    { name: "Enter second fraction", text: "Enter the numerator and denominator of the second fraction." },
    { name: "Click Calculate", text: "Press Calculate to see the result as a simplified fraction and decimal." },
    { name: "Copy or try examples", text: "Use Copy result to use the value elsewhere, or try an example preset for common calculations." },
  ],
  "bmr-calculator": [
    { name: "Select gender", text: "Choose your biological gender for the Mifflin-St Jeor formula." },
    { name: "Enter age, weight, height", text: "Enter your age in years and your weight and height in metric or imperial units." },
    { name: "Click Calculate", text: "Press Calculate to see your BMR (calories at rest) per day." },
    { name: "Interpret result", text: "The result is the calories your body burns at rest. Use our calorie calculator for total daily needs including activity." },
  ],
  "grade-calculator": [
    { name: "Choose mode", text: "Select percentage to letter, points to grade, or grade needed on final." },
    { name: "Select grading scale", text: "Choose standard (90/80/70/60), strict (93/85/77/70), or set custom cutoffs." },
    { name: "Enter your values", text: "Enter percentage, points earned and total, or current grade and final weight and desired grade." },
    { name: "Click Calculate", text: "Press Calculate to see your letter grade, percentage, or grade needed on the final." },
    { name: "Copy result", text: "Use Copy result to save the outcome for your records." },
  ],
  "roi-calculator": [
    { name: "Enter initial cost", text: "Input the amount you invested (e.g., purchase price plus fees)." },
    { name: "Enter final value", text: "Input the amount you received or current value (e.g., sale price or portfolio value)." },
    { name: "Enter holding period (optional)", text: "Add number of years held to see annualized ROI." },
    { name: "Click Calculate ROI", text: "Press Calculate to see ROI percentage and optional annualized return." },
    { name: "Copy result", text: "Use Copy result to save the ROI for your records. See disclaimer for educational use." },
  ],
  "payback-period-calculator": [
    { name: "Enter initial investment", text: "Input the total amount you spent on the project or asset." },
    { name: "Choose annual or monthly", text: "Select whether your net cash flow is per year or per month." },
    { name: "Enter net cash flow", text: "Input the annual or monthly net cash flow (revenue minus costs)." },
    { name: "Click Calculate payback", text: "Press Calculate to see payback period in years and months." },
    { name: "Copy result", text: "Use Copy result to save the payback period. Simple payback does not account for time value of money." },
  ],
};

/**
 * Generate HowTo schema for calculators
 * This helps with featured snippets and step-by-step rich results
 */
export function generateHowToSchema(calculator: CalculatorDefinition) {
  const steps = CALCULATOR_HOWTO_STEPS[calculator.id];
  
  // If no specific steps defined, use generic steps
  const howToSteps = steps || [
    { name: "Enter your values", text: "Input the required values in the calculator fields." },
    { name: "Review your inputs", text: "Double-check your entered values for accuracy." },
    { name: "Click Calculate", text: "Press the Calculate button to get your result." },
    { name: "View and interpret results", text: "Review the calculated results and any additional information provided." },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to Use the ${calculator.name}`,
    "description": calculator.description,
    "image": `${SITE_URL}/og-image.png`,
    "totalTime": "PT2M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0",
    },
    "supply": [],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Web browser",
      },
      {
        "@type": "HowToTool",
        "name": "Calculator360Pro online calculator",
      },
    ],
    "step": howToSteps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "url": `${SITE_URL}/calculators/${getCategorySlugByKey(calculator.category)}/${calculator.slug}#step${index + 1}`,
    })),
  };
}

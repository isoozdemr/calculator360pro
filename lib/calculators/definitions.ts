import { CalculatorCategory } from "@/lib/constants";
import { CALCULATOR_CONTENT } from "./content";

export interface CalculatorDefinition {
  id: string;
  name: string;
  slug: string;
  category: CalculatorCategory;
  description: string;
  keywords: string[];
  metaDescription: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedCalculators?: string[];
  content?: string; // SEO content: 1500-2000 words
}

export const CALCULATORS: Record<string, CalculatorDefinition> = {
  "percentage-calculator": {
    id: "percentage-calculator",
    name: "Percentage Calculator",
    slug: "percentage-calculator",
    category: "math",
    description:
      "Calculate percentages, percentage increase/decrease, and percentage of a number with our free percentage calculator.",
    keywords: [
      "percentage calculator",
      "percent calculator",
      "percentage increase calculator",
      "percentage decrease calculator",
      "calculate percentage",
      "percentage of a number",
      "percent change calculator",
      "percentage formula",
      "how to calculate percentage",
      "percentage calculator online free",
      "percent increase calculator",
      "percent decrease calculator",
      "percentage difference calculator",
      "find percentage",
      "work out percentage",
      "free online percentage calculator",
    ],
    metaDescription:
      "Free online percentage calculator. Calculate percent, increase/decrease, and percentage of a number. No sign-up, instant results. Fast and accurate for everyone.",
    faqs: [
      {
        question: "How do I calculate a percentage?",
        answer:
          "To calculate a percentage, divide the part by the whole and multiply by 100. For example, if you have 25 out of 100, the percentage is (25/100) × 100 = 25%. This formula works for any percentage calculation, whether you're calculating discounts, tips, test scores, or proportions. The result shows what portion of the whole the part represents.",
      },
      {
        question: "How do I calculate percentage increase?",
        answer:
          "Percentage increase = [(New Value - Old Value) / Old Value] × 100. For example, if a price increases from $100 to $120, the percentage increase is [(120-100)/100] × 100 = 20%. This calculation helps you understand growth rates, price changes, and improvements over time. It's useful for tracking salary increases, investment returns, and sales growth.",
      },
      {
        question: "How do I calculate percentage decrease?",
        answer:
          "Percentage decrease = [(Old Value - New Value) / Old Value] × 100. For example, if a price decreases from $100 to $80, the percentage decrease is [(100-80)/100] × 100 = 20%. This formula helps you calculate discounts, depreciation, and reductions. It's commonly used for sale prices, weight loss tracking, and budget reductions.",
      },
    ],
    relatedCalculators: ["gpa-calculator", "grade-calculator"],
    content: CALCULATOR_CONTENT["percentage-calculator"],
  },
  "bmi-calculator": {
    id: "bmi-calculator",
    name: "BMI Calculator",
    slug: "bmi-calculator",
    category: "health",
    description:
      "Calculate your Body Mass Index (BMI) using metric or imperial units. Get instant results and understand your BMI category.",
    keywords: [
      "BMI calculator",
      "body mass index calculator",
      "BMI calculator metric",
      "BMI calculator imperial",
      "calculate BMI",
      "BMI chart",
      "body mass index",
      "BMI range calculator",
      "BMI calculator for women",
      "BMI calculator for men",
      "healthy BMI calculator",
      "BMI calculator kg",
      "BMI calculator lbs",
      "ideal BMI calculator",
      "free BMI calculator",
      "free online BMI calculator 2026",
    ],
    metaDescription:
      "Calculating your BMI is easy: free online BMI calculator. Get instant Body Mass Index results (metric or imperial). Understand your BMI category and health status. No sign-up. Try now.",
    faqs: [
      {
        question: "What is BMI?",
        answer:
          "BMI (Body Mass Index) is a measure of body fat based on height and weight. It's calculated by dividing weight in kilograms by height in meters squared (kg/m²). For imperial units, multiply weight in pounds by 703, then divide by height in inches squared. BMI provides a quick screening tool to assess weight status, though it doesn't directly measure body fat percentage.",
      },
      {
        question: "What is a healthy BMI range?",
        answer:
          "A healthy BMI range is typically between 18.5 and 24.9. Below 18.5 is considered underweight, 25-29.9 is overweight, and 30 or above is considered obese. These ranges help assess health risks associated with weight. However, individual factors like muscle mass, age, and body composition should also be considered when evaluating health status.",
      },
      {
        question: "Is BMI accurate for everyone?",
        answer:
          "BMI is a general indicator but may not be accurate for athletes with high muscle mass, elderly individuals, or children. Consult a healthcare professional for personalized advice. For example, a muscular athlete might have a high BMI despite low body fat. Similarly, older adults may have different body composition that affects BMI interpretation.",
      },
    ],
    relatedCalculators: ["body-fat-calculator", "calorie-calculator"],
    content: CALCULATOR_CONTENT["bmi-calculator"],
  },
  "gpa-calculator": {
    id: "gpa-calculator",
    name: "GPA Calculator",
    slug: "gpa-calculator",
    category: "education",
    description:
      "Calculate your Grade Point Average (GPA) using the 4.0 scale or other grading systems. Perfect for students tracking their academic performance.",
    keywords: [
      "GPA calculator",
      "grade point average calculator",
      "GPA calculator 4.0 scale",
      "calculate GPA",
      "GPA calculator high school",
      "weighted GPA calculator",
      "unweighted GPA calculator",
      "college GPA calculator",
      "cumulative GPA calculator",
      "semester GPA calculator",
      "GPA calculator online free",
      "how to calculate GPA",
      "grade point calculator",
      "GPA conversion calculator",
    ],
    metaDescription:
      "Free GPA calculator to calculate your Grade Point Average using the 4.0 or 5.0 scale. Add courses, enter grades and credits. Perfect for students tracking academic performance. No sign-up.",
    faqs: [
      {
        question: "How is GPA calculated?",
        answer:
          "GPA is calculated by dividing the total grade points earned by the total credit hours attempted. Each letter grade corresponds to a point value (A=4.0, B=3.0, C=2.0, D=1.0, F=0.0). For example, if you earn an A in a 3-credit course, you get 12 grade points. Sum all grade points and divide by total credit hours to get your GPA.",
      },
      {
        question: "What is a good GPA?",
        answer:
          "A good GPA depends on the context. Generally, a GPA of 3.0 or above is considered good, 3.5 or above is very good, and 3.7 or above is excellent for most colleges and universities. Graduate programs often require 3.5 or higher, while some competitive programs may require 3.8 or above. High school GPAs are typically evaluated differently than college GPAs.",
      },
      {
        question: "Can I calculate weighted GPA?",
        answer:
          "Yes, weighted GPA accounts for the difficulty of courses (AP, honors, etc.). These courses typically receive an extra point (A=5.0, B=4.0, etc.) in weighted GPA calculations. This system rewards students for taking more challenging courses. Weighted GPA can exceed 4.0, making it useful for college admissions where course rigor matters.",
      },
    ],
    relatedCalculators: ["grade-calculator", "percentage-calculator"],
    content: CALCULATOR_CONTENT["gpa-calculator"],
  },
  "scientific-calculator": {
    id: "scientific-calculator",
    name: "Scientific Calculator",
    slug: "scientific-calculator",
    category: "math",
    description:
      "Advanced scientific calculator with trigonometric functions, logarithms, exponentials, and more. Perfect for students and professionals.",
    keywords: [
      "scientific calculator",
      "online scientific calculator",
      "calculator with functions",
      "trigonometry calculator",
      "math calculator",
      "graphing calculator online",
      "scientific calculator online free",
      "advanced calculator",
      "free scientific calculator",
      "calculator with functions online",
      "trigonometry calculator online",
      "advanced calculator online",
      "scientific calculator free",
      "online calculator with functions",
    ],
    metaDescription:
      "Free online scientific calculator with trig, logarithms, exponentials, and more. Degrees or radians. Perfect for students and professionals. No sign-up, instant results.",
    faqs: [
      {
        question: "What functions does a scientific calculator have?",
        answer:
          "A scientific calculator includes trigonometric functions (sin, cos, tan), logarithms (log, ln), exponentials, square roots, powers, and various mathematical operations beyond basic arithmetic. It also handles inverse trigonometric functions, hyperbolic functions, and statistical calculations. These features make it essential for advanced mathematics, engineering, physics, and science courses where complex calculations are required.",
      },
      {
        question: "Can I use this calculator for exams?",
        answer:
          "This calculator is suitable for practice and homework. For official exams, please check with your institution about allowed calculator types and policies. Many standardized tests have specific rules about calculator usage, including which models are permitted. Always verify exam requirements beforehand to ensure compliance with testing regulations.",
      },
      {
        question: "Does this calculator support complex numbers?",
        answer:
          "This calculator supports basic scientific functions. For complex number operations, you may need specialized mathematical software. Complex number calculations involve imaginary numbers and require specific algorithms. While this calculator handles real number operations excellently, advanced complex number work typically requires dedicated mathematical software or graphing calculators.",
      },
    ],
    relatedCalculators: ["percentage-calculator", "fraction-calculator"],
    content: CALCULATOR_CONTENT["scientific-calculator"],
  },
  "age-calculator": {
    id: "age-calculator",
    name: "Age Calculator",
    slug: "age-calculator",
    category: "dateTime",
    description:
      "Calculate your exact age in years, months, weeks, and days. Find out how many days you've been alive or calculate age differences.",
    keywords: [
      "age calculator",
      "calculate age",
      "how old am I",
      "age in days",
      "age difference calculator",
      "exact age calculator",
      "age in years months days",
      "birthday calculator",
      "age calculator online free",
      "calculate age in days",
      "age difference calculator online",
      "how old am I calculator",
      "birthday calculator free",
      "exact age calculator online",
    ],
    metaDescription:
      "Free age calculator: your exact age in years, months, weeks, and days. Find how many days you've been alive or age between two dates. No sign-up. Instant results.",
    faqs: [
      {
        question: "How do I calculate my exact age?",
        answer:
          "Your exact age is calculated by subtracting your birth date from the current date. The calculator accounts for leap years and different month lengths to give you an accurate result. For example, if you were born on March 15, 1990, and today is March 20, 2026, you're exactly 36 years and 5 days old. The calculation considers leap years and varying month lengths.",
      },
      {
        question: "Can I calculate age in different units?",
        answer:
          "Yes, the age calculator can show your age in years, months, weeks, days, hours, and even minutes or seconds for precise calculations. This flexibility helps with various needs, from legal age verification to fun facts about your life. For instance, you can see how many days you've been alive or calculate your age in hours for a unique perspective.",
      },
      {
        question: "How do I calculate the age difference between two people?",
        answer:
          "To calculate age difference, subtract the younger person's birth date from the older person's birth date. The calculator can show this difference in various time units. For example, if one person was born in 1990 and another in 1995, the age difference is 5 years. This is useful for comparing ages, understanding generational gaps, or calculating relationships between birth dates.",
      },
    ],
    relatedCalculators: ["date-calculator"],
    content: CALCULATOR_CONTENT["age-calculator"],
  },
  "mortgage-calculator": {
    id: "mortgage-calculator",
    name: "Mortgage Calculator",
    slug: "mortgage-calculator",
    category: "finance",
    description:
      "Calculate your monthly mortgage payment, total interest, and amortization schedule. Perfect for homebuyers planning their purchase.",
    keywords: [
      "mortgage calculator",
      "home loan calculator",
      "mortgage payment calculator",
      "calculate mortgage payment",
      "amortization calculator",
      "mortgage payment estimator",
      "home loan payment calculator",
      "mortgage rate calculator",
      "house payment calculator",
      "monthly mortgage payment calculator",
      "mortgage calculator with taxes and insurance",
      "home affordability calculator",
      "mortgage payoff calculator",
      "refinance calculator",
      "free mortgage calculator",
      "free online mortgage calculator 2026",
    ],
    metaDescription:
      "Free online mortgage calculator. Instant results for monthly payments, total interest, and amortization. No sign-up. Perfect for 2026 homebuyers. Try free.",
    faqs: [
      {
        question: "How is monthly mortgage payment calculated?",
        answer:
          "Monthly mortgage payment is calculated using the formula: M = P[r(1+r)^n]/[(1+r)^n-1], where P is principal, r is monthly interest rate, and n is number of payments. For example, a $300,000 loan at 4% annual interest for 30 years results in a monthly payment of approximately $1,432. This formula accounts for both principal and interest.",
      },
      {
        question: "What is included in a mortgage payment?",
        answer:
          "A mortgage payment typically includes principal (loan amount), interest, property taxes, homeowners insurance, and sometimes PMI (Private Mortgage Insurance). Principal and interest make up the core payment, while taxes and insurance are often escrowed. PMI is required when the down payment is less than 20% and protects the lender if you default on the loan.",
      },
      {
        question: "How does down payment affect mortgage payments?",
        answer:
          "A larger down payment reduces the principal amount, which lowers monthly payments and total interest paid over the life of the loan. For example, a 20% down payment on a $300,000 home ($60,000) reduces the loan to $240,000, saving thousands in interest. Additionally, down payments of 20% or more eliminate PMI requirements, further reducing monthly costs.",
      },
    ],
    relatedCalculators: ["loan-calculator", "compound-interest-calculator"],
    content: CALCULATOR_CONTENT["mortgage-calculator"],
  },
  "compound-interest-calculator": {
    id: "compound-interest-calculator",
    name: "Compound Interest Calculator",
    slug: "compound-interest-calculator",
    category: "finance",
    description:
      "Calculate compound interest on investments and savings. See how your money grows over time with different compounding frequencies.",
    keywords: [
      "compound interest calculator",
      "investment calculator",
      "savings calculator",
      "calculate compound interest",
      "interest calculator",
      "compound interest formula",
      "investment growth calculator",
      "savings growth calculator",
      "compound interest calculator monthly",
      "compound interest calculator with regular deposits",
      "how compound interest works",
      "compound interest calculator daily",
      "future value calculator",
      "compound savings calculator",
      "free compound interest calculator",
    ],
    metaDescription:
      "Free compound interest calculator: investment growth and savings over time. See how your money grows with different compounding frequencies. Add regular contributions. No sign-up.",
    faqs: [
      {
        question: "What is compound interest?",
        answer:
          "Compound interest is interest calculated on the initial principal and also on the accumulated interest from previous periods. It allows your investment to grow exponentially over time. For example, $1,000 invested at 5% annual interest becomes $1,050 after one year, then $1,102.50 after two years. This compounding effect accelerates wealth growth significantly over long periods.",
      },
      {
        question: "How often should interest compound?",
        answer:
          "Interest can compound annually, semi-annually, quarterly, monthly, or daily. More frequent compounding results in higher returns, though the difference becomes smaller as frequency increases. For instance, monthly compounding typically yields slightly more than annual compounding. Most savings accounts compound daily, while investments may compound monthly or quarterly depending on the product type.",
      },
      {
        question: "What is the formula for compound interest?",
        answer:
          "The formula is A = P(1 + r/n)^(nt), where A is the final amount, P is principal, r is annual interest rate, n is compounding frequency, and t is time in years. For example, $10,000 at 5% annual interest compounded monthly for 10 years: A = 10000(1 + 0.05/12)^(12×10) = $16,470. This shows how principal, rate, frequency, and time affect final value.",
      },
    ],
    relatedCalculators: ["mortgage-calculator", "loan-calculator"],
    content: CALCULATOR_CONTENT["compound-interest-calculator"],
  },
  "loan-calculator": {
    id: "loan-calculator",
    name: "Loan Calculator",
    slug: "loan-calculator",
    category: "finance",
    description:
      "Calculate loan payments, total interest, and amortization schedule for personal loans, auto loans, and student loans.",
    keywords: [
      "loan calculator",
      "personal loan calculator",
      "auto loan calculator",
      "student loan calculator",
      "calculate loan payment",
      "loan payment calculator",
      "loan amortization calculator",
      "loan interest calculator",
      "car loan calculator",
      "monthly loan payment calculator",
      "loan payoff calculator",
      "simple loan calculator",
      "free loan calculator",
      "loan calculator with amortization schedule",
    ],
    metaDescription:
      "Free loan calculator: monthly payments, total interest, and amortization for personal, auto, and student loans. Compare terms and rates. Plan your payments. No sign-up.",
    faqs: [
      {
        question: "How do I calculate loan payments?",
        answer:
          "Loan payments are calculated using the same formula as mortgages: M = P[r(1+r)^n]/[(1+r)^n-1], where P is loan amount, r is monthly interest rate, and n is number of payments. For example, a $20,000 loan at 6% annual interest for 5 years results in monthly payments of approximately $387. This ensures the loan is fully paid off by term end.",
      },
      {
        question: "What is the difference between secured and unsecured loans?",
        answer:
          "Secured loans (like auto loans) are backed by collateral, typically offering lower interest rates. Unsecured loans (like personal loans) don't require collateral but may have higher rates. Secured loans use assets like cars or homes as security, reducing lender risk. Unsecured loans rely on creditworthiness alone, making them riskier for lenders and often more expensive for borrowers.",
      },
      {
        question: "How does loan term affect payments?",
        answer:
          "Longer loan terms result in lower monthly payments but higher total interest paid. Shorter terms have higher monthly payments but lower total interest. For example, a $20,000 loan at 6% interest costs $387/month for 5 years (total interest: $3,220) versus $333/month for 6 years (total interest: $3,976). Choose based on your monthly budget and long-term financial goals.",
      },
    ],
    relatedCalculators: ["mortgage-calculator", "compound-interest-calculator"],
    content: CALCULATOR_CONTENT["loan-calculator"],
  },
  "tax-calculator": {
    id: "tax-calculator",
    name: "Tax Calculator",
    slug: "tax-calculator",
    category: "finance",
    description:
      "Calculate your income tax, tax brackets, and effective tax rate. Estimate your tax liability for the current tax year.",
    keywords: [
      "tax calculator",
      "income tax calculator",
      "tax bracket calculator",
      "calculate taxes",
      "tax estimator",
      "federal tax calculator",
      "tax liability calculator",
      "income tax estimator",
      "2026 tax calculator",
      "tax refund calculator",
      "paycheck tax calculator",
      "self employment tax calculator",
      "free tax calculator",
      "tax return calculator",
    ],
    metaDescription:
      "Free 2026 tax calculator. Calculate income tax, tax brackets, and effective rate. No sign-up, instant results. Estimate liability and plan your tax year.",
    faqs: [
      {
        question: "How is income tax calculated?",
        answer:
          "Income tax is calculated using progressive tax brackets. Each portion of income is taxed at the corresponding bracket rate, with higher income taxed at higher rates. For 2026, the federal tax brackets range from 10% to 37%. For example, a single filer earning $50,000 (after the $16,100 standard deduction, taxable income $33,900) pays 10% on the first $12,400, 12% on income from $12,401 to $33,900, for a total federal tax of about $2,020.",
      },
      {
        question: "What is the difference between marginal and effective tax rate?",
        answer:
          "Marginal tax rate is the rate on your last dollar of income. Effective tax rate is your total tax divided by total income, representing your average tax rate. For example, if you're in the 22% tax bracket (marginal rate), your effective rate might be 15% after deductions and credits. The effective rate is always lower than the marginal rate.",
      },
      {
        question: "What deductions can reduce my taxable income?",
        answer:
          "Common deductions include standard deduction, itemized deductions (mortgage interest, charitable contributions), retirement contributions, and health savings accounts. For 2026, the standard deduction is $16,100 for single filers and $32,200 for married couples filing jointly. Itemized deductions may be more beneficial if they exceed the standard deduction, reducing your taxable income and overall tax liability.",
      },
    ],
    relatedCalculators: ["salary-calculator", "mortgage-calculator"],
    content: CALCULATOR_CONTENT["tax-calculator"],
  },
  "salary-calculator": {
    id: "salary-calculator",
    name: "Salary Calculator",
    slug: "salary-calculator",
    category: "finance",
    description:
      "Calculate your take-home pay, net salary, and tax deductions. Convert between hourly, monthly, and annual salary.",
    keywords: [
      "salary calculator",
      "take home pay calculator",
      "net salary calculator",
      "salary converter",
      "calculate salary",
      "hourly to salary calculator",
      "salary after tax calculator",
      "gross to net salary calculator",
      "paycheck calculator",
      "annual salary calculator",
      "hourly wage calculator",
      "salary to hourly calculator",
      "free salary calculator",
      "monthly salary calculator",
      "free online salary calculator 2026",
    ],
    metaDescription:
      "Free 2026 salary calculator. Calculate take-home pay, net salary, and tax deductions online. No sign-up. Hourly, monthly, and annual. Instant results.",
    faqs: [
      {
        question: "How do I calculate take-home pay?",
        answer:
          "Take-home pay is gross salary minus federal tax, state tax, Social Security, Medicare, and other deductions like health insurance and retirement contributions. For example, if your gross salary is $60,000, you might pay $8,000 in federal taxes, $3,000 in state taxes, $3,720 in Social Security, $870 in Medicare, and $2,000 in other deductions, leaving approximately $42,410 in take-home pay annually.",
      },
      {
        question: "What is the difference between gross and net salary?",
        answer:
          "Gross salary is your total earnings before deductions. Net salary (take-home pay) is your earnings after all taxes and deductions have been subtracted. For example, if your gross salary is $50,000, your net salary might be $38,000 after taxes and deductions. Understanding this difference helps you budget effectively and negotiate salaries based on take-home pay rather than gross income.",
      },
      {
        question: "How do I convert hourly wage to annual salary?",
        answer:
          "Multiply hourly wage by hours worked per week, then by 52 weeks. For example, $20/hour × 40 hours/week × 52 weeks = $41,600 annually. For part-time work, adjust the hours accordingly. If you work 30 hours per week at $20/hour, your annual salary would be $20 × 30 × 52 = $31,200. This helps compare job offers and plan budgets.",
      },
    ],
    relatedCalculators: ["tax-calculator", "percentage-calculator"],
    content: CALCULATOR_CONTENT["salary-calculator"],
  },
  "body-fat-calculator": {
    id: "body-fat-calculator",
    name: "Body Fat Calculator",
    slug: "body-fat-calculator",
    category: "health",
    description:
      "Calculate your body fat percentage using the US Navy method. Get accurate body fat estimates based on your measurements and understand your body composition.",
    keywords: [
      "body fat calculator",
      "body fat percentage",
      "body fat calculator navy",
      "calculate body fat",
      "body composition calculator",
      "US Navy body fat calculator",
      "body fat percentage calculator",
      "lean body mass calculator",
      "body fat calculator online free",
      "body fat percentage calculator navy",
      "body composition calculator free",
      "body fat calculator accurate",
      "lean body mass calculator online",
      "US Navy body fat calculator free",
    ],
    metaDescription:
      "Free body fat calculator using the US Navy method. Calculate body fat percentage from measurements. Understand body composition. Metric or imperial. No sign-up.",
    faqs: [
      {
        question: "How is body fat percentage calculated?",
        answer:
          "Body fat percentage is calculated using the US Navy method, which uses measurements of height, neck, waist (and hip for women) along with age and gender to estimate body fat percentage. This method provides a reliable estimate without requiring specialized equipment.",
      },
      {
        question: "What is a healthy body fat percentage?",
        answer:
          "For men, a healthy body fat percentage is typically 10-20%, with 6-13% considered athletic and 2-5% essential. For women, healthy ranges are 18-28%, with 14-20% considered athletic and 10-13% essential. These ranges vary based on age and individual factors. Generally, younger adults can maintain lower body fat percentages, while older adults may have slightly higher healthy ranges.",
      },
      {
        question: "Is the Navy body fat calculator accurate?",
        answer:
          "The US Navy body fat calculator provides a good estimate (within 3-4% accuracy) for most people. However, accuracy can vary based on body type, age, and fitness level. For the most accurate measurement, consider DEXA scan or hydrostatic weighing. The Navy method is convenient and free, making it a practical choice for regular tracking, though professional methods offer higher precision.",
      },
      {
        question: "How do I measure my neck and waist for the calculator?",
        answer:
          "Measure your neck at the narrowest point (usually just below the larynx). Measure your waist at the navel level for men, or at the narrowest point for women. For women, also measure hips at the widest point. Take measurements in the morning before eating for best accuracy.",
      },
    ],
    relatedCalculators: ["bmi-calculator", "calorie-calculator"],
    content: CALCULATOR_CONTENT["body-fat-calculator"],
  },
  "calorie-calculator": {
    id: "calorie-calculator",
    name: "Calorie Calculator",
    slug: "calorie-calculator",
    category: "health",
    description:
      "Calculate your daily calorie needs based on your age, gender, weight, height, and activity level. Understand your BMR, TDEE, and calorie requirements for weight loss or gain.",
    keywords: [
      "calorie calculator",
      "daily calorie calculator",
      "calorie needs calculator",
      "TDEE calculator",
      "BMR calculator",
      "calories per day",
      "daily calorie needs",
      "calorie intake calculator",
      "metabolic rate calculator",
      "calorie calculator online free",
      "TDEE calculator online",
      "BMR calculator free",
      "calorie needs calculator online",
      "calorie intake calculator online",
      "daily calorie calculator free",
    ],
    metaDescription:
      "Free calorie calculator: daily calorie needs, BMR, and TDEE. How many calories to maintain, lose, or gain weight. Activity level and goals. No sign-up. Instant results.",
    faqs: [
      {
        question: "How do I calculate my daily calorie needs?",
        answer:
          "Daily calorie needs are calculated using your Basal Metabolic Rate (BMR) multiplied by an activity factor. BMR is the calories your body burns at rest, and the activity factor accounts for your daily physical activity level. Our calculator uses the Mifflin-St Jeor equation, which is considered the most accurate method.",
      },
      {
        question: "What is the difference between BMR and TDEE?",
        answer:
          "BMR (Basal Metabolic Rate) is the number of calories your body burns at complete rest, just to maintain basic functions like breathing and circulation. TDEE (Total Daily Energy Expenditure) is your BMR plus the calories burned through daily activities and exercise. TDEE represents your total daily calorie needs.",
      },
      {
        question: "How many calories should I eat to lose weight?",
        answer:
          "To lose weight, you need to create a calorie deficit by eating fewer calories than your TDEE. A safe and sustainable rate is typically 500-750 calories below your TDEE, which results in about 1-1.5 pounds of weight loss per week. However, it's important not to go below your BMR, as this can slow your metabolism.",
      },
      {
        question: "How accurate is the calorie calculator?",
        answer:
          "The calorie calculator provides a good estimate based on standard formulas, but individual results may vary. Factors like muscle mass, genetics, medical conditions, and metabolism can affect actual calorie needs. Use the calculator as a starting point and adjust based on your results and how your body responds.",
      },
      {
        question: "Should I track calories for weight management?",
        answer:
          "Calorie tracking can be helpful for understanding your eating patterns and creating awareness, but it's not necessary for everyone. Some people find it empowering, while others find it stressful. The most important thing is finding a sustainable approach that works for you, whether that includes tracking or focuses on mindful eating and portion control.",
      },
    ],
    relatedCalculators: ["bmi-calculator", "body-fat-calculator"],
    content: CALCULATOR_CONTENT["calorie-calculator"],
  },
  "investment-calculator": {
    id: "investment-calculator",
    name: "Investment Calculator",
    slug: "investment-calculator",
    category: "finance",
    description:
      "Calculate investment returns, future value, and growth potential. Plan your investment strategy with our comprehensive investment calculator.",
    keywords: [
      "investment calculator",
      "investment return calculator",
      "investment growth calculator",
      "future value calculator",
      "investment planning",
      "calculate investment returns",
      "investment portfolio calculator",
      "ROI calculator",
      "investment compound calculator",
    ],
    metaDescription:
      "Free investment calculator: returns, future value, and growth. Initial and recurring investments. Plan your strategy and see how your money grows. No sign-up.",
    faqs: [
      {
        question: "How do I calculate investment returns?",
        answer:
          "Investment returns are calculated using the compound interest formula: A = P(1 + r/n)^(nt), where A is the future value, P is the principal investment, r is the annual interest rate, n is compounding frequency, and t is time in years. Our calculator handles all these calculations automatically based on your inputs.",
      },
      {
        question: "What is the difference between simple and compound interest?",
        answer:
          "Simple interest is calculated only on the principal amount, while compound interest is calculated on the principal plus accumulated interest. Compound interest allows your investment to grow exponentially over time, as you earn returns on your returns. Most investments use compound interest, which is why starting early and staying invested is so powerful.",
      },
      {
        question: "How often should I invest?",
        answer:
          "Regular investing, known as dollar-cost averaging, can help reduce the impact of market volatility. Many investors contribute monthly or with each paycheck. The key is consistency—regular investments, even small amounts, can grow significantly over time due to compound interest. Choose a frequency that fits your budget and stick with it.",
      },
      {
        question: "What rate of return should I expect from investments?",
        answer:
          "Expected returns vary by investment type. Historically, stocks have averaged 7-10% annual returns over long periods, bonds 3-5%, and savings accounts 1-3%. However, past performance doesn't guarantee future results. Diversification across asset classes can help balance risk and return. Our calculator lets you test different return scenarios.",
      },
      {
        question: "How does inflation affect investment returns?",
        answer:
          "Inflation reduces purchasing power over time, so it's important to consider real returns (returns after inflation) rather than just nominal returns. If your investment returns 7% annually but inflation is 3%, your real return is approximately 4%. Our calculator can help you understand how inflation impacts your investment goals over time.",
      },
    ],
    relatedCalculators: ["compound-interest-calculator", "retirement-calculator", "savings-calculator"],
    content: CALCULATOR_CONTENT["investment-calculator"],
  },
  "car-loan-calculator": {
    id: "car-loan-calculator",
    name: "Car Loan Calculator",
    slug: "car-loan-calculator",
    category: "finance",
    description:
      "Calculate your monthly car loan payment, total interest, and amortization schedule. Compare different loan terms and interest rates to find the best auto loan.",
    keywords: [
      "car loan calculator",
      "auto loan calculator",
      "car payment calculator",
      "vehicle loan calculator",
      "calculate car loan",
      "auto financing calculator",
      "car loan interest calculator",
      "auto loan payment estimator",
      "car financing calculator",
      "car loan payment calculator",
      "auto loan payment calculator",
      "car financing calculator online",
      "free car loan calculator",
      "car loan amortization calculator",
      "vehicle financing calculator",
    ],
    metaDescription:
      "Free car loan calculator: monthly payments, total interest, and amortization. Compare loan terms and rates. Down payment and trade-in. Find the best auto loan deal. No sign-up.",
    faqs: [
      {
        question: "How is a car loan payment calculated?",
        answer:
          "Car loan payments are calculated using the same amortization formula as other loans: M = P[r(1+r)^n]/[(1+r)^n-1], where M is monthly payment, P is loan amount, r is monthly interest rate, and n is number of payments. The calculator automatically handles this calculation based on your loan amount, interest rate, and term.",
      },
      {
        question: "What is a good interest rate for a car loan?",
        answer:
          "Interest rates vary based on credit score, loan term, and market conditions. As of 2026, good rates are typically 3-5% for excellent credit (720+), 5-8% for good credit (660-719), and 8-15% for fair credit (620-659). Rates above 15% are generally considered high. Shop around and compare offers from multiple lenders to find the best rate.",
      },
      {
        question: "How long should my car loan term be?",
        answer:
          "Car loan terms typically range from 24 to 84 months (2-7 years). Shorter terms (36-48 months) have higher monthly payments but lower total interest and faster equity building. Longer terms (60-84 months) have lower monthly payments but higher total interest. Consider your budget, but avoid terms longer than the car's useful life to prevent being underwater on the loan.",
      },
      {
        question: "Should I make a down payment on a car loan?",
        answer:
          "A down payment reduces your loan amount, monthly payment, and total interest. It also helps you avoid being underwater (owing more than the car is worth). Aim for at least 10-20% down payment. A larger down payment can also help you qualify for better interest rates and reduce the need for gap insurance.",
      },
      {
        question: "What is the difference between APR and interest rate?",
        answer:
          "The interest rate is the cost of borrowing money, while APR (Annual Percentage Rate) includes the interest rate plus fees and other loan costs. APR provides a more accurate picture of the true cost of the loan. Always compare APRs when shopping for car loans, as two loans with the same interest rate can have different APRs due to fees.",
      },
    ],
    relatedCalculators: ["loan-calculator", "mortgage-calculator"],
    content: CALCULATOR_CONTENT["car-loan-calculator"],
  },
  "student-loan-calculator": {
    id: "student-loan-calculator",
    name: "Student Loan Calculator",
    slug: "student-loan-calculator",
    category: "finance",
    description:
      "Calculate student loan payments, total interest, and repayment strategies. Compare different repayment plans and see how extra payments can save money.",
    keywords: [
      "student loan calculator",
      "student loans monthly payment calculator",
      "student loan payment calculator",
      "student debt calculator",
      "calculate student loan payment",
      "student loan repayment calculator",
      "federal student loan calculator",
      "student loan interest calculator",
      "college loan calculator",
      "student loan payoff calculator",
      "student loan calculator 2026",
      "federal student loan payment calculator",
      "student loan repayment calculator online",
      "free student loan calculator",
      "college loan payment calculator",
      "student loan calculator online",
    ],
    metaDescription:
      "Free student loan calculator: monthly payments, total interest, and repayment strategies. Compare repayment plans. Student loans monthly payment calculator. No sign-up.",
    faqs: [
      {
        question: "How are student loan payments calculated?",
        answer:
          "Student loan payments are calculated using the standard amortization formula, similar to other loans. For federal loans, payments are based on your loan balance, interest rate, and repayment plan. Standard repayment plans use a 10-year term, while income-driven plans base payments on your income and family size. Our calculator helps you estimate payments for different scenarios.",
      },
      {
        question: "What is the difference between federal and private student loans?",
        answer:
          "Federal student loans are issued by the government and offer benefits like income-driven repayment plans, loan forgiveness programs, and fixed interest rates. Private student loans are issued by banks and credit unions, typically have variable rates, and don't offer the same protections. Federal loans generally have lower interest rates and more flexible repayment options.",
      },
      {
        question: "What are income-driven repayment plans?",
        answer:
          "Income-driven repayment plans base your monthly payment on your income and family size, typically 10-20% of discretionary income. These plans can lower monthly payments and offer loan forgiveness after 20-25 years of payments. Examples include Income-Based Repayment (IBR), Pay As You Earn (PAYE), and Revised Pay As You Earn (REPAYE). These plans are only available for federal loans.",
      },
      {
        question: "Should I pay off student loans early?",
        answer:
          "Whether to pay off student loans early depends on your interest rate, other financial goals, and available resources. If your student loan interest rate is high (above 6-7%), paying it off early can save significant money. However, if you have higher-interest debt or can earn more by investing, those might be better priorities. Consider your overall financial situation and goals.",
      },
      {
        question: "How does student loan interest work?",
        answer:
          "Student loan interest accrues daily based on your outstanding balance and interest rate. For federal loans, interest is typically fixed, while private loans may have variable rates. Unpaid interest can capitalize (be added to the principal), increasing your total balance. Making payments while in school or during grace periods can prevent interest capitalization and reduce total cost.",
      },
    ],
    relatedCalculators: ["loan-calculator", "budget-calculator"],
    content: CALCULATOR_CONTENT["student-loan-calculator"],
  },
  "credit-card-payoff-calculator": {
    id: "credit-card-payoff-calculator",
    name: "Credit Card Payoff Calculator",
    slug: "credit-card-payoff-calculator",
    category: "finance",
    description:
      "Calculate how long it will take to pay off your credit card debt and how much interest you'll pay. See how extra payments can accelerate payoff and save money.",
    keywords: [
      "credit card payoff calculator",
      "credit card debt calculator",
      "pay off credit card calculator",
      "credit card interest calculator",
      "debt payoff calculator",
      "credit card payment calculator",
      "credit card debt payoff",
      "minimum payment calculator",
      "credit card balance calculator",
      "credit card debt payoff calculator",
      "pay off credit card debt calculator",
      "credit card balance payoff calculator",
      "free credit card payoff calculator",
      "debt snowball calculator",
      "credit card minimum payment calculator",
    ],
    metaDescription:
      "Free credit card payoff calculator: payoff time and total interest. See how extra payments accelerate debt payoff and save money. Minimum payment comparison. No sign-up.",
    faqs: [
      {
        question: "How long will it take to pay off my credit card?",
        answer:
          "Payoff time depends on your balance, interest rate, and monthly payment. If you only make minimum payments, it can take decades and cost thousands in interest. Our calculator shows how long it will take with your current payment and how extra payments can accelerate payoff. For example, paying just $50 more per month can save years and thousands in interest.",
      },
      {
        question: "How much interest will I pay on my credit card debt?",
        answer:
          "Interest depends on your balance, APR, and how long you take to pay it off. Credit cards typically have high interest rates (15-25% or more), so interest can add up quickly. Our calculator shows your total interest cost and how extra payments can reduce it. Making only minimum payments can result in paying 2-3 times your original balance in interest.",
      },
      {
        question: "What is the best strategy to pay off credit card debt?",
        answer:
          "The debt avalanche method (paying highest interest rate cards first) saves the most money, while the debt snowball method (paying smallest balances first) provides psychological wins. Both work—choose based on what motivates you. Also, make more than minimum payments, avoid new charges, and consider balance transfers or consolidation if you can get a lower rate.",
      },
      {
        question: "Should I pay off credit cards or save money first?",
        answer:
          "Generally, pay off high-interest credit card debt first (rates above 6-8%), as the interest cost typically exceeds potential investment returns. However, maintain a small emergency fund ($1,000) first, then focus on debt payoff. Once high-interest debt is paid off, you can increase savings and investments. The exact strategy depends on your interest rates and financial situation.",
      },
      {
        question: "How does making extra payments help pay off credit cards faster?",
        answer:
          "Extra payments directly reduce your principal balance, which reduces the amount of interest that accrues each month. This creates a compounding effect where each extra payment saves interest on future payments. Even small extra payments can significantly reduce payoff time and total interest. Our calculator shows exactly how much time and money you can save with different extra payment amounts.",
      },
    ],
    relatedCalculators: ["loan-calculator", "budget-calculator", "debt-to-income-calculator"],
    content: CALCULATOR_CONTENT["credit-card-payoff-calculator"],
  },
  "retirement-calculator": {
    id: "retirement-calculator",
    name: "Retirement Calculator",
    slug: "retirement-calculator",
    category: "finance",
    description:
      "Calculate how much you need to save for retirement and see if you're on track. Plan your retirement savings strategy and estimate your retirement income needs.",
    keywords: [
      "retirement calculator",
      "retirement savings calculator",
      "retirement planning calculator",
      "how much to save for retirement",
      "retirement income calculator",
      "401k calculator",
      "retirement planning",
      "retirement savings goal",
      "retirement nest egg calculator",
      "retirement calculator 2026",
      "retirement savings goal calculator",
      "401k retirement calculator",
      "free retirement calculator",
      "retirement planning calculator online",
      "how much do I need to retire calculator",
    ],
    metaDescription:
      "Free retirement calculator: how much to save for retirement, estimate income, and see if you're on track. Age, savings, and contributions. Meet your goals. No sign-up.",
    faqs: [
      {
        question: "How much do I need to save for retirement?",
        answer:
          "A common rule of thumb is to save 25 times your annual expenses, or enough to replace 70-80% of your pre-retirement income. However, the exact amount depends on your desired retirement lifestyle, expected expenses, other income sources (Social Security, pensions), and when you plan to retire. Our calculator helps you estimate your specific retirement needs based on your situation.",
      },
      {
        question: "What is the 4% rule for retirement?",
        answer:
          "The 4% rule suggests you can safely withdraw 4% of your retirement savings in the first year, then adjust for inflation each year. This rule is based on historical market data and assumes a 30-year retirement. For example, with $1 million saved, you could withdraw $40,000 in year one. However, this is a guideline—your actual withdrawal rate should consider your situation and market conditions.",
      },
      {
        question: "When should I start saving for retirement?",
        answer:
          "The best time to start saving for retirement is as early as possible, ideally in your 20s. Starting early allows compound interest to work in your favor—someone who starts at 25 will need to save much less than someone who starts at 45 to reach the same goal. However, it's never too late to start. Even beginning in your 40s or 50s can improve your retirement security.",
      },
      {
        question: "How much should I contribute to my 401(k)?",
        answer:
          "At minimum, contribute enough to get your employer's full match (free money). Ideally, aim to contribute 15-20% of your income, including employer match. If that's not possible, start with what you can afford and increase contributions gradually. The 2026 contribution limit is $23,000 for those under 50, and $30,500 for those 50 and older (catch-up contributions).",
      },
      {
        question: "What is a good retirement savings by age?",
        answer:
          "General guidelines suggest having 1x your annual salary saved by age 30, 3x by 40, 6x by 50, and 8x by 60. However, these are rough guidelines—your actual needs depend on your income, expenses, and retirement goals. The most important thing is to start saving early and consistently, regardless of where you are now.",
      },
    ],
    relatedCalculators: ["investment-calculator", "savings-calculator", "compound-interest-calculator"],
    content: CALCULATOR_CONTENT["retirement-calculator"],
  },
  "savings-calculator": {
    id: "savings-calculator",
    name: "Savings Calculator",
    slug: "savings-calculator",
    category: "finance",
    description:
      "Calculate how much your savings will grow over time with compound interest. Plan your savings goals and see how regular contributions can accelerate growth.",
    keywords: [
      "savings calculator",
      "savings growth calculator",
      "compound interest savings",
      "savings goal calculator",
      "calculate savings",
      "savings account calculator",
      "savings interest calculator",
      "emergency fund calculator",
      "savings plan calculator",
      "savings calculator with interest",
      "compound savings calculator",
      "savings goal calculator online",
      "free savings calculator",
      "high yield savings calculator",
      "emergency fund calculator online",
    ],
    metaDescription:
      "Free savings calculator: how much your savings grow with compound interest. Plan goals and see how regular contributions help. Interest rate and term. No sign-up.",
    faqs: [
      {
        question: "How do I calculate savings growth?",
        answer:
          "Savings growth is calculated using compound interest: A = P(1 + r/n)^(nt), where A is future value, P is principal, r is interest rate, n is compounding frequency, and t is time. Our calculator handles this automatically, showing how your savings grow with different interest rates, time periods, and contribution amounts.",
      },
      {
        question: "How much should I save each month?",
        answer:
          "A common guideline is to save 20% of your income, but the exact amount depends on your goals, income, and expenses. Start with what you can afford and increase gradually. For emergency funds, aim for 3-6 months of expenses. For retirement, aim for 15-20% of income including employer matches. Our calculator shows how different contributions affect your savings goals.",
      },
      {
        question: "What is a good interest rate for savings?",
        answer:
          "Interest rates vary by account type and market conditions. High-yield savings accounts typically offer 4-5% APY (as of 2026), while traditional savings accounts may offer 0.5-1%. Money market accounts and CDs may offer slightly higher rates. Compare rates from multiple banks and credit unions to find the best option. Remember that higher rates often come with requirements like minimum balances.",
      },
      {
        question: "How does compound interest work with savings?",
        answer:
          "Compound interest means you earn interest on both your principal and previously earned interest. The more frequently interest compounds (daily vs. monthly), the more you earn. For example, $10,000 at 5% APY compounded monthly grows to $16,470 in 10 years, while the same amount at 5% simple interest grows to only $15,000. Regular contributions further accelerate growth through compound interest.",
      },
      {
        question: "Should I save or pay off debt first?",
        answer:
          "The answer depends on interest rates. Generally, pay off high-interest debt (above 6-8%) first, as the interest cost exceeds potential savings returns. However, maintain a small emergency fund ($1,000) first, then focus on debt. Once high-interest debt is paid off, you can increase savings. For low-interest debt (below 4-5%), you might prioritize savings and investments while making minimum debt payments.",
      },
    ],
    relatedCalculators: ["compound-interest-calculator", "investment-calculator", "retirement-calculator"],
    content: CALCULATOR_CONTENT["savings-calculator"],
  },
  "budget-calculator": {
    id: "budget-calculator",
    name: "Budget Calculator",
    slug: "budget-calculator",
    category: "finance",
    description:
      "Create a comprehensive budget to track income and expenses. Plan your finances, identify savings opportunities, and achieve your financial goals.",
    keywords: [
      "budget calculator",
      "budget planner",
      "expense calculator",
      "monthly budget calculator",
      "create budget",
      "budget planning",
      "personal budget calculator",
      "household budget calculator",
      "budget tracker",
      "monthly budget calculator online",
      "free budget calculator",
      "50 30 20 budget calculator",
      "household budget calculator online",
      "personal budget planner calculator",
      "budget calculator app",
    ],
    metaDescription:
      "Free budget calculator: create a budget, track income and expenses, identify savings. Achieve your financial goals. Income, fixed and variable expenses. No sign-up.",
    faqs: [
      {
        question: "How do I create a budget?",
        answer:
          "Creating a budget involves listing all income sources and all expenses, then ensuring expenses don't exceed income. Start by tracking your spending for a month to understand where money goes, then categorize expenses (housing, food, transportation, etc.). Allocate income to each category, prioritizing essentials and savings. Our calculator helps you organize this process and see where adjustments are needed.",
      },
      {
        question: "What is the 50/30/20 budget rule?",
        answer:
          "The 50/30/20 rule suggests allocating 50% of income to needs (housing, utilities, groceries, minimum debt payments), 30% to wants (dining out, entertainment, hobbies), and 20% to savings and debt payoff. This is a guideline—adjust based on your situation. High-cost areas may require more than 50% for needs, while those with low expenses might allocate more to savings.",
      },
      {
        question: "How much should I budget for each category?",
        answer:
          "Budget percentages vary by individual circumstances, but general guidelines include: Housing 25-35%, Food 10-15%, Transportation 10-15%, Savings 15-20%, Debt payments 5-10%, Insurance 5-10%, Personal/Entertainment 5-10%, Healthcare 5-10%. These are rough guidelines—adjust based on your priorities, location, and financial goals. Our calculator helps you see how your actual spending compares to these guidelines.",
      },
      {
        question: "What's the difference between a budget and tracking expenses?",
        answer:
          "A budget is a plan for how you'll spend money, while expense tracking records how you actually spent money. Both are important: the budget sets goals and limits, while tracking shows if you're staying within those limits. Tracking helps identify spending patterns and areas where you're over budget, allowing you to adjust your budget or spending habits.",
      },
      {
        question: "How often should I review my budget?",
        answer:
          "Review your budget monthly to compare planned vs. actual spending and make adjustments. Also review when major life changes occur (new job, move, family changes) or when you're consistently over or under budget in certain categories. Regular reviews help you stay on track and adapt to changing circumstances.",
      },
    ],
    relatedCalculators: ["savings-calculator", "salary-calculator", "debt-to-income-calculator"],
    content: CALCULATOR_CONTENT["budget-calculator"],
  },
  "tip-calculator": {
    id: "tip-calculator",
    name: "Tip Calculator",
    slug: "tip-calculator",
    category: "finance",
    description:
      "Calculate tips quickly and accurately for restaurants, services, and more. Split bills, calculate different tip percentages, and never overpay or underpay again.",
    keywords: [
      "tip calculator",
      "restaurant tip calculator",
      "gratuity calculator",
      "calculate tip",
      "tip percentage calculator",
      "bill splitter",
      "tip calculator app",
      "gratuity calculator online",
      "restaurant bill calculator",
      "tip calculator online free",
      "restaurant tip calculator app",
      "gratuity calculator free",
      "tip percentage calculator online",
      "bill splitter calculator",
      "tip calculator 20 percent",
    ],
    metaDescription:
      "Free tip calculator: calculate tips quickly. Split bills, 15% 18% 20% or custom. Total amount to pay. Restaurant and service tips. No sign-up. Instant results.",
    faqs: [
      {
        question: "How do I calculate a tip?",
        answer:
          "To calculate a tip, multiply the bill amount by the tip percentage (as a decimal). For example, a $50 bill with a 20% tip: $50 × 0.20 = $10 tip. The total would be $60. Common tip percentages are 15% (standard), 18% (good service), and 20% (excellent service). Our calculator does this automatically and shows the tip amount and total.",
      },
      {
        question: "What is a good tip percentage?",
        answer:
          "Standard tip percentages vary by service type. For restaurants: 15% is standard, 18% for good service, 20% for excellent service, and 10-15% for poor service. For other services: 15-20% for food delivery, 10-15% for taxi/ride-share, 15-20% for hair salons, and $1-2 per drink at bars. When in doubt, 18-20% is generally safe for good service.",
      },
      {
        question: "Should I tip on the total before or after tax?",
        answer:
          "The standard practice is to tip on the pre-tax amount (the subtotal before sales tax). However, many people tip on the post-tax total for simplicity, which results in a slightly higher tip. Either approach is acceptable—the difference is usually small. Our calculator can handle both methods.",
      },
      {
        question: "How do I split a bill with tip?",
        answer:
          "To split a bill with tip, first calculate the total including tip, then divide by the number of people. For example, a $100 bill with 20% tip ($20) = $120 total. Split 4 ways = $30 per person. Our calculator can split bills evenly or by custom amounts, making it easy to divide costs fairly among friends or colleagues.",
      },
      {
        question: "Do I need to tip if service charge is included?",
        answer:
          "If a service charge or gratuity is already included in the bill (common for large parties), an additional tip is typically not required, though you can add more for exceptional service. Check your bill carefully—some restaurants add automatic gratuity for parties of 6 or more. If service charge is included, it's usually clearly marked on the bill.",
      },
    ],
    relatedCalculators: ["percentage-calculator", "discount-calculator"],
    content: CALCULATOR_CONTENT["tip-calculator"],
  },
  "discount-calculator": {
    id: "discount-calculator",
    name: "Discount Calculator",
    slug: "discount-calculator",
    category: "finance",
    description:
      "Calculate discounts, sale prices, and savings quickly. Find the final price after discounts, calculate percentage discounts, and compare prices to make smart shopping decisions.",
    keywords: [
      "discount calculator",
      "sale price calculator",
      "percent off calculator",
      "calculate discount",
      "price after discount",
      "savings calculator",
      "discount percentage calculator",
      "markdown calculator",
      "price reduction calculator",
      "discount calculator online free",
      "percent off calculator online",
      "sale price calculator online",
      "discount percentage calculator free",
      "price after discount calculator",
      "shopping discount calculator",
    ],
    metaDescription:
      "Free discount calculator: sale prices, discounts, and savings. Final price after percent off. Make smart shopping decisions. Original price and discount. No sign-up.",
    faqs: [
      {
        question: "How do I calculate a discount?",
        answer:
          "To calculate a discount, multiply the original price by the discount percentage (as a decimal), then subtract from the original price. For example, a $100 item with a 25% discount: Discount = $100 × 0.25 = $25. Sale price = $100 - $25 = $75. Our calculator does this automatically, showing both the discount amount and final sale price.",
      },
      {
        question: "How do I calculate the percentage discount?",
        answer:
          "To find the discount percentage, divide the discount amount by the original price and multiply by 100. For example, if an item is $80 (original $100): Discount = $100 - $80 = $20. Percentage = ($20 ÷ $100) × 100 = 20% discount. This helps you compare deals and understand how much you're saving.",
      },
      {
        question: "What's the difference between discount and markup?",
        answer:
          "A discount reduces the price (sale price is lower than original), while a markup increases the price (selling price is higher than cost). For example, a 20% discount on $100 = $80 sale price. A 20% markup on $80 cost = $96 selling price. Discounts benefit buyers, while markups benefit sellers.",
      },
      {
        question: "How do I calculate multiple discounts?",
        answer:
          "When you have multiple discounts (like 20% off, then an additional 10% off), apply them sequentially, not by adding percentages. For a $100 item: First discount (20%) = $80. Second discount (10% of $80) = $8. Final price = $80 - $8 = $72. Adding percentages (20% + 10% = 30%) would incorrectly give $70.",
      },
      {
        question: "Should I buy now or wait for a better discount?",
        answer:
          "This depends on urgency, typical discount patterns, and price history. If you need the item immediately, buy it. If you can wait, research typical sale cycles (many items go on sale seasonally). Use our calculator to understand actual savings—a 50% discount on a $200 item saves $100, while a 30% discount on a $50 item saves only $15.",
      },
    ],
    relatedCalculators: ["percentage-calculator", "tip-calculator"],
    content: CALCULATOR_CONTENT["discount-calculator"],
  },
  "date-calculator": {
    id: "date-calculator",
    name: "Date Calculator",
    slug: "date-calculator",
    category: "dateTime",
    description:
      "Calculate the number of days, weeks, months, and years between two dates. Perfect for planning events, tracking deadlines, and measuring time periods.",
    keywords: [
      "date calculator",
      "days between dates",
      "date difference calculator",
      "calculate days between dates",
      "date range calculator",
      "days calculator",
      "time between dates",
      "date interval calculator",
      "calendar calculator",
      "date calculator online free",
      "days between dates calculator",
      "date difference calculator online",
      "calculate days between dates free",
      "calendar date calculator",
      "date calculator free",
    ],
    metaDescription:
      "Free date calculator to calculate the number of days, weeks, months, and years between two dates. Perfect for planning events, tracking deadlines, and measuring time periods accurately.",
    faqs: [
      {
        question: "How do I calculate the number of days between two dates?",
        answer:
          "To calculate days between dates, subtract the earlier date from the later date. Our date calculator automatically handles leap years, different month lengths, and accounts for the exact number of days, including or excluding the start/end dates. Simply enter your two dates and the calculator will show you the difference in days, weeks, months, and years.",
      },
      {
        question: "Does the date calculator account for leap years?",
        answer:
          "Yes, our date calculator automatically accounts for leap years. Leap years occur every 4 years (with some exceptions for century years), and February has 29 days instead of 28. The calculator correctly handles these variations to give you accurate day counts between any two dates, regardless of leap years.",
      },
      {
        question: "Can I calculate business days or weekdays between dates?",
        answer:
          "Yes, our date calculator can calculate business days (weekdays) between two dates, excluding weekends. This is useful for calculating project timelines, delivery dates, and work schedules. The calculator can show you both total days and business days, helping you plan more accurately for work-related deadlines.",
      },
      {
        question: "How accurate is the date calculator?",
        answer:
          "Our date calculator is highly accurate and accounts for all calendar complexities including leap years, different month lengths (28-31 days), and century year rules. The calculations are based on the Gregorian calendar, which is the standard calendar used worldwide. Results are precise to the day level.",
      },
    ],
    relatedCalculators: ["age-calculator"],
    content: CALCULATOR_CONTENT["date-calculator"],
  },
  "unit-converter": {
    id: "unit-converter",
    name: "Unit Converter",
    slug: "unit-converter",
    category: "math",
    description:
      "Convert between different units of length, weight, temperature, volume, and area. Free online unit converter for everyday conversions and calculations.",
    keywords: [
      "unit converter",
      "unit conversion calculator",
      "convert units",
      "length converter",
      "weight converter",
      "temperature converter",
      "volume converter",
      "area converter",
      "metric converter",
      "imperial converter",
      "unit converter online free",
      "metric converter calculator",
      "imperial to metric converter",
      "unit conversion calculator online",
      "free unit converter",
      "measurement converter calculator",
    ],
    metaDescription:
      "Free unit converter to convert between length, weight, temperature, volume, and area units. Fast, accurate conversions for metric, imperial, and other measurement systems.",
    faqs: [
      {
        question: "How do I convert between different units?",
        answer:
          "To convert between units, select the unit type (length, weight, temperature, etc.), enter the value you want to convert, choose the 'from' unit and 'to' unit, then click convert. Our unit converter automatically calculates the conversion using accurate conversion factors. For example, to convert 10 kilometers to miles, enter 10, select kilometers, select miles, and get 6.214 miles.",
      },
      {
        question: "What units can I convert with the unit converter?",
        answer:
          "Our unit converter supports conversions for length (meters, kilometers, miles, feet, inches, yards), weight (kilograms, grams, pounds, ounces, tons), temperature (Celsius, Fahrenheit, Kelvin), volume (liters, milliliters, gallons, quarts, pints, cups), and area (square meters, square kilometers, square miles, acres, hectares). We cover both metric and imperial systems.",
      },
      {
        question: "How accurate are the unit conversions?",
        answer:
          "Our unit converter uses precise conversion factors based on international standards. Length conversions use exact meter definitions, weight conversions use precise kilogram standards, and temperature conversions use standard formulas. All conversions are accurate to multiple decimal places, suitable for both everyday use and professional applications.",
      },
      {
        question: "Can I convert between metric and imperial units?",
        answer:
          "Yes, our unit converter seamlessly converts between metric and imperial units. You can convert kilometers to miles, kilograms to pounds, Celsius to Fahrenheit, liters to gallons, and more. This is especially useful when working with international measurements or converting recipes, travel distances, or product specifications.",
      },
    ],
    relatedCalculators: ["percentage-calculator", "scientific-calculator"],
    content: CALCULATOR_CONTENT["unit-converter"],
  },
  "pregnancy-calculator": {
    id: "pregnancy-calculator",
    name: "Pregnancy Calculator",
    slug: "pregnancy-calculator",
    category: "health",
    description:
      "Calculate your due date, pregnancy week, and trimester based on your last menstrual period (LMP) or conception date. Track your pregnancy progress with our free pregnancy calculator.",
    keywords: [
      "pregnancy calculator",
      "due date calculator",
      "pregnancy week calculator",
      "calculate due date",
      "pregnancy calculator by LMP",
      "gestational age calculator",
      "pregnancy timeline calculator",
      "baby due date calculator",
      "pregnancy tracker",
      "pregnancy calculator online free",
      "due date calculator by LMP",
      "pregnancy week calculator online",
      "free pregnancy calculator",
      "gestational age calculator online",
      "baby due date calculator free",
    ],
    metaDescription:
      "Free pregnancy calculator to calculate your due date, pregnancy week, and trimester. Track your pregnancy progress based on your last menstrual period or conception date with accurate results.",
    faqs: [
      {
        question: "How do I calculate my due date?",
        answer:
          "To calculate your due date, enter your last menstrual period (LMP) date. The standard calculation adds 280 days (40 weeks) to your LMP date. Our pregnancy calculator uses this method, which is the most common approach used by healthcare providers. You can also calculate based on conception date by adding 266 days (38 weeks).",
      },
      {
        question: "What is the difference between LMP and conception date?",
        answer:
          "LMP (Last Menstrual Period) is the first day of your last period before pregnancy, while conception date is when fertilization actually occurred. Pregnancy is typically calculated from LMP because it's easier to determine and adds about 2 weeks before actual conception. Our pregnancy calculator can work with either date, but LMP is the standard method used by doctors.",
      },
      {
        question: "How accurate is the pregnancy calculator?",
        answer:
          "The pregnancy calculator provides an estimated due date based on standard calculations. However, actual delivery dates can vary. Only about 5% of babies are born exactly on their due date, with most births occurring within 2 weeks before or after. Your healthcare provider will use ultrasound measurements to refine the due date as your pregnancy progresses.",
      },
      {
        question: "What are pregnancy trimesters?",
        answer:
          "Pregnancy is divided into three trimesters, each lasting about 13-14 weeks. The first trimester is weeks 1-13, the second trimester is weeks 14-27, and the third trimester is weeks 28-40+. Our pregnancy calculator shows which trimester you're in based on your current pregnancy week, helping you understand your pregnancy timeline and what to expect during each stage.",
      },
    ],
    relatedCalculators: ["age-calculator", "bmi-calculator"],
    content: CALCULATOR_CONTENT["pregnancy-calculator"],
  },
  "hours-calculator": {
    id: "hours-calculator",
    name: "Hours Calculator",
    slug: "hours-calculator",
    category: "dateTime",
    description:
      "Calculate total work hours, time card entries, and weekly hours. Perfect for tracking work time, calculating pay, and managing schedules.",
    keywords: [
      "hours calculator",
      "time card calculator",
      "work hours calculator",
      "calculate hours worked",
      "time calculator",
      "hours worked calculator",
      "weekly hours calculator",
      "time tracking calculator",
      "work time calculator",
      "hours calculator online free",
      "time card calculator online",
      "hours worked calculator free",
      "overtime hours calculator",
      "weekly hours calculator online",
      "work hours calculator free",
    ],
    metaDescription:
      "Free hours calculator to calculate total work hours, time card entries, and weekly hours. Track work time, calculate pay, and manage schedules with accurate time calculations.",
    faqs: [
      {
        question: "How do I calculate total hours worked?",
        answer:
          "To calculate total hours worked, enter your clock-in and clock-out times for each day. Our hours calculator automatically calculates the difference, accounting for breaks if specified. For example, if you work from 9:00 AM to 5:00 PM with a 1-hour lunch break, you worked 7 hours. The calculator can sum multiple days to show weekly totals.",
      },
      {
        question: "Can the hours calculator handle multiple shifts?",
        answer:
          "Yes, our hours calculator can handle multiple shifts per day. Enter each shift's start and end times, and the calculator will sum them to show your total daily hours. This is useful for split shifts, overtime calculations, or jobs with multiple work periods in a single day.",
      },
      {
        question: "How do I calculate overtime with the hours calculator?",
        answer:
          "To calculate overtime, first determine your total hours worked for the week. In most places, overtime (typically 1.5x pay) starts after 40 hours per week. Our hours calculator shows your total weekly hours, making it easy to see how many regular hours and overtime hours you worked. Some calculators also allow you to enter hourly rates to calculate total pay.",
      },
      {
        question: "Can I use the hours calculator for time card entries?",
        answer:
          "Yes, our hours calculator is perfect for time card entries. Enter your daily clock-in and clock-out times, and the calculator will show your total hours for each day and the week. You can also account for breaks, lunch periods, and different pay rates. This helps ensure accurate time tracking and payroll calculations.",
      },
    ],
    relatedCalculators: ["date-calculator", "salary-calculator"],
    content: CALCULATOR_CONTENT["hours-calculator"],
  },
  "currency-converter": {
    id: "currency-converter",
    name: "Currency Converter",
    slug: "currency-converter",
    category: "finance",
    description:
      "Convert between different currencies with real-time exchange rates. Free currency converter for USD, EUR, GBP, JPY, and 150+ other currencies.",
    keywords: [
      "currency converter",
      "exchange rate calculator",
      "currency calculator",
      "convert currency",
      "money converter",
      "forex calculator",
      "currency exchange calculator",
      "USD to EUR converter",
      "currency rate calculator",
      "currency converter online free",
      "exchange rate calculator online",
      "free currency converter",
      "currency converter real time",
      "money converter online",
      "forex calculator online",
    ],
    metaDescription:
      "Free currency converter with real-time exchange rates. Convert between USD, EUR, GBP, JPY, and 150+ currencies instantly. Accurate, up-to-date currency conversion for travel and business.",
    faqs: [
      {
        question: "How do I convert currency?",
        answer:
          "To convert currency, enter the amount you want to convert, select the 'from' currency (the currency you have), and select the 'to' currency (the currency you want). Our currency converter uses real-time exchange rates to calculate the converted amount instantly. For example, to convert 100 USD to EUR, enter 100, select USD, select EUR, and see the result.",
      },
      {
        question: "Are the exchange rates real-time?",
        answer:
          "Our currency converter uses current exchange rates that are updated regularly. Exchange rates fluctuate throughout the day based on market conditions. For exact real-time rates, especially for large transactions, we recommend checking with your bank or financial institution, as rates can vary slightly between providers.",
      },
      {
        question: "What currencies are supported?",
        answer:
          "Our currency converter supports major world currencies including USD (US Dollar), EUR (Euro), GBP (British Pound), JPY (Japanese Yen), CAD (Canadian Dollar), AUD (Australian Dollar), CHF (Swiss Franc), CNY (Chinese Yuan), INR (Indian Rupee), and 150+ other currencies. You can convert between any supported currencies.",
      },
      {
        question: "How accurate are currency conversions?",
        answer:
          "Currency conversions are based on current market exchange rates and are accurate for general reference. However, actual exchange rates may vary when you exchange money at banks, currency exchange services, or use credit cards abroad, as these services typically add fees or use different rates. For precise amounts, especially for large transactions, check with your financial institution.",
      },
    ],
    relatedCalculators: ["salary-calculator", "budget-calculator"],
    content: CALCULATOR_CONTENT["currency-converter"],
  },
  "inflation-purchasing-power-calculator": {
    id: "inflation-purchasing-power-calculator",
    name: "Inflation & Purchasing Power Calculator",
    slug: "inflation-purchasing-power-calculator",
    category: "finance",
    description:
      "See how inflation affects your money. Convert any dollar amount between years using U.S. BLS CPI-U data. Free inflation calculator and purchasing power calculator.",
    keywords: [
      "inflation calculator",
      "purchasing power calculator",
      "CPI calculator",
      "inflation rate calculator",
      "how much is money worth over time",
      "dollar value over time",
      "inflation adjustment calculator",
      "real value calculator",
      "salary in today's dollars",
      "historical inflation calculator",
      "BLS CPI calculator",
      "cost of living calculator",
      "money value over time",
      "free inflation calculator",
    ],
    metaDescription:
      "Free inflation calculator: convert dollar amounts between years using U.S. BLS CPI-U data. See purchasing power over time. Start and end year. No sign-up, instant results.",
    faqs: [
      {
        question: "How does the inflation calculator work?",
        answer:
          "The calculator uses U.S. Bureau of Labor Statistics (BLS) annual CPI-U inflation rates. You enter an amount and two years (start and end). It applies compound inflation between those years to show the equivalent purchasing power. For example, $10,000 in 2020 might equal about $12,000 in 2026 depending on cumulative inflation.",
      },
      {
        question: "What is purchasing power?",
        answer:
          "Purchasing power is how much goods or services your money can buy. When inflation rises, the same dollar amount buys less over time. Our calculator shows what a past or future amount would be worth in another year's dollars, so you can compare salaries, savings, and prices in real terms.",
      },
      {
        question: "What data does the inflation calculator use?",
        answer:
          "We use the U.S. Consumer Price Index for All Urban Consumers (CPI-U) from the Bureau of Labor Statistics (BLS). Annual rates are applied in compound form between your chosen years. Data is updated when BLS releases new figures; future years may use estimates until official data is available.",
      },
      {
        question: "Why did my salary's purchasing power go down?",
        answer:
          "If your salary increase is smaller than inflation, your real (inflation-adjusted) purchasing power falls. For example, a 2% raise when inflation is 4% means you can buy less than the year before. Use our calculator to convert your past salary into today's dollars and compare with your current pay.",
      },
      {
        question: "How do I compare salaries from different years?",
        answer:
          "Enter the older salary amount, set the start year to when that salary was earned, and set the end year to the more recent year (or today). The result is that salary in end-year dollars. You can then compare it fairly to a current salary. Use our salary calculator to see take-home pay for any amount.",
      },
    ],
    relatedCalculators: ["retirement-calculator", "investment-calculator", "salary-calculator", "compound-interest-calculator"],
    content: CALCULATOR_CONTENT["inflation-purchasing-power-calculator"],
  },
  "fraction-calculator": {
    id: "fraction-calculator",
    name: "Fraction Calculator",
    slug: "fraction-calculator",
    category: "math",
    description:
      "Add, subtract, multiply, and divide fractions. Simplify fractions and convert between fractions and decimals. Free online fraction calculator with step-by-step results.",
    keywords: [
      "fraction calculator",
      "add fractions",
      "subtract fractions",
      "multiply fractions",
      "divide fractions",
      "simplify fractions",
      "fraction to decimal",
      "decimal to fraction",
      "common denominator",
      "mixed number calculator",
      "fraction simplifier",
      "free fraction calculator",
      "online fraction calculator",
    ],
    metaDescription:
      "Free fraction calculator: add, subtract, multiply, divide and simplify fractions. Convert to decimal. Mixed numbers. Homework and daily math. No sign-up. Instant results.",
    faqs: [
      {
        question: "How do I add two fractions?",
        answer:
          "To add fractions with the same denominator, add the numerators and keep the denominator. For different denominators, find the least common multiple (LCM) of the denominators, convert each fraction to that denominator, then add the numerators. Our calculator does this automatically and shows the result in simplified form.",
      },
      {
        question: "How do I simplify a fraction?",
        answer:
          "To simplify a fraction, divide both the numerator and denominator by their greatest common divisor (GCD). For example, 8/12 simplifies to 2/3 because GCD(8,12) = 4. Our calculator simplifies results automatically and can also convert mixed numbers to improper fractions and back.",
      },
      {
        question: "How do I convert a fraction to a decimal?",
        answer:
          "Divide the numerator by the denominator. For example, 3/4 = 3 ÷ 4 = 0.75. Repeating decimals are shown with a bar or rounded to a practical number of places. Our fraction calculator shows both the fraction result and its decimal equivalent.",
      },
      {
        question: "What is a mixed number?",
        answer:
          "A mixed number has a whole number part and a fraction part, e.g. 2 1/3 (two and one-third). It equals 2 + 1/3 = 7/3 as an improper fraction. Our calculator supports mixed number input and displays results as simplified fractions or mixed numbers when appropriate.",
      },
      {
        question: "Can the calculator handle negative fractions?",
        answer:
          "Yes. You can enter negative numerators or denominators. The calculator follows standard rules: a negative divided by a positive is negative, and a negative divided by a negative is positive. Results are simplified and shown in decimal form as well.",
      },
    ],
    relatedCalculators: ["percentage-calculator", "scientific-calculator", "gpa-calculator", "unit-converter"],
    content: CALCULATOR_CONTENT["fraction-calculator"],
  },
  "bmr-calculator": {
    id: "bmr-calculator",
    name: "BMR Calculator",
    slug: "bmr-calculator",
    category: "health",
    description:
      "Calculate your Basal Metabolic Rate (BMR)—the calories your body burns at rest. Uses the Mifflin-St Jeor equation. Free BMR calculator for diet and fitness planning.",
    keywords: [
      "BMR calculator",
      "basal metabolic rate calculator",
      "calories at rest",
      "Mifflin-St Jeor",
      "BMR formula",
      "resting calorie calculator",
      "how many calories do I burn at rest",
      "BMR for weight loss",
      "free BMR calculator",
    ],
    metaDescription:
      "Free BMR calculator: basal metabolic rate (calories at rest) with Mifflin-St Jeor. For diet and fitness. Gender, age, weight, height. Metric or imperial. No sign-up.",
    faqs: [
      {
        question: "What is BMR?",
        answer:
          "BMR (Basal Metabolic Rate) is the number of calories your body burns at complete rest to maintain vital functions like breathing, circulation, and cell production. It does not include activity. Knowing your BMR helps you set daily calorie targets for weight loss, maintenance, or gain.",
      },
      {
        question: "What formula does the BMR calculator use?",
        answer:
          "We use the Mifflin-St Jeor equation, which is the standard recommended by the Academy of Nutrition and Dietetics. It uses your gender, age, weight, and height. The formula is more accurate than older equations like Harris-Benedict for most adults.",
      },
      {
        question: "How is BMR different from TDEE?",
        answer:
          "BMR is calories burned at rest. TDEE (Total Daily Energy Expenditure) is BMR plus calories burned through activity (work, exercise, daily movement). Use our calorie calculator to get your TDEE based on activity level; BMR is the first step in that calculation.",
      },
      {
        question: "Can I use BMR for weight loss?",
        answer:
          "Yes. To lose weight you typically eat fewer calories than your TDEE. BMR shows your minimum resting needs; eating below BMR long-term is not recommended. A safe deficit is often 300–500 calories below TDEE. Use our calorie calculator to plan intake.",
      },
      {
        question: "Why do I need my gender and age for BMR?",
        answer:
          "The Mifflin-St Jeor formula uses gender and age because metabolism differs: men tend to have higher BMR per unit body mass, and BMR generally decreases with age. Entering accurate data gives you a more reliable estimate for diet and fitness planning.",
      },
    ],
    relatedCalculators: ["calorie-calculator", "bmi-calculator", "body-fat-calculator"],
    content: CALCULATOR_CONTENT["bmr-calculator"],
  },
  "grade-calculator": {
    id: "grade-calculator",
    name: "Grade Calculator",
    slug: "grade-calculator",
    category: "education",
    description:
      "Convert between percentage and letter grades. Calculate test grades, final grades, and weighted averages. Free grade calculator for students and teachers.",
    keywords: [
      "grade calculator",
      "letter grade calculator",
      "percentage to grade",
      "test grade calculator",
      "final grade calculator",
      "weighted grade calculator",
      "grade percentage",
      "what grade do I need",
      "GPA calculator",
      "free grade calculator",
    ],
    metaDescription:
      "Free grade calculator: convert percentage to letter grade, final and weighted grades. What grade you need on the final. For students and teachers. No sign-up.",
    faqs: [
      {
        question: "How do I convert a percentage to a letter grade?",
        answer:
          "Schools use different scales. Common US scale: A 90-100%, B 80-89%, C 70-79%, D 60-69%, F below 60%. Enter your percentage and select your scale; the calculator shows the letter grade. You can also enter points earned and total points to get the percentage and letter.",
      },
      {
        question: "How do I calculate my final grade?",
        answer:
          "If your grade is based on weighted categories (e.g. tests 60%, homework 40%), multiply each category grade by its weight and add the results. Our calculator supports entering current grade, final exam weight, and desired course grade to find the grade you need on the final.",
      },
      {
        question: "What is a weighted grade?",
        answer:
          "A weighted grade gives different importance to different assignments. For example, midterm 30% and final 70%. Your weighted average = (midterm × 0.30) + (final × 0.70). Use our grade calculator to compute weighted averages and see how each assignment affects your total.",
      },
      {
        question: "What grade do I need on the final to pass?",
        answer:
          "Enter your current grade in the course, the weight of the final (as a percentage), and the minimum grade you want (e.g. 60% to pass). The calculator shows the grade you need on the final exam to achieve that overall grade.",
      },
    ],
    relatedCalculators: ["gpa-calculator", "percentage-calculator", "scientific-calculator"],
    content: CALCULATOR_CONTENT["grade-calculator"],
  },
  "roi-calculator": {
    id: "roi-calculator",
    name: "ROI Calculator",
    slug: "roi-calculator",
    category: "finance",
    description:
      "Calculate Return on Investment (ROI). Enter cost and gain or final value to get ROI percentage. Free ROI calculator for investments and business.",
    keywords: [
      "ROI calculator",
      "return on investment calculator",
      "investment return calculator",
      "ROI formula",
      "calculate ROI",
      "investment ROI",
      "percent return calculator",
      "free ROI calculator",
    ],
    metaDescription:
      "Free ROI calculator: return on investment as a percentage. Enter cost and gain or final value. Optional annualized ROI. For investments and business. No sign-up.",
    faqs: [
      {
        question: "How is ROI calculated?",
        answer:
          "ROI = (Gain from Investment - Cost of Investment) / Cost of Investment × 100. For example, you invest $1,000 and it becomes $1,200; gain is $200, so ROI = (200/1000) × 100 = 20%. Our calculator accepts initial cost and final value (or gain) and gives you the ROI percentage.",
      },
      {
        question: "What is a good ROI?",
        answer:
          "It depends on the asset and risk. Stocks historically average about 7-10% per year; real estate and business can vary. ROI alone does not account for time—a 20% return in one year is different from 20% in five years. Use annualized ROI or our investment calculator for time-based comparison.",
      },
      {
        question: "Can ROI be negative?",
        answer:
          "Yes. If your investment loses value, gain is negative and ROI is negative. For example, $1,000 that becomes $800 has ROI = -20%. Negative ROI means you lost money. Our calculator supports negative results so you can evaluate losses.",
      },
      {
        question: "What is the difference between ROI and annualized return?",
        answer:
          "ROI is total return over the whole period. Annualized return is the average per year (e.g. (1 + ROI/100)^(1/years) - 1). For multi-year investments, annualized return helps compare different holding periods. Our ROI calculator can show both when you enter the time period.",
      },
    ],
    relatedCalculators: ["investment-calculator", "compound-interest-calculator", "payback-period-calculator"],
    content: CALCULATOR_CONTENT["roi-calculator"],
  },
  "payback-period-calculator": {
    id: "payback-period-calculator",
    name: "Payback Period Calculator",
    slug: "payback-period-calculator",
    category: "finance",
    description:
      "Calculate how long it takes to recover an investment. Enter initial cost and annual (or monthly) cash flow to get payback period in years and months. Free payback period calculator.",
    keywords: [
      "payback period calculator",
      "investment payback",
      "how long to recover investment",
      "payback calculator",
      "break even calculator",
      "investment recovery time",
      "simple payback",
      "free payback period calculator",
    ],
    metaDescription:
      "Free payback period calculator: years or months to recover your investment. Enter cost and annual or monthly cash flow. Simple payback. No sign-up. Instant results.",
    faqs: [
      {
        question: "What is payback period?",
        answer:
          "Payback period is the time it takes for an investment to recover its initial cost from the cash flow it generates. For example, you invest $10,000 and receive $2,000 per year; payback period = 10,000 / 2,000 = 5 years. It does not account for time value of money or returns after payback.",
      },
      {
        question: "How do I calculate payback period?",
        answer:
          "Simple payback = Initial Investment / Annual Net Cash Flow. If cash flow is monthly, divide initial cost by monthly flow and convert to years (e.g. 24 months = 2 years). Our calculator accepts annual or monthly cash flow and shows the result in years and months.",
      },
      {
        question: "What is the difference between simple and discounted payback?",
        answer:
          "Simple payback ignores the time value of money. Discounted payback uses present value of future cash flows, so it takes longer to \"pay back\" in present-value terms. Our tool calculates simple payback; for discounted payback you would use NPV or our investment calculator with discount rate.",
      },
      {
        question: "Is a shorter payback period always better?",
        answer:
          "Not necessarily. Shorter payback means faster recovery of capital and less risk from time, but it ignores cash flows after payback and total profitability. A project with a longer payback might have higher total returns. Use payback together with ROI or NPV for full picture.",
      },
    ],
    relatedCalculators: ["roi-calculator", "investment-calculator", "compound-interest-calculator"],
    content: CALCULATOR_CONTENT["payback-period-calculator"],
  },
};

export function getCalculator(id: string): CalculatorDefinition | undefined {
  return CALCULATORS[id];
}

export function getCalculatorsByCategory(
  category: CalculatorCategory
): CalculatorDefinition[] {
  return Object.values(CALCULATORS).filter(
    (calc) => calc.category === category
  );
}

export function getAllCalculators(): CalculatorDefinition[] {
  return Object.values(CALCULATORS);
}


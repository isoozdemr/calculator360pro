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
      "percentage increase",
      "percentage decrease",
      "calculate percentage",
      "percentage of a number",
      "percent change calculator",
      "percentage formula",
    ],
    metaDescription:
      "Free percentage calculator to calculate percentages, percentage increase/decrease, and percentage of a number. Fast, accurate, and easy to use for everyone.",
    faqs: [
      {
        question: "How do I calculate a percentage?",
        answer:
          "To calculate a percentage, divide the part by the whole and multiply by 100. For example, if you have 25 out of 100, the percentage is (25/100) × 100 = 25%.",
      },
      {
        question: "How do I calculate percentage increase?",
        answer:
          "Percentage increase = [(New Value - Old Value) / Old Value] × 100. For example, if a price increases from $100 to $120, the percentage increase is [(120-100)/100] × 100 = 20%.",
      },
      {
        question: "How do I calculate percentage decrease?",
        answer:
          "Percentage decrease = [(Old Value - New Value) / Old Value] × 100. For example, if a price decreases from $100 to $80, the percentage decrease is [(100-80)/100] × 100 = 20%.",
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
      "body mass index",
      "BMI calculator metric",
      "BMI calculator imperial",
      "calculate BMI",
      "BMI chart",
      "body mass index calculator",
      "BMI range calculator",
    ],
    metaDescription:
      "Free BMI calculator to calculate your Body Mass Index using metric or imperial units. Get instant results and understand your BMI category and health status.",
    faqs: [
      {
        question: "What is BMI?",
        answer:
          "BMI (Body Mass Index) is a measure of body fat based on height and weight. It's calculated by dividing weight in kilograms by height in meters squared (kg/m²).",
      },
      {
        question: "What is a healthy BMI range?",
        answer:
          "A healthy BMI range is typically between 18.5 and 24.9. Below 18.5 is considered underweight, 25-29.9 is overweight, and 30 or above is considered obese.",
      },
      {
        question: "Is BMI accurate for everyone?",
        answer:
          "BMI is a general indicator but may not be accurate for athletes with high muscle mass, elderly individuals, or children. Consult a healthcare professional for personalized advice.",
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
      "grade point average",
      "GPA calculator 4.0",
      "calculate GPA",
      "GPA calculator high school",
      "weighted GPA calculator",
      "unweighted GPA calculator",
      "college GPA calculator",
    ],
    metaDescription:
      "Free GPA calculator to calculate your Grade Point Average using the 4.0 scale or other grading systems. Perfect for students tracking academic performance.",
    faqs: [
      {
        question: "How is GPA calculated?",
        answer:
          "GPA is calculated by dividing the total grade points earned by the total credit hours attempted. Each letter grade corresponds to a point value (A=4.0, B=3.0, C=2.0, D=1.0, F=0.0).",
      },
      {
        question: "What is a good GPA?",
        answer:
          "A good GPA depends on the context. Generally, a GPA of 3.0 or above is considered good, 3.5 or above is very good, and 3.7 or above is excellent for most colleges and universities.",
      },
      {
        question: "Can I calculate weighted GPA?",
        answer:
          "Yes, weighted GPA accounts for the difficulty of courses (AP, honors, etc.). These courses typically receive an extra point (A=5.0, B=4.0, etc.) in weighted GPA calculations.",
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
    ],
    metaDescription:
      "Free online scientific calculator with trigonometric functions, logarithms, exponentials, and more. Perfect for students and professionals solving complex math.",
    faqs: [
      {
        question: "What functions does a scientific calculator have?",
        answer:
          "A scientific calculator includes trigonometric functions (sin, cos, tan), logarithms (log, ln), exponentials, square roots, powers, and various mathematical operations beyond basic arithmetic.",
      },
      {
        question: "Can I use this calculator for exams?",
        answer:
          "This calculator is suitable for practice and homework. For official exams, please check with your institution about allowed calculator types and policies.",
      },
      {
        question: "Does this calculator support complex numbers?",
        answer:
          "This calculator supports basic scientific functions. For complex number operations, you may need specialized mathematical software.",
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
    ],
    metaDescription:
      "Free age calculator to calculate your exact age in years, months, weeks, and days. Find out how many days you've been alive and calculate age differences.",
    faqs: [
      {
        question: "How do I calculate my exact age?",
        answer:
          "Your exact age is calculated by subtracting your birth date from the current date. The calculator accounts for leap years and different month lengths to give you an accurate result.",
      },
      {
        question: "Can I calculate age in different units?",
        answer:
          "Yes, the age calculator can show your age in years, months, weeks, days, hours, and even minutes or seconds for precise calculations.",
      },
      {
        question: "How do I calculate the age difference between two people?",
        answer:
          "To calculate age difference, subtract the younger person's birth date from the older person's birth date. The calculator can show this difference in various time units.",
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
      "calculate mortgage",
      "amortization calculator",
      "mortgage payment estimator",
      "home loan payment calculator",
      "mortgage rate calculator",
    ],
    metaDescription:
      "Free mortgage calculator to calculate monthly payments, total interest, and amortization schedule. Perfect for homebuyers planning their home purchase.",
    faqs: [
      {
        question: "How is monthly mortgage payment calculated?",
        answer:
          "Monthly mortgage payment is calculated using the formula: M = P[r(1+r)^n]/[(1+r)^n-1], where P is principal, r is monthly interest rate, and n is number of payments.",
      },
      {
        question: "What is included in a mortgage payment?",
        answer:
          "A mortgage payment typically includes principal (loan amount), interest, property taxes, homeowners insurance, and sometimes PMI (Private Mortgage Insurance).",
      },
      {
        question: "How does down payment affect mortgage payments?",
        answer:
          "A larger down payment reduces the principal amount, which lowers monthly payments and total interest paid over the life of the loan.",
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
    ],
    metaDescription:
      "Free compound interest calculator to calculate investment growth and savings over time. See how your money grows with different compounding frequencies.",
    faqs: [
      {
        question: "What is compound interest?",
        answer:
          "Compound interest is interest calculated on the initial principal and also on the accumulated interest from previous periods. It allows your investment to grow exponentially over time.",
      },
      {
        question: "How often should interest compound?",
        answer:
          "Interest can compound annually, semi-annually, quarterly, monthly, or daily. More frequent compounding results in higher returns, though the difference becomes smaller as frequency increases.",
      },
      {
        question: "What is the formula for compound interest?",
        answer:
          "The formula is A = P(1 + r/n)^(nt), where A is the final amount, P is principal, r is annual interest rate, n is compounding frequency, and t is time in years.",
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
    ],
    metaDescription:
      "Free loan calculator to calculate monthly payments, total interest, and amortization schedule for personal, auto, and student loans. Plan your payments.",
    faqs: [
      {
        question: "How do I calculate loan payments?",
        answer:
          "Loan payments are calculated using the same formula as mortgages: M = P[r(1+r)^n]/[(1+r)^n-1], where P is loan amount, r is monthly interest rate, and n is number of payments.",
      },
      {
        question: "What is the difference between secured and unsecured loans?",
        answer:
          "Secured loans (like auto loans) are backed by collateral, typically offering lower interest rates. Unsecured loans (like personal loans) don't require collateral but may have higher rates.",
      },
      {
        question: "How does loan term affect payments?",
        answer:
          "Longer loan terms result in lower monthly payments but higher total interest paid. Shorter terms have higher monthly payments but lower total interest.",
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
    ],
    metaDescription:
      "Free tax calculator to calculate income tax, tax brackets, and effective tax rate. Estimate your tax liability for the current tax year and plan accordingly.",
    faqs: [
      {
        question: "How is income tax calculated?",
        answer:
          "Income tax is calculated using progressive tax brackets. Each portion of income is taxed at the corresponding bracket rate, with higher income taxed at higher rates.",
      },
      {
        question: "What is the difference between marginal and effective tax rate?",
        answer:
          "Marginal tax rate is the rate on your last dollar of income. Effective tax rate is your total tax divided by total income, representing your average tax rate.",
      },
      {
        question: "What deductions can reduce my taxable income?",
        answer:
          "Common deductions include standard deduction, itemized deductions (mortgage interest, charitable contributions), retirement contributions, and health savings accounts.",
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
    ],
    metaDescription:
      "Free salary calculator to calculate take-home pay, net salary, and tax deductions. Convert between hourly, monthly, and annual salary with accurate results.",
    faqs: [
      {
        question: "How do I calculate take-home pay?",
        answer:
          "Take-home pay is gross salary minus federal tax, state tax, Social Security, Medicare, and other deductions like health insurance and retirement contributions.",
      },
      {
        question: "What is the difference between gross and net salary?",
        answer:
          "Gross salary is your total earnings before deductions. Net salary (take-home pay) is your earnings after all taxes and deductions have been subtracted.",
      },
      {
        question: "How do I convert hourly wage to annual salary?",
        answer:
          "Multiply hourly wage by hours worked per week, then by 52 weeks. For example, $20/hour × 40 hours/week × 52 weeks = $41,600 annually.",
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
    ],
    metaDescription:
      "Free body fat calculator using the US Navy method. Calculate your body fat percentage accurately based on your measurements and understand body composition.",
    faqs: [
      {
        question: "How is body fat percentage calculated?",
        answer:
          "Body fat percentage is calculated using the US Navy method, which uses measurements of height, neck, waist (and hip for women) along with age and gender to estimate body fat percentage. This method provides a reliable estimate without requiring specialized equipment.",
      },
      {
        question: "What is a healthy body fat percentage?",
        answer:
          "For men, a healthy body fat percentage is typically 10-20%, with 6-13% considered athletic and 2-5% essential. For women, healthy ranges are 18-28%, with 14-20% considered athletic and 10-13% essential. These ranges vary based on age and individual factors.",
      },
      {
        question: "Is the Navy body fat calculator accurate?",
        answer:
          "The US Navy body fat calculator provides a good estimate (within 3-4% accuracy) for most people. However, accuracy can vary based on body type, age, and fitness level. For the most accurate measurement, consider DEXA scan or hydrostatic weighing.",
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
    ],
    metaDescription:
      "Free calorie calculator to calculate your daily calorie needs, BMR, and TDEE. Understand how many calories you need to maintain, lose, or gain weight.",
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
      "Free investment calculator to calculate investment returns, future value, and growth potential. Plan your investment strategy and see how your money grows.",
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
    ],
    metaDescription:
      "Free car loan calculator to calculate monthly payments, total interest, and amortization schedule. Compare different loan terms and rates to find the best deal.",
    faqs: [
      {
        question: "How is a car loan payment calculated?",
        answer:
          "Car loan payments are calculated using the same amortization formula as other loans: M = P[r(1+r)^n]/[(1+r)^n-1], where M is monthly payment, P is loan amount, r is monthly interest rate, and n is number of payments. The calculator automatically handles this calculation based on your loan amount, interest rate, and term.",
      },
      {
        question: "What is a good interest rate for a car loan?",
        answer:
          "Interest rates vary based on credit score, loan term, and market conditions. As of 2024, good rates are typically 3-5% for excellent credit (720+), 5-8% for good credit (660-719), and 8-15% for fair credit (620-659). Rates above 15% are generally considered high. Shop around and compare offers from multiple lenders to find the best rate.",
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
      "student loan payment calculator",
      "student debt calculator",
      "calculate student loan payment",
      "student loan repayment calculator",
      "federal student loan calculator",
      "student loan interest calculator",
      "college loan calculator",
      "student loan payoff calculator",
    ],
    metaDescription:
      "Free student loan calculator to calculate monthly payments, total interest, and repayment strategies. Compare different repayment plans and save money.",
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
    ],
    metaDescription:
      "Free credit card payoff calculator to calculate payoff time, total interest, and see how extra payments can accelerate debt payoff and save you money.",
    faqs: [
      {
        question: "How long will it take to pay off my credit card?",
        answer:
          "Payoff time depends on your balance, interest rate, and monthly payment. If you only make minimum payments, it can take decades and cost thousands in interest. Our calculator shows exactly how long it will take with your current payment and how extra payments can accelerate payoff. For example, paying just $50 more per month can save years of payments and thousands in interest.",
      },
      {
        question: "How much interest will I pay on my credit card debt?",
        answer:
          "Interest depends on your balance, APR, and how long you take to pay it off. Credit cards typically have high interest rates (15-25% or more), so interest can add up quickly. Our calculator shows your total interest cost and how extra payments can reduce it. Making only minimum payments can result in paying 2-3 times your original balance in interest over time.",
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
    ],
    metaDescription:
      "Free retirement calculator to calculate how much you need to save for retirement, estimate retirement income, and see if you're on track to meet your goals.",
    faqs: [
      {
        question: "How much do I need to save for retirement?",
        answer:
          "A common rule of thumb is to save 25 times your annual expenses, or enough to replace 70-80% of your pre-retirement income. However, the exact amount depends on your desired retirement lifestyle, expected expenses, other income sources (Social Security, pensions), and when you plan to retire. Our calculator helps you estimate your specific retirement needs based on your situation.",
      },
      {
        question: "What is the 4% rule for retirement?",
        answer:
          "The 4% rule suggests you can safely withdraw 4% of your retirement savings in the first year, then adjust for inflation each year. This rule is based on historical market data and assumes a 30-year retirement. For example, with $1 million saved, you could withdraw $40,000 in year one. However, this is a guideline—your actual withdrawal rate should consider your specific situation and market conditions.",
      },
      {
        question: "When should I start saving for retirement?",
        answer:
          "The best time to start saving for retirement is as early as possible, ideally in your 20s. Starting early allows compound interest to work in your favor—someone who starts at 25 will need to save much less than someone who starts at 45 to reach the same goal. However, it's never too late to start. Even starting in your 40s or 50s can make a significant difference in your retirement security.",
      },
      {
        question: "How much should I contribute to my 401(k)?",
        answer:
          "At minimum, contribute enough to get your employer's full match (free money). Ideally, aim to contribute 15-20% of your income, including employer match. If that's not possible, start with what you can afford and increase contributions gradually. The 2024 contribution limit is $23,000 for those under 50, and $30,500 for those 50 and older (catch-up contributions).",
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
    ],
    metaDescription:
      "Free savings calculator to calculate how much your savings will grow with compound interest. Plan your savings goals and see how regular contributions help.",
    faqs: [
      {
        question: "How do I calculate savings growth?",
        answer:
          "Savings growth is calculated using compound interest: A = P(1 + r/n)^(nt), where A is future value, P is principal, r is interest rate, n is compounding frequency, and t is time. Our calculator handles this automatically, showing how your savings grow with different interest rates, time periods, and contribution amounts.",
      },
      {
        question: "How much should I save each month?",
        answer:
          "A common guideline is to save 20% of your income, but the exact amount depends on your goals, income, and expenses. Start with what you can afford and increase gradually. For emergency funds, aim for 3-6 months of expenses. For retirement, aim for 15-20% of income including employer matches. Our calculator helps you see how different monthly contributions affect your savings goals.",
      },
      {
        question: "What is a good interest rate for savings?",
        answer:
          "Interest rates vary by account type and market conditions. High-yield savings accounts typically offer 4-5% APY (as of 2024), while traditional savings accounts may offer 0.5-1%. Money market accounts and CDs may offer slightly higher rates. Compare rates from multiple banks and credit unions to find the best option. Remember that higher rates often come with requirements like minimum balances.",
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
    ],
    metaDescription:
      "Free budget calculator to create a comprehensive budget, track income and expenses, identify savings opportunities, and achieve your financial goals today.",
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
    ],
    metaDescription:
      "Free tip calculator to calculate tips quickly and accurately. Split bills, calculate different tip percentages, and determine the total amount to pay.",
    faqs: [
      {
        question: "How do I calculate a tip?",
        answer:
          "To calculate a tip, multiply the bill amount by the tip percentage (as a decimal). For example, a $50 bill with a 20% tip: $50 × 0.20 = $10 tip. The total would be $60. Common tip percentages are 15% (standard), 18% (good service), and 20% (excellent service). Our calculator does this automatically and shows the tip amount and total.",
      },
      {
        question: "What is a good tip percentage?",
        answer:
          "Standard tip percentages vary by service type. For restaurants: 15% is standard, 18% for good service, 20% for excellent service, and 10-15% for poor service. For other services: 15-20% for food delivery, 10-15% for taxi/ride-share, 15-20% for hair salons, and $1-2 per drink at bars. Tips can vary by location and culture—when in doubt, 18-20% is generally safe for good service.",
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
    ],
    metaDescription:
      "Free discount calculator to calculate sale prices, discounts, and savings. Find the final price after discounts and make smart shopping decisions easily.",
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
          "When you have multiple discounts (like 20% off, then an additional 10% off), apply them sequentially, not by adding percentages. For a $100 item: First discount (20%) = $80. Second discount (10% of $80) = $8. Final price = $80 - $8 = $72. Adding percentages (20% + 10% = 30%) would incorrectly give $70. Our calculator can handle multiple discounts correctly.",
      },
      {
        question: "Should I buy now or wait for a better discount?",
        answer:
          "This depends on urgency, typical discount patterns, and price history. If you need the item immediately, buy it. If you can wait, research typical sale cycles (many items go on sale seasonally). Use our calculator to understand the actual savings—a 50% discount on a $200 item saves $100, while a 30% discount on a $50 item saves only $15. Consider the absolute savings, not just the percentage.",
      },
    ],
    relatedCalculators: ["percentage-calculator", "tip-calculator"],
    content: CALCULATOR_CONTENT["discount-calculator"],
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


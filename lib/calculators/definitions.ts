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
    ],
    metaDescription:
      "Free percentage calculator to calculate percentages, percentage increase/decrease, and percentage of a number. Fast, accurate, and easy to use.",
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
    ],
    metaDescription:
      "Free BMI calculator to calculate your Body Mass Index using metric or imperial units. Get instant results and understand your BMI category.",
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
    ],
    metaDescription:
      "Free online scientific calculator with trigonometric functions, logarithms, exponentials, and more. Perfect for students and professionals.",
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
    ],
    metaDescription:
      "Free age calculator to calculate your exact age in years, months, weeks, and days. Find out how many days you've been alive.",
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
    ],
    metaDescription:
      "Free mortgage calculator to calculate monthly payments, total interest, and amortization schedule. Perfect for homebuyers planning their purchase.",
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
    ],
    metaDescription:
      "Free loan calculator to calculate monthly payments, total interest, and amortization schedule for personal, auto, and student loans.",
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
    ],
    metaDescription:
      "Free tax calculator to calculate income tax, tax brackets, and effective tax rate. Estimate your tax liability for the current tax year.",
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
    ],
    metaDescription:
      "Free salary calculator to calculate take-home pay, net salary, and tax deductions. Convert between hourly, monthly, and annual salary.",
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
    ],
    metaDescription:
      "Free body fat calculator using the US Navy method. Calculate your body fat percentage accurately based on your measurements and understand your body composition.",
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


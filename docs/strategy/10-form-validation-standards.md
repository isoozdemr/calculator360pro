# Form Validation Standards

**Status:** Active  
**Last Updated:** 2024  
**Priority:** High

## Executive Summary

This document defines global form validation standards for all calculators in Calculator360Pro. Consistent validation ensures better user experience, data accuracy, and accessibility across all calculator tools.

## Content Requirements

**⚠️ MANDATORY: All calculators must have minimum 2000 characters of unique content.**
- Content must be stored in `lib/calculators/content.ts`
- Content must be added to calculator definition using the `content` field
- This requirement applies to all existing and new calculators
- See [05-google-seo-master-plan.md](../05-google-seo-master-plan.md) for detailed content requirements

## Core Principles

### 1. User-Friendly Error Messages
- Clear, actionable error messages
- Explain what's wrong and how to fix it
- Use plain language (avoid technical jargon)
- Show errors in real-time when possible

### 2. Validation Timing
- **Real-time validation:** Validate on blur (when user leaves field)
- **Submit validation:** Validate all fields when user clicks Calculate
- **Progressive validation:** Show errors as user completes form

### 3. Accessibility
- All error messages must have `role="alert"` for screen readers
- Error messages must be associated with input fields using `aria-describedby`
- Color alone should not indicate errors (use icons/text as well)

## Validation Rules

### Required Fields

**Rule:** All essential fields must be marked as required.

**Implementation:**
```typescript
{
  required: true,
  // ... other rules
}
```

**Error Message:** "This field is required"

### Number Validation

#### Positive Numbers
- Must be greater than 0
- Accepts decimals
- Pattern: `/^[0-9]+\.?[0-9]*$/`

**Example:**
```typescript
{
  required: true,
  pattern: VALIDATION_PATTERNS.POSITIVE_NUMBER,
  min: 0.01,
  custom: {
    validate: (v: string) => parseFloat(v) > 0,
    message: "Must be a positive number",
  },
}
```

#### Percentage (0-100)
- Range: 0 to 100
- Accepts decimals
- Pattern: `/^(?:100(?:\.0+)?|[0-9]{1,2}(?:\.[0-9]+)?)$/`

**Example:**
```typescript
{
  required: true,
  min: 0,
  max: 100,
  message: "Percentage must be between 0 and 100",
}
```

#### Interest Rate
- Range: 0% to 100%
- Accepts decimals (e.g., 3.5%)
- Common range: 0.1% to 30%

**Example:**
```typescript
{
  required: true,
  min: 0,
  max: 100,
  message: "Interest rate must be between 0% and 100%",
}
```

### Financial Fields

#### Loan Amount
- Minimum: $1,000
- Maximum: $10,000,000
- Must be positive number

**Example:**
```typescript
{
  required: true,
  min: 1000,
  max: 10000000,
  message: "Loan amount must be between $1,000 and $10,000,000",
}
```

#### Income
- Minimum: $0
- Maximum: $100,000,000
- Accepts decimals

**Example:**
```typescript
{
  required: true,
  min: 0,
  max: 100000000,
  message: "Income must be between $0 and $100,000,000",
}
```

### Health Fields

#### Weight (Metric - kg)
- Range: 1 kg to 500 kg
- Accepts decimals

**Example:**
```typescript
{
  required: true,
  min: 1,
  max: 500,
  message: "Weight must be between 1 kg and 500 kg",
}
```

#### Weight (Imperial - lbs)
- Range: 2.2 lbs to 1,100 lbs
- Accepts decimals

**Example:**
```typescript
{
  required: true,
  min: 2.2,
  max: 1100,
  message: "Weight must be between 2.2 lbs and 1,100 lbs",
}
```

#### Height (Metric - cm)
- Range: 30 cm to 300 cm
- Accepts decimals

**Example:**
```typescript
{
  required: true,
  min: 30,
  max: 300,
  message: "Height must be between 30 cm and 300 cm",
}
```

#### Height (Imperial - ft'in)
- Format: `feet'inches` (e.g., `5'10` or `5'10"`)
- Feet: 1 to 8
- Inches: 0 to 11
- Pattern: `/^(\d+)'(\d{1,2})"?$/`

**Example:**
```typescript
{
  required: true,
  pattern: VALIDATION_PATTERNS.HEIGHT_IMPERIAL,
  message: "Height must be in format: feet'inches (e.g., 5'10)",
}
```

#### Age
- Range: 0 to 150
- Must be integer

**Example:**
```typescript
{
  required: true,
  min: 0,
  max: 150,
  message: "Age must be between 0 and 150",
}
```

### Loan Term
- Range: 1 to 50 years
- Must be integer

**Example:**
```typescript
{
  required: true,
  min: 1,
  max: 50,
  message: "Loan term must be between 1 and 50 years",
}
```

## Format Standards

### Currency Formatting
- Display: `$1,234.56`
- Input: Accepts with or without `$` and commas
- Auto-format on blur

**Implementation:**
```typescript
formatHelpers.currency(value)
```

### Percentage Formatting
- Display: `25.5%`
- Input: Accepts with or without `%`
- Auto-format on blur

**Implementation:**
```typescript
formatHelpers.percentage(value)
```

### Number Formatting
- Display: `1,234.56`
- Input: Accepts with or without commas
- Auto-format on blur

**Implementation:**
```typescript
formatHelpers.number(value)
```

### Height Formatting (Imperial)
- Display: `5'10"`
- Input: Accepts `5'10`, `5'10"`, or `5 10`
- Auto-format on blur

**Implementation:**
```typescript
formatHelpers.heightImperial(value)
```

## Input Field Standards

### Label Requirements
- All inputs must have descriptive labels
- Labels should include units (e.g., "Weight (kg)", "Interest Rate (%)")
- Use clear, concise language

### Placeholder Text
- Provide helpful examples
- Show expected format
- Examples:
  - `"Enter weight in kg"`
  - `"e.g., 5'10"` (for height)
  - `"Enter interest rate (e.g., 3.5)"`

### Input Types
- **Number inputs:** Use `type="number"` for numeric fields
- **Text inputs:** Use `type="text"` for formatted inputs (height, dates)
- **Step attribute:** Use `step="0.01"` for decimal inputs

### Error Display
- Show error below input field
- Use red color: `text-[#ef4444]`
- Include error icon (optional but recommended)
- Error message must be clear and actionable

## Implementation Pattern

### Standard Calculator Form Structure

```typescript
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

export function ExampleCalculator() {
  const [field1, setField1] = useState("");
  const [field1Error, setField1Error] = useState<string | null>(null);
  const [result, setResult] = useState<number | null>(null);

  const handleField1Change = (value: string) => {
    setField1(value);
    // Clear error when user starts typing
    if (field1Error) setField1Error(null);
  };

  const handleField1Blur = () => {
    const error = validateField(field1, COMMON_RULES.positiveNumber);
    setField1Error(error);
  };

  const calculate = () => {
    // Validate all fields
    const field1Err = validateField(field1, COMMON_RULES.positiveNumber);
    
    if (field1Err) {
      setField1Error(field1Err);
      return;
    }

    // Perform calculation
    // ...
  };

  const reset = () => {
    setField1("");
    setField1Error(null);
    setResult(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white dark:bg-[#1e293b] rounded-lg border-2 border-[#e2e8f0] dark:border-[#334155] p-6 space-y-6">
        <Input
          label="Field Name (unit)"
          type="number"
          value={field1}
          onChange={(e) => handleField1Change(e.target.value)}
          onBlur={handleField1Blur}
          placeholder="Enter value"
          error={field1Error || undefined}
        />
        
        <div className="flex gap-3">
          <Button onClick={calculate} className="flex-1">
            Calculate
          </Button>
          <Button onClick={reset} variant="outline">
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
```

## Validation Checklist

When creating a new calculator, ensure:

- [ ] All required fields are marked
- [ ] All fields have appropriate validation rules
- [ ] Error messages are clear and helpful
- [ ] Placeholder text provides examples
- [ ] Labels include units
- [ ] Real-time validation on blur
- [ ] Submit validation before calculation
- [ ] Reset clears all fields and errors
- [ ] Input types are appropriate
- [ ] Formatting helpers are used where applicable
- [ ] Accessibility requirements are met

## Common Validation Patterns

### Pattern 1: Required Number Field
```typescript
const rules = {
  required: true,
  pattern: VALIDATION_PATTERNS.POSITIVE_NUMBER,
  min: 0.01,
};
```

### Pattern 2: Optional Number Field
```typescript
const rules = {
  required: false,
  pattern: VALIDATION_PATTERNS.POSITIVE_NUMBER,
  min: 0,
};
```

### Pattern 3: Percentage Field
```typescript
const rules = COMMON_RULES.percentage;
```

### Pattern 4: Custom Validation
```typescript
const rules = {
  required: true,
  custom: {
    validate: (value: string) => {
      // Custom logic
      return isValid;
    },
    message: "Custom error message",
  },
};
```

## Error Message Guidelines

### Do's
- ✅ "Weight must be between 1 kg and 500 kg"
- ✅ "Interest rate must be between 0% and 100%"
- ✅ "Height must be in format: feet'inches (e.g., 5'10)"
- ✅ "This field is required"

### Don'ts
- ❌ "Invalid input"
- ❌ "Error"
- ❌ "Please enter a valid number"
- ❌ Technical jargon

## Testing Requirements

All calculators must be tested for:

1. **Required field validation:** Empty fields show error
2. **Range validation:** Values outside range show error
3. **Format validation:** Invalid formats show error
4. **Real-time validation:** Errors appear on blur
5. **Submit validation:** All errors shown on Calculate click
6. **Reset functionality:** All fields and errors cleared
7. **Accessibility:** Screen readers can access error messages

## Future Enhancements

- [ ] Auto-format on blur for currency/percentage
- [ ] Input masking for specific formats
- [ ] Progressive validation feedback
- [ ] Validation summary at top of form
- [ ] Inline validation icons


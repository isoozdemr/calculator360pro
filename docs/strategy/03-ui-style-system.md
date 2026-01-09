# UI / Style System

**Status:** Active  
**Last Updated:** 2024  
**Priority:** High

## Executive Summary

UI/UX tasarım sistemi, Calculator360Pro'nun premium görünüm, hızlı performans ve sıfır CLS riski ile kullanıcı deneyimini optimize eder. Bu doküman, renk sistemi, tipografi, layout kuralları ve accessibility standartlarını tanımlar.

## Design Principles

### Core Principles

1. **Premium but Simple**
   - Clean, minimal design
   - No unnecessary elements
   - Focus on calculator functionality

2. **Speed-First**
   - Zero CLS (Cumulative Layout Shift)
   - Fast perceived performance
   - Optimized asset loading

3. **Mobile-First**
   - Mobile-optimized calculator UX
   - Touch-friendly interactions
   - Responsive design

4. **Accessibility**
   - WCAG 2.1 AA compliance
   - Keyboard navigation
   - Screen reader support

## Color System

### Light Mode Palette

**Primary Colors:**
- Primary: `#2563eb` (Blue 600)
- Primary Hover: `#1d4ed8` (Blue 700)
- Primary Light: `#60a5fa` (Blue 400)

**Neutral Colors:**
- Background: `#f8fafc` (Slate 50)
- Surface: `#ffffff` (White)
- Border: `#e2e8f0` (Slate 200)
- Text Primary: `#1e293b` (Slate 800)
- Text Secondary: `#64748b` (Slate 500)
- Text Muted: `#94a3b8` (Slate 400)

**Semantic Colors:**
- Success: `#10b981` (Green 500)
- Error: `#ef4444` (Red 500)
- Warning: `#f59e0b` (Amber 500)
- Info: `#3b82f6` (Blue 500)

### Dark Mode Palette

**Primary Colors:**
- Primary: `#60a5fa` (Blue 400)
- Primary Hover: `#3b82f6` (Blue 500)
- Primary Light: `#93c5fd` (Blue 300)

**Neutral Colors:**
- Background: `#020617` (Slate 950)
- Surface: `#1e293b` (Slate 800)
- Border: `#334155` (Slate 700)
- Text Primary: `#f1f5f9` (Slate 100)
- Text Secondary: `#94a3b8` (Slate 400)
- Text Muted: `#64748b` (Slate 500)

**Semantic Colors:**
- Success: `#34d399` (Green 400)
- Error: `#f87171` (Red 400)
- Warning: `#fbbf24` (Amber 400)
- Info: `#60a5fa` (Blue 400)

### Color Usage Rules

1. **Contrast Ratios:**
   - Text on background: 4.5:1 minimum (AA)
   - Large text: 3:1 minimum (AA)
   - Interactive elements: 3:1 minimum

2. **Color Blindness:**
   - Don't rely solely on color for information
   - Use icons, labels, or patterns
   - Test with color blindness simulators

3. **Consistency:**
   - Use design tokens, not hardcoded colors
   - Maintain color meaning across pages
   - Follow semantic color usage

## Typography System

### Font Stack

**Primary Font:** Inter
- Weights: 400 (Regular), 600 (Semibold), 700 (Bold)
- Usage: Body text, UI elements, calculator labels

**Monospace Font:** JetBrains Mono
- Weights: 400 (Regular), 600 (Semibold), 700 (Bold)
- Usage: Calculator results, numbers, code

### Type Scale

**Headings:**
- H1: `3rem` (48px) / `3.75rem` (60px) mobile / `font-weight: 700`
- H2: `2.25rem` (36px) / `2rem` (32px) mobile / `font-weight: 700`
- H3: `1.875rem` (30px) / `1.5rem` (24px) mobile / `font-weight: 600`
- H4: `1.5rem` (24px) / `1.25rem` (20px) mobile / `font-weight: 600`

**Body:**
- Large: `1.125rem` (18px) / `line-height: 1.75`
- Base: `1rem` (16px) / `line-height: 1.5`
- Small: `0.875rem` (14px) / `line-height: 1.5`

**Calculator Specific:**
- Input Label: `0.875rem` (14px) / `font-weight: 600`
- Input Value: `1rem` (16px) / `font-weight: 400`
- Result: `1.5rem` (24px) / `font-weight: 700` / `font-family: JetBrains Mono`

### Typography Rules

1. **Line Height:**
   - Headings: 1.2
   - Body: 1.5-1.75
   - Calculator results: 1.2

2. **Letter Spacing:**
   - Headings: -0.02em
   - Body: 0
   - Uppercase: 0.05em

3. **Readability:**
   - Max line length: 65-75 characters
   - Paragraph spacing: 1rem minimum
   - Section spacing: 2rem minimum

## Layout & Spacing

### Grid System

**Container:**
- Max width: `72rem` (1152px)
- Padding: `1rem` mobile / `1.5rem` desktop
- Margin: Auto (centered)

**Calculator Container:**
- Max width: `42rem` (672px)
- Padding: `1.5rem` mobile / `2rem` desktop
- Background: Surface color
- Border radius: `0.5rem` (8px)
- Border: 2px solid border color

### Spacing Scale

**Base Unit:** 0.25rem (4px)

- `0.25rem` (4px) - xs
- `0.5rem` (8px) - sm
- `1rem` (16px) - base
- `1.5rem` (24px) - md
- `2rem` (32px) - lg
- `3rem` (48px) - xl
- `4rem` (64px) - 2xl

### Spacing Rules

1. **Component Spacing:**
   - Input groups: `1rem` vertical spacing
   - Calculator sections: `2rem` vertical spacing
   - Related calculators: `3rem` top margin

2. **Page Spacing:**
   - Section padding: `2rem` mobile / `4rem` desktop
   - Content max-width: `65ch` for readability

3. **Calculator Spacing:**
   - Input to label: `0.5rem`
   - Input to input: `1rem`
   - Input to result: `1.5rem`
   - Button spacing: `0.75rem` horizontal

## Calculator Input/Output Patterns

### Input Patterns

**Text Input:**
- Height: `2.5rem` (40px)
- Padding: `0.75rem` horizontal, `0.5rem` vertical
- Border: 2px solid border color
- Border radius: `0.375rem` (6px)
- Focus: Primary color border, ring
- Font: Inter, 1rem, 400

**Number Input:**
- Same as text input
- Font: JetBrains Mono for numbers
- Min/max validation
- Step attribute for decimals

**Select/Dropdown:**
- Same height as text input
- Custom styled (not native)
- Accessible keyboard navigation

### Output Patterns

**Result Display:**
- Font: JetBrains Mono, 1.5rem, 700
- Color: Primary color
- Background: Light primary color (10% opacity)
- Padding: `1rem`
- Border radius: `0.5rem`
- Min height: `3rem` (prevents CLS)

**Result Label:**
- Font: Inter, 0.875rem, 600
- Color: Text secondary
- Spacing: `0.5rem` below result

### Button Patterns

**Primary Button:**
- Background: Primary color
- Text: White
- Padding: `0.75rem` horizontal, `0.5rem` vertical
- Border radius: `0.375rem`
- Font: Inter, 1rem, 600
- Hover: Darker primary color
- Focus: Ring, outline

**Secondary Button:**
- Background: Transparent
- Text: Primary color
- Border: 2px solid primary color
- Same padding and sizing as primary

**Reset Button:**
- Background: Transparent
- Text: Text secondary
- Border: 2px solid border color
- Hover: Border color darkens

## CLS = 0 Guarantee Rules

### Critical Rules

1. **Image Dimensions:**
   - Always specify width and height
   - Use aspect-ratio CSS property
   - Reserve space before image loads

2. **Font Loading:**
   - Use `font-display: swap`
   - Preload critical fonts
   - Use system font fallback

3. **Dynamic Content:**
   - Reserve space for calculator results
   - Use skeleton loaders
   - Set min-height for containers

4. **Ad Placements:**
   - Reserve space for ads
   - Use aspect-ratio containers
   - Don't shift layout when ads load

5. **Component Rendering:**
   - Use CSS Grid/Flexbox (not absolute positioning)
   - Set explicit heights for fixed elements
   - Avoid layout shifts during hydration

### Implementation Checklist

- [ ] All images have width/height attributes
- [ ] Fonts use font-display: swap
- [ ] Calculator results have min-height
- [ ] Ad containers have reserved space
- [ ] No absolute positioning for layout
- [ ] Skeleton loaders match final content size
- [ ] Test with Lighthouse CLS audit

## Accessibility Guidelines

### WCAG 2.1 AA Compliance

**Level A Requirements:**
- [ ] Keyboard navigation for all interactive elements
- [ ] Focus indicators visible
- [ ] Alt text for images
- [ ] Form labels associated with inputs
- [ ] Error messages associated with inputs

**Level AA Requirements:**
- [ ] Color contrast 4.5:1 minimum
- [ ] Text resizable up to 200%
- [ ] Focus order logical
- [ ] Headings properly structured
- [ ] Language declared in HTML

### Keyboard Navigation

**Tab Order:**
1. Navigation links
2. Calculator inputs (left to right, top to bottom)
3. Calculate button
4. Reset button
5. Related calculators
6. Footer links

**Keyboard Shortcuts:**
- Enter: Calculate (when in input)
- Escape: Reset calculator
- Tab: Next element
- Shift+Tab: Previous element

### Screen Reader Support

**ARIA Labels:**
- Calculator inputs: `aria-label` or `aria-labelledby`
- Buttons: Descriptive text or `aria-label`
- Results: `aria-live="polite"` for dynamic updates
- Error messages: `aria-describedby`

**Semantic HTML:**
- Use `<form>` for calculator inputs
- Use `<button>` not `<div>` for buttons
- Use proper heading hierarchy
- Use `<label>` for form inputs

## Mobile-First Calculator UX

### Touch Targets

**Minimum Size:**
- Buttons: 44x44px minimum
- Inputs: 44px height minimum
- Links: 44px height minimum

**Spacing:**
- Touch targets: 8px minimum spacing
- Calculator inputs: 16px vertical spacing
- Buttons: 12px horizontal spacing

### Mobile Optimizations

1. **Input Types:**
   - Use appropriate input types (number, tel, email)
   - Show numeric keypad on mobile
   - Auto-focus first input

2. **Layout:**
   - Single column on mobile
   - Stack inputs vertically
   - Full-width buttons

3. **Performance:**
   - Lazy load non-critical content
   - Optimize images for mobile
   - Minimize JavaScript

## Animation & Transitions

### Rules

1. **Minimal Animations:**
   - Only essential animations
   - No decorative animations
   - Respect `prefers-reduced-motion`

2. **Performance:**
   - Use CSS transforms (GPU accelerated)
   - Avoid animating layout properties
   - Keep duration short (150-300ms)

3. **Allowed Animations:**
   - Button hover states
   - Focus rings
   - Result updates (fade in)
   - Loading states

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Action Items

### Immediate

- [ ] Implement color system in Tailwind config
- [ ] Set up typography scale
- [ ] Create calculator component templates
- [ ] Implement CLS prevention rules

### Short-term

- [ ] Add dark mode support
- [ ] Implement accessibility features
- [ ] Create mobile-optimized layouts
- [ ] Set up design system documentation

### Medium-term

- [ ] Create component library
- [ ] Implement animation system
- [ ] Add keyboard navigation
- [ ] Complete WCAG audit

## Risk Assessment

### High Risk

1. **CLS Issues**
   - Risk: Poor Core Web Vitals score
   - Mitigation: Strict CLS prevention rules, testing

2. **Accessibility Violations**
   - Risk: Legal issues, poor UX
   - Mitigation: WCAG compliance, regular audits

### Medium Risk

1. **Performance Issues**
   - Risk: Slow page load
   - Mitigation: Optimization, lazy loading

2. **Mobile UX Problems**
   - Risk: Poor mobile experience
   - Mitigation: Mobile-first design, testing

## Success Metrics

- CLS Score: 0.0 (target)
- Lighthouse Accessibility: 95+ (target)
- Mobile Usability: 100% (target)
- Time to Interactive: < 3s (target)


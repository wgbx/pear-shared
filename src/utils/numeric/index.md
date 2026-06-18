---
title: numeric
---

# numeric

Numeric utilities using `currency.js` for precise monetary calculations, avoiding floating-point precision issues.

## ⚠️ Precision Notice

**Default precision is 2 decimal places**, optimized for monetary calculations (cents).

This precision is **NOT suitable** for:

- **Percentage calculations** (e.g., commission rates, tax rates) - use `{ precision: 4 }` or higher
- **Exchange rate conversions** - may require 4+ decimal places
- **Interest calculations** - accumulation errors over time
- **Scientific computations** - consider using a dedicated math library

For scenarios requiring higher precision, pass the `precision` option:

```ts
// Percentage calculation (recommended precision: 4-6)
numericMultiply(100, 0.1234, { precision: 6 }); // 12.340000

// Default precision (2 decimal places)
numericMultiply(100, 0.1234); // 12.34 (may lose precision)
```

## Examples

### Basic Math Operations

```ts
import {
  numericAdd,
  numericSubtract,
  numericMultiply,
  numericDivide,
} from '@bosinc/shared';

// Default precision: 2 decimal places
numericAdd(100, 50); // 150
numericSubtract(100, 30); // 70
numericMultiply(100, 0.3); // 30
numericDivide(100, 4); // 25
```

### Batch Operations

```ts
import {
  numericAddMany,
  numericSubtractMany,
  numericMultiplyMany,
} from '@bosinc/shared';

// Batch addition: sum all values
numericAddMany([1, 2, 3, 4]); // 10
numericAddMany([100, 50, 25]); // 175

// Batch subtraction: subtract all from first value
numericSubtractMany([100, 20, 5]); // 75 (100 - 20 - 5)
numericSubtractMany([1000, 100, 50]); // 850

// Batch multiplication: multiply all values
numericMultiplyMany([2, 3, 4]); // 24
numericMultiplyMany([100, 0.5, 0.1]); // 5
```

**Real-world example - Shopping cart total:**

```ts
import { numericAddMany, numericFormat } from '@bosinc/shared';

const cartItems = [99.99, 49.5, 15.0, 5.5];
const total = numericAddMany(cartItems); // 169.99

console.log(numericFormat(total, { symbol: '¥' })); // "¥169.99"
```

**Real-world example - Calculating discount:**

```ts
import { numericSubtractMany, numericFormat } from '@bosinc/shared';

const price = 1000;
const discounts = [50, 20, 10]; // Multiple discounts
const finalPrice = numericSubtractMany([price, ...discounts]); // 920

console.log(numericFormat(finalPrice)); // "920.00"
```

### Currency Formatting

```ts
import { numericFormat } from '@bosinc/shared';

// Default: no symbol
numericFormat(1234.56); // "1,234.56"
numericFormat(1000); // "1,000.00"

// With custom symbol
numericFormat(1234.56, { symbol: '¥' }); // "¥1,234.56"
numericFormat(1234.56, { symbol: '$' }); // "$1,234.56"
numericFormat(1234.56, { symbol: '€' }); // "€1,234.56"

// Adjust precision
numericFormat(1234, { symbol: '¥', precision: 0 }); // "¥1,234"
numericFormat(1234.567, { precision: 3 }); // "1,234.567"

// Change decimal and thousand separators
numericFormat(1234.56, { decimal: ',', separator: '.' }); // "1.234,56"
```

### Using numeric Object

```ts
import { numeric } from '@bosinc/shared';

numeric.add(100, 50); // 150
numeric.subtract(100, 30); // 70
numeric.multiply(100, 0.3); // 30
numeric.divide(100, 4); // 25
numeric.format(1234.56); // "1,234.56"
```

### Real-world Example

```ts
import { numericAdd, numericMultiply, numericFormat } from '@bosinc/shared';

// Calculate total price with tax
const price = 100;
const quantity = 3;
const taxRate = 0.1; // 10%

const subtotal = numericMultiply(price, quantity); // 300
const tax = numericMultiply(subtotal, taxRate); // 30
const total = numericAdd(subtotal, tax); // 330

console.log(numericFormat(total)); // "330.00"
```

### Percentage Calculation (Higher Precision)

```ts
import { numericMultiply, numericDivide } from '@bosinc/shared';

// ❌ Not recommended: precision loss
const rate = numericDivide(33.33, 100); // 0.33

// ✅ Recommended: specify higher precision
const rate = numericDivide(33.33, 100, { precision: 6 }); // 0.333300
const commission = numericMultiply(1000, rate, { precision: 6 }); // 333.300000

// Final result: round to 2 decimal places
const finalCommission = Math.round(commission * 100) / 100; // 333.33
```

## API

### numericAdd

Addition: a + b

**Precision:** 2 decimal places by default

| Param | Description          | Type               | Required | Default |
| ----- | -------------------- | ------------------ | -------- | ------- |
| a     | First number         | `number \| string` | `✅`     | `-`     |
| b     | Second number to add | `number \| string` | `✅`     | `-`     |

**Returns:** `number` - Sum of a and b

### numericSubtract

Subtraction: a - b

**Precision:** 2 decimal places by default

| Param | Description | Type               | Required | Default |
| ----- | ----------- | ------------------ | -------- | ------- |
| a     | Minuend     | `number \| string` | `✅`     | `-`     |
| b     | Subtrahend  | `number \| string` | `✅`     | `-`     |

**Returns:** `number` - Difference of a and b

### numericMultiply

Multiplication: a × b

**Precision:** 2 decimal places by default. Use `{ precision: 4-6 }` for percentage calculations.

| Param | Description         | Type               | Required | Default            |
| ----- | ------------------- | ------------------ | -------- | ------------------ |
| a     | First factor        | `number \| string` | `✅`     | `-`                |
| b     | Second factor       | `number \| string` | `✅`     | `-`                |
| opts  | Currency.js options | `currency.Options` | `-`      | `{ precision: 2 }` |

**Returns:** `number` - Product of a and b

### numericDivide

Division: a ÷ b

**Precision:** 2 decimal places by default. Use `{ precision: 4-6 }` for percentage calculations.

| Param | Description         | Type               | Required | Default            |
| ----- | ------------------- | ------------------ | -------- | ------------------ |
| a     | Dividend            | `number \| string` | `✅`     | `-`                |
| b     | Divisor             | `number \| string` | `✅`     | `-`                |
| opts  | Currency.js options | `currency.Options` | `-`      | `{ precision: 2 }` |

**Returns:** `number` - Quotient of a and b

### numericFormat

Format as currency with thousand separator

| Param | Description                | Type                                  | Required | Default              |
| ----- | -------------------------- | ------------------------------------- | -------- | -------------------- |
| value | Value to format            | `number \| string`                    | `✅`     | `-`                  |
| opts  | Currency.js format options | `currency.Options \| currency.Format` | `-`      | `{ separator: ',' }` |

**Returns:** `string` - Formatted currency string

### numericAddMany

Batch addition: sum all values in array

**Precision:** 2 decimal places by default

| Param  | Description             | Type                   | Required | Default |
| ------ | ----------------------- | ---------------------- | -------- | ------- |
| values | Array of numbers to add | `(number \| string)[]` | `✅`     | `-`     |

**Returns:** `number` - Sum of all values

### numericSubtractMany

Batch subtraction: subtract all values from first value

**Precision:** 2 decimal places by default

| Param  | Description                                        | Type                   | Required | Default |
| ------ | -------------------------------------------------- | ---------------------- | -------- | ------- |
| values | Array where first is minuend, rest are subtrahends | `(number \| string)[]` | `✅`     | `-`     |

**Returns:** `number` - Result after subtracting all values from first

### numericMultiplyMany

Batch multiplication: multiply all values in array

**Precision:** 2 decimal places by default

| Param  | Description                  | Type                   | Required | Default |
| ------ | ---------------------------- | ---------------------- | -------- | ------- |
| values | Array of numbers to multiply | `(number \| string)[]` | `✅`     | `-`     |

**Returns:** `number` - Product of all values

### numeric

Object containing all numeric utilities

| Property     | Description             | Type                                                                              |
| ------------ | ----------------------- | --------------------------------------------------------------------------------- |
| add          | Addition function       | `(a: number \| string, b: number \| string) => number`                            |
| subtract     | Subtraction function    | `(a: number \| string, b: number \| string) => number`                            |
| multiply     | Multiplication function | `(a: number \| string, b: number \| string, opts?: currency.Options) => number`   |
| divide       | Division function       | `(a: number \| string, b: number \| string, opts?: currency.Options) => number`   |
| format       | Format function         | `(value: number \| string, opts?: currency.Options \| currency.Format) => string` |
| addMany      | Batch addition          | `(values: (number \| string)[]) => number`                                        |
| subtractMany | Batch subtraction       | `(values: (number \| string)[]) => number`                                        |
| multiplyMany | Batch multiplication    | `(values: (number \| string)[]) => number`                                        |

import currency from 'currency.js';

/**
 * Numeric utilities using currency.js for precise monetary calculations
 *
 * @example
 * ```ts
 * import { numericAdd, numericSubtract, numericMultiply, numericDivide, numericFormat } from '@bosinc/shared';
 *
 * numericAdd(100, 50)           // 150
 * numericSubtract(100, 30)      // 70
 * numericMultiply(100, 0.3)     // 30
 * numericDivide(100, 4)         // 25
 * numericFormat(1234.56)        // "1,234.56"
 * ```
 */

/**
 * Addition: a + b
 *
 * @param a - First number
 * @param b - Second number to add
 * @returns Sum of a and b
 *
 * @example
 * ```ts
 * numericAdd(100, 50)        // 150
 * numericAdd('99.99', '0.01') // 100
 * ```
 */
export function numericAdd(a: number | string, b: number | string): number {
  return currency(a).add(b).value;
}

/**
 * Subtraction: a - b
 *
 * @param a - Minuend
 * @param b - Subtrahend
 * @returns Difference of a and b
 *
 * @example
 * ```ts
 * numericSubtract(100, 30)     // 70
 * numericSubtract('100', '25') // 75
 * ```
 */
export function numericSubtract(
  a: number | string,
  b: number | string,
): number {
  return currency(a).subtract(b).value;
}

/**
 * Multiplication: a × b
 *
 * @param a - First factor
 * @param b - Second factor
 * @param opts - Currency.js options (default: 2 decimal places)
 * @returns Product of a and b
 *
 * @example
 * ```ts
 * numericMultiply(100, 0.3)     // 30
 * numericMultiply('100', '1.5') // 150
 *
 * // For percentage calculations, use higher precision
 * numericMultiply(1000, 0.1234, { precision: 6 }) // 123.400000
 * ```
 */
export function numericMultiply(
  a: number | string,
  b: number | string,
  opts?: currency.Options,
): number {
  return currency(a, opts).multiply(b).value;
}

/**
 * Division: a ÷ b
 *
 * @param a - Dividend
 * @param b - Divisor
 * @param opts - Currency.js options (default: 2 decimal places)
 * @returns Quotient of a and b
 *
 * @example
 * ```ts
 * numericDivide(100, 4)      // 25
 * numericDivide('100', '3')  // 33.33
 *
 * // For percentage calculations, use higher precision
 * numericDivide(33.33, 100, { precision: 6 }) // 0.333300
 * ```
 */
export function numericDivide(
  a: number | string,
  b: number | string,
  opts?: currency.Options,
): number {
  return currency(a, opts).divide(b).value;
}

/**
 * Format as currency with thousand separator
 *
 * @param value - Value to format
 * @param opts - Currency.js format options
 * @returns Formatted currency string
 *
 * @example
 * ```ts
 * numericFormat(1234.56)                    // "1,234.56"
 * numericFormat(1000)                       // "1,000.00"
 * numericFormat(1234.56, { symbol: '¥' })   // "¥1,234.56"
 * ```
 */
export function numericFormat(
  value: number | string,
  opts?: currency.Options | currency.Format,
): string {
  return currency(value).format({ separator: ',', ...opts });
}

/**
 * Batch addition: sum all values
 *
 * @param values - Array of numbers to add
 * @returns Sum of all values
 *
 * @example
 * ```ts
 * numericAddMany([1, 2, 3, 4])           // 10
 * numericAddMany([100, 50, 25])         // 175
 * numericAddMany(['10.5', '20.3'])      // 30.80
 * ```
 */
export function numericAddMany(values: (number | string)[]): number {
  return values.reduce((sum: number, value) => currency(sum).add(value).value, 0);
}

/**
 * Batch subtraction: subtract all values from first value
 *
 * @param values - Array where first value is minuend, rest are subtrahends
 * @returns Result after subtracting all values
 *
 * @example
 * ```ts
 * numericSubtractMany([100, 20, 5])      // 75 (100 - 20 - 5)
 * numericSubtractMany([1000, 100, 50])   // 850
 * ```
 */
export function numericSubtractMany(values: (number | string)[]): number {
  if (values.length === 0) return 0;
  const [first, ...rest] = values;
  return rest.reduce((result: number, value) => currency(result).subtract(value).value, currency(first).value);
}

/**
 * Batch multiplication: multiply all values
 *
 * @param values - Array of numbers to multiply
 * @returns Product of all values
 *
 * @example
 * ```ts
 * numericMultiplyMany([2, 3, 4])         // 24
 * numericMultiplyMany([100, 0.5, 0.1])   // 5
 * ```
 */
export function numericMultiplyMany(values: (number | string)[]): number {
  if (values.length === 0) return 0;
  return values.slice(1).reduce(
    (product: number, value) => currency(product).multiply(value).value,
    currency(values[0]).value,
  );
}

/**
 * Numeric utilities object
 *
 * @example
 * ```ts
 * import { numeric } from '@bosinc/shared';
 *
 * numeric.add(100, 50)      // 150
 * numeric.subtract(100, 30) // 70
 * numeric.addMany([1,2,3])  // 6
 * ```
 */
export const numeric = {
  add: numericAdd,
  subtract: numericSubtract,
  multiply: numericMultiply,
  divide: numericDivide,
  format: numericFormat,
  addMany: numericAddMany,
  subtractMany: numericSubtractMany,
  multiplyMany: numericMultiplyMany,
};

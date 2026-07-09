/**
 * Type guard that checks whether a value is a string.
 *
 * @param value - Value to check
 * @returns True if value is a string
 *
 * @example
 * ```ts
 * isString('foo') // true
 * isString(42)    // false
 * ```
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

/**
 * Type guard that checks whether a value is `null`.
 *
 * @param value - Value to check
 * @returns True if value is `null`
 *
 * @example
 * ```ts
 * isNull(null)       // true
 * isNull(undefined)  // false
 * ```
 */
export function isNull(value: unknown): value is null {
  return value === null;
}

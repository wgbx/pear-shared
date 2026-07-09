/**
 * Type guard that checks whether a value is `undefined`.
 *
 * @param value - Value to check
 * @returns True if value is `undefined`
 *
 * @example
 * ```ts
 * isUndefined(undefined) // true
 * isUndefined(null)      // false
 * ```
 */
export function isUndefined(value: unknown): value is undefined {
  return value === undefined;
}

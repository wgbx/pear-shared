/**
 * Type guard that checks whether a value is a function.
 *
 * @param value - Value to check
 * @returns True if value is a function
 *
 * @example
 * ```ts
 * isFunction(() => {}) // true
 * isFunction('foo')    // false
 * ```
 */
export function isFunction(
  value: unknown,
): value is (...args: unknown[]) => unknown {
  return typeof value === 'function';
}

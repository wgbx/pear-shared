/**
 * Check whether code is running in a browser environment.
 *
 * @returns True when `window` and `navigator` are available
 *
 * @example
 * ```ts
 * isBrowser() // true in browser, false in SSR/Node
 * ```
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof navigator !== 'undefined';
}

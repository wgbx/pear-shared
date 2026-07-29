/**
 * Type guard that checks whether a value is a plain object.
 *
 * Returns `true` only for plain objects created by `{}` / `Object.create(null)`.
 * Arrays, `null`, dates, and other object-like values return `false`.
 *
 * @param value - Value to check
 * @returns True if value is a plain object
 *
 * @example
 * ```ts
 * isObject({})           // true
 * isObject({ a: 1 })     // true
 * isObject([])           // false
 * isObject(null)         // false
 * isObject(new Date())   // false
 * ```
 */
export function isObject(value: unknown): value is Record<string, unknown> {
  return Object.prototype.toString.call(value) === '[object Object]';
}

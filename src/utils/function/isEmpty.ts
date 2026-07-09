import { isNil } from './isNil';
import { isString } from './isString';

/**
 * Check whether a value is empty.
 *
 * Returns `true` for `null`, `undefined`, empty strings, empty arrays,
 * and plain objects with no own keys.
 *
 * @remarks
 * `null` and `undefined` are treated as empty here (via {@link isNil}).
 * This differs from Ramda's `isEmpty`, which returns `false` for `null` and
 * `undefined`. Use {@link isNil} when you only need to check for missing
 * values without treating `''`, `[]`, or `{}` as empty.
 *
 * @param value - Value to check
 * @returns True when the value is considered empty
 *
 * @example
 * ```ts
 * isEmpty(null)        // true
 * isEmpty(undefined)   // true
 * isEmpty('')          // true
 * isEmpty([])          // true
 * isEmpty({})          // true
 * isEmpty(0)           // false
 * isEmpty(new Date())  // false
 * ```
 */
export function isEmpty(value: unknown): boolean {
  if (isNil(value)) {
    return true;
  }

  if (isString(value) || Array.isArray(value)) {
    return value.length === 0;
  }

  if (Object.prototype.toString.call(value) === '[object Object]') {
    return Object.keys(value as Record<string, unknown>).length === 0;
  }

  return false;
}

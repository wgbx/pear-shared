import { isNull } from './isNull';
import { isUndefined } from './isUndefined';

/**
 * Type guard that checks whether a value is `null` or `undefined`.
 *
 * @param value - Value to check
 * @returns True if value is `null` or `undefined`
 *
 * @example
 * ```ts
 * isNil(null)       // true
 * isNil(undefined)  // true
 * isNil(0)          // false
 * isNil('')         // false
 * isNil(false)      // false
 * ```
 */
export function isNil(value: unknown): value is null | undefined {
  return isNull(value) || isUndefined(value);
}

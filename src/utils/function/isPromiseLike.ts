import { isFunction } from './isFunction';

/**
 * Type guard that checks whether a value is thenable (promise-like).
 *
 * @param value - Value to check
 * @returns True if value has a callable `then` method
 *
 * @example
 * ```ts
 * isPromiseLike(Promise.resolve(1))      // true
 * isPromiseLike({ then: (cb) => cb(1) }) // true
 * isPromiseLike(42)                      // false
 * ```
 */
export function isPromiseLike<T = unknown>(
  value: unknown,
): value is PromiseLike<T> {
  return (
    typeof value === 'object' &&
    value !== null &&
    isFunction((value as PromiseLike<T>).then)
  );
}

/**
 * Extracts the fulfilled value from a {@link PromiseSettledResult}.
 * Returns `undefined` when the promise was rejected.
 *
 * @param result - Result from `Promise.allSettled`
 * @returns Fulfilled value, or `undefined` if rejected
 *
 * @example
 * ```ts
 * const [user] = await Promise.allSettled([fetchUser(id)]);
 * const userData = getSettledResultValue(user); // User | undefined
 * ```
 */
export function getSettledResultValue<T>(result: PromiseSettledResult<T>) {
  return result.status === 'fulfilled' ? result.value : undefined;
}

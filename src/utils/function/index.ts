export function isFunction(value: unknown): value is (...args: unknown[]) => unknown {
  return typeof value === 'function';
}

export function isPromiseLike<T = unknown>(
  value: unknown,
): value is PromiseLike<T> {
  return (
    typeof value === 'object' &&
    value !== null &&
    isFunction((value as PromiseLike<T>).then)
  );
}

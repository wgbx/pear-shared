import { isBrowser } from './isBrowser';

/**
 * Check whether the current device is running Android.
 *
 * @returns True when running on Android
 *
 * @example
 * ```ts
 * isAndroid() // true on Android phones and tablets
 * ```
 */
export function isAndroid(): boolean {
  if (!isBrowser()) {
    return false;
  }

  return /Android/i.test(navigator.userAgent);
}

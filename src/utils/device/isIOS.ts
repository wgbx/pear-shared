import { isBrowser } from './isBrowser';
import { isIPad } from './isIPad';

/**
 * Check whether the current device is running iOS (iPhone, iPod, or iPad).
 *
 * @returns True when running on iOS
 *
 * @example
 * ```ts
 * isIOS() // true on iPhone, iPod, or iPad
 * ```
 */
export function isIOS(): boolean {
  if (!isBrowser()) {
    return false;
  }

  return /iPhone|iPod/i.test(navigator.userAgent) || isIPad();
}

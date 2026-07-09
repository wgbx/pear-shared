import { isBrowser } from './isBrowser';

/**
 * Check whether the current device is an iPad.
 *
 * Includes iPadOS 13+ devices that report as Macintosh in the user agent.
 *
 * @returns True when running on iPad
 *
 * @example
 * ```ts
 * isIPad() // true on iPad
 * ```
 */
export function isIPad(): boolean {
  if (!isBrowser()) {
    return false;
  }

  if (/iPad/i.test(navigator.userAgent)) {
    return true;
  }

  // iPadOS 13+ reports as Macintosh in UA instead of iPad.
  return /Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints > 1;
}

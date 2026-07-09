import { isBrowser } from './isBrowser';

/**
 * Check whether the current browser is Safari (excluding Chrome, Firefox, Edge, etc.).
 *
 * @returns True when running in Safari
 *
 * @example
 * ```ts
 * isSafari() // true in desktop/mobile Safari
 * ```
 */
export function isSafari(): boolean {
  if (!isBrowser()) {
    return false;
  }

  const { userAgent } = navigator;

  if (
    /Chrome|Chromium|CriOS|FxiOS|EdgiOS|OPR|Opera|OPiOS|SamsungBrowser/i.test(
      userAgent,
    )
  ) {
    return false;
  }

  return /Safari/i.test(userAgent);
}

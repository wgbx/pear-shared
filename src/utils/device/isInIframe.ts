import { isBrowser } from './isBrowser';

/**
 * Check whether the current page is running inside an iframe.
 *
 * @returns True when the current window is not the top-level window
 *
 * @example
 * ```ts
 * isInIframe() // true when embedded in an iframe, false otherwise or in SSR
 * ```
 */
export function isInIframe(): boolean {
  if (!isBrowser()) {
    return false;
  }

  try {
    return window.self !== window.top;
  } catch {
    // Accessing window.top may throw in some sandboxed cross-origin iframes
    return true;
  }
}

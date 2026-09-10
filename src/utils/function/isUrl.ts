import { isPlausibleDomain } from './isPlausibleDomain';
import { isString } from './isString';

const HAS_SCHEME = /^(https?:\/\/|mailto:)/i;

/**
 * Checks whether a value is an http(s) or mailto URL with a plausible domain.
 * Bare domains like `instagram.com/qiao` are accepted and treated as https.
 * Rejects hosts without a TLD (e.g. `https://213214`) and IP addresses.
 *
 * @param value - Value to check
 * @returns True if value is a valid http(s) or mailto URL
 *
 * @example
 * ```ts
 * isUrl('https://example.com') // true
 * isUrl('instagram.com/qiao')  // true
 * isUrl('mailto:a@b.com')      // true
 * isUrl('https://213214')      // false
 * isUrl('not a url')           // false
 * ```
 */
export function isUrl(value: unknown): boolean {
  if (!isString(value)) {
    return false;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return false;
  }

  try {
    const candidate = HAS_SCHEME.test(trimmed) ? trimmed : `https://${trimmed}`;
    const url = new URL(candidate);

    if (url.protocol === 'mailto:') {
      // pathname is the address; require a basic local@domain shape
      const address = decodeURIComponent(url.pathname);
      const at = address.lastIndexOf('@');
      if (at <= 0 || at === address.length - 1) {
        return false;
      }
      return isPlausibleDomain(address.slice(at + 1));
    }

    return (
      (url.protocol === 'http:' || url.protocol === 'https:') &&
      isPlausibleDomain(url.hostname)
    );
  } catch {
    return false;
  }
}

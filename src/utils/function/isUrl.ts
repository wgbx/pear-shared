import { isString } from './isString';

const HAS_SCHEME = /^(https?:\/\/|mailto:)/i;
const IPV4 = /^(?:\d{1,3}\.){3}\d{1,3}$/;
/** DNS label: 1–63 chars, alnum, hyphens not at ends. */
const DOMAIN_LABEL = /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)$/i;
/** Public TLD: at least 2 letters (rejects numeric / single-char). */
const TLD = /^[a-z]{2,}$/i;

/**
 * Hostname must look like a domain (`example.com`), not a bare label,
 * numeric host, or IP address.
 */
function isPlausibleDomainHostname(hostname: string): boolean {
  if (!hostname || hostname.includes(':') || IPV4.test(hostname)) {
    return false;
  }

  const labels = hostname.split('.');
  if (labels.length < 2) {
    return false;
  }

  const tld = labels[labels.length - 1];
  if (!TLD.test(tld)) {
    return false;
  }

  return labels.every((label) => DOMAIN_LABEL.test(label));
}

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
      return isPlausibleDomainHostname(address.slice(at + 1));
    }

    return (
      (url.protocol === 'http:' || url.protocol === 'https:') &&
      isPlausibleDomainHostname(url.hostname)
    );
  } catch {
    return false;
  }
}

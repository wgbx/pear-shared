import { isPlausibleDomain } from './isPlausibleDomain';
import { isString } from './isString';

/** HTML living standard–style local-part characters. */
const LOCAL_PART = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+$/;
const MAX_LOCAL_LENGTH = 64;

/**
 * Checks whether a value looks like a practical email address.
 * Validates a common local-part shape and a plausible domain (same rules as {@link isUrl}).
 * Not a full RFC 5322 parser — use verification email for deliverability.
 *
 * @param value - Value to check
 * @returns True if value looks like a valid email
 *
 * @example
 * ```ts
 * isEmail('user@example.com')     // true
 * isEmail('user+tag@example.com') // true
 * isEmail('not-an-email')         // false
 * isEmail('user@localhost')       // false
 * ```
 */
export function isEmail(value: unknown): boolean {
  if (!isString(value)) {
    return false;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return false;
  }

  const at = trimmed.lastIndexOf('@');
  if (at <= 0 || at === trimmed.length - 1) {
    return false;
  }

  const local = trimmed.slice(0, at);
  const domain = trimmed.slice(at + 1);

  if (local.length > MAX_LOCAL_LENGTH || !LOCAL_PART.test(local)) {
    return false;
  }

  // Reject leading/trailing or consecutive dots in local-part
  if (local.startsWith('.') || local.endsWith('.') || local.includes('..')) {
    return false;
  }

  return isPlausibleDomain(domain);
}

const IPV4 = /^(?:\d{1,3}\.){3}\d{1,3}$/;
/** DNS label: 1–63 chars, alnum, hyphens not at ends. */
const DOMAIN_LABEL = /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)$/i;
/** Public TLD: at least 2 letters (rejects numeric / single-char). */
const TLD = /^[a-z]{2,}$/i;

/**
 * Hostname must look like a domain (`example.com`), not a bare label,
 * numeric host, or IP address.
 */
export function isPlausibleDomain(hostname: string): boolean {
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

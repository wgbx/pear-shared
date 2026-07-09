/**
 * Get the local IANA timezone ID (e.g. `America/Los_Angeles`).
 *
 * @returns IANA timezone string, or `'UTC'` when unavailable
 *
 * @example
 * ```ts
 * getLocalTimezone() // 'Asia/Shanghai'
 * ```
 */
export function getLocalTimezone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
}

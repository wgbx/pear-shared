function getTimeZoneName(
  date: Date,
  timeZone: string,
  timeZoneName: 'short' | 'long',
): string {
  return (
    new Intl.DateTimeFormat('en-US', {
      timeZone,
      timeZoneName,
    })
      .formatToParts(date)
      .find((part) => part.type === 'timeZoneName')?.value ?? ''
  );
}

function isGmtOffset(value: string): boolean {
  return /^(?:GMT|UTC)?[+-]/.test(value) || value.startsWith('GMT');
}

/**
 * Get a short timezone abbreviation for display, e.g. `EDT`, `PDT`.
 *
 * `date-fns-tz` `zzz` can fall back to `GMT-4` depending on ICU data.
 * This helper prefers a named abbreviation:
 * - `en-US` short name when it is not a GMT offset
 * - otherwise initials of the long English name (`Eastern Daylight Time` → `EDT`)
 */
export function getTimeZoneAbbr(date: Date, timeZone: string): string {
  if (timeZone === 'UTC' || timeZone === 'Etc/UTC') {
    return 'UTC';
  }

  const shortName = getTimeZoneName(date, timeZone, 'short');

  if (shortName && !isGmtOffset(shortName)) {
    return shortName;
  }

  const longName = getTimeZoneName(date, timeZone, 'long');
  const initials = longName
    .split(/\s+/)
    .filter((word) => /^[A-Za-z]/.test(word))
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  return initials || shortName || timeZone;
}

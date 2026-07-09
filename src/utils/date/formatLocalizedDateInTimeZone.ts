import { formatInTimeZone } from 'date-fns-tz';

import { DEFAULT_FORMAT_LOCALIZED_DATE_IN_TIMEZONE_OPTIONS } from './defaults';
import { toDate } from './toDate';
import type { DateInput, FormatLocalizedDateInTimeZoneOptions } from './types';

/**
 * Format a date with a locale-aware date and timezone abbreviation.
 * Returns `''` for invalid input. Requires `date-fns-tz` for the abbreviation.
 *
 * @param value - Date value to format
 * @param options - Locale and timezone options
 * @returns Formatted date string such as `06/10/2026 (PDT)`
 *
 * @example
 * ```ts
 * import { formatLocalizedDateInTimeZone } from '@bosinc/shared';
 *
 * formatLocalizedDateInTimeZone('2026-06-10T12:00:00Z'); // default locale + America/Los_Angeles
 * formatLocalizedDateInTimeZone('2026-06-10T12:00:00Z', { locale: 'en-US' }); // '06/10/2026 (PDT)'
 * ```
 */
export function formatLocalizedDateInTimeZone(
  value: DateInput,
  options?: FormatLocalizedDateInTimeZoneOptions,
): string {
  const { locale, timeZone } = {
    ...DEFAULT_FORMAT_LOCALIZED_DATE_IN_TIMEZONE_OPTIONS,
    ...options,
  };
  const date = toDate(value);

  if (!date) {
    return '';
  }

  const dateStr = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone,
  }).format(date);

  const abbr = formatInTimeZone(date, timeZone, 'zzz');

  return `${dateStr} (${abbr})`;
}

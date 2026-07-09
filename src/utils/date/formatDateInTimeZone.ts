import { formatInTimeZone } from 'date-fns-tz';

import { DEFAULT_FORMAT_DATE_IN_TIMEZONE_OPTIONS } from './defaults';
import { toDate } from './toDate';
import type { DateInput, FormatDateInTimeZoneOptions } from './types';

/**
 * Format a date in a specific IANA timezone. Returns `''` for invalid input.
 *
 * @param value - Date value to format
 * @param options - Format and timezone options
 * @returns Formatted date string in the given timezone
 *
 * @example
 * ```ts
 * import { formatDateInTimeZone, TIMEZONE } from '@bosinc/shared';
 *
 * formatDateInTimeZone('2025-03-09T14:30:00Z') // default PST + DATETIME
 * formatDateInTimeZone('2025-03-09T14:30:00Z', {
 *   timeZone: TIMEZONE.AMERICA_LOS_ANGELES,
 * })
 * ```
 */
export function formatDateInTimeZone(
  value: DateInput,
  options?: FormatDateInTimeZoneOptions,
): string {
  const { format: formatStr, timeZone } = {
    ...DEFAULT_FORMAT_DATE_IN_TIMEZONE_OPTIONS,
    ...options,
  };
  const date = toDate(value);

  if (!date) {
    return '';
  }

  return formatInTimeZone(date, timeZone, formatStr);
}

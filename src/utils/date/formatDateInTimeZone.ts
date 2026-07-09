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
 * import { DATE_FORMAT, formatDateInTimeZone } from '@bosinc/shared';
 *
 * formatDateInTimeZone('2025-03-09T14:30:00Z') // default America/Los_Angeles + DATETIME
 * formatDateInTimeZone('2026-06-10T12:00:00Z', {
 *   format: DATE_FORMAT.SLASH_DATE_WITH_TZ,
 * }) // '2026/06/10 (PDT)'
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

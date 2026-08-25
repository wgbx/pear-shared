import { formatInTimeZone } from 'date-fns-tz';

import { isNil } from '../function/isNil';
import { DATE_FORMAT } from './constants';
import { DEFAULT_FORMAT_DATE_TIME_DISPLAY_OPTIONS } from './defaults';
import { getTimeZoneAbbr } from './getTimeZoneAbbr';
import { toDate } from './toDate';
import type { FormatDateTimeDisplayOptions } from './types';

function formatPart(date: Date, timeZone: string): string {
  return formatInTimeZone(date, timeZone, DATE_FORMAT.MONTH_DAY_YEAR_TIME);
}

/**
 * Format a `Date` for display in the given timezone. Invalid or missing input
 * returns `''`.
 *
 * @param value - Start date to format
 * @param options - Display options
 * @returns Formatted display string
 *
 * @example
 * ```ts
 * import { formatDateTimeDisplay, TIMEZONE_MAP } from '@bosinc/shared';
 *
 * formatDateTimeDisplay(new Date('2026-09-22T18:00:00Z'), {
 *   timeZone: TIMEZONE_MAP.AMERICA_LOS_ANGELES,
 * })
 * // 'Sep 22, 2026 11:00AM (PDT)'
 *
 * formatDateTimeDisplay(new Date('2026-09-22T18:00:00Z'), {
 *   end: new Date('2026-09-22T20:00:00Z'),
 *   timeZone: TIMEZONE_MAP.AMERICA_LOS_ANGELES,
 * })
 * // 'Sep 22, 2026 11:00AM - Sep 22, 2026 1:00PM (PDT)'
 * ```
 */
export function formatDateTimeDisplay(
  value?: Date | null,
  options?: FormatDateTimeDisplayOptions,
): string {
  if (isNil(value)) {
    return '';
  }

  const { end, timeZone } = {
    ...DEFAULT_FORMAT_DATE_TIME_DISPLAY_OPTIONS,
    ...options,
  };

  const startDate = toDate(value);

  if (!startDate) {
    return '';
  }

  let result = formatPart(startDate, timeZone);

  if (!isNil(end)) {
    const endDate = toDate(end);

    if (endDate) {
      const endStr = formatPart(endDate, timeZone);

      if (endStr !== result) {
        result = `${result} - ${endStr}`;
      }
    }
  }

  return `${result} (${getTimeZoneAbbr(startDate, timeZone)})`;
}

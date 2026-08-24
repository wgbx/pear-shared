import { formatInTimeZone } from 'date-fns-tz';

import { DEFAULT_FORMAT_DATE_TIME_DISPLAY_OPTIONS } from './defaults';
import { toDate } from './toDate';
import type { FormatDateTimeDisplayOptions } from './types';

function formatPart(value: Date, formatStr: string, timeZone: string): string {
  const date = toDate(value);

  if (!date) {
    return '';
  }

  return formatInTimeZone(date, timeZone, formatStr);
}

/**
 * Format an instant for display. Only `Date` input is supported. Invalid or
 * missing input returns `''`.
 *
 * If your business logic starts with an ISO string, convert it to `Date`
 * before calling this method.
 *
 * @param value - Start date to format
 * @param options - Display options
 * @returns Formatted display string
 *
 * @example
 * ```ts
 * import {
 *   formatDateTimeDisplay,
 *   TIMEZONE,
 * } from '@bosinc/shared';
 *
 * formatDateTimeDisplay(new Date('2026-09-22T18:00:00Z'), {
 *   timeZone: TIMEZONE.AMERICA_LOS_ANGELES,
 * })
 * // 'Sep 22, 2026 11:00AM (PDT)'
 *
 * formatDateTimeDisplay(new Date('2026-09-22T18:00:00Z'), {
 *   end: new Date('2026-09-22T20:00:00Z'),
 *   timeZone: TIMEZONE.AMERICA_LOS_ANGELES,
 * })
 * // 'Sep 22, 2026 11:00AM - Sep 22, 2026 1:00PM (PDT)'
 * ```
 */
export function formatDateTimeDisplay(
  value?: Date | null,
  options?: FormatDateTimeDisplayOptions,
): string {
  if (value === null || value === undefined) {
    return '';
  }

  const {
    end,
    timeZone,
    hideTimezone,
    format: timeFormat,
  } = {
    ...DEFAULT_FORMAT_DATE_TIME_DISPLAY_OPTIONS,
    ...options,
  };
  const startDate = toDate(value);

  const startStr = formatPart(value, timeFormat, timeZone);

  if (!startStr) {
    return '';
  }

  let result = startStr;

  if (end !== null && end !== undefined) {
    const endStr = formatPart(end, timeFormat, timeZone);

    if (endStr && endStr !== startStr) {
      result = `${startStr} - ${endStr}`;
    }
  }

  if (hideTimezone) {
    return result;
  }

  if (!startDate) {
    return result;
  }

  return `${result} (${formatInTimeZone(startDate, timeZone, 'zzz')})`;
}

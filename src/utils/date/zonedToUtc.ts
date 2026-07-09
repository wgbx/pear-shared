import { zonedTimeToUtc } from 'date-fns-tz';

import { DEFAULT_ZONED_DATE_OPTIONS } from './defaults';
import { toDate } from './toDate';
import type { DateInput, ZonedDateOptions } from './types';

/**
 * Convert a date interpreted in a timezone to UTC.
 *
 * @param value - Local date/time in the given timezone
 * @param options - Timezone options
 * @returns UTC `Date`, or `null` when input is invalid
 *
 * @example
 * ```ts
 * import { zonedToUtc, TIMEZONE } from '@bosinc/shared';
 *
 * zonedToUtc('2025-03-09 14:30')
 * zonedToUtc('2025-03-09 14:30', { timeZone: TIMEZONE.ASIA_SHANGHAI })
 * ```
 */
export function zonedToUtc(
  value: DateInput,
  options?: ZonedDateOptions,
): Date | null {
  const { timeZone } = {
    ...DEFAULT_ZONED_DATE_OPTIONS,
    ...options,
  };
  const date = toDate(value);

  if (!date) {
    return null;
  }

  return zonedTimeToUtc(date, timeZone);
}

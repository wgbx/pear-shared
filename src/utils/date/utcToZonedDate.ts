import { utcToZonedTime } from 'date-fns-tz';

import { DEFAULT_ZONED_DATE_OPTIONS } from './defaults';
import { toDate } from './toDate';
import type { DateInput, ZonedDateOptions } from './types';

/**
 * Convert a UTC date to a `Date` representing local time in the target timezone.
 *
 * @param value - UTC date input
 * @param options - Timezone options
 * @returns Zoned `Date`, or `null` when input is invalid
 *
 * @example
 * ```ts
 * import { utcToZonedDate, TIMEZONE } from '@bosinc/shared';
 *
 * utcToZonedDate('2025-03-09T14:30:00Z')
 * utcToZonedDate('2025-03-09T14:30:00Z', { timeZone: TIMEZONE.AMERICA_LOS_ANGELES })
 * ```
 */
export function utcToZonedDate(
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

  return utcToZonedTime(date, timeZone);
}

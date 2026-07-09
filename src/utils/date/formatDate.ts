import { format } from 'date-fns';

import { DEFAULT_FORMAT_DATE_OPTIONS } from './defaults';
import { toDate } from './toDate';
import type { DateInput, FormatDateOptions } from './types';

/**
 * Format a date with a date-fns pattern. Returns an empty string for invalid input.
 *
 * @param value - Date value to format
 * @param options - Format options
 * @returns Formatted date string
 *
 * @example
 * ```ts
 * import { DATE_FORMAT, formatDate } from '@bosinc/shared';
 *
 * formatDate('2025-03-09') // uses DATE_FORMAT.DATETIME
 * formatDate('2025-03-09', { format: DATE_FORMAT.ISO_DATE }) // '2025-03-09'
 * ```
 */
export function formatDate(
  value: DateInput,
  options?: FormatDateOptions,
): string {
  const { format: formatStr } = {
    ...DEFAULT_FORMAT_DATE_OPTIONS,
    ...options,
  };
  const date = toDate(value);

  if (!date) {
    return '';
  }

  return format(date, formatStr);
}

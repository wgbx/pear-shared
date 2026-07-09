import { isValid } from 'date-fns';

import type { DateInput } from './types';

/**
 * Normalize a date input into a valid `Date`, or `null` when invalid.
 */
export function toDate(value: DateInput): Date | null {
  const date = value instanceof Date ? value : new Date(value);

  return isValid(date) ? date : null;
}

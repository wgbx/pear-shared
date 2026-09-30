import { describe, expect, it } from 'vitest';

import { DATE_FORMAT } from './constants';
import { formatDate } from './formatDate';

describe('formatDate', () => {
  it('uses DATE_FORMAT.DATETIME by default', () => {
    expect(formatDate('2025-03-09T14:30:00Z')).toBe('2025-03-09 14:30');
  });

  it('accepts a custom format', () => {
    expect(
      formatDate('2025-03-09T14:30:45Z', {
        format: DATE_FORMAT.DATETIME_SECONDS,
      }),
    ).toBe('2025-03-09 14:30:45');
    expect(
      formatDate(new Date('2025-03-09T14:30:00Z'), {
        format: DATE_FORMAT.MONTH_DAY_YEAR,
      }),
    ).toBe('Mar 09, 2025');
  });

  it('returns an empty string for invalid input', () => {
    expect(formatDate('not-a-date')).toBe('');
  });
});

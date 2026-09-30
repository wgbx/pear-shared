import { describe, expect, it } from 'vitest';

import { DATE_FORMAT, TIMEZONE_MAP } from './constants';
import { formatDateInTimeZone } from './formatDateInTimeZone';

describe('formatDateInTimeZone', () => {
  it('defaults to America/Los_Angeles and DATE_FORMAT.DATETIME', () => {
    expect(formatDateInTimeZone('2025-01-15T20:00:00Z')).toBe(
      '2025-01-15 12:00',
    );
  });

  it('handles the DST switch', () => {
    // US DST started 2025-03-09 at 02:00 local (10:00 UTC).
    expect(formatDateInTimeZone('2025-03-09T09:59:00Z')).toBe(
      '2025-03-09 01:59',
    );
    expect(formatDateInTimeZone('2025-03-09T10:00:00Z')).toBe(
      '2025-03-09 03:00',
    );
  });

  it('accepts a custom timezone and format', () => {
    expect(
      formatDateInTimeZone('2025-03-09T20:00:00Z', {
        timeZone: TIMEZONE_MAP.ASIA_SHANGHAI,
        format: DATE_FORMAT.ISO_DATE,
      }),
    ).toBe('2025-03-10');
  });

  it('renders the timezone abbreviation', () => {
    expect(
      formatDateInTimeZone('2026-06-10T12:00:00Z', {
        format: DATE_FORMAT.SLASH_DATE_WITH_TZ,
      }),
    ).toBe('06/10/2026 (PDT)');
  });

  it('returns an empty string for invalid input', () => {
    expect(formatDateInTimeZone('not-a-date')).toBe('');
  });
});

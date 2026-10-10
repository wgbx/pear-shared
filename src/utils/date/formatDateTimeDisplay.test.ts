import { describe, expect, it } from 'vitest';

import { TIMEZONE_MAP } from './constants';
import { formatDateTimeDisplay } from './formatDateTimeDisplay';

const start = new Date('2026-09-22T18:00:00Z');
const end = new Date('2026-09-22T20:00:00Z');

describe('formatDateTimeDisplay', () => {
  it('defaults to DEFAULT_TIMEZONE', () => {
    expect(formatDateTimeDisplay(start)).toBe('Sep 22, 2026 11:00AM (PDT)');
  });

  it('formats a single value in the given timezone', () => {
    expect(
      formatDateTimeDisplay(start, {
        timeZone: TIMEZONE_MAP.AMERICA_LOS_ANGELES,
      }),
    ).toBe('Sep 22, 2026 11:00AM (PDT)');
  });

  it('formats a range', () => {
    expect(
      formatDateTimeDisplay(start, {
        end,
        timeZone: TIMEZONE_MAP.AMERICA_LOS_ANGELES,
      }),
    ).toBe('Sep 22, 2026 11:00AM - Sep 22, 2026 1:00PM (PDT)');
  });

  it('collapses identical start and end', () => {
    expect(formatDateTimeDisplay(start, { end: new Date(start) })).toBe(
      'Sep 22, 2026 11:00AM (PDT)',
    );
  });

  it('ignores a null or invalid end', () => {
    expect(formatDateTimeDisplay(start, { end: null })).toBe(
      'Sep 22, 2026 11:00AM (PDT)',
    );
    expect(formatDateTimeDisplay(start, { end: new Date('invalid') })).toBe(
      'Sep 22, 2026 11:00AM (PDT)',
    );
  });

  it('returns an empty string for missing or invalid input', () => {
    expect(formatDateTimeDisplay()).toBe('');
    expect(formatDateTimeDisplay(null)).toBe('');
    expect(formatDateTimeDisplay(new Date('invalid'))).toBe('');
  });
});

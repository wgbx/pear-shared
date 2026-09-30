import { describe, expect, it } from 'vitest';

import { TIMEZONE_MAP } from './constants';
import { getLocalTimezone } from './getLocalTimezone';
import { utcToZonedDate } from './utcToZonedDate';
import { zonedToUtc } from './zonedToUtc';

describe('utcToZonedDate', () => {
  it('shifts wall-clock time to America/Los_Angeles by default', () => {
    expect(utcToZonedDate('2025-01-15T20:00:00Z')?.toISOString()).toBe(
      '2025-01-15T12:00:00.000Z',
    );
  });

  it('accepts a custom timezone', () => {
    expect(
      utcToZonedDate('2025-01-15T20:00:00Z', {
        timeZone: TIMEZONE_MAP.ASIA_SHANGHAI,
      })?.toISOString(),
    ).toBe('2025-01-16T04:00:00.000Z');
  });

  it('returns null for invalid input', () => {
    expect(utcToZonedDate('not-a-date')).toBeNull();
  });
});

describe('zonedToUtc', () => {
  it('interprets wall-clock time as America/Los_Angeles by default', () => {
    expect(zonedToUtc('2025-01-15 12:00')?.toISOString()).toBe(
      '2025-01-15T20:00:00.000Z',
    );
  });

  it('accepts a custom timezone', () => {
    expect(
      zonedToUtc('2025-03-09 14:30', {
        timeZone: TIMEZONE_MAP.ASIA_SHANGHAI,
      })?.toISOString(),
    ).toBe('2025-03-09T06:30:00.000Z');
  });

  it('round-trips with utcToZonedDate', () => {
    const utc = '2025-07-04T18:45:00.000Z';
    const zoned = utcToZonedDate(utc);

    expect(zoned && zonedToUtc(zoned)?.toISOString()).toBe(utc);
  });

  it('returns null for invalid input', () => {
    expect(zonedToUtc('not-a-date')).toBeNull();
  });
});

describe('getLocalTimezone', () => {
  it('returns the process timezone', () => {
    expect(getLocalTimezone()).toBe('UTC');
  });
});

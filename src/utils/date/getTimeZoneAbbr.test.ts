import { describe, expect, it } from 'vitest';

import { TIMEZONE_MAP } from './constants';
import { getTimeZoneAbbr } from './getTimeZoneAbbr';

const summer = new Date('2026-07-01T12:00:00Z');
const winter = new Date('2026-01-15T12:00:00Z');

describe('getTimeZoneAbbr', () => {
  it('returns UTC for UTC aliases', () => {
    expect(getTimeZoneAbbr(summer, 'UTC')).toBe('UTC');
    expect(getTimeZoneAbbr(summer, 'Etc/UTC')).toBe('UTC');
  });

  it('distinguishes daylight and standard time', () => {
    expect(getTimeZoneAbbr(summer, TIMEZONE_MAP.AMERICA_LOS_ANGELES)).toBe(
      'PDT',
    );
    expect(getTimeZoneAbbr(winter, TIMEZONE_MAP.AMERICA_LOS_ANGELES)).toBe(
      'PST',
    );
    expect(getTimeZoneAbbr(summer, TIMEZONE_MAP.AMERICA_NEW_YORK)).toBe('EDT');
    expect(getTimeZoneAbbr(winter, TIMEZONE_MAP.AMERICA_NEW_YORK)).toBe('EST');
  });

  it('derives initials when the short name is a GMT offset', () => {
    expect(getTimeZoneAbbr(summer, TIMEZONE_MAP.ASIA_SHANGHAI)).toBe('CST');
  });
});

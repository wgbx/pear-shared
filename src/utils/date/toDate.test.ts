import { describe, expect, it } from 'vitest';

import { toDate } from './toDate';

describe('toDate', () => {
  it('returns the same Date instance when valid', () => {
    const date = new Date('2025-03-09T14:30:00Z');

    expect(toDate(date)).toBe(date);
  });

  it('parses ISO strings and timestamps', () => {
    expect(toDate('2025-03-09T14:30:00Z')?.toISOString()).toBe(
      '2025-03-09T14:30:00.000Z',
    );
    expect(toDate(0)?.toISOString()).toBe('1970-01-01T00:00:00.000Z');
  });

  it('returns null for invalid input', () => {
    expect(toDate('not-a-date')).toBeNull();
    expect(toDate('')).toBeNull();
    expect(toDate(NaN)).toBeNull();
    expect(toDate(new Date('invalid'))).toBeNull();
  });
});

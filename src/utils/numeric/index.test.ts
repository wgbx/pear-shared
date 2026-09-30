import { describe, expect, it } from 'vitest';

import {
  numeric,
  numericAdd,
  numericAddMany,
  numericDivide,
  numericFormat,
  numericMultiply,
  numericMultiplyMany,
  numericSubtract,
  numericSubtractMany,
} from './index';

describe('numericAdd', () => {
  it('adds numbers and numeric strings', () => {
    expect(numericAdd(100, 50)).toBe(150);
    expect(numericAdd('99.99', '0.01')).toBe(100);
  });

  it('avoids floating-point drift', () => {
    expect(numericAdd(0.1, 0.2)).toBe(0.3);
  });
});

describe('numericSubtract', () => {
  it('subtracts numbers and numeric strings', () => {
    expect(numericSubtract(100, 30)).toBe(70);
    expect(numericSubtract('100', '25')).toBe(75);
  });

  it('avoids floating-point drift', () => {
    expect(numericSubtract(0.3, 0.1)).toBe(0.2);
  });
});

describe('numericMultiply', () => {
  it('multiplies and rounds to 2 decimals by default', () => {
    expect(numericMultiply(100, 0.3)).toBe(30);
    expect(numericMultiply('100', '1.5')).toBe(150);
    expect(numericMultiply(100, 0.1234)).toBe(12.34);
  });

  it('respects a custom precision', () => {
    expect(numericMultiply(1000, 0.123456)).toBe(123.46);
    expect(numericMultiply(1000, 0.123456, { precision: 6 })).toBe(123.456);
  });
});

describe('numericDivide', () => {
  it('divides and rounds to 2 decimals by default', () => {
    expect(numericDivide(100, 4)).toBe(25);
    expect(numericDivide('100', '3')).toBe(33.33);
  });

  it('respects a custom precision', () => {
    expect(numericDivide(33.33, 100)).toBe(0.33);
    expect(numericDivide(33.33, 100, { precision: 6 })).toBe(0.3333);
  });

  it('keeps precision through a percentage calculation', () => {
    expect(numericMultiply(1000, numericDivide(1, 3))).toBe(330);

    const rate = numericDivide(1, 3, { precision: 6 });
    const commission = numericMultiply(1000, rate, { precision: 6 });

    expect(rate).toBe(0.333333);
    expect(commission).toBe(333.333);
    expect(numericMultiply(commission, 1)).toBe(333.33);
  });
});

describe('numericFormat', () => {
  it('prefixes a $ symbol by default', () => {
    expect(numericFormat(1234.56)).toBe('$1,234.56');
    expect(numericFormat(1000)).toBe('$1,000.00');
    expect(numericFormat(-12.5)).toBe('-$12.50');
  });

  it('respects a custom precision', () => {
    expect(numericFormat(1234, { symbol: '¥', precision: 0 })).toBe('¥1,234');
    expect(numericFormat(1234.567, { precision: 3 })).toBe('$1,234.567');
  });

  it('parses numeric strings regardless of custom separators', () => {
    expect(
      numericFormat('1234.56', { symbol: '', decimal: ',', separator: '.' }),
    ).toBe('1.234,56');
  });

  it('accepts a custom format function', () => {
    expect(numericFormat(1234.56, (value) => `USD ${value?.value}`)).toBe(
      'USD 1234.56',
    );
  });

  it('uses a custom symbol with thousand separators', () => {
    expect(numericFormat(1234.56, { symbol: '¥' })).toBe('¥1,234.56');
    expect(numericFormat(1000, { symbol: '¥' })).toBe('¥1,000.00');
  });

  it('allows overriding decimal and thousand separators', () => {
    expect(
      numericFormat(1234.56, { symbol: '', decimal: ',', separator: '.' }),
    ).toBe('1.234,56');
  });
});

describe('numericAddMany', () => {
  it('sums all values', () => {
    expect(numericAddMany([1, 2, 3, 4])).toBe(10);
    expect(numericAddMany(['10.5', '20.3'])).toBe(30.8);
    expect(numericAddMany([0.1, 0.2, 0.3])).toBe(0.6);
  });

  it('returns 0 for an empty array', () => {
    expect(numericAddMany([])).toBe(0);
  });
});

describe('numericSubtractMany', () => {
  it('subtracts the rest from the first value', () => {
    expect(numericSubtractMany([100, 20, 5])).toBe(75);
    expect(numericSubtractMany([1, 0.1, 0.2])).toBe(0.7);
  });

  it('returns the value itself for a single-item array', () => {
    expect(numericSubtractMany([42])).toBe(42);
  });

  it('returns 0 for an empty array', () => {
    expect(numericSubtractMany([])).toBe(0);
  });
});

describe('numericMultiplyMany', () => {
  it('multiplies all values', () => {
    expect(numericMultiplyMany([2, 3, 4])).toBe(24);
    expect(numericMultiplyMany([100, 0.5, 0.1])).toBe(5);
    expect(numericMultiplyMany(['1.5', '2'])).toBe(3);
  });

  it('rounds only the final product to 2 decimals', () => {
    expect(numericMultiplyMany([0.004, 1000])).toBe(4);
    expect(numericMultiplyMany([1000, 0.004])).toBe(4);
    expect(numericMultiplyMany([10, 0.333, 3])).toBe(9.99);
    expect(numericMultiplyMany([0.1, 3])).toBe(0.3);
  });

  it('returns 0 for an empty array', () => {
    expect(numericMultiplyMany([])).toBe(0);
  });
});

describe('numeric', () => {
  it('exposes every helper', () => {
    expect(numeric).toEqual({
      add: numericAdd,
      subtract: numericSubtract,
      multiply: numericMultiply,
      divide: numericDivide,
      format: numericFormat,
      addMany: numericAddMany,
      subtractMany: numericSubtractMany,
      multiplyMany: numericMultiplyMany,
    });
  });
});

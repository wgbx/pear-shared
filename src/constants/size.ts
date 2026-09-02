/** Pear Design shared component size scale — largest (48px) to smallest (24px). */
export const UI_SIZE = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
  XSMALL: 'xsmall',
} as const;

export type UiSize = (typeof UI_SIZE)[keyof typeof UI_SIZE];

export const UI_SIZES = [
  UI_SIZE.LARGE,
  UI_SIZE.MEDIUM,
  UI_SIZE.SMALL,
  UI_SIZE.XSMALL,
] as const;

export function isUiSize(size: unknown): size is UiSize {
  return typeof size === 'string' && (UI_SIZES as readonly string[]).includes(size);
}

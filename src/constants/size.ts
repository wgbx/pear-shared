/** Pear Design shared component size scale (Figma L-48 / L-42 / M-32 / S-24). */
export const UI_SIZE = {
  XLARGE: 'xlarge',
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
} as const;

export type UiSize = (typeof UI_SIZE)[keyof typeof UI_SIZE];

export const UI_SIZES = [
  UI_SIZE.XLARGE,
  UI_SIZE.LARGE,
  UI_SIZE.MEDIUM,
  UI_SIZE.SMALL,
] as const;

export function isUiSize(size: unknown): size is UiSize {
  return typeof size === 'string' && (UI_SIZES as readonly string[]).includes(size);
}

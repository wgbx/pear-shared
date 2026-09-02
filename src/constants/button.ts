import {
  UI_SIZE,
  type UiSize,
  isUiSize,
} from './size';

/** Pear Design Btn-CTA appearance (Figma Primary / No Border). */
export const BUTTON_APPEARANCE = {
  PRIMARY: 'primary',
  GHOST: 'ghost',
  OUTLINE: 'outline',
} as const;

export type ButtonAppearance =
  (typeof BUTTON_APPEARANCE)[keyof typeof BUTTON_APPEARANCE];

export const BUTTON_APPEARANCES = [
  BUTTON_APPEARANCE.PRIMARY,
  BUTTON_APPEARANCE.GHOST,
  BUTTON_APPEARANCE.OUTLINE,
] as const;

/** Internal Figma Btn-CTA size tokens. */
export const BUTTON_SIZE_TOKEN = {
  L48: 'l48',
  L42: 'l42',
  M32: 'm32',
  S24: 's24',
} as const;

export type ButtonSizeToken =
  (typeof BUTTON_SIZE_TOKEN)[keyof typeof BUTTON_SIZE_TOKEN];

export const UI_SIZE_TO_BUTTON_TOKEN: Record<UiSize, ButtonSizeToken> = {
  [UI_SIZE.LARGE]: BUTTON_SIZE_TOKEN.L48,
  [UI_SIZE.MEDIUM]: BUTTON_SIZE_TOKEN.L42,
  [UI_SIZE.SMALL]: BUTTON_SIZE_TOKEN.M32,
  [UI_SIZE.XSMALL]: BUTTON_SIZE_TOKEN.S24,
};

export interface ButtonSizeConfig {
  height: number;
  paddingX: number;
  paddingY?: number;
  borderRadius: number;
  gap: number;
  iconSize: number;
  fontSize: number;
  fontWeight: number;
  loadingSize: number;
}

export const BUTTON_SIZE_CONFIG: Record<ButtonSizeToken, ButtonSizeConfig> = {
  [BUTTON_SIZE_TOKEN.L48]: {
    height: 48,
    paddingX: 40,
    paddingY: 12,
    borderRadius: 1.5,
    gap: 8,
    iconSize: 24,
    fontSize: 16,
    fontWeight: 600,
    loadingSize: 20,
  },
  [BUTTON_SIZE_TOKEN.L42]: {
    height: 42,
    paddingX: 24,
    borderRadius: 1.25,
    gap: 8,
    iconSize: 20,
    fontSize: 14,
    fontWeight: 700,
    loadingSize: 18,
  },
  [BUTTON_SIZE_TOKEN.M32]: {
    height: 32,
    paddingX: 12,
    paddingY: 4,
    borderRadius: 1,
    gap: 4,
    iconSize: 16,
    fontSize: 14,
    fontWeight: 600,
    loadingSize: 16,
  },
  [BUTTON_SIZE_TOKEN.S24]: {
    height: 24,
    paddingX: 8,
    paddingY: 4,
    borderRadius: 0.75,
    gap: 4,
    iconSize: 16,
    fontSize: 12,
    fontWeight: 600,
    loadingSize: 14,
  },
};

export function resolveButtonSizeToken(size: unknown): ButtonSizeToken {
  if (isUiSize(size)) {
    return UI_SIZE_TO_BUTTON_TOKEN[size];
  }

  return UI_SIZE_TO_BUTTON_TOKEN[UI_SIZE.MEDIUM];
}

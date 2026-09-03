import { type IconButtonProps as MuiIconButtonProps } from '@mui/material';
import { type ReactNode } from 'react';

import { UI_SIZE, type UiSize } from '@/constants/size';

/** IconButton supports three `UI_SIZE` values; `xsmall` is not allowed. */
export type IconButtonSize = Exclude<UiSize, typeof UI_SIZE.XSMALL>;

export const ICON_BUTTON_SIZES = [
  UI_SIZE.LARGE,
  UI_SIZE.MEDIUM,
  UI_SIZE.SMALL,
] as const satisfies readonly IconButtonSize[];

export const ICON_BUTTON_SIZE_CONFIG: Record<
  IconButtonSize,
  { iconSize: number }
> = {
  [UI_SIZE.LARGE]: { iconSize: 48 },
  [UI_SIZE.MEDIUM]: { iconSize: 24 },
  [UI_SIZE.SMALL]: { iconSize: 16 },
};

export function resolveIconButtonSize(size: unknown): IconButtonSize {
  if (
    size === UI_SIZE.LARGE ||
    size === UI_SIZE.MEDIUM ||
    size === UI_SIZE.SMALL
  ) {
    return size;
  }

  return UI_SIZE.MEDIUM;
}

export interface IconButtonProps
  extends Omit<MuiIconButtonProps, 'children' | 'size'> {
  /** Icon content. */
  icon: ReactNode;
  /** Accessible label. Defaults to the icon component name. */
  label?: string;
  /** Icon size token. Maps to 16 / 24 / 48. */
  size?: IconButtonSize;
}

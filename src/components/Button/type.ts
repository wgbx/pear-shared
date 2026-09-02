import { type ButtonProps as MuiButtonProps } from '@mui/material';
import { type ReactNode } from 'react';

import { type ButtonAppearance } from '@/constants/button';
import { type UiSize } from '@/constants/size';

export type { ButtonAppearance, ButtonSizeToken } from '@/constants/button';
export type { UiSize } from '@/constants/size';

export {
  BUTTON_APPEARANCE,
  BUTTON_APPEARANCES,
  BUTTON_SIZE_CONFIG,
  BUTTON_SIZE_TOKEN,
  UI_SIZE_TO_BUTTON_TOKEN,
  resolveButtonSizeToken,
} from '@/constants/button';

export { UI_SIZE, UI_SIZES, isUiSize } from '@/constants/size';

export interface ButtonProps
  extends Omit<MuiButtonProps, 'loading' | 'size' | 'variant'> {
  label?: ReactNode;
  icon?: ReactNode;
  loading?: boolean;
  appearance?: ButtonAppearance;
  size?: UiSize;
}

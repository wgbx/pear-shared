import { type IconToggleOption } from '@/components/IconToggle';

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

export type TextAlignOption = IconToggleOption<TextAlign>;

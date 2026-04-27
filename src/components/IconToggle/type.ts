import { type SvgIconProps } from '@mui/material';
import { type ElementType } from 'react';

export interface IconToggleOption<T = string> {
  value: T;
  // Use any to bypass strict SvgIconProps compatibility check for external icons
  // while still allowing the sx prop to be passed
  icon: ElementType<SvgIconProps>;
  label: string;
  disabled?: boolean;
}

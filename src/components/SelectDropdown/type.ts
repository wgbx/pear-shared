import { type MenuProps, type SxProps } from '@mui/material';
import { type Theme } from '@mui/material/styles';
import { type ReactNode } from 'react';

export interface SelectDropdownOption<T = string | number> {
  label: ReactNode;
  value: T;
  disabled?: boolean;
  slotProps?: {
    root?: {
      sx?: SxProps<Theme>;
    };
    text?: {
      sx?: SxProps<Theme>;
    };
  };
}

export interface SelectDropdownProps<T = string | number> {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  options: SelectDropdownOption<T>[];
  /** Selected value. Omit / `undefined` means nothing is selected (no checkmark). */
  value?: T;
  onChange?: (option: SelectDropdownOption<T>) => void;
  showCheck?: boolean;
  menuMaxHeight?: number;
  slotProps?: {
    paper?: SxProps<Theme>;
    menu?: Omit<MenuProps, 'open' | 'onClose' | 'anchorEl' | 'slotProps'>;
  };
}

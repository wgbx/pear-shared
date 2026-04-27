import { type MenuProps } from '@mui/material';
import { type ElementType, type ReactNode } from 'react';
import { type SxProps } from '@mui/material';
import { type Theme } from '@mui/material/styles';

export interface MenuDropdownProps extends Omit<MenuProps, 'slotProps'> {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  items: MenuDropdownItem[][];
  slotProps?: {
    paper?: SxProps<Theme>;
    menu?: Omit<MenuProps, 'open' | 'onClose' | 'anchorEl'>;
  };
}

export interface MenuDropdownItem extends MenuItemProps {
  autoClose?: boolean;
}

export interface MenuItemProps {
  icon?: ElementType;
  label: ReactNode;
  onClick?: () => void | Promise<void>;
  disabled?: boolean;
  type?: string;
  slotProps?: {
    icon?: {
      sx?: SxProps<Theme>;
    };
    text?: {
      sx?: SxProps<Theme>;
    };
  };
}

import {
  type DialogProps,
  type DrawerProps as MuiDrawerProps,
  type IconButtonProps,
  type SxProps,
  type Theme,
  type TypographyProps,
} from '@mui/material';
import { type ReactNode } from 'react';

export interface DrawerHeaderProps {
  title?: ReactNode;
  action?: ReactNode;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  closeLabel?: ReactNode;
  onClose?: () => void;
  divider?: 'border' | 'none';
  sx?: SxProps<Theme>;
  titleProps?: TypographyProps & { centered?: boolean };
  closeButtonProps?: IconButtonProps;
}

export interface DrawerContainerProps {
  children: ReactNode;
  open: boolean;
  onClose?: () => void;
  maskClosable?: boolean;
  disableRestoreFocus?: boolean;
  hideBackdrop?: boolean;
  anchor?: MuiDrawerProps['anchor'];
  sx?: SxProps<Theme>;
  PaperProps?: DialogProps['PaperProps'];
  dialogProps?: Omit<
    DialogProps,
    'open' | 'onClose' | 'children' | 'PaperProps' | 'sx' | 'hideBackdrop'
  >;
  drawerProps?: Omit<
    MuiDrawerProps,
    | 'open'
    | 'onClose'
    | 'children'
    | 'PaperProps'
    | 'sx'
    | 'hideBackdrop'
    | 'anchor'
  >;
}

export interface DrawerSlotProps {
  container?: Omit<DrawerContainerProps, 'children' | 'open' | 'onClose'>;
  header?: Omit<DrawerHeaderProps, 'title' | 'onClose'>;
  content?: {
    sx?: SxProps<Theme>;
  };
  footer?: {
    sx?: SxProps<Theme>;
    contentSx?: SxProps<Theme>;
  };
}

export interface DrawerProps {
  children: ReactNode;
  open: boolean;
  onClose?: () => void;
  title?: ReactNode;
  footer?: ReactNode;
  fullDrawer?: boolean;
  slotProps?: DrawerSlotProps;
  showHeader?: boolean;
}

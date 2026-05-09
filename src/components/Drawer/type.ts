import {
  type ButtonProps,
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

interface DrawerSlotProps {
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

interface DrawerFooterItem {
  label: ReactNode;
  onClick?: () => void | Promise<void>;
  disabled?: boolean;
  variant?: ButtonProps['variant'];
  type?: 'danger';
  buttonProps?: Omit<ButtonProps, 'children' | 'onClick'>;
}

export interface DrawerFooterItemButtonProps {
  item: DrawerFooterItem;
}

export interface DrawerFooterProps {
  items: DrawerFooterItem[];
}

export interface CustomDrawerProps extends Omit<DrawerProps, 'showHeader'> {
  showClose?: boolean;
  closeButtonProps?: IconButtonProps;
}

export interface PromptDrawerProps
  extends Omit<DrawerProps, 'children' | 'footer'> {
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  contentSx?: SxProps<Theme>;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmText?: ReactNode;
  cancelText?: ReactNode;
  confirmButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
}

export interface NoticeDrawerProps
  extends Omit<DrawerProps, 'children' | 'footer' | 'showHeader'> {
  children?: ReactNode;
  label?: ReactNode;
}

import { type ButtonProps as MuiButtonProps } from '@mui/material';
import { type ReactNode } from 'react';

export interface ButtonProps extends Omit<MuiButtonProps, 'loading'> {
  label?: ReactNode;
  icon?: ReactNode;
  loading?: boolean;
}

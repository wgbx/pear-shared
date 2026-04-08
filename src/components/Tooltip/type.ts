import { type TooltipProps as MuiTooltipProps } from '@mui/material';
import type { ReactNode } from 'react';

export interface TooltipProps extends Omit<MuiTooltipProps, 'title'> {
  title?: ReactNode;
  description: ReactNode;
  action?: ReactNode;
  arrow?: boolean;
  customContent?: ReactNode;
}

export type DefaultContentProps = Pick<
  TooltipProps,
  'title' | 'description' | 'action'
>;

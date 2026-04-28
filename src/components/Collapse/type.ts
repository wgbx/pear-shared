import {
  type ButtonBaseProps,
  type CollapseProps as MuiCollapseProps,
  type StackProps,
} from '@mui/material';
import { type ReactNode } from 'react';

export interface CollapseProps
  extends Omit<StackProps, 'children' | 'onChange'> {
  trigger: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
  expanded?: boolean;
  onChange?: (expanded: boolean) => void;
  disabled?: boolean;
  slotProps?: {
    root?: Omit<StackProps, 'children'>;
    trigger?: Omit<ButtonBaseProps, 'children' | 'onClick'>;
    content?: Omit<MuiCollapseProps, 'children' | 'in'>;
  };
}

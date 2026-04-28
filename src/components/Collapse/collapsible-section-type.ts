import { type SxProps, type Theme } from '@mui/material/styles';
import { type StackProps } from '@mui/material';
import { type ReactNode } from 'react';
import { type CollapseProps } from './type';

export interface CollapsibleSectionProps
  extends Omit<CollapseProps, 'trigger' | 'expanded' | 'onChange'>,
    Omit<StackProps, 'children' | 'onChange'> {
  label: ReactNode;
  sx?: SxProps<Theme>;
  children: ReactNode;
  onChange?: (expanded: boolean) => void;
}

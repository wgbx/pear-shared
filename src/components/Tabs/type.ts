import { type TabProps, type TabsProps as MuiTabsProps } from '@mui/material';
import { type ReactNode } from 'react';

export type TabVariant = 'underline' | 'standard';

export interface TabOption<T = string> {
  value: T;
  label: string;
  disabled?: boolean;
}

export interface TabsProps<T = string> {
  value: T;
  onChange: (value: T) => void;
  options: TabOption<T>[];
  variant?: TabVariant;
  centered?: boolean;
  disabled?: boolean;
  slotProps?: {
    root?: Omit<MuiTabsProps, 'children' | 'value' | 'onChange'>;
    tab?: Omit<TabProps, 'children'>;
    indicator?: TabProps;
  };
}

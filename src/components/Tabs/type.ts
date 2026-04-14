import { type TabsProps as MuiTabsProps, type TabProps } from '@mui/material';

export interface TabOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface TabsProps extends Omit<MuiTabsProps, 'slotProps' | 'onChange'> {
  items: TabOption[];
  onChange: (value: string) => void;
  disabled?: boolean;
  slotProps?: {
    root?: Omit<MuiTabsProps, 'children' | 'value' | 'onChange'>;
    tab?: Omit<TabProps, 'children'>;
    indicator?: TabProps;
  };
}

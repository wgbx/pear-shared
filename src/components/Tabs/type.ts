import { type TabsProps as MuiTabsProps, type TabProps } from '@mui/material';

export interface TabOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface TabsProps {
  value: string;
  onChange: (value: string) => void;
  options: TabOption[];
  centered?: boolean;
  disabled?: boolean;
  slotProps?: {
    root?: Omit<MuiTabsProps, 'children' | 'value' | 'onChange'>;
    tab?: Omit<TabProps, 'children'>;
    indicator?: TabProps;
  };
}

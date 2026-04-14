import { type StackProps, type TypographyProps } from '@mui/material';

export type StatusType = 'default' | 'success' | 'warning' | 'error' | 'info';

export interface StatusTagCustomConfig extends Partial<StatusConfig> {
  label?: string;
}

export interface StatusTagProps {
  type?: StatusType;
  label?: string;
  config?: StatusTagCustomConfig;
  slotProps?: {
    root?: Omit<StackProps, 'children'>;
    text?: Omit<TypographyProps, 'children'>;
  };
}

export interface StatusConfig {
  bgColor: string;
  color: string;
}

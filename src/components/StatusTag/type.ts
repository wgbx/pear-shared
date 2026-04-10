import { type StackProps, type TypographyProps } from '@mui/material';

export type StatusType = 'default' | 'success' | 'warning' | 'error' | 'info';

export interface StatusTagProps {
  type: StatusType;
  label?: string;
  slotProps?: {
    root?: Omit<StackProps, 'children'>;
    text?: Omit<TypographyProps, 'children'>;
  };
}

export interface StatusConfig {
  bgcolor: string;
  color: string;
}

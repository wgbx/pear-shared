import { type ButtonProps } from '@mui/material';
import { type ReactNode } from 'react';

/**
 * @deprecated Use {@link Button} with `appearance` instead.
 * Kept for existing business integrations during migration.
 */
export interface LegacyButtonProps extends Omit<ButtonProps, 'loading'> {
  label?: ReactNode;
  icon?: ReactNode;
  loading?: boolean;
}

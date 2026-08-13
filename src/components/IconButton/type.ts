import { type IconButtonProps as MuiIconButtonProps } from '@mui/material';

export interface IconButtonProps extends MuiIconButtonProps {
  /** Accessible label. Defaults to the child icon component name. */
  label?: string;
}

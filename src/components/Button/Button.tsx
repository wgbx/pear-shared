import { CircularProgress, Button as MuiButton, styled } from '@mui/material';
import { type ReactElement } from 'react';

import { type ButtonProps } from './buttonType';

const StyledButton = styled(MuiButton, {
  name: 'Button',
  slot: 'root',
})(({ theme }) => ({
  textTransform: 'none',
  height: 42,
  borderRadius: theme.spacing(1.25),
}));

/**
 * Thin MUI button wrapper with `label` / `icon` / `loading`.
 * See also {@link MainButton} for Pear Design Btn-CTA styles.
 */
export function Button({
  label,
  children,
  icon,
  startIcon,
  endIcon,
  loading,
  disabled,
  variant = 'outlined',
  ...restProps
}: ButtonProps): ReactElement {
  const showLoading = Boolean(loading);

  return (
    <StyledButton
      {...restProps}
      variant={variant}
      startIcon={showLoading ? undefined : startIcon ?? icon}
      endIcon={showLoading ? undefined : endIcon}
      disabled={Boolean(disabled) || showLoading}
    >
      {showLoading ? (
        <CircularProgress
          size={18}
          thickness={5}
          sx={{ color: 'action.disabled' }}
        />
      ) : (
        children ?? label
      )}
    </StyledButton>
  );
}

Button.displayName = 'Button';

export type { ButtonProps } from './buttonType';

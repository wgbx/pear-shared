import {
  CircularProgress,
  Button as MuiButton,
  styled,
  type ButtonProps,
} from '@mui/material';
import { type ReactElement, type ReactNode } from 'react';

const StyledButton = styled(MuiButton, {
  name: 'Button',
  slot: 'root',
})(({ theme }) => ({
  textTransform: 'none',
  height: 42,
  borderRadius: theme.spacing(1.25),
}));

export interface ActionButtonProps extends Omit<ButtonProps, 'loading'> {
  label?: ReactNode;
  icon?: ReactNode;
  loading?: boolean;
}

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
}: ActionButtonProps): ReactElement {
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

import { Button as MuiButton, styled, type ButtonProps } from '@mui/material';
import { type ReactElement, type ReactNode } from 'react';

const StyledButton = styled(MuiButton, {
  name: 'Button',
  slot: 'root',
})(({ theme }) => ({
  textTransform: 'none',
  height: 42,
  borderRadius: theme.spacing(1.25),
}));

export interface ActionButtonProps extends ButtonProps {
  label?: ReactNode;
  icon?: ReactNode;
}

export function Button({
  label,
  children,
  icon,
  startIcon,
  ...restProps
}: ActionButtonProps): ReactElement {
  return (
    <StyledButton
      variant="outlined"
      startIcon={startIcon ?? icon}
      {...restProps}
    >
      {children ?? label}
    </StyledButton>
  );
}

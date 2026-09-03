import {
  CircularProgress,
  Button as MuiButton,
  styled,
} from '@mui/material';
import { type ReactElement } from 'react';

import { getButtonStyles } from './getButtonStyles';
import {
  BUTTON_APPEARANCE,
  BUTTON_SIZE_CONFIG,
  UI_SIZE,
  type ButtonAppearance,
  type ButtonProps,
  type ButtonSizeToken,
  resolveButtonSizeToken,
} from './type';

const StyledButton = styled(MuiButton, {
  name: 'Button',
  slot: 'root',
  shouldForwardProp: (prop) => prop !== 'appearance' && prop !== 'sizeToken',
})<{
  appearance: ButtonAppearance;
  sizeToken: ButtonSizeToken;
}>(({ theme, appearance, sizeToken }) =>
  getButtonStyles(theme, appearance, sizeToken),
);

export function Button({
  label,
  children,
  icon,
  startIcon,
  endIcon,
  loading,
  disabled,
  appearance = BUTTON_APPEARANCE.PRIMARY,
  size = UI_SIZE.MEDIUM,
  disableRipple = true,
  sx,
  ...restProps
}: ButtonProps): ReactElement {
  const showLoading = Boolean(loading);
  const sizeToken = resolveButtonSizeToken(size);
  const loadingSize = BUTTON_SIZE_CONFIG[sizeToken].loadingSize;
  const loadingColor =
    appearance === BUTTON_APPEARANCE.PRIMARY ? 'white.a100' : 'green.900';

  return (
    <StyledButton
      {...restProps}
      appearance={appearance}
      sizeToken={sizeToken}
      variant="contained"
      color="inherit"
      disableRipple={disableRipple}
      startIcon={showLoading ? undefined : startIcon ?? icon}
      endIcon={showLoading ? undefined : endIcon}
      disabled={Boolean(disabled) || showLoading}
      sx={sx}
    >
      {showLoading ? (
        <CircularProgress
          size={loadingSize}
          thickness={5}
          sx={{ color: loadingColor }}
        />
      ) : (
        children ?? label
      )}
    </StyledButton>
  );
}

Button.displayName = 'Button';

export type { ButtonProps } from './type';

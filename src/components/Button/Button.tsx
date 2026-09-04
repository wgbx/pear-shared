import { CircularProgress, Button as MuiButton, styled } from '@mui/material';
import { useBoolean, useMemoizedFn } from 'ahooks';
import { type MouseEvent, type ReactElement } from 'react';

import { isPromiseLike } from '@/utils/function';

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
  isAsync,
  disabled,
  appearance = BUTTON_APPEARANCE.PRIMARY,
  size = UI_SIZE.MEDIUM,
  disableRipple = true,
  sx,
  onClick,
  ...restProps
}: ButtonProps): ReactElement {
  const [autoLoading, { setTrue: startLoading, setFalse: stopLoading }] =
    useBoolean(false);

  const handleClick = useMemoizedFn(
    async (event: MouseEvent<HTMLButtonElement>) => {
      if (!onClick) {
        return;
      }

      let shouldStopLoading = false;

      try {
        const result = onClick(event);
        if (!isAsync || !isPromiseLike(result)) {
          return result;
        }

        startLoading();
        shouldStopLoading = true;
        return await result;
      } finally {
        if (shouldStopLoading) {
          stopLoading();
        }
      }
    },
  );

  const showLoading = Boolean(loading) || autoLoading;
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
      onClick={handleClick}
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

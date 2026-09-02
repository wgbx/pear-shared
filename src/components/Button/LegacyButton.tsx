import {
  CircularProgress,
  Button as MuiButton,
  styled,
} from '@mui/material';
import { type ReactElement } from 'react';

import { type LegacyButtonProps } from './legacyType';

const StyledLegacyButton = styled(MuiButton, {
  name: 'LegacyButton',
  slot: 'root',
})(({ theme }) => ({
  textTransform: 'none',
  height: 42,
  borderRadius: theme.spacing(1.25),
}));

/**
 * @deprecated Use {@link Button} with `appearance` instead.
 * Kept for existing business integrations during migration.
 */
export function LegacyButton({
  label,
  children,
  icon,
  startIcon,
  endIcon,
  loading,
  disabled,
  variant = 'outlined',
  ...restProps
}: LegacyButtonProps): ReactElement {
  const showLoading = Boolean(loading);

  return (
    <StyledLegacyButton
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
    </StyledLegacyButton>
  );
}

LegacyButton.displayName = 'LegacyButton';

export type { LegacyButtonProps } from './legacyType';

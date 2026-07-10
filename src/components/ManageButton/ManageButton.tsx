'use client';

import {
  IconButton,
  type IconButtonProps,
  type SvgIconProps,
  styled,
  useMediaQuery,
} from '@mui/material';
import { Settings5Line } from '@mingcute/react';
import type { ElementType, ReactNode } from 'react';

import { Tooltip } from '../Tooltip';
import type { TooltipProps } from '../Tooltip/type';

const StyledIconButton = styled(IconButton, {
  name: 'ManageButton',
  slot: 'root',
})(({ theme }) => ({
  fontSize: '1.5rem',
  borderRadius: theme.spacing(0.75),
  color: theme.palette.shades[900],
  '&:hover': {
    color: theme.palette.shades[800],
    backgroundColor: theme.palette.shades[100],
  },
  [`@media (hover: none)`]: {
    '&:active': {
      color: theme.palette.shades[800],
      backgroundColor: theme.palette.shades[100],
    },
  },
  '&:focus-visible': {
    color: theme.palette.shades[800],
    backgroundColor: theme.palette.shades[100],
  },
  '&.Mui-disabled': {
    color: theme.palette.shades[300],
    cursor: 'not-allowed',
  },
}));

export interface ManageButtonProps
  extends Omit<IconButtonProps, 'title' | 'children'> {
  /** The icon to render. Defaults to `Settings5Line`. */
  Icon?: ElementType<SvgIconProps>;
  /** Tooltip text shown on PC hover. Defaults to `"Manage"`. Pass `false` to disable. */
  tooltip?: ReactNode | false;
  /** Additional props forwarded to the icon element. */
  iconProps?: SvgIconProps;
  /** Props forwarded to the wrapping `Tooltip`. Ignored when `tooltip` is `false`. */
  tooltipProps?: Omit<TooltipProps, 'children'>;
}

export function ManageButton({
  Icon = Settings5Line,
  tooltip = 'Manage',
  iconProps,
  tooltipProps,
  size = 'small',
  sx,
  ...restProps
}: ManageButtonProps): ReactNode {
  const isTouchDevice = useMediaQuery('(hover: none)');

  const button = (
    <StyledIconButton
      aria-label={typeof tooltip === 'string' ? tooltip : 'ManageButton'}
      size={size}
      sx={sx}
      {...restProps}
    >
      <Icon fontSize="inherit" {...iconProps} />
    </StyledIconButton>
  );

  // No tooltip on touch devices or when explicitly disabled
  if (!tooltip || isTouchDevice) {
    return button;
  }

  return (
    <Tooltip
      trigger="hover"
      description={tooltip}
      arrow
      placement="top"
      {...tooltipProps}
    >
      {button}
    </Tooltip>
  );
}

ManageButton.displayName = 'ManageButton';

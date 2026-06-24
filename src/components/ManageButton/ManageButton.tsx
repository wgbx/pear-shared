'use client';

import {
  IconButton,
  type IconButtonProps,
  type SvgIconProps,
  styled,
} from '@mui/material';
import { Settings5Line } from '@mingcute/react';
import { useMemoizedFn } from 'ahooks';
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
  /** Tooltip text shown on PC hover. Omit or pass `false` to disable tooltip. */
  tooltip?: ReactNode | false;
  /** Additional props forwarded to the icon element. */
  iconProps?: SvgIconProps;
  /** Props forwarded to the wrapping `Tooltip`. Ignored when `tooltip` is `false`. */
  tooltipProps?: Omit<TooltipProps, 'children'>;
}

export function ManageButton({
  Icon = Settings5Line,
  tooltip,
  onClick,
  iconProps,
  tooltipProps,
  disabled,
  size = 'small',
  sx,
  ...restProps
}: ManageButtonProps): ReactNode {
  const handleClick = useMemoizedFn(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled) {
        onClick?.(event);
      }
    },
  );

  const button = (
    <StyledIconButton
      aria-label={typeof tooltip === 'string' ? tooltip : 'Manage'}
      disabled={disabled}
      onClick={handleClick}
      size={size}
      sx={sx}
      {...restProps}
    >
      <Icon fontSize="inherit" {...iconProps} />
    </StyledIconButton>
  );

  if (!tooltip) {
    return button;
  }

  return (
    <Tooltip description={tooltip} arrow placement="top" {...tooltipProps}>
      {button}
    </Tooltip>
  );
}

ManageButton.displayName = 'ManageButton';

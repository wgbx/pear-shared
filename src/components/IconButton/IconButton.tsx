import { IconButton as MuiIconButton, styled } from '@mui/material';
import { forwardRef, type ReactElement } from 'react';

import { getIconAriaLabel } from './getIconAriaLabel';
import {
  ICON_BUTTON_SIZE_CONFIG,
  resolveIconButtonSize,
  type IconButtonProps,
} from './type';

const StyledIconButton = styled(MuiIconButton, {
  name: 'IconButton',
  slot: 'root',
  shouldForwardProp: (prop) => prop !== 'iconSize',
})<{ iconSize: number }>(({ theme, iconSize }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1),
  '& svg, & .MuiSvgIcon-root': {
    fontSize: iconSize,
    width: iconSize,
    height: iconSize,
  },
  '&:hover': {
    backgroundColor: theme.palette.shades[100],
  },
  '&:focus-visible': {
    backgroundColor: theme.palette.shades[100],
  },
  [`@media (hover: none)`]: {
    '&:active': {
      backgroundColor: theme.palette.shades[100],
    },
  },
}));

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(
    {
      disableRipple = true,
      icon,
      label,
      size,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      ...restProps
    },
    ref,
  ): ReactElement {
    const sizeToken = resolveIconButtonSize(size);
    const { iconSize } = ICON_BUTTON_SIZE_CONFIG[sizeToken];
    const resolvedAriaLabel =
      label ??
      ariaLabel ??
      (ariaLabelledby ? undefined : getIconAriaLabel(icon));

    return (
      <StyledIconButton
        ref={ref}
        disableRipple={disableRipple}
        aria-label={resolvedAriaLabel}
        aria-labelledby={ariaLabelledby}
        iconSize={iconSize}
        {...restProps}
      >
        {icon}
      </StyledIconButton>
    );
  },
);

IconButton.displayName = 'IconButton';

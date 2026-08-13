import { IconButton as MuiIconButton, styled } from '@mui/material';
import { forwardRef, type ReactElement } from 'react';

import { getIconAriaLabel } from './getIconAriaLabel';
import { type IconButtonProps } from './type';

const StyledIconButton = styled(MuiIconButton, {
  name: 'IconButton',
  slot: 'root',
})(({ theme }) => ({
  padding: theme.spacing(1),
  '&.MuiIconButton-sizeSmall': {
    padding: theme.spacing(1),
  },
  '&.MuiIconButton-sizeLarge': {
    padding: theme.spacing(1),
  },
  borderRadius: theme.spacing(1),
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
      children,
      label,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      ...restProps
    },
    ref,
  ): ReactElement {
    const resolvedAriaLabel =
      label ??
      ariaLabel ??
      (ariaLabelledby ? undefined : getIconAriaLabel(children));

    return (
      <StyledIconButton
        ref={ref}
        disableRipple={disableRipple}
        aria-label={resolvedAriaLabel}
        aria-labelledby={ariaLabelledby}
        {...restProps}
      >
        {children}
      </StyledIconButton>
    );
  },
);

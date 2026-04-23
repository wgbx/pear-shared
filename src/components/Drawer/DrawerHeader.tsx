import { CloseFill } from '@mingcute/react';
import { IconButton, Stack, styled } from '@mui/material';
import { type ReactElement } from 'react';
import { type DrawerHeaderProps } from './type';

const StyledHeader = styled(Stack, {
  name: 'ResponsiveDrawer',
  slot: 'header',
})(({ theme }) => ({
  minHeight: 40,
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
  position: 'relative',
}));

export function DrawerHeader({
  onClose,
  sx,
  closeButtonProps,
}: DrawerHeaderProps): ReactElement {
  return (
    <StyledHeader
      sx={{
        height: 52,
        ...sx,
      }}
    >
      {onClose ? (
        <IconButton
          disableRipple
          aria-label="'Close'"
          onClick={onClose}
          {...closeButtonProps}
          sx={{
            position: 'absolute',
            right: 16,
            color: 'shades.900',
            ...closeButtonProps?.sx,
          }}
        >
          <CloseFill style={{ width: 20, height: 20 }} />
        </IconButton>
      ) : null}
    </StyledHeader>
  );
}

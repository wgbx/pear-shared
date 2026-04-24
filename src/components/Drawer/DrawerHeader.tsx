import { Stack, styled } from '@mui/material';
import { type ReactElement } from 'react';
import { DrawerClose } from './DrawerClose';
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
        <DrawerClose onClose={onClose} closeButtonProps={closeButtonProps} />
      ) : null}
    </StyledHeader>
  );
}

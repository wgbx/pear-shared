import { Stack, styled, Typography } from '@mui/material';
import { type ReactElement } from 'react';
import { DrawerClose } from './DrawerClose';
import { type DrawerHeaderProps } from './type';

const StyledHeader = styled(Stack, {
  name: 'ResponsiveDrawer',
  slot: 'header',
})(() => ({
  width: '100%',
  minHeight: 40,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
}));

const HeaderTitle = styled(Typography, {
  name: 'ResponsiveDrawer',
  slot: 'title',
})(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  paddingInline: theme.spacing(6),
  textAlign: 'center',
  fontWeight: 600,
  color: theme.palette.shades[900],
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}));

export function DrawerHeader({
  onClose,
  title,
  sx,
  closeButtonProps,
  titleProps,
}: DrawerHeaderProps): ReactElement {
  return (
    <StyledHeader
      sx={{
        height: 52,
        ...sx,
      }}
    >
      {title ? (
        <HeaderTitle variant="subtitle1" component="div" {...titleProps}>
          {title}
        </HeaderTitle>
      ) : null}
      {onClose ? (
        <DrawerClose onClose={onClose} closeButtonProps={closeButtonProps} />
      ) : null}
    </StyledHeader>
  );
}

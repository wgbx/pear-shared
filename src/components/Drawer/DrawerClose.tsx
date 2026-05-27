import { CloseLine } from '@mingcute/react';
import { IconButton, styled, type IconButtonProps } from '@mui/material';
import { type ReactElement } from 'react';

const StyledCloseButton = styled(IconButton, {
  name: 'Drawer',
  slot: 'close',
})(({ theme }) => ({
  position: 'absolute',
  right: 16,
  color: theme.palette.shades[900],
}));

interface DrawerCloseProps {
  onClose: () => void;
  closeButtonProps?: IconButtonProps;
}

export function DrawerClose({
  onClose,
  closeButtonProps,
}: DrawerCloseProps): ReactElement {
  return (
    <StyledCloseButton
      disableRipple
      onClick={onClose}
      aria-label="Close"
      {...closeButtonProps}
    >
      <CloseLine style={{ width: 20, height: 20 }} />
    </StyledCloseButton>
  );
}

DrawerClose.displayName = 'DrawerClose';

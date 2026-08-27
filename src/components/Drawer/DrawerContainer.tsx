import { Dialog, Drawer } from '@mui/material';
import { type ReactElement } from 'react';
import { useIsDesktop } from '@/hooks/useIsDesktop';
import { type DrawerContainerProps } from './type';

export function DrawerContainer({
  children,
  open = true,
  onClose,
  maskClosable = false,
  disableRestoreFocus,
  hideBackdrop,
  anchor = 'bottom',
  sx,
  PaperProps,
  dialogProps,
  drawerProps,
}: DrawerContainerProps): ReactElement {
  const isDesktop = useIsDesktop();

  const handleClose = () => {
    onClose?.();
  };

  if (isDesktop) {
    return (
      <Dialog
        open={open}
        onClose={maskClosable ? handleClose : undefined}
        disableRestoreFocus={disableRestoreFocus}
        hideBackdrop={hideBackdrop}
        sx={sx}
        maxWidth="xs"
        PaperProps={PaperProps}
        {...dialogProps}
      >
        {children}
      </Dialog>
    );
  }

  return (
    <Drawer
      open={open}
      anchor={anchor}
      onClose={maskClosable ? handleClose : undefined}
      disableRestoreFocus={disableRestoreFocus}
      hideBackdrop={hideBackdrop}
      sx={sx}
      PaperProps={PaperProps}
      {...drawerProps}
    >
      {children}
    </Drawer>
  );
}

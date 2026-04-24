import { Stack, styled } from '@mui/material';
import { Drawer } from './Drawer';
import { DrawerClose } from './DrawerClose';
import { type CustomDrawerProps } from './type';

const BodyRoot = styled(Stack, {
  name: 'CustomDrawer',
  slot: 'body',
})({
  position: 'relative',
  flex: 1,
  minHeight: 0,
  width: '100%',
});

export function CustomDrawer(props: CustomDrawerProps) {
  const {
    children,
    closeButtonProps,
    onClose,
    showClose = true,
    ...restProps
  } = props;

  return (
    <Drawer showHeader={false} onClose={onClose} {...restProps}>
      <BodyRoot>
        {showClose && onClose ? (
          <DrawerClose
            onClose={onClose}
            closeButtonProps={{
              sx: {
                top: 16,
                ...closeButtonProps?.sx,
              },
            }}
          />
        ) : null}
        {children}
      </BodyRoot>
    </Drawer>
  );
}

CustomDrawer.displayName = 'CustomDrawer';

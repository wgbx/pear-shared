import { type ReactElement } from 'react';
import { Drawer } from './Drawer';
import { type NoticeDrawerProps } from './type';
import { DrawerFooter } from './DrawerFooter';

export function NoticeDrawer({
  label = 'Got it',
  children,
  onClose,
  ...resetProps
}: NoticeDrawerProps): ReactElement {
  return (
    <Drawer
      onClose={onClose}
      footer={
        <DrawerFooter
          items={[
            {
              label,
              variant: 'contained',
              onClick: onClose,
            },
          ]}
        />
      }
      {...resetProps}
    >
      {children}
    </Drawer>
  );
}

NoticeDrawer.displayName = 'NoticeDrawer';

import { type ReactElement } from 'react';
import { Drawer } from './Drawer';
import { DrawerFooter } from './DrawerFooter';
import { type ActionDrawerProps } from './type';

export function ActionDrawer({
  actions,
  ...restProps
}: ActionDrawerProps): ReactElement {
  return (
    <Drawer
      footer={actions?.length ? <DrawerFooter items={actions} /> : undefined}
      {...restProps}
    />
  );
}

ActionDrawer.displayName = 'ActionDrawer';

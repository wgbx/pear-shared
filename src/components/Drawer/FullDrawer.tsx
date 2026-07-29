import { type ReactElement } from 'react';
import { ActionDrawer } from './ActionDrawer';
import { type FullDrawerProps } from './type';

const FULL_DRAWER_PAPER_SX = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: { xs: '100%', md: 744 },
  height: '100%',
  maxHeight: { md: 'calc(100% - 48px)' },
  m: '0 auto',
  mt: 6,
  borderRadius: 0,
} as const;

export function FullDrawer({
  slotProps,
  ...restProps
}: FullDrawerProps): ReactElement {
  const { container, ...restSlotProps } = slotProps ?? {};

  return (
    <ActionDrawer
      {...restProps}
      slotProps={{
        ...restSlotProps,
        container: {
          hideBackdrop: true,
          ...container,
          PaperProps: {
            ...container?.PaperProps,
            sx: {
              ...FULL_DRAWER_PAPER_SX,
              ...container?.PaperProps?.sx,
            },
          },
        },
      }}
    />
  );
}

FullDrawer.displayName = 'FullDrawer';

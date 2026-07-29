import { Box, Stack, styled } from '@mui/material';
import { useIsDesktop } from '../../hooks/useIsDesktop';
import { DrawerContainer } from './DrawerContainer';
import { DrawerHeader } from './DrawerHeader';
import { type DrawerProps } from './type';

const DRAWER_PAPER_BASE_SX = {
  maxHeight: '90dvh',
  boxShadow:
    '0px 3px 240px 4px rgba(255, 255, 255, 0.10), 0px 2px 250px 4px rgba(255, 255, 255, 0.08)',
} as const;

const DRAWER_PAPER_STABLE_HEIGHT_SX = {
  display: 'flex',
  flexDirection: 'column',
  height: '90dvh',
} as const;

const DrawerContent = styled(Stack, {
  name: 'Drawer',
  slot: 'content',
})({
  flex: 1,
  minHeight: 0,
  overflow: 'auto',
});

const DrawerFooter = styled(Box, {
  name: 'Drawer',
  slot: 'footer',
})({
  flexShrink: 0,
  paddingBottom: 'max(env(safe-area-inset-bottom), 0px)',
});

const DrawerFooterContent = styled(Stack, {
  name: 'Drawer',
  slot: 'footerContent',
})({});

export function Drawer({
  children,
  open = true,
  onClose,
  title,
  footer,
  stableHeight,
  slotProps,
  showHeader = true,
}: DrawerProps) {
  const {
    container: containerSlotProps,
    header: headerSlotProps,
    content: contentSlotProps,
    footer: footerSlotProps,
  } = slotProps ?? {};
  const isDesktop = useIsDesktop();
  const borderRadius = 5;
  const showDrawerHeader = showHeader || Boolean(title);

  return (
    <DrawerContainer
      open={open}
      onClose={onClose}
      {...containerSlotProps}
      PaperProps={{
        ...containerSlotProps?.PaperProps,
        sx: {
          ...DRAWER_PAPER_BASE_SX,
          ...(stableHeight ? DRAWER_PAPER_STABLE_HEIGHT_SX : {}),
          ...(isDesktop
            ? { minWidth: 500, borderRadius }
            : {
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }),
          ...containerSlotProps?.PaperProps?.sx,
        },
      }}
    >
      {showDrawerHeader ? (
        <DrawerHeader
          title={title}
          onClose={showHeader ? onClose : undefined}
          {...headerSlotProps}
          sx={{
            ...(stableHeight ? { flexShrink: 0 } : {}),
            ...(headerSlotProps?.sx ?? {}),
          }}
        />
      ) : null}

      <DrawerContent sx={contentSlotProps?.sx}>{children}</DrawerContent>

      {footer ? (
        <DrawerFooter sx={footerSlotProps?.sx}>
          <DrawerFooterContent sx={footerSlotProps?.contentSx}>
            {footer}
          </DrawerFooterContent>
        </DrawerFooter>
      ) : null}
    </DrawerContainer>
  );
}

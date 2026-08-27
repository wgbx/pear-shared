'use client';

import { Fade, IconButton, type IconButtonProps, styled } from '@mui/material';
import { AlignArrowUpLine } from '@mingcute/react';
import { useMemoizedFn, useScroll } from 'ahooks';
import { getTargetElement, type BasicTarget } from 'ahooks/es/utils/domTarget';
import type { MouseEvent, ReactNode } from 'react';

import { isBrowser } from '@/utils/device';
import { isNil } from '@/utils/function';

const StyledIconButton = styled(IconButton, {
  name: 'BackToTop',
  slot: 'root',
})(({ theme }) => ({
  position: 'fixed',
  // Same inset on both viewports: mobile uses viewport edge; md+ uses 744 content column.
  right: 27,
  bottom: 80,
  padding: 0,
  minWidth: 36,
  minHeight: 36,
  width: 36,
  height: 36,
  color: theme.palette.brand.black,
  backgroundColor: theme.palette.white.a100,
  borderRadius: '50%',
  boxShadow: `0px 0px 15px ${theme.palette.shades[400]}`,
  zIndex: theme.zIndex.appBar,
  '&:hover': {
    backgroundColor: theme.palette.white.a100,
  },
  // 744/2 = 372; keep the same 27px inset from the content column's right edge.
  [theme.breakpoints.up('md')]: {
    right: 'calc(50% - 345px)',
  },
}));

export type BackToTopScrollTarget = BasicTarget<Element | Document>;

function scrollToTop(target: Element | Document | null | undefined): void {
  if (isNil(target) || !(target instanceof Element)) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  target.scrollTo({ top: 0, behavior: 'smooth' });
}

export interface BackToTopProps extends Omit<IconButtonProps, 'children'> {
  /** Show the button after scrolling past this many pixels. Defaults to `250`. */
  threshold?: number;
  /**
   * Scroll container to observe. Defaults to `document` (page scroll).
   * Pass a ref / element when scrolling happens inside a container.
   */
  target?: BackToTopScrollTarget;
}

export function BackToTop({
  threshold = 250,
  target,
  sx,
  onClick,
  ...restProps
}: BackToTopProps): ReactNode {
  // Pass ref/getter through so ahooks can re-read `.current` after mount.
  const scrollListenTarget = isNil(target)
    ? isBrowser()
      ? document
      : undefined
    : target;

  const scroll = useScroll(scrollListenTarget);
  const visible = (scroll?.top ?? 0) > threshold;

  const handleClick = useMemoizedFn((event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    scrollToTop(getTargetElement(target, document));
  });

  return (
    <Fade in={visible}>
      <StyledIconButton
        aria-label="Back to top"
        onClick={handleClick}
        sx={sx}
        {...restProps}
      >
        <AlignArrowUpLine size={20} />
      </StyledIconButton>
    </Fade>
  );
}

BackToTop.displayName = 'BackToTop';

import { Typography } from '@mui/material';
import { useMemoizedFn } from 'ahooks';
import { useLayoutEffect, useRef, useState, type ReactElement } from 'react';
import { Tooltip } from './Tooltip';
import { type EllipsisTooltipProps } from './type';

/**
 * Use line-clamp + overflow-wrap (not white-space:nowrap).
 * nowrap makes unbroken strings inflate min-content width and expand ancestors.
 */
const ELLIPSIS_SX = {
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  minWidth: 0,
  overflow: 'hidden',
  wordBreak: 'normal',
  overflowWrap: 'anywhere',
} as const;

function isOverflowing(element: HTMLElement): boolean {
  return (
    element.scrollHeight > element.clientHeight + 1 ||
    element.scrollWidth > element.clientWidth + 1
  );
}

export function EllipsisTooltip({
  children,
  tooltip,
  lines = 1,
  component = 'span',
  tooltipProps,
  sx,
  ...textProps
}: EllipsisTooltipProps): ReactElement {
  const textRef = useRef<HTMLElement>(null);
  const [truncated, setTruncated] = useState(false);
  const tooltipContent = tooltip ?? children;

  const updateTruncated = useMemoizedFn(() => {
    const element = textRef.current;
    if (!element) {
      return;
    }
    const next = isOverflowing(element);
    setTruncated((prev) => (prev === next ? prev : next));
  });

  useLayoutEffect(() => {
    updateTruncated();
    const element = textRef.current;
    if (!element) {
      return;
    }

    const resizeObserver = new ResizeObserver(updateTruncated);
    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
    // `truncated` is included so the observer rebinds after Tooltip mount/unmount remounts the text node.
  }, [children, lines, truncated, updateTruncated]);

  const textNode = (
    <Typography
      ref={textRef}
      component={component}
      sx={[
        { ...ELLIPSIS_SX, WebkitLineClamp: lines },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...textProps}
    >
      {children}
    </Typography>
  );

  if (!truncated) {
    return textNode;
  }

  const {
    trigger = 'hover',
    placement = 'bottom',
    ...restTooltipProps
  } = tooltipProps ?? {};

  return (
    <Tooltip
      description={tooltipContent}
      trigger={trigger}
      placement={placement}
      {...restTooltipProps}
    >
      {textNode}
    </Tooltip>
  );
}

EllipsisTooltip.displayName = 'EllipsisTooltip';

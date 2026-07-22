import { Typography } from '@mui/material';
import { useMemoizedFn } from 'ahooks';
import { useLayoutEffect, useRef, useState, type ReactElement } from 'react';
import { Tooltip } from './Tooltip';
import { type EllipsisTooltipProps } from './type';

const SINGLE_LINE_SX = {
  display: 'block',
  minWidth: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
} as const;

const MULTI_LINE_SX = {
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  minWidth: 0,
  overflow: 'hidden',
} as const;

function isOverflowing(element: HTMLElement, lines: number): boolean {
  if (lines === 1) {
    return element.scrollWidth > element.clientWidth;
  }
  return element.scrollHeight > element.clientHeight;
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
    const next = isOverflowing(element, lines);
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
        lines === 1
          ? SINGLE_LINE_SX
          : { ...MULTI_LINE_SX, WebkitLineClamp: lines },
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

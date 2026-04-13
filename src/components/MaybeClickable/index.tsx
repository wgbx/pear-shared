import { Box, type BoxProps } from '@mui/material';
import type { ElementType, ReactNode } from 'react';

export interface MaybeClickableProps
  extends Omit<BoxProps, 'onClick' | 'children'> {
  children: ReactNode;
  component?: ElementType;
  enabled?: boolean;
  onClick?: unknown;
}

export function MaybeClickable(props: MaybeClickableProps) {
  const {
    onClick,
    enabled = true,
    children,
    component = 'div',
    sx,
    ...restProps
  } = props;

  const isFn = typeof onClick === 'function';
  const clickable = enabled && isFn;
  const clickHandler = clickable ? (onClick as BoxProps['onClick']) : undefined;

  return (
    <Box
      component={component}
      onClick={clickHandler}
      sx={{
        ...(clickable ? { cursor: 'pointer' } : null),
        ...((sx as any) ?? null),
      }}
      {...restProps}
    >
      {children}
    </Box>
  );
}

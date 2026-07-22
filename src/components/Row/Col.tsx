import { Box, styled } from '@mui/material';
import { type ReactElement } from 'react';
import { type ColProps } from './type';

const COLUMNS = 24;

function toPercent(value: number): string {
  return `${(value / COLUMNS) * 100}%`;
}

const StyledCol = styled(Box, {
  name: 'Col',
  slot: 'root',
})({
  position: 'relative',
  maxWidth: '100%',
  minHeight: 1,
  minWidth: 0,
  paddingInline: 'calc(var(--row-gutter-x, 0px) / 2)',
});

export function Col({
  span,
  offset = 0,
  children,
  sx,
  ...restProps
}: ColProps): ReactElement {
  const hasSpan = span !== undefined;
  const hidden = span === 0;

  return (
    <StyledCol
      {...restProps}
      sx={[
        {
          display: hidden ? 'none' : undefined,
          flex: hasSpan ? `0 0 ${toPercent(span)}` : '0 1 auto',
          maxWidth: hasSpan ? toPercent(span) : undefined,
          marginInlineStart: offset ? toPercent(offset) : undefined,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </StyledCol>
  );
}

Col.displayName = 'Col';

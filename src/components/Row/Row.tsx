import { Box, styled } from '@mui/material';
import { type CSSProperties, type ReactElement } from 'react';
import {
  type RowAlign,
  type RowGutter,
  type RowJustify,
  type RowProps,
} from './type';

const JUSTIFY_MAP: Record<RowJustify, CSSProperties['justifyContent']> = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  'space-around': 'space-around',
  'space-between': 'space-between',
  'space-evenly': 'space-evenly',
};

const ALIGN_MAP: Record<RowAlign, CSSProperties['alignItems']> = {
  top: 'flex-start',
  middle: 'center',
  bottom: 'flex-end',
  stretch: 'stretch',
};

function normalizeGutter(gutter: RowGutter = 0): [number, number] {
  if (Array.isArray(gutter)) {
    return [gutter[0] ?? 0, gutter[1] ?? 0];
  }
  return [gutter, 0];
}

const StyledRow = styled(Box, {
  name: 'Row',
  slot: 'root',
})({
  display: 'flex',
  flexFlow: 'row wrap',
  minWidth: 0,
  marginInline: 'calc(var(--row-gutter-x, 0px) / -2)',
  rowGap: 'var(--row-gutter-y, 0px)',
});

export function Row({
  gutter = 0,
  justify = 'start',
  align = 'top',
  wrap = true,
  children,
  sx,
  ...restProps
}: RowProps): ReactElement {
  const [gutterX, gutterY] = normalizeGutter(gutter);

  return (
    <StyledRow
      {...restProps}
      sx={[
        {
          '--row-gutter-x': `${gutterX}px`,
          '--row-gutter-y': `${gutterY}px`,
          justifyContent: JUSTIFY_MAP[justify],
          alignItems: ALIGN_MAP[align],
          flexWrap: wrap ? 'wrap' : 'nowrap',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </StyledRow>
  );
}

Row.displayName = 'Row';

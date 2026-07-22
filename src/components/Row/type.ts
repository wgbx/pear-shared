import { type BoxProps } from '@mui/material';
import { type ReactNode } from 'react';

export type RowJustify =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

export type RowAlign = 'top' | 'middle' | 'bottom' | 'stretch';

export type RowGutter = number | [number, number];

export interface RowProps extends Omit<BoxProps, 'children'> {
  gutter?: RowGutter;
  justify?: RowJustify;
  align?: RowAlign;
  wrap?: boolean;
  children?: ReactNode;
}

export interface ColProps extends Omit<BoxProps, 'children'> {
  span?: number;
  offset?: number;
  children?: ReactNode;
}

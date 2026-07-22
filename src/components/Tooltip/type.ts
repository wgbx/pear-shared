import {
  type TooltipProps as MuiTooltipProps,
  type SxProps,
  type Theme,
  type TypographyProps,
} from '@mui/material';
import type { MouseEvent, ReactElement, ReactNode, Ref } from 'react';

export type TooltipTrigger = 'click' | 'hover';

type TooltipChildProps = {
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  ref?: Ref<HTMLElement>;
};

export interface TooltipProps
  extends Omit<MuiTooltipProps, 'title' | 'children'> {
  title?: ReactNode;
  description: ReactNode;
  action?: ReactNode;
  arrow?: boolean;
  customContent?: ReactNode;
  /** How the tooltip is triggered. Defaults to `'click'`. */
  trigger?: TooltipTrigger;
  children: ReactElement<TooltipChildProps>;
}

export type DefaultContentProps = Pick<
  TooltipProps,
  'title' | 'description' | 'action'
>;

export type InfoTooltipProps = Omit<TooltipProps, 'children' | 'sx'> & {
  /** Styles applied to the icon trigger, e.g. `color` and `fontSize`. */
  sx?: SxProps<Theme>;
};

export type EllipsisTooltipProps = Omit<TypographyProps, 'children'> & {
  children: ReactNode;
  /** Tooltip content when truncated. Defaults to `children`. */
  tooltip?: ReactNode;
  /** Max visible lines before truncation. */
  lines?: number;
  tooltipProps?: Omit<TooltipProps, 'children' | 'description'>;
};

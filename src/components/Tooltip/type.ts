import {
  type TooltipProps as MuiTooltipProps,
  type SxProps,
  type Theme,
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

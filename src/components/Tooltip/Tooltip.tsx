import { Tooltip as MuiTooltip } from '@mui/material';
import { useClickAway, useMemoizedFn } from 'ahooks';
import {
  cloneElement,
  isValidElement,
  useRef,
  useState,
  type MouseEvent,
  type MutableRefObject,
  type ReactElement,
  type Ref,
  type SyntheticEvent,
} from 'react';

import { DefaultContent } from './DefaultContent';
import { TooltipProps } from './type';
import { isFunction } from '@/utils/function';

type TooltipChildProps = {
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  ref?: Ref<HTMLElement>;
};

function assignRef<T>(ref: Ref<T> | undefined, node: T) {
  if (isFunction(ref)) {
    ref(node);
    return;
  }

  if (ref) {
    (ref as MutableRefObject<T>).current = node;
  }
}

export function Tooltip(props: TooltipProps) {
  const {
    title,
    description,
    action,
    arrow = true,
    slotProps,
    customContent,
    trigger = 'click',
    placement = 'bottom',
    open: openProp,
    onOpen,
    onClose,
    disableHoverListener,
    disableFocusListener,
    disableTouchListener,
    children,
    ...restProps
  } = props;

  const childRef = useRef<HTMLElement>(null);
  const tooltipContentRef = useRef<HTMLDivElement | null>(null);
  const [openInternal, setOpenInternal] = useState(false);
  const isClickTrigger = trigger === 'click';
  const isControlled = openProp !== undefined;
  const open =
    isClickTrigger && isControlled
      ? openProp
      : isClickTrigger
      ? openInternal
      : openProp;

  const handleOpen = useMemoizedFn((event: Event | SyntheticEvent) => {
    if (isClickTrigger && !isControlled) {
      setOpenInternal(true);
    }
    onOpen?.(event as SyntheticEvent);
  });

  const handleClose = useMemoizedFn((event: Event | SyntheticEvent) => {
    if (isClickTrigger && !isControlled) {
      setOpenInternal(false);
    }
    onClose?.(event as SyntheticEvent);
  });

  const handleClickAway = useMemoizedFn((event: Event) => {
    if (!isClickTrigger || !open) {
      return;
    }
    handleClose(event);
  });

  useClickAway(handleClickAway, [childRef, tooltipContentRef]);

  const handleChildClick = useMemoizedFn((event: MouseEvent<HTMLElement>) => {
    if (isClickTrigger) {
      if (isControlled) {
        if (open) {
          onClose?.(event);
        } else {
          onOpen?.(event);
        }
      } else {
        setOpenInternal((prev) => !prev);
      }
    }

    (children as ReactElement<TooltipChildProps>).props.onClick?.(event);
  });

  const userTooltipSlotProps = slotProps?.tooltip;

  const triggerChild =
    isClickTrigger && isValidElement(children)
      ? cloneElement(children as ReactElement<TooltipChildProps>, {
          onClick: handleChildClick,
          ref: childRef,
        })
      : children;

  return (
    <MuiTooltip
      {...restProps}
      placement={placement}
      open={isClickTrigger ? open : openProp}
      onOpen={isClickTrigger ? handleOpen : onOpen}
      onClose={isClickTrigger ? handleClose : onClose}
      disableHoverListener={disableHoverListener ?? isClickTrigger}
      disableFocusListener={disableFocusListener ?? isClickTrigger}
      disableTouchListener={disableTouchListener ?? isClickTrigger}
      title={
        customContent ?? (
          <DefaultContent
            title={title}
            description={description}
            action={action}
          />
        )
      }
      arrow={arrow}
      slotProps={{
        popper: slotProps?.popper,
        tooltip: {
          sx: {
            bgcolor: 'shades.800',
            borderRadius: 2,
            p: 1.5,
            '& .MuiTooltip-arrow': {
              color: 'shades.800',
            },
          },
          ...userTooltipSlotProps,
          ref: (node: HTMLDivElement | null) => {
            tooltipContentRef.current = node;
            assignRef(userTooltipSlotProps?.ref, node);
          },
        },
        arrow: {
          sx: {
            color: 'shades.800',
          },
          ...slotProps?.arrow,
        },
      }}
    >
      {triggerChild}
    </MuiTooltip>
  );
}

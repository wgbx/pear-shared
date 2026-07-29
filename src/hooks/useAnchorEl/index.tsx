import { useMemoizedFn } from 'ahooks';
import { type MouseEvent, useState } from 'react';

export interface UseAnchorElReturn<T extends HTMLElement = HTMLElement> {
  anchorEl: T | null;
  open: boolean;
  onClick: (event: MouseEvent<T>) => void;
  onClose: () => void;
}

/**
 * Manages an `anchorEl` for any overlay positioned by it
 * (Menu, Popover, Popper, SelectDropdown, etc.).
 *
 * Spread overlay props onto the menu / popover; keep `onClick` for the trigger:
 *
 * @example
 * ```tsx
 * const { onClick, ...menuProps } = useAnchorEl();
 *
 * return (
 *   <>
 *     <Button onClick={onClick}>Open</Button>
 *     <MenuDropdown {...menuProps} items={items} />
 *   </>
 * );
 * ```
 */
export function useAnchorEl<
  T extends HTMLElement = HTMLElement,
>(): UseAnchorElReturn<T> {
  const [anchorEl, setAnchorEl] = useState<T | null>(null);

  const onClick = useMemoizedFn((event: MouseEvent<T>) => {
    setAnchorEl(event.currentTarget);
  });

  const onClose = useMemoizedFn(() => {
    setAnchorEl(null);
  });

  return {
    anchorEl,
    open: Boolean(anchorEl),
    onClick,
    onClose,
  };
}

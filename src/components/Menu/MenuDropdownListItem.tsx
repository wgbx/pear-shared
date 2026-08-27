import { useMemoizedFn } from 'ahooks';

import { isPromiseLike } from '@/utils/function';
import { MenuItem } from './MenuItem';
import type { MenuDropdownItem } from './type';

export interface MenuDropdownListItemProps {
  item: MenuDropdownItem;
  onClose: () => void;
}

export function MenuDropdownListItem({
  item,
  onClose,
}: MenuDropdownListItemProps) {
  const { autoClose = true, ...menuItemProps } = item;

  const handleItemClick = useMemoizedFn(async () => {
    const result = menuItemProps.onClick?.();
    if (isPromiseLike(result)) {
      await result;
    }

    if (autoClose) {
      onClose();
    }

    return result;
  });

  return <MenuItem {...menuItemProps} onClick={handleItemClick} />;
}

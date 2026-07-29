import { Menu as MuiMenu, styled } from '@mui/material';
import { useMemoizedFn } from 'ahooks';
import { type ReactElement } from 'react';

import { getThinScrollbarStyles } from '../../styles';
import { isObject } from '../../utils/function';
import { SelectDropdownOptionItem } from './SelectDropdownOptionItem';
import type { SelectDropdownOption, SelectDropdownProps } from './type';

const SelectDropdownMenu = styled(MuiMenu, {
  name: 'SelectDropdown',
  slot: 'menu',
})(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: theme.spacing(2),
    marginTop: theme.spacing(0.5),
    width: 'max-content',
    minWidth: 150,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    // Equal inset on all sides so selected rows keep padding + radius on both edges
    padding: theme.spacing(1),
    boxSizing: 'border-box',
  },
  '& .MuiList-root': {
    padding: 0,
    flex: 1,
    minHeight: 0,
    ...getThinScrollbarStyles(theme),
  },
}));

export function SelectDropdown<T = string | number>(
  props: SelectDropdownProps<T>,
): ReactElement {
  const {
    anchorEl,
    open,
    onClose,
    options,
    value,
    onChange,
    showCheck = true,
    menuMaxHeight = 400,
    slotProps,
  } = props;

  const handleSelect = useMemoizedFn((option: SelectDropdownOption<T>) => {
    onChange?.(option);
    onClose();
  });

  return (
    <SelectDropdownMenu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      slotProps={{
        paper: {
          sx: {
            maxHeight: menuMaxHeight,
            ...(isObject(slotProps?.paper) ? slotProps.paper : null),
          },
        },
      }}
      {...slotProps?.menu}
    >
      {options.map((option) => (
        <SelectDropdownOptionItem
          key={String(option.value)}
          option={option}
          selected={option.value === value}
          showCheck={showCheck}
          onSelect={handleSelect}
        />
      ))}
    </SelectDropdownMenu>
  );
}

SelectDropdown.displayName = 'SelectDropdown';

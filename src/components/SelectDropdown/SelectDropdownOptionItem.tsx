import {
  MenuItem as MuiMenuItem,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import { CheckFill } from '@mingcute/react';
import { useMemoizedFn } from 'ahooks';
import { type ReactElement } from 'react';

import type { SelectDropdownOption } from './type';

export interface SelectDropdownOptionItemProps<T = string | number> {
  option: SelectDropdownOption<T>;
  selected: boolean;
  showCheck: boolean;
  onSelect: (option: SelectDropdownOption<T>) => void;
}

const OptionItemRoot = styled(MuiMenuItem, {
  name: 'SelectDropdown',
  slot: 'option',
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  minHeight: 36,
  height: 36,
  width: '100%',
  boxSizing: 'border-box',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1, 1.5),
  marginBottom: theme.spacing(0.25),
  '&.Mui-selected': {
    backgroundColor: theme.palette.shades.a5,
  },
  '&.Mui-selected:hover': {
    backgroundColor: theme.palette.shades.a5,
  },
  '&:hover': {
    backgroundColor: theme.palette.shades.a5,
  },
}));

const OptionItemContent = styled(Stack, {
  name: 'SelectDropdown',
  slot: 'optionContent',
})(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  minWidth: 0,
  gap: theme.spacing(1),
}));

const OptionItemLabel = styled(Typography, {
  name: 'SelectDropdown',
  slot: 'optionLabel',
})(({ theme }) => ({
  minWidth: 0,
  fontSize: '0.875rem',
  lineHeight: '20px',
  fontWeight: 400,
  color: theme.palette.shades[900],
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}));

const OptionItemCheck = styled(Stack, {
  name: 'SelectDropdown',
  slot: 'optionCheck',
})(({ theme }) => ({
  flexShrink: 0,
  width: 20,
  height: 20,
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.shades[900],
  '& > svg': {
    width: '100%',
    height: '100%',
  },
}));

export function SelectDropdownOptionItem<T = string | number>({
  option,
  selected,
  showCheck,
  onSelect,
}: SelectDropdownOptionItemProps<T>): ReactElement {
  const handleClick = useMemoizedFn(() => {
    if (option.disabled) return;
    onSelect(option);
  });

  return (
    <OptionItemRoot
      selected={selected}
      disabled={option.disabled}
      onClick={handleClick}
      sx={option.slotProps?.root?.sx}
    >
      <OptionItemContent>
        <OptionItemLabel sx={option.slotProps?.text?.sx}>
          {option.label}
        </OptionItemLabel>
        {showCheck ? (
          <OptionItemCheck>{selected ? <CheckFill /> : null}</OptionItemCheck>
        ) : null}
      </OptionItemContent>
    </OptionItemRoot>
  );
}

import {
  IconButton,
  IconButtonProps,
  styled,
  type SvgIconProps,
} from '@mui/material';
import { useMemoizedFn } from 'ahooks';
import { type ReactElement } from 'react';

import type { IconToggleOption } from './type';

const StyledIconButton = styled(IconButton, {
  name: 'IconToggle',
  slot: 'button',
})(({ theme }) => ({
  borderRadius: theme.spacing(0.5),
  padding: theme.spacing(0.875),
  color: theme.palette.text.primary,
  flex: 1, // Make button take up available space evenly
  position: 'relative',
  zIndex: 1,
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '&.Mui-disabled': {
    cursor: 'not-allowed',
    pointerEvents: 'auto', // Override MUI default to show cursor
  },
}));

export interface IconToggleItemProps<T> {
  item: IconToggleOption<T>;
  activeValue?: T;
  disabled?: boolean;
  onClick: (value: T) => void;
  slotProps?: {
    button?: IconButtonProps;
    icon?: SvgIconProps;
  };
}

export function IconToggleItem<T>({
  item: { value, icon: Icon, label, disabled: itemDisabled },
  activeValue,
  disabled: groupDisabled,
  onClick,
  slotProps,
}: IconToggleItemProps<T>): ReactElement {
  const handleClick = useMemoizedFn(() => {
    if (groupDisabled || itemDisabled) return;
    onClick(value);
  });
  const active = activeValue === value;
  const disabled = groupDisabled || itemDisabled;

  return (
    <StyledIconButton
      aria-label={label}
      aria-pressed={active}
      disabled={disabled}
      disableRipple
      onClick={handleClick}
      {...slotProps?.button}
    >
      <Icon sx={{ fontSize: '1.5rem' }} {...slotProps?.icon} />
    </StyledIconButton>
  );
}

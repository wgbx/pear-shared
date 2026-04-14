import {
  ButtonGroup,
  ButtonGroupProps,
  IconButtonProps,
  styled,
  type SvgIconProps,
} from '@mui/material';
import { useMemoizedFn } from 'ahooks';
import { useState, type ReactElement } from 'react';

import { IconToggleItem } from './IconToggleItem';
import type { IconToggleOption } from './type';

export interface IconToggleProps<T = string> {
  value?: T;
  onChange?: (value: T) => void;
  defaultValue?: T;
  options: IconToggleOption<T>[];
  slotProps?: {
    root?: ButtonGroupProps;
    button?: IconButtonProps;
    icon?: SvgIconProps;
  };
  disabled?: boolean;
}

const StyledButtonGroup = styled(ButtonGroup, {
  name: 'IconToggle',
  slot: 'root',
})(({ theme }) => ({
  borderRadius: theme.spacing(1),
  overflow: 'hidden',
  background: theme.palette.shades[100],
  gap: theme.spacing(0.25),
  padding: theme.spacing(0.25),
  width: 'fit-content',
  display: 'flex',
}));

export function IconToggle<T = string>({
  value: controlledValue,
  onChange,
  options,
  defaultValue = options[0]?.value,
  slotProps,
  disabled,
}: IconToggleProps<T>): ReactElement {
  const [internalValue, setInternalValue] = useState<T | undefined>(defaultValue);
  const activeValue = controlledValue ?? internalValue;

  const handleClick = useMemoizedFn((val: T) => {
    setInternalValue(val);
    onChange?.(val);
  });

  return (
    <StyledButtonGroup disableElevation {...slotProps?.root}>
      {options.map((item) => (
        <IconToggleItem<T>
          key={String(item.value)}
          item={item}
          activeValue={activeValue}
          disabled={disabled}
          onClick={handleClick}
          slotProps={slotProps}
        />
      ))}
    </StyledButtonGroup>
  );
}

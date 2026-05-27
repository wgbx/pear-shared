import {
  Box,
  ButtonGroup,
  ButtonGroupProps,
  IconButtonProps,
  styled,
  type SvgIconProps,
} from '@mui/material';
import { useMemoizedFn } from 'ahooks';
import {
  useMemo,
  useState,
  type CSSProperties,
  type ReactElement,
} from 'react';

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
  position: 'relative',
  '--icon-toggle-gap': theme.spacing(0.25),
  '--icon-toggle-pad': theme.spacing(0.25),
}));

const StyledIndicator = styled(Box, {
  name: 'IconToggle',
  slot: 'indicator',
})(({ theme }) => ({
  position: 'absolute',
  top: 'var(--icon-toggle-pad)',
  bottom: 'var(--icon-toggle-pad)',
  left: 'var(--icon-toggle-pad)',
  width:
    'calc((100% - 2 * var(--icon-toggle-pad) - (var(--icon-toggle-count) - 1) * var(--icon-toggle-gap)) / var(--icon-toggle-count))',
  borderRadius: theme.spacing(0.5),
  backgroundColor: theme.palette.brand.white,
  pointerEvents: 'none',
  zIndex: 0,
  transform:
    'translateX(calc(var(--icon-toggle-index) * (100% + var(--icon-toggle-gap))))',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
    easing: theme.transitions.easing.easeInOut,
  }),
}));

export function IconToggle<T = string>({
  value: controlledValue,
  onChange,
  options,
  defaultValue = options[0]?.value,
  slotProps,
  disabled,
}: IconToggleProps<T>): ReactElement {
  const [internalValue, setInternalValue] = useState<T | undefined>(
    defaultValue,
  );
  const activeValue = controlledValue ?? internalValue;

  const activeIndex = useMemo(() => {
    const index = options.findIndex((o) => o.value === activeValue);
    return index >= 0 ? index : 0;
  }, [activeValue, options]);

  const handleClick = useMemoizedFn((val: T) => {
    setInternalValue(val);
    onChange?.(val);
  });

  const rootStyle = {
    '--icon-toggle-count': options.length,
    '--icon-toggle-index': activeIndex,
  } as CSSProperties;

  return (
    <StyledButtonGroup disableElevation style={rootStyle} {...slotProps?.root}>
      <StyledIndicator />
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

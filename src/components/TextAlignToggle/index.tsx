import {
  AlignCenterLine,
  AlignLeftLine,
  AlignRightLine,
} from '@mingcute/react';
import {
  ButtonGroup,
  ButtonGroupProps,
  IconButtonProps,
  styled,
  type SvgIconProps,
} from '@mui/material';
import { useMemoizedFn } from 'ahooks';
import { useState, type ReactElement } from 'react';

import { TextAlignToggleItem } from './TextAlignToggleItem';
import { TextAlign, TextAlignOption } from './type';

export interface TextAlignToggleProps {
  value?: TextAlign;
  onChange?: (value: TextAlign) => void;
  defaultValue?: TextAlign;
  slotProps?: {
    root?: ButtonGroupProps;
    button?: IconButtonProps;
    icon?: SvgIconProps;
  };
  disabled?: boolean;
}

const StyledButtonGroup = styled(ButtonGroup, {
  name: 'TextAlignToggle',
  slot: 'root',
})(({ theme }) => ({
  borderRadius: theme.spacing(1),
  overflow: 'hidden',
  background: theme.palette.shades[100],
  gap: theme.spacing(0.25),
  padding: theme.spacing(0.25),
}));

const ALIGN_OPTIONS: TextAlignOption[] = [
  { value: TextAlign.LEFT, Icon: AlignLeftLine, label: 'Align left' },
  { value: TextAlign.CENTER, Icon: AlignCenterLine, label: 'Align center' },
  { value: TextAlign.RIGHT, Icon: AlignRightLine, label: 'Align right' },
];

export function TextAlignToggle({
  value: controlledValue,
  onChange,
  defaultValue = TextAlign.LEFT,
  slotProps,
  disabled,
}: TextAlignToggleProps): ReactElement {
  const [internalValue, setInternalValue] = useState<TextAlign>(defaultValue);
  const activeAlign = controlledValue ?? internalValue;

  const handleClick = useMemoizedFn((align: TextAlign) => {
    setInternalValue(align);
    onChange?.(align);
  });

  return (
    <StyledButtonGroup disableElevation {...slotProps?.root}>
      {ALIGN_OPTIONS.map((item) => (
        <TextAlignToggleItem
          key={item.value}
          item={item}
          activeAlign={activeAlign}
          disabled={disabled}
          onClick={handleClick}
          slotProps={slotProps}
        />
      ))}
    </StyledButtonGroup>
  );
}

export { TextAlign };

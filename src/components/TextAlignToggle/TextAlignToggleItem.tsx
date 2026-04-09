import {
  IconButton,
  IconButtonProps,
  styled,
  type SvgIconProps,
  type SxProps,
} from '@mui/material';
import { useMemoizedFn } from 'ahooks';
import { type ReactElement } from 'react';

import type { TextAlign, TextAlignOption } from './type';

const StyledIconButton = styled(IconButton, {
  name: 'TextAlignToggle',
  slot: 'button',
})<{ ownerState?: { active?: boolean } }>(({ theme, ownerState }) => ({
  borderRadius: theme.spacing(0.5),
  padding: theme.spacing(0.875),
  color: theme.palette.text.primary,
  backgroundColor: ownerState?.active
    ? theme.palette.brand.white
    : 'transparent',
  '&:hover': {
    backgroundColor: ownerState?.active
      ? theme.palette.brand.white
      : 'transparent',
  },
  transition: theme.transitions.create(['background-color', 'color'], {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface TextAlignToggleItemProps {
  item: TextAlignOption;
  activeAlign: TextAlign;
  disabled?: boolean;
  onClick: (value: TextAlign) => void;
  slotProps?: {
    button?: IconButtonProps;
    icon?: SvgIconProps;
  };
}

export function TextAlignToggleItem({
  item: { value, Icon, label },
  activeAlign,
  disabled,
  onClick,
  slotProps,
}: TextAlignToggleItemProps): ReactElement {
  const handleClick = useMemoizedFn(() => onClick(value));
  const active = activeAlign === value;

  return (
    <StyledIconButton
      aria-label={label}
      aria-pressed={active}
      disabled={disabled}
      disableRipple
      ownerState={{ active }}
      onClick={handleClick}
      {...slotProps?.button}
    >
      <Icon sx={{ fontSize: '1.5rem' }} {...slotProps?.icon} />
    </StyledIconButton>
  );
}

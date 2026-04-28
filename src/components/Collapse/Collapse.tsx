import {
  ButtonBase,
  Collapse as MuiCollapse,
  Stack,
  styled,
} from '@mui/material';
import { useMemoizedFn } from 'ahooks';
import { useState } from 'react';
import { type CollapseProps } from './type';

const StyledRoot = styled(Stack, {
  name: 'PearCollapse',
  slot: 'root',
})(({ theme }) => ({
  width: '100%',
  gap: theme.spacing(1),
}));

const StyledHeaderRow = styled(Stack, {
  name: 'PearCollapse',
  slot: 'headerRow',
})(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
}));

const StyledTriggerSlot = styled(Stack, {
  name: 'PearCollapse',
  slot: 'triggerSlot',
})({
  flex: 1,
  minWidth: 0,
  flexDirection: 'row',
  alignItems: 'center',
});

const StyledTrigger = styled(ButtonBase, {
  name: 'PearCollapse',
  slot: 'trigger',
})(({ theme }) => ({
  display: 'inline-flex',
  alignSelf: 'flex-start',
  maxWidth: '100%',
  minWidth: 0,
  borderRadius: theme.spacing(0.5),
  padding: 0,
  alignItems: 'center',
}));

const StyledContent = styled(Stack, {
  name: 'PearCollapse',
  slot: 'content',
})({
  width: '100%',
});

export function Collapse(props: CollapseProps) {
  const {
    trigger,
    actions,
    children,
    expanded: expandedProp,
    onChange,
    disabled = false,
    slotProps,
    ...restProps
  } = props;
  const [uncontrolledExpanded, setUncontrolledExpanded] = useState(false);
  const expanded = expandedProp ?? uncontrolledExpanded;

  const handleToggle = useMemoizedFn(() => {
    if (disabled) {
      return;
    }

    const nextExpanded = !expanded;
    if (expandedProp === undefined) {
      setUncontrolledExpanded(nextExpanded);
    }
    onChange?.(nextExpanded);
  });

  return (
    <StyledRoot {...restProps} {...slotProps?.root}>
      <StyledHeaderRow>
        <StyledTriggerSlot>
          <StyledTrigger
            component="div"
            disableRipple
            aria-expanded={expanded}
            disabled={disabled}
            onClick={handleToggle}
            {...slotProps?.trigger}
          >
            {trigger}
          </StyledTrigger>
        </StyledTriggerSlot>
        {actions}
      </StyledHeaderRow>
      <MuiCollapse in={expanded} timeout="auto" {...slotProps?.content}>
        <StyledContent>{children}</StyledContent>
      </MuiCollapse>
    </StyledRoot>
  );
}

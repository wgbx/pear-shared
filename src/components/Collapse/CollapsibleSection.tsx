import { Stack, Typography, styled } from '@mui/material';
import { useMemoizedFn } from 'ahooks';
import { useState } from 'react';
import { Collapse } from './Collapse';
import { type CollapsibleSectionProps } from './collapsible-section-type';
import { DownLine } from '@mingcute/react';

const StyledTrigger = styled(Stack, {
  name: 'PearCollapsibleSection',
  slot: 'trigger',
})(({ theme }) => ({
  minWidth: 0,
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(0.5),
}));

const StyledLabel = styled(Typography, {
  name: 'PearCollapsibleSection',
  slot: 'label',
})({
  minWidth: 0,
});

const StyledArrow = styled(Stack, {
  name: 'PearCollapsibleSection',
  slot: 'arrow',
  shouldForwardProp: (prop) => prop !== 'expanded',
})<{ expanded: boolean }>(({ theme, expanded }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
  transition: theme.transitions.create('transform', { duration: 200 }),
  '& svg': {
    fontSize: '1.25rem',
    color: theme.palette.shades[900],
  },
}));

export function CollapsibleSection(props: CollapsibleSectionProps) {
  const {
    label,
    sx,
    children,
    onChange,
    disabled = false,
    ...restProps
  } = props;
  const [expanded, setExpanded] = useState(false);

  const handleChange = useMemoizedFn((nextExpanded: boolean) => {
    setExpanded(nextExpanded);
    onChange?.(nextExpanded);
  });

  return (
    <Collapse
      expanded={expanded}
      onChange={handleChange}
      disabled={disabled}
      trigger={
        <StyledTrigger sx={sx}>
          <StyledLabel>{label}</StyledLabel>
          {disabled ? null : (
            <StyledArrow expanded={expanded}>
              <DownLine />
            </StyledArrow>
          )}
        </StyledTrigger>
      }
      {...restProps}
    >
      {children}
    </Collapse>
  );
}

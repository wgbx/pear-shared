import { styled, Tab, type TabProps } from '@mui/material';
import { forwardRef } from 'react';

export interface TabItemProps extends TabProps {
  slotProps?: TabProps;
}

const StyledTab = styled(Tab, {
  name: 'PearTabs',
  slot: 'tab',
})(({ theme }) => ({
  textTransform: 'none',
  fontSize: '0.875rem',
  fontWeight: 600,
  minWidth: 'fit-content',
  padding: 0,
  color: theme.palette.shades[600],
  '&.Mui-selected': {
    color: theme.palette.shades[900],
    fontWeight: 600,
  },
}));

export const TabItem = forwardRef<HTMLDivElement, TabItemProps>(
  ({ value, slotProps, ...restProps }, ref) => {
    return (
      <StyledTab
        ref={ref}
        disableRipple
        value={String(value)}
        sx={slotProps?.sx}
        {...restProps}
      />
    );
  },
);

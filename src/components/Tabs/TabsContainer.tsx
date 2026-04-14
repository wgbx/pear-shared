import { Tabs, styled } from '@mui/material';
import { useMemoizedFn } from 'ahooks';
import { type SyntheticEvent } from 'react';
import type { TabsProps } from './type';

interface TabsContainerProps extends Omit<TabsProps, 'items' | 'slotProps'> {}

const StyledTabs = styled(Tabs, {
  name: 'PearTabs',
  slot: 'root',
})(({ theme }) => ({
  height: 48,
  backgroundColor: 'transparent',
  p: 0,
  '& .MuiTabs-flexContainer': {
    gap: theme.spacing(2),
  },
  '& .MuiTabs-indicator': {
    height: 3,
    borderColor: theme.palette.shades[900],
  },
}));

export function TabsContainer(props: TabsContainerProps) {
  const { value, onChange, children, ...restProps } = props;

  const handleChange = useMemoizedFn((_: SyntheticEvent, newValue: string) => {
    onChange(newValue);
  });

  return (
    <StyledTabs value={String(value)} onChange={handleChange} {...restProps}>
      {children}
    </StyledTabs>
  );
}

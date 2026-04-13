import { Tabs, styled, type TabsProps } from '@mui/material';
import { useMemoizedFn } from 'ahooks';
import { ReactElement, type SyntheticEvent } from 'react';

interface TabsContainerProps
  extends Omit<TabsProps, 'value' | 'onChange' | 'variant'> {
  value: string;
  onChange: (value: string) => void;
}

const StyledTabs = styled(Tabs, {
  name: 'PearTabs',
  slot: 'root',
})(({ theme }) => ({
  height: 48,
  backgroundColor: 'transparent',
  borderBottom: '1px solid',
  borderColor: theme.palette.shades[100],
  p: 0,
  '& .MuiTabs-flexContainer': {
    gap: theme.spacing(2),
  },
  '& .MuiTabs-indicator': {
    height: 3,
    borderColor: theme.palette.shades[900],
  },
}));

export function TabsContainer(props: TabsContainerProps): ReactElement {
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

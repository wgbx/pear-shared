import { styled } from '@mui/material';
import { type TabsProps } from './type';
import { Tabs } from './index';

const StyledSegmentedTabs = styled(Tabs, {
  name: 'PearSegmentedTabs',
  slot: 'root',
})(({ theme }) => ({
  backgroundColor: 'unset',
  paddingLeft: 0,
  paddingRight: 0,
  minHeight: 'unset',
  height: 36,
  width: '100%',
  borderRadius: theme.spacing(1),
  '& .MuiTabs-indicator': {
    bottom: 'auto',
    top: theme.spacing(0.5),
    height: 28,
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.spacing(1),
    zIndex: 0,
  },
  '& .MuiTabs-scroller': {
    backgroundColor: '#2D2D330D',
    borderRadius: 2,
    height: 'unset',
    '& .MuiTabs-flexContainer': {
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5),
    },
  },
  '& .MuiTabs-centered': { gap: theme.spacing(2.5), height: '100%' },
  '& .MuiTab-root': {
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
    flex: 1,
    fontSize: '0.875rem',
    fontWeight: 600,
    minHeight: 28,
    height: 28,
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
    position: 'relative',
    zIndex: 1,
    transition: theme.transitions.create('color', { duration: 200 }),
  },
}));

export function SegmentedTabs(props: TabsProps) {
  return <StyledSegmentedTabs centered {...props} />;
}

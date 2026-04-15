import {
  Popover as MuiPopover,
  type PopoverProps,
  styled,
} from '@mui/material';
import { type ReactElement } from 'react';

const StyledPopover = styled(MuiPopover, {
  name: 'Popover',
  slot: 'root',
})(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: theme.spacing(1),
    marginTop: theme.spacing(0.5),
  },
}));

export function Popover(props: PopoverProps): ReactElement {
  return <StyledPopover {...props} />;
}

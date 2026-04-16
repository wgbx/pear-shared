import { Divider as MuiDivider, Menu as MuiMenu, styled } from '@mui/material';

import { MenuDropdownListItem } from './MenuDropdownListItem';
import type { MenuDropdownProps } from './type';

const StyledMenu = styled(MuiMenu, {
  name: 'PearMenu',
  slot: 'root',
})(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: theme.spacing(1),
  },
  '& .MuiList-root': {
    padding: theme.spacing(1),
    minWidth: 260,
  },
}));

const StyledDivider = styled(MuiDivider, {
  name: 'PearMenu',
  slot: 'divider',
})(({ theme }) => ({
  marginTop: '4px!important',
  marginBottom: '4px!important',
  borderColor: theme.palette.shades[200],
}));

export function MenuDropdown(props: MenuDropdownProps) {
  const { items, slotProps, onClose, ...restProps } = props;

  return (
    <StyledMenu
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: slotProps?.paper,
        },
        ...slotProps?.menu,
      }}
      {...restProps}
    >
      {items.flatMap((group, groupIndex) => [
        ...(groupIndex > 0 ? [<StyledDivider key={`group-${groupIndex}-divider`} />] : []),
        ...group.items.map((item, itemIndex) => (
          <MenuDropdownListItem
            key={`group-${groupIndex}-item-${itemIndex}`}
            item={item}
            onClose={onClose}
          />
        )),
      ])}
    </StyledMenu>
  );
}

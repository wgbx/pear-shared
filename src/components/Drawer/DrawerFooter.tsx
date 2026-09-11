import { Stack, styled } from '@mui/material';
import { type ReactElement } from 'react';
import { DrawerFooterItemButton } from './DrawerFooterItemButton';
import { useDrawerStyleType } from './DrawerStyleTypeContext';
import { type DrawerFooterProps } from './type';

const FooterActions = styled(Stack, {
  name: 'DrawerFooter',
  slot: 'root',
})(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'stretch',
  gap: theme.spacing(1.25),
  padding: theme.spacing(2),
}));

export function DrawerFooter({
  items,
  styleType: styleTypeProp,
}: DrawerFooterProps): ReactElement {
  const styleType = useDrawerStyleType(styleTypeProp);

  return (
    <FooterActions>
      {items.map((item, itemIndex) => (
        <DrawerFooterItemButton
          key={itemIndex}
          item={item}
          styleType={styleType}
        />
      ))}
    </FooterActions>
  );
}

DrawerFooter.displayName = 'DrawerFooter';

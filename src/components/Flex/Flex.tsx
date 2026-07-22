import { Stack, styled } from '@mui/material';
import { type ReactElement } from 'react';
import { type FlexProps } from './type';

const StyledFlex = styled(Stack, {
  name: 'Flex',
  slot: 'root',
})({});

export function Flex({
  direction = 'row',
  alignItems = 'center',
  useFlexGap = true,
  ...restProps
}: FlexProps): ReactElement {
  return (
    <StyledFlex
      direction={direction}
      alignItems={alignItems}
      useFlexGap={useFlexGap}
      {...restProps}
    />
  );
}

Flex.displayName = 'Flex';

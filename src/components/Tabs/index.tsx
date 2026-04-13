import { type ReactElement } from 'react';

import { TabItem } from './TabItem';
import { TabsContainer } from './TabsContainer';
import type { TabsProps } from './type';

export type { TabOption, TabsProps, TabVariant } from './type';

export function Tabs(props: TabsProps): ReactElement {
  const { options, disabled = false, slotProps } = props;
  return (
    <TabsContainer {...props}>
      {options.map((option) => (
        <TabItem
          key={String(option.value)}
          disabled={disabled ?? option.disabled}
          slotProps={slotProps?.tab}
          {...option}
        />
      ))}
    </TabsContainer>
  );
}

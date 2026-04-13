import { SegmentedTabs } from './SegmentedTabs';
import { TabItem } from './TabItem';
import { TabsContainer } from './TabsContainer';
import { TabOption, TabsProps } from './type';

export type { TabOption, TabsProps } from './type';

export function Tabs(props: TabsProps) {
  const { items, disabled = false, slotProps, ...restProps } = props;
  return (
    <TabsContainer {...restProps}>
      {items.map((option: TabOption) => (
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

export { SegmentedTabs };

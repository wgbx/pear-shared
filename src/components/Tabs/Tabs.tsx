import { TabOption, TabsProps } from './type';
import { TabItem } from './TabItem';
import { TabsContainer } from './TabsContainer';

export function Tabs(props: TabsProps) {
  const { items, disabled = false, slotProps, ...restProps } = props;

  return (
    <TabsContainer
      disabled={disabled}
      scrollButtons="auto"
      variant="scrollable"
      allowScrollButtonsMobile={false}
      {...restProps}
    >
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

---
title: SelectDropdown
---

# SelectDropdown

基于 MUI `Menu` 构建的选择菜单面板。触发器由业务方自行实现；`SelectDropdown` 只负责开关定位、选项渲染以及可选的选中勾选标记。优先使用 `useSelectDropdown` 管理锚点与选中值状态，若只需要开关控制则可搭配 `useAnchorEl` 组合使用。

## 示例

### 基础用法

```tsx
import { Button, SelectDropdown, useSelectDropdown } from '@bosinc/shared';

export default () => {
  const { onClick, ...selectProps } = useSelectDropdown({
    defaultValue: 'inter',
  });

  return (
    <>
      <Button onClick={onClick}>{selectProps.value}</Button>
      <SelectDropdown
        {...selectProps}
        options={[
          { label: 'Inter', value: 'inter' },
          { label: 'Roboto', value: 'roboto' },
          { label: 'Georgia', value: 'georgia' },
        ]}
      />
    </>
  );
};
```

### 长列表（滚动）

默认 `menuMaxHeight` 为 `400`。选项较多时，面板高度会被限制并出现滚动条。

```tsx
import { useMemo } from 'react';
import { Button, SelectDropdown, useSelectDropdown } from '@bosinc/shared';

export default () => {
  const { onClick, ...selectProps } = useSelectDropdown({
    defaultValue: 1,
  });

  const options = useMemo(
    () =>
      Array.from({ length: 100 }, (_, index) => {
        const value = index + 1;
        return { label: `Option ${value}`, value };
      }),
    [],
  );

  return (
    <>
      <Button onClick={onClick}>Option {selectProps.value}</Button>
      <SelectDropdown {...selectProps} options={options} />
    </>
  );
};
```

### 触发器文案固定（触发器不显示当前值）

触发器文案保持固定（例如 "Sort by"）。选中操作仍会更新应用状态；若初始不需要展示任何选中项，可省略 `value` / `defaultValue`。

```tsx
import { Stack, Typography } from '@mui/material';
import { DownLine } from '@mingcute/react';
import { SelectDropdown, useSelectDropdown } from '@bosinc/shared';

export default () => {
  const { onClick, ...selectProps } = useSelectDropdown<'newest' | 'oldest'>();

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        gap={0.5}
        onClick={onClick}
        sx={{ cursor: 'pointer' }}
      >
        <Typography sx={{ fontSize: '0.875rem', fontWeight: 600 }}>
          Sort by
        </Typography>
        <DownLine />
      </Stack>

      <SelectDropdown
        {...selectProps}
        options={[
          { label: 'Date (Newest first)', value: 'newest' },
          { label: 'Date (Oldest first)', value: 'oldest' },
        ]}
      />
    </>
  );
};
```

### 选项预览样式

```tsx
import { Button, SelectDropdown, useSelectDropdown } from '@bosinc/shared';

export default () => {
  const { onClick, ...selectProps } = useSelectDropdown({
    defaultValue: 700,
  });

  return (
    <>
      <Button onClick={onClick}>Weight {selectProps.value}</Button>
      <SelectDropdown
        {...selectProps}
        options={[
          {
            label: 'Regular',
            value: 400,
            slotProps: { text: { sx: { fontWeight: 400 } } },
          },
          {
            label: 'Bold',
            value: 700,
            slotProps: { text: { sx: { fontWeight: 700 } } },
          },
        ]}
      />
    </>
  );
};
```

### 仅使用 useAnchorEl

当选中值由其他地方管理时，可用 `useAnchorEl` 来控制开关：

```tsx
import { useState } from 'react';
import { Button, SelectDropdown, useAnchorEl } from '@bosinc/shared';

export default () => {
  const { onClick, ...menuProps } = useAnchorEl();
  const [value, setValue] = useState('inter');

  return (
    <>
      <Button onClick={onClick}>{value}</Button>
      <SelectDropdown
        {...menuProps}
        value={value}
        onChange={(option) => setValue(String(option.value))}
        options={[
          { label: 'Inter', value: 'inter' },
          { label: 'Roboto', value: 'roboto' },
        ]}
      />
    </>
  );
};
```

## API

### SelectDropdownProps

| 属性          | 说明                                        | 类型                                        | Required | 默认值 |
| ------------- | ------------------------------------------- | ------------------------------------------- | -------- | ------ |
| anchorEl      | 菜单定位所用的锚点元素                      | `HTMLElement \| null`                       | ✅       | `-`    |
| open          | 菜单是否展开                                | `boolean`                                   | ✅       | `-`    |
| onClose       | 菜单应关闭时调用                            | `() => void`                                | ✅       | `-`    |
| options       | 选项列表                                    | `SelectDropdownOption<T>[]`                 | ✅       | `-`    |
| value         | 选中值。省略 / `undefined` 表示未选中任何项 | `T`                                         | `-`      | `-`    |
| onChange      | 选中某个选项后调用；随后菜单会关闭          | `(option: SelectDropdownOption<T>) => void` | `-`      | `-`    |
| showCheck     | 在选中项上显示勾选标记                      | `boolean`                                   | `-`      | `true` |
| menuMaxHeight | 菜单面板最大高度                            | `number`                                    | `-`      | `400`  |
| slotProps     | 面板与菜单的样式覆盖                        | object                                      | `-`      | `-`    |

### SelectDropdownOption

| 属性      | 说明                                 | 类型        | Required | 默认值  |
| --------- | ------------------------------------ | ----------- | -------- | ------- |
| label     | 选项标签                             | `ReactNode` | ✅       | `-`     |
| value     | 选项值                               | `T`         | ✅       | `-`     |
| disabled  | 禁用该选项                           | `boolean`   | `-`      | `false` |
| slotProps | 单个选项的样式覆盖（`root`、`text`） | object      | `-`      | `-`     |

---
title: useSelectDropdown
---

# useSelectDropdown

将 `useAnchorEl` 与 `SelectDropdown` 所需的选中值状态结合在一起。支持受控（`value`）和非受控（`defaultValue`）两种模式。

触发元素保留 `onClick`；其余属性（包括 `value`）展开到 `SelectDropdown` 上。

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

### 受控模式

```tsx
import { useState } from 'react';
import { Button, SelectDropdown, useSelectDropdown } from '@bosinc/shared';

export default () => {
  const [value, setValue] = useState('inter');
  const { onClick, ...selectProps } = useSelectDropdown({
    value,
    onChange: (option) => setValue(String(option.value)),
  });

  return (
    <>
      <Button onClick={onClick}>{value}</Button>
      <SelectDropdown
        {...selectProps}
        options={[
          { label: 'Inter', value: 'inter' },
          { label: 'Roboto', value: 'roboto' },
        ]}
      />
    </>
  );
};
```

### 固定触发文案

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

## API

### UseSelectDropdownOptions

| 参数         | 说明                 | 类型                                        | 是否必填 | 默认值 |
| ------------ | -------------------- | ------------------------------------------- | -------- | ------ |
| value        | 受控模式下的选中值   | `T`                                         | `-`      | `-`    |
| defaultValue | 非受控模式下的初始值 | `T`                                         | `-`      | `-`    |
| onChange     | 选中项变化时调用     | `(option: SelectDropdownOption<T>) => void` | `-`      | `-`    |

### 返回值

| 参数     | 说明                                             | 类型                                        |
| -------- | ------------------------------------------------ | ------------------------------------------- |
| anchorEl | 当前的锚点元素                                   | `T \| null`                                 |
| open     | 菜单是否应该展开                                 | `boolean`                                   |
| onClick  | 根据点击事件设置锚点（用于触发元素）             | `(event: MouseEvent<E>) => void`            |
| onClose  | 清除锚点（关闭）                                 | `() => void`                                |
| value    | 当前选中值                                       | `T \| undefined`                            |
| onChange | 更新选中项（展开到 `SelectDropdown` 时也会包含） | `(option: SelectDropdownOption<T>) => void` |

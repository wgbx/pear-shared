---
title: useAnchorEl
---

# useAnchorEl

用于任何通过 `anchorEl` 定位自身的 UI 的通用 Hook（MUI 的 `Menu` / `Popover` / `Popper`，或共享封装组件如 `MenuDropdown`、`SelectDropdown`、`Popover`）。

返回值的结构与浮层组件的 props 一致（`anchorEl` / `open` / `onClose`），因此触发元素保留 `onClick`，其余属性展开到浮层组件上即可。

## 示例

### 配合 MenuDropdown 使用

```tsx
import { Button, MenuDropdown, useAnchorEl } from '@bosinc/shared';
import { ProfileLine, Settings3Line } from '@mingcute/react';

export default () => {
  const { onClick, ...menuProps } = useAnchorEl();

  const items = [
    [
      { icon: ProfileLine, label: 'Profile', onClick: () => {} },
      { icon: Settings3Line, label: 'Settings', onClick: () => {} },
    ],
  ];

  return (
    <>
      <Button onClick={onClick}>Open Menu</Button>
      <MenuDropdown {...menuProps} items={items} />
    </>
  );
};
```

### 配合 SelectDropdown 使用

如果还需要选中值的状态，优先使用 `useSelectDropdown`。仅使用 `useAnchorEl` 时：

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
          { label: 'Georgia', value: 'georgia' },
        ]}
      />
    </>
  );
};
```

### 配合 Popover 使用

```tsx
import { Button, Popover, useAnchorEl } from '@bosinc/shared';

export default () => {
  const { onClick, ...popoverProps } = useAnchorEl();

  return (
    <>
      <Button onClick={onClick}>Open Popover</Button>
      <Popover
        {...popoverProps}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <div style={{ padding: 16 }}>Popover content</div>
      </Popover>
    </>
  );
};
```

## API

### 返回值

| 参数     | 说明                                 | 类型                             |
| -------- | ------------------------------------ | -------------------------------- |
| anchorEl | 当前的锚点元素                       | `T \| null`                      |
| open     | 浮层是否应该展开                     | `boolean`                        |
| onClick  | 根据点击事件设置锚点（用于触发元素） | `(event: MouseEvent<T>) => void` |
| onClose  | 清除锚点（关闭）                     | `() => void`                     |

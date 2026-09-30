---
title: Tabs
---

# Tabs

一个基于 MUI `Tabs` / `Tab` 构建的受控标签页组件。使用 `value` 和 `onChange` 切换当前激活的标签。该组件只渲染标签页的标题，面板内容需要你自己根据 `value` 渲染（见基础用法）。

## 示例

### 基础用法

```tsx
import { Tabs } from '@bosinc/shared';
import { useState } from 'react';

const items = [
  { value: 'details', label: 'Details' },
  { value: 'tickets', label: 'Tickets' },
  { value: 'attendees', label: 'Attendees' },
];

export default () => {
  const [value, setValue] = useState('details');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Tabs value={value} onChange={setValue} items={items} />
      <div>{value} content</div>
    </div>
  );
};
```

### SegmentedTabs

```tsx
import { SegmentedTabs } from '@bosinc/shared';
import { Fade } from '@mui/material';
import { useState } from 'react';

const items = [
  { value: 'overview', label: 'Overview' },
  { value: 'settings', label: 'Settings' },
  { value: 'billing', label: 'Billing' },
];

export default () => {
  const [value, setValue] = useState('overview');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <SegmentedTabs items={items} onChange={setValue} value={value} />
      <Fade in key={value} timeout={200}>
        <div>{value} content</div>
      </Fade>
    </div>
  );
};
```

### 自定义样式

使用 `slotProps` 为根节点 `Tabs`、每个 `Tab` 以及下划线指示器设置样式。`slotProps.tab` 会应用到**每一个**标签。

```tsx
import { Tabs } from '@bosinc/shared';
import { useState } from 'react';

const items = [
  { value: 'overview', label: 'Overview' },
  { value: 'settings', label: 'Settings' },
  { value: 'billing', label: 'Billing' },
];

export default () => {
  const [value, setValue] = useState('overview');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Tabs
        value={value}
        onChange={setValue}
        items={items}
        sx={{
          '& .MuiTabs-indicator': {
            display: 'none',
          },
        }}
        slotProps={{
          root: {
            sx: {
              px: 1,
              borderRadius: 2,
              bgcolor: 'shades.50',
              borderBottom: 'none',
              '& .MuiTabs-flexContainer': { gap: 0.5 },
            },
          },
          tab: {
            sx: {
              borderRadius: 1.5,
              mx: 0.25,
              color: 'blue.600',
              fontSize: '1rem',
              '&.Mui-selected': {
                bgcolor: 'shades.a10',
                boxShadow: 1,
                color: 'blue.700',
              },
            },
          },
        }}
      />
      <div>{value} content</div>
    </div>
  );
};
```

## API

### TabsProps

| 属性      | 说明                                            | 类型                          | 是否必填 | 默认值        |
| --------- | ----------------------------------------------- | ----------------------------- | -------- | ------------- |
| value     | 当前激活的标签值                                | `T`                           | `✅`     | `-`           |
| onChange  | 激活标签变化时触发                              | `(value: T) => void`          | `✅`     | `-`           |
| items     | 标签定义列表                                    | `TabOption<T>[]`              | `✅`     | `-`           |
| variant   | `underline` 显示下划线指示器；`standard` 则隐藏 | `'underline' \| 'standard'`   | `-`      | `'underline'` |
| centered  | 使标签栏居中                                    | `boolean`                     | `-`      | `false`       |
| disabled  | 禁用所有标签（单个标签的 `disabled` 仍然生效）  | `boolean`                     | `-`      | `false`       |
| slotProps | 透传给 MUI 的插槽属性                           | `{ root?, tab?, indicator? }` | `-`      | `-`           |

### slotProps

| Key         | 说明                                                                   |
| ----------- | ---------------------------------------------------------------------- |
| `root`      | 传给 MUI `Tabs` 根节点（如 `sx`，以及上文未列出的其他属性）            |
| `tab`       | 传给每个 `Tab`（如 `sx`、`disableRipple`）；所有标签共用               |
| `indicator` | 传给 MUI 标签指示器；`variant="standard"` 时该属性不生效（指示器隐藏） |

### TabOption

| 属性     | 说明                                     | 类型        | 是否必填 | 默认值  |
| -------- | ---------------------------------------- | ----------- | -------- | ------- |
| value    | 标签唯一标识                             | `T`         | `✅`     | `-`     |
| label    | 标签文字                                 | `string`    | `✅`     | `-`     |
| content  | 仅作为数据使用，不会被 `Tabs` 渲染为面板 | `ReactNode` | `-`      | `-`     |
| icon     | 标签文字前的可选图标                     | `ReactNode` | `-`      | `-`     |
| disabled | 禁用该标签                               | `boolean`   | `-`      | `false` |

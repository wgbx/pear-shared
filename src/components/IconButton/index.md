---
title: IconButton
---

# IconButton

可点击的图标按钮，提供 `icon` + `label` API，三档 `UI_SIZE` token 映射到 16 / 24 / 48 图标尺寸。内边距固定为 `8px`。

## 示例

### 基础用法

```tsx
import { IconButton } from '@bosinc/shared';
import { CloseLine } from '@mingcute/react';
import { Stack } from '@mui/material';

export default () => {
  return (
    <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 1 }}>
      <IconButton
        icon={<CloseLine />}
        label="Close"
        onClick={() => alert('clicked')}
      />
    </Stack>
  );
};
```

### 尺寸

`size` 复用 `UI_SIZE`（`small` / `medium` / `large`），不支持 `xsmall`。

| `UI_SIZE` | 图标         |
| --------- | ------------ |
| `SMALL`   | 16px         |
| `MEDIUM`  | 24px（默认） |
| `LARGE`   | 48px         |

```tsx
import { IconButton, UI_SIZE } from '@bosinc/shared';
import { Settings5Line } from '@mingcute/react';
import { Stack } from '@mui/material';

export default () => {
  return (
    <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
      <IconButton
        icon={<Settings5Line />}
        label="Settings"
        size={UI_SIZE.SMALL}
        onClick={() => {}}
      />
      <IconButton
        icon={<Settings5Line />}
        label="Settings"
        size={UI_SIZE.MEDIUM}
        onClick={() => {}}
      />
      <IconButton
        icon={<Settings5Line />}
        label="Settings"
        size={UI_SIZE.LARGE}
        onClick={() => {}}
      />
    </Stack>
  );
};
```

### 无障碍标签

默认使用图标组件的名称（如 `Settings5Line`），可传入 `label` 覆盖。

```tsx
import { IconButton } from '@bosinc/shared';
import { CloseLine } from '@mingcute/react';

export default () => {
  return (
    <IconButton
      icon={<CloseLine />}
      label="Dismiss banner"
      onClick={() => {}}
    />
  );
};
```

## API

| 属性          | 说明                                         | 类型             | 必填 | 默认值           |
| ------------- | -------------------------------------------- | ---------------- | ---- | ---------------- |
| icon          | 图标内容                                     | `ReactNode`      | ✅   | `-`              |
| label         | 无障碍标签，会覆盖图标组件名称               | `string`         | `-`  | 图标组件名称     |
| size          | 图标尺寸 token（`UI_SIZE`，不支持 `xsmall`） | `IconButtonSize` | `-`  | `UI_SIZE.MEDIUM` |
| onClick       | 点击回调                                     | `function`       | `-`  | `-`              |
| disableRipple | 禁用水波纹效果                               | `boolean`        | `-`  | `true`           |
| disabled      | 禁用按钮                                     | `boolean`        | `-`  | `false`          |

同时也接受其他 MUI `IconButton` 属性，`children` 和 MUI 的 `size` 除外。

默认样式：

- 内边距 `8px`（`theme.spacing(1)`）
- hover / focus-visible / touch-active 状态使用 `shades.100`
- 默认禁用水波纹效果

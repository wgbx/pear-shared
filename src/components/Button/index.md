---
title: Button
---

# Button

两种按钮样式：

- **Button** — 轻量的 MUI 封装（`variant` / `color` / `loading`）
- **MainButton** — Pear Design 的 Btn-CTA（`appearance` / `UI_SIZE` / `isAsync`）

## Button

带 `label` / `icon` / `loading` 的轻量 MUI 按钮封装。

## 示例

### 基础

```tsx
import { Button } from '@bosinc/shared';
import { Stack } from '@mui/material';

export default () => (
  <Stack
    sx={{
      gap: 2,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
    }}
  >
    <Button label="Click me" variant="contained" />
    <Button label="Click me" loading />
  </Stack>
);
```

## API

### ButtonProps

| 属性    | 说明                           | 类型        | 默认值 |
| ------- | ------------------------------ | ----------- | ------ |
| label   | 无 `children` 时显示的按钮文本 | `ReactNode` | `-`    |
| icon    | `startIcon` 的简写             | `ReactNode` | `-`    |
| loading | 显示加载图标并禁用按钮         | `boolean`   | `-`    |

同时接受标准 MUI 按钮属性（包括 `variant`、`color`、`size`、`sx`）。

---

# MainButton

用于主要操作的 Pear Design **Btn-CTA** 按钮，支持 `primary`、`ghost`、`outline` 三种外观。

## 示例

### 基础

```tsx
import { BUTTON_APPEARANCE, MainButton } from '@bosinc/shared';
import { Stack } from '@mui/material';

export default () => (
  <Stack
    sx={{
      gap: 2,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
    }}
  >
    <MainButton label="Primary" />
    <MainButton appearance={BUTTON_APPEARANCE.GHOST} label="Ghost" />
    <MainButton appearance={BUTTON_APPEARANCE.OUTLINE} label="Outline" />
    <MainButton label="Primary" disabled />
    <MainButton label="Button" loading />
  </Stack>
);
```

### 尺寸

```tsx
import { MainButton, UI_SIZE } from '@bosinc/shared';
import { Stack } from '@mui/material';

export default () => (
  <Stack
    sx={{
      gap: 2,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
    }}
  >
    <MainButton label="Primary" size={UI_SIZE.LARGE} />
    <MainButton label="Primary" size={UI_SIZE.MEDIUM} />
    <MainButton label="Primary" size={UI_SIZE.SMALL} />
    <MainButton label="Primary" size={UI_SIZE.XSMALL} />
  </Stack>
);
```

### 带图标

```tsx
import { BUTTON_APPEARANCE, MainButton } from '@bosinc/shared';
import { AddFill } from '@mingcute/react';
import { Stack } from '@mui/material';

export default () => (
  <Stack
    sx={{
      gap: 2,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
    }}
  >
    <MainButton label="Create" icon={<AddFill />} />
    <MainButton
      appearance={BUTTON_APPEARANCE.GHOST}
      label="Create"
      icon={<AddFill />}
    />
    <MainButton
      appearance={BUTTON_APPEARANCE.OUTLINE}
      label="Create"
      icon={<AddFill />}
    />
  </Stack>
);
```

### 异步点击（`isAsync`）

设置 `isAsync` 后，如果 `onClick` 返回一个 Promise，按钮会自动显示加载状态——保存/提交场景无需手动维护 `loading` 状态。

```tsx
import { MainButton } from '@bosinc/shared';

export default () => (
  <MainButton
    isAsync
    label="Save"
    onClick={async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
    }}
  />
);
```

### 自定义样式（`sx`）

> 支持 `sx`，但请仅用于布局相关（margin、width 等）；视觉效果请使用 `appearance` 和 `size`——覆盖颜色、高度或 hover 效果会破坏设计一致性。

```tsx
import { BUTTON_APPEARANCE, MainButton } from '@bosinc/shared';
import { Stack } from '@mui/material';

export default () => (
  <Stack
    sx={{
      gap: 2,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
    }}
  >
    <MainButton label="Continue" sx={{ minWidth: 300 }} />
    <MainButton
      appearance={BUTTON_APPEARANCE.OUTLINE}
      label="Close"
      sx={{ width: 400, borderColor: 'red.700' }}
    />
  </Stack>
);
```

## API

### MainButtonProps

| 属性       | 说明                              | 类型                                     | 默认值                      |
| ---------- | --------------------------------- | ---------------------------------------- | --------------------------- |
| label      | 无 `children` 时显示的按钮文本    | `ReactNode`                              | `-`                         |
| icon       | `startIcon` 的简写                | `ReactNode`                              | `-`                         |
| loading    | 显示加载图标并禁用按钮            | `boolean`                                | `-`                         |
| isAsync    | `onClick` 返回 Promise 时自动加载 | `boolean`                                | `-`                         |
| appearance | Btn-CTA 样式                      | `ButtonAppearance` (`BUTTON_APPEARANCE`) | `BUTTON_APPEARANCE.PRIMARY` |
| size       | 组件尺寸                          | `UiSize` (`UI_SIZE`)                     | `UI_SIZE.MEDIUM`            |

共享的尺寸规格定义在 `UI_SIZE` 中——其他 Pear 组件复用同一套数值。MainButton 专属的 Figma 映射为内部使用。

| `UI_SIZE` 取值 | Figma | 高度 |
| -------------- | ----- | ---- |
| `LARGE`        | L-48  | 48px |
| `MEDIUM`       | L-42  | 42px |
| `SMALL`        | M-32  | 32px |
| `XSMALL`       | S-24  | 24px |

同时接受标准 MUI 按钮属性（`variant` 和 MUI 的 `size` 除外），包括 `sx`（参见[自定义样式](#自定义样式sx)）。

---
title: Drawer
---

# Drawer

统一的响应式抽屉组件，桌面端渲染为 `Dialog`，移动端渲染为 `Drawer`。

## 示例

### 基础用法

```tsx
import { Button, Drawer } from '@bosinc/shared';
import { useState } from 'react';
import { Stack } from '@mui/material';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Edit settings</Button>
      <Drawer
        title="Setting"
        open={open}
        onClose={() => setOpen(false)}
        footer={
          <Stack sx={{ p: 2 }} onClick={() => setOpen(false)}>
            <Button label="Save changes" />
          </Stack>
        }
      >
        <Stack sx={{ p: 2, py: 1, gap: 1 }}>
          <span>Update a few options and save when you’re done.</span>
        </Stack>
      </Drawer>
    </>
  );
};
```

### 操作抽屉

```tsx
import { Button, ActionDrawer } from '@bosinc/shared';
import { useState } from 'react';
import { Stack } from '@mui/material';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Edit settings</Button>
      <ActionDrawer
        title="Setting"
        open={open}
        onClose={() => setOpen(false)}
        actions={[
          {
            label: 'Cancel',
            onClick: () => setOpen(false),
          },
          {
            label: 'Save changes',
            variant: 'contained',
            onClick: async () => {
              await new Promise<void>((resolve) => {
                setTimeout(resolve, 2000);
              });
              setOpen(false);
            },
          },
        ]}
      >
        <Stack sx={{ p: 2, py: 1, gap: 1 }}>
          <span>Update a few options and save when you’re done.</span>
        </Stack>
      </ActionDrawer>
    </>
  );
};
```

### 主样式

```tsx
import { Button, ActionDrawer, DRAWER_STYLE_TYPE } from '@bosinc/shared';
import { useState } from 'react';
import { Stack } from '@mui/material';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Edit settings</Button>
      <ActionDrawer
        title="Setting"
        open={open}
        onClose={() => setOpen(false)}
        styleType={DRAWER_STYLE_TYPE.MAIN}
        actions={[
          {
            label: 'Cancel',
            onClick: () => setOpen(false),
          },
          {
            label: 'Save changes',
            variant: 'contained',
            onClick: async () => {
              await new Promise<void>((resolve) => {
                setTimeout(resolve, 2000);
              });
              setOpen(false);
            },
          },
        ]}
      >
        <Stack sx={{ p: 2, py: 1, gap: 1 }}>
          <span>Update a few options and save when you’re done.</span>
        </Stack>
      </ActionDrawer>
    </>
  );
};
```

### 自定义抽屉

```tsx
import { Button, CustomDrawer } from '@bosinc/shared';
import { useState } from 'react';
import { Stack, Typography } from '@mui/material';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Edit pricing rules</Button>
      <CustomDrawer showClose open={open} onClose={() => setOpen(false)}>
        <Stack sx={{ p: 2, gap: 1 }}>
          <Typography variant="h6">Pricing rules</Typography>
          <Typography variant="body2">
            Review and update the configuration below. Changes take effect after
            you save.
          </Typography>
          <Stack sx={{ gap: 1, pt: 1 }}>
            <Typography variant="body2">- Base rate</Typography>
            <Typography variant="body2">- Minimum charge</Typography>
            <Typography variant="body2">- Rounding policy</Typography>
          </Stack>
        </Stack>
      </CustomDrawer>
    </>
  );
};
```

### 提示抽屉

```tsx
import { Button, NoticeDrawer } from '@bosinc/shared';
import { useState } from 'react';
import { Link, Stack, Typography } from '@mui/material';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open NoticeDrawer</Button>
      <NoticeDrawer open={open} onClose={() => setOpen(false)}>
        <Stack sx={{ p: 2, py: 1, gap: 1.5 }}>
          <Typography sx={{ fontSize: '1.25rem', fontWeight: 700 }}>
            This item can’t be removed because it has associated records.
          </Typography>
          <Typography sx={{ fontSize: '0.875rem' }}>
            To protect historical data, items with linked records can’t be
            removed. If you believe this is a mistake, please contact{' '}
            <Link href="mailto:support@example.com" underline="always">
              support@example.com
            </Link>
            .
          </Typography>
        </Stack>
      </NoticeDrawer>
    </>
  );
};
```

## API

### Drawer

| 属性         | 说明                                                                   | 类型              | 默认值    |
| ------------ | ---------------------------------------------------------------------- | ----------------- | --------- |
| open         | 控制可见性                                                             | `boolean`         | `true`    |
| onClose      | 抽屉应关闭时调用（点击遮罩、按 Esc 等）                                | `() => void`      | —         |
| children     | 可滚动的主要内容                                                       | `ReactNode`       | —         |
| title        | 提供时在 `DrawerHeader` 中居中显示的标题                               | `ReactNode`       | —         |
| footer       | 内容下方可选的吸底 footer 区域                                         | `ReactNode`       | —         |
| stableHeight | 固定 `90dvh` 高度，内容区域可滚动；用于异步加载的内容                  | `boolean`         | —         |
| showHeader   | 为 `true` 时渲染 `DrawerHeader`（关闭按钮行）                          | `boolean`         | `true`    |
| styleType    | Footer 按钮样式：`default` 保持现有 `Button`；`main` 使用 `MainButton` | `DrawerStyleType` | `default` |
| slotProps    | 插槽：`container`、`header`、`content`、`footer`（见下）               | `DrawerSlotProps` | —         |

#### `slotProps`

| 插槽        | 类型 / 结构                                                     | 说明                                                                    |
| ----------- | --------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `container` | `Omit<DrawerContainerProps, 'children' \| 'open' \| 'onClose'>` | `PaperProps`、`maskClosable`、`anchor`、`dialogProps`、`drawerProps` 等 |
| `header`    | `Omit<DrawerHeaderProps, 'title' \| 'onClose'>`                 | `closeButtonProps`、`sx`、`divider`、`titleProps`                       |
| `content`   | `{ sx?: SxProps<Theme> }`                                       | 主滚动区域                                                              |
| `footer`    | `{ sx?: SxProps<Theme>; contentSx?: SxProps<Theme> }`           | Footer 外层容器与内部 stack                                             |

### ActionDrawer

`ActionDrawerProps` 继承自 `Omit<DrawerProps, 'footer'>` 并新增 `actions`。是 `Drawer` 的轻量封装，会根据 `actions` 渲染出 `DrawerFooter`。

| 属性      | 说明                              | 类型                 | 默认值 |
| --------- | --------------------------------- | -------------------- | ------ |
| `actions` | Footer 操作按钮                   | `DrawerActionItem[]` | —      |
| _(其他)_  | 与 `Drawer` 相同，但不含 `footer` | —                    | —      |

### CustomDrawer

`CustomDrawerProps` 继承自 `Omit<DrawerProps, 'showHeader'>`。底层 `Drawer` 始终使用 `showHeader={false}`；当提供 `onClose` 时会在右上角渲染关闭控件。

| 属性               | 说明                                  | 类型              | 默认值 |
| ------------------ | ------------------------------------- | ----------------- | ------ |
| _(与 Drawer 相同)_ | 但不接受 `showHeader`                 | —                 | —      |
| `closeButtonProps` | 传递给包裹关闭图标的 MUI `IconButton` | `IconButtonProps` | —      |

### PromptDrawer

`PromptDrawerProps` 继承自 `Omit<DrawerProps, 'children' | 'footer'>` 并新增提示布局相关字段。所有其他 `Drawer` 属性（`open`、`onClose`、`slotProps`、`showHeader`、`title` 等）都会透传。当前实现仅渲染 **`heading`**、**`description`**、**`children`** 和 **`footer`**；类型上的其他字段（如 `contentSx`、`onConfirm`）目前组件尚未使用。

| 属性          | 说明                                 | 类型        | 默认值 |
| ------------- | ------------------------------------ | ----------- | ------ |
| `heading`     | 提示区块内的主标题                   | `ReactNode` | —      |
| `description` | `heading` 下方的辅助说明文字         | `ReactNode` | —      |
| `children`    | 说明文字之后的内容                   | `ReactNode` | —      |
| `footer`      | 例如 `DrawerFooter` 或自定义操作按钮 | `ReactNode` | —      |

### NoticeDrawer

`NoticeDrawerProps` 继承自 `Omit<DrawerProps, 'children' | 'footer' | 'showHeader'>`。是 `Drawer` 的轻量封装：无头部，footer 中只有一个主要操作按钮。

| 属性       | 说明                       | 类型         | 默认值     |
| ---------- | -------------------------- | ------------ | ---------- |
| `children` | 主要内容                   | `ReactNode`  | —          |
| `label`    | Footer 按钮文本            | `ReactNode`  | `'Got it'` |
| `onClose`  | 关闭回调 + footer 点击回调 | `() => void` | —          |

### DrawerFooter

| 属性    | 说明             | 类型                 | 默认值 |
| ------- | ---------------- | -------------------- | ------ |
| `items` | 一行操作按钮项目 | `DrawerFooterItem[]` | —      |

#### `DrawerFooterItem`

| 属性          | 说明                                                                           | 类型                                         | 默认值 |
| ------------- | ------------------------------------------------------------------------------ | -------------------------------------------- | ------ |
| `label`       | 按钮文本                                                                       | `ReactNode`                                  | —      |
| `onClick`     | 点击回调（可为异步）                                                           | `() => void \| Promise<void>`                | —      |
| `disabled`    | 禁用该项                                                                       | `boolean`                                    | —      |
| `variant`     | MUI 按钮 variant（`default` 样式下生效）。`main` 样式下也会映射到 `appearance` | `ButtonProps['variant']`                     | —      |
| `appearance`  | `styleType` 为 `main` 时的 Pear `MainButton` 外观                              | `ButtonAppearance`                           | —      |
| `type`        | 视觉变体，例如 `'danger'`                                                      | `'danger'`                                   | —      |
| `buttonProps` | 按钮的额外属性                                                                 | `Omit<ButtonProps, 'children' \| 'onClick'>` | —      |

`DrawerFooter` 也接受 `styleType`（默认通过 context 回退到父级 Drawer 的 `styleType`）。

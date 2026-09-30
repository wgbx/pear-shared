---
title: Menu
---

# Menu

基于 MUI `Menu` 和 `MenuItem` 构建的下拉菜单，支持分组项以及每项可选的 `autoClose`。搭配 `useAnchorEl` 管理锚点状态。

## 示例

### 基础下拉菜单

在默认 **`autoClose: true`** 的情况下，`MenuDropdown` 会在你的 **`onClick` 执行之后调用 `onClose`**。通常你**不需要**在 `onClick` 内部再次调用同一个关闭函数。

```tsx
import { Button, MenuDropdown, useAnchorEl } from '@bosinc/shared';
import { ProfileLine, Settings3Line, Key4Line } from '@mingcute/react';

export default () => {
  const { onClick, ...menuProps } = useAnchorEl();

  const items = [
    [
      {
        icon: ProfileLine,
        label: 'Profile',
        onClick: () => {},
      },
      {
        icon: Settings3Line,
        label: 'Settings',
        onClick: () => {},
      },
    ],
    [
      {
        icon: Key4Line,
        label: 'Sign out',
        type: 'danger',
        onClick: () => {},
      },
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

### 异步点击、loading 与 autoClose

默认情况下 **`autoClose` 为 `true`**：**`MenuDropdown` 会在你的 `onClick` 执行完成之后调用 `onClose`**（对异步处理函数来说，即 `await` 完成之后）。你通常**不需要**在 `onClick` 内部再次调用你的关闭函数（如 `onClose`）。

设置 **`autoClose: false`** 后，该项的点击**不会**触发 `MenuDropdown` 的 `onClose`。当你准备好要关闭时（例如 `await` 完成后），**自行在 `onClick` 内调用 `onClose()`**。

```tsx
import { Button, MenuDropdown, useAnchorEl } from '@bosinc/shared';
import { ProfileLine, Settings3Line, Key4Line } from '@mingcute/react';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default () => {
  const { onClick, onClose, ...menuProps } = useAnchorEl();

  const items = [
    [
      {
        icon: ProfileLine,
        label: 'Profile',
        autoClose: false,
        onClick: async () => {
          await sleep(1200);
          onClose();
        },
      },
      {
        icon: Settings3Line,
        label: 'Settings',
        onClick: async () => {
          await sleep(1200);
        },
      },
    ],
    [
      {
        icon: Key4Line,
        label: 'Sign out',
        onClick: () => {},
      },
    ],
  ];

  return (
    <>
      <Button onClick={onClick}>Open Menu</Button>
      <MenuDropdown {...menuProps} onClose={onClose} items={items} />
    </>
  );
};
```

### 自定义文字与图标样式

通过 **`slotProps.text.sx`** 覆盖文字样式，通过 **`slotProps.icon.sx`** 覆盖图标样式。在默认 **`autoClose`** 下，无需在 **`onClick`** 内调用 **`onClose`**；`MenuDropdown` 会在 `onClick` 之后自动调用。

```tsx
import { Button, MenuDropdown, useAnchorEl } from '@bosinc/shared';
import { ProfileLine, Settings3Line, Key4Line } from '@mingcute/react';

export default () => {
  const { onClick, ...menuProps } = useAnchorEl();

  const items = [
    [
      {
        icon: ProfileLine,
        label: 'Profile',
        onClick: () => {},
        slotProps: {
          text: {
            sx: {
              fontWeight: 400,
            },
          },
        },
      },
      {
        icon: Settings3Line,
        label: 'Settings',
        onClick: () => {},
        slotProps: {
          icon: {
            sx: {
              color: 'blue.900',
            },
          },
          text: {
            sx: {
              fontWeight: 400,
            },
          },
        },
      },
    ],
    [
      {
        icon: Key4Line,
        label: 'Sign out',
        onClick: () => {},
        slotProps: {
          icon: {
            sx: {
              width: 24,
              height: 24,
            },
          },
          text: {
            sx: {
              fontWeight: 400,
            },
          },
        },
      },
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

## API

### MenuDropdownProps

| 属性      | 说明                                                                                                                                                                                                                        | 类型                                                      | Required | 默认值 |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | -------- | ------ |
| anchorEl  | 下拉菜单定位所用的锚点元素                                                                                                                                                                                                  | `HTMLElement \| null`                                     | `true`   | `-`    |
| open      | 控制菜单展开状态                                                                                                                                                                                                            | `boolean`                                                 | `true`   | `-`    |
| onClose   | 菜单应关闭时调用（如点击遮罩、按 Escape）。对于使用默认 **`autoClose`** 的项，`MenuDropdown` 会在**该项的 `onClick` 执行完成后调用 `onClose`**（异步处理函数会被 await）。**`autoClose: false`** 的项不会触发这一自动调用。 | `() => void`                                              | `true`   | `-`    |
| items     | 分组菜单项列表（分组的数组）                                                                                                                                                                                                | `MenuDropdownItem[][]`                                    | `true`   | `-`    |
| slotProps | 菜单的可选样式与属性覆盖                                                                                                                                                                                                    | `{ paper?: SxProps<Theme>; menu?: Omit<MenuProps, ...> }` | `-`      | `-`    |

### MenuDropdownItem

与 **`MenuItemProps`** 结构相同，额外增加可选的 **`autoClose`**（见下文）。其余列与 **`MenuItemProps`** 一致。

| 属性      | 说明                                                                                                                                                 | 类型       | Required | 默认值 |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | -------- | ------ |
| autoClose | `true`（默认）：`MenuDropdown` 会在你的 `onClick` 之后调用 `onClose`。`false`：不会为该项调用 `onClose`；准备好后请在 `onClick` 内自行调用关闭函数。 | `boolean`  | `-`      | `true` |
| type      | 菜单项语义类型。设置 `type: 'string'` 可将文字以 `red.700` 颜色渲染。                                                                                | `'string'` | `-`      | `-`    |

### MenuItemProps

| 属性      | 说明                                                                  | 类型                                                                 | Required | 默认值  |
| --------- | --------------------------------------------------------------------- | -------------------------------------------------------------------- | -------- | ------- |
| icon      | 前置图标。传入组件引用，例如 `ProfileLine`。                          | `ElementType`                                                        | `-`      | `-`     |
| label     | 菜单项文字                                                            | `ReactNode`                                                          | `true`   | `-`     |
| onClick   | 启用状态下的点击回调                                                  | `() => void \| Promise<void>`                                        | `-`      | `-`     |
| disabled  | 禁用点击交互                                                          | `boolean`                                                            | `-`      | `false` |
| type      | 菜单项语义类型。设置 `type: 'string'` 可将文字以 `red.700` 颜色渲染。 | `'string'`                                                           | `-`      | `-`     |
| slotProps | 可选样式覆盖                                                          | `{ icon?: { sx?: SxProps<Theme> }; text?: { sx?: SxProps<Theme> } }` | `-`      | `-`     |

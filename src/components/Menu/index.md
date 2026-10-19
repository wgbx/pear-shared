---
title: Menu
---

# Menu

Dropdown menu built on MUI `Menu` and `MenuItem`, with grouped items and optional per-item `autoClose`. Pair with `useAnchorEl` for anchor state.

## Examples

### Basic Dropdown

With default **`autoClose: true`**, `MenuDropdown` calls **`onClose` after your `onClick`**. You normally do **not** call the same dismiss function again inside `onClick`.

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

### Async click, loading & autoClose

By default **`autoClose` is `true`**: **`MenuDropdown` invokes `onClose` after your `onClick` completes** (for async handlers, that means after `await` settles). You usually **do not** call your dismiss helper (e.g. `onClose`) again inside `onClick`.

With **`autoClose: false`**, that item’s click **does not** trigger `onClose` from `MenuDropdown`. When you are ready to dismiss (for example after `await`), **call `onClose()` yourself** inside `onClick`.

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

### Custom label & icon style

Override the label via **`slotProps.text.sx`** and icon via **`slotProps.icon.sx`**. With default **`autoClose`**, omit calling **`onClose`** inside **`onClick`**; `MenuDropdown` will call it after `onClick`.

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

| Property  | Description                                                                                                                                                                                                                                                                       | Type                                                      | Required | Default |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | -------- | ------- |
| anchorEl  | Anchor element for dropdown positioning                                                                                                                                                                                                                                           | `HTMLElement \| null`                                     | `true`   | `-`     |
| open      | Controls menu open state                                                                                                                                                                                                                                                          | `boolean`                                                 | `true`   | `-`     |
| onClose   | Called when the menu should close (e.g. backdrop, Escape). For an item with default **`autoClose`**, `MenuDropdown` calls **`onClose` after that item’s `onClick` completes** (async handlers are awaited). Items with **`autoClose: false`** do not trigger this automatic call. | `() => void`                                              | `true`   | `-`     |
| items     | Grouped menu item list (array of groups)                                                                                                                                                                                                                                          | `MenuDropdownItem[][]`                                    | `true`   | `-`     |
| slotProps | Optional style and prop overrides for menu                                                                                                                                                                                                                                        | `{ paper?: SxProps<Theme>; menu?: Omit<MenuProps, ...> }` | `-`      | `-`     |

### MenuDropdownItem

Same shape as **`MenuItemProps`**, plus optional **`autoClose`** (see below). All other columns match **`MenuItemProps`**.

| Property  | Description                                                                                                                                                                            | Type       | Required | Default |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | -------- | ------- |
| autoClose | `true` (default): `MenuDropdown` calls `onClose` after your `onClick`. `false`: does not call `onClose` for that item; call your dismiss function inside `onClick` when you are ready. | `boolean`  | `-`      | `true`  |
| type      | Item semantic type. Set `type: 'string'` to render label text in `red.700`.                                                                                                            | `'string'` | `-`      | `-`     |

### MenuItemProps

| Property  | Description                                                                 | Type                                                                 | Required | Default |
| --------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------- | -------- | ------- |
| icon      | Leading icon. Pass component reference, e.g. `ProfileLine`.                 | `ElementType`                                                        | `-`      | `-`     |
| label     | Item text                                                                   | `ReactNode`                                                          | `true`   | `-`     |
| onClick   | Click callback for enabled item                                             | `() => void \| Promise<void>`                                        | `-`      | `-`     |
| disabled  | Disable click interaction                                                   | `boolean`                                                            | `-`      | `false` |
| type      | Item semantic type. Set `type: 'string'` to render label text in `red.700`. | `'string'`                                                           | `-`      | `-`     |
| slotProps | Optional style overrides                                                    | `{ icon?: { sx?: SxProps<Theme> }; text?: { sx?: SxProps<Theme> } }` | `-`      | `-`     |

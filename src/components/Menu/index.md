# Menu

Dropdown menu built on MUI `Menu` and `MenuItem`, with grouped items and optional per-item `autoClose`.

## Examples

### Basic Dropdown

With default **`autoClose: true`**, `MenuDropdown` calls **`onClose` after your `onClick`**. You normally do **not** call the same dismiss function again inside `onClick`.

```tsx
import { useState } from 'react';
import { Button, MenuDropdown } from '@bosinc/shared';
import { ProfileLine, Settings3Line, Key4Line } from '@mingcute/react';

export default () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClose = () => setAnchorEl(null);

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
        type: 'error',
        onClick: () => {},
      },
    ],
  ];

  return (
    <>
      <Button onClick={(event) => setAnchorEl(event.currentTarget)}>
        Open Menu
      </Button>

      <MenuDropdown
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        items={items}
      />
    </>
  );
};
```

### Async click, loading & autoClose

By default **`autoClose` is `true`**: **`MenuDropdown` invokes `onClose` after your `onClick` completes** (for async handlers, that means after `await` settles). You usually **do not** call your dismiss helper (e.g. `handleClose`) again inside `onClick`.

With **`autoClose: false`**, that item’s click **does not** trigger `onClose` from `MenuDropdown`. When you are ready to dismiss (for example after `await`), **call `handleClose()` yourself** inside `onClick`.

```tsx
import { useState } from 'react';
import { Button, MenuDropdown } from '@bosinc/shared';
import { ProfileLine, Settings3Line, Key4Line } from '@mingcute/react';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handleClose = () => setAnchorEl(null);

  const items = [
    [
      {
        icon: ProfileLine,
        label: 'Profile',
        autoClose: false,
        onClick: async () => {
          await sleep(1200);
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
      <Button onClick={(event) => setAnchorEl(event.currentTarget)}>
        Open Menu
      </Button>

      <MenuDropdown
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        items={items}
      />
    </>
  );
};
```

### Custom label & icon style

Override the label via **`slotProps.text.sx`** and icon via **`slotProps.icon.sx`**. With default **`autoClose`**, omit calling **`onClose`** inside **`onClick`**; `MenuDropdown` will call it after `onClick`.

```tsx
import { useState } from 'react';
import { Button, MenuDropdown } from '@bosinc/shared';
import { ProfileLine, Settings3Line, Key4Line } from '@mingcute/react';

export default () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handleClose = () => setAnchorEl(null);

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
              color: 'error.main',
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
      <Button onClick={(event) => setAnchorEl(event.currentTarget)}>
        Open Menu
      </Button>

      <MenuDropdown
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        items={items}
      />
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

| Property  | Description                                                                                                                                                                            | Type      | Required | Default |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------- | ------- |
| autoClose | `true` (default): `MenuDropdown` calls `onClose` after your `onClick`. `false`: does not call `onClose` for that item; call your dismiss function inside `onClick` when you are ready. | `boolean` | `-`      | `true`  |
| type      | Item semantic type. Set `type: 'error'` to render label text in `red.700`.                                                                                                             | `'error'` | `-`      | `-`     |

### MenuItemProps

| Property  | Description                                                                | Type                                                                 | Required | Default |
| --------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------- | -------- | ------- |
| icon      | Leading icon. Pass component reference, e.g. `ProfileLine`.                | `ElementType`                                                        | `-`      | `-`     |
| label     | Item text                                                                  | `ReactNode`                                                          | `true`   | `-`     |
| onClick   | Click callback for enabled item                                            | `() => void \| Promise<void>`                                        | `-`      | `-`     |
| disabled  | Disable click interaction                                                  | `boolean`                                                            | `-`      | `false` |
| type      | Item semantic type. Set `type: 'error'` to render label text in `red.700`. | `'error'`                                                            | `-`      | `-`     |
| slotProps | Optional style overrides                                                   | `{ icon?: { sx?: SxProps<Theme> }; text?: { sx?: SxProps<Theme> } }` | `-`      | `-`     |

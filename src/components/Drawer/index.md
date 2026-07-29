---
title: Drawer
---

# Drawer

Unified responsive drawer component that renders a `Dialog` on desktop and a `Drawer` on mobile.

## Example

### Basic Usage

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
            <Button variant="contained">Save changes</Button>
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

### Full Drawer

```tsx
import { Button, FullDrawer } from '@bosinc/shared';
import { useState } from 'react';
import { Stack, Typography } from '@mui/material';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open full drawer</Button>
      <FullDrawer
        title="Configure"
        open={open}
        onClose={() => setOpen(false)}
        actions={[
          {
            label: 'Close',
            variant: 'outlined',
            onClick: () => setOpen(false),
          },
          {
            label: 'Save',
            variant: 'contained',
            onClick: () => setOpen(false),
          },
        ]}
      >
        <Stack sx={{ p: 2, gap: 1 }}>
          <Typography variant="body2">
            Full-height drawer with no backdrop. On desktop it is centered with
            a max width of 744px and a small top margin.
          </Typography>
          {Array.from({ length: 12 }, (_, index) => (
            <Typography key={index} variant="body2">
              Section {index + 1}
            </Typography>
          ))}
        </Stack>
      </FullDrawer>
    </>
  );
};
```

### Action Drawer

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

### Custom Drawer

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

### Prompt Drawer

```tsx
import { Button, PromptDrawer } from '@bosinc/shared';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open PromptDrawer</Button>
      <PromptDrawer
        open={open}
        onClose={() => setOpen(false)}
        heading="Dialog Title"
        description="This is where your dialog message or instructions will appear. Keep it concise and relevant to the action being taken."
        actions={[
          {
            label: 'Delete',
            type: 'danger',
            onClick: () => setOpen(false),
          },
          {
            label: 'Confirm',
            variant: 'contained',
            onClick: async () => {
              await new Promise<void>((resolve) => {
                setTimeout(resolve, 2000);
              });
              setOpen(false);
            },
          },
        ]}
      />
    </>
  );
};
```

### Notice Drawer

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

| Property     | Description                                                                     | Type              | Default |
| ------------ | ------------------------------------------------------------------------------- | ----------------- | ------- |
| open         | Controls visibility                                                             | `boolean`         | `true`  |
| onClose      | Called when the drawer should close (mask click, escape, etc.)                  | `() => void`      | —       |
| children     | Scrollable main content                                                         | `ReactNode`       | —       |
| title        | Centered heading in `DrawerHeader` when provided                                | `ReactNode`       | —       |
| footer       | Optional sticky footer area below content                                       | `ReactNode`       | —       |
| stableHeight | Fixed `90dvh` height with scrollable content area; use for async-loaded content | `boolean`         | —       |
| showHeader   | Renders `DrawerHeader` (close row) when `true`                                  | `boolean`         | `true`  |
| slotProps    | Slots: `container`, `header`, `content`, `footer` (see below)                   | `DrawerSlotProps` | —       |

#### `slotProps`

| Slot        | Type / shape                                                    | Notes                                                                      |
| ----------- | --------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `container` | `Omit<DrawerContainerProps, 'children' \| 'open' \| 'onClose'>` | `PaperProps`, `maskClosable`, `anchor`, `dialogProps`, `drawerProps`, etc. |
| `header`    | `Omit<DrawerHeaderProps, 'title' \| 'onClose'>`                 | `closeButtonProps`, `sx`, `divider`, `titleProps`                          |
| `content`   | `{ sx?: SxProps<Theme> }`                                       | Main scroll area                                                           |
| `footer`    | `{ sx?: SxProps<Theme>; contentSx?: SxProps<Theme> }`           | Footer wrapper and inner stack                                             |

### ActionDrawer

`ActionDrawerProps` extends `Omit<DrawerProps, 'footer'>` and adds `actions`. A thin wrapper around `Drawer` that renders `DrawerFooter` from `actions`.

| Property   | Description                          | Type                 | Default |
| ---------- | ------------------------------------ | -------------------- | ------- |
| `actions`  | Footer action buttons                | `DrawerActionItem[]` | —       |
| _(others)_ | Same as `Drawer`, except no `footer` | —                    | —       |

### FullDrawer

`FullDrawerProps` is the same as `ActionDrawerProps`. A wrapper around `ActionDrawer` that applies a full-height layout: no backdrop, no border radius, full height, desktop max width `744` with centered margins. Extra `slotProps` are merged and can override the defaults.

| Property   | Description            | Type                 | Default |
| ---------- | ---------------------- | -------------------- | ------- |
| `actions`  | Footer action buttons  | `DrawerActionItem[]` | —       |
| _(others)_ | Same as `ActionDrawer` | —                    | —       |

### CustomDrawer

`CustomDrawerProps` extends `Omit<DrawerProps, 'showHeader'>`. The underlying `Drawer` always uses `showHeader={false}`; a top-right close control is rendered when `onClose` is provided.

| Property           | Description                                        | Type              | Default |
| ------------------ | -------------------------------------------------- | ----------------- | ------- |
| _(same as Drawer)_ | Except `showHeader` is not accepted                | —                 | —       |
| `closeButtonProps` | Passed to MUI `IconButton` wrapping the close icon | `IconButtonProps` | —       |

### PromptDrawer

`PromptDrawerProps` extends `Omit<DrawerProps, 'children' | 'footer'>` and adds prompt layout fields. All other `Drawer` props (`open`, `onClose`, `slotProps`, `showHeader`, `title`, …) are forwarded. The implementation currently renders **`heading`**, **`description`**, **`children`**, and **`footer`** only; extra fields on the type (e.g. `contentSx`, `onConfirm`) are not used by the component yet.

| Property      | Description                             | Type        | Default |
| ------------- | --------------------------------------- | ----------- | ------- |
| `heading`     | Primary heading inside the prompt block | `ReactNode` | —       |
| `description` | Secondary copy under `heading`          | `ReactNode` | —       |
| `children`    | Content after the description block     | `ReactNode` | —       |
| `footer`      | e.g. `DrawerFooter` or custom actions   | `ReactNode` | —       |

### NoticeDrawer

`NoticeDrawerProps` extends `Omit<DrawerProps, 'children' | 'footer' | 'showHeader'>`. A lightweight wrapper around `Drawer`: no header, and a single primary action button in the footer.

| Property   | Description                          | Type         | Default    |
| ---------- | ------------------------------------ | ------------ | ---------- |
| `children` | Main content                         | `ReactNode`  | —          |
| `label`    | Footer button label                  | `ReactNode`  | `'Got it'` |
| `onClose`  | Close handler + footer click handler | `() => void` | —          |

### DrawerFooter

| Property | Description         | Type                 | Default |
| -------- | ------------------- | -------------------- | ------- |
| `items`  | Row of action items | `DrawerFooterItem[]` | —       |

#### `DrawerFooterItem`

| Property      | Description                     | Type                                         | Default |
| ------------- | ------------------------------- | -------------------------------------------- | ------- |
| `label`       | Button label                    | `ReactNode`                                  | —       |
| `onClick`     | Click handler (may be async)    | `() => void \| Promise<void>`                | —       |
| `disabled`    | Disables the item               | `boolean`                                    | —       |
| `variant`     | MUI button variant              | `ButtonProps['variant']`                     | —       |
| `type`        | Visual variant, e.g. `'danger'` | `'danger'`                                   | —       |
| `buttonProps` | Extra props for the button      | `Omit<ButtonProps, 'children' \| 'onClick'>` | —       |

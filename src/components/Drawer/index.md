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
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        footer={
          <Stack sx={{ p: 2 }} onClick={() => setOpen(false)}>
            <Button>Drawer Footer</Button>
          </Stack>
        }
      >
        <Stack sx={{ p: 2, py: 1 }}>Drawer content</Stack>
      </Drawer>
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
      <Button onClick={() => setOpen(true)}>Open CustomDrawer</Button>
      <CustomDrawer showClose open={open} onClose={() => setOpen(false)}>
        <Stack sx={{ p: 2, gap: 1 }}>
          <Typography variant="h6">Your title here</Typography>
          <Typography variant="body2">
            Body copy and any footer actions are fully under your control.
          </Typography>
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
        title="Dialog Title"
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

| Property   | Description                                                                                   | Type              | Default |
| ---------- | --------------------------------------------------------------------------------------------- | ----------------- | ------- |
| open       | Controls visibility                                                                           | `boolean`         | —       |
| onClose    | Called when the drawer should close (mask click, escape, etc.)                                | `() => void`      | —       |
| children   | Scrollable main content                                                                       | `ReactNode`       | —       |
| title      | On typings only; `Drawer` does not read it — put headings in `children` or `slotProps.header` | `ReactNode`       | —       |
| footer     | Optional sticky footer area below content                                                     | `ReactNode`       | —       |
| fullDrawer | Full-height / flex layout on paper                                                            | `boolean`         | —       |
| showHeader | Renders `DrawerHeader` (close row) when `true`                                                | `boolean`         | `true`  |
| slotProps  | Slots: `container`, `header`, `content`, `footer` (see below)                                 | `DrawerSlotProps` | —       |

#### `slotProps`

| Slot        | Type / shape                                                    | Notes                                                                      |
| ----------- | --------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `container` | `Omit<DrawerContainerProps, 'children' \| 'open' \| 'onClose'>` | `PaperProps`, `maskClosable`, `anchor`, `dialogProps`, `drawerProps`, etc. |
| `header`    | `Omit<DrawerHeaderProps, 'title' \| 'onClose'>`                 | `closeButtonProps`, `sx`, `divider`, `titleProps`, adornments              |
| `content`   | `{ sx?: SxProps<Theme> }`                                       | Main scroll area                                                           |
| `footer`    | `{ sx?: SxProps<Theme>; contentSx?: SxProps<Theme> }`           | Footer wrapper and inner stack                                             |

### CustomDrawer

`CustomDrawerProps` extends `Omit<DrawerProps, 'showHeader'>`. The underlying `Drawer` always uses `showHeader={false}`; a top-right close control is rendered when `onClose` is provided.

| Property           | Description                                        | Type              | Default |
| ------------------ | -------------------------------------------------- | ----------------- | ------- |
| _(same as Drawer)_ | Except `showHeader` is not accepted                | —                 | —       |
| `closeButtonProps` | Passed to MUI `IconButton` wrapping the close icon | `IconButtonProps` | —       |

### PromptDrawer

`PromptDrawerProps` extends `Omit<DrawerProps, 'children' | 'footer'>` and adds prompt layout fields. All other `Drawer` props (`open`, `onClose`, `slotProps`, `fullDrawer`, `showHeader`, …) are forwarded. The implementation currently renders **`title`**, **`description`**, **`children`**, and **`footer`** only; extra fields on the type (e.g. `contentSx`, `onConfirm`) are not used by the component yet.

| Property      | Description                             | Type        | Default |
| ------------- | --------------------------------------- | ----------- | ------- |
| `title`       | Primary heading inside the prompt block | `ReactNode` | —       |
| `description` | Secondary copy under `title`            | `ReactNode` | —       |
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

---
title: Button
---

# Button

Two button styles:

- **Button** — thin MUI wrapper (`variant` / `color` / `loading`)
- **MainButton** — Pear Design Btn-CTA (`appearance` / `UI_SIZE` / `isAsync`)

## Button

Thin MUI button wrapper with `label` / `icon` / `loading`.

## Examples

### Basic

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

| Property | Description                           | Type        | Default |
| -------- | ------------------------------------- | ----------- | ------- |
| label    | Button text when `children` is absent | `ReactNode` | `-`     |
| icon     | Icon shorthand for `startIcon`        | `ReactNode` | `-`     |
| loading  | Shows spinner and disables button     | `boolean`   | `-`     |

Also accepts standard MUI button props (including `variant`, `color`, `size`, `sx`).

---

# MainButton

Pear Design **Btn-CTA** button for primary actions, with `primary`, `ghost`, and `outline` appearances.

## Examples

### Basic

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

### Size

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

### With icon

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

### Async click (`isAsync`)

When `isAsync` is set, the button shows loading automatically if `onClick` returns a Promise—no manual `loading` state needed for save/submit.

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

### Custom styling (`sx`)

> `sx` is supported, but limit it to layout (margin, width, etc.); use `appearance` and `size` for visuals—overriding color, height, or hover breaks design consistency.

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

| Property   | Description                           | Type                                     | Default                     |
| ---------- | ------------------------------------- | ---------------------------------------- | --------------------------- |
| label      | Button text when `children` is absent | `ReactNode`                              | `-`                         |
| icon       | Icon shorthand for `startIcon`        | `ReactNode`                              | `-`                         |
| loading    | Shows spinner and disables button     | `boolean`                                | `-`                         |
| isAsync    | Auto-loading while `onClick` Promise  | `boolean`                                | `-`                         |
| appearance | Btn-CTA style                         | `ButtonAppearance` (`BUTTON_APPEARANCE`) | `BUTTON_APPEARANCE.PRIMARY` |
| size       | Component size                        | `UiSize` (`UI_SIZE`)                     | `UI_SIZE.MEDIUM`            |

Shared size scale lives in `UI_SIZE` — other Pear components reuse the same values. MainButton-specific Figma mapping is internal.

| `UI_SIZE` key | Figma | Height |
| ------------- | ----- | ------ |
| `LARGE`       | L-48  | 48px   |
| `MEDIUM`      | L-42  | 42px   |
| `SMALL`       | M-32  | 32px   |
| `XSMALL`      | S-24  | 24px   |

Also accepts standard MUI button props except `variant` and MUI `size`, including `sx` (see [Custom styling](#custom-styling-sx)).

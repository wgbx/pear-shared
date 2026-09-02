---
title: Button
---

# Button

Pear Design **Btn-CTA** button for primary actions, with `primary`, `ghost`, and `outline` appearances.

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
    <Button label="Primary" />
    <Button appearance="ghost" label="Ghost" />
    <Button appearance="outline" label="Outline" />
    <Button label="Primary" disabled />
    <Button label="Button" loading />
  </Stack>
);
```

### Size

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
    <Button label="Primary" size="large"/>
    <Button label="Primary" size="medium"/>
    <Button label="Primary" size="small"/>
    <Button label="Primary" size="xsmall"/>
  </Stack>
);
```

### With icon

```tsx
import { Button } from '@bosinc/shared';
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
    <Button label="Create" icon={<AddFill />} />
    <Button appearance="ghost" label="Create" icon={<AddFill />} />
    <Button appearance="outline" label="Create" icon={<AddFill />} />
  </Stack>
);
```

### Custom styling (`sx`)

> `sx` is supported, but limit it to layout (margin, width, etc.); use `appearance` and `size` for visuals—overriding color, height, or hover breaks design consistency.

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
    <Button label="Continue" sx={{ minWidth: 300 }} />
    <Button appearance="outline" label="Close" sx={{ width: 400, borderColor: 'red.700' }} />
  </Stack>
);
```

## API

### ButtonProps

| Property   | Description                           | Type                                         | Default     |
| ---------- | ------------------------------------- | -------------------------------------------- | ----------- |
| label      | Button text when `children` is absent | `ReactNode`                                  | `-`         |
| icon       | Icon shorthand for `startIcon`        | `ReactNode`                                  | `-`         |
| loading    | Shows spinner and disables button     | `boolean`                                    | `-`         |
| appearance | Btn-CTA style                         | `ButtonAppearance` (`BUTTON_APPEARANCE`) | `BUTTON_APPEARANCE.PRIMARY` |
| size       | Component size                        | `UiSize` (`UI_SIZE`)                     | `UI_SIZE.MEDIUM`            |

Shared size scale lives in `UI_SIZE` — other Pear components reuse the same values. Button-specific Figma mapping is internal.

| `UI_SIZE` key | Figma | Height |
| ------------- | ----- | ------ |
| `LARGE`       | L-48  | 48px   |
| `MEDIUM`      | L-42  | 42px   |
| `SMALL`       | M-32  | 32px   |
| `XSMALL`      | S-24  | 24px   |

Also accepts standard MUI button props except `variant` and MUI `size`, including `sx` (see [Custom styling](#custom-styling-sx)).

---

## LegacyButton

> **Deprecated** — migration fallback only. New code should use `Button`.

```tsx
import { LegacyButton } from '@bosinc/shared';
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
    <LegacyButton label="Click me" variant="contained" />
    <LegacyButton label="Click me" loading />
  </Stack>
);
```

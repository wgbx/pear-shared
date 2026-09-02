---
title: Button
---

# Button

Pear 产品标准 CTA 按钮。

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
    <Button label="Primary" size="xlarge"/>
    <Button label="Primary" size="large"/>
    <Button label="Primary" size="medium"/>
    <Button label="Primary" size="small"/>
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

## API

### ButtonProps

| Property   | Description                           | Type                                         | Default     |
| ---------- | ------------------------------------- | -------------------------------------------- | ----------- |
| label      | Button text when `children` is absent | `ReactNode`                                  | `-`         |
| icon       | Icon shorthand for `startIcon`        | `ReactNode`                                  | `-`         |
| loading    | Shows spinner and disables button     | `boolean`                                    | `-`         |
| appearance | Btn-CTA style                         | `ButtonAppearance` (`BUTTON_APPEARANCE`) | `BUTTON_APPEARANCE.PRIMARY` |
| size       | Component size                        | `UiSize` (`UI_SIZE`)                     | `UI_SIZE.LARGE`             |

Shared size scale lives in `UI_SIZE` — other Pear components reuse the same values. Button-specific Figma mapping is internal.

| `UI_SIZE` key | Figma | Height |
| ------------- | ----- | ------ |
| `XLARGE`      | L-48  | 48px   |
| `LARGE`       | L-42  | 42px   |
| `MEDIUM`      | M-32  | 32px   |
| `SMALL`       | S-24  | 24px   |

Also accepts standard MUI button props except `variant` and MUI `size`.

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

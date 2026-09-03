---
title: IconButton
---

# IconButton

A clickable icon button with `icon` + `label` API and three `UI_SIZE` tokens mapped to icon sizes 16 / 24 / 48. Padding stays at `8px`.

## Examples

### Basic usage

```tsx
import { IconButton } from '@bosinc/shared';
import { CloseLine } from '@mingcute/react';
import { Stack } from '@mui/material';

export default () => {
  return (
    <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 1 }}>
      <IconButton
        icon={<CloseLine />}
        label="Close"
        onClick={() => alert('clicked')}
      />
    </Stack>
  );
};
```

### Size

`size` reuses `UI_SIZE` (`small` / `medium` / `large`). `xsmall` is not supported.

| `UI_SIZE` | Icon |
| --------- | ---- |
| `SMALL`   | 16px |
| `MEDIUM`  | 24px (default) |
| `LARGE`   | 48px |

```tsx
import { IconButton, UI_SIZE } from '@bosinc/shared';
import { Settings5Line } from '@mingcute/react';
import { Stack } from '@mui/material';

export default () => {
  return (
    <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
      <IconButton
        icon={<Settings5Line />}
        label="Settings"
        size={UI_SIZE.SMALL}
        onClick={() => {}}
      />
      <IconButton
        icon={<Settings5Line />}
        label="Settings"
        size={UI_SIZE.MEDIUM}
        onClick={() => {}}
      />
      <IconButton
        icon={<Settings5Line />}
        label="Settings"
        size={UI_SIZE.LARGE}
        onClick={() => {}}
      />
    </Stack>
  );
};
```

### Accessible label

Defaults to the icon component name (e.g. `Settings5Line`). Pass `label` to override.

```tsx
import { IconButton } from '@bosinc/shared';
import { CloseLine } from '@mingcute/react';

export default () => {
  return (
    <IconButton
      icon={<CloseLine />}
      label="Dismiss banner"
      onClick={() => {}}
    />
  );
};
```

## API

| Property      | Description                                          | Type                                      | Required | Default             |
| ------------- | ---------------------------------------------------- | ----------------------------------------- | -------- | ------------------- |
| icon          | Icon content                                         | `ReactNode`                               | ✅       | `-`                 |
| label         | Accessible label. Overrides the icon component name. | `string`                                  | `-`      | icon component name |
| size          | Icon size token (`UI_SIZE`, no `xsmall`)             | `IconButtonSize`                          | `-`      | `UI_SIZE.MEDIUM`    |
| onClick       | Click handler                                        | `function`                                | `-`      | `-`                 |
| disableRipple | Disable the ripple effect                            | `boolean`                                 | `-`      | `true`              |
| disabled      | Disable the button                                   | `boolean`                                 | `-`      | `false`             |

Also accepts other MUI `IconButton` props except `children` and MUI `size`.

Default styles:

- Padding `8px` (`theme.spacing(1)`)
- Hover / focus-visible / touch-active uses `shades.100`
- Ripple disabled by default

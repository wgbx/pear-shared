---
title: IconButton
---

# IconButton

A clickable icon wrapper based on MUI `IconButton`, with a default `8px` padding to enlarge the tap target on mobile.

## Examples

### Basic usage

```tsx
import { IconButton } from '@bosinc/shared';
import { CloseLine } from '@mingcute/react';
import { Stack } from '@mui/material';

export default () => {
  return (
    <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 1 }}>
      <IconButton onClick={() => alert('clicked')}>
        <CloseLine />
      </IconButton>
    </Stack>
  );
};
```

### Compare tap target

The extra padding expands the hit area without changing the icon size.

```tsx
import { IconButton } from '@bosinc/shared';
import { CloseLine, Settings5Line } from '@mingcute/react';
import { Stack, Typography } from '@mui/material';

export default () => {
  return (
    <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
      <Stack sx={{ alignItems: 'center' }}>
        <CloseLine />
        <Typography variant="caption">icon only</Typography>
      </Stack>
      <Stack sx={{ alignItems: 'center' }}>
        <IconButton onClick={() => {}}>
          <CloseLine />
        </IconButton>
        <Typography variant="caption">with 8px padding</Typography>
      </Stack>
      <Stack sx={{ alignItems: 'center' }}>
        <IconButton onClick={() => {}}>
          <Settings5Line />
        </IconButton>
        <Typography variant="caption">another icon</Typography>
      </Stack>
    </Stack>
  );
};
```

### Override label

Defaults to the icon component name (e.g. `Settings5Line`). Pass `label` to override.

```tsx
import { IconButton } from '@bosinc/shared';
import { CloseLine } from '@mingcute/react';

export default () => {
  return (
    <IconButton label="Dismiss banner" onClick={() => {}}>
      <CloseLine />
    </IconButton>
  );
};
```

### Override padding

```tsx
import { IconButton } from '@bosinc/shared';
import { CloseLine } from '@mingcute/react';

export default () => {
  return (
    <IconButton onClick={() => {}} sx={{ padding: 0.5 }}>
      <CloseLine />
    </IconButton>
  );
};
```

## API

All props from MUI `IconButton` are supported. See [MUI IconButton API](https://mui.com/material-ui/api/icon-button/) for complete documentation.

| Property      | Description                                          | Type        | Required | Default             |
| ------------- | ---------------------------------------------------- | ----------- | -------- | ------------------- |
| children      | Icon content                                         | `ReactNode` | ✅       | `-`                 |
| label         | Accessible label. Overrides the icon component name. | `string`    | `-`      | icon component name |
| onClick       | Click handler                                        | `function`  | `-`      | `-`                 |
| disableRipple | Disable the ripple effect                            | `boolean`   | `-`      | `true`              |
| disabled      | Disable the button                                   | `boolean`   | `-`      | `false`             |

Default styles:

- Padding `8px` (`theme.spacing(1)`), including `size="small"` / `size="large"`
- Hover / focus-visible / touch-active uses `shades.100` so the tap target is visible
- Ripple disabled by default

---
title: ManageButton
---

# ManageButton

A reusable icon button with tooltip, designed for compact "Manage" actions alongside form controls (e.g., checkboxes, switches). Replaces text-based "Manage" links with a small icon button that shows a tooltip on desktop hover. Defaults to a `Settings5Line` icon.

## Examples

### Basic usage

No need to pass `Icon` — defaults to `Settings5Line`.

```tsx
import { ManageButton } from '@bosinc/shared';
import { Stack } from '@mui/material';

export default () => {
  return (
    <Stack sx={{ gap: 2, flexDirection: 'row', alignItems: 'center' }}>
      <span>Custom Form</span>
      <ManageButton
        tooltip="Manage tooltip"
        onClick={() => alert('open drawer')}
      />
    </Stack>
  );
};
```

### Custom tooltip text

```tsx
import { ManageButton } from '@bosinc/shared';
import { Stack, Typography } from '@mui/material';

export default () => {
  return (
    <Stack sx={{ gap: 2, flexDirection: 'row', alignItems: 'center' }}>
      <Typography>Payment Restriction</Typography>
      <ManageButton
        tooltip="Manage payment restriction"
        onClick={() => alert('open drawer')}
      />
    </Stack>
  );
};
```

### Custom Tooltip props

Pass `tooltipProps` to customize the Tooltip behaviour (placement, arrow, custom content, etc.).

```tsx
import { ManageButton } from '@bosinc/shared';
import { Stack, Typography } from '@mui/material';

export default () => {
  return (
    <Stack sx={{ gap: 2, flexDirection: 'row', alignItems: 'center' }}>
      <Typography>Shipping Options</Typography>
      <ManageButton
        onClick={() => alert('open drawer')}
        tooltipProps={{
          placement: 'bottom',
          description: 'Configure shipping methods and fees',
          title: 'Shipping',
          arrow: false,
        }}
      />
    </Stack>
  );
};
```

### Disable tooltip

```tsx
import { ManageButton } from '@bosinc/shared';
import { Stack, Typography } from '@mui/material';

export default () => {
  return (
    <Stack sx={{ gap: 2, flexDirection: 'row', alignItems: 'center' }}>
      <Typography>Shipping Options</Typography>
      <ManageButton tooltip={false} onClick={() => alert('open drawer')} />
    </Stack>
  );
};
```

### Custom icon

Pass any icon component via the `Icon` prop. `iconProps` lets you tweak the icon sizing or color.

```tsx
import { ManageButton } from '@bosinc/shared';
import { Edit2Line } from '@mingcute/react';
import { Stack, Typography } from '@mui/material';

export default () => {
  return (
    <Stack sx={{ gap: 2, flexDirection: 'row', alignItems: 'center' }}>
      <Typography>Product Variants</Typography>
      <ManageButton
        Icon={Edit2Line}
        tooltip="Edit variants"
        iconProps={{ sx: { fontSize: '1.125rem' } }}
        onClick={() => alert('open drawer')}
      />
    </Stack>
  );
};
```

### Disabled state

```tsx
import { ManageButton } from '@bosinc/shared';
import { Stack, Typography } from '@mui/material';

export default () => {
  return (
    <Stack sx={{ gap: 2, flexDirection: 'row', alignItems: 'center' }}>
      <Typography>Tax Settings</Typography>
      <ManageButton disabled onClick={() => alert('should not fire')} />
    </Stack>
  );
};
```

### Inside a form checkbox item

A typical real-world usage: the Manage button sits next to a checkbox to open a management drawer.

```tsx
import { ManageButton } from '@bosinc/shared';
import { Checkbox, FormControlLabel, Stack, Typography } from '@mui/material';
import { useState, useCallback } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleClick = useCallback(
    () => setDrawerOpen(!drawerOpen),
    [drawerOpen],
  );

  return (
    <Stack sx={{ gap: 1 }}>
      <Stack
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={(_, v) => setChecked(v)} />
          }
          label="Require customer details"
        />
        <ManageButton onClick={handleClick} />
      </Stack>
      {drawerOpen && (
        <Typography sx={{ p: 2, border: '1px dashed', borderRadius: 1 }}>
          Drawer content would appear here.
        </Typography>
      )}
    </Stack>
  );
};
```

### Multiple manage buttons in a form

```tsx
import { ManageButton } from '@bosinc/shared';
import { Checkbox, FormControlLabel, Stack, Typography } from '@mui/material';

const FORM_ITEMS = [
  { id: 'form', label: 'Require customer details' },
  { id: 'abTest', label: 'Enable A/B test' },
  { id: 'redirect', label: 'Redirect non-US visitors' },
];

export default () => {
  return (
    <Stack sx={{ gap: 2 }}>
      <Typography variant="h3">Post Settings</Typography>
      {FORM_ITEMS.map((item) => (
        <Stack
          key={item.id}
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <FormControlLabel control={<Checkbox />} label={item.label} />
          <ManageButton
            tooltip={`Manage ${item.label.toLowerCase()}`}
            onClick={() => alert(`open ${item.id} drawer`)}
          />
        </Stack>
      ))}
    </Stack>
  );
};
```

## API

### ManageButtonProps (extends MUI IconButtonProps)

| Property     | Description                                                                  | Type                             | Required | Default         |
| ------------ | ---------------------------------------------------------------------------- | -------------------------------- | -------- | --------------- |
| Icon         | The icon to render                                                           | `ElementType<SvgIconProps>`      | `-`      | `Settings5Line` |
| tooltip      | Tooltip text on desktop hover. Omit or pass `false` to disable               | `ReactNode \| false`             | `-`      | `-`             |
| iconProps    | Additional props forwarded to the icon element                               | `SvgIconProps`                   | `-`      | `-`             |
| tooltipProps | Props forwarded to the wrapping `Tooltip`. Ignored when `tooltip` is `false` | `Omit<TooltipProps, 'children'>` | `-`      | `-`             |

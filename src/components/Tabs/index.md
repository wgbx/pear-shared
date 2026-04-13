# Tabs

A controlled tabs strip built on MUI `Tabs` / `Tab`. Use `value` and `onChange` to switch the active tab. This component only renders the tab labels; render panel content yourself based on `value` (see Basic Usage).

## Examples

### Basic Usage

```tsx
import { Tabs } from '@bosinc/shared';
import { useState } from 'react';

const items = [
  { value: 'details', label: 'Details' },
  { value: 'tickets', label: 'Tickets' },
  { value: 'attendees', label: 'Attendees' },
];

export default () => {
  const [value, setValue] = useState('details');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Tabs value={value} onChange={setValue} items={items} />
      <div>{value} content</div>
    </div>
  );
};
```

### SegmentedTabs

```tsx
import { SegmentedTabs } from '@bosinc/shared';
import { Fade } from '@mui/material';
import { useState } from 'react';

const items = [
  { value: 'overview', label: 'Overview' },
  { value: 'settings', label: 'Settings' },
  { value: 'billing', label: 'Billing' },
];

export default () => {
  const [value, setValue] = useState('overview');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <SegmentedTabs items={items} onChange={setValue} value={value} />
      <Fade in key={value} timeout={200}>
        <div>{value} content</div>
      </Fade>
    </div>
  );
};
```

### Custom Styles

Use `slotProps` to style the root `Tabs`, each `Tab`, and the underline indicator. `slotProps.tab` applies to **every** tab.

```tsx
import { Tabs } from '@bosinc/shared';
import { useState } from 'react';

const items = [
  { value: 'overview', label: 'Overview' },
  { value: 'settings', label: 'Settings' },
  { value: 'billing', label: 'Billing' },
];

export default () => {
  const [value, setValue] = useState('overview');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Tabs
        value={value}
        onChange={setValue}
        items={items}
        sx={{
          '& .MuiTabs-indicator': {
            display: 'none',
          },
        }}
        slotProps={{
          root: {
            sx: {
              px: 1,
              borderRadius: 2,
              bgcolor: 'shades.50',
              borderBottom: 'none',
              '& .MuiTabs-flexContainer': { gap: 0.5 },
            },
          },
          tab: {
            sx: {
              borderRadius: 1.5,
              mx: 0.25,
              color: 'blue.600',
              fontSize: '1rem',
              '&.Mui-selected': {
                bgcolor: 'shades.a10',
                boxShadow: 1,
                color: 'blue.700',
              },
            },
          },
        }}
      />
      <div>{value} content</div>
    </div>
  );
};
```

## API

### TabsProps

| Property  | Description                                          | Type                          | Required | Default       |
| --------- | ---------------------------------------------------- | ----------------------------- | -------- | ------------- |
| value     | Active tab value                                     | `T`                           | `✅`     | `-`           |
| onChange  | Called when the active tab changes                   | `(value: T) => void`          | `✅`     | `-`           |
| items     | Tab definitions                                      | `TabOption<T>[]`              | `✅`     | `-`           |
| variant   | `underline` shows the indicator; `standard` hides it | `'underline' \| 'standard'`   | `-`      | `'underline'` |
| centered  | Center the tab strip                                 | `boolean`                     | `-`      | `false`       |
| disabled  | Disable all tabs (per-tab `disabled` still applies)  | `boolean`                     | `-`      | `false`       |
| slotProps | Slot props forwarded to MUI                          | `{ root?, tab?, indicator? }` | `-`      | `-`           |

### slotProps

| Key         | Description                                                                     |
| ----------- | ------------------------------------------------------------------------------- |
| `root`      | Passed to the MUI `Tabs` root (e.g. `sx`, and other props not duplicated above) |
| `tab`       | Passed to each `Tab` (e.g. `sx`, `disableRipple`); shared by all items          |
| `indicator` | Passed to the MUI tabs indicator; hidden when `variant="standard"`              |

### TabOption

| Property | Description                                           | Type        | Required | Default |
| -------- | ----------------------------------------------------- | ----------- | -------- | ------- |
| value    | Unique tab id                                         | `T`         | `✅`     | `-`     |
| label    | Tab label text                                        | `string`    | `✅`     | `-`     |
| content  | Optional data only; not rendered as a panel by `Tabs` | `ReactNode` | `-`      | `-`     |
| icon     | Optional icon before the label                        | `ReactNode` | `-`      | `-`     |
| disabled | Disable this tab                                      | `boolean`   | `-`      | `false` |

# Tabs

A controlled tabs strip built on MUI `Tabs` / `Tab`. Use `value` and `onChange` to switch the active tab. This component only renders the tab labels; render panel content yourself based on `value` (see Basic Usage).

## Examples

### Basic Usage

```tsx
import { Tabs } from '@bosinc/shared';
import { useState } from 'react';

const options = [
  { value: 'details', label: 'Details' },
  { value: 'tickets', label: 'Tickets' },
  { value: 'attendees', label: 'Attendees' },
];

export default () => {
  const [value, setValue] = useState('details');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Tabs value={value} onChange={setValue} options={options} />
      <div>{value} content</div>
    </div>
  );
};
```

### Custom Styles

Use `slotProps` to style the root `Tabs`, each `Tab`, and the underline indicator. `slotProps.tab` applies to **every** tab.

```tsx
import { Tabs } from '@bosinc/shared';
import { useState } from 'react';

const options = [
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
        options={options}
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

```tsx
import { Tabs } from '@bosinc/shared';
import { Fade } from '@mui/material';
import { useState } from 'react';

const options = [
  { value: 'overview', label: 'Overview' },
  { value: 'settings', label: 'Settings' },
  { value: 'billing', label: 'Billing' },
];

export default () => {
  const [value, setValue] = useState('overview');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Tabs
        options={options}
        onChange={setValue}
        value={value}
        centered
        sx={(theme) => ({
          bgcolor: 'unset',
          px: 0,
          minHeight: 'unset',
          height: 36,
          width: '100%',
          '& .MuiTabs-indicator': {
            bottom: 'auto',
            top: theme.spacing(0.5),
            height: 28,
            borderRadius: 2,
            backgroundColor: 'brand.white',
            zIndex: 0,
          },
          '& .MuiTabs-scroller': {
            backgroundColor: '#2D2D330D',
            borderRadius: 2,
            height: 'unset',
            '& .MuiTabs-flexContainer': {
              px: 0.5,
            },
          },
          '& .MuiTabs-centered': { gap: 2.5, height: '100%' },
        })}
        slotProps={{
          tab: {
            sx: (theme) => ({
              mx: 0,
              p: 0,
              flex: 1,
              fontSize: '0.875rem',
              fontWeight: 600,
              minHeight: 28,
              height: 28,
              my: 0.5,
              position: 'relative',
              zIndex: 1,
              transition: theme.transitions.create('color', { duration: 200 }),
            }),
          },
        }}
      />
      <Fade key={value} in timeout={200}>
        <div>{value} content</div>
      </Fade>
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
| options   | Tab definitions                                      | `TabOption<T>[]`              | `✅`     | `-`           |
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

# Collapse

A compact expand/collapse block built on MUI `Stack`, `ButtonBase`, and `Collapse`. Pass a custom `trigger` node for the clickable header area, optional `actions` for the right side of the header row, and `children` for the animated content panel.

When `expanded` is omitted, `Collapse` manages its own state and starts closed. When `expanded` is provided, use `onChange` to update the controlled state.

## Examples

### Basic Usage

```tsx
import { Collapse } from '@bosinc/shared';
import { Stack, Typography } from '@mui/material';
import { DownLine } from '@mingcute/react';

export default () => {
  return (
    <Collapse
      trigger={
        <Stack direction="row" alignItems="center" gap={0.5}>
          <Typography fontWeight={600}>Event description</Typography>
          <DownLine />
        </Stack>
      }
    >
      <Typography>Controlled panel content.</Typography>
    </Collapse>
  );
};
```

### CollapsibleSection

```tsx
import { CollapsibleSection } from '@bosinc/shared';
import { Typography } from '@mui/material';

export default () => (
  <CollapsibleSection
    label="Toggle details"
    sx={{
      '& .MuiTypography-root': {
        fontWeight: 700,
        color: 'shades.600',
      },
      '& svg': {
        color: 'shades.600',
      },
    }}
  >
    <Typography>Controlled panel content.</Typography>
  </CollapsibleSection>
);
```

### With Actions

```tsx
import { Collapse } from '@bosinc/shared';
import { Button, Typography } from '@mui/material';

export default () => {
  return (
    <Collapse
      trigger={<Typography>Section title</Typography>}
      actions={<Button size="small">Edit</Button>}
    >
      <Typography>Controlled panel content.</Typography>
    </Collapse>
  );
};
```

### Disabled

```tsx
import { Collapse } from '@bosinc/shared';
import { Stack, Typography } from '@mui/material';

export default () => {
  return (
    <Collapse
      disabled
      trigger={
        <Stack direction="row" alignItems="center" gap={0.5}>
          <Typography fontWeight={600}>Event description</Typography>
        </Stack>
      }
    >
      <Typography>Controlled panel content.</Typography>
    </Collapse>
  );
};
```

### Custom Slots

Use `slotProps` to pass props to the root `Stack`, the trigger `ButtonBase`, and the inner MUI `Collapse`.

```tsx
import { Collapse } from '@bosinc/shared';
import { Typography } from '@mui/material';

export default () => {
  return (
    <Collapse
      trigger={<Typography fontWeight={600}>Details</Typography>}
      slotProps={{
        root: {
          sx: {
            gap: 1.5,
          },
        },
        trigger: {
          sx: {
            p: 0.5,
            borderRadius: 1,
            color: 'primary.main',
          },
        },
        content: {
          timeout: 250,
          unmountOnExit: true,
        },
      }}
    >
      <Typography>Controlled panel content.</Typography>
    </Collapse>
  );
};
```

## API

### CollapseProps

| Property        | Description                                                     | Type                                                                           | Required                                 | Default |
| --------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------ | ---------------------------------------- | ------- | --- |
| trigger         | Clickable trigger UI or render function `(state) => ReactNode`  | `ReactNode                                                                     | (({ expanded, disabled }) => ReactNode)` | `✅`    | `-` |
| actions         | Optional content rendered on the right side of the header row   | `ReactNode`                                                                    | `-`                                      | `-`     |
| children        | Content rendered inside the animated collapse panel             | `ReactNode`                                                                    | `✅`                                     | `-`     |
| defaultExpanded | Initial expanded state in uncontrolled mode                     | `boolean`                                                                      | `-`                                      | `false` |
| expanded        | Controlled expanded state; omit it to use internal state        | `boolean`                                                                      | `-`                                      | `-`     |
| onChange        | Called with the next expanded state when the trigger is clicked | `(expanded: boolean) => void`                                                  | `-`                                      | `-`     |
| disabled        | Prevents toggling and disables the trigger                      | `boolean`                                                                      | `-`                                      | `false` |
| slotProps       | Slot props for `root`, `trigger`, and `content`                 | `{ root?: StackProps; trigger?: ButtonBaseProps; content?: MuiCollapseProps }` | `-`                                      | `-`     |

Other props extend `Omit<StackProps, 'children' | 'onChange'>` and are forwarded to the root `Stack`. Values passed through `slotProps.root` are spread after the root props.

### slotProps

| Key       | Description                                                                             |
| --------- | --------------------------------------------------------------------------------------- |
| `root`    | Passed to the root `Stack`; typed as `Omit<StackProps, 'children'>`                     |
| `trigger` | Passed to the `ButtonBase` that wraps `trigger`; typed without `children` and `onClick` |
| `content` | Passed to the inner MUI `Collapse`; typed without `children` and `in`                   |

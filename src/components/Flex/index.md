---
title: Flex
---

# Flex

Thin wrapper around MUI `Stack` with layout-friendly defaults for horizontal composition.

Defaults vs `Stack`:

| Prop         | `Stack`     | `Flex`     |
| ------------ | ----------- | ---------- |
| `direction`  | `'column'`  | `'row'`    |
| `alignItems` | `'stretch'` | `'center'` |
| `useFlexGap` | `false`     | `true`     |

## Example

### Default

No props — row layout, vertically centered.

```tsx
import { Flex } from '@bosinc/shared';
import { Box } from '@mui/material';

const cellSx = {
  p: 1.5,
  bgcolor: 'shades.100',
  borderRadius: 1,
};

export default () => {
  return (
    <Flex>
      <Box sx={cellSx}>A</Box>
      <Box sx={{ ...cellSx, p: 3 }}>B (taller)</Box>
      <Box sx={cellSx}>C</Box>
    </Flex>
  );
};
```

### Spacing

Use `spacing` for gaps between children (CSS `gap` via `useFlexGap`).

```tsx
import { Flex } from '@bosinc/shared';
import { Box } from '@mui/material';

const cellSx = {
  p: 1.5,
  bgcolor: 'shades.100',
  borderRadius: 1,
};

export default () => {
  return (
    <Flex spacing={2}>
      <Box sx={cellSx}>A</Box>
      <Box sx={cellSx}>B</Box>
      <Box sx={cellSx}>C</Box>
    </Flex>
  );
};
```

### Space Between

```tsx
import { Flex } from '@bosinc/shared';
import { Box } from '@mui/material';

const cellSx = {
  p: 1.5,
  bgcolor: 'shades.100',
  borderRadius: 1,
};

export default () => {
  return (
    <Flex spacing={2} justifyContent="space-between" sx={{ width: '100%' }}>
      <Box sx={cellSx}>Left</Box>
      <Box sx={cellSx}>Center</Box>
      <Box sx={cellSx}>Right</Box>
    </Flex>
  );
};
```

### Vertical Stretch

Vertical stacks usually want full-width children — override the default `alignItems="center"` with `stretch`.

```tsx
import { Flex } from '@bosinc/shared';
import { Box } from '@mui/material';

const cellSx = {
  p: 1.5,
  bgcolor: 'shades.100',
  borderRadius: 1,
};

export default () => {
  return (
    <Flex direction="column" spacing={1.5} alignItems="stretch">
      <Box sx={cellSx}>Top</Box>
      <Box sx={cellSx}>Middle</Box>
      <Box sx={cellSx}>Bottom</Box>
    </Flex>
  );
};
```

### Wrap

```tsx
import { Flex } from '@bosinc/shared';
import { Box } from '@mui/material';

const cellSx = {
  p: 1.5,
  bgcolor: 'shades.100',
  borderRadius: 1,
  minWidth: 120,
};

export default () => {
  return (
    <Flex spacing={1.5} flexWrap="wrap" sx={{ maxWidth: 360 }}>
      <Box sx={cellSx}>One</Box>
      <Box sx={cellSx}>Two</Box>
      <Box sx={cellSx}>Three</Box>
      <Box sx={cellSx}>Four</Box>
      <Box sx={cellSx}>Five</Box>
    </Flex>
  );
};
```

## API

### FlexProps

Extends MUI `StackProps`.

| Property   | Description                          | Type                       | Default    |
| ---------- | ------------------------------------ | -------------------------- | ---------- |
| direction  | Flex direction                       | `StackProps['direction']`  | `'row'`    |
| alignItems | Cross-axis alignment                 | `StackProps['alignItems']` | `'center'` |
| useFlexGap | Use CSS `gap` instead of margins     | `boolean`                  | `true`     |
| spacing    | Gap between children (theme spacing) | `StackProps['spacing']`    | —          |
| ...        | Other MUI `Stack` props              | `StackProps`               | —          |

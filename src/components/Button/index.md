---
title: Button
---

# Button

Shared button wrapper based on MUI `Button`, with built-in `textTransform: none` and support for `label` + `icon`.

## Examples

### Basic usage

```tsx
import { Button } from '@bosinc/shared';
import { Stack } from '@mui/material';

export default () => {
  return (
    <Stack sx={{ gap: 2, flexDirection: 'row' }}>
      <Button label="Click me" variant="contained" />
      <Button label="Click me" loading />
    </Stack>
  );
};
```

### With icon

```tsx
import { Button } from '@bosinc/shared';
import { CloseFill } from '@mingcute/react';
import { Stack } from '@mui/material';

export default () => {
  return (
    <Stack sx={{ gap: 2, flexDirection: 'row' }}>
      <Button label="Create" variant="contained" icon={<CloseFill />} />
      <Button label="Create" loading variant="contained" icon={<CloseFill />} />
    </Stack>
  );
};
```

### Override with MUI startIcon/endIcon

```tsx
import { Button } from '@bosinc/shared';
import { ArrowLeftLine, ArrowRightLine } from '@mingcute/react';
import { Stack } from '@mui/material';

export default () => {
  return (
    <Stack sx={{ gap: 2, flexDirection: 'row' }}>
      <Button fullWidth label="Back" startIcon={<ArrowLeftLine />} />
      <Button
        fullWidth
        variant="contained"
        label="Next"
        endIcon={<ArrowRightLine />}
      />
    </Stack>
  );
};
```

## API

### ActionButtonProps (extends MUI ButtonProps)

| Property | Description                                    | Type        | Required | Default |
| -------- | ---------------------------------------------- | ----------- | -------- | ------- |
| label    | Fallback button text when `children` is absent | `ReactNode` | `-`      | `-`     |
| icon     | Icon shorthand for start/end icon              | `ReactNode` | `-`      | `-`     |
| loading  | Shows a spinner and disables the button        | `boolean`   | `-`      | `-`     |

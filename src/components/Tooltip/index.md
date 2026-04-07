# Tooltip

Displays informative content when users hover over, focus on, or tap an element. Built on MUI `Tooltip` with custom styling.

## Examples

### Basic Usage

```tsx
import { Tooltip } from '@bosinc/shared';

export default () => {
  return (
    <Tooltip description="This is a tooltip—a brief message that appears on hover, focus, or tap to give helpful context without cluttering the UI.">
      <button>Hover over me</button>
    </Tooltip>
  );
};
```

### With Title

```tsx
import { Tooltip } from '@bosinc/shared';

export default () => {
  return (
    <Tooltip
      title="Tooltip Title"
      description="This is a tooltip—a brief message that appears on hover, focus, or tap to give helpful context without cluttering the UI."
    >
      <button>Hover over me</button>
    </Tooltip>
  );
};
```

### Custom Content

```tsx
import { Tooltip } from '@bosinc/shared';
import { Stack, Box, Typography, Button } from '@mui/material';
import { CloseFill } from '@mingcute/react';
import { IconButton } from '@mui/material';
import { useState } from 'react';

export default () => {
  return (
    <Tooltip
      slotProps={{
        tooltip: {
          sx: {
            minWidth: 340,
            backgroundColor: 'common.white',
            color: 'shades.900',
            p: 1.5,
            boxShadow:
              '0 7px 9px -4px rgba(0, 0, 0, 0.07), 0 14px 21px 2px rgba(0, 0, 0, 0.05), 0 5px 26px 4px rgba(0, 0, 0, 0.01)',
          },
        },
        arrow: {
          sx: {
            color: 'common.white',
          },
        },
      }}
      customContent={
        <Stack sx={{ gap: 1.5 }}>
          <Stack sx={{ gap: 1 }}>
            <Typography sx={{ fontSize: '1rem', fontWeight: 700 }}>
              Title
            </Typography>
            <Typography
              sx={{
                fontSize: '0.875rem',
                fontWeight: 400,
                color: 'white',
              }}
            >
              Body text bring attention to a particular element of feature that
              warrants the user's focus.
            </Typography>
          </Stack>
          <Stack sx={{ alignSelf: 'flex-end' }}>
            <Button size="small" variant="contained">
              Action
            </Button>
          </Stack>
        </Stack>
      }
    >
      <button>Hover over me</button>
    </Tooltip>
  );
};
```

## API

### TooltipProps

| Property      | Description                                  | Type           | Required | Default |
| ------------- | -------------------------------------------- | -------------- | -------- | ------- |
| children      | Element that triggers the tooltip            | `ReactElement` | `✅`     | `-`     |
| description   | Tooltip content                              | `ReactNode`    | `✅`     | `-`     |
| title         | Optional title displayed above description   | `ReactNode`    | `-`      | `-`     |
| action        | Optional action button or element            | `ReactNode`    | `-`      | `-`     |
| customContent | Fully custom tooltip content (overrides all) | `ReactNode`    | `-`      | `-`     |
| arrow         | Display arrow pointing to element            | `boolean`      | `-`      | `true`  |

Supports all other MUI Tooltip props (e.g., `open`, `placement`, `disableHoverListener`, etc.).

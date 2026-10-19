---
title: BackToTop
---

# BackToTop

A circular "back to top" floating button. Drop in with no layout props for typical page scroll:

```tsx
import { BackToTop } from '@bosinc/shared';

export default () => <BackToTop />;
```

It fades in after scrolling past a threshold (default `250`) and smoothly scrolls back to the top.

## Default placement

Pinned to the viewport (`position: fixed`), size always `36×36`.

One inset for both viewports (`right: 27`, `bottom: 80`):

| Viewport | `right`                                                                    | `bottom` |
| -------- | -------------------------------------------------------------------------- | -------- |
| `< md`   | `27`                                                                       | `80`     |
| `≥ md`   | `calc(50% - 345px)` (= `50% - 372px + 27`, relative to 744 content column) | `80`     |

Override with `sx` only when a page needs a different offset (e.g. competing bottom CTAs). Pass `target` only when scrolling happens inside a container instead of the page.

## Examples

### Default (page scroll)

```tsx
import { BackToTop } from '@bosinc/shared';
import { Box, Typography } from '@mui/material';

export default () => {
  return (
    <Box>
      <Typography sx={{ mb: 2 }}>
        Scroll the page to see the back-to-top button.
      </Typography>
      <Box
        sx={{
          height: 1200,
          borderRadius: 1,
          bgcolor: 'shades.100',
        }}
      />
      <BackToTop />
    </Box>
  );
};
```

### Inside a scrollable container

```tsx
import { useRef } from 'react';
import { BackToTop, getThinScrollbarStyles } from '@bosinc/shared';
import { Box, Typography, useTheme } from '@mui/material';

export default () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        ref={scrollRef}
        sx={{
          height: 320,
          borderRadius: 1,
          bgcolor: 'shades.100',
          px: 2,
          py: 2,
          ...getThinScrollbarStyles(theme),
        }}
      >
        <Typography sx={{ mb: 2 }}>
          Scroll this panel to reveal the back-to-top button.
        </Typography>
        <Box sx={{ height: 900 }} />
        <Typography>Bottom of the panel</Typography>
      </Box>

      <BackToTop
        target={scrollRef}
        threshold={80}
        sx={{ position: 'absolute' }}
      />
    </Box>
  );
};
```

## API

### BackToTopProps (extends MUI IconButtonProps)

| Property  | Description                                                                 | Type                    | Required | Default    |
| --------- | --------------------------------------------------------------------------- | ----------------------- | -------- | ---------- |
| threshold | Show the button after scrolling past this many pixels                       | `number`                | `-`      | `250`      |
| target    | Scroll container (`Element` / `Document` / ref / getter). Defaults to page. | `BackToTopScrollTarget` | `-`      | `document` |
| sx        | Optional overrides when a page needs a custom offset                        | `SxProps`               | `-`      | `-`        |

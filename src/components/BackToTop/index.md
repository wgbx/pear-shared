---
title: BackToTop
---

# BackToTop

A circular "back to top" floating button. It fades in after scrolling past a threshold, and clicking it smoothly scrolls back to the top.

By default it listens to **page** scroll (`document`), and is positioned `absolute` at `right: 24` / `bottom: 24`. Pass `target` when the scrollable area is a container. Override layout via `sx`.

## Examples

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

      <BackToTop target={scrollRef} threshold={80} />
    </Box>
  );
};
```

### Page scroll (default)

Listens to the window/document scroll. Useful on long pages. Use `position: 'fixed'` when you want it pinned to the viewport.

```tsx
import { BackToTop } from '@bosinc/shared';
import { Box, Typography } from '@mui/material';

export default () => {
  return (
    <Box sx={{ position: 'relative' }}>
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
      <BackToTop
        sx={{
          position: 'fixed',
        }}
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
| sx        | MUI `sx` overrides (e.g. switch to `fixed`, tweak offset)                   | `SxProps`               | `-`      | `-`        |

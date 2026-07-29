---
title: styles
---

# styles

Shared style helpers for Pear UI.

## getThinScrollbarStyles

Thin scrollbar for overflow containers.

```tsx
import { Box, styled } from '@mui/material';
import { getThinScrollbarStyles } from '@bosinc/shared';

const ScrollArea = styled(Box)(({ theme }) => ({
  maxHeight: 200,
  width: 240,
  padding: theme.spacing(1),
  border: `1px solid ${theme.palette.shades[200]}`,
  borderRadius: theme.spacing(1),
  ...getThinScrollbarStyles(theme),
}));

export default () => (
  <ScrollArea>
    {Array.from({ length: 30 }, (_, index) => (
      <Box key={index} sx={{ py: 0.5 }}>
        Row {index + 1}
      </Box>
    ))}
  </ScrollArea>
);
```

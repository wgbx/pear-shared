---
title: Tooltip
---

# Tooltip

Displays informative content when users click the trigger element. Built on MUI `Tooltip` with custom styling. Use `trigger="hover"` to restore hover/focus behavior.

## Examples

### Basic Usage

```tsx
import { Tooltip } from '@bosinc/shared';

export default () => {
  return (
    <Tooltip description="This is a tooltip—a brief message that appears on click to give helpful context without cluttering the UI.">
      <button type="button">Click me</button>
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
      description="This is a tooltip—a brief message that appears on click to give helpful context without cluttering the UI."
    >
      <button type="button">Click me</button>
    </Tooltip>
  );
};
```

### InfoTooltip

A preset `InformationLine` icon trigger for common help hints beside labels or form controls.

```tsx
import { InfoTooltip } from '@bosinc/shared';
import { Stack, Typography } from '@mui/material';

export default () => {
  return (
    <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 0.5 }}>
      <InfoTooltip description="Helpful context shown when the icon is clicked." />
    </Stack>
  );
};
```

### Custom icon style

Use `sx` to adjust the icon color and size.

```tsx
import { InfoTooltip } from '@bosinc/shared';

export default () => {
  return (
    <InfoTooltip
      description="Custom icon style."
      sx={{ color: 'shades.700', fontSize: '2rem' }}
    />
  );
};
```

### Custom Content

```tsx
import { Tooltip } from '@bosinc/shared';
import { Button } from '@bosinc/shared';
import { Stack, Typography } from '@mui/material';

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
            <Button size="small" label="Action" />
          </Stack>
        </Stack>
      }
    >
      <button type="button">Click me</button>
    </Tooltip>
  );
};
```

### EllipsisTooltip

Shows the full text in a tooltip only when the content is truncated. Defaults to hover trigger.

Truncation uses `-webkit-line-clamp` + `overflow-wrap: anywhere` (not `white-space: nowrap`), so long unbroken strings do not expand flex/grid ancestors.

```tsx
import { EllipsisTooltip } from '@bosinc/shared';
import { Stack } from '@mui/material';

export default () => {
  return (
    <Stack sx={{ gap: 1, width: 160 }}>
      <EllipsisTooltip>Short label</EllipsisTooltip>
      <EllipsisTooltip>
        This is a long label that will be truncated and show the full text on
        hover.
      </EllipsisTooltip>
    </Stack>
  );
};
```

### EllipsisTooltip in a flex row

```tsx
import { EllipsisTooltip } from '@bosinc/shared';
import { Stack } from '@mui/material';

export default () => {
  return (
    <Stack
      direction="row"
      sx={{ width: 240, gap: 1, alignItems: 'center', minWidth: 0 }}
    >
      <EllipsisTooltip sx={{ flex: 1, minWidth: 0 }}>
        Long unbroken name that should ellipsis instead of expanding the row
        123456789012345678901234567890
      </EllipsisTooltip>
      <span>Tag</span>
    </Stack>
  );
};
```

### Multi-line Ellipsis

```tsx
import { EllipsisTooltip } from '@bosinc/shared';
import { Box } from '@mui/material';

export default () => {
  return (
    <Box sx={{ width: 240 }}>
      <EllipsisTooltip lines={2}>
        This paragraph can span up to two lines. Extra content is hidden with an
        ellipsis, and the tooltip appears only when overflow happens.
      </EllipsisTooltip>
    </Box>
  );
};
```

### Hover Trigger

Pass `trigger="hover"` to show the tooltip on hover or focus instead of click.

```tsx
import { Tooltip } from '@bosinc/shared';

export default () => {
  return (
    <Tooltip
      trigger="hover"
      description="This tooltip appears on hover or focus."
    >
      <button type="button">Hover over me</button>
    </Tooltip>
  );
};
```

## API

### TooltipProps

| Property      | Description                                  | Type                 | Required | Default   |
| ------------- | -------------------------------------------- | -------------------- | -------- | --------- |
| children      | Element that triggers the tooltip            | `ReactElement`       | `✅`     | `-`       |
| description   | Tooltip content                              | `ReactNode`          | `✅`     | `-`       |
| title         | Optional title displayed above description   | `ReactNode`          | `-`      | `-`       |
| action        | Optional action button or element            | `ReactNode`          | `-`      | `-`       |
| customContent | Fully custom tooltip content (overrides all) | `ReactNode`          | `-`      | `-`       |
| arrow         | Display arrow pointing to element            | `boolean`            | `-`      | `true`    |
| trigger       | How the tooltip is triggered                 | `'click' \| 'hover'` | `-`      | `'click'` |

Supports all other MUI Tooltip props (e.g., `open`, `placement`, `disableHoverListener`, etc.).

### EllipsisTooltipProps

Extends MUI `TypographyProps` (except `children`).

| Property     | Description                                            | Type                                              | Default |
| ------------ | ------------------------------------------------------ | ------------------------------------------------- | ------- |
| children     | Text content to render                                 | `ReactNode`                                       | —       |
| tooltip      | Tooltip content when truncated. Defaults to `children` | `ReactNode`                                       | —       |
| lines        | Max visible lines before truncation                    | `number`                                          | `1`     |
| tooltipProps | Props forwarded to the wrapping `Tooltip`              | `Omit<TooltipProps, 'children' \| 'description'>` | —       |
| ...          | Other MUI `Typography` props                           | `TypographyProps`                                 | —       |

`tooltipProps` defaults: `trigger="hover"`, `placement="bottom"`. When the text is not truncated, the wrapping `Tooltip` is not mounted.

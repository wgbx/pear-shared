---
title: Tooltip
---

# Tooltip

在用户点击触发元素时展示提示信息。基于 MUI `Tooltip` 构建并做了自定义样式。使用 `trigger="hover"` 可恢复悬停/聚焦触发行为。

## 示例

### 基础用法

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

### 带标题

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

一个预设了 `InformationLine` 图标作为触发器的组件，常用于在标签或表单控件旁边展示帮助提示。

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

### 自定义图标样式

使用 `sx` 调整图标的颜色和大小。

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

### 自定义内容

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

仅当内容被截断时，才在提示框中展示完整文本。默认使用悬停触发。

截断使用 `-webkit-line-clamp` + `overflow-wrap: anywhere`（而非 `white-space: nowrap`），因此过长且不可换行的字符串不会撑开 flex/grid 的父容器。

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

### 在 flex 行中使用 EllipsisTooltip

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

### 多行省略

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

### 悬停触发

传入 `trigger="hover"`，可让提示框在悬停或聚焦时显示，而不是点击时。

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

| 属性          | 说明                                       | 类型                 | 是否必填 | 默认值    |
| ------------- | ------------------------------------------ | -------------------- | -------- | --------- |
| children      | 触发提示框的元素                           | `ReactElement`       | `✅`     | `-`       |
| description   | 提示框内容                                 | `ReactNode`          | `✅`     | `-`       |
| title         | 展示在 description 上方的可选标题          | `ReactNode`          | `-`      | `-`       |
| action        | 可选的操作按钮或元素                       | `ReactNode`          | `-`      | `-`       |
| customContent | 完全自定义的提示框内容（覆盖其他所有内容） | `ReactNode`          | `-`      | `-`       |
| arrow         | 是否显示指向元素的箭头                     | `boolean`            | `-`      | `true`    |
| trigger       | 提示框的触发方式                           | `'click' \| 'hover'` | `-`      | `'click'` |

支持其他所有 MUI Tooltip 属性（如 `open`、`placement`、`disableHoverListener` 等）。

### EllipsisTooltipProps

继承 MUI `TypographyProps`（`children` 除外）。

| 属性         | 说明                                    | 类型                                              | 默认值 |
| ------------ | --------------------------------------- | ------------------------------------------------- | ------ |
| children     | 要渲染的文本内容                        | `ReactNode`                                       | —      |
| tooltip      | 截断时展示的提示内容，默认取 `children` | `ReactNode`                                       | —      |
| lines        | 截断前允许显示的最大行数                | `number`                                          | `1`    |
| tooltipProps | 透传给内部 `Tooltip` 的属性             | `Omit<TooltipProps, 'children' \| 'description'>` | —      |
| ...          | 其他 MUI `Typography` 属性              | `TypographyProps`                                 | —      |

`tooltipProps` 的默认值为：`trigger="hover"`、`placement="bottom"`。当文本未被截断时，内部的 `Tooltip` 不会被挂载。

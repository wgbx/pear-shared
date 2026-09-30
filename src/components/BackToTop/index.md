---
title: BackToTop
---

# BackToTop

一个圆形的“回到顶部”悬浮按钮。常规页面滚动场景下无需传任何布局属性，直接放入即可：

```tsx
import { BackToTop } from '@bosinc/shared';

export default () => <BackToTop />;
```

滚动超过阈值（默认 `250`）后淡入显示，点击可平滑滚动回顶部。

## 默认位置

固定在视口内（`position: fixed`），尺寸始终为 `36×36`。

两种视口共用同一组偏移值（`right: 27`、`bottom: 80`）：

| 视口   | `right`                                                               | `bottom` |
| ------ | --------------------------------------------------------------------- | -------- |
| `< md` | `27`                                                                  | `80`     |
| `≥ md` | `calc(50% - 345px)`（即 `50% - 372px + 27`，相对于 744 宽度的内容列） | `80`     |

仅当页面需要不同偏移时（例如与底部其他 CTA 冲突）才用 `sx` 覆盖。仅当滚动发生在容器内而非整个页面时才传 `target`。

## 示例

### 默认（页面滚动）

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

### 在可滚动容器内

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

### BackToTopProps（继承自 MUI IconButtonProps）

| 属性      | 说明                                                            | 类型                    | 必填 | 默认值     |
| --------- | --------------------------------------------------------------- | ----------------------- | ---- | ---------- |
| threshold | 滚动超过该像素数后显示按钮                                      | `number`                | `-`  | `250`      |
| target    | 滚动容器（`Element` / `Document` / ref / getter）。默认为页面。 | `BackToTopScrollTarget` | `-`  | `document` |
| sx        | 页面需要自定义偏移时的可选覆盖项                                | `SxProps`               | `-`  | `-`        |

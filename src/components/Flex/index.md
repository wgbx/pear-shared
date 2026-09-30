---
title: Flex
---

# Flex

对 MUI `Stack` 的轻量封装，提供更适合横向布局的默认值。

与 `Stack` 相比的默认值：

| 属性         | `Stack`     | `Flex`     |
| ------------ | ----------- | ---------- |
| `direction`  | `'column'`  | `'row'`    |
| `alignItems` | `'stretch'` | `'center'` |
| `useFlexGap` | `false`     | `true`     |

## 示例

### 默认

不传任何 props —— 行布局，垂直居中。

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

### 间距

使用 `spacing` 控制子元素之间的间距（通过 `useFlexGap` 使用 CSS `gap` 实现）。

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

### 两端对齐

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

### 垂直拉伸

纵向排列时通常希望子元素占满宽度 —— 可以用 `stretch` 覆盖默认的 `alignItems="center"`。

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

### 换行

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

继承自 MUI `StackProps`。

| 属性       | 说明                       | 类型                       | 默认值     |
| ---------- | -------------------------- | -------------------------- | ---------- |
| direction  | 排列方向                   | `StackProps['direction']`  | `'row'`    |
| alignItems | 交叉轴对齐方式             | `StackProps['alignItems']` | `'center'` |
| useFlexGap | 使用 CSS `gap` 代替 margin | `boolean`                  | `true`     |
| spacing    | 子元素间距（主题 spacing） | `StackProps['spacing']`    | —          |
| ...        | 其他 MUI `Stack` 属性      | `StackProps`               | —          |

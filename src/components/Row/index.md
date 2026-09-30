---
title: Row
---

# Row / Col

> **尚未导出。** 该组件仍在开发中，暂时无法从 `@bosinc/shared` 中获取。在正式导出之前，请勿在产品代码中引入。

受 Ant Design Grid 启发的极简 24 栅格布局工具。`Row` 控制对齐方式和间距（gutter）；`Col` 控制跨度（span）和偏移（offset）。响应式断点属性尚未支持。

## 示例

### 默认

```tsx
import { Row, Col } from '@bosinc/shared';
import { Box } from '@mui/material';

const cellSx = {
  p: 1.5,
  bgcolor: 'shades.100',
  borderRadius: 1,
  textAlign: 'center',
};

export default () => {
  return (
    <Row>
      <Col>
        <Box sx={cellSx}>Col</Box>
      </Col>
      <Col>
        <Box sx={cellSx}>Col</Box>
      </Col>
      <Col>
        <Box sx={cellSx}>Col</Box>
      </Col>
    </Row>
  );
};
```

### 基础用法

```tsx
import { Row, Col } from '@bosinc/shared';
import { Box } from '@mui/material';

const cellSx = {
  p: 1.5,
  bgcolor: 'shades.100',
  borderRadius: 1,
  textAlign: 'center',
};

export default () => {
  return (
    <Row gutter={16}>
      <Col span={12}>
        <Box sx={cellSx}>span=12</Box>
      </Col>
      <Col span={12}>
        <Box sx={cellSx}>span=12</Box>
      </Col>
      <Col span={8}>
        <Box sx={cellSx}>span=8</Box>
      </Col>
      <Col span={8}>
        <Box sx={cellSx}>span=8</Box>
      </Col>
      <Col span={8}>
        <Box sx={cellSx}>span=8</Box>
      </Col>
    </Row>
  );
};
```

### 间距与偏移

```tsx
import { Row, Col } from '@bosinc/shared';
import { Box } from '@mui/material';

const cellSx = {
  p: 1.5,
  bgcolor: 'shades.100',
  borderRadius: 1,
  textAlign: 'center',
};

export default () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={8} offset={8}>
        <Box sx={cellSx}>span=8 offset=8</Box>
      </Col>
      <Col span={6} offset={6}>
        <Box sx={cellSx}>span=6 offset=6</Box>
      </Col>
      <Col span={12} offset={6}>
        <Box sx={cellSx}>span=12 offset=6</Box>
      </Col>
    </Row>
  );
};
```

### 水平与垂直对齐

```tsx
import { Row, Col } from '@bosinc/shared';
import { Box } from '@mui/material';

export default () => {
  return (
    <Row gutter={16} justify="space-between" align="middle">
      <Col span={6}>
        <Box sx={{ p: 1, bgcolor: 'shades.100' }}>Left</Box>
      </Col>
      <Col span={6}>
        <Box sx={{ p: 3, bgcolor: 'shades.100' }}>Taller</Box>
      </Col>
      <Col span={6}>
        <Box sx={{ p: 1, bgcolor: 'shades.100' }}>Right</Box>
      </Col>
    </Row>
  );
};
```

## API

### Row

| 属性     | 说明                        | 类型                                                                                  | 默认值    |
| -------- | --------------------------- | ------------------------------------------------------------------------------------- | --------- |
| gutter   | 水平间距，或 `[水平, 垂直]` | `number \| [number, number]`                                                          | `0`       |
| justify  | 水平对齐方式                | `'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'` | `'start'` |
| align    | 垂直对齐方式                | `'top' \| 'middle' \| 'bottom' \| 'stretch'`                                          | `'top'`   |
| wrap     | 是否允许换行                | `boolean`                                                                             | `true`    |
| children | 通常为 `Col` 节点           | `ReactNode`                                                                           | —         |
| ...      | 其他 MUI `Box` props        | `BoxProps`                                                                            | —         |

### Col

| 属性     | 说明                             | 类型        | 默认值 |
| -------- | -------------------------------- | ----------- | ------ |
| span     | 占据的栏数（1–24）。`0` 隐藏该列 | `number`    | —      |
| offset   | 相对左侧的偏移栏数               | `number`    | `0`    |
| children | 列内容                           | `ReactNode` | —      |
| ...      | 其他 MUI `Box` props             | `BoxProps`  | —      |

---
title: Row
---

# Row / Col

> **Not exported yet.** This component is under development and is not available from `@bosinc/shared`. Do not import it in product code until it is publicly exported.

Minimal 24-column layout helpers inspired by Ant Design Grid. `Row` controls alignment and gutters; `Col` controls span and offset. Responsive breakpoint props are not included yet.

## Example

### Default

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

### Basic Usage

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

### Gutter and Offset

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

### Justify and Align

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

| Property | Description                                    | Type                                                                                  | Default   |
| -------- | ---------------------------------------------- | ------------------------------------------------------------------------------------- | --------- |
| gutter   | Horizontal gutter, or `[horizontal, vertical]` | `number \| [number, number]`                                                          | `0`       |
| justify  | Horizontal alignment                           | `'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'` | `'start'` |
| align    | Vertical alignment                             | `'top' \| 'middle' \| 'bottom' \| 'stretch'`                                          | `'top'`   |
| wrap     | Whether columns wrap                           | `boolean`                                                                             | `true`    |
| children | Usually `Col` nodes                            | `ReactNode`                                                                           | —         |
| ...      | Other MUI `Box` props                          | `BoxProps`                                                                            | —         |

### Col

| Property | Description                                    | Type        | Default |
| -------- | ---------------------------------------------- | ----------- | ------- |
| span     | Columns to occupy (1–24). `0` hides the column | `number`    | —       |
| offset   | Columns to offset from the left                | `number`    | `0`     |
| children | Column content                                 | `ReactNode` | —       |
| ...      | Other MUI `Box` props                          | `BoxProps`  | —       |

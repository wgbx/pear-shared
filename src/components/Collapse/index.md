---
title: Collapse
---

# Collapse

基于 MUI `Stack`、`ButtonBase` 和 `Collapse` 构建的紧凑型展开/收起区块。通过 `trigger` 传入可点击的头部节点，通过可选的 `actions` 在头部右侧添加内容，`children` 则是带动画效果的内容面板。

省略 `expanded` 时，`Collapse` 会自行管理状态，且默认关闭。传入 `expanded` 时，需配合 `onChange` 更新受控状态。

## 示例

### 基础用法

```tsx
import { Collapse } from '@bosinc/shared';
import { Stack, Typography } from '@mui/material';
import { DownLine } from '@mingcute/react';

export default () => {
  return (
    <Collapse
      trigger={
        <Stack direction="row" alignItems="center" gap={0.5}>
          <Typography fontWeight={600}>Event description</Typography>
          <DownLine />
        </Stack>
      }
    >
      <Typography>Controlled panel content.</Typography>
    </Collapse>
  );
};
```

### CollapsibleSection

```tsx
import { CollapsibleSection } from '@bosinc/shared';
import { Typography } from '@mui/material';

export default () => (
  <CollapsibleSection
    label="Toggle details"
    sx={{
      '& .MuiTypography-root': {
        fontWeight: 700,
        color: 'shades.600',
      },
      '& svg': {
        color: 'shades.600',
      },
    }}
  >
    <Typography>Controlled panel content.</Typography>
  </CollapsibleSection>
);
```

### 带操作按钮

```tsx
import { Collapse } from '@bosinc/shared';
import { Button, Typography } from '@mui/material';

export default () => {
  return (
    <Collapse
      trigger={<Typography>Section title</Typography>}
      actions={<Button size="small">Edit</Button>}
    >
      <Typography>Controlled panel content.</Typography>
    </Collapse>
  );
};
```

### 禁用状态

```tsx
import { Collapse } from '@bosinc/shared';
import { Stack, Typography } from '@mui/material';

export default () => {
  return (
    <Collapse
      disabled
      trigger={
        <Stack direction="row" alignItems="center" gap={0.5}>
          <Typography fontWeight={600}>Event description</Typography>
        </Stack>
      }
    >
      <Typography>Controlled panel content.</Typography>
    </Collapse>
  );
};
```

### 自定义插槽

通过 `slotProps` 向根节点 `Stack`、触发器 `ButtonBase` 以及内部的 MUI `Collapse` 传递属性。

```tsx
import { Collapse } from '@bosinc/shared';
import { Typography } from '@mui/material';

export default () => {
  return (
    <Collapse
      trigger={<Typography fontWeight={600}>Details</Typography>}
      slotProps={{
        root: {
          sx: {
            gap: 1.5,
          },
        },
        trigger: {
          sx: {
            p: 0.5,
            borderRadius: 1,
            color: 'primary.main',
          },
        },
        content: {
          timeout: 250,
          unmountOnExit: true,
        },
      }}
    >
      <Typography>Controlled panel content.</Typography>
    </Collapse>
  );
};
```

## API

### CollapseProps

| 属性            | 说明                                                | 类型                                                                           | 必填 | 默认值  |
| --------------- | --------------------------------------------------- | ------------------------------------------------------------------------------ | ---- | ------- |
| trigger         | 可点击的触发器 UI 或渲染函数 `(state) => ReactNode` | `ReactNode \| (({ expanded, disabled }) => ReactNode)`                         | `✅` | `-`     |
| actions         | 渲染在头部行右侧的可选内容                          | `ReactNode`                                                                    | `-`  | `-`     |
| children        | 渲染在带动画效果的收起面板内的内容                  | `ReactNode`                                                                    | `✅` | `-`     |
| defaultExpanded | 非受控模式下的初始展开状态                          | `boolean`                                                                      | `-`  | `false` |
| expanded        | 受控展开状态；省略则使用内部状态                    | `boolean`                                                                      | `-`  | `-`     |
| onChange        | 点击触发器时以下一个展开状态调用                    | `(expanded: boolean) => void`                                                  | `-`  | `-`     |
| disabled        | 阻止切换并禁用触发器                                | `boolean`                                                                      | `-`  | `false` |
| slotProps       | `root`、`trigger`、`content` 的插槽属性             | `{ root?: StackProps; trigger?: ButtonBaseProps; content?: MuiCollapseProps }` | `-`  | `-`     |

其他属性继承自 `Omit<StackProps, 'children' | 'onChange'>`，会透传给根节点 `Stack`。通过 `slotProps.root` 传入的值会在根节点属性之后展开合并。

### slotProps

| 键        | 说明                                                                       |
| --------- | -------------------------------------------------------------------------- |
| `root`    | 传递给根节点 `Stack`；类型为 `Omit<StackProps, 'children'>`                |
| `trigger` | 传递给包裹 `trigger` 的 `ButtonBase`；类型中去除了 `children` 和 `onClick` |
| `content` | 传递给内部的 MUI `Collapse`；类型中去除了 `children` 和 `in`               |

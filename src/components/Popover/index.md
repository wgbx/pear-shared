---
title: Popover
---

# Popover

基于 MUI `Popover` 构建、带有自定义样式的浮层组件。API 与 MUI Popover 完全兼容。

## 示例

### 基础用法

```tsx
import { Button, Popover, useAnchorEl } from '@bosinc/shared';

export default function Demo() {
  const { onClick, ...popoverProps } = useAnchorEl();

  return (
    <div>
      <Button onClick={onClick}>Open Popover</Button>
      <Popover
        {...popoverProps}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div style={{ padding: 16 }}>Popover content</div>
      </Popover>
    </div>
  );
}
```

## API

支持 MUI `Popover` 的所有 props。完整文档参见 [MUI Popover API](https://mui.com/material-ui/api/popover/)。

| 属性            | 类型                                                                                     | 默认值                                    | 说明                       |
| --------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------- | -------------------------- |
| anchorEl        | `HTMLElement \| null`                                                                    | -                                         | 用于确定浮层位置的锚点元素 |
| open            | `boolean`                                                                                | `false`                                   | 若为 `true`，则显示组件    |
| onClose         | `(event: {}, reason: 'escapeKeyDown' \| 'backdropClick') => void`                        | -                                         | 组件请求关闭时触发的回调   |
| anchorOrigin    | `{ vertical: 'top' \| 'center' \| 'bottom', horizontal: 'left' \| 'center' \| 'right' }` | `{ vertical: 'top', horizontal: 'left' }` | 锚点位置                   |
| transformOrigin | `{ vertical: 'top' \| 'center' \| 'bottom', horizontal: 'left' \| 'center' \| 'right' }` | `{ vertical: 'top', horizontal: 'left' }` | 变换原点                   |
| children        | `ReactNode`                                                                              | -                                         | 组件的内容                 |

## 自定义样式

该组件应用了如下自定义样式：

- 圆角（`borderRadius: 16px`）
- 增强阴影（`boxShadow: theme.shadows[4]`）
- 顶部外边距（`marginTop: 8px`）

可以通过 `slotProps.paper.sx` 属性覆盖这些样式。

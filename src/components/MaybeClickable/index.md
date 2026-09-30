---
title: MaybeClickable
---

# MaybeClickable

包裹内容并提供可选的点击行为。当 `onClick` 是一个函数时，会显示手型指针光标。

## 示例

### 基础

```tsx
import { MaybeClickable, useAlert } from '@bosinc/shared';

export default () => {
  const { success } = useAlert();

  return (
    <MaybeClickable onClick={() => success('clicked')}>Click me</MaybeClickable>
  );
};
```

### 不可点击

```tsx
import { MaybeClickable } from '@bosinc/shared';

export default () => {
  return <MaybeClickable onClick={undefined}>Not clickable</MaybeClickable>;
};
```

## API

### MaybeClickableProps

继承 MUI `BoxProps`（不包含 `children` 和 `onClick`）。

| 属性      | 说明                                       | 类型                    | Required | 默认值  |
| --------- | ------------------------------------------ | ----------------------- | -------- | ------- |
| children  | 内容                                       | `ReactNode`             | `✅`     | `-`     |
| enabled   | 强制启用/禁用可点击行为                    | `boolean`               | `-`      | `true`  |
| onClick   | 点击回调。若不是函数，则自动禁用可点击行为 | `unknown`               | `-`      | `-`     |
| component | 底层元素/组件                              | `BoxProps['component']` | `-`      | `'div'` |

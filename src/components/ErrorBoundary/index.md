---
title: ErrorBoundary
---

# ErrorBoundary

捕获子组件树中渲染时抛出的错误，展示 fallback 内容而不是让整个页面崩溃。基于 React 的 class 组件 error boundary API 实现。

## 示例

### 基础用法

`fallbackComponent` 默认值为 `null` —— 出错后该区域不渲染任何内容。点击 **Trigger error** 在渲染时抛出错误；点击 **Reset** 重新挂载并恢复。

```tsx
import { useState } from 'react';
import { Button, ErrorBoundary } from '@bosinc/shared';
import { Stack } from '@mui/material';

function BrokenChild() {
  throw new Error('Something went wrong');
}

export default () => {
  const [boom, setBoom] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  return (
    <Stack gap={1.5}>
      <Stack direction="row" gap={1} flexWrap="wrap">
        <Button label="Trigger error" onClick={() => setBoom(true)} />
        <Button
          label="Reset"
          onClick={() => {
            setBoom(false);
            setResetKey((k) => k + 1);
          }}
        />
      </Stack>
      <ErrorBoundary key={resetKey}>
        {boom ? (
          <BrokenChild />
        ) : (
          <div>All good — after error, this region becomes blank.</div>
        )}
      </ErrorBoundary>
    </Stack>
  );
};
```

### 自定义 Fallback

传入 `fallbackComponent` 可以在子组件抛出错误时展示自定义 UI。

```tsx
import { useState } from 'react';
import { Button, ErrorBoundary } from '@bosinc/shared';
import { Stack } from '@mui/material';

function BrokenChild() {
  throw new Error('Something went wrong');
}

export default () => {
  const [boom, setBoom] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  return (
    <Stack gap={1.5}>
      <Stack direction="row" gap={1} flexWrap="wrap">
        <Button label="Trigger error" onClick={() => setBoom(true)} />
        <Button
          label="Reset"
          onClick={() => {
            setBoom(false);
            setResetKey((k) => k + 1);
          }}
        />
      </Stack>
      <ErrorBoundary
        key={resetKey}
        fallbackComponent={<div>Failed to render this section.</div>}
      >
        {boom ? <BrokenChild /> : <div>All good — no error yet.</div>}
      </ErrorBoundary>
    </Stack>
  );
};
```

## API

### ErrorBoundaryProps

| 属性              | 说明                                                 | 类型        | 必填 | 默认值 |
| ----------------- | ---------------------------------------------------- | ----------- | ---- | ------ |
| children          | 需要保护的子树                                       | `ReactNode` | `✅` | `-`    |
| fallbackComponent | 子组件渲染时抛出错误后展示的 UI。未提供时渲染 `null` | `ReactNode` | `-`  | `null` |

## 注意事项

- 仅捕获子孙组件在 **渲染** 阶段抛出的错误。
- **不会** 捕获事件处理函数、异步代码（`setTimeout`、Promise）或服务端渲染中的错误。
- 底层必须是 class 组件；React 目前没有对应的函数组件 API。

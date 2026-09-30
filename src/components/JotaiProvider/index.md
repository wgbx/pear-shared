---
title: JotaiProvider
docStatus: risky
---

# JotaiProvider

为业务模块创建一个隔离的 Jotai store 作用域。在模块根节点包裹后，内部组件可以共享同一份数据源（通常来自 API），并在增删改查后保持同步——无需 props 逐层传递。

## 示例

### 基础用法

只需在模块根节点包裹一次。内部组件即可读取和更新同一个 atom，无需传递 props。

```tsx
import { atom, useAtom } from 'jotai';
import { Button, JotaiProvider } from '@bosinc/shared';

const countAtom = atom(0);

function Counter() {
  const [count, setCount] = useAtom(countAtom);

  return (
    <Button label={`Count: ${count}`} onClick={() => setCount((c) => c + 1)} />
  );
}

export default function DemoJotaiProviderBasic() {
  return (
    <JotaiProvider>
      <Counter />
    </JotaiProvider>
  );
}
```

### 多个实例

每个 `<JotaiProvider>` 挂载都会获得各自独立的 store：

```tsx | pure
export default function Page() {
  return (
    <>
      <OrderModule />
      <OrderModule />
    </>
  );
}
```

### 自定义 Store（SSR / 测试）

```tsx | pure
import { createStore } from 'jotai';
import { JotaiProvider, type JotaiStore } from '@bosinc/shared';

const store: JotaiStore = createStore();
// hydrate store before render...

export default function OrderModule({ store }: { store: JotaiStore }) {
  return (
    <JotaiProvider store={store}>
      <OrderModuleInit />
      <OrderList />
    </JotaiProvider>
  );
}
```

## API

### JotaiProviderProps

| 参数     | 说明                                                      | 类型         | 是否必填 | 默认值 |
| -------- | --------------------------------------------------------- | ------------ | -------- | ------ |
| children | 模块子树                                                  | `ReactNode`  | `-`      | `-`    |
| store    | 用于 SSR / 测试的外部 store。省略时会创建一个隔离的 store | `JotaiStore` | `-`      | `-`    |

### 类型定义

```typescript
import type { createStore } from 'jotai';

type JotaiStore = ReturnType<typeof createStore>;
```

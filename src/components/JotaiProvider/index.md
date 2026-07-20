---
title: JotaiProvider
docStatus: risky
---

# JotaiProvider

Creates an isolated Jotai store scope for a business module. Wrap the module root so internal components share the same data source (typically from an API) and stay in sync after CRUD — without props drilling.

## Examples

### Basic Usage

Wrap a module once. Components inside read and update the same atom without passing props.

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

### Multiple Instances

Each `<JotaiProvider>` mount gets its own isolated store:

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

### Custom Store (SSR / testing)

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

| Parameter | Description                                                               | Type         | Required | Default |
| --------- | ------------------------------------------------------------------------- | ------------ | -------- | ------- |
| children  | Module subtree                                                            | `ReactNode`  | `-`      | `-`     |
| store     | External store for SSR / testing. Creates an isolated store when omitted. | `JotaiStore` | `-`      | `-`     |

### Types

```typescript
import type { createStore } from 'jotai';

type JotaiStore = ReturnType<typeof createStore>;
```

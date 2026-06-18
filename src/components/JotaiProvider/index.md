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

### Module State (fetch + CRUD)

A typical business module: fetch API data once, then list / toolbar sub-components share and update the same atom.

```tsx
import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { Button, JotaiProvider } from '@bosinc/shared';

type Order = { id: string; name: string };

const ordersAtom = atom<Order[]>([]);

async function fetchOrders(): Promise<Order[]> {
  return [
    { id: '1', name: 'Order A' },
    { id: '2', name: 'Order B' },
  ];
}

function OrderModuleInit() {
  const setOrders = useSetAtom(ordersAtom);

  useEffect(() => {
    fetchOrders().then(setOrders);
  }, [setOrders]);

  return null;
}

function OrderList() {
  const orders = useAtomValue(ordersAtom);
  const setOrders = useSetAtom(ordersAtom);

  const handleDelete = (id: string) => {
    setOrders((prev) => prev.filter((order) => order.id !== id));
  };

  return (
    <ul>
      {orders.map((order) => (
        <li
          key={order.id}
          style={{ display: 'flex', gap: 8, alignItems: 'center' }}
        >
          <span>{order.name}</span>
          <button type="button" onClick={() => handleDelete(order.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

function OrderToolbar() {
  const [orders, setOrders] = useAtom(ordersAtom);

  const handleAdd = () => {
    setOrders((prev) => [
      ...prev,
      { id: String(Date.now()), name: `Order ${prev.length + 1}` },
    ]);
  };

  return (
    <div
      style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}
    >
      <Button label="Add order" onClick={handleAdd} />
      <span>{orders.length} items</span>
    </div>
  );
}

export default function DemoJotaiProviderCrud() {
  return (
    <JotaiProvider>
      <OrderModuleInit />
      <OrderToolbar />
      <OrderList />
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

# PaginationList

Paginated list component with built-in loading overlay, error/empty states, and state persistence. Wraps `PaginatedContainer` from `@pear/pagination-kit` and adapts a standard `apiFunction` into paginated data fetching.

Mobile-first: `visibleCount` defaults to `3` on desktop, `0` (minimal mode) on mobile.

## Examples

### Basic Usage

Pass an `apiFunction` (matching `PaginationApiFunctionType`) and an `item` slot to render each row. The component handles pagination, loading, and empty states automatically.

```tsx | pure
import { PaginationList } from '@webCommon/components/molecules/pagination-query/list';
import { fetchSubscribers } from '@/api/subscribers';

type Subscriber = { id: number; name: string; email: string };

export default () => (
  <PaginationList<Subscriber>
    apiFunction={fetchSubscribers}
    slots={{
      item: {
        component: ({ item }) => (
          <div>
            <strong>{item.name}</strong>
            <span>{item.email}</span>
          </div>
        ),
      },
    }}
  />
);
```

### With Query Params

Pass `params` for search/filter criteria. When params change, the list resets to page 1 and re-fetches.

```tsx | pure
export default () => {
  const [keyword, setKeyword] = useState('');

  return (
    <>
      <SearchInput value={keyword} onChange={setKeyword} />
      <PaginationList<Subscriber>
        apiFunction={fetchSubscribers}
        params={{ keyword }}
        pageSize={20}
        onChange={({ data, total }) => {
          console.log('data changed:', total, 'items');
        }}
        slots={{
          item: {
            component: ({ item }) => <SubscriberCard subscriber={item} />,
          },
        }}
      />
    </>
  );
};
```

### With Selection

Enable row selection with `withSelection`. The `selection` object is available in the `item` slot.

```tsx | pure
export default () => {
  const [selectedKeys, setSelectedKeys] = useState<Set<number>>(new Set());

  return (
    <PaginationList<Subscriber>
      apiFunction={fetchSubscribers}
      withSelection
      selectionGetItemKey={(item) => item.id}
      selectedKeys={selectedKeys}
      onSelectChange={({ selectedKeys }) => setSelectedKeys(selectedKeys)}
      slots={{
        item: {
          component: ({ item, selection }) => (
            <div
              onClick={() => selection?.actions.toggleItem(item)}
              style={{
                background: selection?.actions.isSelected(item)
                  ? '#e0e0e0'
                  : 'white',
              }}
            >
              {item.name}
            </div>
          ),
        },
      }}
    />
  );
};
```

### Custom Slots

Override built-in slots: `contentContainer`, `itemsContainer`, `loadingOverlay`, `empty`, `loading`, `error`, `pagination`. User-provided slots are merged with defaults, so you only need to override what you want to change.

```tsx | pure
export default () => (
  <PaginationList<Subscriber>
    apiFunction={fetchSubscribers}
    slots={{
      item: {
        component: ({ item }) => <SubscriberCard subscriber={item} />,
      },
      empty: {
        component: ({ status }) => (
          <EmptyState
            message={status === 'ERROR' ? 'Load failed' : 'No subscribers yet'}
          />
        ),
      },
      pagination: {
        component: ({ total, currentPage, pageSize, onChange }) => (
          <CustomPagination
            total={total}
            current={currentPage}
            pageSize={pageSize}
            onChange={onChange}
          />
        ),
      },
    }}
  />
);
```

### SSR with Initial Values

Pass `initialValues` to hydrate server-side data without an extra client-side fetch.

```tsx | pure
export async function getServerSideProps() {
  const res = await fetchSubscribers({ pageNumber: 1, pageSize: 10 });
  return { props: { initialData: res.items, initialTotal: res.totalCount } };
}

export default ({ initialData, initialTotal }) => (
  <PaginationList<Subscriber>
    apiFunction={fetchSubscribers}
    initialValues={{ data: initialData, total: initialTotal, page: 1 }}
    slots={{
      item: {
        component: ({ item }) => <SubscriberCard subscriber={item} />,
      },
    }}
  />
);
```

### Custom pageSize & Prefetch

Control page size and prefetch adjacent pages for smoother navigation.

```tsx | pure
export default () => (
  <PaginationList<Subscriber>
    apiFunction={fetchSubscribers}
    pageSize={50}
    prefetchCount={3}
    visibleCount={5}
    slots={{
      item: {
        component: ({ item }) => <SubscriberCard subscriber={item} />,
      },
    }}
  />
);
```

## Cross-Component State Access

`PaginatedContainer` writes its state (page, params, data, pagination, selection) to a global `PaginatedStateEngine` and dispatches `paginated-state` CustomEvents. Use `usePaginatedStateListener` to read that state from **any component** outside the tree — no props drilling needed.

### usePaginatedStateListener

```tsx | pure
import { usePaginatedStateListener } from '@pear/pagination-kit';
```

#### Basic: Read Pagination State from a Sibling Component

The `queryKey` must match the one used by the target `PaginatedContainer` or `PaginationList`.

```tsx | pure
// Page A renders the list with queryKey={['subscribers']}
function SubscriberPage() {
  return (
    <PaginationList<Subscriber>
      queryKey={['subscribers']}
      apiFunction={fetchSubscribers}
      slots={{
        item: { component: ({ item }) => <SubscriberCard subscriber={item} /> },
      }}
    />
  );
}

// Toolbar is a sibling — not a parent or child of the list
function Toolbar() {
  const { exists, currentPage, pageSize, data, pagination } =
    usePaginatedStateListener<Subscriber>(['subscribers']);

  if (!exists) return null;

  return (
    <div>
      Page {currentPage} of {pagination!.state.totalPages} — showing{' '}
      {data.length} items
    </div>
  );
}
```

#### With Selection: Access Selected Items Externally

When the list has `withSelection` enabled, `selection` is available on the listener. Useful for action bars that operate on selected items.

```tsx | pure
function BulkActionToolbar() {
  const { exists, selection, refetch } = usePaginatedStateListener<Subscriber>([
    'subscribers',
  ]);

  if (!exists || !selection) return null;

  const count = selection.state.selectedCount;

  return (
    <div>
      {count > 0 && (
        <>
          <span>{count} selected</span>
          <Button
            onClick={() => {
              /* bulk delete logic */ selection.actions.clearSelection();
            }}
          >
            Delete Selected
          </Button>
        </>
      )}
      <Button onClick={() => refetch?.()}>Refresh</Button>
    </div>
  );
}
```

#### With onStateChange Callback

Use `onStateChange` to react to every state update — e.g., sync URL, trigger analytics, or update a side panel.

```tsx | pure
function SubscriberPage() {
  const router = useRouter();

  usePaginatedStateListener<Subscriber>(['subscribers'], {
    onStateChange: ({ currentPage, params }) => {
      router.replace({ query: { page: currentPage, ...params } }, undefined, {
        shallow: true,
      });
    },
  });

  return <SubscriberList />;
}
```

#### Control Pagination from Outside

The `pagination` object includes full navigation actions. Use it to build external controls.

```tsx | pure
function ExternalPaginationControls() {
  const { exists, pagination } = usePaginatedStateListener(['subscribers']);

  if (!exists || !pagination) return null;

  const { state, actions } = pagination;

  return (
    <div>
      <button disabled={state.prevDisabled} onClick={actions.prev}>
        Prev
      </button>
      <span>Page {state.currentPage}</span>
      <button disabled={state.nextDisabled} onClick={actions.next}>
        Next
      </button>
    </div>
  );
}
```

#### Cache Operations

The listener exposes `refetch`, `invalidateQueries`, and `removeQueries` from the target container's React Query instance.

```tsx | pure
function CacheControls() {
  const { exists, refetch, invalidateQueries, removeQueries } =
    usePaginatedStateListener(['subscribers']);

  if (!exists) return null;

  return (
    <div>
      <button onClick={() => refetch?.()}>Refetch</button>
      <button onClick={() => invalidateQueries?.()}>
        Invalidate All Cache
      </button>
      <button onClick={() => removeQueries?.()}>Remove All Cache</button>
    </div>
  );
}
```

## API

### PaginationListProps\<T\>

Extends `Omit<PaginatedContainerProps<T>, 'fetchData'>`, replacing `fetchData` with the simpler `apiFunction`.

| Property                | Description                                                              | Type                                                                                                              | Required | Default                 |
| ----------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- | -------- | ----------------------- |
| apiFunction             | API function matching the standard `PaginationApiFunctionType` signature | `PaginationApiFunctionType`                                                                                       | `true`   | `-`                     |
| pageSize                | Number of items per page                                                 | `number`                                                                                                          | `-`      | `NEXT_PUBLIC_PAGE_SIZE` |
| visibleCount            | Visible page buttons. Desktop defaults to `3`, mobile to `0`             | `number`                                                                                                          | `-`      | Auto-detected           |
| prefetchCount           | Number of adjacent pages to prefetch                                     | `number`                                                                                                          | `-`      | `0`                     |
| params                  | Query parameters passed to `apiFunction`                                 | `Record<string, any>`                                                                                             | `-`      | `{}`                    |
| queryKey                | React Query cache key                                                    | `string[]`                                                                                                        | `-`      | `['data']`              |
| storageKey              | Unique key per user/session to prevent state leakage                     | `string`                                                                                                          | `-`      | `-`                     |
| disableStorage          | Disable state persistence                                                | `boolean`                                                                                                         | `-`      | `false`                 |
| initialValues           | SSR hydration values (takes precedence over storage)                     | `PaginatedInitialValues<T>`                                                                                       | `-`      | `-`                     |
| withSelection           | Enable item selection                                                    | `boolean`                                                                                                         | `-`      | `false`                 |
| selectionGetItemKey     | Key extractor for selection, defaults to `(item) => item.id`             | `(item: T) => string \| number`                                                                                   | `-`      | `-`                     |
| selectedKeys            | Controlled selection keys                                                | `Set<string \| number> \| Array<string \| number>`                                                                | `-`      | `-`                     |
| onChange                | Callback when data changes                                               | `(params: { data, total, currentPage, pageSize, params?, raw? }) => void`                                         | `-`      | `-`                     |
| onDataUpdate            | Callback on React Query update (includes loading/fetching state)         | `(params: { data, total, currentPage, pageSize, params?, isLoading, isFetching, error?, raw? }) => void`          | `-`      | `-`                     |
| onSelectChange          | Callback when selection changes                                          | `(params: { selectedKeys, selectedCount, isPartiallySelected, isAllOnPageSelected, isAllTotalSelected }) => void` | `-`      | `-`                     |
| slots                   | Slot configuration (see Slots below)                                     | `PaginatedContainerSlots<T>`                                                                                      | `true`   | `-`                     |
| isLoadingOverlayOutside | Render loading overlay outside the container                             | `boolean`                                                                                                         | `-`      | `false`                 |

### Slots

Pre-configured defaults provided by `PaginationList`:

| Slot               | Default Component         | Description                                                                             |
| ------------------ | ------------------------- | --------------------------------------------------------------------------------------- |
| `item`             | **Required** — no default | Single list item renderer. Receives `{ item: T, index: number, selection? }`            |
| `contentContainer` | `ContentContainer`        | Flex column wrapper for content area                                                    |
| `itemsContainer`   | `Wrap`                    | Relative-positioned wrapper (enables overlay positioning)                               |
| `loadingOverlay`   | `LoadingOverlay`          | Absolute overlay with blur backdrop, shown during background fetch                      |
| `empty`            | Built-in                  | Shown when `currentPageData.length === 0`. Receives `{ status?: 'NO_DATA' \| 'ERROR' }` |
| `loading`          | Built-in                  | Initial loading state                                                                   |
| `error`            | Built-in                  | Error state. Receives `{ message?: string, error: Error }`                              |
| `pagination`       | Built-in                  | Pagination navigation. Receives `{ total, currentPage, pageSize, onChange }`            |

Each slot accepts a `SlotConfig`:

| Form                    | Example                                                                      |
| ----------------------- | ---------------------------------------------------------------------------- |
| Component reference     | `slots={{ item: MyItemComponent }}`                                          |
| ReactNode               | `slots={{ empty: <EmptyState /> }}`                                          |
| Component + extra props | `slots={{ empty: { component: EmptyState, props: { status: 'NO_DATA' } } }}` |

### apiFunction Signature

```ts
type PaginationApiFunctionType = (
  params: { pageNumber?: number; pageSize?: number; [key: string]: any },
  lastItem?: Record<string, any>,
) => Promise<{ items: T[]; totalCount: number }>;
```

The component internally adapts `apiFunction` to `FetchDataFunction` via `useApiFetchData`, mapping:

- `apiFunction({ pageNumber, pageSize, ...params })` -> `{ list: res.items, total: res.totalCount, raw: res }`

### usePaginatedStateListener\<T\>

```ts
function usePaginatedStateListener<T>(
  queryKey: string[],
  options?: { onStateChange?: (state: PaginatedState<T>) => void },
): UsePaginatedStateListenerReturn<T>;
```

**Parameters:**

| Parameter             | Description                                                  | Type                                 | Required | Default |
| --------------------- | ------------------------------------------------------------ | ------------------------------------ | -------- | ------- |
| queryKey              | Must match the `queryKey` of the target `PaginatedContainer` | `string[]`                           | `true`   | `-`     |
| options.onStateChange | Callback fired on every state change                         | `(state: PaginatedState<T>) => void` | `-`      | `-`     |

**Return:**

| Field             | Type                          | Description                                           |
| ----------------- | ----------------------------- | ----------------------------------------------------- |
| exists            | `boolean`                     | Whether state for this `queryKey` has been registered |
| currentPage       | `number \| null`              | Current page number                                   |
| pageSize          | `number \| null`              | Items per page                                        |
| params            | `Record<string, any> \| null` | Current query parameters                              |
| data              | `T[]`                         | Current page data (empty array if no state)           |
| pagination        | `UsePaginationReturn \| null` | Full pagination instance (state + actions)            |
| selection         | `UseSelectionReturn \| null`  | Full selection instance (state + actions), if enabled |
| refetch           | `() => void`                  | Refetch current page data                             |
| invalidateQueries | `() => Promise<void>`         | Invalidate all paginated cache for this query key     |
| removeQueries     | `() => void`                  | Remove all paginated cache (data becomes undefined)   |

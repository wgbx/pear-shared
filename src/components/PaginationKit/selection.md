---
title: Selection
---

# Selection

Selection feature for `PaginationList` / `PaginatedContainer` — single select, multi-select, select all page, select all total, and controlled mode.

Enable with `withSelection`. The `selection` object is passed to slot components and available via `usePaginatedStateListener`.

## Basic Selection

Enable `withSelection` and provide `selectionGetItemKey`. The `selection` object is available in the `item` slot — use it to render checkboxes and toggle items.

```tsx | pure
<PaginationList<Post>
  apiFunction={fetchPosts}
  withSelection
  selectionGetItemKey={(post) => post.id}
  slots={{
    item: {
      component: ({ item, selection }) => (
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <input
            type="checkbox"
            checked={selection?.actions.isSelected(item) ?? false}
            onChange={() => selection?.actions.toggleItem(item)}
          />
          <div>
            <strong>{item.title}</strong>
            <p>{item.author}</p>
          </div>
        </div>
      ),
    },
  }}
/>
```

## Batch Action Bar

Use the `itemsContainer` slot to render a batch action bar below the list. This is where you show selected count, select-all, and clear actions.

```tsx | pure
import { UseSelectionReturn } from '@pear/pagination-kit';

function ItemsContainer<T>({
  children,
  data,
  selection,
  total,
}: {
  children: React.ReactNode;
  data: T[];
  selection?: UseSelectionReturn<T>;
  total: number;
}) {
  return (
    <div>
      <div>{children}</div>

      {selection && (
        <div
          style={{
            marginTop: 16,
            padding: 12,
            background: '#f5f5f5',
            borderRadius: 8,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <span>Selected: {selection.state.selectedCount}</span>
              {selection.state.isAllTotalSelected && (
                <span> (All {total} items selected)</span>
              )}
            </div>

            <div style={{ display: 'flex', gap: 8 }}>
              {/* Select all items across all pages (including unloaded) */}
              {!selection.state.isAllTotalSelected &&
                selection.state.selectedCount < total && (
                  <button onClick={() => selection.actions.selectAllTotal()}>
                    Select all {total} items
                  </button>
                )}

              {/* Select current page */}
              {!selection.state.isAllOnPageSelected && (
                <button onClick={() => selection.actions.selectPage(data)}>
                  Select current page
                </button>
              )}

              {/* Toggle current page */}
              <button onClick={() => selection.actions.togglePage(data)}>
                Toggle current page
              </button>

              {/* Clear all */}
              <button onClick={selection.actions.clearSelection}>Clear</button>
            </div>
          </div>

          {selection.state.isAllTotalSelected && (
            <p style={{ marginTop: 8, fontSize: 12, color: '#666' }}>
              All {total} items selected (including other pages)
            </p>
          )}
        </div>
      )}
    </div>
  );
}

<PaginationList<Post>
  apiFunction={fetchPosts}
  withSelection
  selectionGetItemKey={(post) => post.id}
  slots={{
    itemsContainer: ItemsContainer,
    item: {
      component: ({ item, selection }) => (
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            type="checkbox"
            checked={selection?.actions.isSelected(item) ?? false}
            onChange={() => selection?.actions.toggleItem(item)}
          />
          <span>{item.title}</span>
        </div>
      ),
    },
  }}
/>;
```

## Controlled Selection

Use `selectedKeys` + `onSelectChange` to control selection from outside (like controlled `value`/`onChange` in inputs).

```tsx | pure
export default () => {
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());

  return (
    <div>
      {/* Action bar using external state */}
      <div style={{ marginBottom: 8 }}>
        <span>{selectedKeys.size} items selected</span>
        <button onClick={() => setSelectedKeys(new Set())}>Clear</button>
      </div>

      <PaginationList<Post>
        apiFunction={fetchPosts}
        withSelection
        selectionGetItemKey={(post) => post.id}
        selectedKeys={selectedKeys}
        onSelectChange={({ selectedKeys }) => setSelectedKeys(selectedKeys)}
        slots={{
          item: {
            component: ({ item, selection }) => (
              <div
                onClick={() => selection?.actions.toggleItem(item)}
                style={{
                  cursor: 'pointer',
                  background: selection?.actions.isSelected(item)
                    ? '#e3f2fd'
                    : 'white',
                  padding: 8,
                }}
              >
                {item.title}
              </div>
            ),
          },
        }}
      />
    </div>
  );
};
```

## Access Selection from Outside

Use `usePaginatedStateListener` to read selection state in sibling components — no props drilling.

```tsx | pure
import { usePaginatedStateListener } from '@pear/pagination-kit';

function BulkActionToolbar() {
  const { exists, selection, refetch } = usePaginatedStateListener(['posts']);

  if (!exists || !selection) return null;

  const count = selection.state.selectedCount;

  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      {count > 0 ? (
        <>
          <span>{count} selected</span>
          <button
            onClick={() => {
              /* bulk delete */
            }}
          >
            Delete Selected
          </button>
          <button onClick={() => selection.actions.clearSelection()}>
            Clear Selection
          </button>
        </>
      ) : (
        <span>No items selected</span>
      )}
      <button onClick={() => refetch?.()}>Refresh</button>
    </div>
  );
}

// Usage: both components share the same queryKey
export default () => (
  <div>
    <BulkActionToolbar />
    <PaginationList
      queryKey={['posts']}
      apiFunction={fetchPosts}
      withSelection
      selectionGetItemKey={(post) => post.id}
      slots={{
        item: {
          component: ({ item, selection }) => (
            <div style={{ display: 'flex', gap: 8 }}>
              <input
                type="checkbox"
                checked={selection?.actions.isSelected(item) ?? false}
                onChange={() => selection?.actions.toggleItem(item)}
              />
              <span>{item.title}</span>
            </div>
          ),
        },
      }}
    />
  </div>
);
```

## Selection State Fields

Available on `selection.state`:

| Field                 | Type                    | Description                                                    |
| --------------------- | ----------------------- | -------------------------------------------------------------- |
| `selectedItems`       | `Set<string \| number>` | Currently selected keys                                        |
| `selectedCount`       | `number`                | Number of selected items                                       |
| `isPartiallySelected` | `boolean`               | Some items on current page are selected                        |
| `isAllOnPageSelected` | `boolean`               | All items on current page are selected                         |
| `isAllTotalSelected`  | `boolean`               | All items across all pages are selected (via `selectAllTotal`) |

## Selection Actions

Available on `selection.actions`:

### Single Item

| Action         | Signature              | Description               |
| -------------- | ---------------------- | ------------------------- |
| `toggleItem`   | `(item: T) => void`    | Toggle one item           |
| `selectItem`   | `(item: T) => void`    | Select one item           |
| `deselectItem` | `(item: T) => void`    | Deselect one item         |
| `isSelected`   | `(item: T) => boolean` | Check if item is selected |

### Current Page

| Action         | Signature              | Description                        |
| -------------- | ---------------------- | ---------------------------------- |
| `selectPage`   | `(items: T[]) => void` | Select all items on current page   |
| `deselectPage` | `(items: T[]) => void` | Deselect all items on current page |
| `togglePage`   | `(items: T[]) => void` | Toggle all items on current page   |

### All Pages

| Action           | Signature                 | Description                                                                   |
| ---------------- | ------------------------- | ----------------------------------------------------------------------------- |
| `selectAll`      | `(allItems: T[]) => void` | Select all provided items                                                     |
| `toggleAll`      | `(allItems: T[]) => void` | Toggle all provided items                                                     |
| `selectAllTotal` | `() => void`              | Select ALL items including unloaded pages (uses deselect-set mode internally) |
| `clearSelection` | `() => void`              | Clear all selections                                                          |

### Utility

| Action             | Signature                      | Description                              |
| ------------------ | ------------------------------ | ---------------------------------------- |
| `getSelectedItems` | `(allItems: T[]) => T[]`       | Filter list to selected items            |
| `getSelectedKeys`  | `() => Set<string \| number>`  | Get all selected keys                    |
| `setSelectedKeys`  | `(keys: Set \| Array) => void` | Set selection directly (controlled mode) |

## selectAllTotal vs selectAll

- **`selectAllTotal()`** — Selects ALL items across all pages, including items not yet loaded. Internally switches to a "deselect-set" mode where the engine tracks which items are **excluded** rather than included. This means `selectedCount` will equal `total`.
- **`selectAll(items)`** — Only selects the items you pass in. For cross-page selection, you'd need to pass all items from all pages yourself.
- **`clearSelection()`** — Clears everything, including `selectAllTotal` mode.

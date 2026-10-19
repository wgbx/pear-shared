---
title: ErrorBoundary
---

# ErrorBoundary

Catches render errors in the child tree and shows a fallback instead of crashing the whole page. Implemented with React's class-based error boundary API.

## Examples

### Basic Usage

By default `fallbackComponent` is `null` — after an error, the region renders nothing. Click **Trigger error** to throw during render; click **Reset** to remount and recover.

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

### Custom Fallback

Pass `fallbackComponent` to show a custom UI when a child throws.

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

| Property          | Description                                                                  | Type        | Required | Default |
| ----------------- | ---------------------------------------------------------------------------- | ----------- | -------- | ------- |
| children          | Subtree to protect                                                           | `ReactNode` | `✅`     | `-`     |
| fallbackComponent | UI shown when a child throws during render. Renders `null` when not provided | `ReactNode` | `-`      | `null`  |

## Notes

- Only catches errors thrown during **render** of descendants.
- Does **not** catch errors in event handlers, async code (`setTimeout`, Promise), or server-side rendering.
- Must be a class component under the hood; React has no function-component equivalent for this API.

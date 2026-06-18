---
title: Guide
order: 1
---

# Getting Started

`@bosinc/shared` is a lightweight React component library built for reuse.

## Installation

Install the package with your preferred package manager:

```bash
pnpm add @bosinc/shared
```

This library relies on peer dependencies like React, MUI, Emotion, `jotai`, and `ahooks`.

## Global Alert Setup

If you want to use `useAlert()` (and also `useCopyToClipboard()`), mount `AlertContainer` once at the app root.

```tsx
import { AlertContainer } from '@bosinc/shared';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AlertContainer />
      {children}
    </>
  );
}
```

## Module State with JotaiProvider

For complex business modules where multiple internal components share one API data source and need to stay in sync after CRUD — wrap the module root with `JotaiProvider` to avoid props drilling. See [JotaiProvider](/components/jotai-provider) for the full pattern.

```tsx
import { JotaiProvider } from '@bosinc/shared';

export default function OrderModule() {
  return (
    <JotaiProvider>
      <OrderModuleInit />
      <OrderToolbar />
      <OrderList />
    </JotaiProvider>
  );
}
```

## Shared

For the full APIs and examples, please refer to the docs:

- [Components](/components/external-link)

- [Hooks](/hooks/use-copy-to-clipboard)

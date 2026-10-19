---
title: MaybeClickable
---

# MaybeClickable

Wraps content with optional click behavior. When `onClick` is a function, it shows a pointer cursor.

## Examples

### Basic

```tsx
import { MaybeClickable, useAlert } from '@bosinc/shared';

export default () => {
  const { success } = useAlert();

  return (
    <MaybeClickable onClick={() => success('clicked')}>Click me</MaybeClickable>
  );
};
```

### Not Clickable

```tsx
import { MaybeClickable } from '@bosinc/shared';

export default () => {
  return <MaybeClickable onClick={undefined}>Not clickable</MaybeClickable>;
};
```

## API

### MaybeClickableProps

Extends MUI `BoxProps` (excluding `children` and `onClick`).

| Property  | Description                                                                          | Type                    | Required | Default |
| --------- | ------------------------------------------------------------------------------------ | ----------------------- | -------- | ------- |
| children  | Content                                                                              | `ReactNode`             | `✅`     | `-`     |
| enabled   | Force enable/disable clickable behavior                                              | `boolean`               | `-`      | `true`  |
| onClick   | Click handler. If it is not a function, clickable behavior is disabled automatically | `unknown`               | `-`      | `-`     |
| component | Underlying element/component                                                         | `BoxProps['component']` | `-`      | `'div'` |

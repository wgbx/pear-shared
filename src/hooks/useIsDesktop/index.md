---
title: useIsDesktop
---

# useIsDesktop

Returns whether the current viewport is desktop. By default, viewport widths greater than `744px` are desktop and widths less than or equal to `744px` are mobile. Pass a MUI breakpoint to use that breakpoint instead.

## Example

```tsx
import { useIsDesktop } from '@bosinc/shared';

export default function Demo() {
  const isDesktop = useIsDesktop();

  return <div>{isDesktop ? 'Desktop' : 'Mobile'}</div>;
}
```

```tsx
import { useIsDesktop } from '@bosinc/shared';

export default function DemoCustomBreakpoint() {
  const isDesktop = useIsDesktop('lg');

  return <div>{isDesktop ? 'Large Desktop' : 'Below Large Desktop'}</div>;
}
```

## API

### Signature

`useIsDesktop(breakpoint?: Breakpoint): boolean`

### Parameters

| Parameter  | Description                           | Type         | Required | Default |
| ---------- | ------------------------------------- | ------------ | -------- | ------- |
| breakpoint | MUI breakpoint used for desktop check | `Breakpoint` | `-`      | `-`     |

### Return

- `boolean` - Without `breakpoint`: `true` when viewport width is `> 744px`, otherwise `false`. With `breakpoint`: `true` when viewport is `>= breakpoint`, otherwise `false`.

# useIsDesktop

Returns whether the current viewport width is at or above a given MUI breakpoint.

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
| breakpoint | MUI breakpoint used for desktop check | `Breakpoint` | `-`      | `'md'`  |

### Return

- `boolean` - `true` when viewport is `>= breakpoint`, otherwise `false`.

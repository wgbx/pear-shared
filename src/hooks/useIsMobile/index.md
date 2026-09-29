---
title: useIsMobile
---

# useIsMobile

Returns whether the current viewport is mobile: `true` when viewport width is `<= 744px` (`MOBILE_MAX_WIDTH`), otherwise `false`. Always the inverse of `useIsDesktop()` without arguments.

## Example

```tsx
import { useIsMobile } from '@bosinc/shared';

export default function Demo() {
  const isMobile = useIsMobile();

  return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>;
}
```

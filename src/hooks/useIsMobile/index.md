# useIsMobile

Returns whether the current viewport width is below MUI's `md` breakpoint.

## Example

```tsx
import { useIsMobile } from '@bosinc/shared';

export default function Demo() {
  const isMobile = useIsMobile();

  return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>;
}
```

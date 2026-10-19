---
title: useOptimizedImageUrl
---

# useOptimizedImageUrl

React hook wrapper around {@link optimizeImageUrl}. Memoizes the resolved URL.

## Examples

### Basic optimization

```tsx
import { useOptimizedImageUrl } from '@bosinc/shared';

export default function Demo() {
  const src = useOptimizedImageUrl(
    'https://res.cloudinary.com/dr9io1zjv/v1783069012/profile/user/tvv411tmh4k93bzsnsu2',
  );
  return <img src={src} alt="" />;
}
```

### Thumbnail

```tsx
import { CLOUDINARY_QUALITY_MODE, useOptimizedImageUrl } from '@bosinc/shared';

const mediaSrc =
  'https://res.cloudinary.com/dr9io1zjv/v1783069012/profile/user/tvv411tmh4k93bzsnsu2';

export default function DemoThumbnail() {
  const src = useOptimizedImageUrl(mediaSrc, {
    width: 140,
    quality: CLOUDINARY_QUALITY_MODE.GOOD,
  });

  return <img src={src} alt="" width={140} height={140} />;
}
```

### Skip optimization

```tsx
import { useOptimizedImageUrl } from '@bosinc/shared';

const mediaSrc =
  'https://res.cloudinary.com/dr9io1zjv/v1783069012/profile/user/tvv411tmh4k93bzsnsu2';

export default function DemoSkipOptimize() {
  const src = useOptimizedImageUrl(mediaSrc, { disabled: true });

  return <img src={src} alt="" />;
}
```

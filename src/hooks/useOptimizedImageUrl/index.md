---
title: useOptimizedImageUrl
---

# useOptimizedImageUrl

对 {@link optimizeImageUrl} 的 React Hook 封装，会对解析后的 URL 做缓存（memoize）。

## 示例

### 基础优化

```tsx
import { useOptimizedImageUrl } from '@bosinc/shared';

export default function Demo() {
  const src = useOptimizedImageUrl(
    'https://res.cloudinary.com/dr9io1zjv/v1783069012/profile/user/tvv411tmh4k93bzsnsu2',
  );
  return <img src={src} alt="" />;
}
```

### 缩略图

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

### 跳过优化

```tsx
import { useOptimizedImageUrl } from '@bosinc/shared';

const mediaSrc =
  'https://res.cloudinary.com/dr9io1zjv/v1783069012/profile/user/tvv411tmh4k93bzsnsu2';

export default function DemoSkipOptimize() {
  const src = useOptimizedImageUrl(mediaSrc, { disabled: true });

  return <img src={src} alt="" />;
}
```

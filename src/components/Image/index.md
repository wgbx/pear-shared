---
title: Image
---

# Image

Cloudinary-optimized `<img>` with automatic fallback when `src` is missing or fails to load.

## Examples

### Thumbnail

```tsx
import { CLOUDINARY_QUALITY_MODE, Image } from '@bosinc/shared';

const mediaSrc =
  'https://res.cloudinary.com/dr9io1zjv/v1783069012/profile/user/tvv411tmh4k93bzsnsu2';

export default function Demo() {
  return (
    <Image
      src={mediaSrc}
      width={140}
      height={140}
      alt="Product cover"
      quality={CLOUDINARY_QUALITY_MODE.GOOD}
    />
  );
}
```

### Large preview

```tsx
import { Image } from '@bosinc/shared';

const mediaSrc =
  'https://res.cloudinary.com/dr9io1zjv/v1783069012/profile/user/tvv411tmh4k93bzsnsu2';

export default function DemoLarge() {
  return (
    <Image src={mediaSrc} width={300} height={300} alt="Product preview" />
  );
}
```

### Fill parent

```tsx
import { Image } from '@bosinc/shared';

export default function DemoFill() {
  return (
    <div style={{ width: 140, height: 140, overflow: 'hidden' }}>
      <Image
        src="https://res.cloudinary.com/dr9io1zjv/v1783069012/profile/user/tvv411tmh4k93bzsnsu2"
        fill
        width={140}
        height={140}
        alt="Product cover"
      />
    </div>
  );
}
```

### Custom fallback

`src` 加载失败时会切换到 `fallbackSrc`。默认使用 `DEFAULT_IMAGE_FALLBACK

```tsx
import { Image } from '@bosinc/shared';

export default function DemoFallback() {
  return (
    <Image
      src="https://example.com/broken.jpg"
      width={100}
      height={100}
      alt="Store logo"
    />
  );
}
```

## API

### ImageProps

<table>
  <thead>
    <tr>
      <th style="white-space: nowrap">Property</th>
      <th>Description</th>
      <th style="white-space: nowrap">Type</th>
      <th style="white-space: nowrap">Required</th>
      <th style="white-space: nowrap">Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="white-space: nowrap"><code>src</code></td>
      <td>Image URL</td>
      <td style="white-space: nowrap"><code>string</code></td>
      <td style="white-space: nowrap"><code>-</code></td>
      <td style="white-space: nowrap"><code>-</code></td>
    </tr>
    <tr>
      <td style="white-space: nowrap"><code>alt</code></td>
      <td>Accessible description</td>
      <td style="white-space: nowrap"><code>string</code></td>
      <td style="white-space: nowrap">✅</td>
      <td style="white-space: nowrap"><code>-</code></td>
    </tr>
    <tr>
      <td style="white-space: nowrap"><code>fallbackSrc</code></td>
      <td>Shown when <code>src</code> is empty or fails</td>
      <td style="white-space: nowrap"><code>string</code></td>
      <td style="white-space: nowrap"><code>-</code></td>
      <td style="white-space: nowrap"><code>DEFAULT_IMAGE_FALLBACK</code></td>
    </tr>
    <tr>
      <td style="white-space: nowrap"><code>width</code></td>
      <td>CSS width; also used for Cloudinary optimization</td>
      <td style="white-space: nowrap"><code>number</code></td>
      <td style="white-space: nowrap"><code>-</code></td>
      <td style="white-space: nowrap"><code>-</code></td>
    </tr>
    <tr>
      <td style="white-space: nowrap"><code>height</code></td>
      <td>CSS height; also used for Cloudinary optimization</td>
      <td style="white-space: nowrap"><code>number</code></td>
      <td style="white-space: nowrap"><code>-</code></td>
      <td style="white-space: nowrap"><code>-</code></td>
    </tr>
    <tr>
      <td style="white-space: nowrap"><code>fill</code></td>
      <td>Stretch to 100% of parent</td>
      <td style="white-space: nowrap"><code>boolean</code></td>
      <td style="white-space: nowrap"><code>-</code></td>
      <td style="white-space: nowrap"><code>false</code></td>
    </tr>
    <tr>
      <td style="white-space: nowrap"><code>disableOptimize</code></td>
      <td>Skip Cloudinary URL optimization</td>
      <td style="white-space: nowrap"><code>boolean</code></td>
      <td style="white-space: nowrap"><code>-</code></td>
      <td style="white-space: nowrap"><code>false</code></td>
    </tr>
    <tr>
      <td style="white-space: nowrap"><code>quality</code></td>
      <td>Cloudinary quality mode</td>
      <td style="white-space: nowrap"><code>CloudinaryQuality</code></td>
      <td style="white-space: nowrap"><code>-</code></td>
      <td style="white-space: nowrap"><code>auto:best</code></td>
    </tr>
    <tr>
      <td style="white-space: nowrap"><code>strategy</code></td>
      <td>Resize strategy when dimensions apply</td>
      <td style="white-space: nowrap"><code>'fit' | 'scale'</code></td>
      <td style="white-space: nowrap"><code>-</code></td>
      <td style="white-space: nowrap"><code>'fit'</code></td>
    </tr>
    <tr>
      <td style="white-space: nowrap"><code>loading</code></td>
      <td>Native lazy loading</td>
      <td style="white-space: nowrap"><code>'lazy' | 'eager'</code></td>
      <td style="white-space: nowrap"><code>-</code></td>
      <td style="white-space: nowrap"><code>'lazy'</code></td>
    </tr>
    <tr>
      <td style="white-space: nowrap"><code>slotProps</code></td>
      <td>Props for the root <code>&lt;img&gt;</code></td>
      <td style="white-space: nowrap"><code>{ root?: ... }</code></td>
      <td style="white-space: nowrap"><code>-</code></td>
      <td style="white-space: nowrap"><code>-</code></td>
    </tr>
  </tbody>
</table>

See also {@link optimizeImageUrl} and {@link useOptimizedImageUrl}.

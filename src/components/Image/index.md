---
title: Image
---

# Image

Cloudinary-optimized `<img>` with automatic fallback when `src` is missing or fails to load.

Without `width` / `height`, Cloudinary URLs are optimized with `c_scale,w_1024` (`C_DEFAULT_SCALE_WIDTH`). Pass dimensions to control download size for thumbnails (≤150px uses `c_fit` + 2x DPR).

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

`src` 加载失败时会切换到 `fallbackSrc`。默认使用 `DEFAULT_IMAGE_FALLBACK`。

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

| Property        | Description                                       | Type                | Required | Default                  |
| --------------- | ------------------------------------------------- | ------------------- | -------- | ------------------------ |
| src             | Image URL                                         | `string`            | `-`      | `-`                      |
| alt             | Accessible description                            | `string`            | `✅`     | `-`                      |
| fallbackSrc     | Shown when `src` is empty or fails                | `string`            | `-`      | `DEFAULT_IMAGE_FALLBACK` |
| width           | CSS width; also used for Cloudinary optimization  | `number`            | `-`      | `-`                      |
| height          | CSS height; also used for Cloudinary optimization | `number`            | `-`      | `-`                      |
| fill            | Stretch to 100% of parent                         | `boolean`           | `-`      | `false`                  |
| disableOptimize | Skip Cloudinary URL optimization                  | `boolean`           | `-`      | `false`                  |
| quality         | Cloudinary quality mode                           | `CloudinaryQuality` | `-`      | `auto:best`              |
| strategy        | Resize strategy when dimensions apply             | `'fit' \| 'scale'`  | `-`      | `'fit'`                  |
| loading         | Native lazy loading                               | `'lazy' \| 'eager'` | `-`      | `'lazy'`                 |
| slotProps       | Props for the root `<img>`                        | `{ root?: ... }`    | `-`      | `-`                      |

See also {@link optimizeImageUrl} and {@link useOptimizedImageUrl}.

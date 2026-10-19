---
title: image
---

# image

Cloudinary image URL optimization for web delivery.

## optimizeImageUrl

Single entry point. Without dimensions, uses `c_scale` at `C_DEFAULT_SCALE_WIDTH` (1024). Small dimensions (≤ `C_FIT_MAX_DIMENSION`) use `c_fit` with retina DPR; larger explicit sizes apply format + quality only to avoid soft images with CSS `object-fit: cover`.

```ts
import {
  CLOUDINARY_QUALITY_MODE,
  C_DEFAULT_SCALE_WIDTH,
  C_FIT_MAX_DIMENSION,
  optimizeImageUrl,
} from '@bosinc/shared';

// c_scale w_1024 (default when no dimensions)
optimizeImageUrl(src);

// Thumbnail @2x DPR
optimizeImageUrl(src, {
  width: C_FIT_MAX_DIMENSION,
  quality: CLOUDINARY_QUALITY_MODE.GOOD,
});

// Large image — skips w_/h_ automatically
optimizeImageUrl(src, { width: 640 });

// Original URL unchanged
optimizeImageUrl(src, { disabled: true });

// Large preview with explicit scale
optimizeImageUrl(src, { width: 4096, strategy: 'scale' });
```

## Options

| Field      | Type                | Default     | Description                       |
| ---------- | ------------------- | ----------- | --------------------------------- |
| `width`    | `number`            | —           | Target CSS width                  |
| `height`   | `number`            | —           | Target CSS height                 |
| `quality`  | `CloudinaryQuality` | `auto:best` | Cloudinary `q_auto` mode          |
| `disabled` | `boolean`           | `false`     | Return original URL               |
| `strategy` | `'fit' \| 'scale'`  | `'fit'`     | Resize crop when dimensions apply |

## Constants

See [Constants](/constants) for `CLOUDINARY_QUALITY_MODE`, `C_DEFAULT_SCALE_WIDTH`, `C_FIT_MAX_DIMENSION`, `C_FIT_RETINA_DPR`, and CDN path parts.

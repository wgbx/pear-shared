---
title: image
---

# image

面向 Web 交付的 Cloudinary 图片 URL 优化。

## optimizeImageUrl

统一入口函数。未提供尺寸时，使用 `C_DEFAULT_SCALE_WIDTH`（1024）的 `c_scale`。较小尺寸（≤ `C_FIT_MAX_DIMENSION`）使用带视网膜 DPR 的 `c_fit`；更大的显式尺寸只应用格式和质量优化，以避免配合 CSS `object-fit: cover` 时图片模糊。

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

## 选项

| 字段       | 类型                | 默认值      | 说明                     |
| ---------- | ------------------- | ----------- | ------------------------ |
| `width`    | `number`            | —           | 目标 CSS 宽度            |
| `height`   | `number`            | —           | 目标 CSS 高度            |
| `quality`  | `CloudinaryQuality` | `auto:best` | Cloudinary `q_auto` 模式 |
| `disabled` | `boolean`           | `false`     | 返回原始 URL             |
| `strategy` | `'fit' \| 'scale'`  | `'fit'`     | 提供尺寸时的缩放裁切方式 |

## 常量

`CLOUDINARY_QUALITY_MODE`、`C_DEFAULT_SCALE_WIDTH`、`C_FIT_MAX_DIMENSION`、`C_FIT_RETINA_DPR` 及 CDN 路径片段请参见 [Constants](/constants)。

---
title: Image
---

# Image

基于 Cloudinary 优化的 `<img>`，当 `src` 缺失或加载失败时会自动回退。

未传入 `width` / `height` 时，Cloudinary URL 会使用 `c_scale,w_1024`（`C_DEFAULT_SCALE_WIDTH`）进行优化。传入尺寸可以控制下载大小，缩略图（≤150px）会使用 `c_fit` + 2x DPR。

## 示例

### 缩略图

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

### 大图预览

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

### 撑满父容器

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

### 自定义回退图

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

| 属性            | 说明                               | 类型                | 是否必填 | 默认值                   |
| --------------- | ---------------------------------- | ------------------- | -------- | ------------------------ |
| src             | 图片地址                           | `string`            | `-`      | `-`                      |
| alt             | 无障碍描述文本                     | `string`            | `✅`     | `-`                      |
| fallbackSrc     | `src` 为空或加载失败时显示的回退图 | `string`            | `-`      | `DEFAULT_IMAGE_FALLBACK` |
| width           | CSS 宽度；同时用于 Cloudinary 优化 | `number`            | `-`      | `-`                      |
| height          | CSS 高度；同时用于 Cloudinary 优化 | `number`            | `-`      | `-`                      |
| fill            | 拉伸铺满父容器的 100%              | `boolean`           | `-`      | `false`                  |
| disableOptimize | 跳过 Cloudinary URL 优化           | `boolean`           | `-`      | `false`                  |
| quality         | Cloudinary 画质模式                | `CloudinaryQuality` | `-`      | `auto:best`              |
| strategy        | 设置尺寸时的缩放策略               | `'fit' \| 'scale'`  | `-`      | `'fit'`                  |
| loading         | 原生懒加载                         | `'lazy' \| 'eager'` | `-`      | `'lazy'`                 |
| slotProps       | 传给根 `<img>` 元素的 props        | `{ root?: ... }`    | `-`      | `-`                      |

另见 {@link optimizeImageUrl} 和 {@link useOptimizedImageUrl}。

## 调试

在 `@bosinc/shared` 中将 {@link isDebug} 设为 `true`，即可为所有共享 `Image` 加上描边并设置 `data-is-debug="1"`。

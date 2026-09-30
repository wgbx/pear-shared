---
title: ImageGroup
---

# ImageGroup

以一行方形缩略图展示图片。当 `items.length > max` 时，超出的数量会以蒙层形式叠加在最后一个可见项上（例如 `10+`）。

## 示例

### 基础用法

```tsx
import { ImageGroup } from '@bosinc/shared';

export default () => {
  return (
    <ImageGroup
      items={[
        { src: 'https://picsum.photos/200?random=1', id: '1' },
        { src: 'https://picsum.photos/200?random=2', id: '2' },
        { src: 'https://picsum.photos/200?random=3', id: '3' },
        { src: 'https://picsum.photos/200?random=4', id: '4' },
        { src: 'https://picsum.photos/200?random=5', id: '5' },
        { src: 'https://picsum.photos/200?random=6', id: '6' },
      ]}
    />
  );
};
```

### 点击整个 ImageGroup

```tsx
import { ImageGroup, useAlert } from '@bosinc/shared';

export default () => {
  const { success } = useAlert();

  return (
    <ImageGroup
      onClick={(item) => {
        success(`clicked`);
      }}
      items={[
        { src: 'https://picsum.photos/200?random=21', id: '21' },
        { src: 'https://picsum.photos/200?random=22', id: '22' },
        { src: 'https://picsum.photos/200?random=23', id: '23' },
        { src: 'https://picsum.photos/200?random=24', id: '24' },
        { src: 'https://picsum.photos/200?random=25', id: '25' },
      ]}
    />
  );
};
```

### 点击单个图片项

```tsx
import { ImageGroup, useAlert } from '@bosinc/shared';

export default () => {
  const { success } = useAlert();

  return (
    <ImageGroup
      onItemClick={(item) => {
        success(`clicked: ${item.src}`);
      }}
      items={[
        { src: 'https://picsum.photos/200?random=21', id: '21' },
        { src: 'https://picsum.photos/200?random=22', id: '22' },
        { src: 'https://picsum.photos/200?random=23', id: '23' },
        { src: 'https://picsum.photos/200?random=24', id: '24' },
        { src: 'https://picsum.photos/200?random=25', id: '25' },
      ]}
    />
  );
};
```

### 自定义样式

```tsx
import { ImageGroup } from '@bosinc/shared';

export default () => {
  return (
    <ImageGroup
      max={3}
      overlap={0}
      slotProps={{
        root: {
          sx: {
            gap: 1,
          },
        },
        item: {
          sx: {
            width: 60,
            height: 60,
          },
        },
        count: { sx: { fontSize: '1.5rem', color: 'red.700' } },
      }}
      items={[
        { src: 'https://picsum.photos/200?random=11', id: '11' },
        { src: 'https://picsum.photos/200?random=12', id: '12' },
        { src: 'https://picsum.photos/200?random=13', id: '13' },
        { src: 'https://picsum.photos/200?random=14', id: '14' },
        { src: 'https://picsum.photos/200?random=13', id: '15' },
        { src: 'https://picsum.photos/200?random=14', id: '16' },
      ]}
    />
  );
};
```

## API

### ImageGroupProps

| 属性        | 说明                                                     | 类型                              | 是否必填 | 默认值 |
| ----------- | -------------------------------------------------------- | --------------------------------- | -------- | ------ |
| items       | 图片项列表                                               | `{ src: string; alt?: string }[]` | `✅`     | `-`    |
| max         | 最多显示的图片数量（超出的数量会叠加在最后一个可见项上） | `number`                          | `-`      | `4`    |
| overlap     | 重叠偏移量（MUI 间距单位）。设为 `0` 可关闭重叠效果      | `number`                          | `-`      | `1`    |
| onClick     | 整个图片组的点击回调                                     | `() => void`                      | `-`      | `-`    |
| onItemClick | 每个可见图片项的点击回调                                 | `(item: ImageGroupItem) => void`  | `-`      | `-`    |
| slotProps   | 内部插槽的细粒度 props 覆盖                              | `root/item/img/count`             | `-`      | `-`    |

# ImageGroup

Displays a row of square thumbnails. When `items.length > max`, the overflow count is rendered as an overlay on the last visible item (e.g. `10+`).

## Examples

### Basic Usage

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

### Click Item

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

### Customize Style

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
        count: { sx: { fontSize: '1.5rem' } },
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

| Property    | Description                                                            | Type                              | Required | Default |
| ----------- | ---------------------------------------------------------------------- | --------------------------------- | -------- | ------- |
| items       | Image items                                                            | `{ src: string; alt?: string }[]` | `✅`     | `-`     |
| max         | Max number of visible items (overflow renders on the last visible one) | `number`                          | `-`      | `4`     |
| overlap     | Overlap offset (MUI spacing units). Set `0` to disable overlap         | `number`                          | `-`      | `1`     |
| onClick     | Click handler for the whole group                                      | `() => void`                      | `-`      | `-`     |
| onItemClick | Click handler for each visible item                                    | `(item: ImageGroupItem) => void`  | `-`      | `-`     |
| slotProps   | Fine-grained props override for internal slots                         | `root/item/img/count`             | `-`      | `-`     |

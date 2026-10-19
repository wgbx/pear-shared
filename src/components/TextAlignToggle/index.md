---
title: TextAlignToggle
---

# TextAlignToggle

A toggle component for text alignment selection (left, center, right). Supports both controlled and uncontrolled usage.

## Examples

### Uncontrolled Usage

State managed internally by the component.

```tsx
import { TextAlignToggle } from '@bosinc/shared';

export default function DemoUncontrolled() {
  return (
    <TextAlignToggle
      defaultValue="left"
      onChange={(align) => console.log(align)}
    />
  );
}
```

### Controlled Usage

State managed by parent component.

```tsx
import { TextAlignToggle, TextAlign } from '@bosinc/shared';
import { useState } from 'react';

export default function DemoControlled() {
  const [align, setAlign] = useState<TextAlign>(TextAlign.LEFT);

  return (
    <div>
      <TextAlignToggle value={align} onChange={setAlign} />
      <p>Current alignment: {align}</p>
    </div>
  );
}
```

### Specific Options

You can restrict the displayed options by providing an array of `TextAlign` values to the `options` prop. The component will only render the specified alignments based on the default configuration.

```tsx
import { TextAlignToggle, TextAlign } from '@bosinc/shared';
import { useState } from 'react';

export default function DemoSpecificOptions() {
  const [align, setAlign] = useState<TextAlign>(TextAlign.LEFT);

  return (
    <div>
      <TextAlignToggle
        value={align}
        onChange={setAlign}
        options={[TextAlign.LEFT, TextAlign.RIGHT]} // Only show left and right
      />
    </div>
  );
}
```

### Disabled

```tsx
import { TextAlignToggle } from '@bosinc/shared';

export default function DemoDisabled() {
  return <TextAlignToggle disabled defaultValue="left" />;
}
```

### Custom Styles

```tsx
import { TextAlignToggle } from '@bosinc/shared';

export default function DemoCustomStyles() {
  return (
    <TextAlignToggle
      defaultValue="left"
      slotProps={{
        root: {
          sx: {
            background: 'rgba(0,0,0,0.2)',
          },
        },
        button: {
          sx: { borderRadius: 10 },
        },
        icon: { sx: { fontSize: '10rem' } },
      }}
    />
  );
}
```

## API

### TextAlignToggle Props

| Property     | Description                           | Type                         | Required | Default                 |
| ------------ | ------------------------------------- | ---------------------------- | -------- | ----------------------- |
| value        | Controlled value                      | `TextAlign`                  | `-`      | `-`                     |
| onChange     | Callback when value changes           | `(value: TextAlign) => void` | `-`      | `-`                     |
| defaultValue | Initial value for uncontrolled mode   | `TextAlign`                  | `-`      | `'left'`                |
| options      | Restrict the displayed options        | `TextAlign[]`                | `-`      | `[LEFT, CENTER, RIGHT]` |
| slotProps    | Optional slot props for customization | `SlotProps`                  | `-`      | `-`                     |
| disabled     | Disable all buttons                   | `boolean`                    | `-`      | `false`                 |

### SlotProps

| Property | Description             | Type               |
| -------- | ----------------------- | ------------------ |
| root     | Root ButtonGroup props  | `ButtonGroupProps` |
| button   | Individual button props | `IconButtonProps`  |
| icon     | Icon props              | `SvgIconProps`     |

### TextAlign Enum

```typescript
enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}
```

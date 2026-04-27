# IconToggle

A generic and highly reusable toggle component that can be customized with any options and icons. Supports both controlled and uncontrolled usage.

## Examples

### Custom Options

You can pass custom options to use it as a generic toggle component.

```tsx
import { IconToggle, type IconToggleOption } from '@bosinc/shared';
import { BoldLine, ItalicLine, UnderlineLine } from '@bosinc/shared/icons';
import { useState } from 'react';

const FONT_OPTIONS: IconToggleOption<string>[] = [
  { value: 'bold', icon: BoldLine, label: 'Bold' },
  { value: 'italic', icon: ItalicLine, label: 'Italic' },
  { value: 'underline', icon: UnderlineLine, label: 'Underline' },
];

export default function DemoCustomOptions() {
  const [style, setStyle] = useState<string>('bold');

  return (
    <IconToggle<string>
      options={FONT_OPTIONS}
      value={style}
      onChange={setStyle}
    />
  );
}
```

### Disabled State

You can disable the entire toggle group or individual options.

```tsx
import { IconToggle, type IconToggleOption } from '@bosinc/shared';
import { BoldLine, ItalicLine, UnderlineLine } from '@bosinc/shared/icons';

const FONT_OPTIONS: IconToggleOption<string>[] = [
  { value: 'bold', icon: BoldLine, label: 'Bold' },
  { value: 'italic', icon: ItalicLine, label: 'Italic', disabled: true }, // Individually disabled
  { value: 'underline', icon: UnderlineLine, label: 'Underline' },
];

export default function DemoDisabled() {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      {/* Individual item disabled */}
      <IconToggle options={FONT_OPTIONS} defaultValue="bold" />

      {/* Entire group disabled */}
      <IconToggle disabled options={FONT_OPTIONS} defaultValue="bold" />
    </div>
  );
}
```

## API

### IconToggle Props

| Property     | Description                           | Type                    | Required | Default            |
| ------------ | ------------------------------------- | ----------------------- | -------- | ------------------ |
| value        | Controlled value                      | `T`                     | `-`      | `-`                |
| onChange     | Callback when value changes           | `(value: T) => void`    | `-`      | `-`                |
| defaultValue | Initial value for uncontrolled mode   | `T`                     | `-`      | `options[0].value` |
| options      | Custom options for the toggle         | `IconToggleOption<T>[]` | `true`   | `-`                |
| slotProps    | Optional slot props for customization | `SlotProps`             | `-`      | `-`                |
| disabled     | Disable all buttons                   | `boolean`               | `-`      | `false`            |

### SlotProps

| Property | Description             | Type               |
| -------- | ----------------------- | ------------------ |
| root     | Root ButtonGroup props  | `ButtonGroupProps` |
| button   | Individual button props | `IconButtonProps`  |
| icon     | Icon props              | `SvgIconProps`     |

### Types

```typescript
import { type ElementType } from 'react';

export interface IconToggleOption<T = string> {
  value: T;
  icon: ElementType<any>;
  label: string;
  disabled?: boolean;
}
```

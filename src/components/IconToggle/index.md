---
title: IconToggle
---

# IconToggle

通用且高度可复用的 toggle 组件，可以自定义任意选项和图标。同时支持受控和非受控用法。

## 示例

### 自定义选项

可以传入自定义选项，把它当作通用 toggle 组件使用。

```tsx
import { IconToggle, type IconToggleOption } from '@bosinc/shared';
import { BoldLine, ItalicLine, UnderlineLine } from '@mingcute/react';
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

### 禁用状态

可以禁用整个 toggle 组，也可以禁用单个选项。

```tsx
import { IconToggle, type IconToggleOption } from '@bosinc/shared';
import { BoldLine, ItalicLine, UnderlineLine } from '@mingcute/react';

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

| 属性         | 说明                        | 类型                    | 必填   | 默认值             |
| ------------ | --------------------------- | ----------------------- | ------ | ------------------ |
| value        | 受控值                      | `T`                     | `-`    | `-`                |
| onChange     | 值变化时的回调              | `(value: T) => void`    | `-`    | `-`                |
| defaultValue | 非受控模式下的初始值        | `T`                     | `-`    | `options[0].value` |
| options      | toggle 的自定义选项         | `IconToggleOption<T>[]` | `true` | `-`                |
| slotProps    | 用于自定义的可选 slot props | `SlotProps`             | `-`    | `-`                |
| disabled     | 禁用所有按钮                | `boolean`               | `-`    | `false`            |

### SlotProps

| 属性   | 说明                    | 类型               |
| ------ | ----------------------- | ------------------ |
| root   | 根节点 ButtonGroup 属性 | `ButtonGroupProps` |
| button | 单个按钮属性            | `IconButtonProps`  |
| icon   | 图标属性                | `SvgIconProps`     |

### 类型定义

```typescript
import { type ElementType } from 'react';

export interface IconToggleOption<T = string> {
  value: T;
  icon: ElementType<any>;
  label: string;
  disabled?: boolean;
}
```

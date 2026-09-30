---
title: TextAlignToggle
---

# TextAlignToggle

一个用于选择文本对齐方式（左、中、右）的切换组件，支持受控和非受控两种用法。

## 示例

### 非受控用法

状态由组件内部管理。

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

### 受控用法

状态由父组件管理。

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

### 限定可选项

通过给 `options` 属性传入 `TextAlign` 值数组，可以限制展示的选项。组件只会渲染基于默认配置中指定的对齐方式。

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

### 禁用状态

```tsx
import { TextAlignToggle } from '@bosinc/shared';

export default function DemoDisabled() {
  return <TextAlignToggle disabled defaultValue="left" />;
}
```

### 自定义样式

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

| 属性         | 说明                     | 类型                         | 是否必填 | 默认值                  |
| ------------ | ------------------------ | ---------------------------- | -------- | ----------------------- |
| value        | 受控模式下的值           | `TextAlign`                  | `-`      | `-`                     |
| onChange     | 值变化时的回调           | `(value: TextAlign) => void` | `-`      | `-`                     |
| defaultValue | 非受控模式下的初始值     | `TextAlign`                  | `-`      | `'left'`                |
| options      | 限制展示的选项           | `TextAlign[]`                | `-`      | `[LEFT, CENTER, RIGHT]` |
| slotProps    | 用于自定义的可选插槽属性 | `SlotProps`                  | `-`      | `-`                     |
| disabled     | 禁用所有按钮             | `boolean`                    | `-`      | `false`                 |

### SlotProps

| 属性   | 说明                    | 类型               |
| ------ | ----------------------- | ------------------ |
| root   | 根节点 ButtonGroup 属性 | `ButtonGroupProps` |
| button | 单个按钮的属性          | `IconButtonProps`  |
| icon   | 图标属性                | `SvgIconProps`     |

### TextAlign 枚举

```typescript
enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}
```

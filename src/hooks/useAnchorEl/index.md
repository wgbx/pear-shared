---
title: useAnchorEl
---

# useAnchorEl

Generic hook for any UI that positions itself with an `anchorEl` (MUI `Menu` / `Popover` / `Popper`, or shared wrappers like `MenuDropdown`, `SelectDropdown`, `Popover`).

Return shape matches overlay props (`anchorEl` / `open` / `onClose`), so you keep `onClick` for the trigger and spread the rest onto the overlay.

## Examples

### With MenuDropdown

```tsx
import { Button, MenuDropdown, useAnchorEl } from '@bosinc/shared';
import { ProfileLine, Settings3Line } from '@mingcute/react';

export default () => {
  const { onClick, ...menuProps } = useAnchorEl();

  const items = [
    [
      { icon: ProfileLine, label: 'Profile', onClick: () => {} },
      { icon: Settings3Line, label: 'Settings', onClick: () => {} },
    ],
  ];

  return (
    <>
      <Button onClick={onClick}>Open Menu</Button>
      <MenuDropdown {...menuProps} items={items} />
    </>
  );
};
```

### With SelectDropdown

Prefer `useSelectDropdown` when you also need selected value state. With `useAnchorEl` only:

```tsx
import { useState } from 'react';
import { Button, SelectDropdown, useAnchorEl } from '@bosinc/shared';

export default () => {
  const { onClick, ...menuProps } = useAnchorEl();
  const [value, setValue] = useState('inter');

  return (
    <>
      <Button onClick={onClick}>{value}</Button>
      <SelectDropdown
        {...menuProps}
        value={value}
        onChange={(option) => setValue(String(option.value))}
        options={[
          { label: 'Inter', value: 'inter' },
          { label: 'Roboto', value: 'roboto' },
          { label: 'Georgia', value: 'georgia' },
        ]}
      />
    </>
  );
};
```

### With Popover

```tsx
import { Button, Popover, useAnchorEl } from '@bosinc/shared';

export default () => {
  const { onClick, ...popoverProps } = useAnchorEl();

  return (
    <>
      <Button onClick={onClick}>Open Popover</Button>
      <Popover
        {...popoverProps}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <div style={{ padding: 16 }}>Popover content</div>
      </Popover>
    </>
  );
};
```

## API

### Returns

| Property | Description                                     | Type                             |
| -------- | ----------------------------------------------- | -------------------------------- |
| anchorEl | Current anchor element                          | `T \| null`                      |
| open     | Whether the overlay should be open              | `boolean`                        |
| onClick  | Set anchor from a click event (for the trigger) | `(event: MouseEvent<T>) => void` |
| onClose  | Clear anchor (close)                            | `() => void`                     |

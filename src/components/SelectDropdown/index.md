---
title: SelectDropdown
---

# SelectDropdown

A selection menu panel built on MUI `Menu`. The business owns the trigger; `SelectDropdown` only handles open/close positioning, options, and optional selected checkmarks. Prefer `useSelectDropdown` for anchor + value state, or compose with `useAnchorEl` when you only need open/close.

## Examples

### Basic Usage

```tsx
import { Button, SelectDropdown, useSelectDropdown } from '@bosinc/shared';

export default () => {
  const { onClick, ...selectProps } = useSelectDropdown({
    defaultValue: 'inter',
  });

  return (
    <>
      <Button onClick={onClick}>{selectProps.value}</Button>
      <SelectDropdown
        {...selectProps}
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

### Long list (scroll)

Default `menuMaxHeight` is `400`. With many options the panel stays capped and scrolls.

```tsx
import { useMemo } from 'react';
import { Button, SelectDropdown, useSelectDropdown } from '@bosinc/shared';

export default () => {
  const { onClick, ...selectProps } = useSelectDropdown({
    defaultValue: 1,
  });

  const options = useMemo(
    () =>
      Array.from({ length: 100 }, (_, index) => {
        const value = index + 1;
        return { label: `Option ${value}`, value };
      }),
    [],
  );

  return (
    <>
      <Button onClick={onClick}>Option {selectProps.value}</Button>
      <SelectDropdown {...selectProps} options={options} />
    </>
  );
};
```

### Fixed trigger label (no value in trigger)

Trigger copy stays fixed (e.g. "Sort by"). Selection still updates app state; omit `value` / `defaultValue` if nothing should show as selected initially.

```tsx
import { Stack, Typography } from '@mui/material';
import { DownLine } from '@mingcute/react';
import { SelectDropdown, useSelectDropdown } from '@bosinc/shared';

export default () => {
  const { onClick, ...selectProps } = useSelectDropdown<'newest' | 'oldest'>();

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        gap={0.5}
        onClick={onClick}
        sx={{ cursor: 'pointer' }}
      >
        <Typography sx={{ fontSize: '0.875rem', fontWeight: 600 }}>
          Sort by
        </Typography>
        <DownLine />
      </Stack>

      <SelectDropdown
        {...selectProps}
        options={[
          { label: 'Date (Newest first)', value: 'newest' },
          { label: 'Date (Oldest first)', value: 'oldest' },
        ]}
      />
    </>
  );
};
```

### Option preview styles

```tsx
import { Button, SelectDropdown, useSelectDropdown } from '@bosinc/shared';

export default () => {
  const { onClick, ...selectProps } = useSelectDropdown({
    defaultValue: 700,
  });

  return (
    <>
      <Button onClick={onClick}>Weight {selectProps.value}</Button>
      <SelectDropdown
        {...selectProps}
        options={[
          {
            label: 'Regular',
            value: 400,
            slotProps: { text: { sx: { fontWeight: 400 } } },
          },
          {
            label: 'Bold',
            value: 700,
            slotProps: { text: { sx: { fontWeight: 700 } } },
          },
        ]}
      />
    </>
  );
};
```

### With useAnchorEl only

When value lives elsewhere, use `useAnchorEl` for open/close:

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
        ]}
      />
    </>
  );
};
```

## API

### SelectDropdownProps

| Property      | Description                                                  | Type                                        | Required | Default |
| ------------- | ------------------------------------------------------------ | ------------------------------------------- | -------- | ------- |
| anchorEl      | Anchor element for menu positioning                          | `HTMLElement \| null`                       | ✅       | `-`     |
| open          | Whether the menu is open                                     | `boolean`                                   | ✅       | `-`     |
| onClose       | Called when the menu should close                            | `() => void`                                | ✅       | `-`     |
| options       | Option list                                                  | `SelectDropdownOption<T>[]`                 | ✅       | `-`     |
| value         | Selected value. Omit / `undefined` means nothing is selected | `T`                                         | `-`      | `-`     |
| onChange      | Called with the selected option; menu then closes            | `(option: SelectDropdownOption<T>) => void` | `-`      | `-`     |
| showCheck     | Show checkmark on the selected option                        | `boolean`                                   | `-`      | `true`  |
| menuMaxHeight | Menu paper max height                                        | `number`                                    | `-`      | `400`   |
| slotProps     | Style overrides for paper and menu                           | object                                      | `-`      | `-`     |

### SelectDropdownOption

| Property  | Description                                 | Type        | Required | Default |
| --------- | ------------------------------------------- | ----------- | -------- | ------- |
| label     | Option label                                | `ReactNode` | ✅       | `-`     |
| value     | Option value                                | `T`         | ✅       | `-`     |
| disabled  | Disable this option                         | `boolean`   | `-`      | `false` |
| slotProps | Per-option style overrides (`root`, `text`) | object      | `-`      | `-`     |

---
title: useSelectDropdown
---

# useSelectDropdown

Combines `useAnchorEl` with selected-value state for `SelectDropdown`. Supports controlled (`value`) and uncontrolled (`defaultValue`) modes.

Keep `onClick` / `value` for the trigger, spread the rest onto `SelectDropdown`.

## Examples

### Basic Usage

```tsx
import { Button, SelectDropdown, useSelectDropdown } from '@bosinc/shared';

export default () => {
  const { onClick, value, ...selectProps } = useSelectDropdown({
    defaultValue: 'inter',
  });

  return (
    <>
      <Button onClick={onClick}>{value}</Button>
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

### Controlled

```tsx
import { useState } from 'react';
import { Button, SelectDropdown, useSelectDropdown } from '@bosinc/shared';

export default () => {
  const [value, setValue] = useState('inter');
  const { onClick, ...selectProps } = useSelectDropdown({
    value,
    onChange: (option) => setValue(String(option.value)),
  });

  return (
    <>
      <Button onClick={onClick}>{value}</Button>
      <SelectDropdown
        {...selectProps}
        options={[
          { label: 'Inter', value: 'inter' },
          { label: 'Roboto', value: 'roboto' },
        ]}
      />
    </>
  );
};
```

### Fixed trigger label

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

## API

### UseSelectDropdownOptions

| Property     | Description                     | Type                                        | Required | Default |
| ------------ | ------------------------------- | ------------------------------------------- | -------- | ------- |
| value        | Controlled selected value       | `T`                                         | `-`      | `-`     |
| defaultValue | Uncontrolled initial value      | `T`                                         | `-`      | `-`     |
| onChange     | Called with the selected option | `(option: SelectDropdownOption<T>) => void` | `-`      | `-`     |

### Returns

| Property | Description                                                           | Type                                        |
| -------- | --------------------------------------------------------------------- | ------------------------------------------- |
| anchorEl | Current anchor element                                                | `T \| null`                                 |
| open     | Whether the menu should be open                                       | `boolean`                                   |
| onClick  | Set anchor from a click event (for the trigger)                       | `(event: MouseEvent<E>) => void`            |
| onClose  | Clear anchor (close)                                                  | `() => void`                                |
| value    | Current selected value                                                | `T \| undefined`                            |
| onChange | Update selection (also included when spreading onto `SelectDropdown`) | `(option: SelectDropdownOption<T>) => void` |

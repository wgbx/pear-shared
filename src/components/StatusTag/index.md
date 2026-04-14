# StatusTag

A status tag component for displaying different status states with color-coded badges, built on MUI `Stack` and `Typography`.

## Examples

### Basic Usage

```tsx
import { STATUS_TAG_MAP, StatusTag } from '@bosinc/shared';

export default () => {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <StatusTag type={STATUS_TAG_MAP.DEFAULT} label="Default" />
      <StatusTag type={STATUS_TAG_MAP.SUCCESS} label="Success" />
      <StatusTag type={STATUS_TAG_MAP.WARNING} label="Warning" />
      <StatusTag type={STATUS_TAG_MAP.ERROR} label="Error" />
      <StatusTag type={STATUS_TAG_MAP.INFO} label="Info" />
    </div>
  );
};
```

### With Custom Map

```tsx
import { StatusTag } from '@bosinc/shared';

const statusList = [
  { type: 'default', label: 'Upcoming' },
  { type: 'success', label: 'Completed' },
  { type: 'warning', label: 'On Hold' },
  { type: 'error', label: 'Canceled' },
] as const;

export default () => {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {statusList.map(({ type, label }) => (
        <StatusTag key={type} type={type} label={label} />
      ))}
    </div>
  );
};
```

### With Custom Style

```tsx
import { StatusTag } from '@bosinc/shared';

const statusList = [
  { type: 'default', label: 'Upcoming' },
  { type: 'success', label: 'Completed' },
  { type: 'warning', label: 'On Hold' },
  { type: 'error', label: 'Canceled' },
] as const;

export default () => {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {statusList.map(({ type, label }) => (
        <StatusTag
          key={type}
          type={type}
          label={label}
          slotProps={{
            root: {
              sx: {
                minWidth: 96,
                height: 40,
              },
            },
            text: {
              sx: {
                fontSize: '0.875rem',
              },
            },
          }}
        />
      ))}
    </div>
  );
};
```

## API

### StatusTagProps

| Property  | Description                             | Type                                                       | Required | Default |
| --------- | --------------------------------------- | ---------------------------------------------------------- | -------- | ------- |
| type      | Status type determining color scheme    | `'default' \| 'success' \| 'warning' \| 'error' \| 'info'` | `✅`     | `-`     |
| label     | Display text for the tag                | `string`                                                   | `✅`     | `-`     |
| sx        | Custom styles applied to root container | `SxProps<Theme>`                                           | `-`      | `-`     |
| slotProps | Slots props for customization           | `{ root?, typography? }`                                   | `-`      | `-`     |

### Status Types

| Type      | Background   | Text Color  | Use Case                       |
| --------- | ------------ | ----------- | ------------------------------ |
| `default` | Gray         | Dark Gray   | Neutral or upcoming states     |
| `success` | Light Green  | Dark Green  | Completed or successful states |
| `warning` | Light Orange | Dark Orange | Paused or pending states       |
| `error`   | Red          | White       | Canceled or failed states      |
| `info`    | Light Blue   | Dark Blue   | Informational states           |

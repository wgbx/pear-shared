---
title: Popover
---

# Popover

A popover component built on MUI `Popover` with custom styling. API is fully compatible with MUI Popover.

## Examples

### Basic Usage

```tsx
import { Button, Popover, useAnchorEl } from '@bosinc/shared';

export default function Demo() {
  const { onClick, ...popoverProps } = useAnchorEl();

  return (
    <div>
      <Button onClick={onClick}>Open Popover</Button>
      <Popover
        {...popoverProps}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div style={{ padding: 16 }}>Popover content</div>
      </Popover>
    </div>
  );
}
```

## API

All props from MUI `Popover` are supported. See [MUI Popover API](https://mui.com/material-ui/api/popover/) for complete documentation.

| Property        | Type                                                                                     | Default                                   | Description                                             |
| --------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------- | ------------------------------------------------------- |
| anchorEl        | `HTMLElement \| null`                                                                    | -                                         | The element used to set the position of the popover     |
| open            | `boolean`                                                                                | `false`                                   | If `true`, the component is shown                       |
| onClose         | `(event: {}, reason: 'escapeKeyDown' \| 'backdropClick') => void`                        | -                                         | Callback fired when the component requests to be closed |
| anchorOrigin    | `{ vertical: 'top' \| 'center' \| 'bottom', horizontal: 'left' \| 'center' \| 'right' }` | `{ vertical: 'top', horizontal: 'left' }` | Anchor position                                         |
| transformOrigin | `{ vertical: 'top' \| 'center' \| 'bottom', horizontal: 'left' \| 'center' \| 'right' }` | `{ vertical: 'top', horizontal: 'left' }` | Transform origin                                        |
| children        | `ReactNode`                                                                              | -                                         | The content of the component                            |

## Custom Styles

This component applies custom styles:

- Rounded corners (`borderRadius: 16px`)
- Enhanced shadow (`boxShadow: theme.shadows[4]`)
- Top margin (`marginTop: 8px`)

You can override these styles using the `slotProps.paper.sx` prop.

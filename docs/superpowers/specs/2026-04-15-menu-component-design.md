# Menu Component Design Specification

**Date:** 2026-04-15
**Status:** Approved
**Component:** MenuDropdown, MenuItem

## Overview

A flexible Menu component built on top of MUI Menu, following pear-shared project conventions. Supports grouped menu items with automatic dividers, icons, disabled states, and customizable triggers.

## Component Structure

```
Menu/
├── MenuDropdown.tsx    # Main component with trigger and menu
├── MenuItem.tsx        # Individual menu item component
├── type.ts            # TypeScript type definitions
└── index.ts           # Public exports
```

## API Design

### MenuDropdown

**Props:**
```tsx
interface MenuDropdownProps {
  trigger: React.ReactNode;
  items: MenuItemOption[];
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  slotProps?: {
    paper?: SxProps<Theme>;
    menu?: Omit<MenuProps, 'open' | 'onClose' | 'anchorEl'>;
  };
}
```

**Behavior:**
- Non-controlled by default (manages own open state)
- Supports controlled mode via `open` + `onOpenChange`
- Closes automatically after clicking menu item
- Closes when clicking outside

### MenuItemOption

```tsx
interface MenuItemOption {
  key: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  group?: string;
}
```

## Grouping Logic

Dividers are automatically rendered between groups:
- Adjacent items with different `group` values → divider rendered
- First group → no divider before it
- Items without `group` → treated as single group

**Example:**
```tsx
const items = [
  { key: '1', label: '编辑', group: 'admin' },
  { key: '2', label: '删除', group: 'admin' },
  // ← divider rendered here
  { key: '3', label: '查看', group: 'view' },
  { key: '4', label: '导出', group: 'view' },
];
```

## Styling Guidelines

Following pear-shared conventions:

**Menu Container:**
- Border radius: `theme.spacing(2)`
- Min width: 264px
- Padding: `theme.spacing(1)`

**Menu Item:**
- Height: 44px
- Padding: `theme.spacing(1)` horizontal, 0 vertical
- Border radius: `theme.spacing(1)`
- Font size: 0.875rem (14px)
- Font weight: 400
- Gap between icon and text: `theme.spacing(1)`

**Icon:**
- Default size: 1.25rem (20px)

**Divider:**
- Color: `shades.200`
- Margin: 2px

**Disabled State:**
- Opacity: 0.5
- Cursor: not-allowed

## Implementation Details

### MenuDropdown.tsx

- Uses `useState` for non-controlled mode
- Uses `styled()` from MUI for styling
- Renders `MuiMenu` with custom styling
- Maps `items` to `MenuItem` components
- Inserts `MuiDivider` between groups

### MenuItem.tsx

- Wraps `MuiMenuItem`
- Renders icon (if provided) and label in a Stack
- Handles disabled state styling
- Passes through `onClick` only when not disabled

### type.ts

- Exports `MenuDropdownProps`
- Exports `MenuItemOption`
- Re-exports necessary MUI types

## Usage Example

```tsx
import { MenuDropdown } from '@pear-shared/components/Menu';

function MyComponent() {
  const items = [
    {
      key: 'edit',
      label: '编辑',
      icon: <EditIcon />,
      group: 'actions',
      onClick: () => console.log('edit'),
    },
    {
      key: 'delete',
      label: '删除',
      icon: <DeleteIcon />,
      group: 'actions',
      onClick: () => console.log('delete'),
    },
    {
      key: 'view',
      label: '查看',
      icon: <EyeIcon />,
      group: 'view',
      onClick: () => console.log('view'),
    },
  ];

  return (
    <MenuDropdown
      trigger={<Button>更多操作</Button>}
      items={items}
    />
  );
}
```

## Dependencies

- `@mui/material`: Menu, MenuItem, Divider, Stack, styled
- `react`: ReactElement, useState, useMemoizedFn
- `ahooks`: useMemoizedFn (optional, can use useCallback)

## Future Enhancements

Out of scope for initial implementation:
- Nested/sub-menus
- Keyboard shortcuts display
- Checkbox/radio menu items
- Custom content rendering

## Testing Considerations

- Test grouping logic renders correct dividers
- Test disabled items are not clickable
- Test menu closes after item click
- Test menu closes on outside click
- Test keyboard navigation (Arrow keys, Enter, Escape)

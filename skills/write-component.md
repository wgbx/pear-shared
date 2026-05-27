# Skill: Write React Component (English)

## Goal

Guide development of new React components for the pear-shared library following established patterns for file structure, styling, naming conventions, and code organization.

---

## Input

- Required: Component name and purpose
- Optional: Reference to similar existing components, MUI base component to wrap

---

## Output Requirements

Generate a complete component with:

1. **File Structure** (exactly 3-4 files):

   - `ComponentName.tsx` - Main component implementation
   - `type.ts` - TypeScript type definitions
   - `index.ts` - Public exports
   - `index.md` - Documentation (recommended)

2. **Code Quality**:

   - Uses `styled()` API, not inline `sx` props
   - Uses theme variables (spacing, colors)
   - Proper TypeScript typing with `ReactElement` return type
   - `forwardRef` for ref forwarding when needed

3. **Follows Project Patterns**:
   - File naming: PascalCase (`Popover.tsx`, `StatusTag.tsx`)
   - Styled components: Descriptive names with `Styled` prefix
   - MUI aliases: `Component as MuiComponent`
   - Props destructuring with `slotProps` separation

---

## Implementation Flow (must follow in order)

### Step 1: Create File Structure

Create directory and files:

```
src/components/ComponentName/
├── ComponentName.tsx
├── type.ts
├── index.ts
└── index.md
```

### Step 2: Define Types (type.ts)

**Pattern for Simple Wrapper Components:**

```typescript
export { type ComponentProps } from '@mui/material';
```

**Pattern for Custom Components:**

```typescript
import { type ComponentProps as MuiComponentProps } from '@mui/material';

export interface ComponentNameProps {
  // Required props
  items: ItemType[];
  onChange: (value: string) => void;

  // Optional props
  disabled?: boolean;
  slotProps?: {
    root?: Omit<MuiComponentProps, 'children' | 'onChange'>;
  };
}
```

**Rules:**

- Use `Omit<>` to exclude conflicting MUI props
- Name props interface: `ComponentNameProps`
- Export all types from `index.ts`

### Step 3: Implement Component (ComponentName.tsx)

**Basic Wrapper Pattern:**

```typescript
import { Component as MuiComponent, styled, type ReactElement } from 'react';
import { type ComponentNameProps } from './type';

const StyledComponent = styled(MuiComponent, {
  name: 'ComponentName',
  slot: 'root',
})(({ theme }) => ({
  borderRadius: theme.spacing(1),
  marginTop: theme.spacing(0.5),
}));

export function ComponentName(props: ComponentNameProps): ReactElement {
  return <StyledComponent {...props} />;
}
```

**Component with Children:**

```typescript
export function ComponentName(props: ComponentNameProps): ReactElement {
  const { items, disabled = false, slotProps, ...restProps } = props;

  return (
    <StyledContainer disabled={disabled} {...restProps}>
      {items.map((item: ItemType) => (
        <SubComponent key={item.key} {...item} />
      ))}
    </StyledContainer>
  );
}
```

**Component with forwardRef:**

```typescript
export const ComponentName = forwardRef<HTMLDivElement, ComponentNameProps>(
  ({ children, onClick, disabled }, ref) => {
    return (
      <StyledComponent
        ref={ref}
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
      >
        {children}
      </StyledComponent>
    );
  },
);

ComponentName.displayName = 'ComponentName';
```

**Styled Component Pattern:**

```typescript
const StyledComponent = styled(MuiComponent, {
  name: 'ComponentName',
  slot: 'root',
})(({ theme }) => ({
  // Always use theme variables
  padding: theme.spacing(1),
  backgroundColor: theme.palette.shades[100],
  borderRadius: theme.spacing(1),
}));
```

**Multiple Styled Components:**

```typescript
const ComponentRoot = styled(Stack, {
  name: 'ComponentName',
  slot: 'root',
})(({ theme }) => ({
  // root styles
}));

const ComponentLabel = styled(Typography, {
  name: 'ComponentName',
  slot: 'label',
})(({ theme }) => ({
  // label styles
}));
```

### Step 4: Export (index.ts)

```typescript
export * from './ComponentName';
export * from './type';
```

**Add to Main Export** (`src/index.ts`):

```typescript
export * from './components/ComponentName';
```

### Step 5: Build Verification

```bash
npm run build
```

Check for:

- ✅ No TypeScript errors
- ✅ Component exported correctly
- ✅ Type definitions generated in `dist/`

---

## Component Patterns by Type

### 1. Simple MUI Wrapper

**Use when:** Adding custom styling to existing MUI component

**Example:** Popover, Tooltip

```typescript
import {
  Popover as MuiPopover,
  styled,
  type ReactElement,
} from '@mui/material';
import { type PopoverProps } from './type';

const StyledPopover = styled(MuiPopover, {
  name: 'Popover',
  slot: 'root',
})(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: theme.spacing(1),
    marginTop: theme.spacing(0.5),
  },
}));

export function Popover(props: PopoverProps): ReactElement {
  return <StyledPopover {...props} />;
}
```

### 2. Component with Sub-components

**Use when:** Component has multiple related parts

**Example:** Tabs (Tabs + TabItem + TabsContainer)

```typescript
// Tabs.tsx
export function Tabs(props: TabsProps) {
  const { items, disabled = false, slotProps, ...restProps } = props;

  return (
    <TabsContainer disabled={disabled} {...restProps}>
      {items.map((option: TabOption) => (
        <TabItem key={String(option.value)} {...option} />
      ))}
    </TabsContainer>
  );
}
```

### 3. Component with Config Items

**Use when:** Component renders data from an items array

**Example:** StatusTag with config, Tabs with items

```typescript
// Define item type
interface TabOption {
  value: string;
  label: string;
  disabled?: boolean;
}

// Use in component
export function Tabs(props: TabsProps) {
  const { items } = props;
  return items.map((option) => <TabItem {...option} />);
}
```

### 4. Component with Custom State

**Use when:** Component manages internal state

**Example:** AlertContainer with alertAtom

```typescript
import { useAtomValue, useSetAtom } from 'jotai';
import { alertAtom } from './alertAtom';

export function AlertContainer() {
  const alert = useAtomValue(alertAtom);
  const setAlert = useSetAtom(alertAtom);

  if (!alert) {
    return null;
  }

  return <AlertBanner {...alert} onClose={() => setAlert(undefined)} />;
}
```

---

## Styling Rules (CRITICAL)

### ✅ DO: Use styled() API

```typescript
const StyledComponent = styled(MuiComponent, {
  name: 'ComponentName',
  slot: 'root',
})(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: theme.palette.shades[100],
}));
```

### ❌ DON'T: Use inline sx props

```typescript
// NEVER do this in component files
<Component sx={{ padding: 8, bgcolor: 'shades.100' }} />
```

### Theme Variables (Always Use)

```typescript
// Spacing
theme.spacing(1); // 8px
theme.spacing(2); // 16px

// Colors
theme.palette.shades[100];
theme.palette.primary.main;
theme.palette.error.main;

// Border Radius
theme.spacing(1); // 8px
theme.spacing(2); // 16px
```

### ❌ NEVER Hardcode Values

```typescript
// Bad
borderRadius: '8px',
padding: '8px 16px',
color: '#f5f5f5',

// Good
borderRadius: theme.spacing(1),
padding: theme.spacing(1, 2),
color: theme.palette.shades[100],
```

---

## Type Definition Patterns

### Re-export MUI Types

```typescript
// type.ts
export { type PopoverProps } from '@mui/material';
```

### Extend MUI Types

```typescript
import { type TabsProps as MuiTabsProps } from '@mui/material';

export interface TabsProps
  extends Omit<MuiTabsProps, 'slotProps' | 'onChange'> {
  items: TabOption[];
  onChange: (value: string) => void;
}
```

### Custom Component Props

```typescript
export interface MenuItemProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}
```

---

## Documentation (index.md)

**Generate using `write-component-docs` skill after implementation.**

**Must include:**

1. H1 title matching component name
2. Short intro in English (1-2 sentences)
3. `## Demos` section with at least Basic Usage
4. `## API` section with props table

**Example:**

```markdown
# Popover

A popover component built on top of MUI Popover with custom styling.

## Demos

### Basic Usage

\`\`\`tsx
import { Popover } from '@bosinc/shared';

export default () => {
return <Popover open={open} anchorEl={anchorEl}>Content</Popover>;
};
\`\`\`

## API

### PopoverProps

| Parameter | Description                          | Type                | Required | Default |
| --------- | ------------------------------------ | ------------------- | -------- | ------- |
| open      | Whether the popover is open          | boolean             | ✅       | -       |
| anchorEl  | The element to anchor the popover to | HTMLElement \| null | ✅       | -       |
```

---

## Quality Checklist (self-check before completion)

### File Structure

- [ ] ComponentName.tsx created in `src/components/ComponentName/`
- [ ] type.ts created with proper type definitions
- [ ] index.ts exports component and types
- [ ] index.md documentation created

### Code Quality

- [ ] Uses `styled()` API, NOT inline `sx` props
- [ ] All styling uses theme variables (spacing, colors)
- [ ] Return type is `ReactElement`
- [ ] Uses `forwardRef` if ref forwarding needed
- [ ] Props interface extends MUI types appropriately

### Naming & Patterns

- [ ] Files use PascalCase: `ComponentName.tsx`
- [ ] Styled components have descriptive names with `Styled` prefix
- [ ] MUI components use `as` alias: `Component as MuiComponent`
- [ ] Props destructuring separates `slotProps`

### Exports

- [ ] Component exported from index.ts
- [ ] Types exported from index.ts
- [ ] Added to main `src/index.ts`

### Build

- [ ] `npm run build` passes without errors
- [ ] Type definitions generated in `dist/`
- [ ] No TypeScript compilation errors

---

## Style Constraints (for this repo)

- Keep component files focused (< 200 lines preferred)
- Use functional components, not class components
- Prefer hooks over class methods
- Use `ahooks` for utility hooks: `useMemoizedFn`, `useCreation`
- Use Jotai for global state: `useAtomValue`, `useSetAtom`
- Import order: External libraries → Internal types → Internal components

---

## Common Mistakes to Avoid

### ❌ Using inline sx props

```typescript
// Wrong
<Component sx={{ p: 2, bgcolor: 'red' }} />

// Correct
const StyledComponent = styled(Component, {...})(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.error.main,
}));
```

### ❌ Hardcoding values

```typescript
// Wrong
padding: '8px',
borderRadius: '8px',

// Correct
padding: theme.spacing(1),
borderRadius: theme.spacing(1),
```

### ❌ Not using forwardRef when needed

```typescript
// Wrong - ref won't work
export function Component({ children }) {
  return <div>{children}</div>;
}

// Correct
export const Component = forwardRef<HTMLDivElement, ComponentProps>(
  ({ children }, ref) => {
    return <div ref={ref}>{children}</div>;
  },
);
```

### ❌ Forgetting to export types

```typescript
// Wrong - types not accessible
export * from './ComponentName';

// Correct
export * from './ComponentName';
export * from './type';
```

---

## Reference Examples

Study these components for patterns:

- **Simple wrapper:** `src/components/Popover/Popover.tsx`
- **Multiple styled components:** `src/components/StatusTag/StatusTag.tsx`
- **Sub-components:** `src/components/Tabs/Tabs.tsx`, `TabItem.tsx`, `TabsContainer.tsx`
- **State management:** `src/components/Alert/AlertContainer.tsx`
- **Custom styling:** `src/components/Tooltip/Tooltip.tsx`

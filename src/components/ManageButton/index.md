---
title: ManageButton
---

# ManageButton

一个带提示的可复用图标按钮，专为表单控件（如复选框、开关）旁边紧凑的“管理”操作而设计。用小巧的图标按钮取代文字型“管理”链接，**仅在桌面端 hover 时**显示提示。默认使用 `Settings5Line` 图标。

> **说明：** 提示仅在支持 hover 的设备（PC/桌面端）上显示。在触屏设备（移动端）上只渲染图标按钮，不显示提示。

## 示例

### 基础用法

无需传入 `tooltip`——默认值为 `"Manage"`。在桌面端 hover 时会显示 “Manage” 提示。

```tsx
import { ManageButton } from '@bosinc/shared';
import { Stack } from '@mui/material';

export default () => {
  return (
    <Stack sx={{ gap: 2, flexDirection: 'row', alignItems: 'center' }}>
      <span>Custom Form</span>
      <ManageButton onClick={() => alert('open drawer')} />
    </Stack>
  );
};
```

### 自定义提示文案

```tsx
import { ManageButton } from '@bosinc/shared';
import { Stack, Typography } from '@mui/material';

export default () => {
  return (
    <Stack sx={{ gap: 2, flexDirection: 'row', alignItems: 'center' }}>
      <Typography>Payment Restriction</Typography>
      <ManageButton
        tooltip="Manage payment restriction"
        onClick={() => alert('open drawer')}
      />
    </Stack>
  );
};
```

### 自定义 Tooltip 属性

传入 `tooltipProps` 可自定义 Tooltip 的行为（位置、箭头、自定义内容等）。

```tsx
import { ManageButton } from '@bosinc/shared';
import { Stack, Typography } from '@mui/material';

export default () => {
  return (
    <Stack sx={{ gap: 2, flexDirection: 'row', alignItems: 'center' }}>
      <Typography>Shipping Options</Typography>
      <ManageButton
        onClick={() => alert('open drawer')}
        tooltip="Tooltip"
        tooltipProps={{
          placement: 'bottom',
          description: 'Configure shipping methods and fees',
          title: 'Shipping',
          arrow: false,
        }}
      />
    </Stack>
  );
};
```

### 禁用提示

传入 `tooltip={false}` 可在所有设备上完全禁用提示。

```tsx
import { ManageButton } from '@bosinc/shared';
import { Stack, Typography } from '@mui/material';

export default () => {
  return (
    <Stack sx={{ gap: 2, flexDirection: 'row', alignItems: 'center' }}>
      <Typography>Shipping Options</Typography>
      <ManageButton tooltip={false} onClick={() => alert('open drawer')} />
    </Stack>
  );
};
```

### 自定义图标

通过 `Icon` prop 传入任意图标组件。`iconProps` 可用于调整图标大小或颜色。

```tsx
import { ManageButton } from '@bosinc/shared';
import { Edit2Line } from '@mingcute/react';
import { Stack, Typography } from '@mui/material';

export default () => {
  return (
    <Stack sx={{ gap: 2, flexDirection: 'row', alignItems: 'center' }}>
      <Typography>Product Variants</Typography>
      <ManageButton
        Icon={Edit2Line}
        tooltip="Edit variants"
        iconProps={{ sx: { fontSize: '1.125rem' } }}
        onClick={() => alert('open drawer')}
      />
    </Stack>
  );
};
```

### 禁用状态

```tsx
import { ManageButton } from '@bosinc/shared';
import { Stack, Typography } from '@mui/material';

export default () => {
  return (
    <Stack sx={{ gap: 2, flexDirection: 'row', alignItems: 'center' }}>
      <Typography>Tax Settings</Typography>
      <ManageButton disabled onClick={() => alert('should not fire')} />
    </Stack>
  );
};
```

### 在表单复选框中使用

一个典型的实际用法：管理按钮位于复选框旁边，用于打开管理抽屉。

```tsx
import { ManageButton } from '@bosinc/shared';
import { Checkbox, FormControlLabel, Stack, Typography } from '@mui/material';
import { useState, useCallback } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleClick = useCallback(
    () => setDrawerOpen(!drawerOpen),
    [drawerOpen],
  );

  return (
    <Stack sx={{ gap: 1 }}>
      <Stack
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={(_, v) => setChecked(v)} />
          }
          label="Require customer details"
        />
        <ManageButton onClick={handleClick} />
      </Stack>
      {drawerOpen && (
        <Typography sx={{ p: 2, border: '1px dashed', borderRadius: 1 }}>
          Drawer content would appear here.
        </Typography>
      )}
    </Stack>
  );
};
```

### 表单中的多个管理按钮

```tsx
import { ManageButton } from '@bosinc/shared';
import { Checkbox, FormControlLabel, Stack, Typography } from '@mui/material';

const FORM_ITEMS = [
  { id: 'form', label: 'Require customer details' },
  { id: 'abTest', label: 'Enable A/B test' },
  { id: 'redirect', label: 'Redirect non-US visitors' },
];

export default () => {
  return (
    <Stack sx={{ gap: 2 }}>
      <Typography variant="h3">Post Settings</Typography>
      {FORM_ITEMS.map((item) => (
        <Stack
          key={item.id}
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <FormControlLabel control={<Checkbox />} label={item.label} />
          <ManageButton
            tooltip={`Manage ${item.label.toLowerCase()}`}
            onClick={() => alert(`open ${item.id} drawer`)}
          />
        </Stack>
      ))}
    </Stack>
  );
};
```

## API

### ManageButtonProps (extends MUI IconButtonProps)

| 属性         | 说明                                                                            | 类型                             | 是否必填 | 默认值          |
| ------------ | ------------------------------------------------------------------------------- | -------------------------------- | -------- | --------------- |
| Icon         | 要渲染的图标                                                                    | `ElementType<SvgIconProps>`      | `-`      | `Settings5Line` |
| tooltip      | 仅在桌面端 hover 时显示的提示文本。默认为 `"Manage"`。传入 `false` 可禁用       | `ReactNode \| false`             | `-`      | `"Manage"`      |
| iconProps    | 转发给图标元素的额外 props                                                      | `SvgIconProps`                   | `-`      | `-`             |
| tooltipProps | 转发给内部 `Tooltip` 的 props。当 `tooltip` 为 `false` 或在触屏设备上时会被忽略 | `Omit<TooltipProps, 'children'>` | `-`      | `-`             |

---
title: useIsDesktop
---

# useIsDesktop

返回当前视口是否为桌面端。默认情况下，视口宽度大于 `744px` 为桌面端，小于或等于 `744px` 为移动端。传入 MUI 的 breakpoint 可改用该断点判断。

## 示例

```tsx
import { useIsDesktop } from '@bosinc/shared';

export default function Demo() {
  const isDesktop = useIsDesktop();

  return <div>{isDesktop ? 'Desktop' : 'Mobile'}</div>;
}
```

```tsx
import { useIsDesktop } from '@bosinc/shared';

export default function DemoCustomBreakpoint() {
  const isDesktop = useIsDesktop('lg');

  return <div>{isDesktop ? 'Large Desktop' : 'Below Large Desktop'}</div>;
}
```

## API

### 签名

`useIsDesktop(breakpoint?: Breakpoint): boolean`

### 参数

| 参数       | 说明                      | 类型         | 是否必填 | 默认值 |
| ---------- | ------------------------- | ------------ | -------- | ------ |
| breakpoint | 用于桌面端判断的 MUI 断点 | `Breakpoint` | `-`      | `-`    |

### 返回值

- `boolean` - 不传 `breakpoint` 时：视口宽度 `> 744px` 为 `true`，否则为 `false`。传入 `breakpoint` 时：视口 `>= breakpoint` 为 `true`，否则为 `false`。

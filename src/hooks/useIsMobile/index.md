---
title: useIsMobile
---

# useIsMobile

返回当前视口是否为移动端：视口宽度 `<= 744px`（`MOBILE_MAX_WIDTH`）时为 `true`，否则为 `false`。始终与不传参数的 `useIsDesktop()` 结果相反。

## 示例

```tsx
import { useIsMobile } from '@bosinc/shared';

export default function Demo() {
  const isMobile = useIsMobile();

  return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>;
}
```

---
title: device
---

# device

浏览器与设备检测工具函数。所有函数都是 SSR 安全的，`window` / `navigator` 不可用时返回 `false`。

## isBrowser

检测代码是否运行在浏览器环境中。

```ts
import { isBrowser } from '@bosinc/shared';

isBrowser(); // true in browser, false in SSR/Node
```

## isIOS

检测当前设备是否运行 iOS（iPhone、iPod 或 iPad）。

```ts
import { isIOS } from '@bosinc/shared';

isIOS(); // true on iPhone, iPod, or iPad
```

## isIPad

检测当前设备是否为 iPad，包括 user agent 显示为 Macintosh 的 iPadOS 13+ 设备。

```ts
import { isIPad } from '@bosinc/shared';

isIPad(); // true on iPad
```

## isAndroid

检测当前设备是否运行 Android。

```ts
import { isAndroid } from '@bosinc/shared';

isAndroid(); // true on Android phones and tablets
```

## isSafari

检测当前浏览器是否为 Safari（不包括 Chrome、Firefox、Edge 及其他 Chromium 内核浏览器）。

```ts
import { isSafari } from '@bosinc/shared';

isSafari(); // true in desktop/mobile Safari
```

## isInIframe

检测当前页面是否运行在 iframe 中（包括跨域 iframe）。

```ts
import { isInIframe } from '@bosinc/shared';

isInIframe(); // true when embedded in an iframe
```

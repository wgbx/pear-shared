---
title: device
---

# device

Browser and device detection utilities. All functions are SSR-safe and return `false` when `window` / `navigator` are unavailable.

## isBrowser

Check whether code is running in a browser environment.

```ts
import { isBrowser } from '@bosinc/shared';

isBrowser(); // true in browser, false in SSR/Node
```

## isIOS

Check whether the current device is running iOS (iPhone, iPod, or iPad).

```ts
import { isIOS } from '@bosinc/shared';

isIOS(); // true on iPhone, iPod, or iPad
```

## isIPad

Check whether the current device is an iPad. Includes iPadOS 13+ devices that report as Macintosh in the user agent.

```ts
import { isIPad } from '@bosinc/shared';

isIPad(); // true on iPad
```

## isAndroid

Check whether the current device is running Android.

```ts
import { isAndroid } from '@bosinc/shared';

isAndroid(); // true on Android phones and tablets
```

## isSafari

Check whether the current browser is Safari (excluding Chrome, Firefox, Edge, and other Chromium-based browsers).

```ts
import { isSafari } from '@bosinc/shared';

isSafari(); // true in desktop/mobile Safari
```

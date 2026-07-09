---
title: function
---

# function

Function and promise utilities: type guards and helpers for working with settled promise results.

## isUndefined

Check whether a value is `undefined`.

```ts
import { isUndefined } from '@bosinc/shared';

isUndefined(undefined); // true
isUndefined(null); // false
```

## isNull

Check whether a value is `null`.

```ts
import { isNull } from '@bosinc/shared';

isNull(null); // true
isNull(undefined); // false
```

## isNil

Check whether a value is `null` or `undefined`.

```ts
import { isNil } from '@bosinc/shared';

isNil(null); // true
isNil(undefined); // true
isNil(0); // false
isNil(''); // false
```

## isEmpty

Check whether a value is empty (`null`, `undefined`, `''`, `[]`, or `{}`).

> **Note:** `null` and `undefined` are treated as empty. This differs from Ramda's `isEmpty`, which returns `false` for both. Use `isNil` when you only need to check for missing values without treating `''`, `[]`, or `{}` as empty.

```ts
import { isEmpty } from '@bosinc/shared';

isEmpty(null); // true
isEmpty(undefined); // true
isEmpty(''); // true
isEmpty([]); // true
isEmpty({}); // true
isEmpty(0); // false
```

## isString

Check whether a value is a string.

```ts
import { isString } from '@bosinc/shared';

isString('foo'); // true
isString(42); // false
```

## isFunction

Check whether a value is a function. Useful as a type guard before invoking an optional callback.

```ts
import { isFunction } from '@bosinc/shared';

isFunction(() => {}); // true
isFunction('foo'); // false

function safeCall(cb?: () => void) {
  if (isFunction(cb)) cb();
}
```

## isPromiseLike

Check whether a value is thenable (promise-like). Also matches native `Promise`.

```ts
import { isPromiseLike } from '@bosinc/shared';

isPromiseLike(Promise.resolve(1)); // true
isPromiseLike({ then: (cb) => cb(1) }); // true
isPromiseLike(42); // false
```

Common use case — handle both sync and async callbacks uniformly:

```ts
import { isPromiseLike } from '@bosinc/shared';

function handleClick(onClick?: () => unknown) {
  if (!onClick) return;
  const result = onClick();
  if (isPromiseLike(result)) {
    result.catch((err) => console.error(err));
  }
}
```

## getSettledResultValue

Extract the fulfilled value from a `PromiseSettledResult`. Returns `undefined` when rejected.

```ts
import { getSettledResultValue } from '@bosinc/shared';

const [user, posts] = await Promise.allSettled([fetchUser(id), fetchPosts(id)]);

const userData = getSettledResultValue(user); // User | undefined
const postsData = getSettledResultValue(posts); // Post[] | undefined
```

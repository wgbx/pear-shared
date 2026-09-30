---
title: function
---

# function

函数与 Promise 工具函数：类型守卫，以及处理已敲定 Promise 结果的辅助函数。

## isUndefined

检测某个值是否为 `undefined`。

```ts
import { isUndefined } from '@bosinc/shared';

isUndefined(undefined); // true
isUndefined(null); // false
```

## isNull

检测某个值是否为 `null`。

```ts
import { isNull } from '@bosinc/shared';

isNull(null); // true
isNull(undefined); // false
```

## isObject

检测某个值是否为普通对象（`{}`）。数组、`null` 及其他类对象值都返回 `false`。

```ts
import { isObject } from '@bosinc/shared';

isObject({}); // true
isObject({ a: 1 }); // true
isObject([]); // false
isObject(null); // false
isObject(new Date()); // false
```

## isNil

检测某个值是否为 `null` 或 `undefined`。

```ts
import { isNil } from '@bosinc/shared';

isNil(null); // true
isNil(undefined); // true
isNil(0); // false
isNil(''); // false
```

## isEmpty

检测某个值是否为空（`null`、`undefined`、`''`、`[]` 或 `{}`）。

> **注意：** `null` 和 `undefined` 都被视为空值，这与 Ramda 的 `isEmpty` 不同（后者对二者都返回 `false`）。如果只需要判断值是否缺失，而不想把 `''`、`[]`、`{}` 也算作空，请使用 `isNil`。

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

检测某个值是否为字符串。

```ts
import { isString } from '@bosinc/shared';

isString('foo'); // true
isString(42); // false
```

## isEmail

检测某个值是否形似一个实用的邮箱地址（`local@domain`）。采用常见的 local-part 格式（HTML living standard 风格字符，最长 64 个字符），并使用与 `isUrl` 相同的 **合理域名** 规则。

并非完整的 RFC 5322 解析器——如果需要确保可送达，请通过验证邮件确认。

```ts
import { isEmail } from '@bosinc/shared';

isEmail('user@example.com'); // true
isEmail('user+tag@example.com'); // true
isEmail('not-an-email'); // false
isEmail('user@localhost'); // false
isEmail('user@127.0.0.1'); // false
```

## isUrl

检测某个值是否为带有 **合理域名**（至少 `name.tld`）的 `http(s)` 或 `mailto` URL。像 `instagram.com/qiao` 这样的裸域名也会被接受并视为 `https`。

会拒绝没有真实 TLD 的主机（例如 `https://213214`）、单段主机名（`localhost`）以及 IP 地址。

```ts
import { isUrl } from '@bosinc/shared';

isUrl('https://example.com'); // true
isUrl('instagram.com/qiao'); // true
isUrl('mailto:a@b.com'); // true
isUrl('https://213214'); // false
isUrl('http://127.0.0.1'); // false
isUrl('not a url'); // false
```

## isFunction

检测某个值是否为函数。在调用可选回调前作为类型守卫使用很方便。

```ts
import { isFunction } from '@bosinc/shared';

isFunction(() => {}); // true
isFunction('foo'); // false

function safeCall(cb?: () => void) {
  if (isFunction(cb)) cb();
}
```

## isPromiseLike

检测某个值是否为 thenable（类 Promise）。原生 `Promise` 也会匹配。

```ts
import { isPromiseLike } from '@bosinc/shared';

isPromiseLike(Promise.resolve(1)); // true
isPromiseLike({ then: (cb) => cb(1) }); // true
isPromiseLike(42); // false
```

常见用例——统一处理同步和异步回调：

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

从 `PromiseSettledResult` 中提取已完成（fulfilled）的值。被拒绝（rejected）时返回 `undefined`。

```ts
import { getSettledResultValue } from '@bosinc/shared';

const [user, posts] = await Promise.allSettled([fetchUser(id), fetchPosts(id)]);

const userData = getSettledResultValue(user); // User | undefined
const postsData = getSettledResultValue(posts); // Post[] | undefined
```

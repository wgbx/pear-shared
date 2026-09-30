---
title: date
---

# date

基于 [date-fns](https://date-fns.org/) 和 [date-fns-tz](https://github.com/marnusw/date-fns-tz)（用于时区支持）的日期格式化工具。无效输入时，格式化函数返回 `''`，解析函数返回 `null`。

`DATE_FORMAT`、`TIMEZONE_MAP`、`DEFAULT_TIMEZONE` 请参见 [Constants](/constants)。

## formatDate

用 date-fns 格式模式格式化日期。无效输入返回 `''`。

| 参数           | 说明              | 类型                       | 必填 | 默认值                 |
| -------------- | ----------------- | -------------------------- | ---- | ---------------------- |
| value          | 待格式化的日期    | `Date \| number \| string` | `✅` | `-`                    |
| options        | 格式化选项        | `{ format?: string }`      | `-`  | `DATE_FORMAT.DATETIME` |
| options.format | date-fns 格式模式 | `string`                   | `-`  | `DATE_FORMAT.DATETIME` |

**返回值：** `string`

```ts
import { DATE_FORMAT, formatDate } from '@bosinc/shared';

formatDate('2025-03-09T14:30:00'); // default DATETIME
formatDate('2025-03-09', { format: DATE_FORMAT.MONTH_DAY_YEAR });
```

## toDate

将输入规范化为有效的 `Date`，无效时返回 `null`。

| 参数  | 说明     | 类型                       | 必填 |
| ----- | -------- | -------------------------- | ---- |
| value | 日期输入 | `Date \| number \| string` | `✅` |

**返回值：** `Date | null`

```ts
import { toDate } from '@bosinc/shared';

toDate('2025-03-09'); // Date
toDate('invalid'); // null
```

## formatDateInTimeZone

在指定的 IANA 时区中格式化日期。无效输入返回 `''`。需要 `date-fns-tz`。

| 参数             | 说明              | 类型                       | 必填 | 默认值                             |
| ---------------- | ----------------- | -------------------------- | ---- | ---------------------------------- |
| value            | 待格式化的日期    | `Date \| number \| string` | `✅` | `-`                                |
| options          | 格式化选项        | `object`                   | `-`  | `-`                                |
| options.format   | date-fns 格式模式 | `string`                   | `-`  | `DATE_FORMAT.DATETIME`             |
| options.timeZone | IANA 时区         | `string`                   | `-`  | `TIMEZONE_MAP.AMERICA_LOS_ANGELES` |

**返回值：** `string`

```ts
import { DATE_FORMAT, formatDateInTimeZone } from '@bosinc/shared';

formatDateInTimeZone('2025-03-09T14:30:00Z'); // default America/Los_Angeles + DATETIME
formatDateInTimeZone('2026-06-10T12:00:00Z', {
  format: DATE_FORMAT.SLASH_DATE_WITH_TZ,
}); // '06/10/2026 (PDT)'
```

## formatDateTimeDisplay

将 `Date` 按指定时区格式化用于展示。输入无效或缺失时返回 `''`。

| 参数             | 说明                               | 类型     | 必填 | 默认值             |
| ---------------- | ---------------------------------- | -------- | ---- | ------------------ |
| value            | 起始日期                           | `Date`   | `-`  | `-`                |
| options          | 展示选项                           | `object` | `-`  | `-`                |
| options.end      | 结束日期；起止相同时会合并为一个值 | `Date`   | `-`  | `-`                |
| options.timeZone | 用于展示的 IANA 时区               | `string` | `-`  | `TIMEZONE_MAP.UTC` |

**返回值：** `string`

```ts
import { formatDateTimeDisplay, TIMEZONE_MAP } from '@bosinc/shared';

formatDateTimeDisplay(new Date('2026-09-22T18:00:00Z'), {
  timeZone: TIMEZONE_MAP.AMERICA_LOS_ANGELES,
});
// 'Sep 22, 2026 11:00AM (PDT)'

formatDateTimeDisplay(new Date('2026-09-22T18:00:00Z'), {
  end: new Date('2026-09-22T20:00:00Z'),
  timeZone: TIMEZONE_MAP.AMERICA_LOS_ANGELES,
});
// 'Sep 22, 2026 11:00AM - Sep 22, 2026 1:00PM (PDT)'
```

## utcToZonedDate

将 UTC 日期转换为目标时区下的 `Date`。需要 `date-fns-tz`。

| 参数             | 说明         | 类型                       | 必填 | 默认值                             |
| ---------------- | ------------ | -------------------------- | ---- | ---------------------------------- |
| value            | UTC 日期输入 | `Date \| number \| string` | `✅` | `-`                                |
| options          | 选项         | `object`                   | `-`  | `-`                                |
| options.timeZone | IANA 时区    | `string`                   | `-`  | `TIMEZONE_MAP.AMERICA_LOS_ANGELES` |

**返回值：** `Date | null`

```ts
import { utcToZonedDate } from '@bosinc/shared';

utcToZonedDate('2025-03-09T14:30:00Z'); // default America/Los_Angeles
```

## zonedToUtc

将按某时区解读的日期转换为 UTC。需要 `date-fns-tz`。

| 参数             | 说明      | 类型                       | 必填 | 默认值                             |
| ---------------- | --------- | -------------------------- | ---- | ---------------------------------- |
| value            | 本地日期  | `Date \| number \| string` | `✅` | `-`                                |
| options          | 选项      | `object`                   | `-`  | `-`                                |
| options.timeZone | IANA 时区 | `string`                   | `-`  | `TIMEZONE_MAP.AMERICA_LOS_ANGELES` |

**返回值：** `Date | null`

```ts
import { TIMEZONE_MAP, zonedToUtc } from '@bosinc/shared';

zonedToUtc('2025-03-09 14:30');
zonedToUtc('2025-03-09 14:30', { timeZone: TIMEZONE_MAP.ASIA_SHANGHAI });
```

## getLocalTimezone

通过 `Intl` 获取本地 IANA 时区 ID（例如 `Asia/Shanghai`）。

**返回值：** `string`

```ts
import { getLocalTimezone } from '@bosinc/shared';

getLocalTimezone(); // 'Asia/Shanghai'
```

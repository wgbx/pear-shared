---
title: date
---

# date

Date formatting utilities powered by [date-fns](https://date-fns.org/) and [date-fns-tz](https://github.com/marnusw/date-fns-tz) for timezone support. Invalid input returns `''` for formatters and `null` for parsers.

See [Constants](/constants) for `DATE_FORMAT`, `TIMEZONE_MAP`, and `DEFAULT_TIMEZONE`.

## formatDate

Format a date with a date-fns pattern. Returns `''` for invalid input.

| Param          | Description      | Type                       | Required | Default                |
| -------------- | ---------------- | -------------------------- | -------- | ---------------------- |
| value          | Date to format   | `Date \| number \| string` | `✅`     | `-`                    |
| options        | Format options   | `{ format?: string }`      | `-`      | `DATE_FORMAT.DATETIME` |
| options.format | date-fns pattern | `string`                   | `-`      | `DATE_FORMAT.DATETIME` |

**Returns:** `string`

```ts
import { DATE_FORMAT, formatDate } from '@bosinc/shared';

formatDate('2025-03-09T14:30:00'); // default DATETIME
formatDate('2025-03-09', { format: DATE_FORMAT.MONTH_DAY_YEAR });
```

## toDate

Normalize input into a valid `Date`, or `null` when invalid.

| Param | Description | Type                       | Required |
| ----- | ----------- | -------------------------- | -------- |
| value | Date input  | `Date \| number \| string` | `✅`     |

**Returns:** `Date | null`

```ts
import { toDate } from '@bosinc/shared';

toDate('2025-03-09'); // Date
toDate('invalid'); // null
```

## formatDateInTimeZone

Format a date in a specific IANA timezone. Returns `''` for invalid input. Requires `date-fns-tz`.

| Param            | Description      | Type                       | Required | Default                        |
| ---------------- | ---------------- | -------------------------- | -------- | ------------------------------ |
| value            | Date to format   | `Date \| number \| string` | `✅`     | `-`                            |
| options          | Format options   | `object`                   | `-`      | `-`                            |
| options.format   | date-fns pattern | `string`                   | `-`      | `DATE_FORMAT.DATETIME`         |
| options.timeZone | IANA timezone    | `string`                   | `-`      | `TIMEZONE_MAP.AMERICA_LOS_ANGELES` |

**Returns:** `string`

```ts
import { DATE_FORMAT, formatDateInTimeZone } from '@bosinc/shared';

formatDateInTimeZone('2025-03-09T14:30:00Z'); // default America/Los_Angeles + DATETIME
formatDateInTimeZone('2026-06-10T12:00:00Z', {
  format: DATE_FORMAT.SLASH_DATE_WITH_TZ,
}); // '06/10/2026 (PDT)'
```

## formatDateTimeDisplay

Format a `Date` for display in a given timezone. Invalid or missing input returns `''`.

| Param            | Description                                          | Type     | Required | Default        |
| ---------------- | ---------------------------------------------------- | -------- | -------- | -------------- |
| value            | Start date                                           | `Date`   | `-`      | `-`            |
| options          | Display options                                      | `object` | `-`      | `-`            |
| options.end      | End date; identical start/end collapses to one value | `Date`   | `-`      | `-`            |
| options.timeZone | IANA timezone used for display                       | `string` | `-`      | `TIMEZONE_MAP.UTC` |

**Returns:** `string`

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

Convert a UTC date to a `Date` in the target timezone. Requires `date-fns-tz`.

| Param            | Description    | Type                       | Required | Default                        |
| ---------------- | -------------- | -------------------------- | -------- | ------------------------------ |
| value            | UTC date input | `Date \| number \| string` | `✅`     | `-`                            |
| options          | Options        | `object`                   | `-`      | `-`                            |
| options.timeZone | IANA timezone  | `string`                   | `-`      | `TIMEZONE_MAP.AMERICA_LOS_ANGELES` |

**Returns:** `Date | null`

```ts
import { utcToZonedDate } from '@bosinc/shared';

utcToZonedDate('2025-03-09T14:30:00Z'); // default America/Los_Angeles
```

## zonedToUtc

Convert a date interpreted in a timezone to UTC. Requires `date-fns-tz`.

| Param            | Description   | Type                       | Required | Default                        |
| ---------------- | ------------- | -------------------------- | -------- | ------------------------------ |
| value            | Local date    | `Date \| number \| string` | `✅`     | `-`                            |
| options          | Options       | `object`                   | `-`      | `-`                            |
| options.timeZone | IANA timezone | `string`                   | `-`      | `TIMEZONE_MAP.AMERICA_LOS_ANGELES` |

**Returns:** `Date | null`

```ts
import { TIMEZONE_MAP, zonedToUtc } from '@bosinc/shared';

zonedToUtc('2025-03-09 14:30');
zonedToUtc('2025-03-09 14:30', { timeZone: TIMEZONE_MAP.ASIA_SHANGHAI });
```

## getLocalTimezone

Get the local IANA timezone ID via `Intl` (e.g. `Asia/Shanghai`).

**Returns:** `string`

```ts
import { getLocalTimezone } from '@bosinc/shared';

getLocalTimezone(); // 'Asia/Shanghai'
```

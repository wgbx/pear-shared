---
title: date
---

# date

Date formatting utilities powered by [date-fns](https://date-fns.org/) and [date-fns-tz](https://github.com/marnusw/date-fns-tz) for timezone support. Invalid input returns `''` for formatters and `null` for parsers.

## DATE_FORMAT

Common date-fns format pattern constants.

| Property                  | Pattern               | Example               |
| ------------------------- | --------------------- | --------------------- |
| `MONTH_DAY_YEAR`          | `MMM dd, yyyy`        | `Mar 09, 2025`        |
| `MONTH_DAY_YEAR_NO_COMMA` | `MMM dd yyyy`         | `Mar 09 2025`         |
| `SLASH_NUMERIC`           | `MM/dd/yyyy`          | `03/09/2025`          |
| `ISO_DATE`                | `yyyy-MM-dd`          | `2025-03-09`          |
| `DATETIME`                | `yyyy-MM-dd HH:mm`    | `2025-03-09 14:30`    |
| `DATETIME_SECONDS`        | `yyyy-MM-dd HH:mm:ss` | `2025-03-09 14:30:45` |
| `TIME`                    | `HH:mm`               | `14:30`               |
| `TIME_SECONDS`            | `HH:mm:ss`            | `14:30:45`            |

```ts
import { DATE_FORMAT, formatDate } from '@bosinc/shared';

formatDate('2025-03-09T14:30:00', { format: DATE_FORMAT.DATETIME });
```

## TIMEZONE

Common IANA timezone identifiers.

| Property              | IANA ID               | Region / notes             |
| --------------------- | --------------------- | -------------------------- |
| `UTC`                 | `UTC`                 | Coordinated Universal Time |
| `AMERICA_LOS_ANGELES` | `America/Los_Angeles` | US Pacific (PST/PDT)       |
| `ASIA_SHANGHAI`       | `Asia/Shanghai`       | China (CST)                |

```ts
import { TIMEZONE } from '@bosinc/shared';

TIMEZONE.AMERICA_LOS_ANGELES; // 'America/Los_Angeles'
```

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
| options.timeZone | IANA timezone    | `string`                   | `-`      | `TIMEZONE.AMERICA_LOS_ANGELES` |

**Returns:** `string`

```ts
import { DATE_FORMAT, formatDateInTimeZone, TIMEZONE } from '@bosinc/shared';

formatDateInTimeZone('2025-03-09T14:30:00Z'); // default PST + DATETIME
formatDateInTimeZone('2025-03-09T14:30:00Z', {
  timeZone: TIMEZONE.AMERICA_LOS_ANGELES,
  format: DATE_FORMAT.DATETIME,
});
```

## utcToZonedDate

Convert a UTC date to a `Date` in the target timezone. Requires `date-fns-tz`.

| Param            | Description    | Type                       | Required | Default                        |
| ---------------- | -------------- | -------------------------- | -------- | ------------------------------ |
| value            | UTC date input | `Date \| number \| string` | `✅`     | `-`                            |
| options          | Options        | `object`                   | `-`      | `-`                            |
| options.timeZone | IANA timezone  | `string`                   | `-`      | `TIMEZONE.AMERICA_LOS_ANGELES` |

**Returns:** `Date | null`

```ts
import { TIMEZONE, utcToZonedDate } from '@bosinc/shared';

utcToZonedDate('2025-03-09T14:30:00Z');
utcToZonedDate('2025-03-09T14:30:00Z', {
  timeZone: TIMEZONE.AMERICA_LOS_ANGELES,
});
```

## zonedToUtc

Convert a date interpreted in a timezone to UTC. Requires `date-fns-tz`.

| Param            | Description   | Type                       | Required | Default                        |
| ---------------- | ------------- | -------------------------- | -------- | ------------------------------ |
| value            | Local date    | `Date \| number \| string` | `✅`     | `-`                            |
| options          | Options       | `object`                   | `-`      | `-`                            |
| options.timeZone | IANA timezone | `string`                   | `-`      | `TIMEZONE.AMERICA_LOS_ANGELES` |

**Returns:** `Date | null`

```ts
import { TIMEZONE, zonedToUtc } from '@bosinc/shared';

zonedToUtc('2025-03-09 14:30');
zonedToUtc('2025-03-09 14:30', { timeZone: TIMEZONE.ASIA_SHANGHAI });
```

## getLocalTimezone

Get the local IANA timezone ID via `Intl` (e.g. `Asia/Shanghai`).

**Returns:** `string`

```ts
import { getLocalTimezone } from '@bosinc/shared';

getLocalTimezone(); // 'Asia/Shanghai'
```

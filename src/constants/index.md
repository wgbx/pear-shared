---
title: Constants
---

## Date Format

`DATE_FORMAT`

Common [date-fns](https://date-fns.org/) format pattern constants. Used by `@utils/date` formatters.

| Property                  | Pattern               | Example               |
| ------------------------- | --------------------- | --------------------- |
| `MONTH_DAY_YEAR`          | `MMM dd, yyyy`        | `Mar 09, 2025`        |
| `MONTH_DAY_YEAR_TIME`     | `MMM dd, yyyy h:mma`  | `Sep 22, 2026 6:00PM` |
| `MONTH_DAY_YEAR_NO_COMMA` | `MMM dd yyyy`         | `Mar 09 2025`         |
| `SLASH_NUMERIC`           | `MM/dd/yyyy`          | `03/09/2025`          |
| `SLASH_DATE_WITH_TZ`      | `MM/dd/yyyy (zzz)`    | `06/10/2026 (PDT)`    |
| `ISO_DATE`                | `yyyy-MM-dd`          | `2025-03-09`          |
| `DATETIME`                | `yyyy-MM-dd HH:mm`    | `2025-03-09 14:30`    |
| `DATETIME_SECONDS`        | `yyyy-MM-dd HH:mm:ss` | `2025-03-09 14:30:45` |
| `TIME`                    | `HH:mm`               | `14:30`               |
| `TIME_SECONDS`            | `HH:mm:ss`            | `14:30:45`            |

```ts
import { DATE_FORMAT, formatDate } from '@bosinc/shared';

formatDate('2025-03-09T14:30:00', { format: DATE_FORMAT.DATETIME });
```

## Default Timezone

`DEFAULT_TIMEZONE`

Default business timezone: `'America/Los_Angeles'` (US Pacific). Equivalent to `TIMEZONE_MAP.AMERICA_LOS_ANGELES`.

Used as the default `timeZone` for `formatDateInTimeZone`, `utcToZonedDate`, and `zonedToUtc`.

```ts
import { DEFAULT_TIMEZONE, formatDateInTimeZone } from '@bosinc/shared';

formatDateInTimeZone(new Date(), { timeZone: DEFAULT_TIMEZONE });
// Uses America/Los_Angeles when timeZone is omitted
```

## Timezone Map

`TIMEZONE_MAP`

Common IANA timezone identifiers for `@utils/date` formatters and converters.

| Property              | IANA ID               | Region / notes             |
| --------------------- | --------------------- | -------------------------- |
| `UTC`                 | `UTC`                 | Coordinated Universal Time |
| `AMERICA_LOS_ANGELES` | `America/Los_Angeles` | US Pacific (PST/PDT)       |
| `AMERICA_NEW_YORK`    | `America/New_York`    | US Eastern (EST/EDT)       |
| `ASIA_SHANGHAI`       | `Asia/Shanghai`       | China (CST)                |

```ts
import { TIMEZONE_MAP, formatDateTimeDisplay } from '@bosinc/shared';

formatDateTimeDisplay(new Date(), { timeZone: TIMEZONE_MAP.AMERICA_NEW_YORK });
// e.g. 'Aug 25, 2026 5:00PM (EDT)'
```

## StatusTag Map

`STATUS_TAG_MAP`

| Key       | Value     |
| --------- | --------- |
| `DEFAULT` | `default` |
| `SUCCESS` | `success` |
| `WARNING` | `warning` |
| `ERROR`   | `error`   |
| `INFO`    | `info`    |

## UI Size

`UI_SIZE`

Pear Design shared component size scale. Reused across Button and future UI components.

| Key      | Value    | Figma | Height |
| -------- | -------- | ----- | ------ |
| `XLARGE` | `xlarge` | L-48  | 48px   |
| `LARGE`  | `large`  | L-42  | 42px   |
| `MEDIUM` | `medium` | M-32  | 32px   |
| `SMALL`  | `small`  | S-24  | 24px   |

```ts
import { UI_SIZE, Button, BUTTON_APPEARANCE } from '@bosinc/shared';

<Button appearance={BUTTON_APPEARANCE.GHOST} size={UI_SIZE.MEDIUM} label="Cancel" />;
```

## Button Map

`BUTTON_APPEARANCE`

Btn-CTA appearance only (button-specific).

| Key       | Value     |
| --------- | --------- |
| `PRIMARY` | `primary` |
| `GHOST`   | `ghost`   |
| `OUTLINE` | `outline` |

## Cloudinary Quality

`CLOUDINARY_CLOUD_NAME`

Default Cloudinary cloud name (`dr9io1zjv`). Override with `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`.

`CLOUDINARY_IMAGE_UPLOAD_PATH_PART` / `CLOUDINARY_VIDEO_UPLOAD_PATH_PART`

Path segments used when normalizing Cloudinary upload URLs.

`C_FIT_MAX_DIMENSION`

When `c_fit` width or height exceeds this value (default `150`), optimization skips `w_`/`h_` to avoid soft images with CSS `object-fit: cover`.

`C_FIT_RETINA_DPR`

Default device pixel ratio (`2`) applied to small `c_fit` thumbnails.

`C_DEFAULT_SCALE_WIDTH`

Default `c_scale` width (`1024`) when no dimensions are provided. Matches katana `ImageWithFallback` fallback optimization.

`CLOUDINARY_QUALITY_AUTO`

The value `auto`, corresponding to `q_auto` in the Cloudinary URL, which enables the intelligent quality and encoding algorithms.

`CLOUDINARY_QUALITY_MODE`

Fine-tuning options for automatic quality selection:

| Key  | Value       | Description                                                                                                                                           | Target audience example                                   |
| ---- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| AUTO | `auto`      | Optimal balance between file size and visual quality. Defaults to the same as `GOOD`, but may automatically switch to the more aggressive `ECO` mode. | General                                                   |
| BEST | `auto:best` | Less aggressive algorithm. Produces larger files but better visual quality.                                                                           | Photography sites showcasing high-quality images          |
| GOOD | `auto:good` | Relatively small file size while maintaining good visual quality.                                                                                     | General                                                   |
| ECO  | `auto:eco`  | More aggressive algorithm. Produces smaller files with slightly reduced visual quality.                                                               | High-traffic sites and social networks                    |
| LOW  | `auto:low`  | Most aggressive algorithm. Produces the smallest files with lower visual quality.                                                                     | Sites using thumbnails that link to higher-quality images |

---
title: Constants
---

## 日期格式

`DATE_FORMAT`

常用的 [date-fns](https://date-fns.org/) 格式模式常量。供 `@utils/date` 格式化函数使用。

| 属性                      | 格式                  | 示例                  |
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

## 默认时区

`DEFAULT_TIMEZONE`

默认业务时区：`'America/Los_Angeles'`（美国太平洋时区）。等同于 `TIMEZONE_MAP.AMERICA_LOS_ANGELES`。

作为 `formatDateInTimeZone`、`utcToZonedDate`、`zonedToUtc` 的默认 `timeZone`。

```ts
import { DEFAULT_TIMEZONE, formatDateInTimeZone } from '@bosinc/shared';

formatDateInTimeZone(new Date(), { timeZone: DEFAULT_TIMEZONE });
// Uses America/Los_Angeles when timeZone is omitted
```

## 时区映射

`TIMEZONE_MAP`

供 `@utils/date` 格式化和转换函数使用的常见 IANA 时区标识符。

| 属性                  | IANA ID               | 地区 / 备注               |
| --------------------- | --------------------- | ------------------------- |
| `UTC`                 | `UTC`                 | 协调世界时                |
| `AMERICA_LOS_ANGELES` | `America/Los_Angeles` | 美国太平洋时区（PST/PDT） |
| `AMERICA_NEW_YORK`    | `America/New_York`    | 美国东部时区（EST/EDT）   |
| `ASIA_SHANGHAI`       | `Asia/Shanghai`       | 中国（CST）               |

```ts
import { TIMEZONE_MAP, formatDateTimeDisplay } from '@bosinc/shared';

formatDateTimeDisplay(new Date(), { timeZone: TIMEZONE_MAP.AMERICA_NEW_YORK });
// e.g. 'Aug 25, 2026 5:00PM (EDT)'
```

## 状态标签映射

`STATUS_TAG_MAP`

| 键        | 值        |
| --------- | --------- |
| `DEFAULT` | `default` |
| `SUCCESS` | `success` |
| `WARNING` | `warning` |
| `ERROR`   | `error`   |
| `INFO`    | `info`    |

## UI 尺寸

`UI_SIZE`

Pear Design 共享组件尺寸规格，Button 及未来的 UI 组件均复用该规格。

| 键       | 值       | Figma | 高度 |
| -------- | -------- | ----- | ---- |
| `LARGE`  | `large`  | L-48  | 48px |
| `MEDIUM` | `medium` | L-42  | 42px |
| `SMALL`  | `small`  | M-32  | 32px |
| `XSMALL` | `xsmall` | S-24  | 24px |

```ts
import { UI_SIZE, MainButton, BUTTON_APPEARANCE } from '@bosinc/shared';

<MainButton
  appearance={BUTTON_APPEARANCE.GHOST}
  size={UI_SIZE.MEDIUM}
  label="Cancel"
/>;
```

## 视口

`MOBILE_MAX_WIDTH`

移动端/桌面端视口分界值：`744`（px）。视口宽度 `<= 744px` 为移动端，更宽则为桌面端。供 `useIsMobile` 和 `useIsDesktop` 使用。

```ts
import { MOBILE_MAX_WIDTH } from '@bosinc/shared';

const isMobile = window.innerWidth <= MOBILE_MAX_WIDTH;
```

## 按钮映射

`BUTTON_APPEARANCE`

仅用于 Btn-CTA 的外观（按钮专属）。

| 键        | 值        |
| --------- | --------- |
| `PRIMARY` | `primary` |
| `GHOST`   | `ghost`   |
| `OUTLINE` | `outline` |

## Cloudinary 质量

`CLOUDINARY_CLOUD_NAME`

默认 Cloudinary cloud 名称（`dr9io1zjv`）。可通过 `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` 覆盖。

`CLOUDINARY_IMAGE_UPLOAD_PATH_PART` / `CLOUDINARY_VIDEO_UPLOAD_PATH_PART`

规范化 Cloudinary 上传 URL 时使用的路径片段。

`C_FIT_MAX_DIMENSION`

当 `c_fit` 的宽或高超过该值（默认 `150`）时，优化会跳过 `w_`/`h_`，以避免配合 CSS `object-fit: cover` 时图片模糊。

`C_FIT_RETINA_DPR`

应用于小尺寸 `c_fit` 缩略图的默认设备像素比（`2`）。

`C_DEFAULT_SCALE_WIDTH`

未提供尺寸时的默认 `c_scale` 宽度（`1024`）。与 katana `ImageWithFallback` 的兜底优化保持一致。

`CLOUDINARY_QUALITY_AUTO`

值为 `auto`，对应 Cloudinary URL 中的 `q_auto`，用于启用智能质量与编码算法。

`CLOUDINARY_QUALITY_MODE`

自动质量选择的精细调节选项：

| 键   | 值          | 说明                                                                                              | 适用场景示例                 |
| ---- | ----------- | ------------------------------------------------------------------------------------------------- | ---------------------------- |
| AUTO | `auto`      | 文件大小与视觉质量之间的最佳平衡。默认效果与 `GOOD` 相同，但可能会自动切换到更激进的 `ECO` 模式。 | 通用                         |
| BEST | `auto:best` | 更保守的算法。生成的文件更大，但视觉质量更好。                                                    | 展示高质量图片的摄影类网站   |
| GOOD | `auto:good` | 在保持良好视觉质量的同时文件体积相对较小。                                                        | 通用                         |
| ECO  | `auto:eco`  | 更激进的算法。生成更小的文件，视觉质量略有下降。                                                  | 高流量网站和社交网络         |
| LOW  | `auto:low`  | 最激进的算法。生成最小的文件，但视觉质量较低。                                                    | 缩略图链接到高质量原图的网站 |

/**
 * Common date-fns format patterns.
 */
export const DATE_FORMAT = {
  /** `Mar 09, 2025` */
  MONTH_DAY_YEAR: 'MMM dd, yyyy',
  /** `Sep 22, 2026 6:00PM` */
  MONTH_DAY_YEAR_TIME: 'MMM dd, yyyy h:mma',
  /** `Mar 09 2025` */
  MONTH_DAY_YEAR_NO_COMMA: 'MMM dd yyyy',
  /** `03/09/2025` */
  SLASH_NUMERIC: 'MM/dd/yyyy',
  /** `06/10/2026 (PDT)` — use with `formatDateInTimeZone` */
  SLASH_DATE_WITH_TZ: 'MM/dd/yyyy (zzz)',
  /** `2025-03-09` */
  ISO_DATE: 'yyyy-MM-dd',
  /** `2025-03-09 14:30` */
  DATETIME: 'yyyy-MM-dd HH:mm',
  /** `2025-03-09 14:30:45` */
  DATETIME_SECONDS: 'yyyy-MM-dd HH:mm:ss',
  /** `14:30` */
  TIME: 'HH:mm',
  /** `14:30:45` */
  TIME_SECONDS: 'HH:mm:ss',
} as const;

export type DateFormat = typeof DATE_FORMAT[keyof typeof DATE_FORMAT];

/**
 * Common IANA timezone identifiers.
 */
export const TIMEZONE_MAP = {
  /** Coordinated Universal Time */
  UTC: 'UTC',
  /** US Pacific — Los Angeles (PST/PDT) */
  AMERICA_LOS_ANGELES: 'America/Los_Angeles',
  /** US Eastern — New York (EST/EDT) */
  AMERICA_NEW_YORK: 'America/New_York',
  /** China — Shanghai (CST) */
  ASIA_SHANGHAI: 'Asia/Shanghai',
} as const;

export type TimezoneMapId = typeof TIMEZONE_MAP[keyof typeof TIMEZONE_MAP];

/**
 * Default business timezone (`America/Los_Angeles`, US Pacific).
 * Same as `TIMEZONE_MAP.AMERICA_LOS_ANGELES`.
 */
export const DEFAULT_TIMEZONE: TimezoneMapId = TIMEZONE_MAP.AMERICA_LOS_ANGELES;

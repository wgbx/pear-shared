/**
 * Common date-fns format patterns.
 */
export const DATE_FORMAT = {
  /** `Mar 09, 2025` */
  MONTH_DAY_YEAR: 'MMM dd, yyyy',
  /** `Mar 09 2025` */
  MONTH_DAY_YEAR_NO_COMMA: 'MMM dd yyyy',
  /** `03/09/2025` */
  SLASH_NUMERIC: 'MM/dd/yyyy',
  /** `2026/06/10 (PDT)` — use with `formatDateInTimeZone` */
  SLASH_DATE_WITH_TZ: 'yyyy/MM/dd (zzz)',
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
export const TIMEZONE = {
  /** Coordinated Universal Time */
  UTC: 'UTC',
  /** US Pacific — Los Angeles (PST/PDT) */
  AMERICA_LOS_ANGELES: 'America/Los_Angeles',
  /** China — Shanghai (CST) */
  ASIA_SHANGHAI: 'Asia/Shanghai',
} as const;

export type TimezoneId = typeof TIMEZONE[keyof typeof TIMEZONE];

/** Default business timezone (US Pacific). */
export const DEFAULT_TIMEZONE = TIMEZONE.AMERICA_LOS_ANGELES;

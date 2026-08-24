import type { DateFormat, TimezoneId } from './constants';

export type DateInput = Date | number | string;

export interface FormatDateOptions {
  /** date-fns format pattern. Default: `DATE_FORMAT.DATETIME` */
  format?: DateFormat | string;
}

export interface FormatDateInTimeZoneOptions extends FormatDateOptions {
  /** IANA timezone ID. Default: `DEFAULT_TIMEZONE` */
  timeZone?: TimezoneId | string;
}

export interface FormatDateTimeDisplayOptions {
  /** End datetime. Identical start/end collapses to a single value. */
  end?: Date | null;
  /**
   * IANA timezone ID used for display conversion. Default: `TIMEZONE.UTC`.
   */
  timeZone?: TimezoneId | string;
  /** Hide the timezone suffix even when `timeZone` is set. */
  hideTimezone?: boolean;
  /** date-fns pattern for display. */
  format?: DateFormat | string;
}

export interface ZonedDateOptions {
  /** IANA timezone ID. Default: `DEFAULT_TIMEZONE` */
  timeZone?: TimezoneId | string;
}

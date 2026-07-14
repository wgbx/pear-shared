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

export interface ZonedDateOptions {
  /** IANA timezone ID. Default: `DEFAULT_TIMEZONE` */
  timeZone?: TimezoneId | string;
}

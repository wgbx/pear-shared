import type { DateFormat, TimezoneMapId } from './constants';

export type DateInput = Date | number | string;

export interface FormatDateOptions {
  /** date-fns format pattern. Default: `DATE_FORMAT.DATETIME` */
  format?: DateFormat | string;
}

export interface FormatDateInTimeZoneOptions extends FormatDateOptions {
  /** IANA timezone ID. Default: `DEFAULT_TIMEZONE` */
  timeZone?: TimezoneMapId | string;
}

export interface FormatDateTimeDisplayOptions {
  /** End datetime. Identical start/end collapses to a single value. */
  end?: Date | null;
  /** IANA timezone ID used for display. Default: `TIMEZONE_MAP.UTC`. */
  timeZone?: TimezoneMapId | string;
}

export interface ZonedDateOptions {
  /** IANA timezone ID. Default: `DEFAULT_TIMEZONE` */
  timeZone?: TimezoneMapId | string;
}

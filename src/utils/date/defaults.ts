import { DATE_FORMAT, DEFAULT_TIMEZONE, TIMEZONE } from './constants';
import type {
  FormatDateInTimeZoneOptions,
  FormatDateOptions,
  FormatDateTimeDisplayOptions,
  ZonedDateOptions,
} from './types';

export const DEFAULT_FORMAT_DATE_OPTIONS: Required<FormatDateOptions> = {
  format: DATE_FORMAT.DATETIME,
};

export const DEFAULT_FORMAT_DATE_IN_TIMEZONE_OPTIONS: Required<FormatDateInTimeZoneOptions> =
  {
    format: DATE_FORMAT.DATETIME,
    timeZone: DEFAULT_TIMEZONE,
  };

export const DEFAULT_ZONED_DATE_OPTIONS: Required<ZonedDateOptions> = {
  timeZone: DEFAULT_TIMEZONE,
};

export const DEFAULT_FORMAT_DATE_TIME_DISPLAY_OPTIONS: Required<
  Pick<FormatDateTimeDisplayOptions, 'hideTimezone' | 'format' | 'timeZone'>
> = {
  hideTimezone: false,
  format: DATE_FORMAT.MONTH_DAY_YEAR_TIME,
  timeZone: TIMEZONE.UTC,
};

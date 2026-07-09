import { DATE_FORMAT, DEFAULT_TIMEZONE } from './constants';
import type {
  FormatDateInTimeZoneOptions,
  FormatDateOptions,
  FormatLocalizedDateInTimeZoneOptions,
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

export const DEFAULT_FORMAT_LOCALIZED_DATE_IN_TIMEZONE_OPTIONS: Required<FormatLocalizedDateInTimeZoneOptions> =
  {
    ...DEFAULT_FORMAT_DATE_IN_TIMEZONE_OPTIONS,
    locale: 'default',
  };

export const DEFAULT_ZONED_DATE_OPTIONS: Required<ZonedDateOptions> = {
  timeZone: DEFAULT_TIMEZONE,
};

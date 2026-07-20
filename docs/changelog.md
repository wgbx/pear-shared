---
title: Changelog
order: 2
---

# Changelog

## [0.1.17](https://github.com/bosinc/pear-shared/compare/0.1.16...0.1.17) (2026-07-20)

### Features

- **Tooltip:** default to click trigger and add InfoTooltip
- add date formatting utilities with date-fns and date-fns-tz support
- add `SLASH_DATE_WITH_TZ` format and update date formatting docs
- add device detection utilities and update exports
- add global styles for API tables and update documentation

### Code Refactoring

- **MenuDropdown:** adjust menu item width for better layout consistency
- **ImageGroup:** enhance image handling and update props types
- **Alert:** remove `info` severity and update related components
- **date:** update date formatting constants and remove `formatLocalizedDateInTimeZone`

### Documentation

- update useCopyToClipboard documentation for clarity and formatting

### Chores

- update tsconfig.json ignoreDeprecations for TypeScript 5.x
- update `.npmrc` and README for publish authentication configuration
- upgrade dumi to 2.4.44; update `.dumirc.ts` and ignore `.turbopack`
- update package.json scripts for prepublish and remove start script

## [0.1.16](https://github.com/bosinc/pear-shared/compare/0.1.15...0.1.16) (2026-07-08)

### Features

- update Cloudinary image optimization constants and documentation

## [0.1.15](https://github.com/bosinc/pear-shared/compare/v0.1.14...0.1.15) (2026-07-07)

### Features

- add Image component with fallback support and documentation

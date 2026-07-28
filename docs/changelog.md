---
title: Changelog
order: 2
---

# Changelog

## [0.1.20](https://github-work/bosinc/pear-shared/compare/0.1.19...0.1.20) (2026-07-28)

### Bug Fixes

- **Drawer:** adjust maxHeight from 100dvh to 90dvh for improved layout ([606a86d](https://github-work/bosinc/pear-shared/commit/606a86dd671353022b1c0d8754264759d4ad4666))

### Features

- **Drawer:** add stableHeight prop for fixed height layout option ([4dafc48](https://github-work/bosinc/pear-shared/commit/4dafc48a7595a015ad5cb540b3f75001e1c9a4b1))

## [0.1.19](https://github-work/bosinc/pear-shared/compare/0.1.18...0.1.19) (2026-07-23)

### Features

- **Tooltip:** enhance EllipsisTooltip with improved truncation handling and update documentation ([2762ddb](https://github-work/bosinc/pear-shared/commit/2762ddbaa6b977a878d02b6283cfb9484be774f6))

## [0.1.18](https://github-work/bosinc/pear-shared/compare/0.1.17...0.1.18) (2026-07-22)

### Bug Fixes

- **Drawer:** make 'heading' prop optional in PromptDrawerProps interface ([706f0ec](https://github-work/bosinc/pear-shared/commit/706f0ec8b5e9d7a34ff2828271a45b260f5b1996))
- **Drawer:** set default value for 'open' prop to true in Drawer components ([d25f4cc](https://github-work/bosinc/pear-shared/commit/d25f4ccfb832a789fc366741dbb3eec28e93f757))

### Features

- **Drawer:** introduce ActionDrawer component with actions support ([bf026bc](https://github-work/bosinc/pear-shared/commit/bf026bc584af08cf84134dcae69c72c675a5b95e))
- **Flex:** introduce Flex component with layout-friendly defaults and documentation ([ec38023](https://github-work/bosinc/pear-shared/commit/ec380239f26e05820141dc52dd8b459d4aa37d49))
- **Row:** add Row and Col components for 24-column layout system ([09e981c](https://github-work/bosinc/pear-shared/commit/09e981ce31ef35c72e806768ccb5f888c0c0e897))
- **Tooltip:** add EllipsisTooltip component for text truncation with tooltip support ([ba67e8d](https://github-work/bosinc/pear-shared/commit/ba67e8d3eb05fc07fa89fdb0f62006f9ddaf30c4))

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

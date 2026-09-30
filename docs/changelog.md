---
title: Changelog
order: 2
---

# Changelog

## [0.1.28](https://github-work/bosinc/pear-shared/compare/0.1.27...0.1.28) (2026-09-29)

### 新特性

- **hooks:** useIsDesktop 和 useIsMobile 改用 744px 作为视口判断阈值 ([712b2c9](https://github-work/bosinc/pear-shared/commit/712b2c9e043c8968b9b8d47b313b0fe81e5a4253))

## [0.1.27](https://github-work/bosinc/pear-shared/compare/0.1.26...0.1.27) (2026-09-16)

### 新特性

- **Drawer:** 为 MainButton footer 添加 styleType ([9405a16](https://github-work/bosinc/pear-shared/commit/9405a166b21f12dbd3cb8678fa670f37a5eb29eb))

## [0.1.26](https://github-work/bosinc/pear-shared/compare/0.1.25...0.1.26) (2026-09-10)

### 问题修复

- **ErrorBoundary:** 导出方式改为 ComponentClass，解决跨包 JSX 类型问题 ([6930c47](https://github-work/bosinc/pear-shared/commit/6930c476395846ba3723bc681ec485a6c6f46e05))

### 新特性

- **ErrorBoundary:** 新增 ErrorBoundary 组件及文档 ([9bb9986](https://github-work/bosinc/pear-shared/commit/9bb9986ada5384772687cdc25b0e79e474b6cea3))
- **function:** 新增 isEmail 工具函数，共享域名合法性校验逻辑 ([bcebebc](https://github-work/bosinc/pear-shared/commit/bcebebcacaf03df2d67c7687b7b732c49a45a10a))

## [0.1.25](https://github-work/bosinc/pear-shared/compare/0.1.24...0.1.25) (2026-09-08)

### 问题修复

- **Button:** 更新 Button 组件文档，appearance 和 size 属性改用常量，示例更一致清晰 ([c01e3e8](https://github-work/bosinc/pear-shared/commit/c01e3e815a72f537e198b735eff8a36a797ccebe))

### 新特性

- **Button:** 为 Button 组件新增 color 属性，并更新 hover/focus 状态样式以增强视觉反馈 ([9330fbb](https://github-work/bosinc/pear-shared/commit/9330fbbfebb3caf66fc738332e5d32491fb44fe4))
- **Button:** 新增 isAsync，当 onClick 返回 Promise 时自动显示加载状态 ([03f575a](https://github-work/bosinc/pear-shared/commit/03f575a9bafab02413b285bd294ad1aca5555236))
- **function:** 新增 isUrl 工具函数，支持 http(s)/mailto 及域名校验 ([984019d](https://github-work/bosinc/pear-shared/commit/984019d141270d75214d44a88c384e6507d00477))
- **IconButton:** 实现 icon 和 label API，新增尺寸配置以提升可访问性和易用性 ([e4ac949](https://github-work/bosinc/pear-shared/commit/e4ac94931935d441c3a1ec7dd56d34991013d810))

## [0.1.24](https://github-work/bosinc/pear-shared/compare/0.1.23...0.1.24) (2026-09-02)

### 新特性

- **Button:** 增强 Button 组件的 appearance 和 size 选项，引入 LegacyButton 以兼容旧版本，并更新文档中的用法示例 ([a5c2c70](https://github-work/bosinc/pear-shared/commit/a5c2c70fe170cf23e5eea3d7d16abd851777f979))

## [0.1.23](https://github-work/bosinc/pear-shared/compare/0.1.22...0.1.23) (2026-08-25)

### 新特性

- **date:** 新增 formatDateTimeDisplay 函数，支持带时区的日期时间格式化，并更新常量与文档 ([636e575](https://github-work/bosinc/pear-shared/commit/636e5752ca3b64c835639ca0cca64c022035d80c))
- **date:** 引入 DATE_FORMAT、TIMEZONE_MAP 常量及 DEFAULT_TIMEZONE；更新文档并重构日期工具函数，改进时区处理 ([fd17676](https://github-work/bosinc/pear-shared/commit/fd17676e57e36cc557a2c2b48e2ca9825d3f113a))
- **IconButton:** 引入 IconButton 组件，支持自定义 aria-label 并增强内边距以提升可访问性，附完整文档 ([5679a28](https://github-work/bosinc/pear-shared/commit/5679a288e4dd02471c5ed6a87d49d9d1e5908fea))

## [0.1.22](https://github-work/bosinc/pear-shared/compare/0.1.21...0.1.22) (2026-08-03)

### 新特性

- **link-local-to-katana:** 新增文档，说明如何将本地 shared 与 katana-web 联动调试 ([7d3ba1a](https://github-work/bosinc/pear-shared/commit/7d3ba1a55fae370d80baa4305ca7d2380b9f25b4))

## [0.1.21](https://github-work/bosinc/pear-shared/compare/0.1.20...0.1.21) (2026-08-03)

### 新特性

- **BackToTop:** 新增 BackToTop 组件，支持平滑滚动回顶部，并更新文档 ([7b75aad](https://github-work/bosinc/pear-shared/commit/7b75aadc114da33bd76b7a473af86a63d484ba8e))
- **Drawer:** 引入 FullDrawer 组件以支持全屏高度布局，并更新文档 ([daf0c08](https://github-work/bosinc/pear-shared/commit/daf0c0842339e7990a912e25eacb655ad85cc9c1))
- **SelectDropdown:** 新增 SelectDropdown 组件及配套状态管理 hooks，并更新文档 ([3dc8e12](https://github-work/bosinc/pear-shared/commit/3dc8e121afacf76d63eab9816dcb8324ff656936))
- **styles:** 新增共享样式辅助函数，包括细滚动条样式，并更新 SelectDropdown 文档 ([c760d64](https://github-work/bosinc/pear-shared/commit/c760d6468c7b5a4666d755d7b700d91dde992b0b))

## [0.1.20](https://github-work/bosinc/pear-shared/compare/0.1.19...0.1.20) (2026-07-28)

### 问题修复

- **Drawer:** maxHeight 从 100dvh 调整为 90dvh 以改善布局 ([606a86d](https://github-work/bosinc/pear-shared/commit/606a86dd671353022b1c0d8754264759d4ad4666))

### 新特性

- **Drawer:** 新增 stableHeight 属性，支持固定高度布局选项 ([4dafc48](https://github-work/bosinc/pear-shared/commit/4dafc48a7595a015ad5cb540b3f75001e1c9a4b1))

## [0.1.19](https://github-work/bosinc/pear-shared/compare/0.1.18...0.1.19) (2026-07-23)

### 新特性

- **Tooltip:** 增强 EllipsisTooltip 的文本截断处理，并更新文档 ([2762ddb](https://github-work/bosinc/pear-shared/commit/2762ddbaa6b977a878d02b6283cfb9484be774f6))

## [0.1.18](https://github-work/bosinc/pear-shared/compare/0.1.17...0.1.18) (2026-07-22)

### 问题修复

- **Drawer:** 将 PromptDrawerProps 接口中的 'heading' 属性改为可选 ([706f0ec](https://github-work/bosinc/pear-shared/commit/706f0ec8b5e9d7a34ff2828271a45b260f5b1996))
- **Drawer:** 将 Drawer 组件的 'open' 属性默认值设为 true ([d25f4cc](https://github-work/bosinc/pear-shared/commit/d25f4ccfb832a789fc366741dbb3eec28e93f757))

### 新特性

- **Drawer:** 引入支持 actions 的 ActionDrawer 组件 ([bf026bc](https://github-work/bosinc/pear-shared/commit/bf026bc584af08cf84134dcae69c72c675a5b95e))
- **Flex:** 引入 Flex 组件，提供便于布局的默认值，并附文档 ([ec38023](https://github-work/bosinc/pear-shared/commit/ec380239f26e05820141dc52dd8b459d4aa37d49))
- **Row:** 新增 Row 和 Col 组件，实现 24 栅格布局系统 ([09e981c](https://github-work/bosinc/pear-shared/commit/09e981ce31ef35c72e806768ccb5f888c0c0e897))
- **Tooltip:** 新增 EllipsisTooltip 组件，支持文本截断配合提示气泡 ([ba67e8d](https://github-work/bosinc/pear-shared/commit/ba67e8d3eb05fc07fa89fdb0f62006f9ddaf30c4))

## [0.1.17](https://github.com/bosinc/pear-shared/compare/0.1.16...0.1.17) (2026-07-20)

### 新特性

- **Tooltip:** 默认改为点击触发，并新增 InfoTooltip
- 新增基于 date-fns 和 date-fns-tz 的日期格式化工具
- 新增 `SLASH_DATE_WITH_TZ` 格式，并更新日期格式化文档
- 新增设备检测工具，并更新导出
- 新增 API 表格的全局样式，并更新文档

### 代码重构

- **MenuDropdown:** 调整菜单项宽度以提升布局一致性
- **ImageGroup:** 增强图片处理逻辑，更新 props 类型
- **Alert:** 移除 `info` 严重级别，更新相关组件
- **date:** 更新日期格式化常量，移除 `formatLocalizedDateInTimeZone`

### 文档

- 更新 useCopyToClipboard 文档，使其更清晰、格式更规范

### 杂项

- 更新 tsconfig.json 的 ignoreDeprecations 以适配 TypeScript 5.x
- 更新 `.npmrc` 和 README 中的发布鉴权配置说明
- 升级 dumi 到 2.4.44；更新 `.dumirc.ts` 并忽略 `.turbopack`
- 更新 package.json 的 prepublish 脚本，移除 start 脚本

## [0.1.16](https://github.com/bosinc/pear-shared/compare/0.1.15...0.1.16) (2026-07-08)

### 新特性

- 更新 Cloudinary 图片优化相关常量与文档

## [0.1.15](https://github.com/bosinc/pear-shared/compare/v0.1.14...0.1.15) (2026-07-07)

### 新特性

- 新增支持 fallback 的 Image 组件及文档

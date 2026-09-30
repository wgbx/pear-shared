---
title: 指南
order: 1
---

# 快速开始

`@bosinc/shared` 是一个为复用而生的轻量级 React 组件库。

## 安装

使用你喜欢的包管理器安装：

```bash
pnpm add @bosinc/shared
```

本库依赖 React、MUI、Emotion、`jotai`、`ahooks` 等 peer dependencies。

## 全局 Alert 配置

如果你想使用 `useAlert()`（以及 `useCopyToClipboard()`），需要在应用根节点挂载一次 `AlertContainer`。

```tsx
import { AlertContainer } from '@bosinc/shared';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AlertContainer />
      {children}
    </>
  );
}
```

## 文档状态说明

侧边栏中带 ⚠ 图标的条目尚未完善，采用前请先自行确认。

## Shared

完整的 API 和用法示例请参考文档：

- [组件](/components/external-link)

- [Hooks](/hooks/use-copy-to-clipboard)

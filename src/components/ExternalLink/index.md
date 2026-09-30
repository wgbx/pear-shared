---
title: ExternalLink
---

# ExternalLink

用于渲染外部链接的组件，基于 MUI `Link` 构建并透传样式，默认在新标签页打开。

## 示例

### 基础用法

```tsx
import { ExternalLink } from '@bosinc/shared';

export default () => {
  return (
    <>
      Open
      <ExternalLink href="https://pear.us"> pear.us</ExternalLink>
    </>
  );
};
```

## API

### ExternalLinkProps

| 属性     | 说明                  | 类型        | 必填 | 默认值                  |
| -------- | --------------------- | ----------- | ---- | ----------------------- |
| children | 链接展示内容          | `ReactNode` | `✅` | `-`                     |
| href     | 链接地址              | `string`    | `✅` | `-`                     |
| target   | 链接打开方式          | `string`    | `-`  | `'_blank'`              |
| rel      | 链接的 `rel` 关系属性 | `string`    | `-`  | `'noopener noreferrer'` |

# ExternalLink

用于渲染外部链接的组件，基于 MUI `Link` 做了样式透传，并默认在新标签页打开。

## 代码演示

### 基本使用

```tsx
import { ExternalLink } from '@pear/shared';

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

| 参数 | 说明 | 类型 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| children | 链接展示内容 | `ReactNode` | `✅` | `-` |
| href | 链接地址 | `string` | `✅` | `-` |
| target | 打开方式 | `string` | `-` | `'_blank'` |
| rel | 链接关系属性 | `string` | `-` | `'noopener noreferrer'` |

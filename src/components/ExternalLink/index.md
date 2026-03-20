# ExternalLink

用于渲染外部链接的组件，基于 MUI `Link` 做了样式透传，并默认在新标签页打开。

### 基本使用

```tsx
import React from 'react';
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

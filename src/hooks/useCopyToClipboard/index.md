# useCopyToClipboard

把文本复制到剪贴板，并在复制成功或失败时触发 `Notification` 提示（需要你的应用全局挂载 `NotificationContainer`）。

### 基本使用

```tsx
import React from 'react';
import { useCopyToClipboard } from '@pear/shared';

export default function Demo() {
  const { copyToClipboard } = useCopyToClipboard();

  return (
    <button onClick={() => copyToClipboard('Hello, world!')}>Copy me</button>
  );
}
```

### 自定义信息

```tsx
import React from 'react';
import { useCopyToClipboard } from '@pear/shared';

export default function DemoCustomMessage() {
  const { copyToClipboard } = useCopyToClipboard();

  return (
    <button
      onClick={() =>
        copyToClipboard('Copy and prompt', {
          successMessage: 'Already copied',
          errorMessage: 'Copy failed. Please try again later.',
        })
      }
    >
      Copy and prompt
    </button>
  );
}
```

### API

```ts
type Options = {
  successMessage?: string; // default：Copied to clipboard
  errorMessage?: string; // default to copy to clipboard
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
};
```

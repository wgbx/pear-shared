---
title: useCopyToClipboard
---

# useCopyToClipboard

将文本复制到剪贴板，并在成功或失败时触发 `Alert` 提示（需要在应用中全局挂载 `AlertContainer`）。

## 示例

### 基础用法

```tsx
import { Button, useCopyToClipboard } from '@bosinc/shared';

export default function Demo() {
  const { copyToClipboard } = useCopyToClipboard();

  return (
    <Button onClick={() => copyToClipboard('Hello, world!')}>Copy me</Button>
  );
}
```

### 自定义提示文案

```tsx
import { Button, useCopyToClipboard } from '@bosinc/shared';

export default function DemoCustomMessage() {
  const { copyToClipboard } = useCopyToClipboard();

  return (
    <Button
      onClick={() =>
        copyToClipboard('Copy and prompt', {
          successMessage: 'Already copied',
          errorMessage: 'Copy failed. Please try again later.',
        })
      }
    >
      Copy and prompt
    </Button>
  );
}
```

## API

### `UseCopyToClipboardReturn`

| 参数            | 说明                     | 类型                                                                                                 |
| --------------- | ------------------------ | ---------------------------------------------------------------------------------------------------- |
| copyToClipboard | 将文本复制到剪贴板的方法 | `(text: string \| null \| undefined, options?: UseCopyToClipboardWithAlertOptions) => Promise<void>` |

### `UseCopyToClipboardWithAlertOptions`

| 参数           | 说明                             | 类型                       | 默认值                          |
| -------------- | -------------------------------- | -------------------------- | ------------------------------- |
| showMessage    | 为 `false` 时不显示成功/失败提示 | `boolean`                  | `true`                          |
| successMessage | 成功提示文案                     | `string`                   | `'Copied to clipboard'`         |
| errorMessage   | 失败提示文案                     | `string`                   | `'Failed to copy to clipboard'` |
| onSuccess      | 复制成功后的回调                 | `() => void`               | `-`                             |
| onError        | 复制失败后的回调                 | `(error: unknown) => void` | `-`                             |

# useCopyToClipboard

把文本复制到剪贴板，并在复制成功或失败时触发 `Notification` 提示（需要你的应用全局挂载 `NotificationContainer`）。

## 代码演示

### 基本使用

```tsx
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

## API

### useCopyToClipboard 返回值

| 参数 | 说明 | 类型 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| copyToClipboard | 复制文本到剪贴板的方法 | `(text: string | null | undefined, options?: UseCopyToClipboardWithNotificationOptions) => Promise<void>` | `✅` | `-` |

### UseCopyToClipboardWithNotificationOptions

| 参数 | 说明 | 类型 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| successMessage | 复制成功提示文案 | `string` | `✅` | `'Copied to clipboard'` |
| errorMessage | 复制失败提示文案 | `string` | `✅` | `'Failed to copy to clipboard'` |
| onSuccess | 复制成功后的回调 | `() => void` | `-` | `-` |
| onError | 复制失败后的回调 | `(error: unknown) => void` | `-` | `-` |

---
title: useWebShareLink
---

# useWebShareLink

静默复制 `url`，然后在用户手势内调用 `navigator.share`。根据复制和分享的结果，通过全局 `Alert` 显示成功或失败提示。

## 特性

- 静默写入 `url` 到剪贴板（不弹复制提示），随后调用 Web Share API
- 如果分享抛出异常（用户取消除外），复制可能仍然成功 → 显示成功提示
- 成功/失败提示与生命周期回调
- 用户关闭分享面板时（`AbortError`）触发 `onShareCancel`

## 行为说明

1. 如果提供了 `onShareStart`，先执行它。
2. 使用 `useCopyToClipboard({ showMessage: false })` 复制 `url`，复制失败会在内部被记录。
3. 调用 `navigator.share({ title, text, url })`。
   - 成功时：触发 `onShareSuccess`，随后走与其他成功情况相同的路径。
   - `AbortError`：触发 `onShareCancel`，不会触发 `onShareSuccess`。
   - 其他错误：触发 `onShareFail`。
4. 提示规则：仅当 `navigator.share` 被拒绝**且**静默复制也失败时，才显示 **`errorMessage`**；其他情况（例如分享成功、取消但复制成功、分享出错但复制成功）均显示 **`successMessage`**。

## 示例

### 基础用法

```tsx
import { Button, useWebShareLink } from '@bosinc/shared';

export default function Demo() {
  const { handleShare } = useWebShareLink({
    url: 'https://example.com',
  });

  return <Button onClick={handleShare}>Share</Button>;
}
```

### 自定义 `title` 和 `text`

传入 `title` 和 `text`，让系统分享面板展示可读的标题和内容；`url` 仍会被静默复制，并作为分享的 `url` 字段传递。

```tsx
import { Button, useWebShareLink } from '@bosinc/shared';

export default function DemoWithPayload() {
  const { handleShare } = useWebShareLink({
    url: 'https://example.com/items/42',
    title: 'Check this item',
    text: 'Thought you might like this listing.',
  });

  return <Button onClick={handleShare}>Share</Button>;
}
```

## API

### `UseWebShareLinkReturn`

| 参数        | 说明                           | 类型                  |
| ----------- | ------------------------------ | --------------------- |
| handleShare | 在用户操作时执行的异步处理函数 | `() => Promise<void>` |

### `UseWebShareLinkOptions`

| 参数           | 说明                                                    | 类型                          | 默认值                      | 是否必填 |
| -------------- | ------------------------------------------------------- | ----------------------------- | --------------------------- | -------- |
| url            | 被静默复制的文本，同时作为 `url` 传给 `navigator.share` | `string`                      | -                           | 是       |
| title          | 传给 `navigator.share` 的 `title`                       | `string`                      | -                           | 否       |
| text           | 传给 `navigator.share` 的 `text`                        | `string`                      | -                           | 否       |
| successMessage | 成功提示文案（`useAlert` 的成功提示）                   | `string`                      | `'Copied!'`                 | 否       |
| errorMessage   | 分享被拒绝且静默复制也失败时显示的文案                  | `string`                      | `'Unable to share or copy'` | 否       |
| onShareStart   | 在静默复制之前执行                                      | `() => void \| Promise<void>` | -                           | 否       |
| onShareSuccess | 仅在 `navigator.share` 成功且未抛异常时执行             | `() => void`                  | -                           | 否       |
| onShareCancel  | 用户取消分享面板时执行（`AbortError`）                  | `() => void`                  | -                           | 否       |
| onShareFail    | 分享因非取消原因失败时执行                              | `(error: Error) => void`      | -                           | 否       |

`successMessage` / `errorMessage` 的默认值对应 `@constants` / `src/constants/webShareLink.ts` 中的 `WEB_SHARE_LINK_DEFAULT_*`。

## 浏览器支持

- 在支持 `navigator.share` 和剪贴板 API 的环境下效果最佳（例如 iOS Safari 15+、Android Chrome，部分桌面 Chromium 浏览器）。
- 如果 Web Share 不可用或抛出异常，会按上述规则降级为静默复制 + 提示。

## 注意事项

- 必须由**用户手势**触发（例如 `click`）；避免在无关的 `setTimeout` 之后、脱离手势上下文时调用。
- 剪贴板和分享功能要求处于**安全上下文**（HTTPS 或 localhost）。
- 需要挂载全局的 `Alert` / `AlertContainer`，以便 `useAlert` 能够显示消息。

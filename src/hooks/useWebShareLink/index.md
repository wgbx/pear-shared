# useWebShareLink

Silently copies `url`, then calls `navigator.share` inside a user gesture. Shows success or failure via global `Alert` based on copy and share outcomes.

## Features

- Silent clipboard write for `url` (no copy toasts), then Web Share API
- If share throws (except user cancel), copy may still have succeeded → success toast
- Success / failure alerts and lifecycle callbacks
- `onShareCancel` when the user dismisses the share sheet (`AbortError`)

## Behavior

1. Runs `onShareStart` when provided.
2. Copies `url` with `useCopyToClipboard({ showMessage: false })`. Copy failure is tracked internally.
3. Calls `navigator.share({ title, text, url })`.
   - Resolves: `onShareSuccess`, then the same success path as other positive outcomes.
   - `AbortError`: `onShareCancel`, not `onShareSuccess`.
   - Other errors: `onShareFail`.
4. Alerts: **`errorMessage`** only if `navigator.share` rejects **and** silent copy failed; otherwise **`successMessage`** (e.g. share OK, cancel with copy OK, share error with copy OK).

## Examples

### Basic usage

```tsx
import { useWebShareLink } from '@bosinc/shared';
import { Button } from '@mui/material';

export default function Demo() {
  const { handleShare } = useWebShareLink({
    url: 'https://example.com',
  });

  return <Button onClick={handleShare}>Share</Button>;
}
```

### Custom `title` and `text`

Pass `title` and `text` so the system share sheet shows a readable label and body; `url` is still copied silently and passed as the share `url` field.

```tsx
import { useWebShareLink } from '@bosinc/shared';
import { Button } from '@mui/material';

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

| Property     | Description                          | Type                   |
| ------------ | ------------------------------------ | ---------------------- |
| handleShare  | Async handler to run on user action | `() => Promise<void>` |

### `UseWebShareLinkOptions`

| Property        | Description                                                                 | Type                            | Default              | Required |
| --------------- | ----------------------------------------------------------------------------- | ------------------------------- | -------------------- | -------- |
| url             | Text copied silently and `url` passed to `navigator.share`                  | `string`                        | -                    | Yes      |
| title           | `title` for `navigator.share`                                               | `string`                        | -                    | No       |
| text            | `text` for `navigator.share`                                                | `string`                        | -                    | No       |
| successMessage  | Success alert copy (`useAlert` success)                                      | `string`                        | `'Copied!'`          | No       |
| errorMessage    | Shown when share rejects and silent copy failed                               | `string`                        | `'Unable to share or copy'` | No       |
| onShareStart    | Runs before silent copy                                                     | `() => void \| Promise<void>`   | -                    | No       |
| onShareSuccess  | Runs only when `navigator.share` resolves without throwing                  | `() => void`                    | -                    | No       |
| onShareCancel   | User cancelled the share sheet (`AbortError`)                               | `() => void`                    | -                    | No       |
| onShareFail     | Share failed with a non-cancel error                                          | `(error: Error) => void`        | -                    | No       |

Defaults for `successMessage` / `errorMessage` match `WEB_SHARE_LINK_DEFAULT_*` in `@constants` / `src/constants/webShareLink.ts`.

## Browser support

- Works best where `navigator.share` and clipboard APIs are available (e.g. iOS Safari 15+, Android Chrome, some desktop Chromium).
- If Web Share is missing or throws, behavior falls back to silent copy + alert rules above.

## Notes

- Must be triggered from a **user gesture** (e.g. `click`); avoid calling after unrelated `setTimeout` without a gesture.
- Clipboard and share expect a **secure context** (HTTPS or localhost).
- Mount global `Alert` / `AlertContainer` so `useAlert` can display messages.

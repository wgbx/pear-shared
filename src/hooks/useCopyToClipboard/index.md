# useCopyToClipboard

Copies text to the clipboard and triggers an `Alert` on success or failure (requires `AlertContainer` to be mounted globally in your app).

## Examples

### Basic Usage

```tsx
import { useCopyToClipboard } from '@pear/shared';

export default function Demo() {
  const { copyToClipboard } = useCopyToClipboard();

  return (
    <button onClick={() => copyToClipboard('Hello, world!')}>Copy me</button>
  );
}
```

### Custom Messages

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

### useCopyToClipboard Return Value

| Property | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| copyToClipboard | Method to copy text to clipboard | `(text: string | null | undefined, options?: UseCopyToClipboardWithAlertOptions) => Promise<void>` | `✅` | `-` |

### UseCopyToClipboardWithAlertOptions

| Property | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| successMessage | Success alert message | `string` | `✅` | `'Copied to clipboard'` |
| errorMessage | Failure alert message | `string` | `✅` | `'Failed to copy to clipboard'` |
| onSuccess | Callback after successful copy | `() => void` | `-` | `-` |
| onError | Callback after failed copy | `(error: unknown) => void` | `-` | `-` |

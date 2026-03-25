# Notification

A notification component built on `jotai` + MUI. Call `useNotification()` to trigger notifications.

> Note: If you have already mounted `NotificationContainer` globally in your app, the examples here only demonstrate how to trigger notifications.

## Examples

### Basic Usage

```tsx
import { useNotification } from '@pear/shared';

export default function DemoNotificationSimple() {
  const { success, error, warning } = useNotification();

  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <button onClick={() => success('Here is an example general text.')}>
        success
      </button>
      <button onClick={() => error('Here is an example general text.')}>
        error
      </button>
      <button onClick={() => warning('Here is an example general text.')}>
        warning
      </button>
    </div>
  );
}
```

### With Title

```tsx
import { useNotification } from '@pear/shared';

export default function DemoNotificationDetail() {
  const { success, error, warning } = useNotification();

  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <button
        onClick={() =>
          success({
            title: 'Notification title',
            text: 'Here is an example general text.',
          })
        }
      >
        success
      </button>

      <button
        onClick={() =>
          error({
            title: 'Notification title',
            text: 'Here is an example general text.',
          })
        }
      >
        error
      </button>

      <button
        onClick={() =>
          warning({
            title: 'Notification title',
            text: 'Here is an example general text.',
          })
        }
      >
        warning
      </button>
    </div>
  );
}
```

### With Close Button

```tsx
import { useNotification } from '@pear/shared';

export default function DemoNotificationDetail() {
  const { success, error, warning } = useNotification();

  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <button
        onClick={() =>
          success({
            title: 'Notification title',
            text: 'Here is an example general text.',
            showClose: true,
          })
        }
      >
        success
      </button>

      <button
        onClick={() =>
          error({
            title: 'Notification title',
            text: 'Here is an example general text.',
            showClose: true,
          })
        }
      >
        error
      </button>

      <button
        onClick={() =>
          warning({
            title: 'Notification title',
            text: 'Here is an example general text.',
            showClose: true,
          })
        }
      >
        warning
      </button>
    </div>
  );
}
```

## API

### useNotification Return Value

| Property | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| error | Trigger an error notification | `(params: string | NotificationCloseProps | NotificationActionProps) => void` | `✅` | `-` |
| info | Trigger an info notification | `(params: string | NotificationCloseProps | NotificationActionProps) => void` | `✅` | `-` |
| success | Trigger a success notification | `(params: string | NotificationCloseProps | NotificationActionProps) => void` | `✅` | `-` |
| warning | Trigger a warning notification | `(params: string | NotificationCloseProps | NotificationActionProps) => void` | `✅` | `-` |
| customize | Trigger a custom (no severity) notification | `(params: string | NotificationCloseProps | NotificationActionProps) => void` | `✅` | `-` |
| closeNotification | Manually close the current notification | `() => void` | `✅` | `-` |

### NotificationCloseProps

| Property | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| text | Notification body text | `string` | `✅` | `-` |
| hideAfter | Auto-close delay in seconds | `number` | `-` | `-` |
| title | Notification title | `string` | `-` | `-` |
| sx | Notification style override | `NotificationBannerProps['sx']` | `-` | `-` |
| showClose | Whether to show the close button | `NotificationBannerWithClose['showClose']` | `-` | `-` |
| icon | Custom icon | `NotificationBannerWithClose['icon']` | `-` | `-` |

### NotificationActionProps

| Property | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| text | Notification body text | `string` | `✅` | `-` |
| action | Custom action area render function | `NotificationBannerWithAction['action']` | `✅` | `-` |
| hideAfter | Auto-close delay in seconds | `number` | `-` | `-` |
| title | Notification title | `string` | `-` | `-` |
| sx | Notification style override | `NotificationBannerProps['sx']` | `-` | `-` |

# Alert

An alert component built on `jotai` + MUI. Call `useAlert()` to trigger alerts.

> Note: If you have already mounted `AlertContainer` globally in your app, the examples here only demonstrate how to trigger alerts.

## Examples

### Basic Usage

```tsx
import { Button, useAlert } from '@bosinc/shared';

export default function DemoAlertSimple() {
  const { success, error, warning } = useAlert();

  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Button onClick={() => success('Here is an example general text.')}>
        success
      </Button>
      <Button onClick={() => error('Here is an example general text.')}>
        error
      </Button>
      <Button onClick={() => warning('Here is an example general text.')}>
        warning
      </Button>
    </div>
  );
}
```

### With Title

```tsx
import { Button, useAlert } from '@bosinc/shared';

export default function DemoAlertDetail() {
  const { success, error, warning } = useAlert();

  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Button
        onClick={() =>
          success({
            title: 'Alert title',
            text: 'Here is an example general text.',
          })
        }
      >
        success
      </Button>

      <Button
        onClick={() =>
          error({
            title: 'Alert title',
            text: 'Here is an example general text.',
          })
        }
      >
        error
      </Button>

      <Button
        onClick={() =>
          warning({
            title: 'Alert title',
            text: 'Here is an example general text.',
          })
        }
      >
        warning
      </Button>
    </div>
  );
}
```

### With Close Button

```tsx
import { Button, useAlert } from '@bosinc/shared';

export default function DemoAlertWithClose() {
  const { success, error, warning } = useAlert();

  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Button
        onClick={() =>
          success({
            title: 'Alert title',
            text: 'Here is an example general text.',
            showClose: true,
          })
        }
      >
        success
      </Button>

      <Button
        onClick={() =>
          error({
            title: 'Alert title',
            text: 'Here is an example general text.',
            showClose: true,
          })
        }
      >
        error
      </Button>

      <Button
        onClick={() =>
          warning({
            title: 'Alert title',
            text: 'Here is an example general text.',
            showClose: true,
          })
        }
      >
        warning
      </Button>
    </div>
  );
}
```

## API

### useAlert Return Value

| Property   | Description                          | Type             | Required        | Default                        |
| ---------- | ------------------------------------ | ---------------- | --------------- | ------------------------------ | ---- | --- |
| error      | Trigger an error alert               | `(params: string | AlertCloseProps | AlertWithActionProps) => void` | `✅` | `-` |
| info       | Trigger an info alert                | `(params: string | AlertCloseProps | AlertWithActionProps) => void` | `✅` | `-` |
| success    | Trigger a success alert              | `(params: string | AlertCloseProps | AlertWithActionProps) => void` | `✅` | `-` |
| warning    | Trigger a warning alert              | `(params: string | AlertCloseProps | AlertWithActionProps) => void` | `✅` | `-` |
| customize  | Trigger a custom (no severity) alert | `(params: string | AlertCloseProps | AlertWithActionProps) => void` | `✅` | `-` |
| closeAlert | Manually close the current alert     | `() => void`     | `✅`            | `-`                            |

### AlertCloseProps

| Property  | Description                      | Type                                | Required | Default |
| --------- | -------------------------------- | ----------------------------------- | -------- | ------- |
| text      | Alert body text                  | `string`                            | `✅`     | `-`     |
| hideAfter | Auto-close delay in seconds      | `number`                            | `-`      | `-`     |
| title     | Alert title                      | `string`                            | `-`      | `-`     |
| sx        | Alert style override             | `AlertBannerProps['sx']`            | `-`      | `-`     |
| showClose | Whether to show the close button | `AlertBannerWithClose['showClose']` | `-`      | `-`     |
| icon      | Custom icon                      | `AlertBannerWithClose['icon']`      | `-`      | `-`     |

### AlertWithActionProps

| Property  | Description                        | Type                              | Required | Default |
| --------- | ---------------------------------- | --------------------------------- | -------- | ------- |
| text      | Alert body text                    | `string`                          | `✅`     | `-`     |
| action    | Custom action area render function | `AlertBannerWithAction['action']` | `✅`     | `-`     |
| hideAfter | Auto-close delay in seconds        | `number`                          | `-`      | `-`     |
| title     | Alert title                        | `string`                          | `-`      | `-`     |
| sx        | Alert style override               | `AlertBannerProps['sx']`          | `-`      | `-`     |

# Notification

基于 `jotai` + MUI 封装的通知提示组件。调用 `useNotification()` 触发通知展示。

> 注意：如果你已在应用全局挂载 `NotificationContainer`，则这里的示例只展示触发方式。

### 触发通知

```tsx
import React from 'react';
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

### 配置 title

```tsx
import React from 'react';
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

### 配置 close

```tsx
import React from 'react';
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
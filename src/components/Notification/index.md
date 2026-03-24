# Notification

基于 `jotai` + MUI 封装的通知提示组件。调用 `useNotification()` 触发通知展示。

> 注意：如果你已在应用全局挂载 `NotificationContainer`，则这里的示例只展示触发方式。

## 代码演示

### 基本使用

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

### 配置标题

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

### 配置Close

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

### useNotification 返回值

| 参数 | 说明 | 类型 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| error | 触发错误通知 | `(params: string | NotificationCloseProps | NotificationActionProps) => void` | `✅` | `-` |
| info | 触发信息通知 | `(params: string | NotificationCloseProps | NotificationActionProps) => void` | `✅` | `-` |
| success | 触发成功通知 | `(params: string | NotificationCloseProps | NotificationActionProps) => void` | `✅` | `-` |
| warning | 触发警告通知 | `(params: string | NotificationCloseProps | NotificationActionProps) => void` | `✅` | `-` |
| customize | 触发自定义（无 severity）通知 | `(params: string | NotificationCloseProps | NotificationActionProps) => void` | `✅` | `-` |
| closeNotification | 主动关闭当前通知 | `() => void` | `✅` | `-` |

### NotificationCloseProps

| 参数 | 说明 | 类型 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| text | 通知正文 | `string` | `✅` | `-` |
| hideAfter | 自动关闭秒数 | `number` | `-` | `-` |
| title | 通知标题 | `string` | `-` | `-` |
| sx | 通知样式扩展 | `NotificationBannerProps['sx']` | `-` | `-` |
| showClose | 是否显示关闭按钮 | `NotificationBannerWithClose['showClose']` | `-` | `-` |
| icon | 自定义图标 | `NotificationBannerWithClose['icon']` | `-` | `-` |

### NotificationActionProps

| 参数 | 说明 | 类型 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| text | 通知正文 | `string` | `✅` | `-` |
| action | 自定义操作区渲染函数 | `NotificationBannerWithAction['action']` | `✅` | `-` |
| hideAfter | 自动关闭秒数 | `number` | `-` | `-` |
| title | 通知标题 | `string` | `-` | `-` |
| sx | 通知样式扩展 | `NotificationBannerProps['sx']` | `-` | `-` |

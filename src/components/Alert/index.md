---
title: Alert
---

# Alert

基于 `jotai` + MUI 构建的提示组件。调用 `useAlert()` 来触发提示。

> 注意：如果你已经在应用中全局挂载了 `AlertContainer`，这里的示例仅演示如何触发提示。

## 示例

### 基础用法

```tsx
import { Button, useAlert } from '@bosinc/shared';

export default function DemoAlertSimple() {
  const { success, error, warning } = useAlert();

  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Button onClick={() => success('Here is an example general text.')}>
        success
      </Button>
      <Button
        onClick={() =>
          error(
            'This is a longer error message to demonstrate how the alert component handles extended text content with proper alignment and layout.',
          )
        }
      >
        error
      </Button>
      <Button onClick={() => warning('Here is an example general text.')}>
        warning
      </Button>
    </div>
  );
}
```

### 带标题

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

### 带关闭按钮

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

### useAlert 返回值

| 属性       | 说明                         | 类型                                                                  | 必填 | 默认值 |
| ---------- | ---------------------------- | --------------------------------------------------------------------- | ---- | ------ |
| error      | 触发一个错误提示             | `(params: string \| AlertCloseProps \| AlertWithActionProps) => void` | `✅` | `-`    |
| success    | 触发一个成功提示             | `(params: string \| AlertCloseProps \| AlertWithActionProps) => void` | `✅` | `-`    |
| warning    | 触发一个警告提示             | `(params: string \| AlertCloseProps \| AlertWithActionProps) => void` | `✅` | `-`    |
| customize  | 触发一个自定义（无级别）提示 | `(params: string \| AlertCloseProps \| AlertWithActionProps) => void` | `✅` | `-`    |
| closeAlert | 手动关闭当前提示             | `() => void`                                                          | `✅` | `-`    |

### AlertCloseProps

| 属性      | 说明               | 类型                                | 必填 | 默认值 |
| --------- | ------------------ | ----------------------------------- | ---- | ------ |
| text      | 提示正文文本       | `string`                            | `✅` | `-`    |
| hideAfter | 自动关闭延时（秒） | `number`                            | `-`  | `-`    |
| title     | 提示标题           | `string`                            | `-`  | `-`    |
| sx        | 提示样式覆盖       | `AlertBannerProps['sx']`            | `-`  | `-`    |
| showClose | 是否显示关闭按钮   | `AlertBannerWithClose['showClose']` | `-`  | `-`    |
| icon      | 自定义图标         | `AlertBannerWithClose['icon']`      | `-`  | `-`    |

### AlertWithActionProps

| 属性      | 说明                   | 类型                              | 必填 | 默认值 |
| --------- | ---------------------- | --------------------------------- | ---- | ------ |
| text      | 提示正文文本           | `string`                          | `✅` | `-`    |
| action    | 自定义操作区域渲染函数 | `AlertBannerWithAction['action']` | `✅` | `-`    |
| hideAfter | 自动关闭延时（秒）     | `number`                          | `-`  | `-`    |
| title     | 提示标题               | `string`                          | `-`  | `-`    |
| sx        | 提示样式覆盖           | `AlertBannerProps['sx']`          | `-`  | `-`    |

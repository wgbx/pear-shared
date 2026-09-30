---
title: StatusTag
---

# StatusTag

一个状态标签组件，基于 MUI `Stack` 和 `Typography` 构建，用带颜色的徽章展示不同的状态。

## 示例

### 基础用法

```tsx
import { STATUS_TAG_MAP, StatusTag } from '@bosinc/shared';

export default () => {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <StatusTag type={STATUS_TAG_MAP.DEFAULT} label="Default" />
      <StatusTag type={STATUS_TAG_MAP.SUCCESS} label="Success" />
      <StatusTag type={STATUS_TAG_MAP.WARNING} label="Warning" />
      <StatusTag type={STATUS_TAG_MAP.ERROR} label="Error" />
      <StatusTag type={STATUS_TAG_MAP.INFO} label="Info" />
    </div>
  );
};
```

### 自定义映射

```tsx
import { StatusTag } from '@bosinc/shared';

const statusList = [
  { type: 'default', label: 'Upcoming' },
  { type: 'success', label: 'Completed' },
  { type: 'warning', label: 'On Hold' },
  { type: 'error', label: 'Canceled' },
] as const;

export default () => {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {statusList.map(({ type, label }) => (
        <StatusTag key={type} type={type} label={label} />
      ))}
    </div>
  );
};
```

### 结合业务状态配置

```tsx
import { STATUS_TAG_MAP, StatusTag } from '@bosinc/shared';

const eventStatusConfig = {
  UPCOMING: {
    type: STATUS_TAG_MAP.DEFAULT,
    label: 'Upcoming',
    bgColor: 'shades.900',
    color: 'orange.100',
  },
  ON_HOLD: {
    type: STATUS_TAG_MAP.WARNING,
    label: 'On Hold',
    bgColor: 'orange.900',
    color: 'white.a100',
  },
  COMPLETED: {
    type: STATUS_TAG_MAP.SUCCESS,
    label: 'Completed',
    bgColor: 'green.900',
    color: 'white.a100',
  },
  CANCELED: {
    type: STATUS_TAG_MAP.ERROR,
    label: 'Canceled',
    bgColor: 'red.700',
    color: 'shades.100',
  },
} as const;

export default () => {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {Object.entries(eventStatusConfig).map(([key, config]) => (
        <StatusTag key={key} type={config.type} config={config} />
      ))}
    </div>
  );
};
```

### 自定义样式

```tsx
import { StatusTag } from '@bosinc/shared';

const statusList = [
  { type: 'default', label: 'Upcoming' },
  { type: 'success', label: 'Completed' },
  { type: 'warning', label: 'On Hold' },
  { type: 'error', label: 'Canceled' },
] as const;

export default () => {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {statusList.map(({ type, label }) => (
        <StatusTag
          key={type}
          type={type}
          label={label}
          slotProps={{
            root: {
              sx: {
                minWidth: 96,
                height: 40,
              },
            },
            text: {
              sx: {
                fontSize: '0.875rem',
              },
            },
          }}
        />
      ))}
    </div>
  );
};
```

## API

### StatusTagProps

| 属性      | 说明                              | 类型                                                       | 是否必填 | 默认值      |
| --------- | --------------------------------- | ---------------------------------------------------------- | -------- | ----------- |
| type      | 决定基础配色方案的状态类型        | `'default' \| 'success' \| 'warning' \| 'error' \| 'info'` | `-`      | `'default'` |
| label     | 标签展示文字                      | `string`                                                   | `-`      | `-`         |
| config    | 覆盖 `label/bgColor/color` 的配置 | `{ label?: string; bgColor?: string; color?: string }`     | `-`      | `-`         |
| slotProps | 用于自定义的插槽属性              | `{ root?, text? }`                                         | `-`      | `-`         |

### 状态类型

| 类型      | 背景色 | 文字颜色 | 适用场景             |
| --------- | ------ | -------- | -------------------- |
| `default` | 灰色   | 深灰色   | 中性或即将开始的状态 |
| `success` | 浅绿色 | 深绿色   | 已完成或成功的状态   |
| `warning` | 浅橙色 | 深橙色   | 暂停或待处理的状态   |
| `error`   | 红色   | 白色     | 已取消或失败的状态   |
| `info`    | 浅蓝色 | 深蓝色   | 提示信息类状态       |

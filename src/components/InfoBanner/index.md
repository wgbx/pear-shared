---
title: InfoBanner
---

# InfoBanner

展示一个信息横幅容器。可以通过 `description` 快速渲染文本，也可以通过 `children` 自定义内容。

## 示例

### 基础用法

```tsx
import { InfoBanner } from '@bosinc/shared';

export default () => {
  return (
    <InfoBanner description="An information banner is a prominent message displayed at the top or within a page to share important updates, alerts, or guidance with users." />
  );
};
```

### 使用 children 自定义内容

```tsx
import { InfoBanner } from '@bosinc/shared';

export default () => {
  return (
    <InfoBanner>
      <div style={{ fontSize: 12, lineHeight: 1.4 }}>
        Custom content from children.
      </div>
    </InfoBanner>
  );
};
```

## API

### InfoBannerProps

| 属性        | 说明                                    | 类型                                                                                   | 是否必填 | 默认值               |
| ----------- | --------------------------------------- | -------------------------------------------------------------------------------------- | -------- | -------------------- |
| children    | 自定义内容；未传入 `description` 时渲染 | `ReactNode`                                                                            | `-`      | `-`                  |
| description | 描述文本/节点；传入时优先展示           | `ReactNode`                                                                            | `-`      | `-`                  |
| icon        | 右上角图标组件                          | `ComponentType<SVGProps<SVGSVGElement>>`                                               | `-`      | `BookmarkSquareIcon` |
| slotProps   | 传给各个插槽的 props                    | `{ root?: StackProps; description?: TypographyProps; icon?: SVGProps<SVGSVGElement> }` | `-`      | `-`                  |

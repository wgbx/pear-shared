# InfoBanner

展示一个信息提示容器，可通过 `description` 快速渲染说明文案，也支持通过 `children` 自定义内容。

## 代码演示

### 基本使用

```tsx
import { InfoBanner } from '@pear/shared';

export default () => {
  return (
    <InfoBanner description="An information banner is a prominent message displayed at the top or within a page to share important updates, alerts, or guidance with users." />
  );
};
```

### 使用 children 自定义内容

```tsx
import { InfoBanner } from '@pear/shared';

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

| 参数 | 说明 | 类型 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| children | 自定义内容；当 `description` 不存在时渲染 | `ReactNode` | `-` | `-` |
| description | 描述文案/节点；有值时优先渲染 | `ReactNode` | `-` | `-` |
| icon | 右上角图标组件 | `ComponentType<SVGProps<SVGSVGElement>>` | `-` | `BookmarkSquareIcon` |
| slotProps | 各插槽的属性透传 | `{ root?: StackProps; description?: TypographyProps; icon?: SVGProps<SVGSVGElement> }` | `-` | `-` |

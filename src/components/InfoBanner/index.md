# InfoBanner

Displays an information banner container. You can quickly render text via `description`, or customize content via `children`.

## Examples

### Basic Usage

```tsx
import { InfoBanner } from '@pear/shared';

export default () => {
  return (
    <InfoBanner description="An information banner is a prominent message displayed at the top or within a page to share important updates, alerts, or guidance with users." />
  );
};
```

### Custom Content with children

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

| Property | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| children | Custom content; rendered when `description` is not provided | `ReactNode` | `-` | `-` |
| description | Description text/node; takes priority when provided | `ReactNode` | `-` | `-` |
| icon | Top-right icon component | `ComponentType<SVGProps<SVGSVGElement>>` | `-` | `BookmarkSquareIcon` |
| slotProps | Props passed to each slot | `{ root?: StackProps; description?: TypographyProps; icon?: SVGProps<SVGSVGElement> }` | `-` | `-` |

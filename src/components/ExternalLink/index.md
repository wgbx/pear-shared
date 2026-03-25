# ExternalLink

A component for rendering external links, built on MUI `Link` with style passthrough, opening in a new tab by default.

## Examples

### Basic Usage

```tsx
import { ExternalLink } from '@pear/shared';

export default () => {
  return (
    <>
      Open
      <ExternalLink href="https://pear.us"> pear.us</ExternalLink>
    </>
  );
};
```

## API

### ExternalLinkProps

| Property | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| children | Link display content | `ReactNode` | `✅` | `-` |
| href | Link URL | `string` | `✅` | `-` |
| target | How the link opens | `string` | `-` | `'_blank'` |
| rel | Link relationship attribute | `string` | `-` | `'noopener noreferrer'` |

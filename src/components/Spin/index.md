---
title: Spin
---

# Spin

A loading spinner component built with MUI CircularProgress, providing flexible loading states for your application.

## Examples

### Basic Usage

```tsx
import { useState } from 'react';
import { Button, Spin } from '@bosinc/shared';
import { Stack } from '@mui/material';

export default function BasicExample() {
  const [loading, setLoading] = useState(false);

  return (
    <Stack spacing={2} alignItems="center">
      <Button onClick={() => setLoading(!loading)}>
        {loading ? 'Stop' : 'Start'}
      </Button>
      <Spin loading={loading} />
    </Stack>
  );
}
```

### With Content Wrapper

```tsx
import { useState } from 'react';
import { Button, Spin } from '@bosinc/shared';
import { Box, Stack } from '@mui/material';

export default function WrapperExample() {
  const [loading, setLoading] = useState(false);

  return (
    <Stack direction="column" spacing={2}>
      <Button onClick={() => setLoading(!loading)}>
        {loading ? 'Stop Loading' : 'Start Loading'}
      </Button>
      <Spin loading={loading}>
        <Box sx={{ p: 2, border: '1px solid #ccc' }}>Content here</Box>
      </Spin>
    </Stack>
  );
}
```

### Custom Size

```tsx
import { useState } from 'react';
import { Button, Spin } from '@bosinc/shared';
import { Stack } from '@mui/material';

export default function CustomSizeExample() {
  const [loading, setLoading] = useState(false);

  return (
    <Stack direction="column" spacing={2}>
      <Button onClick={() => setLoading(!loading)}>Toggle Loading</Button>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Spin size={20} loading={loading} />
        <Spin size={30} loading={loading} />
        <Spin size={40} loading={loading} />
      </Stack>
    </Stack>
  );
}
```

### With Tip

```tsx
import { useState } from 'react';
import { Button, Spin } from '@bosinc/shared';
import { Stack } from '@mui/material';

export default function TipExample() {
  const [loading, setLoading] = useState(false);

  return (
    <Stack spacing={2} alignItems="center" direction="column">
      <Button onClick={() => setLoading(!loading)}>Toggle</Button>
      <Spin loading={loading} tip="Loading..." />
    </Stack>
  );
}
```

### Fullscreen Mode

```tsx
import { useState } from 'react';
import { Button, Spin } from '@bosinc/shared';
import { Stack, Typography } from '@mui/material';

export default function FullscreenExample() {
  const [loading, setLoading] = useState(false);

  return (
    <Stack spacing={2}>
      <Typography>
        Click the button to show fullscreen loading for 2 seconds
      </Typography>
      <Button
        onClick={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 2000);
        }}
      >
        Show Fullscreen Loading
      </Button>
      <Spin loading={loading} fullscreen tip="Loading data..." />
    </Stack>
  );
}
```

### Custom Indicator

```tsx
import { useState } from 'react';
import { Button, Spin } from '@bosinc/shared';
import { CircularProgress, Stack } from '@mui/material';

export default function CustomIndicatorExample() {
  const [loading, setLoading] = useState(false);
  const customSpinner = <CircularProgress color="secondary" />;

  return (
    <Stack spacing={2} alignItems="center" direction="column">
      <Button onClick={() => setLoading(!loading)}>Toggle</Button>
      <Spin loading={loading} indicator={customSpinner} />
    </Stack>
  );
}
```

### Determinate Progress

```tsx
import { useState, useEffect } from 'react';
import { Button, Spin } from '@bosinc/shared';
import { CircularProgress, Stack } from '@mui/material';

export default function ProgressExample() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (loading && progress < 100) {
      timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress >= 100) {
            setLoading(false);
            return 100;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 200);
    }
    return () => clearInterval(timer);
  }, [loading, progress]);

  const progressSpinner = (
    <CircularProgress variant="determinate" value={progress} />
  );

  const handleStart = () => {
    setProgress(0);
    setLoading(true);
  };

  return (
    <Stack direction="column" spacing={2} alignItems="center">
      <Button onClick={handleStart} disabled={loading}>
        Start Progress
      </Button>
      <Spin
        loading={loading}
        indicator={progressSpinner}
        tip={`${Math.round(progress)}%`}
      />
    </Stack>
  );
}
```

## API

### SpinProps

| Parameter  | Description                      | Type      | Required | Default |
| ---------- | -------------------------------- | --------- | -------- | ------- |
| children   | Content to be wrapped (optional) | ReactNode | ❌       | -       |
| loading    | Whether to show loading state    | boolean   | ❌       | true    |
| size       | Size of the spinner in pixels    | number    | ❌       | -       |
| indicator  | Custom loading indicator         | ReactNode | ❌       | -       |
| tip        | Description text below spinner   | ReactNode | ❌       | -       |
| fullscreen | Show fullscreen backdrop         | boolean   | ❌       | false   |

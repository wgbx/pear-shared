---
title: Spin
---

# Spin

基于 MUI CircularProgress 构建的加载指示器组件，为应用提供灵活的加载状态展示。

## 示例

### 基础用法

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

### 包裹内容

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

### 自定义尺寸

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

### 带提示文字

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

### 全屏模式

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

### 自定义指示器

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

### 确定进度

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

| 参数       | 说明                   | 类型      | 是否必填 | 默认值 |
| ---------- | ---------------------- | --------- | -------- | ------ |
| children   | 需要包裹的内容（可选） | ReactNode | ❌       | -      |
| loading    | 是否显示加载状态       | boolean   | ❌       | true   |
| size       | 指示器尺寸（像素）     | number    | ❌       | -      |
| indicator  | 自定义加载指示器       | ReactNode | ❌       | -      |
| tip        | 指示器下方的说明文字   | ReactNode | ❌       | -      |
| fullscreen | 显示全屏遮罩           | boolean   | ❌       | false  |

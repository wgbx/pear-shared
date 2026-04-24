# Drawer

Unified responsive drawer component that renders a `Dialog` on desktop and a `Drawer` on mobile.

## Example

```tsx
import { Button, Drawer } from '@bosinc/shared';
import { useState } from 'react';
import { Stack } from '@mui/material';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Drawer
        open={open}
        title="Drawer Title"
        onClose={() => setOpen(false)}
        footer={
          <Stack sx={{ p: 2 }} onClick={() => setOpen(false)}>
            <Button>Drawer Footer</Button>
          </Stack>
        }
      >
        <Stack sx={{ p: 2 }}>Drawer content</Stack>
      </Drawer>
    </>
  );
};
```

## PromptDrawer

```tsx
import { Button, DrawerFooter, PromptDrawer } from '@bosinc/shared';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open PromptDrawer</Button>
      <PromptDrawer
        open={open}
        onClose={() => setOpen(false)}
        title="Dialog Title"
        description="This is where your dialog message or instructions will appear. Keep it concise and relevant to the action being taken."
        footer={
          <DrawerFooter
            items={[
              { label: 'Cancel', type: 'error', onClick: () => setOpen(false) },
              {
                label: 'Confirm',
                variant: 'contained',
                onClick: async () => {
                  await new Promise<void>((resolve) => {
                    setTimeout(resolve, 2000);
                  });
                  setOpen(false);
                },
              },
            ]}
          />
        }
      />
    </>
  );
};
```

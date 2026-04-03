'use client';

import { CloseFill } from '@mingcute/react';
import type { AlertProps } from '@mui/material';
import { IconButton, Stack } from '@mui/material';
import type { ReactNode } from 'react';

export interface AlertActionProps {
  showClose?: boolean;
  onClose?: NonNullable<AlertProps['onClose']>;
  action?: (onClose?: NonNullable<AlertProps['onClose']>) => ReactNode;
  bottomAction?: ReactNode;
  color?: string;
}

export function AlertAction({
  showClose,
  onClose,
  action,
  color,
}: AlertActionProps) 
{
  if (showClose) {
    return (
      <IconButton onClick={onClose} size="small">
        <CloseFill style={{ color: `${color} !important`,width: '20px', height: '20px' }} />
      </IconButton>
    );
  }

  if (action) {
    return (
      <Stack
        sx={{
          gap: 2,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {action(onClose)}
      </Stack>
    );
  }

  return null;
}

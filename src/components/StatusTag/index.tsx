import { Stack, styled, Typography } from '@mui/material';
import { useCreation } from 'ahooks';
import { type ReactElement } from 'react';

import type { StatusConfig, StatusTagProps, StatusType } from './type';

const StatusTagRoot = styled(Stack, {
  name: 'StatusTag',
  slot: 'root',
})(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: 18,
  padding: theme.spacing(0, 0.75),
  borderRadius: theme.spacing(5),
}));

const StatusTagLabel = styled(Typography, {
  name: 'StatusTag',
  slot: 'label',
})(() => ({
  fontWeight: 600,
  fontSize: '0.625rem',
  textWrap: 'nowrap',
}));

const STATUS_CONFIG: Record<StatusType, StatusConfig> = {
  default: {
    bgcolor: 'shades.100',
    color: 'shades.900',
  },
  success: {
    bgcolor: 'green.100',
    color: 'green.900',
  },
  warning: {
    bgcolor: 'orange.100',
    color: 'orange.900',
  },
  error: {
    bgcolor: 'red.700',
    color: 'white.a100',
  },
  info: {
    bgcolor: 'blue.100',
    color: 'blue.900',
  },
};

export function StatusTag({
  type,
  label,
  config,
  slotProps,
}: StatusTagProps): ReactElement {
  const defaultConfig = useCreation(() => {
    return STATUS_CONFIG[type ?? 'default'];
  }, [type]);

  return (
    <StatusTagRoot
      {...slotProps?.root}
      sx={{
        backgroundColor: config?.bgcolor ?? defaultConfig.bgcolor,
        ...slotProps?.root?.sx,
      }}
    >
      <StatusTagLabel
        {...slotProps?.text}
        sx={{
          color: config?.color ?? defaultConfig.color,
          ...slotProps?.text?.sx,
        }}
      >
        {config?.label ?? label}
      </StatusTagLabel>
    </StatusTagRoot>
  );
}

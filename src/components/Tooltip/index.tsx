import {
  Stack,
  Tooltip as MuiTooltip,
  Typography,
  type TooltipProps as MuiTooltipProps,
} from '@mui/material';
import type { ReactNode } from 'react';

export interface TooltipProps extends Omit<MuiTooltipProps, 'title'> {
  title?: ReactNode;
  description: ReactNode;
  action?: ReactNode;
  arrow?: boolean;
  customContent?: ReactNode;
}

export function Tooltip(props: TooltipProps) {
  const {
    title,
    description,
    action,
    arrow = true,
    slotProps,
    customContent = false,
    ...restProps
  } = props;

  return (
    <MuiTooltip
      {...restProps}
      title={
        customContent ? (
          customContent
        ) : (
          <Stack sx={{ gap: 1, maxWidth: 240 }}>
            {title && (
              <Typography
                sx={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'common.white',
                }}
              >
                {title}
              </Typography>
            )}
            {description && (
              <Typography
                sx={{
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  color: 'common.white',
                }}
              >
                {description}
              </Typography>
            )}
          </Stack>
        )
      }
      arrow={arrow}
      slotProps={{
        tooltip: {
          sx: {
            bgcolor: 'shades.800',
            borderRadius: 2,
            p: 1.5,
            '& .MuiTooltip-arrow': {
              color: 'shades.800',
            },
          },
          ...slotProps?.tooltip,
        },
        arrow: {
          sx: {
            color: 'shades.800',
          },
          ...slotProps?.arrow,
        },
      }}
    />
  );
}

import { Tooltip as MuiTooltip } from '@mui/material';

import { DefaultContent } from './DefaultContent';
import { TooltipProps } from './type';

export function Tooltip(props: TooltipProps) {
  const {
    title,
    description,
    action,
    arrow = true,
    slotProps,
    customContent,
    ...restProps
  } = props;

  return (
    <MuiTooltip
      {...restProps}
      title={
        customContent ?? (
          <DefaultContent title={title} description={description} action={action} />
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

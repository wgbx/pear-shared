import { SvgIcon, type SvgIconProps, type SxProps } from '@mui/material';
import type { ElementType } from 'react';

type RenderSvgIconProps = SvgIconProps;

export function RenderSvgIcon({ sx, ...restProps }: RenderSvgIconProps) {
  return <SvgIcon inheritViewBox {...restProps} sx={sx} />;
}

export function CreateSvgIconComponent(component?: ElementType, defaultProps?: RenderSvgIconProps) {
  return function SvgIconComponent(props: RenderSvgIconProps) {
    return (
      <RenderSvgIcon
        {...defaultProps}
        {...props}
        sx={{ ...defaultProps?.sx, ...props.sx } as SxProps}
        component={component}
      />
    );
  };
}

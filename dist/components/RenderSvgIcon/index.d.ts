import { type SvgIconProps } from '@mui/material';
import type { ElementType } from 'react';
type RenderSvgIconProps = SvgIconProps;
export declare function RenderSvgIcon({ sx, ...restProps }: RenderSvgIconProps): import("react/jsx-runtime").JSX.Element;
export declare function CreateSvgIconComponent(component?: ElementType, defaultProps?: RenderSvgIconProps): (props: RenderSvgIconProps) => import("react/jsx-runtime").JSX.Element;
export {};

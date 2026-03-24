import { type StackProps, type SvgIconProps, type TypographyProps } from '@mui/material';
import { type ComponentType, type ReactNode } from 'react';
interface InfoBannerProps {
    children?: ReactNode;
    description?: ReactNode;
    icon?: ComponentType<SvgIconProps>;
    slotProps?: {
        root?: StackProps;
        description?: TypographyProps;
        icon?: SvgIconProps;
    };
}
export declare function InfoBanner({ children, description, icon: IconComponent, slotProps, }: InfoBannerProps): import("react/jsx-runtime").JSX.Element;
export {};

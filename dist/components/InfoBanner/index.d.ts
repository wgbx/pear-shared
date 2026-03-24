import React from 'react';
import { type TypographyProps, type StackProps } from '@mui/material';
import { type ReactNode, type ForwardRefExoticComponent, type RefAttributes } from 'react';
import { type IconProps } from '@mingcute/react';
interface InfoBannerProps {
    children?: ReactNode;
    description?: ReactNode;
    icon?: ForwardRefExoticComponent<Omit<IconProps, 'ref'> & RefAttributes<SVGSVGElement>>;
    slotProps?: {
        root?: StackProps;
        description?: TypographyProps;
        icon?: Omit<IconProps, 'ref'>;
    };
}
export declare function InfoBanner({ children, description, icon: IconComponent, slotProps }: InfoBannerProps): React.JSX.Element;
export {};

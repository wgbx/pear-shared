import { type TypographyProps, type StackProps } from '@mui/material';
import { type ReactNode, type ComponentType, type SVGProps } from 'react';
interface InfoBannerProps {
    children?: ReactNode;
    description?: ReactNode;
    icon?: ComponentType<SVGProps<SVGSVGElement>>;
    slotProps?: {
        root?: StackProps;
        description?: TypographyProps;
        icon?: SVGProps<SVGSVGElement>;
    };
}
export declare function InfoBanner({ children, description, icon: IconComponent, slotProps }: InfoBannerProps): import("react/jsx-runtime").JSX.Element;
export {};

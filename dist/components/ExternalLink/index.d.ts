import { type LinkProps } from '@mui/material';
import type { ReactNode } from 'react';
interface ExternalLinkProps extends LinkProps {
    children: ReactNode;
    href: string;
}
export declare function ExternalLink({ children, href, target, rel, ...restProps }: ExternalLinkProps): import("react/jsx-runtime").JSX.Element;
export {};

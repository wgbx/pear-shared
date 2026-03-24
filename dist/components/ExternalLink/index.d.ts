import { type LinkProps } from '@mui/material';
import type { ReactNode } from 'react';
import React from 'react';
interface ExternalLinkProps extends LinkProps {
    children: ReactNode;
    href: string;
}
export declare function ExternalLink({ children, href, target, rel, ...restProps }: ExternalLinkProps): React.JSX.Element;
export {};

import type { AlertProps } from '@mui/material';
import type { ReactNode } from 'react';
export interface AlertActionProps {
    showClose?: boolean;
    onClose?: NonNullable<AlertProps['onClose']>;
    action?: (onClose?: NonNullable<AlertProps['onClose']>) => ReactNode;
    bottomAction?: ReactNode;
    color?: string;
}
export declare function AlertAction({ showClose, onClose, action, color, }: AlertActionProps): import("react/jsx-runtime").JSX.Element | null;

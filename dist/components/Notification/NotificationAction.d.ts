import type { AlertProps } from '@mui/material';
import type { ReactNode } from 'react';
export interface NotificationActionProps {
    showClose?: boolean;
    onClose?: NonNullable<AlertProps['onClose']>;
    action?: (onClose?: NonNullable<AlertProps['onClose']>) => ReactNode;
    bottomAction?: ReactNode;
    color?: string;
}
export declare function NotificationAction({ showClose, onClose, action, color, }: NotificationActionProps): import("react/jsx-runtime").JSX.Element | null;

import type { AlertProps } from '@mui/material';
import type { ReactNode } from 'react';
import React from 'react';
export interface NotificationActionProps {
    showClose?: boolean;
    onClose?: NonNullable<AlertProps['onClose']>;
    action?: (onClose?: NonNullable<AlertProps['onClose']>) => ReactNode;
    bottomAction?: ReactNode;
    color?: string;
}
export declare function NotificationAction({ showClose, onClose, action, color, }: NotificationActionProps): React.JSX.Element | null;

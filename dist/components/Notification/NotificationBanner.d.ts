import { type AlertProps, type SnackbarProps, type SxProps } from '@mui/material';
import type { ReactElement, ReactNode } from 'react';
export declare const NotificationSeverity: readonly ["success", "warning", "info", "error"];
type NotificationSeverityType = (typeof NotificationSeverity)[number];
export interface CommonNotificationBannerProps extends Pick<SnackbarProps, 'onClose'> {
    icon?: ReactNode;
    sx?: SxProps;
    hideAfter?: number | null;
    severity?: NotificationSeverityType;
    title?: ReactNode;
    text?: ReactNode;
    snackbarProps?: SnackbarProps;
}
export interface NotificationBannerWithClose extends CommonNotificationBannerProps {
    action?: never;
    bottomAction?: ReactNode;
    showClose?: boolean;
}
export interface NotificationBannerWithAction extends CommonNotificationBannerProps {
    action?: (onClose?: NonNullable<AlertProps['onClose']>) => ReactNode;
    showClose?: never;
    bottomAction?: ReactNode;
}
export type NotificationBannerProps = NotificationBannerWithClose | NotificationBannerWithAction;
export declare function NotificationBanner({ text, icon, title, sx, snackbarProps, action, onClose, bottomAction, severity, hideAfter, showClose, }: NotificationBannerProps): ReactElement;
export {};

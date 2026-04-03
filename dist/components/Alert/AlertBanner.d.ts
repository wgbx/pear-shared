import { type AlertProps, type SnackbarProps, type SxProps } from '@mui/material';
import type { ReactElement, ReactNode } from 'react';
export declare const AlertSeverity: readonly ["success", "warning", "info", "error"];
type AlertSeverityType = (typeof AlertSeverity)[number];
export interface CommonAlertBannerProps extends Pick<SnackbarProps, 'onClose'> {
    icon?: ReactNode;
    sx?: SxProps;
    hideAfter?: number | null;
    severity?: AlertSeverityType;
    title?: ReactNode;
    text?: ReactNode;
    snackbarProps?: SnackbarProps;
}
export interface AlertBannerWithClose extends CommonAlertBannerProps {
    action?: never;
    bottomAction?: ReactNode;
    showClose?: boolean;
}
export interface AlertBannerWithAction extends CommonAlertBannerProps {
    action?: (onClose?: NonNullable<AlertProps['onClose']>) => ReactNode;
    showClose?: never;
    bottomAction?: ReactNode;
}
export type AlertBannerProps = AlertBannerWithClose | AlertBannerWithAction;
export declare function AlertBanner({ text, icon, title, sx, snackbarProps, action, onClose, bottomAction, severity, hideAfter, showClose, }: AlertBannerProps): ReactElement;
export {};

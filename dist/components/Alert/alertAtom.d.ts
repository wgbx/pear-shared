import type { AlertBannerProps, AlertBannerWithAction, AlertBannerWithClose } from './AlertBanner';
type AlertSeverity = AlertBannerProps['severity'];
type BaseAlertPayload = {
    hideAfter?: number;
    text: string;
    title?: string;
    sx?: AlertBannerProps['sx'];
};
type ClosableAlertPayload = BaseAlertPayload & {
    showClose?: AlertBannerWithClose['showClose'];
    icon?: AlertBannerWithClose['icon'];
};
type ActionableAlertPayload = BaseAlertPayload & {
    action: AlertBannerWithAction['action'];
};
export type AlertCloseProps = ClosableAlertPayload;
export type AlertWithActionProps = ActionableAlertPayload;
export type AlertState = ({
    severity?: AlertSeverity;
} & ClosableAlertPayload) | ({
    severity?: AlertSeverity;
} & ActionableAlertPayload);
export declare const alertAtom: import("jotai").PrimitiveAtom<AlertState | undefined> & {
    init: AlertState | undefined;
};
export {};

import type { NotificationActionProps, NotificationCloseProps } from './notificationAtom';
type NotificationParams = string | NotificationCloseProps | NotificationActionProps;
type NotifyFn = (params: NotificationParams) => void;
export declare function useNotification(): {
    error: NotifyFn;
    info: NotifyFn;
    success: NotifyFn;
    warning: NotifyFn;
    customize: NotifyFn;
    closeNotification: (this: unknown) => void;
};
export {};

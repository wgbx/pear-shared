import type { AlertCloseProps, AlertWithActionProps } from './alertAtom';
type AlertParams = string | AlertCloseProps | AlertWithActionProps;
type NotifyFn = (params: AlertParams) => void;
export declare function useAlert(): {
    error: NotifyFn;
    info: NotifyFn;
    success: NotifyFn;
    warning: NotifyFn;
    customize: NotifyFn;
    closeAlert: (this: unknown) => void;
};
export {};

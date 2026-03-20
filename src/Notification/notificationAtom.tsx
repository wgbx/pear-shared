import { atom } from 'jotai';

import type {
  NotificationBannerProps,
  NotificationBannerWithAction,
  NotificationBannerWithClose,
} from './NotificationBanner';

type NotificationSeverity = NotificationBannerProps['severity'];

type BaseNotificationPayload = {
  hideAfter?: number;
  text: string;
  title?: string;
  sx?: NotificationBannerProps['sx'];
};

type ClosableNotificationPayload = BaseNotificationPayload & {
  showClose?: NotificationBannerWithClose['showClose'];
  icon?: NotificationBannerWithClose['icon'];
};

type ActionableNotificationPayload = BaseNotificationPayload & {
  action: NotificationBannerWithAction['action'];
};

export type NotificationCloseProps = ClosableNotificationPayload;
export type NotificationActionProps = ActionableNotificationPayload;

export type NotificationState =
  | ({ severity?: NotificationSeverity } & ClosableNotificationPayload)
  | ({ severity?: NotificationSeverity } & ActionableNotificationPayload);

export const notificationAtom = atom<NotificationState | undefined>(undefined);

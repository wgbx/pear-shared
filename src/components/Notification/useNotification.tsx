import { useMemoizedFn } from 'ahooks';
import { useSetAtom } from 'jotai';

import type {
  NotificationActionProps,
  NotificationCloseProps,
} from './notificationAtom';
import { notificationAtom } from './notificationAtom';
import { NotificationSeverity } from './NotificationBanner';

type NotificationType = (typeof NotificationSeverity)[number];
type NotificationParams =
  | string
  | NotificationCloseProps
  | NotificationActionProps;

type NotifyFn = (params: NotificationParams) => void;

function normalizeParams(params: NotificationParams) {
  return typeof params === 'string' ? { text: params } : params;
}

export function useNotification() {
  const setNotification = useSetAtom(notificationAtom);

  const notify = useMemoizedFn(
    (params: NotificationParams, severity?: NotificationType) => {
      setNotification({
        ...normalizeParams(params),
        severity,
      });
    },
  );

  const closeNotification = useMemoizedFn(() => {
    setNotification(undefined);
  });

  const createNotifyByType = useMemoizedFn(
    (severity?: NotificationType): NotifyFn => {
      return (params) => notify(params, severity);
    },
  );

  return {
    error: createNotifyByType('error'),
    info: createNotifyByType('info'),
    success: createNotifyByType('success'),
    warning: createNotifyByType('warning'),
    customize: createNotifyByType(),
    closeNotification,
  };
}

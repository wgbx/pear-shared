import { useMemoizedFn } from 'ahooks';
import { useSetAtom } from 'jotai';

import type {
  AlertCloseProps,
  AlertWithActionProps,
} from './alertAtom';
import { alertAtom } from './alertAtom';
import { AlertSeverity } from './AlertBanner';

type AlertKind = (typeof AlertSeverity)[number];
type AlertParams =
  | string
  | AlertCloseProps
  | AlertWithActionProps;

type NotifyFn = (params: AlertParams) => void;

function normalizeParams(params: AlertParams) {
  return typeof params === 'string' ? { text: params } : params;
}

export function useAlert() {
  const setAlert = useSetAtom(alertAtom);

  const notify = useMemoizedFn(
    (params: AlertParams, severity?: AlertKind) => {
      setAlert({
        ...normalizeParams(params),
        severity,
      });
    },
  );

  const closeAlert = useMemoizedFn(() => {
    setAlert(undefined);
  });

  const createNotifyByType = useMemoizedFn(
    (severity?: AlertKind): NotifyFn => {
      return (params) => notify(params, severity);
    },
  );

  return {
    error: createNotifyByType('error'),
    info: createNotifyByType('info'),
    success: createNotifyByType('success'),
    warning: createNotifyByType('warning'),
    customize: createNotifyByType(),
    closeAlert,
  };
}

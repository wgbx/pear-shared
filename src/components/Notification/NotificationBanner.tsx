import {
  AlertLine,
  CheckCircleLine,
  InformationLine,
  WarningLine,
} from '@mingcute/react';
import {
  type AlertProps,
  type ClickAwayListenerProps,
  type SnackbarProps,
  type SxProps,
  Alert,
  AlertTitle,
  Snackbar,
  Stack,
} from '@mui/material';
import { useCreation, useMemoizedFn } from 'ahooks';
import type { ComponentType, ReactElement, ReactNode } from 'react';

import { NotificationAction } from './NotificationAction';

export const NotificationSeverity = [
  'success',
  'warning',
  'info',
  'error',
] as const;

type NotificationSeverityType = (typeof NotificationSeverity)[number];

export interface CommonNotificationBannerProps
  extends Pick<SnackbarProps, 'onClose'> {
  icon?: ReactNode;
  sx?: SxProps;
  hideAfter?: number | null;
  severity?: NotificationSeverityType;
  title?: ReactNode;
  text?: ReactNode;
  snackbarProps?: SnackbarProps;
}

export interface NotificationBannerWithClose
  extends CommonNotificationBannerProps {
  action?: never;
  bottomAction?: ReactNode;
  showClose?: boolean;
}

export interface NotificationBannerWithAction
  extends CommonNotificationBannerProps {
  action?: (onClose?: NonNullable<AlertProps['onClose']>) => ReactNode;
  showClose?: never;
  bottomAction?: ReactNode;
}

export type NotificationBannerProps =
  | NotificationBannerWithClose
  | NotificationBannerWithAction;

const SEVERITY_CONFIG: Record<
  NotificationSeverityType,
  {
    icon: ComponentType;
    backgroundColor: string;
  }
> = {
  error: {
    icon: WarningLine,
    backgroundColor: 'green.800',
  },
  success: {
    icon: CheckCircleLine,
    backgroundColor: 'green.50',
  },
  warning: {
    icon: AlertLine,
    backgroundColor: 'orange.50',
  },
  info: {
    icon: InformationLine,
    backgroundColor: '#EBF5EF',
  },
};

export function NotificationBanner({
  text,
  icon,
  title,
  sx,
  snackbarProps,
  action,
  onClose,
  bottomAction,
  severity = 'info',
  hideAfter = 8,
  showClose = false,
}: NotificationBannerProps): ReactElement {
  const { icon: DefaultIcon, backgroundColor } = SEVERITY_CONFIG[severity];

  const handleClickAway = useMemoizedFn<
    NonNullable<ClickAwayListenerProps['onClickAway']>
  >((event) => {
    onClose?.(event, 'clickaway');
  });

  const handleActionClose = useMemoizedFn<NonNullable<AlertProps['onClose']>>(
    (event) => {
      onClose?.(event, 'timeout');
    },
  );

  const actionNode = useCreation(() => {
    return action || showClose ? (
      <NotificationAction
        action={action}
        onClose={handleActionClose}
        showClose={showClose}
      />
    ) : null;
  }, [action, showClose]);

  const autoHideDuration = useCreation(() => {
    if (hideAfter !== null) {
      return hideAfter * 1000;
    }
    return null;
  }, [hideAfter]);

  return (
    <Snackbar
      data-track-location="Notification"
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      ClickAwayListenerProps={{ onClickAway: handleClickAway }}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      open
      transitionDuration={300}
      {...snackbarProps}
      sx={{ zIndex: 9999, pointerEvents: 'none', ...snackbarProps?.sx }}
    >
      <Alert
        severity={severity}
        icon={icon ?? <DefaultIcon />}
        action={actionNode}
        sx={{
          background: backgroundColor,
          pointerEvents: 'auto',
          borderRadius: 2,
          color: 'shades.900',
          boxShadow:
            '0 7px 9px -4px rgba(0, 0, 0, 0.07), 0 14px 21px 2px rgba(0, 0, 0, 0.05), 0 5px 26px 4px rgba(0, 0, 0, 0.01)',
          '& .MuiAlert-action': {
            pt: 0,
            margin: 0,
          },
          ...sx,
        }}
      >
        <Stack sx={{ flexDirection: { md: 'row' }, gap: 1 }}>
          <Stack sx={{ gap: 0.5 }}>
            {title ? (
              <AlertTitle gutterBottom={Boolean(text)} sx={{ fontWeight: 600 }}>
                {title}
              </AlertTitle>
            ) : null}
            {text ?? null}
          </Stack>
          {bottomAction ?? null}
        </Stack>
      </Alert>
    </Snackbar>
  );
}

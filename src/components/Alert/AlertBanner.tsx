import { AlertLine, CheckCircleLine, WarningLine } from '@mingcute/react';
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

import { AlertAction } from './AlertAction';

export const AlertSeverity = ['success', 'warning', 'error'] as const;

type AlertSeverityType = typeof AlertSeverity[number];

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

const SEVERITY_CONFIG: Record<
  AlertSeverityType,
  {
    icon: ComponentType;
    backgroundColor: string;
    fontColor: string;
  }
> = {
  error: {
    icon: WarningLine,
    backgroundColor: '#FAEAED',
    fontColor: '#4C061C',
  },
  success: {
    icon: CheckCircleLine,
    backgroundColor: '#EBF5EF',
    fontColor: '#082D12',
  },
  warning: {
    icon: AlertLine,
    backgroundColor: '#FFF4E0',
    fontColor: '#5C2201',
  },
};

const DEFAULT_CONFIG = {
  icon: AlertLine,
  backgroundColor: '#F2F2F2',
  fontColor: 'rgba(0, 0, 0, 0.87)',
};

export function AlertBanner({
  text,
  icon,
  title,
  sx,
  snackbarProps,
  action,
  onClose,
  bottomAction,
  severity,
  hideAfter = 8,
  showClose = false,
}: AlertBannerProps): ReactElement {
  const {
    icon: DefaultIcon,
    backgroundColor,
    fontColor,
  } = severity ? SEVERITY_CONFIG[severity] : DEFAULT_CONFIG;

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
      <AlertAction
        action={action}
        onClose={handleActionClose}
        showClose={showClose}
        color={fontColor}
      />
    ) : null;
  }, [action, showClose, fontColor]);

  const autoHideDuration = useCreation(() => {
    if (hideAfter !== null) {
      return hideAfter * 1000;
    }
    return null;
  }, [hideAfter]);

  return (
    <Snackbar
      data-track-location="Alert"
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
          color: fontColor,
          boxShadow:
            '0 7px 9px -4px rgba(0, 0, 0, 0.07), 0 14px 21px 2px rgba(0, 0, 0, 0.05), 0 5px 26px 4px rgba(0, 0, 0, 0.01)',
          '& .MuiAlert-icon': {
            position: 'relative',
            top: 1,
            '& svg': {
              width: 20,
              height: 20,
            },
          },
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

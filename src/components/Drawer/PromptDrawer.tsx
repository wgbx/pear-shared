import {
  type ButtonProps,
  Stack,
  Typography,
  styled,
  type SxProps,
  type Theme,
} from '@mui/material';
import { type ReactElement, type ReactNode } from 'react';
import { Button } from '../Button';
import { Drawer } from './Drawer';
import { type DrawerProps } from './type';

export interface PromptDrawerProps
  extends Omit<DrawerProps, 'children' | 'footer'> {
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  contentSx?: SxProps<Theme>;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmText?: ReactNode;
  cancelText?: ReactNode;
  confirmButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
}

const PromptContent = styled(Stack, {
  name: 'PromptDrawer',
  slot: 'content',
})(({ theme }) => ({
  paddingInline: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  paddingTop: theme.spacing(1),
  gap: theme.spacing(1),
}));

const PromptTitle = styled(Typography, {
  name: 'PromptDrawer',
  slot: 'title',
})(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 700,
  color: theme.palette.shades[900],
}));

const PromptDescription = styled(Typography, {
  name: 'PromptDrawer',
  slot: 'description',
})(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.shades[900],
}));

const PromptActions = styled(Stack, {
  name: 'PromptDrawer',
  slot: 'actions',
})(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(1.25),
  padding: theme.spacing(2),
}));

export function PromptDrawer({
  title,
  description,
  children,
  footer,
  onClose,
  onConfirm,
  onCancel,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  ...drawerProps
}: PromptDrawerProps): ReactElement {
  return (
    <Drawer
      onClose={onClose}
      footer={
        footer ?? (
          <PromptActions>
            <Button
              fullWidth
              label={cancelText}
              variant="outlined"
              onClick={onCancel ?? onClose}
            />
            <Button
              fullWidth
              label={confirmText}
              variant="contained"
              onClick={onConfirm}
            />
          </PromptActions>
        )
      }
      {...drawerProps}
    >
      <PromptContent>
        {title ? <PromptTitle>{title}</PromptTitle> : null}
        {description ? (
          <PromptDescription>{description}</PromptDescription>
        ) : null}
      </PromptContent>
      {children}
    </Drawer>
  );
}

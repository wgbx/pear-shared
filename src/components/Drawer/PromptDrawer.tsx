import { Stack, Typography, styled } from '@mui/material';
import { Drawer } from './Drawer';
import { type DrawerProps, type PromptDrawerProps } from './type';

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

function splitPromptDrawerProps(props: PromptDrawerProps) {
  const {
    title,
    description,
    children,
    contentSx,
    onConfirm,
    onCancel,
    confirmText,
    cancelText,
    confirmButtonProps,
    cancelButtonProps,
    ...drawerProps
  } = props;
  void contentSx;
  void onConfirm;
  void onCancel;
  void confirmText;
  void cancelText;
  void confirmButtonProps;
  void cancelButtonProps;
  return {
    title,
    description,
    children,
    drawerProps: drawerProps as DrawerProps,
  };
}

export function PromptDrawer(props: PromptDrawerProps) {
  const { title, description, children, drawerProps } =
    splitPromptDrawerProps(props);

  return (
    <Drawer {...drawerProps}>
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

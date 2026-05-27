import { Stack, Typography, styled } from '@mui/material';
import { Drawer } from './Drawer';
import { type PromptDrawerProps } from './type';
import { DrawerFooter } from './DrawerFooter';

const PromptContent = styled(Stack, {
  name: 'PromptDrawer',
  slot: 'content',
})(({ theme }) => ({
  paddingInline: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  paddingTop: theme.spacing(1),
  gap: theme.spacing(1),
}));

const PromptHeading = styled(Typography, {
  name: 'PromptDrawer',
  slot: 'heading',
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

export function PromptDrawer(props: PromptDrawerProps) {
  const { heading, description, children, actions, ...resetProps } = props;

  return (
    <Drawer
      footer={actions?.length ? <DrawerFooter items={actions} /> : undefined}
      {...resetProps}
    >
      <PromptContent>
        {heading ? <PromptHeading>{heading}</PromptHeading> : null}
        {description ? (
          <PromptDescription>{description}</PromptDescription>
        ) : null}
      </PromptContent>
      {children}
    </Drawer>
  );
}

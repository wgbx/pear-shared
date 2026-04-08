import { Stack, Typography } from '@mui/material';
import { DefaultContentProps } from './type';

export function DefaultContent(props: DefaultContentProps) {
  const { title, description, action } = props;
  return (
    <Stack sx={{ gap: 1, maxWidth: 240 }}>
      <Stack sx={{ gap: 1 }}>
        {title && (
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 700,
              color: 'common.white',
            }}
          >
            {title}
          </Typography>
        )}
        {description && (
          <Typography
            sx={{
              fontSize: '0.875rem',
              fontWeight: 400,
              color: 'common.white',
            }}
          >
            {description}
          </Typography>
        )}
      </Stack>

      {action && <Stack sx={{ alignSelf: 'flex-end' }}>{action}</Stack>}
    </Stack>
  );
}

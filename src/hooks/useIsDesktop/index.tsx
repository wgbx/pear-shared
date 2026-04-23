import { useMediaQuery, useTheme } from '@mui/material';
import { type Breakpoint } from '@mui/material/styles';

export function useIsDesktop(breakpoint: Breakpoint = 'md') {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up(breakpoint));

  return isDesktop;
}

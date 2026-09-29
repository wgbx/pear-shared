import { useMediaQuery, useTheme } from '@mui/material';
import { type Breakpoint } from '@mui/material/styles';
import { MOBILE_MAX_WIDTH } from '@/constants';

const DESKTOP_MEDIA_QUERY = `not all and (max-width: ${MOBILE_MAX_WIDTH}px)`;

export function useIsDesktop(breakpoint?: Breakpoint) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(
    breakpoint ? theme.breakpoints.up(breakpoint) : DESKTOP_MEDIA_QUERY,
  );

  return isDesktop;
}

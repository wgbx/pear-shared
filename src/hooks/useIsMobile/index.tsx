import { useMediaQuery } from '@mui/material';
import { MOBILE_MAX_WIDTH } from '@/constants';

export function useIsMobile() {
  const isMobile = useMediaQuery(`(max-width: ${MOBILE_MAX_WIDTH}px)`);

  return isMobile;
}

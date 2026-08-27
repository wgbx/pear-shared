import type { BoxProps } from '@mui/material';
import type { ImgHTMLAttributes } from 'react';

import type { OptimizeImageOptions } from '@/utils/image';

export interface ImageProps
  extends Omit<
      ImgHTMLAttributes<HTMLImageElement>,
      'src' | 'width' | 'height' | 'alt'
    >,
    Pick<OptimizeImageOptions, 'quality' | 'strategy'> {
  src?: string;
  alt: string;
  fallbackSrc?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  disableOptimize?: boolean;
  slotProps?: {
    root?: Omit<
      ImgHTMLAttributes<HTMLImageElement> & { sx?: BoxProps['sx'] },
      'src' | 'alt' | 'width' | 'height'
    >;
  };
}

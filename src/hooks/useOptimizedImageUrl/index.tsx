import { useMemo } from 'react';

import { optimizeImageUrl, type OptimizeImageOptions } from '../../utils/image';

export function useOptimizedImageUrl(
  src: string,
  options?: OptimizeImageOptions,
) {
  const { width, height, quality, disabled, strategy } = options ?? {};

  return useMemo(
    () => optimizeImageUrl(src, options),
    [src, width, height, quality, disabled, strategy],
  );
}

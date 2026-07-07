import { styled } from '@mui/material';
import {
  forwardRef,
  useEffect,
  useState,
  type ReactElement,
  type Ref,
} from 'react';

import { DEFAULT_IMAGE_FALLBACK } from '../../constants/image';
import { useOptimizedImageUrl } from '../../hooks/useOptimizedImageUrl';

import type { ImageProps } from './type';

const StyledImage = styled('img', {
  name: 'Image',
  slot: 'root',
  shouldForwardProp: (prop) => prop !== 'fill',
})<{ fill?: boolean }>(({ fill }) => ({
  display: 'block',
  objectFit: 'cover',
  ...(fill ? { width: '100%', height: '100%' } : undefined),
}));

export const Image = forwardRef(function Image(
  {
    src,
    fallbackSrc = DEFAULT_IMAGE_FALLBACK,
    width,
    height,
    fill,
    disableOptimize,
    quality,
    strategy,
    alt,
    loading,
    onError,
    slotProps,
    ...restProps
  }: ImageProps,
  ref: Ref<HTMLImageElement>,
): ReactElement {
  const optimizedSrc = useOptimizedImageUrl(src ?? '', {
    width,
    height,
    quality,
    strategy,
    disabled: !src || disableOptimize,
  });

  const [useFallback, setUseFallback] = useState(!src);

  useEffect(() => {
    setUseFallback(!src);
  }, [src]);

  return (
    <StyledImage
      {...restProps}
      {...slotProps?.root}
      ref={ref}
      src={useFallback ? fallbackSrc : optimizedSrc}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      loading={loading ?? 'lazy'}
      onError={(event) => {
        setUseFallback(true);
        onError?.(event);
      }}
    />
  );
});

Image.displayName = 'Image';

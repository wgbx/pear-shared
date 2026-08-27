import { styled } from '@mui/material';
import { useMemoizedFn } from 'ahooks';
import {
  forwardRef,
  memo,
  useEffect,
  useState,
  type ReactElement,
  type Ref,
  type SyntheticEvent,
} from 'react';

import { DEFAULT_IMAGE_FALLBACK, isDebug } from '@/constants';
import { useOptimizedImageUrl } from '@/hooks/useOptimizedImageUrl';

import type { ImageProps } from './type';

const StyledImage = styled('img', {
  name: 'Image',
  slot: 'root',
  shouldForwardProp: (prop) => prop !== 'fill',
})<{ fill?: boolean }>(({ fill }) => ({
  display: 'block',
  objectFit: 'cover',
  ...(fill ? { width: '100%', height: '100%' } : undefined),
  ...(isDebug
    ? {
        outline: '3px solid #39FF14',
        outlineOffset: '2px',
      }
    : undefined),
}));

export const Image = memo(
  forwardRef(function Image(
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

    const handleError = useMemoizedFn(
      (event: SyntheticEvent<HTMLImageElement>) => {
        setUseFallback(true);
        onError?.(event);
      },
    );

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
        onError={handleError}
        {...(isDebug ? { 'data-is-debug': '1' } : undefined)}
      />
    );
  }),
);

Image.displayName = 'Image';

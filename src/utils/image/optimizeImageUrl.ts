import { Cloudinary } from '@cloudinary/url-gen';
import { Delivery, Resize } from '@cloudinary/url-gen/actions';

import {
  C_DEFAULT_SCALE_WIDTH,
  C_FIT_MAX_DIMENSION,
  C_FIT_RETINA_DPR,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_IMAGE_UPLOAD_PATH_PART,
  CLOUDINARY_QUALITY_MODE,
  CLOUDINARY_VIDEO_UPLOAD_PATH_PART,
} from '@/constants';

import type { CloudinaryQuality, OptimizeImageOptions } from './types';

const cld = new Cloudinary({
  cloud: { cloudName: CLOUDINARY_CLOUD_NAME },
  url: { queryParams: {} },
});

function isCloudinaryUrl(src: string) {
  return (
    src.includes('res.cloudinary.com') &&
    src.includes(CLOUDINARY_CLOUD_NAME) &&
    !src.includes('raw/upload')
  );
}

function isCloudinaryImageUrl(src: string) {
  return (
    isCloudinaryUrl(src) && !src.includes(CLOUDINARY_VIDEO_UPLOAD_PATH_PART)
  );
}

function isGif(src: string) {
  return src.replace(/\?.*$/, '').toLowerCase().endsWith('.gif');
}

function getPublicId(src: string) {
  const { pathname } = new URL(src);
  const pathWithoutExt = pathname.replace(/\.[a-zA-Z0-9]+$/, '');
  const match = pathWithoutExt.match(/(v\d+\/.+)$/);
  return match ? match[1] : pathWithoutExt;
}

function exceedsFitLimit(width?: number, height?: number) {
  return (
    (width !== undefined && width > C_FIT_MAX_DIMENSION) ||
    (height !== undefined && height > C_FIT_MAX_DIMENSION)
  );
}

function buildUrl(
  src: string,
  {
    width,
    height,
    quality,
    dpr,
    crop,
  }: {
    width?: number;
    height?: number;
    quality: CloudinaryQuality;
    dpr?: number;
    crop?: 'fit' | 'scale';
  },
) {
  const publicId = getPublicId(src);

  let image = cld.image(publicId);

  if (crop && (width !== undefined || height !== undefined)) {
    const resize =
      crop === 'fit' ? Resize.fit(width, height) : Resize.scale(width, height);
    image = image.resize(resize);
  }

  image = image
    .delivery(Delivery.quality(quality))
    .delivery(Delivery.format('auto'));

  if (dpr !== undefined) {
    image = image.delivery(Delivery.dpr(dpr));
  }

  return image
    .toURL()
    .replace(CLOUDINARY_IMAGE_UPLOAD_PATH_PART, '/')
    .replace(/\?.*$/, '');
}

/**
 * Optimize a Cloudinary image URL for web delivery.
 *
 * - Non-Cloudinary URLs, GIFs, and videos pass through unchanged.
 * - Without dimensions, applies `c_scale` at {@link C_DEFAULT_SCALE_WIDTH} (1024).
 * - When either dimension exceeds {@link C_FIT_MAX_DIMENSION}, applies format + quality only.
 * - Small dimensions use `c_fit` with retina DPR by default.
 */
export function optimizeImageUrl(src: string, options?: OptimizeImageOptions) {
  if (!src || options?.disabled) {
    return src ?? '';
  }

  if (!isCloudinaryImageUrl(src) || isGif(src)) {
    return src;
  }

  const quality = options?.quality ?? CLOUDINARY_QUALITY_MODE.BEST;
  const { width, height, strategy = 'fit' } = options ?? {};
  const hasDimensions = width !== undefined || height !== undefined;

  if (!hasDimensions) {
    return buildUrl(src, {
      width: C_DEFAULT_SCALE_WIDTH,
      quality,
      crop: 'scale',
    });
  }

  if (exceedsFitLimit(width, height)) {
    return buildUrl(src, { quality });
  }

  if (strategy === 'scale') {
    return buildUrl(src, { width, height, quality, crop: 'scale' });
  }

  return buildUrl(src, {
    width,
    height,
    quality,
    dpr: C_FIT_RETINA_DPR,
    crop: 'fit',
  });
}

import { CLOUDINARY_QUALITY_MODE } from '../../constants/cloudinary';

export type CloudinaryQuality =
  typeof CLOUDINARY_QUALITY_MODE[keyof typeof CLOUDINARY_QUALITY_MODE];

export type OptimizeImageOptions = {
  /** Target width in CSS pixels. Applied with retina DPR when using `fit`. */
  width?: number;
  /** Target height in CSS pixels. Applied with retina DPR when using `fit`. */
  height?: number;
  /** Defaults to {@link CLOUDINARY_QUALITY_MODE.BEST}. */
  quality?: CloudinaryQuality;
  /** When true, returns the original URL unchanged. */
  disabled?: boolean;
  /**
   * Resize strategy when dimensions are provided and within the fit limit.
   * Defaults to `fit`. Use `scale` for large preview / zoom scenarios.
   */
  strategy?: 'fit' | 'scale';
};

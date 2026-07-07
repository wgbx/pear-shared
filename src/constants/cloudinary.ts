/**
 * Cloudinary automatic quality selection (q_auto).
 *
 * Cloudinary's intelligent quality and encoding algorithms analyze each image
 * to find the optimal compression level and encoding settings based on image
 * content and the requesting browser. Using perceptual metrics and heuristics,
 * it automatically balances file size and visual quality in real time, and
 * tunes the quality per format and content. By analyzing each image
 * individually, compression can be dialed in precisely—supplemented with
 * fine-grained encoding tweaks—to significantly reduce file size with no
 * perceptible quality loss.
 *
 * Enable automatic quality selection and encoding tuning by setting the
 * `quality` transformation parameter to `auto` (i.e. `q_auto` in the URL), or
 * by applying one of the auto options as the default image quality for the
 * product environment.
 */
export const CLOUDINARY_QUALITY_AUTO = 'auto' as const;

/** Default Cloudinary cloud name; override via `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`. */
export const CLOUDINARY_CLOUD_NAME = 'dr9io1zjv';

export const CLOUDINARY_IMAGE_UPLOAD_PATH_PART = '/image/upload/';

export const CLOUDINARY_VIDEO_UPLOAD_PATH_PART = '/video/upload/';

/** c_fit above this width/height looks soft with CSS `object-fit: cover` — skip `w_`/`h_`.*/
export const C_FIT_MAX_DIMENSION = 200;

/** Retina DPR for small-card c_fit URLs (`w_` stays at CSS display size). */
export const C_FIT_RETINA_DPR = 2;

export const CLOUDINARY_QUALITY_MODE = {
  AUTO: 'auto',
  BEST: 'auto:best',

  GOOD: 'auto:good',

  ECO: 'auto:eco',
  LOW: 'auto:low',
} as const;

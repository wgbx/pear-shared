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

export const CLOUDINARY_QUALITY_MODE = {
  /** Optimal balance between file size and visual quality. Defaults to `auto:good`, but may automatically switch to the more aggressive `auto:eco` mode. */
  AUTO: 'auto',
  /** Less aggressive algorithm. Produces larger files but better visual quality. Target audience: photography sites showcasing high-quality images. */
  BEST: 'auto:best',
  /** Relatively small file size while maintaining good visual quality. */
  GOOD: 'auto:good',
  /** More aggressive algorithm. Produces smaller files with slightly reduced visual quality. Target audience: high-traffic sites and social networks. */
  ECO: 'auto:eco',
  /** Most aggressive algorithm. Produces the smallest files with lower visual quality. Target audience: sites using thumbnails that link to higher-quality images. */
  LOW: 'auto:low',
} as const;

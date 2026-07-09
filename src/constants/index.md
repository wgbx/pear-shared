---
title: Constants
---

## StatusTag Map

`STATUS_TAG_MAP`

| Key       | Value     |
| --------- | --------- |
| `DEFAULT` | `default` |
| `SUCCESS` | `success` |
| `WARNING` | `warning` |
| `ERROR`   | `error`   |
| `INFO`    | `info`    |

## Cloudinary Quality

`CLOUDINARY_CLOUD_NAME`

Default Cloudinary cloud name (`dr9io1zjv`). Override with `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`.

`CLOUDINARY_IMAGE_UPLOAD_PATH_PART` / `CLOUDINARY_VIDEO_UPLOAD_PATH_PART`

Path segments used when normalizing Cloudinary upload URLs.

`C_FIT_MAX_DIMENSION`

When `c_fit` width or height exceeds this value (default `150`), optimization skips `w_`/`h_` to avoid soft images with CSS `object-fit: cover`.

`C_FIT_RETINA_DPR`

Default device pixel ratio (`2`) applied to small `c_fit` thumbnails.

`C_DEFAULT_SCALE_WIDTH`

Default `c_scale` width (`1024`) when no dimensions are provided. Matches katana `ImageWithFallback` fallback optimization.

`CLOUDINARY_QUALITY_AUTO`

The value `auto`, corresponding to `q_auto` in the Cloudinary URL, which enables the intelligent quality and encoding algorithms.

`CLOUDINARY_QUALITY_MODE`

Fine-tuning options for automatic quality selection:

| Key  | Value       | Description                                                                                                                                           | Target audience example                                   |
| ---- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| AUTO | `auto`      | Optimal balance between file size and visual quality. Defaults to the same as `GOOD`, but may automatically switch to the more aggressive `ECO` mode. | General                                                   |
| BEST | `auto:best` | Less aggressive algorithm. Produces larger files but better visual quality.                                                                           | Photography sites showcasing high-quality images          |
| GOOD | `auto:good` | Relatively small file size while maintaining good visual quality.                                                                                     | General                                                   |
| ECO  | `auto:eco`  | More aggressive algorithm. Produces smaller files with slightly reduced visual quality.                                                               | High-traffic sites and social networks                    |
| LOW  | `auto:low`  | Most aggressive algorithm. Produces the smallest files with lower visual quality.                                                                     | Sites using thumbnails that link to higher-quality images |

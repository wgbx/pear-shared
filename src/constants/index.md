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

<table>
  <thead>
    <tr>
      <th style="white-space: nowrap">Key</th>
      <th style="white-space: nowrap">Value</th>
      <th>Description</th>
      <th>Target audience example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="white-space: nowrap"><code>AUTO</code></td>
      <td style="white-space: nowrap"><code>auto</code></td>
      <td>Optimal balance between file size and visual quality. Defaults to the same as <code>GOOD</code>, but may automatically switch to the more aggressive <code>ECO</code> mode.</td>
      <td>General</td>
    </tr>
    <tr>
      <td style="white-space: nowrap"><code>BEST</code></td>
      <td style="white-space: nowrap"><code>auto:best</code></td>
      <td>Less aggressive algorithm. Produces larger files but better visual quality.</td>
      <td>Photography sites showcasing high-quality images</td>
    </tr>
    <tr>
      <td style="white-space: nowrap"><code>GOOD</code></td>
      <td style="white-space: nowrap"><code>auto:good</code></td>
      <td>Relatively small file size while maintaining good visual quality.</td>
      <td>General</td>
    </tr>
    <tr>
      <td style="white-space: nowrap"><code>ECO</code></td>
      <td style="white-space: nowrap"><code>auto:eco</code></td>
      <td>More aggressive algorithm. Produces smaller files with slightly reduced visual quality.</td>
      <td>High-traffic sites and social networks</td>
    </tr>
    <tr>
      <td style="white-space: nowrap"><code>LOW</code></td>
      <td style="white-space: nowrap"><code>auto:low</code></td>
      <td>Most aggressive algorithm. Produces the smallest files with lower visual quality.</td>
      <td>Sites using thumbnails that link to higher-quality images</td>
    </tr>
  </tbody>
</table>

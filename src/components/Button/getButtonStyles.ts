import { type Theme } from '@mui/material/styles';

import {
  BUTTON_APPEARANCE,
  BUTTON_SIZE_CONFIG,
  type ButtonAppearance,
  type ButtonSizeToken,
} from '@/constants/button';

export function getButtonStyles(
  theme: Theme,
  appearance: ButtonAppearance,
  sizeToken: ButtonSizeToken,
) {
  const sizeConfig = BUTTON_SIZE_CONFIG[sizeToken];
  const { palette, spacing } = theme;

  const base = {
    textTransform: 'none' as const,
    boxShadow: 'none',
    height: sizeConfig.height,
    minHeight: sizeConfig.height,
    padding: sizeConfig.paddingY
      ? `${sizeConfig.paddingY}px ${sizeConfig.paddingX}px`
      : `0 ${sizeConfig.paddingX}px`,
    borderRadius: spacing(sizeConfig.borderRadius),
    gap: `${sizeConfig.gap}px`,
    fontSize: sizeConfig.fontSize,
    fontWeight: sizeConfig.fontWeight,
    lineHeight: 1,
    '& .MuiButton-startIcon, & .MuiButton-endIcon': {
      margin: 0,
      '& svg, & .MuiSvgIcon-root': {
        fontSize: sizeConfig.iconSize,
        width: sizeConfig.iconSize,
        height: sizeConfig.iconSize,
      },
    },
  };

  if (appearance === BUTTON_APPEARANCE.PRIMARY) {
    return {
      ...base,
      backgroundColor: palette.green[900],
      color: palette.white.a100,
      '&:hover': {
        boxShadow: 'none',
        backgroundColor: palette.green[900],
        color: palette.white.a100,
        backgroundImage:
          'linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))',
      },
      '&:focus-visible': {
        boxShadow: 'none',
        backgroundColor: palette.green[900],
        color: palette.white.a100,
        backgroundImage: 'none',
      },
      [`@media (hover: none)`]: {
        '&:active': {
          boxShadow: 'none',
          backgroundColor: palette.green[900],
          color: palette.white.a100,
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))',
        },
      },
      '&.Mui-disabled': {
        backgroundColor: palette.shades[400],
        color: palette.white.a100,
        backgroundImage: 'none',
      },
    };
  }

  if (appearance === BUTTON_APPEARANCE.OUTLINE) {
    return {
      ...base,
      backgroundColor: palette.shades[50],
      color: palette.green[900],
      border: `1px solid ${palette.green[900]}`,
      '&:hover': {
        boxShadow: 'none',
        backgroundColor: palette.shades[50],
        color: palette.green[900],
        borderColor: palette.green[900],
        backgroundImage: `linear-gradient(${palette.black.a10}, ${palette.black.a10})`,
      },
      '&:focus-visible': {
        boxShadow: 'none',
        backgroundColor: palette.shades[50],
        color: palette.green[900],
        borderColor: palette.green[900],
        backgroundImage: 'none',
      },
      [`@media (hover: none)`]: {
        '&:active': {
          boxShadow: 'none',
          backgroundColor: palette.shades[50],
          color: palette.green[900],
          borderColor: palette.green[900],
          backgroundImage: `linear-gradient(${palette.black.a10}, ${palette.black.a10})`,
        },
      },
      '&.Mui-disabled': {
        backgroundColor: palette.shades[50],
        color: palette.shades[400],
        borderColor: palette.shades[400],
        backgroundImage: 'none',
      },
    };
  }

  return {
    ...base,
    backgroundColor: palette.green[50],
    color: palette.green[900],
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: palette.green[50],
      color: palette.green[900],
      backgroundImage: `linear-gradient(${palette.black.a10}, ${palette.black.a10})`,
    },
    '&:focus-visible': {
      boxShadow: 'none',
      backgroundColor: palette.green[50],
      color: palette.green[900],
      backgroundImage: 'none',
    },
    [`@media (hover: none)`]: {
      '&:active': {
        boxShadow: 'none',
        backgroundColor: palette.green[50],
        color: palette.green[900],
        backgroundImage: `linear-gradient(${palette.black.a10}, ${palette.black.a10})`,
      },
    },
    '&.Mui-disabled': {
      backgroundColor: palette.shades[50],
      color: palette.shades[400],
      backgroundImage: 'none',
    },
  };
}

import {
  createTheme,
  type Theme,
  type ThemeOptions,
} from '@mui/material/styles';

import { paletteColors } from './palette';

export function createPearTheme(options: ThemeOptions = {}): Theme {
  return createTheme({
    ...options,
    palette: {
      ...paletteColors,
      ...options.palette,
      text: {
        ...paletteColors.text,
        ...options.palette?.text,
      },
      branding: {
        ...paletteColors.branding,
        ...options.palette?.branding,
        facebook: {
          ...paletteColors.branding.facebook,
          ...options.palette?.branding?.facebook,
        },
      },
    },
  });
}

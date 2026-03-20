import { createTheme, type PaletteColor, type PaletteColorOptions, type Theme, type ThemeOptions } from '@mui/material/styles'

import { paletteColors } from './palette'

interface BrandPalette {
  black: string
  white: string
  green: string
  emphasis1: string
  emphasis2: string
  background: string
  error: string
  success: string
}

interface AlphaBlackPalette {
  a5: string
  a10: string
  a20: string
  a25: string
  a30: string
  a50: string
  a60: string
  a75: string
  a80: string
  a100: string
}

interface AlphaWhitePalette {
  a5: string
  a10: string
  a25: string
  a50: string
  a75: string
  a80: string
  a100: string
}

interface ShadesPalette {
  a5: string
  a10: string
  a25: string
  a50: string
  a75: string
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

interface BluePalette {
  a5: string
  a10: string
  a25: string
  a30: string
  a50: string
  a70: string
  a75: string
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

interface TonalPalette {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

type ExtendedPaletteColor = PaletteColor & {
  medium?: string
}

type ExtendedPaletteColorOptions = PaletteColorOptions & {
  medium?: string
}

interface BrandingPalette {
  facebook: ExtendedPaletteColor
}

interface BrandingPaletteOptions {
  facebook?: ExtendedPaletteColorOptions
}

declare module '@mui/material/styles' {
  interface TypeText {
    detail: string
  }

  interface Palette {
    brand: BrandPalette
    black: AlphaBlackPalette
    white: AlphaWhitePalette
    shades: ShadesPalette
    blue: BluePalette
    red: TonalPalette
    orange: TonalPalette
    green: TonalPalette
    plain: ExtendedPaletteColor
    emphasis1: ExtendedPaletteColor
    emphasis2: ExtendedPaletteColor
    transparent: ExtendedPaletteColor
    branding: BrandingPalette
  }

  interface PaletteOptions {
    brand?: Partial<BrandPalette>
    black?: Partial<AlphaBlackPalette>
    white?: Partial<AlphaWhitePalette>
    shades?: Partial<ShadesPalette>
    blue?: Partial<BluePalette>
    red?: Partial<TonalPalette>
    orange?: Partial<TonalPalette>
    green?: Partial<TonalPalette>
    plain?: ExtendedPaletteColorOptions
    emphasis1?: ExtendedPaletteColorOptions
    emphasis2?: ExtendedPaletteColorOptions
    transparent?: ExtendedPaletteColorOptions
    branding?: BrandingPaletteOptions
  }
}

export function createPearTheme(options: ThemeOptions = {}): Theme {
  return createTheme({
    ...options,
    palette: {
      ...paletteColors,
      ...options.palette,
      text: {
        ...paletteColors.text,
        ...options.palette?.text
      },
      branding: {
        ...paletteColors.branding,
        ...options.palette?.branding,
        facebook: {
          ...paletteColors.branding.facebook,
          ...options.palette?.branding?.facebook
        }
      }
    }
  })
}

import { alpha } from '@mui/material/styles'

const colors = {
  brand: {
    black: '#110921',
    white: '#FFFFFF',
    green: '#c3f570',
    emphasis1: '#F7F872',
    emphasis2: '#F1BBFF',
    background: '#F8F6F1',
    error: '#F51414',
    success: '#06D166'
  },
  black: {
    a5: 'rgba(0, 0, 0, 0.05)',
    a10: 'rgba(0, 0, 0, 0.1)',
    a20: 'rgba(0, 0, 0, 0.2)',
    a25: 'rgba(0, 0, 0, 0.25)',
    a30: 'rgba(0, 0, 0, 0.30)',
    a50: 'rgba(0, 0, 0, 0.5)',
    a60: 'rgba(0, 0, 0, 0.6)',
    a75: 'rgba(0, 0, 0, 0.75)',
    a80: 'rgba(0, 0, 0, 0.80)',
    a100: 'rgba(0, 0, 0, 1)'
  },
  white: {
    a5: 'rgba(255, 255, 255, 0.05)',
    a10: 'rgba(255, 255, 255, 0.1)',
    a25: 'rgba(255, 255, 255, 0.25)',
    a50: 'rgba(255, 255, 255, 0.5)',
    a75: 'rgba(255, 255, 255, 0.75)',
    a80: 'rgba(255, 255, 255, 0.80)',
    a100: 'rgba(255, 255, 255, 1)'
  },
  shades: {
    a5: 'rgba(0, 0, 0, 0.05)',
    a10: 'rgba(0, 0, 0, 0.1)',
    a25: 'rgba(0, 0, 0, 0.25)',
    a50: 'rgba(0, 0, 0, 0.5)',
    a75: 'rgba(0, 0, 0, 0.75)',
    50: '#FFFFFF',
    100: '#F2F2F2',
    200: '#E1E1E1',
    300: '#CFCFCF',
    400: '#ABABAB',
    500: '#858585',
    600: '#5D5D5D',
    700: '#4A4A4A',
    800: '#2D2D2D',
    900: '#000000'
  },
  blue: {
    a5: 'rgba(40, 94, 231, 0.05)',
    a10: 'rgba(40, 94, 231, 0.1)',
    a25: 'rgba(40, 94, 231, 0.25)',
    a30: 'rgba(40, 94, 231, 0.3)',
    a50: 'rgba(40, 94, 231, 0.5)',
    a70: 'rgba(40, 94, 231, 0.7)',
    a75: 'rgba(40, 94, 231, 0.75)',
    50: '#EFF7FF',
    100: '#CADCFF',
    200: '#9DB6FF',
    300: '#7495FE',
    400: '#5178F2',
    500: '#285EE7',
    600: '#2356DD',
    700: '#1B4BCF',
    800: '#0A41C3',
    900: '#002BAB'
  },
  red: {
    50: '#FAEAED',
    100: '#FFD9E0',
    200: '#FD929F',
    300: '#FF687A',
    400: '#FF4550',
    500: '#FF253F',
    600: '#F32039',
    700: '#E71D35',
    800: '#D7173A',
    900: '#BF1045'
  },
  orange: {
    50: '#FFF4E0',
    100: '#FFE2B4',
    200: '#FFCE82',
    300: '#FEB84D',
    400: '#FFA825',
    500: '#FF9A00',
    600: '#FB8F00',
    700: '#F67E00',
    800: '#EF6F00',
    900: '#E75403'
  },
  green: {
    50: '#EBF5EF',
    100: '#CBE7D5',
    200: '#A3D7B6',
    300: '#88C29C',
    400: '#5EB17B',
    500: '#419D5E',
    600: '#268E46',
    700: '#27813B',
    800: '#15702E',
    900: '#0B5612'
  }
}

export const paletteColors = {
  ...colors,
  plain: {
    main: colors.brand.black,
    dark: colors.shades['500'],
    medium: colors.shades['400'],
    light: colors.shades['300'],
    contrastText: colors.brand.white
  },
  primary: {
    main: colors.brand.black,
    dark: colors.shades['700'],
    medium: colors.shades['500'],
    light: colors.shades['400'],
    contrastText: colors.brand.white
  },
  secondary: {
    main: colors.shades['300'],
    dark: colors.shades['400'],
    medium: colors.shades['200'],
    light: colors.shades['100'],
    contrastText: colors.shades['700']
  },
  error: {
    main: colors.brand.error,
    dark: colors.red['900'],
    medium: colors.red['800'],
    light: colors.red['200'],
    contrastText: colors.brand.white
  },
  divider: colors.brand.background,
  emphasis1: {
    main: colors.brand.emphasis1,
    dark: '#C6C65B',
    medium: colors.brand.emphasis1,
    light: '#C6C65B',
    contrastText: colors.brand.black
  },
  emphasis2: {
    main: colors.brand.emphasis2,
    dark: '#9463a2',
    medium: colors.brand.emphasis2,
    light: '#9463a2',
    contrastText: colors.brand.black
  },
  transparent: {
    main: colors.white.a25,
    dark: colors.white.a50,
    medium: colors.white.a25,
    light: colors.white.a10,
    contrastText: colors.white.a100
  },
  text: {
    disabled: 'rgba(0, 0, 0, 0.38)',
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: colors.shades['800'],
    detail: colors.shades['800']
  },
  branding: {
    facebook: {
      main: '#1877F2',
      contrastText: '#ffffff',
      dark: '#005dd6',
      light: alpha('#1877F2', 0.6)
    }
  }
} as const

export const nameToColors = {
  primary: {
    light: paletteColors.blue['100'],
    medium: paletteColors.blue['300'],
    dark: paletteColors.blue['500']
  },
  secondary: {
    light: paletteColors.shades.a50,
    medium: paletteColors.shades.a75,
    dark: paletteColors.shades['800']
  },
  transparent: {
    light: paletteColors.white.a50,
    medium: paletteColors.white.a75,
    dark: paletteColors.white.a100
  },
  currency: {
    positive: paletteColors.green['800'],
    negative: paletteColors.red['800']
  },
  error: paletteColors.red['900'],
  info: paletteColors.shades['700'],
  warning: paletteColors.orange['900'],
  success: paletteColors.green['900']
} as const

export const Backgrounds = ['transparent', 'transparentSecondary', 'primary', 'secondary', 'none'] as const

export interface Background {
  background?: (typeof Backgrounds)[number]
}

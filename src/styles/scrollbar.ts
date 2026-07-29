import { type Theme } from '@mui/material/styles';

/**
 * Thin scrollbar styles for overflow containers.
 *
 * Spread into a scrollable container (e.g. `styled` / `sx`).
 *
 * @example
 * ```ts
 * styled(Box)(({ theme }) => ({
 *   maxHeight: 400,
 *   ...getThinScrollbarStyles(theme),
 * }));
 * ```
 */
export function getThinScrollbarStyles(theme: Theme) {
  return {
    overflowY: 'auto',
    scrollbarWidth: 'thin',
    scrollbarColor: `${theme.palette.shades[300]} transparent`,
    '&::-webkit-scrollbar': {
      width: 6,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.shades[300],
      borderRadius: theme.spacing(0.75),
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },
  } as const;
}

import { ThemeProvider } from '@mui/material/styles';
import { defineApp } from 'dumi';
import React from 'react';

import { createPearTheme } from './theme';

export default defineApp({
  rootContainer: (LastRootContainer: React.ReactNode) => {
    const theme = createPearTheme();
    return <ThemeProvider theme={theme}>{LastRootContainer}</ThemeProvider>;
  },
});

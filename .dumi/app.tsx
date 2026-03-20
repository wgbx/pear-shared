import { ThemeProvider } from '@mui/material/styles';
import { defineApp } from 'dumi';
import React from 'react';

import { NotificationContainer } from '@pear/shared';
import { createPearTheme } from './theme';

export default defineApp({
  rootContainer: (LastRootContainer: React.ReactNode) => {
    const theme = createPearTheme();
    return (
      <ThemeProvider theme={theme}>
        <>
          <NotificationContainer />
          {LastRootContainer}
        </>
      </ThemeProvider>
    );
  },
});

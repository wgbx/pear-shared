import { ThemeProvider } from '@mui/material/styles';
import type { ReactNode } from 'react';

import { AlertContainer } from '@bosinc/shared';
import { createPearTheme } from './theme';

export default {
  rootContainer: (LastRootContainer: ReactNode) => {
    const theme = createPearTheme();
    return (
      <ThemeProvider theme={theme}>
        <>
          <AlertContainer />
          {LastRootContainer}
        </>
      </ThemeProvider>
    );
  },
};

import { ThemeProvider } from '@mui/material/styles';
import type { ReactNode } from 'react';

import { NotificationContainer } from '@pear/shared';
import { createPearTheme } from './theme';

export default {
  rootContainer: (LastRootContainer: ReactNode) => {
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
};

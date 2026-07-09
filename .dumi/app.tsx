import { ThemeProvider } from '@mui/material/styles';
import { StrictMode, type ReactNode } from 'react';

import { AlertContainer } from '@bosinc/shared';
import { createPearTheme } from './theme';

import './global.less';

export default {
  rootContainer: (LastRootContainer: ReactNode) => {
    const theme = createPearTheme();
    return (
      <StrictMode>
        <ThemeProvider theme={theme}>
          <>
            <AlertContainer />
            {LastRootContainer}
          </>
        </ThemeProvider>
      </StrictMode>
    );
  },
};
